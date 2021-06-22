import {dataRandomArray} from './data.js';
import {getCard} from './create-card.js';
import {getDeactivationForm, getActivationForm} from './form-status.js';

getDeactivationForm(); // Вызвал что бы линтер не ругался
getActivationForm(); // Вызвал что бы линтер не ругался
getCard(dataRandomArray[1]); // Функция создает одно объявление на основе переданного элемента из массива
