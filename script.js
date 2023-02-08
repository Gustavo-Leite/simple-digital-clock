const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hour < 10) hour = '0' + hour;

  if (min < 10) min = '0' + min;

  if (sec < 10) sec = '0' + sec;

  hours.textContent = hour;
  minutes.textContent = min;
  seconds.textContent = sec;

})