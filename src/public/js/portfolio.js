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
