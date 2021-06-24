const adForm = document.querySelector('.ad-form');
const adFormChildren = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;

const statusActivityPage = function (isData) {
  if (!isData) {
    adForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('ad-form--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
  }

  for (let i = 0; i < adFormChildren.length; i++) {
    adFormChildren[i].disabled = !isData;
  }

  for (let i = 0; i < mapFiltersChildren.length; i++) {
    mapFiltersChildren[i].disabled = !isData;
  }
};

export {statusActivityPage};
