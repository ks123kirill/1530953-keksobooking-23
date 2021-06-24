import {dataRandomArray} from './data.js';
import {getCard} from './create-card.js';
import {statusActivityPage} from './form-status.js';

/* statusActivityPage() - Функция активация страницы. True - данные с сервера получены и страница активная, false - данные не получены и страница заблокирована */
statusActivityPage(true);
getCard(dataRandomArray[1]); // Функция создает одно объявление на основе переданного элемента из массива
