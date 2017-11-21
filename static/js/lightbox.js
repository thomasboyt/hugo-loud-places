document.addEventListener("DOMContentLoaded", () => {
  console.log('dom content loaded')
  const imageLinks = document.querySelectorAll('.flexbin a');

  for (let imageLink of imageLinks) {
    imageLink.addEventListener('click', (evt) => {
      evt.preventDefault();

      const imagePath = imageLink.querySelector('img').src;

      showLightbox(imagePath);
    });
  }

  document.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 27) {
      hideLightbox();
    }
  });
});

function getLightbox() {
  return document.querySelector('.lightbox');
}

function showLightbox(imgPath) {
  const lightbox = getLightbox();
  lightbox.innerHTML = `
    <div class="lightbox-content">
        <div
          class="lightbox-image"
          style="background: url(${imgPath}) no-repeat center center; background-size: contain">
        </div>
    </div>
  `;

  lightbox.addEventListener('click', (evt) => {
    hideLightbox();
  });

  lightbox.classList.add('show');
  document.body.classList.add('show-modal');
}

function hideLightbox() {
  const lightbox = getLightbox();
  lightbox.classList.remove('show');
  lightbox.innerHTML = null;
  document.body.classList.remove('show-modal');
}