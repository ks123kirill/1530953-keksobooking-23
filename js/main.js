import './form-validation.js';
import {getData} from './fetch.js';
import {getFilteredData, formFilterListener} from './cards-filter.js';
import {debounce} from './utils.js';

getData((data) => {
  getFilteredData(data);
  formFilterListener(debounce(() => getFilteredData(data)));
  // formFilterListener(getFilteredData(data)); Почему без cb не работает?
});
