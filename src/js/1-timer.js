import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

const startButton = document.querySelector('[data-start]');
const inputData = document.getElementById('datetime-picker');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

startButton.disabled = true;
startButton.addEventListener('click', onClickButton);

let userSelectedDate;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
        position: 'center',
        backgroundColor: 'orange',
        maxWidth: '300px',
      });
      return;
    }
    startButton.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const flatpickrObj = flatpickr(inputData, options);

function onClickButton() {
  clearInterval(timerId);
  const currentSelectedDate = userSelectedDate;
  timerId = setInterval(() => {
    const diff = currentSelectedDate - Date.now();

    if (diff <= 0) {
      clearInterval(timerId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);
    daysElement.textContent = String(days).padStart(2, '0');
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }, 1000);

  startButton.disabled = true;
}
