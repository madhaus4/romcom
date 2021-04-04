// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var viewForm = document.querySelector('.form-view');
var hideHomeView = document.querySelector('.home-view');
var savedCoversPage = document.querySelector('.saved-view');
var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDescriptor1 = document.querySelector('#descriptor1');
var inputDescriptor2 = document.querySelector('#descriptor2');


// buttons
var randomCoverBtn = document.querySelector('.random-cover-button');
var makeOwnCoverBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var makeBookBtn = document.querySelector('.create-new-book-button');


// We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
var currentCover;
var savedCovers = [];


// Add your event listeners here 👇
window.addEventListener('load', getRandomCover);
randomCoverBtn.addEventListener('click', getRandomCover);
makeOwnCoverBtn.addEventListener('click', displayForm);
viewSavedCoversBtn.addEventListener('click', displaySavedCovers);
homeBtn.addEventListener('click', displayHome);
makeBookBtn.addEventListener('click', buildCover);
saveCoverBtn.addEventListener('click', saveCover);


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


function buildCover(event) {
  event.preventDefault();
    currentCover = new Cover(inputCover.value, inputTitle.value, inputDescriptor1.value, inputDescriptor2.value);
    viewForm.classList.add('hidden');
    hideHomeView.classList.remove('hidden');
    saveCoverBtn.classList.remove('hidden');

    coverImage.src = inputCover.value;
    coverTitle.innerText = inputTitle.value;
    tagline1.innerText = inputDescriptor1.value;
    tagline2.innerText = inputDescriptor2.value;
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    // console.log(savedCovers);
    // console.log(currentCover);
  }
}

//All the covers in the savedCovers array should be displayed in the saved covers section

// add to our funtion displaySavedCovers() add functionality that will allow users to view their saved covers in the savedCovers section.
//target out innerHTML in our view-saved-view section
// ?create a new varibale to make the the changes we need in order to see our saved covers array in page?
//may need a for loop to iterate through savedCovers array
// might need to use document.getElementById().innerHTML
//appendChild() maybe??????? 
