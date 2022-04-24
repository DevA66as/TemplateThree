let myTimeSec = document.querySelector(".sec");
let countDownSec = function () {
  myTimeSec.innerHTML -= 1;
  if (myTimeSec.innerHTML === "0") {
    return (myTimeSec.innerHTML = 60);
  }
};
let counterSec = setInterval(countDownSec, 1000);

let myTimeMin = document.querySelector(".min");
let countDownMin  = function () {
  myTimeMin.innerHTML -= 1;
  if (myTimeMin.innerHTML === "0") {
    return (myTimeMin.innerHTML = 60);
  }
};
let counterMin = setInterval(countDownMin, 60000);

let myTimeHours = document.querySelector(".hours");
let countDownHours  = function () {
  myTimeHours.innerHTML -= 1;
  if (myTimeHours.innerHTML === "0") {
    return (myTimeHours.innerHTML = 24);
  }
};
let counterHours = setInterval(countDownHours, 3600000);
let myTimeDays = document.querySelector(".days");
let countDownDays  = function () {
  myTimeDays.innerHTML -= 1;
  if (myTimeDays.innerHTML === "0") {
    return (myTimeDays.innerHTML = "Start");
  }
};
let counterDays = setInterval(countDownDays, 86400000);
let myBtn = document.getElementById("toTop")
window.onscroll = function () {
  if (window.scrollY >= 600) {
    myBtn.style.cssText ="display: block; opacity: 1"
  } else {
    myBtn.style.cssText = "display: none; opacity: 0";
  }
}
myBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior:"smooth"
  })
}
