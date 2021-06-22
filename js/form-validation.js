const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

const FIRST_VALUE_ROOM_NUMBER = '1';
const SECOND_VALUE_ROOM_NUMBER = '2';
const THIRD_VALUE_ROOM_NUMBER = '3';
const FORTH_VALUE_ROOM_NUMBER = '100';

const ONE_GUEST_CAPACITY = '1';
const TWO_GUEST_CAPACITY = '2';
const THREE_GUEST_CAPACITY = '3';
const NOBODY_GUEST_CAPACITY = '0';

const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adPriceInput = adForm.querySelector('#price');
const adRoomNumberInput = adForm.querySelector('#room_number');
const adCapacityInput = adForm.querySelector('#capacity');
const adCapacityInputOptions = adCapacityInput.children;

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

adRoomNumberInput.addEventListener('change', () => {
  const valueRoomNumber = adRoomNumberInput.value;

  if (valueRoomNumber === FIRST_VALUE_ROOM_NUMBER) {
    for (let i = 0; i < adCapacityInputOptions.length; i++) {
      if (adCapacityInputOptions[i].value !== ONE_GUEST_CAPACITY) {
        adCapacityInputOptions[i].disabled = true;
        continue;
      }
      adCapacityInputOptions[i].disabled = false;
      adCapacityInputOptions[i].selected = true;
    }
  }

  else if (valueRoomNumber === SECOND_VALUE_ROOM_NUMBER) {
    for (let i = 0; i < adCapacityInputOptions.length; i++) {
      if (adCapacityInputOptions[i].value !== ONE_GUEST_CAPACITY) {
        if (adCapacityInputOptions[i].value !== TWO_GUEST_CAPACITY) {
          adCapacityInputOptions[i].disabled = true;
          continue;
        }
      }
      adCapacityInputOptions[i].disabled = false;
      adCapacityInputOptions[i].selected = true;
    }
  }

  else if (valueRoomNumber === THIRD_VALUE_ROOM_NUMBER) {
    for (let i = 0; i < adCapacityInputOptions.length; i++) {
      if ((adCapacityInputOptions[i].value === ONE_GUEST_CAPACITY) || (adCapacityInputOptions[i].value === TWO_GUEST_CAPACITY) || (adCapacityInputOptions[i].value === THREE_GUEST_CAPACITY)) {
        adCapacityInputOptions[i].disabled = false;
        adCapacityInputOptions[i].selected = true;
        continue;
      }
      adCapacityInputOptions[i].disabled = true;
    }
  }

  else if (valueRoomNumber === FORTH_VALUE_ROOM_NUMBER) {
    for (let i = 0; i < adCapacityInputOptions.length; i++) {
      if (adCapacityInputOptions[i].value !== NOBODY_GUEST_CAPACITY) {
        adCapacityInputOptions[i].disabled = true;
        continue;
      }
      adCapacityInputOptions[i].disabled = false;
      adCapacityInputOptions[i].selected = true;
    }
  }
});
