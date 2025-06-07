const imageSets = {
    'html_img': [
        '/images/html_img/html_img.png'
    ],
    'lp': [
        '/images/lp/lp_1.png',
        '/images/lp/lp_2.png',
        '/images/lp/lp_3.png',
        '/images/lp/lp_4.png',
        '/images/lp/lp_5.png'
    ],
    'contact': [
        '/images/contact/contact.png',
        '/images/contact/register.png',
        '/images/contact/login.png',
        '/images/contact/admin.png',
        '/images/contact/modal.png'
    ],
    'atte': [
        '/images/atte/register.png',
        '/images/atte/login.png',
        '/images/atte/time-stamp.png',
        '/images/atte/date-list.png',
        '/images/atte/attendance-record.png',
        '/images/atte/user-list.png'
    ],
    'rese_users': [
        '/images/rese_users/rese.png',
        '/images/rese_users/detail.png',
        '/images/rese_users/mypage.png'
    ],
    'rese_admin': [
        '/images/rese_admin/rese.png',
        '/images/rese_admin/admin_dashboard.png',
        '/images/rese_admin/review_list.png',
        '/images/rese_admin/shops_list.png',
        '/images/rese_admin/shop_modal.png',
        '/images/rese_admin/review_modal.png',
        '/images/rese_admin/shop_dashboard.png',
        '/images/rese_admin/shop_up_1.png',
        '/images/rese_admin/shop_up_2.png',
    ],
    'mogitate': [
        '/images/mogitate/products.png',
        '/images/mogitate/sort-tag1.png',
        '/images/mogitate/sort-tag2.png',
        '/images/mogitate/register.png',
        '/images/mogitate/up-date.png'
    ]
};

