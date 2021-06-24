const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;
const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomNumberSelect = adForm.querySelector('#room_number');
const adCapacitySelect = adForm.querySelector('#capacity');
const adCapacityInputList = adCapacitySelect.children;
const keyValueList = {
  '100 rooms': '100',
  '0 guests': '0',
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

const filterChangeHandler = function (evt) {
  const valueRoomNumber = evt.target.value;

  for (let i = 0; i < adCapacityInputList.length; i++) {

    if (((valueRoomNumber === keyValueList['100 rooms']) &&
      (adCapacityInputList[i].value === keyValueList['0 guests'])) ||
      ((valueRoomNumber !== keyValueList['100 rooms']) &&
      (valueRoomNumber >= adCapacityInputList[i].value) &&
      (adCapacityInputList[i].value !== keyValueList['0 guests']))) {
      adCapacityInputList[i].disabled = false;
      adCapacityInputList[i].selected = true;
      continue;
    }

    adCapacityInputList[i].disabled = true;
  }
};

adRoomNumberSelect.addEventListener('change', filterChangeHandler);
