import './form-validation.js';
import {getData} from './fetch.js';
import {getFilteredData, setHousingTypeChange, setHousingPriceChange, setHousingRoomsChange, setHousingGuestsChange, setHousingFeaturesChange} from './cards-filter.js';
import {debounce} from './utils.js';

getData((data) => {
  getFilteredData(data);

  setHousingTypeChange(() => getFilteredData(data));
  setHousingPriceChange(() => getFilteredData(data));
  setHousingRoomsChange(() => getFilteredData(data));
  setHousingGuestsChange(() => getFilteredData(data));
  setHousingFeaturesChange(debounce(() => getFilteredData(data)));
});
