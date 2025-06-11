<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$page_title = 'Contact';
$page_css = 'contact.css';

// エラーメッセージの設定
$error_message = '';
if (isset($_GET['error'])) {
    switch ($_GET['error']) {
        case 'empty_fields':
            $error_message = 'すべての項目を入力してください。';
            break;
        case 'invalid_email':
            $error_message = '有効なメールアドレスを入力してください。';
            break;
        case 'send_failed':
            $error_message = 'メールの送信に失敗しました。時間をおいて再度お試しください。';
            break;
    }
}

// 成功メッセージの設定
$success_message = '';
if (isset($_GET['success']) && $_GET['success'] === 'true') {
    $success_message = 'メッセージを送信しました。ありがとうございます。';
}

// メッセージをJavaScript変数として設定
$page_js = '/js/contact.js';
$js_vars = [
    'error_message' => $error_message,
    'success_message' => $success_message
];

$content = __DIR__ . '/contact.html';
include __DIR__ . '/layouts/app.php';
?>