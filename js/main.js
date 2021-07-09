import './form-validation.js';
import {getData} from './fetch.js';
import {getMapPoints} from './map.js';

getData((data) => {
  getMapPoints(data.slice());
});
