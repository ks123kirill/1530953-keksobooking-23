import './form-validation.js';
import {getData} from './fetch.js';
import {getFilteredData, formFilterListener} from './cards-filter.js';
import {debounce} from './utils.js';
import './upload-photo.js';

getData((data) => {
  getFilteredData(data);
  formFilterListener(debounce(() => getFilteredData(data)));
});
