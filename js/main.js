'use strict';

/* Elements from HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const inputRace = document.querySelector('.js-input-race');

//Objects from Kittens
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Spanish Shorthair',
};
const kittenData_2 = {
  image:
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Portuguese Shorthair',
};
const kittenData_3 = {
  image:
    'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'Irish Shorthair',
};

// const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

let kittenDataList = [];

//Functions
function renderKitten(kittenData) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${kittenData.url}
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${kittenData.race}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
      
    </article>
    </li>`;
  return kitten;
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}

//Show/hide the form
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
// Add new kitten
// function addNewKitten(event) {
//   event.preventDefault();
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;
//   if (valueDesc === '' || valuePhoto === '' || valueName === '') {
//     labelMesageError.innerHTML = 'Debe rellenar todos los valores';
//   } else {
//     labelMesageError.innerHTML = '';
//   }
// }

//Cancel the search for a kitten
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

// //Filter by description
// function filterKitten(event) {
//   event.preventDefault();
//   const descrSearchText = input_search_desc.value;
//   listElement.innerHTML = '';
//   for (const kittenItem of kittenDataList) {
//     if (kittenItem.desc.includes(descrSearchText)) {
//       listElement.innerHTML += renderKitten(kittenItem);
//     }
//   }
// }
//Show kitty list in HTML
// renderKittenList(kittenDataList);

//Events
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
// searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);

//Add new kitten
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === ''
  ) {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
    console.log('hello1');
  } else if (
    valueDesc !== '' ||
    valuePhoto !== '' ||
    valueName !== '' ||
    valueRace !== ''
  ) {
    labelMesageError.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    console.log('hello2');
  }
  const newKittenDataObject = {
    image: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };
  kittenDataList.push(newKittenDataObject);
  renderKittenList(kittenDataList);
}

buttonAdd.addEventListener('click', addNewKitten);

function filterKitten2(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  const kittenListFiltered = kittenDataList
    .filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText))
    .filter((kitten) => kitten.race.toLowerCase().includes(raceSearchText));
  renderKittenList(kittenListFiltered);
}

searchButton.addEventListener('click', filterKitten2);

///

// part-10

const GITHUB_USER = 'patriciapallares';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;

fetch(SERVER_URL, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((data) => {
    kittenDataList = data.results;
    console.log(kittenDataList);
    renderKittenList(kittenDataList);
  });

// part-11

const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

if (kittenListStored !== null) {
  renderKittenList(kittenListStored);
  // vuelve a pintar el listado de gatitos
  //...
  //completa el código...
} else {
  //sino existe el listado de gatitos en el local storage
  //haz la petición al servidor
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      kittenDataList = data.results;
      console.log(kittenDataList);
      renderKittenList(kittenDataList);
      localStorage.setItem('kittensList', JSON.stringify());
    })

    .catch((error) => {
      console.error(error);
    });
}
//
