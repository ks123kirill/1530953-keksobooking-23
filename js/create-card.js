const mapCanvas = document.querySelector('.map__canvas');
const cardTemplateFragment = document.querySelector('#card').content;
const templateCard = cardTemplateFragment.querySelector('.popup');
const element = templateCard.cloneNode(true);
const popupTitle = element.querySelector('.popup__title');
const popupAddress = element.querySelector('.popup__text--address');
const popupPrice = element.querySelector('.popup__text--price');
const popupType = element.querySelector('.popup__type');
const popupCapacity = element.querySelector('.popup__text--capacity');
const popupTime = element.querySelector('.popup__text--time');
const featureList = element.querySelector('.popup__features');
const popupDescription = element.querySelector('.popup__description');
const popupPhotos = element.querySelector('.popup__photos');
const popupPhoto = popupPhotos.querySelector('.popup__photo');
const popupAvatar = element.querySelector('.popup__avatar');

const getCardType = function (key) {
  const typeList = {
    'palace': 'Дворец',
    'flat': 'Квартира',
    'house': 'Дом',
    'bungalow': 'Бунгало',
    'hotel': 'Отель',
  };

  const findValue = function (type) {
    return typeList[type];
  };

  return findValue(key);
};

const getCardFeatures = function (dataFeatures) {
  const modifiers = dataFeatures.map((feature) => `popup__feature--${feature}`);
  featureList.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];
    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });
};

const getCardPhotos = function (data) {
  data.forEach((item) => {
    const newImg = popupPhoto.cloneNode(true);
    newImg.src = item;
    popupPhotos.append(newImg);
  });
  const photoCollection = popupPhotos.querySelectorAll('.popup__photo');
  photoCollection[0].remove();
};

const isDataForFunction = (data, item) => {
  if (data) {
    return data;
  }
  return item.style = 'display: none';
};

const isDataForVariable = (data, item, keyword) => {

  if (data) {
    const keyList = {
      'textContent': item.textContent = data,
      'src': item.src = data,
      'information': data, // getCardFeatures() и getCardPhotos() не правильно работают с этим возвращенным значением, поэтому не использовал
    };

    const findValue = function (key) {
      return keyList[key];
    };

    return findValue(keyword);
  }
  else {
    return item.style = 'display: none';
  }
};


const getCard = function (index) {
  isDataForVariable(index.offer.title, popupTitle, 'textContent');
  isDataForVariable(index.offer.address, popupAddress, 'textContent');
  isDataForVariable(index.offer.price, popupPrice, 'textContent');
  popupPrice.insertAdjacentHTML('beforeend', '<span> ₽/ночь</span>');
  isDataForVariable(getCardType(index.offer.type), popupType, 'textContent');

  if (index.offer.rooms && index.offer.guests) {
    popupCapacity.textContent =
  `${index.offer.rooms} комнаты для ${index.offer.guests} гостей`;
  } else {
    popupCapacity.style = 'display: none';
  }

  if (index.offer.checkin && index.offer.checkout) {
    popupTime.textContent =
    `Заезд после ${index.offer.checkin}, выезд до ${index.offer.checkout}`;
  } else {
    popupTime.style = 'display: none';
  }

  getCardFeatures(isDataForFunction(index.offer.features, featureList));
  isDataForVariable(index.offer.description, popupDescription, 'textContent');
  getCardPhotos(isDataForFunction(index.offer.photos, popupPhotos));
  isDataForVariable(index.author.avatar, popupAvatar, 'src');

  mapCanvas.appendChild(element);
};

// console.log(mapCanvas);

export {getCard};
