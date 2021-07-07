import {isEscEvent} from './util.js';

const successTemplateFragment = document.querySelector('#success').content;
const successFragment = successTemplateFragment.querySelector('.success');
const popupSuccess = successFragment.cloneNode(true);
document.body.append(popupSuccess);
popupSuccess.classList.add('hidden');

const errorTemplateFragment = document.querySelector('#error').content;
const errorFragment = errorTemplateFragment.querySelector('.error');
const popupError = errorFragment.cloneNode(true);
document.body.append(popupError);
const errorButton = document.querySelector('.error__button');
popupError.classList.add('hidden');


const closePopup = () => {
  popupSuccess.classList.add('hidden');
  popupError.classList.add('hidden');
  // eslint-disable-next-line no-use-before-define
  removePopupListener();
};

const onPopupEscdown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

const onPopupClick = () => {
  closePopup();
};

const getPopupSuccess = () => {
  popupSuccess.classList.remove('hidden');
  document.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onPopupEscdown);
};

const getPopupError = () => {
  popupError.classList.remove('hidden');
  document.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onPopupEscdown);
};

const onErrorButtonClick = () => {
  popupError.classList.remove('hidden');
};

errorButton.addEventListener('click', onErrorButtonClick);

const removePopupListener = () => {
  document.removeEventListener('click', onPopupClick);
  document.removeEventListener('keydown', onPopupEscdown);
  errorButton.removeEventListener('click', onErrorButtonClick);
};

export {getPopupSuccess, getPopupError};
