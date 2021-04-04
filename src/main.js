// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var viewForm = document.querySelector('.form-view');
var hideHomeView = document.querySelector('.home-view');
var savedCoversPage = document.querySelector('.saved-view');

// buttons
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeOwnCoverBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');

// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover;


// Add your event listeners here 👇
window.addEventListener('load', getRandomCover);
randomCoverBtn.addEventListener('click', getRandomCover);
makeOwnCoverBtn.addEventListener('click', displayForm);
viewSavedCoversBtn.addEventListener('click', displaySavedCovers);
homeBtn.addEventListener('click', displayHome);

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function displayForm() {
  viewForm.classList.remove('hidden');
  hideHomeView.classList.add('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function displaySavedCovers() {
  savedCoversPage.classList.remove('hidden');
  viewForm.classList.add('hidden');
  hideHomeView.classList.add('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}

function displayHome() {
  hideHomeView.classList.remove('hidden');
  viewForm.classList.add('hidden');
  savedCoversPage.classList.add('hidden');
  homeBtn.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
  randomCoverBtn.classList.remove('hidden');

}
//create var  inputCover dqs('#cover')
var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDescriptor1 = document.querySelector('#descriptor1');
var inputDescriptor2 = document.querySelector('#descriptor2');
var makeBookBtn = document.querySelector('.create-new-book-button')
makeBookBtn.addEventListener('click', buildCover);

function buildCover(event) {
  coverImage.src = inputCover.value;
  coverTitle.innerText =  inputTitle.value;
  tagline1.innerText = inputDescriptor1.value;
  tagline2.innerText = inputDescriptor2.value;
};

// create a new instance of currentCover to show the inputs
// add function preventDefault() inside of buildCover function to it does not default to the original home page
// use classList to hide home page and form page
