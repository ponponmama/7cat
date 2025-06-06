document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const title = document.querySelector('.title-entry-top');
    const paw1 = document.querySelector('.paw');
    const paw2 = document.querySelector('.paw-second');
    const pawTrails = [
        document.getElementById('paw-trail-1'),
        document.getElementById('paw-trail-2'),
        document.getElementById('paw-trail-3'),
        document.getElementById('paw-trail-4'),
        document.getElementById('paw-trail-5'),
        document.getElementById('paw-trail-6'),
        document.getElementById('paw-trail-7'),
        document.getElementById('paw-trail-8'),
    ];
    const testBtn = document.getElementById('paw-test-btn');
    let animationInterval = null;
    let isTitleActive = false;
    let isPawActive = false;
    let pawActiveType = null; // 'left', 'right', または null
    let step = 0;
    let isAnimating = false;  // アニメーション中かどうかのフラグ

    // 8つの足跡要素を取得
    pawTrails.forEach((paw, i) => {
        paw.style.opacity = 0;
        paw.style.animation = 'none';
        paw.classList.remove(`paw-trail-${i+1}`);
    });

    // アニメーションの定義
    const animations = [
        { translateY: '-100px' },
        { translateY: '-200px' },
        { translateY: '-300px' },
        { translateY: '-400px' },
        { translateY: '-500px' },
        { translateY: '-600px' },
        { translateY: '-700px' },
        { translateY: '-800px' }
    ];

    // 足跡の表示位置リスト（8歩分）
    const positions = [
        { left: '53vw', bottom: '5%' },
        { left: '47vw', bottom: '10%' },
        { left: '53vw', bottom: '15%' },
        { left: '47vw', bottom: '20%' },
        { left: '53vw', bottom: '25%' },
        { left: '47vw', bottom: '30%' },
        { left: '53vw', bottom: '35%' },
        { left: '47vw', bottom: '40%' },
    ];

    function showNextPaw() {
        if (!isAnimating) return;

        const paw = pawTrails[step];
        const pos = positions[step];
        const anim = animations[step];

        // 位置とアニメーションを設定
        paw.style.left = pos.left;
        paw.style.bottom = pos.bottom;
        paw.style.opacity = '1';

        // アニメーションを適用
        paw.animate([
            { opacity: 1, transform: 'translateX(0px) translateY(0)' },
            { opacity: 0, transform: `translateX(0px) ${anim.translateY}` }
        ], {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

        step++;
        if (step < positions.length) {
            setTimeout(showNextPaw, 800);
        } else {
            isAnimating = false;
            step = 0;
            // ゆらゆらアニメーション
            title.animate([
                { transform: 'rotate(0deg) scale(1,1)' },
                { transform: 'rotate(-8deg) scale(1.05,0.95)' },
                { transform: 'rotate(8deg) scale(0.95,1.05)' },
                { transform: 'rotate(-6deg) scale(1.04,0.96)' },
                { transform: 'rotate(6deg) scale(0.96,1.04)' },
                { transform: 'rotate(-4deg) scale(1.03,0.97)' },
                { transform: 'rotate(4deg) scale(0.97,1.03)' },
                { transform: 'rotate(-2deg) scale(1.02,0.98)' },
                { transform: 'rotate(2deg) scale(0.98,1.02)' },
                { transform: 'rotate(-1deg) scale(1.01,0.99)' },
                { transform: 'rotate(0deg) scale(1,1)' }
            ], {
                duration: 1200,
                easing: 'cubic-bezier(.36,.07,.19,.97)',
                fill: 'forwards'
            });

            // 鮮やかな黄色で点滅（色と影を交互に切り替え）
            const blinkKeyframes = [
                { color: '#ffe600', textShadow: '0 0 20px #ffe600, 0 0 40px #fff200', offset: 0 },
                { color: '#fff',    textShadow: '0 0 0px #fff', offset: 0.5 },
                { color: '#ffe600', textShadow: '0 0 20px #ffe600, 0 0 40px #fff200', offset: 1 }
            ];
            const blink = title.animate(
                blinkKeyframes,
                {
                    duration: 150, // 1回の点滅
                    iterations: 3  // 5回点滅
                }
            );

            // アニメーション終了後に色を元に戻す
            blink.onfinish = () => {
                title.style.color = 'aliceblue';
                title.style.textShadow = '0 0 10px rgba(240, 248, 255, 0.8)';
            };
        }
    }

    // ボタン押下時に再生
    if (testBtn) {
        testBtn.addEventListener('click', showNextPaw);
    }

    // 足跡のアニメーションを開始する関数
    function startPawTrailAnimation() {
        const paw2Rect = paw2.getBoundingClientRect();
        const rect = container.getBoundingClientRect();

        // 1つ目の足跡のアニメーションを開始
        pawTrails[0].style.left = `${paw2Rect.left - rect.left}px`;
        pawTrails[0].style.top = `${paw2Rect.top - rect.top}px`;
        pawTrails[0].animate([
            { opacity: 1, transform: 'translateX(0px) translateY(0)' },
            { opacity: 0, transform: 'translateX(0px) translateY(-100px)' }
        ], {
            duration: 8000,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

        // 2つ目の足跡のアニメーションを開始
        setTimeout(() => {
            pawTrails[1].style.left = `${paw2Rect.left - rect.left}px`;
            pawTrails[1].style.top = `${paw2Rect.top - rect.top}px`;
            pawTrails[1].animate([
                { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                { opacity: 0, transform: 'translateX(0px) translateY(-200px)' }
            ], {
                duration: 8000,
                easing: 'ease-in-out',
                fill: 'forwards'
            });

            // 3つ目の足跡のアニメーションを開始
            setTimeout(() => {
                pawTrails[2].style.left = `${paw2Rect.left - rect.left}px`;
                pawTrails[2].style.top = `${paw2Rect.top - rect.top}px`;
                pawTrails[2].animate([
                    { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                    { opacity: 0, transform: 'translateX(0px) translateY(-300px)' }
                ], {
                    duration: 8000,
                    easing: 'ease-in-out',
                    fill: 'forwards'
                });

                // 4つ目の足跡のアニメーションを開始
                setTimeout(() => {
                    pawTrails[3].style.left = `${paw2Rect.left - rect.left}px`;
                    pawTrails[3].style.top = `${paw2Rect.top - rect.top}px`;
                    pawTrails[3].animate([
                        { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                        { opacity: 0, transform: 'translateX(0px) translateY(-400px)' }
                    ], {
                        duration: 8000,
                        easing: 'ease-in-out',
                        fill: 'forwards'
                    });

                    // 5つ目の足跡のアニメーションを開始
                    setTimeout(() => {
                        pawTrails[4].style.left = `${paw2Rect.left - rect.left}px`;
                        pawTrails[4].style.top = `${paw2Rect.top - rect.top}px`;
                        pawTrails[4].animate([
                            { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                            { opacity: 0, transform: 'translateX(0px) translateY(-500px)' }
                        ], {
                            duration: 8000,
                            easing: 'ease-in-out',
                            fill: 'forwards'
                        });

                        // 6つ目の足跡のアニメーションを開始
                        setTimeout(() => {
                            pawTrails[5].style.left = `${paw2Rect.left - rect.left}px`;
                            pawTrails[5].style.top = `${paw2Rect.top - rect.top}px`;
                            pawTrails[5].animate([
                                { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                                { opacity: 0, transform: 'translateX(0px) translateY(-600px)' }
                            ], {
                                duration: 8000,
                                easing: 'ease-in-out',
                                fill: 'forwards'
                            });

                            // 7つ目の足跡のアニメーションを開始
                            setTimeout(() => {
                                pawTrails[6].style.left = `${paw2Rect.left - rect.left}px`;
                                pawTrails[6].style.top = `${paw2Rect.top - rect.top}px`;
                                pawTrails[6].animate([
                                    { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                                    { opacity: 0, transform: 'translateX(0px) translateY(-700px)' }
                                ], {
                                    duration: 8000,
                                    easing: 'ease-in-out',
                                    fill: 'forwards'
                                });

                                // 8つ目の足跡のアニメーションを開始
                                setTimeout(() => {
                                    pawTrails[7].style.left = `${paw2Rect.left - rect.left}px`;
                                    pawTrails[7].style.top = `${paw2Rect.top - rect.top}px`;
                                    pawTrails[7].animate([
                                        { opacity: 1, transform: 'translateX(0px) translateY(0)' },
                                        { opacity: 0, transform: 'translateX(0px) translateY(-800px)' }
                                    ], {
                                        duration: 8000,
                                        easing: 'ease-in-out',
                                        fill: 'forwards'
                                    });
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
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
            if (!isAnimating) {
                // 色変化（黄色→元色→赤→青）
                const ratio = x / 100;
                let r, g, b;
                if (ratio < 1/3) {
                    // 黄色→元色
                    const t = ratio / (1/3);
                    r = Math.round(220 + (127 - 220) * t);
                    g = Math.round(180 + (167 - 180) * t);
                    b = Math.round(40 + (217 - 40) * t);
                } else if (ratio < 2/3) {
                    // 元色→赤
                    const t = (ratio - 1/3) / (1/3);
                    r = Math.round(127 + (200 - 127) * t);
                    g = Math.round(167 + (40 - 167) * t);
                    b = Math.round(217 + (40 - 217) * t);
                } else {
                    // 赤→青
                    const t = (ratio - 2/3) / (1/3);
                    r = Math.round(200 + (0 - 200) * t);
                    g = Math.round(40 + (60 - 40) * t);
                    b = Math.round(40 + (180 - 40) * t);
                }
                title.style.color = `rgb(${r}, ${g}, ${b})`;
                title.style.textShadow = `0 0 10px rgba(${r}, ${g}, ${b}, 1.0)`;
                isTitleActive = true;
            } else {
                // アニメーション中はデフォルト色
                title.style.color = 'aliceblue';
                title.style.textShadow = '0 0 10px rgba(240, 248, 255, 0.8)';
                isTitleActive = false;
            }
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

        // 肉球のアニメーション定義
        const floatAnimation = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-15px)' },
            { transform: 'translateY(0)' }
        ];

        const shakeAnimation = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-2px)' },
            { transform: 'translateX(2px)' },
            { transform: 'translateX(-2px)' },
            { transform: 'translateX(0)' }
        ];

        // 現在実行中のアニメーションを保持
        let currentPaw1Animations = [];
        let currentPaw2Animations = [];

        // 足跡アニメーション中は肉球のアニメーションを無効化
        if (!isAnimating) {
            // 肉球1の制御
            if (paw1Distance < pawActiveRange && paw2Distance >= pawActiveRange) {
                const baseOpacity = 0.2;
                const hoverOpacity = 0.6;
                const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - paw1Distance / pawActiveRange);
                paw1.style.opacity = opacity;

                // 既存のアニメーションを停止
                currentPaw1Animations.forEach(anim => anim.cancel());
                currentPaw1Animations = [];

                // 浮遊アニメーション
                currentPaw1Animations.push(paw1.animate(floatAnimation, {
                    duration: 3000,
                    iterations: Infinity,
                    easing: 'ease-in-out'
                }));

                // シェイクアニメーション
                currentPaw1Animations.push(paw1.animate(shakeAnimation, {
                    duration: 500,
                    iterations: Infinity,
                    easing: 'ease-in-out'
                }));

                // 肉球2のアニメーションを停止
                currentPaw2Animations.forEach(anim => anim.cancel());
                currentPaw2Animations = [];
                paw2.style.opacity = 0.2;
            } else if (paw2Distance < pawActiveRange && paw1Distance >= pawActiveRange) {
                // 肉球1のアニメーションを停止
                currentPaw1Animations.forEach(anim => anim.cancel());
                currentPaw1Animations = [];
                paw1.style.opacity = 0.2;

                const baseOpacity = 0.2;
                const hoverOpacity = 0.6;
                const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - paw2Distance / pawActiveRange);
                paw2.style.opacity = opacity;

                // 既存のアニメーションを停止
                currentPaw2Animations.forEach(anim => anim.cancel());
                currentPaw2Animations = [];

                // 浮遊アニメーション
                currentPaw2Animations.push(paw2.animate(floatAnimation, {
                    duration: 3000,
                    iterations: Infinity,
                    easing: 'ease-in-out',
                    delay: 1500
                }));

                // シェイクアニメーション
                currentPaw2Animations.push(paw2.animate(shakeAnimation, {
                    duration: 500,
                    iterations: Infinity,
                    easing: 'ease-in-out'
                }));
            } else {
                // 両方のアニメーションを停止
                currentPaw1Animations.forEach(anim => anim.cancel());
                currentPaw2Animations.forEach(anim => anim.cancel());
                currentPaw1Animations = [];
                currentPaw2Animations = [];
                paw1.style.opacity = 0.2;
                paw2.style.opacity = 0.2;
            }
        } else {
            // 足跡アニメーション中は両方の肉球のアニメーションを停止
            currentPaw1Animations.forEach(anim => anim.cancel());
            currentPaw2Animations.forEach(anim => anim.cancel());
            currentPaw1Animations = [];
            currentPaw2Animations = [];
            paw1.style.opacity = 0.2;
            paw2.style.opacity = 0.2;
        }

        // 足跡アニメーション管理
        if (!isAnimating) {
            if (paw1Distance < pawActiveRange) {
                if (pawActiveType !== 'left') {
                    pawActiveType = 'left';
                    isAnimating = true;
                    showNextPaw();
                }
            } else if (paw2Distance < pawActiveRange) {
                if (pawActiveType !== 'right') {
                    pawActiveType = 'right';
                    isAnimating = true;
                    showNextPaw();
                }
            } else {
                if (pawActiveType !== null) {
                    pawActiveType = null;
                    isAnimating = false;
                    step = 0;
                }
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

    // スクロールを無効化
    document.body.style.overflow = 'hidden';
});
