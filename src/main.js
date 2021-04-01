// Create variables targetting the relevant DOM elements here 👇

// need random image - data file holds var covers
// cover file holds cover class with cover property and value coverImgSrc
// need to manipulate '.cover-image' in index.html to random


// create a variable targeting the class '.cover-image'
var coverImage = document.querySelector('.cover-image');

// create a variable targeting the class '.cover-title'
var coverTitle = document.querySelector('.cover-title');
// create a variable targeting the 'h3' tag
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

// buttons
var newCoverBtn = document.querySelector('.random-cover-button');

// use innerText to change html value


// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover;

// Add your event listeners here 👇

// add eventListener to of window.eventListener('load', functionName)
window.addEventListener('load', getRandomCover)
newCoverBtn.addEventListener('click', getRandomCover);

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
// create randomRomComCover function. then add this function to the window load event listener.

function getRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}
