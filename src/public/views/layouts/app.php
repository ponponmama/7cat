<!DOCTYPE html>
<html lang="ja" class="<?php echo isset($body_class) ? $body_class : ''; ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../css/common.css">
    <?php if (isset($page_css)) : ?>
    <link rel="stylesheet" href="<?php echo $page_css; ?>">
    <?php endif; ?>
</head>

<body class="<?php echo isset($body_class) ? $body_class : ''; ?>">
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
        $file_path = __DIR__ . '/../' . basename($_SERVER['PHP_SELF'], '.php') . '.html';
        echo "<!-- 読み込もうとしているファイル: " . $file_path . " -->";
        if (file_exists($file_path)) {
            include $file_path;
        } else {
            echo "<!-- ファイルが見つかりません -->";
        }
        ?>
    </main>
</body>

</html>