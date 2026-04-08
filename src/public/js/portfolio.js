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
        var activeId = '';
        var sectionOffsets = [];

        function recomputeSectionOffsets() {
            sectionOffsets = [];
            for (var i = 0; i < sections.length; i++) {
                sectionOffsets.push({
                    id: sections[i].id,
                    top: sections[i].offsetTop
                });
            }
        }

        function setCurrentLink(currentId) {
            if (currentId === activeId) return;
            activeId = currentId;
            for (var j = 0; j < navLinks.length; j++) {
                var href = navLinks[j].getAttribute('href') || '';
                if (href === '#' + currentId) {
                    navLinks[j].classList.add('current');
                } else {
                    navLinks[j].classList.remove('current');
                }
            }
        }

        function updateCurrentByPosition() {
            if (!sectionOffsets.length) return;
            var currentId = sectionOffsets[0].id;
            var currentY = window.pageYOffset + triggerLine;
            for (var i = 0; i < sectionOffsets.length; i++) {
                if (sectionOffsets[i].top <= currentY) {
                    currentId = sectionOffsets[i].id;
                } else {
                    break;
                }
            }
            setCurrentLink(currentId);
        }

        recomputeSectionOffsets();
        updateCurrentByPosition();

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                var bestId = '';
                var bestDelta = Number.POSITIVE_INFINITY;
                for (var i = 0; i < entries.length; i++) {
                    var entry = entries[i];
                    if (!entry.isIntersecting) continue;
                    var delta = Math.abs(entry.boundingClientRect.top - triggerLine);
                    if (delta < bestDelta) {
                        bestDelta = delta;
                        bestId = entry.target.id;
                    }
                }
                if (bestId) {
                    setCurrentLink(bestId);
                } else {
                    updateCurrentByPosition();
                }
            }, {
                root: null,
                rootMargin: (-triggerLine) + 'px 0px -40% 0px',
                threshold: 0
            });
            for (var k = 0; k < sections.length; k++) {
                observer.observe(sections[k]);
            }
            window.addEventListener('resize', function () {
                recomputeSectionOffsets();
                updateCurrentByPosition();
            });
            window.addEventListener('load', function () {
                recomputeSectionOffsets();
                updateCurrentByPosition();
            });
        } else {
            window.addEventListener('scroll', updateCurrentByPosition, { passive: true });
            window.addEventListener('resize', function () {
                recomputeSectionOffsets();
                updateCurrentByPosition();
            });
            window.addEventListener('load', function () {
                recomputeSectionOffsets();
                updateCurrentByPosition();
            });
        }
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
