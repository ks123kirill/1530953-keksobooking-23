const adForm = document.querySelector('.ad-form');
const adFormChildren = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;

const getActivityBlock = (isData, form, collection) => {
  if (!isData) {
    form.classList.add('ad-form--disabled');
  } else {
    form.classList.remove('ad-form--disabled');
  }
  for (let i = 0; i < collection.length; i++) {
    collection[i].disabled = !isData;
  }
};

const getStatusActivityAdForm = (isData) => getActivityBlock(isData, adForm, adFormChildren);

const getStatusActivityFilter = (isData) => getActivityBlock(isData, mapFilters, mapFiltersChildren);

export {getStatusActivityAdForm, getStatusActivityFilter};
