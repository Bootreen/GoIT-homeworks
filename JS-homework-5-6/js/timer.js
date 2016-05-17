var buttonStartStop = document.getElementById('button-start-stop'),
    buttonSplit = document.getElementById('button-split'),
    buttonReset = document.getElementById('button-reset'),
    timerClock = document.getElementById('timer-clock'),
    resultsContainer = document.querySelector('.results'),
    timerStarted = false,
    resultCounter = 1,
    tickerHandler,
    startTime;

buttonStartStop.addEventListener('click', handleStartStop);
buttonSplit.addEventListener('click', handleSplit);
buttonReset.addEventListener('click', handleReset);

function handleStartStop() {
  if (!timerStarted) {
    timerStarted = true;
    buttonSplit.removeAttribute('disabled');
    buttonStartStop.textContent = 'Stop';
    buttonStartStop.classList.remove('button-green');
    buttonStartStop.classList.add('button-red');
    startTime = Date.now();
    tick();
  } else {
    timerStarted = false;
    buttonSplit.setAttribute('disabled', 'disabled');
    buttonStartStop.textContent = 'Start';
    buttonStartStop.classList.remove('button-red');
    buttonStartStop.classList.add('button-green');
    cancelAnimationFrame(tickerHandler);
    postResult ('stop');
  }
}

function handleSplit() {
  postResult ('split');
}

function handleReset() {
  // Для правильной отработки вызова handleStartStop из сброса
  // таймер должен считаться запущенным, даже если это не так
  timerStarted = true;
  handleStartStop();
  timerClock.textContent = '00:00:00.000';
  resultCounter = 1;
  // Методично удаляем все результаты
  while (document.querySelector('h2')) {
    resultsContainer.removeChild(document.querySelector('h2'));
  }
}

function postResult(resultType) {
  // Если результатов набралось больше 15, начинаем стирать первые
  // по стековому принципу, чтобы не рвало верстку страницы
  if (resultCounter > 15) {
    resultsContainer.removeChild(document.querySelector('h2'));
  }
  result = document.createElement('h2');
  result.textContent = resultCounter + ' ' + resultType + ': ' + timerClock.textContent;
  resultsContainer.appendChild(result);
  resultCounter++;
}

function tick() {
  timerClock.textContent = getTimeStamp(Date.now() - startTime);
  tickerHandler = requestAnimationFrame(tick);
}

function getTimeStamp (msecs) {
  function div(a, b) {return [Math.floor(a / b), a % b];}
  // Проверяем второй аргумент на длину по первому аргументу.
  // Если длина меньше заданной, рекурсивно вызываем
  // pad и дописываем '0' прямо в вызове
  function pad(c, v) {return v.length < c ? pad(c, '0' + v) : v;}
  var secs = div(msecs, 1000);
  var mins = div(secs[0], 60);
  var hours = div(mins[0], 60);
  return [[pad(2, hours[0] + ''), pad(2, hours[1] + ''), pad(2, mins[1] + '')].join(':'), pad(3, secs[1] + '')].join('.');
}
