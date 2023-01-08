
const clock = document.querySelector("h3#clock");



function getClock(){
    const now = new Date();
    const year = now.getFullYear();
    const d_day = new Date(year,11,24,23,59,59);
    const distDate = d_day.getTime() - now.getTime() ;
    const d = Math.floor(distDate / (1000 * 60 * 60 * 24));
    const h = d_day.getHours()-now.getHours();
    const m = d_day.getMinutes()-now.getMinutes();
    const s = d_day.getSeconds()-now.getSeconds();

    const dates = String(d);
    const hours = String(h).padStart(2,"0");
    const minutes = String(m).padStart(2,"0");
    const seconds = String(s).padStart(2,"0");
    clock.innerText = `${dates}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
