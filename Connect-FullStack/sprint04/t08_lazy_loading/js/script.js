
let imagesLoadedCount = 0;
const totalImages = document.querySelectorAll('img[data-src]').length;

function isImageInViewport(image) {
  const rect = image.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (1.2 * (window.innerHeight || document.documentElement.clientHeight)) &&
    rect.right <= (1.2 * (window.innerWidth || document.documentElement.clientWidth))
  );
}

function loadImage() {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach((image) => {
    if (isImageInViewport(image)) {
      imagesLoadedCount++;
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    }
  });
}

function updateLoadedCountMsg() {
  const countMsg = document.querySelector('.loaded-count-msg');
  countMsg.textContent = `${imagesLoadedCount} images load from ${totalImages}`;

  if (imagesLoadedCount === totalImages) {
    countMsg.style.background = 'green';

    setTimeout(function() {
      countMsg.style.display = 'none';
    }, 3000);
  }

}

function updateView() {
  loadImage();
  updateLoadedCountMsg();
}

window.addEventListener('scroll', updateView);
updateView();
