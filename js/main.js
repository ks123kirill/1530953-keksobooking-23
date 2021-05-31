//https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function randomFloat(min, max, countNumber) {
  if (min >= 0 && max >= 0 && min < max && countNumber >= 0) {
    const rand = min + Math.random() * (max - min);
    return rand.toFixed(countNumber);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

randomInteger(1, 10);
randomFloat(0.1, 0.11, 5);
