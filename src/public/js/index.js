document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const title = document.querySelector('.title-entry-top');
    const paw1 = document.querySelector('.paw');
    const paw2 = document.querySelector('.paw-second');
    const pawTrails = [
        document.querySelector('.paw-trail-1'),
        document.querySelector('.paw-trail-2'),
        document.querySelector('.paw-trail-3'),
        document.querySelector('.paw-trail-4'),
        document.querySelector('.paw-trail-5'),
    ];
    const testBtn = document.getElementById('paw-test-btn');
    let animationInterval = null;
    let isTitleActive = false;
    let isPawActive = false;
    let pawActiveType = null; // 'left', 'right', または null

    // 5つの足跡要素を取得
    pawTrails.forEach((paw, i) => {
        paw.style.opacity = 0;
        paw.style.animation = 'none';
        paw.classList.remove(`paw-trail-${i+1}`);
    });

    function playPawAnimation() {
        // すべての足跡を一旦非表示＆アニメーションリセット
        pawTrails.forEach((paw, i) => {
            paw.style.opacity = 0;
            paw.style.animation = 'none';
            paw.classList.remove(`paw-trail-${i+1}`);
        });

        // 足跡を順番に表示
        let currentIndex = 0;
        const showNextPaw = () => {
            if (currentIndex < pawTrails.length) {
                // 前の足跡を非表示
                if (currentIndex > 0) {
                    const prevPaw = pawTrails[currentIndex - 1];
                    prevPaw.style.opacity = 0;
                    prevPaw.style.animation = 'none';
                    prevPaw.classList.remove(`paw-trail-${currentIndex}`);
                }

                // 現在の足跡を表示
                const currentPaw = pawTrails[currentIndex];
                currentPaw.style.opacity = 1;
                currentPaw.style.animation = 'none';
                currentPaw.classList.remove(`paw-trail-${currentIndex + 1}`);
                void currentPaw.offsetWidth;
                currentPaw.classList.add(`paw-trail-${currentIndex + 1}`);

                currentIndex++;
                setTimeout(showNextPaw, 600);
            } else {
                // 最後の足跡も一定時間後に消す
                setTimeout(() => {
                    const lastPaw = pawTrails[pawTrails.length - 1];
                    lastPaw.style.opacity = 0;
                    lastPaw.style.animation = 'none';
                    lastPaw.classList.remove(`paw-trail-${pawTrails.length}`);
                }, 600);
            }
        };

        // 最初の足跡から表示開始
        showNextPaw();
    }

    // ボタン押下時に再生
    if (testBtn) {
        testBtn.addEventListener('click', playPawAnimation);
    }

    // 足跡のアニメーションを開始する関数
    function startPawTrailAnimation() {
        const paw2Rect = paw2.getBoundingClientRect();
        const rect = container.getBoundingClientRect();

        // 1つ目の足跡のアニメーションを開始
        pawTrails[0].style.left = `${paw2Rect.left - rect.left}px`;
        pawTrails[0].style.top = `${paw2Rect.top - rect.top}px`;
        pawTrails[0].style.animation = 'none';
        void pawTrails[0].offsetWidth;
        pawTrails[0].style.animation = 'pawTrail1 2s ease-in-out forwards';

        // 2つ目の足跡のアニメーションを開始
        setTimeout(() => {
            pawTrails[1].style.left = `${paw2Rect.left - rect.left}px`;
            pawTrails[1].style.top = `${paw2Rect.top - rect.top}px`;
            pawTrails[1].style.animation = 'none';
            void pawTrails[1].offsetWidth;
            pawTrails[1].style.animation = 'pawTrail2 2s ease-in-out forwards';

            // 3つ目の足跡のアニメーションを開始
            setTimeout(() => {
                pawTrails[2].style.left = `${paw2Rect.left - rect.left}px`;
                pawTrails[2].style.top = `${paw2Rect.top - rect.top}px`;
                pawTrails[2].style.animation = 'none';
                void pawTrails[2].offsetWidth;
                pawTrails[2].style.animation = 'pawTrail3 2s ease-in-out forwards';
            }, 1000);
        }, 1000);
    }

    // マウス移動時の処理
    document.addEventListener('mousemove', (e) => {
        // どんな場合でもまず光る〇の位置を更新
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        container.style.setProperty('--mouse-x', `${x}%`);
        container.style.setProperty('--mouse-y', `${y}%`);

        const nav = document.querySelector('#nav');
        if (nav && nav.contains(e.target)) {
            title.style.color = 'aliceblue';
            title.style.textShadow = '0 0 10px rgba(240, 248, 255, 0.8)';
            isTitleActive = false;
            return;
        }
        const titleRect = title.getBoundingClientRect();

        // タイトルの中心座標
        const titleCenterX = titleRect.left + titleRect.width / 2;
        const titleCenterY = titleRect.top + titleRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const titleDistance = Math.hypot(mouseX - titleCenterX, mouseY - titleCenterY);
        const titleActiveRange = 60; // px

        // タイトルの矩形範囲で判定
        if (
            mouseX >= titleRect.left &&
            mouseX <= titleRect.right &&
            mouseY >= titleRect.top &&
            mouseY <= titleRect.bottom
        ) {
            // 色変化
            const ratio = x / 100;
            const r = Math.round(0 + (255 - 0) * ratio);
            const g = Math.round(0 + (0 - 0) * ratio);
            const b = Math.round(255 + (0 - 255) * ratio);
            title.style.color = `rgb(${r}, ${g}, ${b})`;
            title.style.textShadow = `0 0 10px rgba(${r}, ${g}, ${b}, 0.8)`;
            isTitleActive = true;
        } else {
            if (isTitleActive) {
                title.style.color = 'aliceblue';
                title.style.textShadow = '0 0 10px rgba(240, 248, 255, 0.8)';
                isTitleActive = false;
            }
        }

        // 肉球の位置を取得
        const paw1Rect = paw1.getBoundingClientRect();
        const paw2Rect = paw2.getBoundingClientRect();
        const paw1CenterX = paw1Rect.left + paw1Rect.width / 2;
        const paw1CenterY = paw1Rect.top + paw1Rect.height / 2;
        const paw2CenterX = paw2Rect.left + paw2Rect.width / 2;
        const paw2CenterY = paw2Rect.top + paw2Rect.height / 2;
        const paw1Distance = Math.hypot(mouseX - paw1CenterX, mouseY - paw1CenterY);
        const paw2Distance = Math.hypot(mouseX - paw2CenterX, mouseY - paw2CenterY);
        const pawActiveRange = 50; // px

        // 肉球1の制御
        if (paw1Distance < pawActiveRange) {
            paw1.style.animation = 'float1 3s ease-in-out infinite, shake1 0.5s ease-in-out infinite';
            const baseOpacity = 0.2;
            const hoverOpacity = 0.6;
            const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - paw1Distance / pawActiveRange);
            paw1.style.opacity = opacity;
        } else {
            paw1.style.animation = 'float1 3s ease-in-out infinite';
            paw1.style.opacity = 0.2;
        }

        // 肉球2の制御
        if (paw2Distance < pawActiveRange) {
            paw2.style.animation = 'float2 3s ease-in-out infinite, shake2 0.5s ease-in-out infinite';
            const baseOpacity = 0.2;
            const hoverOpacity = 0.6;
            const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - paw2Distance / pawActiveRange);
            paw2.style.opacity = opacity;
        } else {
            paw2.style.animation = 'float2 3s ease-in-out infinite';
            paw2.style.opacity = 0.2;
        }

        // 足跡アニメーション管理
        if (paw1Distance < pawActiveRange) {
            if (pawActiveType !== 'left') {
                clearInterval(animationInterval);
                animationInterval = null;
                pawTrails.forEach((paw, i) => {
                    paw.style.opacity = 0;
                    paw.style.animation = 'none';
                    paw.classList.remove(`paw-trail-${i+1}`);
                });
                playPawAnimation();
                animationInterval = setInterval(playPawAnimation, 3000);
                pawActiveType = 'left';
            }
        } else if (paw2Distance < pawActiveRange) {
            if (pawActiveType !== 'right') {
                clearInterval(animationInterval);
                animationInterval = null;
                pawTrails.forEach((paw, i) => {
                    paw.style.opacity = 0;
                    paw.style.animation = 'none';
                    paw.classList.remove(`paw-trail-${i+1}`);
                });
                playPawAnimation();
                animationInterval = setInterval(playPawAnimation, 3000);
                pawActiveType = 'right';
            }
        } else {
            if (pawActiveType !== null) {
                clearInterval(animationInterval);
                animationInterval = null;
                pawTrails.forEach((paw, i) => {
                    paw.style.opacity = 0;
                    paw.style.animation = 'none';
                    paw.classList.remove(`paw-trail-${i+1}`);
                });
                pawActiveType = null;
            }
        }
    });

    // マウスがtitle-entry-topから離れた時の処理
    title.addEventListener('mouseleave', () => {
        title.style.color = 'aliceblue';
        title.style.textShadow = '0 0 10px rgba(240, 248, 255, 0.8)';
        title.style.setProperty('--mouse-x', '50%');
        title.style.setProperty('--mouse-y', '50%');
    });
});
