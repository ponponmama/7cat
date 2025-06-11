<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

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

    // 送信元と送信先の設定
    $mail->setFrom(getenv('MAIL_FROM_ADDRESS'), getenv('MAIL_FROM_NAME'));
    $mail->addAddress(getenv('MAIL_FROM_ADDRESS'));
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
    header('Location: /views/contact.php?error=send_failed');
}
exit;