const workContents = {
    'html_img': {
        title: 'HTML/CSS練習作品1',
        description: 'HTMLとCSSの学習過程で作成したWebページです。レスポンシブデザインの基礎を学びながら制作しました。',
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20231016_hara_html.git' }
        ]
    },
    'lp': {
        title: 'HTML/CSS練習作品2',
        description: 'HTMLとCSSの学習過程で作成した二つ目のWebページです。こちらもレスポンシブデザインの基礎を学びながら制作しました。',
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20231122_hara_lp.git' }
        ]
    },
    'contact': {
        title: 'お問い合わせフォーム＆管理者ページ',
        description: `
            <ul class="work-description-list">
                <li>お問い合わせフォームと管理者ページです。</li>
                <li>お問い合わせフォームは、ユーザーがお問い合わせを送信できます。</li>
                <li>認証付き管理者ページは、お問い合わせ一覧から検索することができ、エクスポートでCSV形式でダウンロードできます。</li>
                <li>管理者が、お問い合わせを一覧から選択するとモーダルで内容確認＆削除することができます。</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20240504-hara_erika-ability-test.git' }
        ]
    },
    'atte': {
        title: '勤怠管理システムアプリ',
        description: `
            <ul class="work-description-list">
                <li>勤務記録の管理: ユーザーは勤務の開始と終了を記録できます。日を跨ぐ勤務にも対応しています。</li>
                <li>休憩時間の管理: 休憩の開始と終了を記録し、管理することが可能です。</li>
                <li>勤怠データの取得と表示: 日付別、ユーザーごとに勤怠記録を取得し、表示することができます。ユーザー一覧も表示可能です。</li>
                <li>セキュリティとユーザー認証: メールによる本人確認を提供し、セキュリティを強化しています。</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20240625-erika_hara-atte.git' }
        ]
    },
    'rese_users': {
        title: '飲食店予約サービスアプリ(ユーザー機能)',
        description: `
            <ul class="work-description-list">
                <li>予約変更機能: ユーザーはマイページから予約日時や人数を変更できる。</li>
                <li>決済機能: ユーザーはマイページの予約情報よりキャッシュレス決済することができる。</li>
                <li>評価機能: 来店＆決済終了にて、ユーザーが店舗を 5 段階で評価し、コメントを残せる。</li>
                <li>認証: メールによる本人確認機能。</li>
                <li>リマインダー: タスクスケジューラーを利用して、予約当日の朝にリマインダーを送信。</li>
                <li>QR コード: 利用者が来店時に提示する QR コードを発行し、店舗側で照合。</li>
                <li>決済管理機能: キャッシュレス決済 Stripe を利用した決済機能。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20240713-erika_hara-rese.git' }
        ]
    },
    'rese_admin': {
        title: '飲食店予約サービスアプリ(管理者機能)',
        description: `
            <ul class="work-description-list">
                <li>管理画面: 管理者、店舗代表者、利用者の 3 種類の権限に基づく管理画面を提供。</li>
                <li>管理者は、店舗代表者、新規店舗の作成、既存店舗の削除ができる。</li>
                <li>店舗代表者は、管理ページにて店舗照会の編集</li>
                <li>メール送信: 管理画面から利用者にお知らせメールを送信。</li>
                <li>QR コード: 利用者が来店時に提示する QR コードを発行し、店舗側で照合。</li>
                <li>金額設定機能: 店舗代表者が予約ユーザーに金額を設定すると決済ボタンが表示され決済できる。</li>
                <li>決済管理機能: Stripe を利用した決済機能。予約に対する支払い状況の確認管理できる 。</li>
                <li>評価機能: ユーザーが店舗を 5 段階で評価したものを管理者ページで閲覧削除できる。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20240713-erika_hara-rese.git' }
        ]
    },
    'mogitate': {
        title: '商品登録管理編集アプリ',
        description: `
            <ul class="work-description-list">
                <li>一覧表示から検索表示機能: 商品名を入力フィールドに入力して「検索ボタン」をクリックすると入力情報と一致した商品名のカードのみ表示することができる。</li>
                <li>商品並び替え機能:「検索ボタン」下部のポップアップから「高い順に表示」、「低い順に表示」を選択して商品を並び替えることができる。結果の表示の際に、並び替え条件をタグに表示することができる。</li>
                <li>商品削除機能: 右下の「ゴミ箱ボタン」をクリックするとデーターベース(products テーブル)に保存されている商品情報を削除することができる。</li>
                <li>レスポンシブデザイン: タブレット・スマートフォン用にブレイクポイント 768px でレスポンシブデザインを実装。</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20241220_hara_erika.git' }
        ]
    }
};

let currentImageIndex = 0;
let currentImages = [];

function openModal(imageSrc) {
    console.log('openModal called with:', imageSrc);

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalContent = document.getElementById('modalContent');

    // 画像を表示
    modalImg.src = imageSrc;

    // 画像のパスからフォルダ名を取得
    const folderName = imageSrc.split('/')[2]; // 'images'の後のフォルダ名を取得

    // 対応する作品の情報を取得
    const content = workContents[folderName];
    if (content) {
        // モーダルに内容を表示
        modalContent.innerHTML = `
            <h3 class="work-title">${content.title}</h3>
            <p class="work-description">${content.description}</p>
            <div class="work-links-section">
                ${content.links.map(link => `
                    <a class="work-icon-link-button" href="${link.url}" target="_blank" rel="noopener noreferrer">
                        <img class="work-icon" src="https://img.shields.io/badge/-Github-181717.svg?logo=github&style=plastic" alt="GitHub">
                    </a>
                    <span class="info-text">githubへはこちらから</span>
                `).join('')}
            </div>
        `;
    }

    // モーダルを表示
    modal.style.display = 'flex';

    if (imageSets[folderName]) {
        currentImages = imageSets[folderName];
        const index = currentImages.indexOf(imageSrc);
        currentImageIndex = index >= 0 ? index : 0; // 見つからない場合は0を設定
        updateModalImage();
    }
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function updateModalImage() {
    const modalImg = document.getElementById('modalImage');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (currentImages.length > 0 && currentImageIndex >= 0 && currentImageIndex < currentImages.length) {
        modalImg.src = currentImages[currentImageIndex];

        // 最初の画像の場合は前へボタンを非表示
        if (currentImageIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        // 最後の画像の場合は次へボタンを非表示
        if (currentImageIndex === currentImages.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }
}

function nextImage() {
    if (currentImages.length > 0 && currentImageIndex < currentImages.length - 1) {
        currentImageIndex = currentImageIndex + 1;
        updateModalImage();
    }
}

function prevImage() {
    if (currentImages.length > 0 && currentImageIndex > 0) {
        currentImageIndex = currentImageIndex - 1;
        updateModalImage();
    }
}

// キーボードでの操作
document.addEventListener('keydown', function(event) {
    if (document.getElementById('imageModal').style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            nextImage();
        } else if (event.key === 'ArrowLeft') {
            prevImage();
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// モーダルの外側をクリックした時も閉じる
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
