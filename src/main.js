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
var savedCoversSection = document.querySelector('.saved-covers-section');

var randomCoverBtn = document.querySelector('.random-cover-button');
var makeOwnCoverBtn = document.querySelector('.make-new-button');
var homeBtn = document.querySelector('.home-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var makeBookBtn = document.querySelector('.create-new-book-button');

var currentCover;
var savedCovers = [];


window.addEventListener('load', getRandomCover);
randomCoverBtn.addEventListener('click', getRandomCover);
makeOwnCoverBtn.addEventListener('click', displayForm);
viewSavedCoversBtn.addEventListener('click', displaySavedCovers);
homeBtn.addEventListener('click', displayHome);
makeBookBtn.addEventListener('click', buildCover);
saveCoverBtn.addEventListener('click', saveCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCovers);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

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
  savedCoversPage.classList.add('hidden');
}

function displaySavedCovers() {
  savedCoversPage.classList.remove('hidden');
  viewForm.classList.add('hidden');
  hideHomeView.classList.add('hidden');
  randomCoverBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');

  savedCoversSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
      `<section class="mini-cover"  id=${savedCovers[i].id}>
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="${savedCovers[i].title}"></h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>`
  }
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
  }
}

function deleteSavedCovers() {
  var coverId = event.target.closest('.mini-cover').id;
  for (var i = 0; i < savedCovers.length; i++) {
    if (`${savedCovers[i].id}` === coverId) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
}
