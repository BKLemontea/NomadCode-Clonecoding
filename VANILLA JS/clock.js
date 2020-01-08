const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // 삼항연산자
    /*
    삼항연산자 
    `${hours < 10 ? `0${hours}` : hours}' 
    hours < 10 ? 은 조건문을 의미한다.
    참일 경우 `0${hours}`
    거짓일 경우 hours
    */
}

function init(){
    getTime();
    setInterval(getTime, 1000); // 1초마다 getTime 호출
}

init();