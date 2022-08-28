



let dayItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");



//TIMER JS
let countDown = () => {
    let futureDate = new Date("5 September 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;


    dayItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

}

countDown()

setInterval(countDown, 1000)


//login&signup js



