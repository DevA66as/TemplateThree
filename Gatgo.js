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
//============sideMenu===========
let myButton = document.querySelector(".menuButton");
let mySideMenu = document.querySelector(".sideMenu");
let menuExit = document.querySelector(".exitMenu");
let myFulMenu = document.querySelector(".fulMenu");
let allNotEnd = document.querySelectorAll(".sideBar li:not(:last-child)");
let exitFulMenu = document.querySelector(".exitFullMenu")
// menu button show and hide
myButton.addEventListener("click", () => {
  let myButtonHidding = function () {
    myButton.style.cssText = "display: none;"
    mySideMenu.style.cssText = "display: block;"
  }
  // small menu exit option 
  setTimeout(myButtonHidding, 200);
  menuExit.addEventListener("click", () => {
    mySideMenu.style.cssText = "display: none;";
    myButton.style.cssText = "display: block;";
  });
})
// lis which when click it the full menu will apear
allNotEnd.forEach((el) => {
  el.addEventListener("click", () => {
    myFulMenu.style.cssText = "display: flex;";
    mySideMenu.style.cssText = "display: none;";
  })
})
// full menu exit option
exitFulMenu.addEventListener("click", () => {
  myFulMenu.style.cssText = " display: none;"
  myButton.style.cssText = "display: block;";
})

// set  color in local storage
let firstColor = document.querySelectorAll(".colorShadow");
firstColor.forEach((ele) => {
  ele.addEventListener("click", () => {
    window.localStorage.setItem("color", `${ele.dataset.color}`);
  });
})
//=====select root and get new color from local storage
if (window.localStorage.getItem("color") === null) {
  window.addEventListener("load", () => {
    window.localStorage.setItem("color", "#5e60ce");
    document.styleSheets[4].cssRules[1].style("--main-sec-color",`${window.localStorage.getItem("color")}`);
  });
}
let root = document.documentElement;
root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--main-sec-color",`${window.localStorage.getItem("color")}`
  );
});
 
