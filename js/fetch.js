import {showAlert} from './utils.js';
import {filterDisabled} from './form-status.js';
const dataServer = [];

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
      dataServer.push(ads); // как то можно через функцию, не разобрался.
    })
    .catch(() => {
      filterDisabled();
      showAlert('Ошибка загрузки данных с сервера : - (');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess(true);
      }
      else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData, dataServer};
