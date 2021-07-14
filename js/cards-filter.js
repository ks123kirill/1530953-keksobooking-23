import {getMapPoints} from './map.js';

const formFilters = document.querySelector('.map__filters');
const housingType = formFilters.querySelector('#housing-type');
const housingPrice = formFilters.querySelector('#housing-price');
const housingRooms = formFilters.querySelector('#housing-rooms');
const housingGuests = formFilters.querySelector('#housing-guests');
const housingFeatures = formFilters.querySelector('#housing-features');
const MAX_POINTS_MAP = 10;
const keyHousingPrice = {
  any: {
    min: 0,
    max: 1000000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  low: {
    min: 0,
    max: 10000,
  },
  high: {
    min: 50000,
    max: 1000000,
  },
};

function formFilterListener (cb) {
  formFilters.addEventListener('change', () => {
    cb();
  });
}

function getFilteredData (data) {
  const array = data
    .slice()
    .filter(isCardValid);
  getMapPoints(array.slice(0, MAX_POINTS_MAP));
}

function isCardValid (item) {
  return (isHousingType(item) &&
          isHousingPrice(item) &&
          isHousingRooms(item) &&
          isHousingGuests(item) &&
          isHousingFeatures(item));
}

function isHousingType (item) {
  return ((item.offer.type === housingType.value) || (housingType.value === 'any'));
}

function isHousingPrice (item) {
  return (((item.offer.price >= keyHousingPrice[housingPrice.value].min) &&
  (item.offer.price <= keyHousingPrice[housingPrice.value].max)) ||
  (housingPrice.value === 'any'));
}

function isHousingRooms (item) {
  return ((item.offer.rooms === Number(housingRooms.value)) || (housingRooms.value === 'any'));
}

function isHousingGuests (item) {
  return ((item.offer.guests === Number(housingGuests.value)) || (housingGuests.value === 'any'));
}

function isHousingFeatures (item) {
  const featuresCheckedList = housingFeatures.querySelectorAll('input:checked');
  let flag = !featuresCheckedList.length >= 1;
  if (item.offer.features && featuresCheckedList.length >= 1) {
    for (let i = 0; i < featuresCheckedList.length; i++) {
      if (!item.offer.features.includes(featuresCheckedList[i].value)) {
        return flag = false;
      }
    }
    flag = true;
  }
  return flag;
}

export {getFilteredData, formFilterListener};
