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
    let currentStep = 0;

    // 浮遊アニメーションの定義
    const floatAnimation = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' },
        { transform: 'translateY(0)' }
    ];

    // 現在実行中のアニメーションを保持
    let currentPaw1Animations = [];
    let currentPaw2Animations = [];

    // ページ読み込み時に肉球の表示を設定
    const startInitialAnimations = () => {
        // 肉球1の表示設定
        paw1.style.opacity = '0.7';
        paw1.style.transform = 'translateY(0)';

        // 肉球2の表示設定
        paw2.style.opacity = '0.7';
        paw2.style.transform = 'translateY(0)';
    };

    // 初期表示を設定
    startInitialAnimations();

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
        if (!isAnimating || step >= positions.length) return;

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
                { color: 'rgb(0, 6, 12)',    textShadow: '0 0 0px rgb(0, 6, 12)', offset: 0.5 },
                { color: '#ffe600', textShadow: '0 0 20px #ffe600, 0 0 40px #fff200', offset: 1 }
            ];
            const blink = title.animate(
                blinkKeyframes,
                {
                    duration: 100, // 1回の点滅
                    iterations: 3  // 3回点滅
                }
            );

            // アニメーション終了後に色を元に戻す
            blink.onfinish = () => {
                title.style.color = 'aliceblue';
                title.style.textShadow = '0 0 10px rgb(0, 6, 12)';
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

    // タイトルの色を更新する関数
    function updateTitleColor() {
        if (!isAnimating) {
            const ratio = (Date.now() % 3000) / 3000; // 3秒周期で色を変化
            let r, g, b;
            if (ratio < 1/3) {
                // 黄色→元色
                const t = ratio / (1/3);
                r = Math.round(220 + (0 - 220) * t);    // 黄色(220,180,40) → 元色(0,6,12)
                g = Math.round(180 + (6 - 180) * t);
                b = Math.round(40 + (12 - 40) * t);
            } else if (ratio < 2/3) {
                // 元色→赤
                const t = (ratio - 1/3) / (1/3);
                r = Math.round(0 + (200 - 0) * t);      // 元色(0,6,12) → 赤(200,40,40)
                g = Math.round(6 + (40 - 6) * t);
                b = Math.round(12 + (40 - 12) * t);
            } else {
                // 赤→青
                const t = (ratio - 2/3) / (1/3);
                r = Math.round(200 + (0 - 200) * t);    // 赤(200,40,40) → 青(0,60,180)
                g = Math.round(40 + (60 - 40) * t);
                b = Math.round(40 + (180 - 40) * t);
            }
            title.style.color = `rgb(${r}, ${g}, ${b})`;
            title.style.textShadow = `0 0 10px rgba(${r}, ${g}, ${b}, 1.0)`;
            isTitleActive = true;
        } else {
            // アニメーション中はデフォルト色
            title.style.color = 'rgb(0, 6, 12)';
            title.style.textShadow = '0 0 10px rgba(0, 6, 12, 0.8)';
            isTitleActive = false;
        }
        requestAnimationFrame(updateTitleColor);
    }

    // 色の更新を開始
    updateTitleColor();

    // マウス移動時の処理
    document.addEventListener('mousemove', (e) => {
        const nav = document.querySelector('#nav');
        if (nav && nav.contains(e.target)) {
            title.style.color = 'rgb(0, 6, 12)';
            title.style.textShadow = '0 0 10px rgba(1, 2, 27, 0.8)';
            isTitleActive = false;
            return;
        }

        // 肉球の位置を取得
        const paw1Rect = paw1.getBoundingClientRect();
        const paw2Rect = paw2.getBoundingClientRect();
        const paw1CenterX = paw1Rect.left + paw1Rect.width / 2;
        const paw1CenterY = paw1Rect.top + paw1Rect.height / 2;
        const paw2CenterX = paw2Rect.left + paw2Rect.width / 2;
        const paw2CenterY = paw2Rect.top + paw2Rect.height / 2;
        const paw1Distance = Math.hypot(e.clientX - paw1CenterX, e.clientY - paw1CenterY);
        const paw2Distance = Math.hypot(e.clientX - paw2CenterX, e.clientY - paw2CenterY);
        const pawActiveRange = 50; // px

        // 肉球のアニメーション定義
        const shakeAnimation = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(0)' },
            { transform: 'translateX(0)' }
        ];

        // 足跡アニメーション中は肉球のアニメーションを無効化
        if (!isAnimating) {
            // 肉球1の制御
            if (paw1Distance < pawActiveRange && paw2Distance >= pawActiveRange) {
                const baseOpacity = 0.7;
                const hoverOpacity = 1.0;
                const distanceRatio = paw1Distance / pawActiveRange;
                const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - distanceRatio);
                paw1.style.opacity = opacity;
                paw1.style.transform = 'translateY(0)';

                // 肉球2の表示設定
                paw2.style.opacity = '0.7';
                paw2.style.transform = 'translateY(0)';
            } else if (paw2Distance < pawActiveRange && paw1Distance >= pawActiveRange) {
                // 肉球1の表示設定
                paw1.style.opacity = '0.7';
                paw1.style.transform = 'translateY(0)';

                const baseOpacity = 0.7;
                const hoverOpacity = 1.0;
                const distanceRatio = paw2Distance / pawActiveRange;
                const opacity = baseOpacity + (hoverOpacity - baseOpacity) * (1 - distanceRatio);
                paw2.style.opacity = opacity;
                paw2.style.transform = 'translateY(0)';
            } else {
                // 両方の肉球の表示設定
                paw1.style.opacity = '0.7';
                paw1.style.transform = 'translateY(0)';
                paw2.style.opacity = '0.7';
                paw2.style.transform = 'translateY(0)';
            }
        } else {
            // 足跡アニメーション中は両方の肉球のアニメーションを停止
            currentPaw1Animations.forEach(anim => {
                anim.cancel();
            });
            currentPaw2Animations.forEach(anim => {
                anim.cancel();
            });
            currentPaw1Animations = [];
            currentPaw2Animations = [];
            paw1.style.opacity = '0.7';  // 透明度を0.7に設定
            paw2.style.opacity = '0.7';  // 透明度を0.7に設定
            paw1.style.transform = 'translateY(0)';
            paw2.style.transform = 'translateY(0)';
        }

        // 足跡アニメーションの制御
        if (!isAnimating) {
            // アニメーションが実行中かどうかをチェック
            const isPaw1Animating = currentPaw1Animations.some(anim => anim.playState === 'running');
            const isPaw2Animating = currentPaw2Animations.some(anim => anim.playState === 'running');

            if (paw1Distance < pawActiveRange && paw2Distance >= pawActiveRange) {
                if (pawActiveType !== 'left') {
                    pawActiveType = 'left';
                    // 500ミリ秒後にアニメーションを開始
                    setTimeout(() => {
                        if (pawActiveType === 'left' && !isAnimating) {
                            isAnimating = true;
                            step = 0;
                            showNextPaw();
                        }
                    }, 500);
                }
            } else if (paw2Distance < pawActiveRange && paw1Distance >= pawActiveRange) {
                if (pawActiveType !== 'right') {
                    pawActiveType = 'right';
                    // 500ミリ秒後にアニメーションを開始
                    setTimeout(() => {
                        if (pawActiveType === 'right' && !isAnimating) {
                            isAnimating = true;
                            step = 0;
                            showNextPaw();
                        }
                    }, 500);
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
        title.style.color = 'rgb(0, 6, 12)';
        title.style.textShadow = '0 0 10px rgba(0, 6, 12, 0.8)';
    });

    // スクロールを無効化
    document.body.style.overflow = 'hidden';
});
