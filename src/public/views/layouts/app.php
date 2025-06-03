<!DOCTYPE html>
<html lang="ja" class="<?php echo isset($body_class) ? $body_class : ''; ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap"
        onload="this.rel='stylesheet'; document.body.classList.add('fonts-loaded');">
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet">
        <script>
        document.body.classList.add('fonts-loaded');
        </script>
    </noscript>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
        onload="this.rel='stylesheet'; document.body.classList.add('fonts-loaded');">
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet">
        <script>
        document.body.classList.add('fonts-loaded');
        </script>
    </noscript>
    <link rel="stylesheet" href="/css/common.css">
    <?php if (isset($page_css)) : ?>
    <link rel="stylesheet" href="/css/<?php echo basename($page_css); ?>">
    <?php endif; ?>
</head>

<body class="common-body">
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
                    <a class="nav-menu-link" href="/views/contact.php">Contact</a>
                </li>
            </ul>
        </div>
    </header>
    <main class="container">
        <?php
        $html_file = __DIR__ . '/../' . basename($_SERVER['PHP_SELF'], '.php') . '.html';
        if (file_exists($html_file)) {
            include $html_file;
        } else {
            echo "<!-- ファイルが見つかりません: " . $html_file . " -->";
        }
        ?>
    </main>
</body>

</html>