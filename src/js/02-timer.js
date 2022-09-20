import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() < Date.now()) {
          timer.startBtn.disabled = true;
          Notify.failure('Please choose a date in the future');
          return
      } else {
            timer.startBtn.disabled = false;
        }
    },
}
flatpickr("#datetime-picker", options);

class Timer {
    constructor() {
        this.intervalId = null;  
        this.startBtn = document.querySelector('button');
        this.inputEl = document.querySelector('input');
        this.timerDays = document.querySelector('span[data-days]')
        this.timerHours = document.querySelector('span[data-hours]')
        this.timerMinutes = document.querySelector('span[data-minutes]')
        this.timerSeconds = document.querySelector('span[data-seconds]')
        this.startBtn.disabled = true;
        this.addListeners()

    }

    start = () => {
        this.startBtn.disabled = true;
        const selectedDate = new Date(this.inputEl.value).getTime();

        this.intervalId = setInterval(() => {
            const currentTime = Date.now()
            const endTime = selectedDate - currentTime;
            const {days, hours, minutes, seconds } = this.convertMs(endTime)
            console.log(`${days}:${hours}:${minutes}:${seconds}`)
            this.timerDays.textContent = `${days}`;
            this.timerHours.textContent = `${hours}`;
            this.timerMinutes.textContent = `${minutes}`;
            this.timerSeconds.textContent = `${seconds}`;

            if (endTime <= 1000) {
                this.stop()
            }
        }, 1000)
    }

    stop = () => {
        this.startBtn.disabled = false;
        clearInterval(this.intervalId)
    }
    convertMs = (ms) => {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = this.addLeadingZero(Math.floor(ms / day));
        const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    }    

    addLeadingZero = (value) => {
        return String(value).padStart(2, "0")
    }
    addListeners = () => {
        this.startBtn.addEventListener('click', () => {
   timer.start()
})}
}

const timer = new Timer();


