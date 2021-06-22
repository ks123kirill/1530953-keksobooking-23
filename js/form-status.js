const adForm = document.querySelector('.ad-form');
const adFormChildren = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;

const getDeactivationForm = function () {
  adForm.classList.add('ad-form--disabled');
  for (let i = 0; i < adFormChildren.length; i++) {
    adFormChildren[i].disabled = true;
  }

  mapFilters.classList.add('ad-form--disabled');
  for (let i = 0; i < mapFiltersChildren.length; i++) {
    mapFiltersChildren[i].disabled = true;
  }
};

const getActivationForm = function () {
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < adFormChildren.length; i++) {
    adFormChildren[i].disabled = false;
  }

  mapFilters.classList.remove('ad-form--disabled');
  for (let i = 0; i < mapFiltersChildren.length; i++) {
    mapFiltersChildren[i].disabled = false;
  }
};

export {getDeactivationForm, getActivationForm};
