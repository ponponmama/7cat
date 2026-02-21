const imageSets = {
    'test_html': [
        '/images/test_html/sample_image.png'
    ],
    'lp': [
        '/images/lp/index.html.png',
    ],
    'ability': [
        '/images/ability/register.png',
        '/images/ability/login.png',
        '/images/ability/contact.png',
        '/images/ability/confirm.png',
        '/images/ability/modal.png'
    ],
    'atte': [
        '/images/atte/atte_register.png',
        '/images/atte/atte_login.png',
        '/images/atte/atte_time-stamp.png',
        '/images/atte/atte_date-list.png',
        '/images/atte/atte_attendance-record.png',
        '/images/atte/atte_user-list.png'
    ],
    'mogitate': [
        '/images/mogitate/products.png',
        '/images/mogitate/products_search_low_to_high.png',
        '/images/mogitate/products_search_high_to_low.png',
        '/images/mogitate/register.png',
        '/images/mogitate/products_search.png'
    ],
    'attendance_users': [
        '/images/attendance/users/attendance_register.png',
        '/images/attendance/users/attendance_login.png',
        '/images/attendance/users/attendance.png',
        '/images/attendance/users/attendance_working_start.png',
        '/images/attendance/users/attendance_leave_work.png',
        '/images/attendance/users/attendance_clock_out.png',
        '/images/attendance/users/attendance_list.png',
        '/images/attendance/users/attendance_detail.png',
        '/images/attendance/users/attendance_stamp_correction_request_list.png',
    ],
    'attendance_admin': [
        '/images/attendance/admin/admin_login.png',
        '/images/attendance/admin/admin_attendance_list.png',
        '/images/attendance/admin/admin_staff_list.png',
        '/images/attendance/admin/admin_attendance_staff_list.png',
        '/images/attendance/admin/admin_detail.png',
        '/images/attendance/admin/admin_stamp_correction_request_list.png',
        '/images/attendance/admin/admin_approved.png',
        '/images/attendance/admin/admin_pending.png',
    ],
    'flea_market': [
        '/images/flea_market/register.png',
        '/images/flea_market/email_verify.png',
        '/images/flea_market/login.png',
        '/images/flea_market/profile.png',
        '/images/flea_market/mypage_profile.png',
        '/images/flea_market/index_etc.png',
        '/images/flea_market/item_view.png',
        '/images/flea_market/mypage.png',
        '/images/flea_market/purchase.png',
        '/images/flea_market/purchase_address.png',
        '/images/flea_market/sell.png',
    ],
    'rese_users': [
        '/images/rese/common/register.png',
        '/images/rese/common/login.png',
        '/images/rese/common/email_verify.png',
        '/images/rese/common/thanks.png',
        '/images/rese/users/user_index.png',
        '/images/rese/users/user_details.png',
        '/images/rese/users/user_mypage.png',
        '/images/rese/users/user_reservation_done.png',
        '/images/rese/users/user_reservation_return_details.png',
    ],
    'rese_admin': [
        '/images/rese/common/register.png',
        '/images/rese/common/login.png',
        '/images/rese/common/email_verify.png',
        '/images/rese/common/thanks.png',
        '/images/rese/admin/admin_dashboard.png',
        '/images/rese/admin/admin_dashboard_modal.png',
        '/images/rese/admin/admin_shops_list.png',
        '/images/rese/admin/admin_shops_list_modal.png',
        '/images/rese/admin/admin_reviews.png',
        '/images/rese/admin/admin_reviews_modal.png',
    ],
    'rese_shops': [
        '/images/rese/common/register.png',
        '/images/rese/common/login.png',
        '/images/rese/common/email_verify.png',
        '/images/rese/common/thanks.png',
        '/images/rese/shops/shop_manager_dashboard.png',
        '/images/rese/shops/shop_manager_dashboard _reservation.png',
        '/images/rese/shops/shop_manager_dashboard_modal.png',
        '/images/rese/shops/shop_manager_manage-shop.png',
        '/images/rese/shops/shop_manager_manage-shop_modal.png',
        '/images/rese/shops/shop_manager_manage_shop_list_view.png',
        '/images/rese/shops/shop_manager_reviews.png',
        '/images/rese/shops/shop_manager_reviews_modal.png',
    ],
};

