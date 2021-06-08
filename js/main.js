const typeOfferArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkOfferArray = ['12:00', '13:00', '14:00'];
const featuresOfferArray = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosOfferArray = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const countElementsArray = 10;
const firstIndexArray = 0;
const priceMin = 1000;
const priceMax = 100000;
const roomsMin = 1;
const roomsMax = 10;
const guestsMin = 1;
const guestsMax = 10;
const locationXMin = 35.65000;
const locationXMax = 35.70000;
const locationYMin = 139.70000;
const locationYMax = 139.80000;

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
  const randomType = typeOfferArray[randomInteger(firstIndexArray, lastIndexArray)];
  return randomType;
};

const getOfferCheck = () => {
  const lastIndexArray = checkOfferArray.length - 1;
  const randomCheck = checkOfferArray[randomInteger(firstIndexArray, lastIndexArray)];
  return randomCheck;
};

const getOfferFeatures = () => {
  const lastIndexArray = featuresOfferArray.length - 1;
  const randomFeatures = featuresOfferArray.slice(firstIndexArray, randomInteger(firstIndexArray + 1, lastIndexArray + 1));
  return randomFeatures;
};

const getOfferPhotos = () => {
  const lastIndexArray = photosOfferArray.length - 1;
  const randomPhotos = photosOfferArray.slice(firstIndexArray, randomInteger(firstIndexArray + 1, lastIndexArray + 1));
  return randomPhotos;
};

const createOffer = function (location) {
  const object = {
    title: 'Очень заманчивое предложение!',
    address: `${String(location.lat)}, ${String(location.lng)}`,
    price: randomInteger(priceMin, priceMax),
    type: getOfferType(),
    rooms: randomInteger(roomsMin, roomsMax),
    guests: randomInteger(guestsMin, guestsMax),
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
    lat: randomFloat(locationXMin, locationXMax, 5),
    lng: randomFloat(locationYMin, locationYMax, 5),
  };
  return object;
};

const createProductCards = function (elements) {
  const array = [];
  for (let ii = 1; ii <= elements; ii++) {
    const getProductCard = function () {
      const locationValue = getLocation();
      const object = {author:getAuthor(ii), offer:createOffer(locationValue), location:locationValue};
      return array.push(object);
    };
    getProductCard();
  }
  return array;
};

const productsData = createProductCards(countElementsArray);
productsData; // что бы eslint не ругался
