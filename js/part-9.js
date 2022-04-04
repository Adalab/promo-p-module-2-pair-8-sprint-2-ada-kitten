// Parte 2.9 Filtrar por descripción

function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const kittenListFiltered = kittenDataList.filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText));
  // copypaste de los materiales: ejecutamos la función con el nuevo parámetro de kittenListFiltered
  renderKittenList(kittenListFiltered);
 };

// Parte 2.9 Filtrar por raza y descripción

function filterKitten2(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  const kittenListFiltered = kittenDataList
  .filter((kitten) => kitten.desc.toLowerCase().includes(descrSearchText))
  .filter((kitten) => kitten.race.toLowerCase().includes(raceSearchText));
  // copypaste de los materiales: ejecutamos la función con el nuevo parámetro de kittenListFiltered
  renderKittenList(kittenListFiltered);
}

searchButton.addEventListener('click', filterKitten);
searchButton.addEventListener('click', filterKitten2);