<?php
/**
 * お問い合わせフォーム送信（さくらの送信メール / mb_send_mail 使用）
 * 送信先・送信元はさくらで作成したアドレスにしてください。
 */
$to_address = 'postmaster@7cat.sakura.ne.jp';
$from_name  = 'Erika Hara（原 絵里加）';

$name    = isset($_POST['name']) ? trim($_POST['name']) : '';
$email   = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// バリデーション
if ($name === '' || $email === '' || $message === '') {
    header('Location: /?error=empty#contact');
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /?error=invalid_email#contact');
    exit;
}

mb_language('Japanese');
mb_internal_encoding('UTF-8');

$subject_owner = 'ポートフォリオサイトからのお問い合わせ';
$body_owner    = "名前: {$name}\nメールアドレス: {$email}\n\nメッセージ:\n" . $message;
$headers_owner = "From: {$to_address}\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=ISO-2022-JP";

// 自分あて：お問い合わせ内容
$sent_owner = mb_send_mail($to_address, $subject_owner, $body_owner, $headers_owner);

// 送信者あて：自動返信（シンプル版）
$subject_reply = '【7cat】お問い合わせを受け付けました';
$body_reply    = "お問い合わせいただきありがとうございます。\n\n"
    . "内容を確認のうえ、改めてご連絡いたします。\n少々お待ちください。\n\n"
    . "※このメールは自動送信です。このメールに返信されても対応できません。\n\n"
    . "{$from_name}\nhttps://7cat.sakura.ne.jp/";
$headers_reply = "From: {$to_address}\r\nContent-Type: text/plain; charset=ISO-2022-JP";
$sent_reply    = mb_send_mail($email, $subject_reply, $body_reply, $headers_reply);

if ($sent_owner) {
    header('Location: /?success=1#contact');
} else {
    header('Location: /?error=send_failed#contact');
}
exit;
