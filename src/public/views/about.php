<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$page_title = 'About Me';
$page_css = 'about.css';
$content = __DIR__ . '/about.html';
include __DIR__ . '/layouts/app.php';
?>