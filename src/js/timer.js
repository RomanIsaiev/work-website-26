// timer-one

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(endtime) + 24 * 60 * 60 * 1000);
      initializeClock('countdown', deadline);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function initializeClockTwo(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours-two');
  var minutesSpan = clock.querySelector('.minutes-two');
  var secondsSpan = clock.querySelector('.seconds-two');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(endtime) + 24 * 60 * 60 * 1000);
      initializeClockTwo('countdown-two', deadline);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

// function initializeClockThree(id, endtime) {
//   var clock = document.getElementById(id);
//   var hoursSpan = clock.querySelector(".hours-three");
//   var minutesSpan = clock.querySelector(".minutes-three");
//   var secondsSpan = clock.querySelector(".seconds-three");

//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
//     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       var deadline = new Date(Date.parse(endtime) + 24 * 60 * 60 * 1000);
//       initializeClockThree("countdown-three", deadline);
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

var deadline = 'September 31 2024 00:00:00 GMT+0200';
initializeClock('countdown', deadline);
initializeClockTwo('countdown-two', deadline);
// initializeClockThree("countdown-three", deadline);

// timer - two;
