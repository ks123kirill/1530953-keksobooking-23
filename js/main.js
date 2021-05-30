//https://learn.javascript.ru/task/random-int-min-max
function randomInteger(min, max) {
  if (min >= 0 && max >= 0 && min <= max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function randomFloat(min, max, countNumber) {
  if (min >= 0 && max >= 0 && min <= max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand > max ? rand -= 1 : rand; // при умножении на Math.random(), rand может становится > max
    rand < min ? rand = min : rand; // если min = 0 и мах = 0, то при выполнении тернарного оператора с условием rand > max, rand будет отрицательным
    return rand.toFixed(countNumber);
  }
}

randomInteger(1, 10);
randomFloat(0, 5, 2);
