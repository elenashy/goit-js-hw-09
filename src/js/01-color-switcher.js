const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
}

refs.btnStart.addEventListener('click', onBtnStartClick)
refs.btnStop.addEventListener('click', onBtnStopClick)

let intervalId = null;

function onBtnStartClick() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    return intervalId = setInterval(() => {
        function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
    document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)

}

function onBtnStopClick() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;

    clearInterval(intervalId)
}