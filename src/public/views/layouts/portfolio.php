<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erika Hara's Portfolio</title>
    <!-- フォントの読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Zen+Kurenaido&display=swap" rel="stylesheet">
    <!-- 各ページのスタイルシート -->
    <link rel="stylesheet" href="/css/index.css">
    <link rel="stylesheet" href="/css/about.css">
    <link rel="stylesheet" href="/css/works.css">
    <link rel="stylesheet" href="/css/contact.css">
    <!-- 共通のスタイルシート（最後に読み込んでメディアクエリを優先） -->
    <link rel="stylesheet" href="/css/portfolio.css">
    <!-- 共通のJavaScript -->
    <script src="/js/portfolio.js"></script>
</head>

<body class="common-body">
    <header class=" header-section">
        <div class="nav-menu" id="nav">
            <ul class="nav-menu-list">
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="#home">Home</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="#works">Works</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="#about">About</a>
                </li>
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </header>
    <main class="container">
        <!-- Home Section -->
        <section class="page-section" id="home">
            <?php include __DIR__.'/../parts/index.html'; ?>
        </section>

        <!-- Works Section -->
        <section class="page-section" id="works">
            <?php include __DIR__.'/../parts/works.html'; ?>
        </section>

        <!-- About Section -->
        <section class="page-section" id="about">
            <?php include __DIR__.'/../parts/about.html'; ?>
        </section>

        <!-- Contact Section -->
        <section class="page-section" id="contact">
            <?php include __DIR__.'/../parts/contact.html'; ?>
        </section>
    </main>

    <!-- JavaScriptファイルの読み込み -->
    <script src="/js/works.js"></script>
    <script src="/js/contact.js"></script>
    </main>
</body>

</html>