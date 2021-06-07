const productsData = [];
const countElementsArray = 10;
const author = [];
const typeOfferArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkOfferArray = ['12:00', '13:00', '14:00'];
const featuresOfferArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosOfferArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const locationArray = [];

function randomInteger(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

function randomFloat(min, max, countNumber) {
  if (min >= 0 && max >= 0 && min < max && countNumber >= 0) {
    const rand = min + Math.random() * (max - min);
    return rand.toFixed(countNumber);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

const getAuthor = () => {
  for (let ii = 1; ii <= countElementsArray; ii++) {
    const object = {};
    object.avatar = `img/avatars/user0${ii}.png`;
    author.push(object);
  }
};

const getOfferType = () => {
  const randomType = typeOfferArray[randomInteger(0, 4)];
  return randomType;
};

const getOfferCheck = () => {
  const randomCheck = checkOfferArray[randomInteger(0, 2)];
  return randomCheck;
};

const getOfferFeatures = () => {
  const randomFeatures = featuresOfferArray.slice(0, randomInteger(1, 6));
  return randomFeatures;
};

const getOfferPhotos = () => {
  const randomPhotos = photosOfferArray.slice(0, randomInteger(1, 4));
  return randomPhotos;
};

const createOffer = function (location) {
  const offerObject = {
    title: 'Очень заманчивое предложение!',
    address: `${String(location.lat)}, ${String(location.lng)}`,
    price: randomInteger(1000, 100000),
    type: getOfferType(),
    rooms: randomInteger(1, 10),
    guests: randomInteger(1, 10),
    checkin: getOfferCheck(),
    checkout:  getOfferCheck(),
    features: getOfferFeatures(),
    description: 'Современный ремонт, сделанный совсем недавно. Хорошая мебель и уютная обстановка. удобное расположение.',
    photos: getOfferPhotos(),
  };
  return offerObject;
};

const getLocationArray = function (elements) {
  const getLocation = function () {
    const location = {
      lat: randomFloat(35.65000, 35.70000, 5),
      lng: randomFloat(139.70000, 139.80000, 5),
    };
    return location;
  };

  for (let ii = 0; ii < elements; ii++) {
    locationArray.push(getLocation());
  }
  return locationArray;
};

getAuthor();
getLocationArray(countElementsArray);

const createProductCards = function (elements) {
  for (let ii = 0; ii < elements; ii++) {
    const getProductCard = function () {
      const object = {};
      object.autor = author[ii];
      object.offer = createOffer(locationArray[ii]);
      object.location = locationArray[ii];
      return productsData.push(object);
    };
    getProductCard();
  }
  return productsData;
};

createProductCards(countElementsArray);
// console.log(productsData);
