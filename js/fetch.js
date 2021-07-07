import {showAlert} from './util.js';
import {getPopupSuccess, getPopupError} from './modals.js';
import {filterDisabled} from './form-status.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch((err) => {
      err;
      filterDisabled();
      showAlert('Ошибка загрузки данных с сервера : - (');
    });
};

const sendData = (body, adFormReset, mapFiltersReset) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        getPopupSuccess();
        adFormReset; // Не восстанавливается адрес
        mapFiltersReset;
      }
      else {
        getPopupError();
      }
    })
    .catch(() => {
      getPopupError();
    });
};

export {getData, sendData};
