const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function lessFormat(input,lessNum){ 
    return ((input.toString().length < lessNum) ? "0" + input : input);
}

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes =  date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText= lessFormat(hours,2)+':'+ lessFormat(minutes,2) +':'+lessFormat(seconds,2);
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();