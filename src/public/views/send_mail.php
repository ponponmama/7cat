<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

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

// メールの設定
$to = '7cat_engineer@gmail.com';
$subject = 'ポートフォリオサイトからのお問い合わせ';
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// メール本文の作成
$email_content = "名前: {$name}\n";
$email_content .= "メールアドレス: {$email}\n\n";
$email_content .= "メッセージ:\n{$message}";

// メール送信
if (mail($to, $subject, $email_content, $headers)) {
    header('Location: /views/contact.php?success=true');
} else {
    header('Location: /views/contact.php?error=send_failed');
}
exit;
