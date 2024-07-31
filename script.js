function changeImage(src, captionText) {
    document.getElementById('tokyo-image').src = src;
    document.getElementById('tokyo-image').alt = captionText;
    document.getElementById('caption').textContent = captionText;
}