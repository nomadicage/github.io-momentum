const clock = document.querySelector("#clock");

function getClock(){
const now = new Date();
const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

const hours = String(h).padStart(2,"0");
const minutes = String(m).padStart(2,"0");
const seconds = String(s).padStart(2,"0");
clock.innerText = `${hours}: ${minutes}: ${seconds}`;
}


getClock();
setInterval(getClock, 1000);