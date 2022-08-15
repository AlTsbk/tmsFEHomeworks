//task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x+y+z);

// Task 2

let age = +prompt ("Введите вашу возраст");
let secont = 60;
let minute = 60;
let huor = 24;
let days = 365;

alert((days * age) * huor * minute * secont);

// Task 3

let count = 42;
let userName = "42";


let scount = ("" + count);
let nuserName = parseInt(userName);

let scount2 = String(count);
let nuserName2 = +userName;

console.log(scount);
console.log(nuserName );
console.log(scount2);
console.log(nuserName2);



// Task 4

let a = 1
let b = 2
let c = "белых медведей"

console.log ( String(a) + String(b) + " " + c);

// Task 5


let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";

console.log (a.length + b.length + c.length + d.length + e.length);

// Task 6

let a = 20;
let b = '20';
let c = true;
console.log ('Variable: ' + String(Object.keys({a}))  + ' have type: ' + String(typeof(a)));
console.log ('Variable: ' + String(Object.keys({b}))  + ' have type: ' + String(typeof(b)));
console.log ('Variable: ' + String(Object.keys({c}))  + ' have type: ' + String(typeof(c)));

// // Task 7

let Uname = prompt ("Введите ваше имя");
let Uage = +prompt ("Введите ваш возраст");

console.log ("Имя вользователя: " + Uname);
console.log ("Возвраст пользователя: " + Uage);

// Task 1 Advanced

let a = 4
let b = 3

a = a + b;
b = a - b;
a = a - b;

console.log (a);


// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);

console.log (cipher);


