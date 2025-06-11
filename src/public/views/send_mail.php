<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../../vendor/autoload.php';

// 環境変数の確認
error_log("MAIL_HOST: " . getenv('MAIL_HOST'));
error_log("MAIL_USERNAME: " . getenv('MAIL_USERNAME'));
error_log("MAIL_PASSWORD: " . getenv('MAIL_PASSWORD'));
error_log("MAIL_FROM_ADDRESS: " . getenv('MAIL_FROM_ADDRESS'));
error_log("MAIL_FROM_NAME: " . getenv('MAIL_FROM_NAME'));

// POSTデータの取得
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// バリデーション
if (empty($name) || empty($email) || empty($message)) {
    header('Location: /views/contact.php?error=empty_fields');
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /views/contact.php?error=invalid_email');
    exit;
}

// PHPMailerの設定
$mail = new PHPMailer(true);

try {
    // サーバーの設定
    $mail->isSMTP();
    $mail->Host = getenv('MAIL_HOST');
    $mail->SMTPAuth = true;
    $mail->Username = getenv('MAIL_USERNAME');
    $mail->Password = getenv('MAIL_PASSWORD');
    $mail->SMTPSecure = getenv('MAIL_ENCRYPTION');
    $mail->Port = getenv('MAIL_PORT');
    $mail->CharSet = 'UTF-8';

    // デバッグモードを有効化
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer Debug: $str");
    };

    // 送信元と送信先の設定
    $from_address = getenv('MAIL_FROM_ADDRESS');
    $from_name = getenv('MAIL_FROM_NAME');

    if (empty($from_address) || empty($from_name)) {
        throw new Exception('送信元のメールアドレスまたは名前が設定されていません。');
    }

    $mail->setFrom($from_address, $from_name);
    $mail->addAddress($from_address);
    $mail->addReplyTo($email, $name);

    // メールの内容
    $mail->isHTML(true);
    $mail->Subject = 'ポートフォリオサイトからのお問い合わせ';
    $mail->Body = "
        <h2>お問い合わせ内容</h2>
        <p><strong>名前:</strong> {$name}</p>
        <p><strong>メールアドレス:</strong> {$email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->send();
    header('Location: /views/contact.php?success=true');
} catch (Exception $e) {
    error_log("Mail Error: " . $e->getMessage());
    header('Location: /views/contact.php?error=send_failed&message=' . urlencode($e->getMessage()));
}
exit;