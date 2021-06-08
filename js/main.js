const typeOfferArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkOfferArray = ['12:00', '13:00', '14:00'];
const featuresOfferArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosOfferArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const QUANTITY_ELEMENTS_ARRAY = 10;
const FIRST_INDEX_ARRAY = 0;
const PRICE_MIN = 1000;
const PRICE_MAX = 100000;
const ROOMS_MIN = 1;
const ROOMS_MAX = 10;
const GUESTS_MIN = 1;
const GUESTS_MAX = 10;
const LOCATION_X_MIN = 35.65000;
const LOCATION_X_MAX = 35.70000;
const LOCATION_Y_MIN = 139.70000;
const LOCATION_Y_MAX = 139.80000;
const NUMBERS_AFTER_POINT = 5;

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

const getAuthor = (iteration) => {
  const object = {avatar:`img/avatars/user0${iteration}.png`};
  return object;
};

const getOfferType = () => {
  const lastIndexArray = typeOfferArray.length - 1;
  const randomType = typeOfferArray[randomInteger(FIRST_INDEX_ARRAY, lastIndexArray)];
  return randomType;
};

const getOfferCheck = () => {
  const lastIndexArray = checkOfferArray.length - 1;
  const randomCheck = checkOfferArray[randomInteger(FIRST_INDEX_ARRAY, lastIndexArray)];
  return randomCheck;
};

const getOfferFeatures = () => {
  const lastIndexArray = featuresOfferArray.length - 1;
  const randomFeatures = featuresOfferArray.slice(FIRST_INDEX_ARRAY, randomInteger(FIRST_INDEX_ARRAY + 1, lastIndexArray + 1));
  return randomFeatures;
};

const getOfferPhotos = () => {
  const lastIndexArray = photosOfferArray.length - 1;
  const randomPhotos = photosOfferArray.slice(FIRST_INDEX_ARRAY, randomInteger(FIRST_INDEX_ARRAY + 1, lastIndexArray + 1));
  return randomPhotos;
};

const createOffer = function (location) {
  const object = {
    title: 'Очень заманчивое предложение!',
    address: `${String(location.lat)}, ${String(location.lng)}`,
    price: randomInteger(PRICE_MIN, PRICE_MAX),
    type: getOfferType(),
    rooms: randomInteger(ROOMS_MIN, ROOMS_MAX),
    guests: randomInteger(GUESTS_MIN, GUESTS_MAX),
    checkin: getOfferCheck(),
    checkout:  getOfferCheck(),
    features: getOfferFeatures(),
    description: 'Современный ремонт, сделанный совсем недавно. Хорошая мебель и уютная обстановка. удобное расположение.',
    photos: getOfferPhotos(),
  };
  return object;
};

const getLocation = () => {
  const object = {
    lat: randomFloat(LOCATION_X_MIN, LOCATION_X_MAX, NUMBERS_AFTER_POINT),
    lng: randomFloat(LOCATION_Y_MIN, LOCATION_Y_MAX, NUMBERS_AFTER_POINT),
  };
  return object;
};

const createProductCards = function (elements) {
  const array = [];
  for (let ii = 1; ii <= elements; ii++) {
    const locationValue = getLocation();
    const object = {author:getAuthor(ii), offer:createOffer(locationValue), location:locationValue};
    array.push(object);
  }
  return array;
};

const productsData = createProductCards(QUANTITY_ELEMENTS_ARRAY);
productsData; // что бы eslint не ругался
