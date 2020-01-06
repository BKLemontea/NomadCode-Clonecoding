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