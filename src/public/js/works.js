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
    ]
};

let currentImageIndex = 0;
let currentImages = [];

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';

    // 画像のパスからフォルダ名を取得
    const folderName = imageSrc.split('/')[2]; // 'images'の後のフォルダ名を取得

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
    if (currentImages.length > 0 && currentImageIndex >= 0 && currentImageIndex < currentImages.length) {
        modalImg.src = currentImages[currentImageIndex];
    }
}

function nextImage() {
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        updateModalImage();
    }
}

function prevImage() {
    if (currentImages.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
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
