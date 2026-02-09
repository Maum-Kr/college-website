const images = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg"
];

let i = 0;
const hero = document.getElementById("hero");

setInterval(() => {
  hero.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}, 4000);
