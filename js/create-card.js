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

const isData = (data, item) => {
  if (data) {
    return data;
  }
  return item.style = 'display: none';
};

const getCard = function (index) {
  popupTitle.textContent = isData(index.offer.title, popupTitle);
  popupAddress.textContent = isData(index.offer.address, popupAddress);
  popupPrice.textContent = isData(index.offer.price, popupPrice);
  popupPrice.insertAdjacentHTML('beforeend', '<span> ₽/ночь</span>');
  popupType.textContent = isData(getCardType(index.offer.type), popupType);
  popupCapacity.textContent =
  `${isData(index.offer.rooms, popupCapacity)} комнаты для ${isData(index.offer.guests, popupCapacity)} гостей`;
  popupTime.textContent =
  `Заезд после ${isData(index.offer.checkin, popupTime)}, выезд до ${isData(index.offer.checkout, popupTime)}`;
  getCardFeatures(isData(index.offer.features, featureList));
  popupDescription.textContent = isData(index.offer.description, popupDescription);
  getCardPhotos(isData(index.offer.photos, popupPhotos));
  popupAvatar.src = isData(index.author.avatar, popupAvatar);

  mapCanvas.appendChild(element);
};

// console.log(mapCanvas);

export {getCard};
