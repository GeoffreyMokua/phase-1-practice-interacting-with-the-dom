document.addEventListener('DOMContentLoaded', (event) =>{
    intervalID = setInterval(startCount, 1000);
})
const pause = document.getElementById("pause");

let count = 0;
let intervalID;

function setInterval () {

    count += 1;
    timerText.textContent = count;
    console.log("hello")


};
intervalID = setInterval(startCount, 1000);

function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }