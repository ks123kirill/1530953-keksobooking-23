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
const adTimeInList = adTimeInSelect.children;
const adTimeOutSelect = adForm.querySelector('#timeout');
const adTimeOutList = adTimeOutSelect.children;
const keyRoomGuestList = {
  '100 rooms': '100',
  '0 guests': '0',
};

const keyTypeList = {
  'bungalow': '0',
  'flat': '5000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - valueLength} символов`);
  }
  else if (valueLength > MAX_TITLE_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы`);
  }
  else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
});

adPriceInput.addEventListener('input', () => {
  const valuePriceInput = adPriceInput.value;

  if (valuePriceInput > MAX_PRICE_VALUE) {
    adPriceInput.setCustomValidity(`Максимальная стоимость ${MAX_PRICE_VALUE}`);
  }
  else {
    adPriceInput.setCustomValidity('');
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

  adPriceInput.placeholder = keyTypeList[valueType];
  adPriceInput.min = keyTypeList[valueType];
};

adTypeSelect.addEventListener('change', typeChangeHandler);

// const timeInChangeHandler = function (evt) {
//   const valueTimeIn = evt.target.value;
//   for (let i = 0; i < adTimeOutList.length; i++) {
//     adTimeOutList[i].selected = valueTimeIn === adTimeOutList[i].value;
//   }
// };

// adTimeInSelect.addEventListener('change', timeInChangeHandler);

// const timeOutChangeHandler = function (evt) {
//   const valueTimeOut = evt.target.value;
//   for (let i = 0; i < adTimeInList.length; i++) {
//     adTimeInList[i].selected = valueTimeOut === adTimeInList[i].value;
//   }
// };

// adTimeOutSelect.addEventListener('change', timeOutChangeHandler);

const getSelectedTime = function (valueTime, collection) {
  for (let i = 0; i < collection.length; i++) {
    collection[i].selected = valueTime === collection[i].value;
  }
};

const timeChangeHandler = function (evt) {
  const valueTime = evt.target.value;
  let collection;
  if (evt.target.id === 'timein') {
    collection = adTimeOutList;
  }
  else collection = adTimeInList;

  getSelectedTime(valueTime, collection);
};

adTimeInSelect.addEventListener('change', timeChangeHandler);
adTimeOutSelect.addEventListener('change', timeChangeHandler);
