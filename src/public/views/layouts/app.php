<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : '7cat'; ?></title>
    <!-- フォントの読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Zen+Kurenaido&display=swap" rel="stylesheet">
    <!-- 共通のスタイルシート -->
    <link rel="stylesheet" href="/css/common.css">
    <!-- ページ固有のスタイルシート -->
    <?php if (isset($page_css)): ?>
    <?php if (is_array($page_css)): ?>
    <?php foreach ($page_css as $css): ?>
    <link rel="stylesheet" href="/css/<?php echo $css; ?>">
    <?php endforeach; ?>
    <?php else: ?>
    <link rel="stylesheet" href="/css/<?php echo $page_css; ?>">
    <?php endif; ?>
    <?php endif; ?>
    <!-- 共通のJavaScript -->
    <script src="/js/app.js"></script>
    <!-- ページ固有のJavaScript -->
    <?php if (isset($page_js)): ?>
    <script src="<?php echo $page_js; ?>"></script>
    <?php endif; ?>
</head>

<body class="common-body <?php echo isset($body_class) ? $body_class : ''; ?>">
    <header class="header-section">
        <div class="nav-menu" id="nav">
            <ul class="nav-menu-list">
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="/views/index.php">Home</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="/views/about.php">About</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="/views/works.php">Works</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="/views/contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </header>
    <main class="container">
        <?php
        if (isset($content)) {
            include $content;
        } else {
            $html_file = __DIR__ . '/../' . basename($_SERVER['PHP_SELF'], '.php') . '.html';
            if (file_exists($html_file)) {
                include $html_file;
            } else {
                echo "<!-- ファイルが見つかりません: " . $html_file . " -->";
            }
        }
        ?>
    </main>
</body>

</html>