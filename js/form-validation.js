const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;
const getValueCapacityRoom = function (key) {
  const itemList = {
    '1 room': '1',
    '2 rooms': '2',
    '3 rooms': '3',
    '100 rooms': '100',
    '1 guest': '1',
    '2 guests': '2',
    '3 guests': '3',
    '0 guests': '0',
  };

  const findValue = function (item) {
    return itemList[item];
  };

  return findValue(key);
};

const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomNumberFieldset = adForm.querySelector('#room_number');
const adRoomNumberInputList = adRoomNumberFieldset.children;
const adCapacityInput = adForm.querySelector('#capacity');
const adCapacityInputList = adCapacityInput.children;

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
  for (let i = 0; i < adRoomNumberInputList.length; i++) {

    if ((adRoomNumberInputList[i].value = getValueCapacityRoom('1 room'))) {

      for (let j = 0; j < adCapacityInputList.length; j++) {

        if (adCapacityInputList[j].value !== getValueCapacityRoom('1 guest')) {
          adCapacityInputList[j].disabled = true;
        }
      }
    }
  }
};

/* Функция устанавливает исходные настройки выбора: 1 room - 1 guest, выбор других опций количества guests заблокирован для 1 room. */
getDisabledCapacity;

const filterChangeHandler = function (evt) {
  const valueRoomNumber = evt.target.value;
  /* Есть проблема: после getDisabledCapacity(),
  evt.target.value всегда равно 1 при выборе количества комнат. Почему?*/

  for (let i = 0; i < adCapacityInputList.length; i++) {

    if ((valueRoomNumber === getValueCapacityRoom('100 rooms')) &&
      (adCapacityInputList[i].value === getValueCapacityRoom('0 guests'))) {
      adCapacityInputList[i].disabled = false;
      adCapacityInputList[i].selected = true;
      continue;
    }

    else if ((valueRoomNumber !== getValueCapacityRoom('100 rooms')) &&
      (valueRoomNumber >= adCapacityInputList[i].value) &&
      (adCapacityInputList[i].value !== getValueCapacityRoom('0 guests'))) {
      adCapacityInputList[i].disabled = false;
      adCapacityInputList[i].selected = true;
      continue;
    }

    adCapacityInputList[i].disabled = true;
  }
};

adRoomNumberFieldset.addEventListener('change', filterChangeHandler);
