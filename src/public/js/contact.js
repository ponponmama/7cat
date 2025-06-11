document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const guide = document.querySelector('.contact-guide');

    // PHPから渡されたメッセージを表示
    if (typeof js_vars !== 'undefined') {
        if (js_vars.error_message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = js_vars.error_message;
            form.parentNode.insertBefore(errorDiv, form);
        }
        if (js_vars.success_message) {
            const successDiv = document.createElement('div');
            successDiv.className = 'success-message';
            successDiv.textContent = js_vars.success_message;
            form.parentNode.insertBefore(successDiv, form);
        }
    }
});
