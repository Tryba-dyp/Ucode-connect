
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const images = document.getElementsByTagName('img');

let currentImageIndex = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentImageIndex) {
      images[i].style.display = 'block';
    } else {
      images[i].style.display = 'none';
    }
  }
}

function showNextImage() {
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  showImage();
}

function showPrevImage() {
  currentImageIndex--;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  showImage();
}

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

let autoSlider = setInterval(showNextImage, 3000);

function stopAutoSlider() {
  clearInterval(autoSlider);
}

prevBtn.addEventListener('click', stopAutoSlider);
nextBtn.addEventListener('click', stopAutoSlider);

showImage();
