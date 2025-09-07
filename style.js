function updateClock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.querySelector(".clock").innerText = time;
}
updateClock();
setInterval(updateClock, 1000);