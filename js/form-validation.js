import {keyTypeList} from './create-card.js';
import {sendData} from './fetch.js';
import {adFormResetLocation} from './map.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;
const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomNumberSelect = adForm.querySelector('#room_number');
const adCapacitySelect = adForm.querySelector('#capacity');
const adCapacityInputList = adCapacitySelect.children;
const adTypeSelect = adForm.querySelector('#type');
const adTimeInSelect = adForm.querySelector('#timein');
const adTimeOutSelect = adForm.querySelector('#timeout');
const adFormReset = adForm.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');

const keyRoomGuestList = {
  '100 rooms': '100',
  '0 guests': '0',
};

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} символов`);
    adTitleInput.style.border = '3px solid red';
  }
  else if (valueLength > MAX_TITLE_LENGTH) {
    /* Chrome, FireFox не позволяют вводить символы превышающее maxlength="100" в разметке, поэтому эта валидация не показывается на экране */
    adTitleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы`);
  }
  else {
    adTitleInput.setCustomValidity('');
    adTitleInput.style.border = 'none';
  }
  adTitleInput.reportValidity();
});

adPriceInput.addEventListener('input', () => {
  const valuePriceInput = adPriceInput.value;
  const valuePlaceholder = adPriceInput.placeholder;

  if (valuePriceInput > MAX_PRICE_VALUE) {
    adPriceInput.setCustomValidity(`Максимальная стоимость ${MAX_PRICE_VALUE}`);
    adPriceInput.style.border = '3px solid red';
  }
  else if (valuePriceInput < Number(valuePlaceholder)) {
    adPriceInput.setCustomValidity(`Минимальная стоимость ${valuePlaceholder}`);
    adPriceInput.style.border = '3px solid red';
  }
  else {
    adPriceInput.setCustomValidity('');
    adPriceInput.style.border = 'none';
  }
  adPriceInput.reportValidity();
});

const getDisabledCapacity = function () {
  for (let i = 0; i < adCapacityInputList.length; i++) {
    if (!adCapacityInputList[i].selected) {
      adCapacityInputList[i].disabled = true;
    }
  }
};

/* getDisabledCapacity() устанавливает исходные настройки выбора: capacity options не имеющие атрибут selected, получают атрибут disabled. */
getDisabledCapacity();

const roomNumberChangeHandler = function (evt) {
  const valueRoomNumber = evt.target.value;

  for (let i = 0; i < adCapacityInputList.length; i++) {

    if (((valueRoomNumber === keyRoomGuestList['100 rooms']) &&
      (adCapacityInputList[i].value === keyRoomGuestList['0 guests'])) ||
      ((valueRoomNumber !== keyRoomGuestList['100 rooms']) &&
      (valueRoomNumber >= adCapacityInputList[i].value) &&
      (adCapacityInputList[i].value !== keyRoomGuestList['0 guests']))) {
      adCapacityInputList[i].disabled = false;
      adCapacityInputList[i].selected = true;
      continue;
    }

    adCapacityInputList[i].disabled = true;
  }
};

adRoomNumberSelect.addEventListener('change', roomNumberChangeHandler);

const typeChangeHandler = function (evt) {
  adPriceInput.value = null;
  const valueType = evt.target.value;

  adPriceInput.placeholder = keyTypeList[valueType].price;
  adPriceInput.min = keyTypeList[valueType].price;
};

adTypeSelect.addEventListener('change', typeChangeHandler);

const timeInChangeHandler = function (evt) {
  adTimeOutSelect.value = evt.target.value;
};

adTimeInSelect.addEventListener('change', timeInChangeHandler);

const timeOutChangeHandler = function (evt) {
  adTimeInSelect.value = evt.target.value;
};

adTimeOutSelect.addEventListener('change', timeOutChangeHandler);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(
    new FormData(evt.target),
    adForm.reset(),
    mapFilters.reset(),
  );
});

const adFormResetHandler = () => {
  adTitleInput.style.border = 'none';
  adPriceInput.style.border = 'none';
  /* Функция adFormResetLocation() прописана не явно! Не принимал параметром, потому что не работала почему то */
  adFormResetLocation(); // Не восстанавливается адрес
  mapFilters.reset(); // Временное решение. Не реализован сброс фильтрации меток, фильтр не работает.
};

adFormReset.addEventListener('click', adFormResetHandler);
