/*
alert('Working') 

let a=221;
let b = a-5;
a=4;
console.log(b,a);

// String
const what = "String test";
console.log(what);

// Boolean
const wat = false;

// Number
const wat2 = 123;

// Float
const wat3 = 55.1;

// Array
const something = "Something"
const daysOfWeek = ["MON","TUE","WED","THU","FRI","SAT","SUN", 54, true, something];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

// Object
const userInfo = {
    name:"name",
    age:25,
    gender:"Male" ,
    favMovies:["Along the gods", "LOTR", "Oldboy"],
    favFood: [
        {
            name :"Kimchi", 
            fatty:false
        }, 
        {
            name: "Cheese burger", 
            fatty:true
        }
    ]
}

console.log(userInfo);
console.log(userInfo.favFood[0].fatty);

// Function
function sayHello(name, age){
    //console.log(`Hello ${name} you are ${age} years old`); // ``, "", ''
    return `Hello ${name} you are ${age} years old`;
}

//sayHello("LemonTea", 25);

const greetUser = sayHello("LemonTea", 25);
console.log(greetUser);

const calaulator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiple: function(a,b){
        return a*b;
    },
    devide: function(a, b){
        return a/b;
    },
    squared: function(a, b){
        return a ** b;
    }
}

const plus = calaulator.plus(5,5);
const minus = calaulator.minus(5,5);
const multiple = calaulator.multiple(5,5);
const devide = calaulator.devide(5,5);
const squared = calaulator.squared(5,5);
console.log(plus, minus, multiple, devide, squared);

// DOM(Document Object Model)
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "black";
console.dir(title);
document.title = "I own you now";

const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "white";
}

title.addEventListener("click", handleClick);
//window.addEventListener("resize", handleResize()); // handleResize함수를 즉시 호출함

// If
if(20 > 5 && "user" === "user"){ // === 완전히 같은가?
    console.log('yes')
} else {
    console.log('no')
}

const age = prompt("How old are you");
if(age >= 18 && age <= 21){
    console.log('you can drink but you should not');
} else if(age > 21) {
    console.log("go ahed");
}else{
    console.log('too young');
}

// ---------------------------------------------------
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
    console.log(currentColor);
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // 이벤트의 근원을 알고싶으면 MDN을 찾아보자!!
    //title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline(){
    console.log("Bye bye");
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

// ---------------------------------------------------
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else {
        title.classList.remove(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();