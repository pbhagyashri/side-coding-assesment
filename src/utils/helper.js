function numOfBaths(bathsfull, bathsHalf = 0) {
  if (bathsHalf > 0) return bathsfull + 0.5;

  return bathsfull;
}

function formatAddress(address) {
  const { city, streetName, streetNumber, state } = address;
  return `${streetNumber} ${streetName}, ${city}, ${state}`;
}

function formatPrice(price) {
  const formatedPrice = new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(price)
    .split('.')[0];

  return formatedPrice;
}

function formatListing(listing) {
  const dateObject = new Date(listing);
  return `${dateObject.getMonth()}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
}

function getFaoritedPropertiesFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveProperty(mlsId, key) {
  // check if localStroage key exists
  const savedMlsIds = getFaoritedPropertiesFromStorage(key);

  // if key exists, check if mlsId already exists in localStorage. If it does, set it to false.
  if (savedMlsIds) {
    if (savedMlsIds[mlsId]) {
      savedMlsIds[mlsId] = false;
      localStorage.setItem(key, JSON.stringify(savedMlsIds));
      return;
    }

    // otherwise save the mslId in the localStorage object.
    savedMlsIds[mlsId] = true;
    localStorage.setItem(key, JSON.stringify(savedMlsIds));
  } else {
    // if key doesn't exists, create a new storage with the key name and store mlsId in it.
    const propertiesToSave = {};
    propertiesToSave[mlsId] = true;

    localStorage.setItem(key, JSON.stringify(propertiesToSave));
  }
  return;
}

module.exports = {
  numOfBaths,
  formatAddress,
  formatPrice,
  formatListing,
  saveProperty,
  getFaoritedPropertiesFromStorage,
};