const workContents = {
    'test_html': {
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
    'ability': {
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
    'mogitate': {
        title: '商品登録管理編集アプリ',
        description: `
            <ul class="work-description-list">
                <li>一覧表示から検索表示機能: 商品名を入力フィールドに入力して「検索ボタン」をクリックすると入力情報と一致した商品名のカードのみ表示することができる。</li>
                <li>商品並び替え機能:「検索ボタン」下部のポップアップから「高い順に表示」、「低い順に表示」を選択して商品を並び替えることができる。結果の表示の際に、並び替え条件をタグに表示することができる。</li>
                <li>商品削除機能: 右下の「ゴミ箱ボタン」をクリックするとデーターベース(products テーブル)に保存されている商品情報を削除することができる。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20241220_hara_erika.git' }
        ]
    },
    'attendance_users': {
        title: '勤怠管理システムアプリ(ユーザー機能)',
        description: `
            <ul class="work-description-list">
                <li>勤務記録の管理: ユーザーは勤務の開始と終了を記録できます。日を跨ぐ勤務にも対応しています。</li>
                <li>休憩時間の管理: 休憩の開始と終了を記録し、管理することが可能です。</li>
                <li>勤怠データの取得と表示: 日付別、ユーザーごとに勤怠記録を取得し、表示することができます。</li>
                <li>打刻修正申請機能: 打刻ミスがあった場合、修正申請を提出できます。</li>
                <li>セキュリティとユーザー認証: メールによる本人確認を提供し、セキュリティを強化しています。</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/attendance-erika-hara.git' }
        ]
    },
    'attendance_admin': {
        title: '勤怠管理システムアプリ(管理者機能)',
        description: `
            <ul class="work-description-list">
                <li>スタッフ管理機能: スタッフ一覧の確認、スタッフ詳細の確認ができます。</li>
                <li>勤怠データの管理: 全スタッフの勤怠データを確認・管理できます。</li>
                <li>打刻修正申請の承認: スタッフからの打刻修正申請を承認・却下できます。</li>
                <li>勤怠データのエクスポート: 勤怠データをCSV形式でエクスポートできます。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/attendance-erika-hara.git' }
        ]
    },
    'flea_market': {
        title: 'フリマアプリ',
        description: `
            <ul class="work-description-list">
                <li>商品出品機能: ユーザーは商品を出品できます。</li>
                <li>商品購入機能: ユーザーは商品を購入できます。</li>
                <li>マイページ機能: ユーザーは自分のプロフィールや出品履歴、購入履歴を確認できます。</li>
                <li>認証機能: メールによる本人確認機能。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/flea-market-erika-hara.git' }
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
    'rese_shops': {
        title: '飲食店予約サービスアプリ(店舗代表者機能)',
        description: `
            <ul class="work-description-list">
                <li>店舗管理機能: 店舗代表者が自分の店舗情報を編集・管理できる。</li>
                <li>予約管理機能: 予約一覧の確認、予約詳細の確認ができる。</li>
                <li>決済管理機能: 予約ユーザーへの金額設定、決済状況の確認ができる。</li>
                <li>評価管理機能: ユーザーからの評価を確認・管理できる。</li>
                <li>レスポンシブデザイン: スマートフォン、タブレット、PC など様々な画面サイズに対応</li>
            </ul>
        `,
        links: [
            { text: 'GitHub', url: 'https://github.com/ponponmama/20240713-erika_hara-rese.git' }
        ]
    },

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
    let folderName = imageSrc.split('/')[2]; // 'images'の後のフォルダ名を取得

    // サブフォルダ構造の場合を検出（例: /images/rese/users/... → rese_users）
    // imageSetsのキー名から、該当するものを探す
    const pathParts = imageSrc.split('/');
    if (pathParts.length > 3) {
        const baseFolder = pathParts[2];
        const subFolder = pathParts[3];
        const potentialKey = `${baseFolder}_${subFolder}`;

        // imageSetsに該当するキーが存在するか確認
        if (imageSets[potentialKey]) {
            folderName = potentialKey;
        } else if (subFolder === 'common') {
            // commonフォルダの場合は、その画像が含まれているセットを探す
            for (const [key, images] of Object.entries(imageSets)) {
                if (key.startsWith(`${baseFolder}_`) && images.includes(imageSrc)) {
                    folderName = key;
                    break;
                }
            }
        }
    }

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
