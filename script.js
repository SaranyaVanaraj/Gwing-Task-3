const current = document.getElementById('current');
const caption = document.getElementById('caption');
const thumbs = document.querySelectorAll('.thumb');

let index = 0;
let images = Array.from(thumbs).map(img => img.src);
let captions = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];

// Change image on thumbnail click
function changeImage(src, thumb, capText) {
  current.src = src;
  caption.textContent = capText;
  thumbs.forEach(img => img.classList.remove('active'));
  thumb.classList.add('active');
  index = images.indexOf(src);
}

// Next image
function nextImage() {
  index = (index + 1) % images.length;
  current.src = images[index];
  caption.textContent = captions[index];
  updateActive();
}

// Previous image
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  current.src = images[index];
  caption.textContent = captions[index];
  updateActive();
}

// Update active thumbnail
function updateActive() {
  thumbs.forEach(img => img.classList.remove('active'));
  thumbs[index].classList.add('active');
}

// 🔁 Auto slideshow every 3 seconds
setInterval(nextImage, 3000);
