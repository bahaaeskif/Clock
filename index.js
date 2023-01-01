setInterval(setTime, 1000);

// Select the elements
let horHand = document.querySelector(".hours");
let minHand = document.querySelector(".minutes");
let secHand = document.querySelector(".seconds");

// Time function
function setTime() {
    let timeNow = new Date();
    let secRatio = timeNow.getSeconds() / 60;
    let minRatio =  (secRatio + timeNow.getMinutes()) / 60;
    let horRatio =  (minRatio +timeNow.getHours()) / 12;
    hands(secHand, secRatio);
    hands(minHand, minRatio);
    hands(horHand, horRatio);
}

// make they rotate!!!!!
function hands(handType, rotateratio){
    handType.style.setProperty("--rotate-ratio" ,rotateratio * 360);
}