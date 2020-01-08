const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// LocalStorage에 이름 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// form에서 submit 이벤트가 발생할 때 호출할 Function
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN); // form의 class에 showing을 추가하여 화면에 나타나게함.
    form.addEventListener("submit", handleSubmit); // submit 이벤트 발생시 handleSubmit 호출
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // she is not
        askForName();
    } else {
        //she is
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();