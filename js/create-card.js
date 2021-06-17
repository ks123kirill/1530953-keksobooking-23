import {dataRandomArray} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplateFragment = document.querySelector('#card').content;
const templateCard = cardTemplateFragment.querySelector('.popup');
const fragment = document.createDocumentFragment();
const cardsRandom = dataRandomArray;

const getCardType = function (type) {
  let popupType = type;
  switch (popupType) {
    case 'flat': popupType = 'Квартира';
      break;
    case 'bungalow': popupType = 'Бунгало';
      break;
    case 'house': popupType = 'Дом';
      break;
    case 'palace': popupType = 'Дворец';
      break;
    case 'hotel': popupType = 'Отель';
      break;
    default: popupType = 'Ошибка! Тип жилья не определен';
  }
  return popupType;
};

const getCardFeatures = function (element, dataFeatures) {
  const featureList = element.querySelector('.popup__features');
  const modifiers = dataFeatures.map((feature) => `popup__feature--${feature}`);
  featureList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
};

const getCardPhotos = function (element, dataPhotos) {
  const photos = element.querySelector('.popup__photos');
  const photo = photos.querySelector('.popup__photo');
  dataPhotos.forEach((item) => {
    const newImg = photo.cloneNode(true);
    newImg.src = item;
    photos.append(newImg);
  });
  const photoCollection = photos.querySelectorAll('.popup__photo');
  photoCollection[0].remove();
};

const isData = function (element) {
  if (!element.querySelector('.popup__title').textContent) {
    element.querySelector('.popup__title').style = 'display: none';
  }
  else if (!element.querySelector('.popup__text--address').textContent) {
    element.querySelector('.popup__text--address').style = 'display: none';
  }
  else if (!element.querySelector('.popup__text--price').textContent) {
    element.querySelector('.popup__text--price').style = 'display: none';
  }
  else if (!element.querySelector('.popup__type').textContent) {
    element.querySelector('.popup__type').style = 'display: none';
  }
  else if (!element.querySelector('.popup__text--capacity').textContent) {
    element.querySelector('.popup__text--capacity').style = 'display: none';
  }
  else if (!element.querySelector('.popup__text--time').textContent) {
    element.querySelector('.popup__text--time').style = 'display: none';
  }
  else if (!element.querySelector('.popup__features').children) {
  // В DOM дереве не прописывает style = 'display: none' во время тестов, не уверен что if срабатывает при таком условии
    element.querySelector('.popup__features').style = 'display: none';
  }
  else if (!element.querySelector('.popup__description').textContent) {
    element.querySelector('.popup__description').style = 'display: none';
  }
  else if (!element.querySelector('.popup__photos').children) {
    element.querySelector('.popup__photos').style = 'display: none';
  }
  else if (!element.querySelector('.popup__avatar').src) {
    element.querySelector('.popup__avatar').style = 'display: none';
  }
};

cardsRandom.forEach((index) => {
  const element = templateCard.cloneNode(true);
  element.querySelector('.popup__title').textContent = index.offer.title;
  element.querySelector('.popup__text--address').textContent = index.offer.address;
  element.querySelector('.popup__text--price').textContent = index.offer.price;
  element.querySelector('.popup__text--price').insertAdjacentHTML('beforeend', '<span> ₽/ночь</span>');
  element.querySelector('.popup__type').textContent = getCardType(index.offer.type);
  element.querySelector('.popup__text--capacity').textContent =
    `${index.offer.rooms} комнаты для ${index.offer.guests} гостей`;
  element.querySelector('.popup__text--time').textContent =
    `Заезд после ${index.offer.checkin}, выезд до ${index.offer.checkout}`;
  getCardFeatures(element, index.offer.features);
  element.querySelector('.popup__description').textContent = index.offer.description;
  getCardPhotos(element, index.offer.photos);
  element.querySelector('.popup__avatar').src = index.author.avatar;

  isData(element);

  fragment.appendChild(element);
});

mapCanvas.appendChild(fragment);

const mapShowFirstItem = (collection) => {
  const filter = collection.children;
  for (let i = 1; i < filter.length; i++) {
    filter[i].style = 'display: none;';
  }
};

mapShowFirstItem(mapCanvas);
// console.log(mapCanvas);

export {mapCanvas};
