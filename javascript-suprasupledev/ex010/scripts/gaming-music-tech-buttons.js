const gamingElement = document.querySelector('.js-gaming-button');
const musicElement = document.querySelector('.js-music-button');
const techElement = document.querySelector('.js-tech-button');

function toggledGaming() {

  if (!gamingElement.classList.contains('is-toggled')) {
    gamingElement.classList.add('is-toggled');
    musicElement.classList.remove('is-toggled');
    techElement.classList.remove('is-toggled');
  } else {
    gamingElement.classList.remove('is-toggled');
  }
}

function toggledMusic() {
  if (!musicElement.classList.contains('is-toggled')) {
    musicElement.classList.add('is-toggled');
    gamingElement.classList.remove('is-toggled');
    techElement.classList.remove('is-toggled');
  } else {
    musicElement.classList.remove('is-toggled');
  }
}

function toggledTech() {
  if (!techElement.classList.contains('is-toggled')) {
    techElement.classList.add('is-toggled');
    gamingElement.classList.remove('is-toggled');
    musicElement.classList.remove('is-toggled');
  } else {
    techElement.classList.remove('is-toggled');
  }
}