
//  const buttonAdd = document.querySelector(".js-btn-add");
//  const inputDesc = document.querySelector(".js-input-desc");
//  const inputPhoto = document.querySelector(".js-input-photo");
//  const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector('.js-input-race');
//  const labelMesageError = document.querySelector(".js-label-error");

// copiado de part-7
//  const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];


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

  // faltaría borrar valores

  const newKittenDataObject = {
    image: valuePhoto,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };

  kittenDataList.push(newKittenDataObject);

  renderKittenList(kittenDataList);
}

// compruebo que el nuevo objeto se ha añadido al array

console.log(kittenDataList);

buttonAdd.addEventListener('click', addNewKitten);
