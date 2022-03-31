const buttonAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMesageError = document.querySelector(".js-label-error");

buttonAdd.addEventListener("click", addNewKitten);

//Add new kitten
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === "" && valuePhoto === "" && valueName === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
      labelMesageError.innerHTML = "";
    }
  }
}

const newKittenDataObject = {
  //completa el código
};
