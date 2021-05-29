//https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function randomFloat(min, max, countNumber) {
  const rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(countNumber);
}

randomInteger(1, 10);
randomFloat(1, 10, 3);
