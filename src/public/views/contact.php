<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$page_title = 'Contact';
$page_css = 'contact.css';

// エラーメッセージの設定
$error = $_GET['error'] ?? '';
$error_message = $_GET['message'] ?? '';
$success = $_GET['success'] ?? false;

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

$content = __DIR__ . '/parts/contact.html';
include __DIR__ . '/layouts/portfolio.php';
?>