<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>7cat</title>
    <!-- フォントの読み込み -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Zen+Kurenaido&display=swap" rel="stylesheet">
    <!-- 各ページのスタイルシート -->
    <link rel="stylesheet" href="/css/portfolio.css">
    <link rel="stylesheet" href="/css/about.css">
    <link rel="stylesheet" href="/css/works.css">
    <link rel="stylesheet" href="/css/contact.css">
</head>

<body class="common-body">
    <header class=" header-section">
        <p class="header-logo">Erika Hara</p>
        <div class="nav-menu" id="nav">
            <ul class="nav-menu-list">
                <li class="nav-menu-item">
                    <a class="nav-menu-link" href="#">Home</a>
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
        <section id="home">
            <iframe src="/views/index.html" frameborder="0"></iframe>
        </section>

        <!-- Works Section -->
        <section id="works">
            <iframe src="/views/works.html" frameborder="0"></iframe>
        </section>

        <!-- About Section -->
        <section id="about">
            <iframe src="/views/about.html" frameborder="0"></iframe>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <iframe src="/views/contact.html" frameborder="0"></iframe>
        </section>
    </main>

    <!-- JavaScriptファイルの読み込み -->
    <script src="/js/portfolio.js"></script>
    <script src="/js/index.js"></script>
    <script src="/js/works.js"></script>
    <script src="/js/contact.js"></script>
    </main>
</body>

</html>