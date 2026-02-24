document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const params = new URLSearchParams(window.location.search);
    const success = params.get('success');
    const error = params.get('error');

    if (success === '1') {
        const div = document.createElement('div');
        div.className = 'success-message';
        div.textContent = '送信しました。お問い合わせありがとうございます。';
        form.parentNode.insertBefore(div, form);
        removeContactParams();
    } else if (error) {
        const messages = {
            empty: '名前・メールアドレス・メッセージをすべて入力してください。',
            invalid_email: '正しいメールアドレスを入力してください。',
            send_failed: '送信に失敗しました。しばらくしてから再度お試しください。'
        };
        const div = document.createElement('div');
        div.className = 'error-message';
        div.textContent = messages[error] || 'エラーが発生しました。';
        form.parentNode.insertBefore(div, form);
        removeContactParams();
    }

    function removeContactParams() {
        var cleanUrl = window.location.pathname + (window.location.hash || '#contact');
        if (window.history.replaceState) {
            window.history.replaceState(null, '', cleanUrl);
        }
    }
});
