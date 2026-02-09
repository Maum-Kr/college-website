// MOBILE MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// DARK MODE
function toggleTheme() {
  document.body.classList.toggle("light");
}

// NOTICE SEARCH
function searchNotices() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".notice");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  });
}

const notices = [
  {
    text: "Semester Final Examination starts from 20 January",
    link: "notices.html#notice-exam"
  },
  {
    text: "Admission Open for Academic Year 2026",
    link: "notices.html#notice-admission"
  },
  {
    text: "College will remain closed on public holidays",
    link: "notices.html#notice-holiday"
  }
];

let index = 0;
const textEl = document.getElementById("ticker-text");
const linkEl = document.getElementById("ticker-link");

setInterval(() => {
  index = (index + 1) % notices.length;
  textEl.textContent = notices[index].text;
  linkEl.href = notices[index].link;
}, 4000);

const hero = document.querySelector(".clean-hero");

const backgrounds = [
  "images/Screenshot_8-2-2026_12273_www.bing.com.jpeg",
  "images/Screenshot_8-2-2026_122729_www.bing.com.jpeg",
];

let bgIndex = 0;

function changeBackground() {
  hero.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
  bgIndex = (bgIndex + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 8000);

