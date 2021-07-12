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

function setHousingTypeChange (cb) {
  housingType.addEventListener('change', () => {
    cb();
  });
}

function setHousingRoomsChange (cb) {
  housingRooms.addEventListener('change', () => {
    cb();
  });
}

function setHousingPriceChange (cb) {
  housingPrice.addEventListener('change', () => {
    cb();
  });
}

function setHousingGuestsChange (cb) {
  housingGuests.addEventListener('change', () => {
    cb();
  });
}

function setHousingFeaturesChange (cb) {
  housingFeatures.addEventListener('change', () => {
    cb();
  });
}

function getFilteredData (data) {
  const array = data
    .slice()
    .sort(compareCards);

  const rankMax = array[0].rank;

  function isRankMax(value) {
    return value ? value.rank === rankMax : false;
  }

  const newArray = array.filter(isRankMax);

  getMapPoints(newArray.slice(0, MAX_POINTS_MAP));
}

const getCardRank = (card) => {

  let rank = 0;

  if (card.offer.type === housingType.value) {
    rank += 1;
  }

  if ((card.offer.price >= keyHousingPrice[housingPrice.value].min) &&
      (card.offer.price <= keyHousingPrice[housingPrice.value].max) &&
      housingPrice.value !== 'any') {
    rank += 1;
  }

  if (card.offer.rooms === Number(housingRooms.value)) {
    rank += 1;
  }

  if (card.offer.guests === Number(housingGuests.value)) {
    rank += 1;
  }

  const inputListFeatures = housingFeatures.querySelectorAll('.map__checkbox');
  if (card.offer.features) {
    for (let i = 0; i < inputListFeatures.length; i++ ) {
      for (let j = 0; j < card.offer.features.length; j++) {
        if (inputListFeatures[i].checked &&
          (inputListFeatures[i].value === card.offer.features[j])) {
          rank += 1;
        }
      }
    }
  }

  card.rank = rank;
  return rank;
};


function compareCards (cardA, cardB) {
  const rankA = getCardRank(cardA);
  const rankB = getCardRank(cardB);

  return rankB - rankA;
}

export {getFilteredData, setHousingTypeChange, setHousingPriceChange, setHousingRoomsChange, setHousingGuestsChange, setHousingFeaturesChange};
