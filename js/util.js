const ALERT_SHOW_TIME = 5000;

function randomInteger(min, max) {
  if (min >= 0 && max >= 0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

function randomFloat(min, max, countNumber) {
  if (min >= 0 && max >= 0 && min < max && countNumber >= 0) {
    const rand = min + Math.random() * (max - min);
    return rand.toFixed(countNumber);
  }
  return 'Ошибка! Введенные значения диапазона недопустимы!';
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.width = '500px';
  alertContainer.style.height = '200px';
  alertContainer.style.backgroundColor = '#353535';
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.bottom = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.margin = 'auto';
  alertContainer.style.padding = '80px 50px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


export {randomInteger, randomFloat, showAlert, isEscEvent};
