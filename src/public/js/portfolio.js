// フォント読み込みの処理
if (document.fonts) {
    // フォントが読み込まれるまで待機
    document.fonts.ready.then(function () {
        // フォントが読み込まれたら表示
        document.documentElement.classList.add('fonts-loaded');
    }).catch(function (error) {
        // エラーが発生した場合でも表示
        console.error('Font loading error:', error);
        document.documentElement.classList.add('fonts-loaded');
    });
} else {
    // 古いブラウザ用のフォールバック
    window.addEventListener('load', function () {
        document.documentElement.classList.add('fonts-loaded');
    });
}

// スクロール位置に応じてナビの current クラスを切り替える
(function () {
    function init() {
        var navLinks = document.querySelectorAll('.nav-menu-link');
        var sections = document.querySelectorAll('.page-section');
        if (!navLinks.length || !sections.length) return;

        var headerHeight = 60;
        var triggerLine = headerHeight + 80;

        function updateCurrentByScroll() {
            var currentId = sections[0].id;
            for (var i = 0; i < sections.length; i++) {
                var rect = sections[i].getBoundingClientRect();
                if (rect.top <= triggerLine && rect.bottom > triggerLine) {
                    currentId = sections[i].id;
                    break;
                }
            }
            for (var j = 0; j < navLinks.length; j++) {
                var href = navLinks[j].getAttribute('href') || '';
                if (href === '#' + currentId) {
                    navLinks[j].classList.add('current');
                } else {
                    navLinks[j].classList.remove('current');
                }
            }
        }

        updateCurrentByScroll();
        window.addEventListener('scroll', updateCurrentByScroll);
        window.addEventListener('resize', updateCurrentByScroll);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

// リロード時：ハッシュがあればそのセクションの先頭（page-title が見える位置）にスクロール、なければページ最上部へ
(function () {
    function scrollOnLoad() {
        var hash = window.location.hash;
        var headerHeight = 60;
        if (hash) {
            var el = document.getElementById(hash.replace('#', ''));
            if (el) {
                var top = el.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo(0, top - headerHeight);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scrollOnLoad);
    } else {
        scrollOnLoad();
    }
})();
