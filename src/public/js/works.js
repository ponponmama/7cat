function openModal(imgSrc) {
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('image-modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        closeModal();
    }
}
