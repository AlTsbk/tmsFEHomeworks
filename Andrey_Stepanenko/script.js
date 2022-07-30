//Task 1
let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);



//Task 2

let second = 60;
let minute = 60;
let hour = 24;
let day = 365;

let myAgeInSeconds = 29 * day * hour * minute * second;
console.log(myAgeInSeconds);









// Task 3

let count = 42;
let UserName = '42';

let change = toString(count);
console.log(count);
let change2 = parseInt(UserName);
let change3 = String(count);
let change4 = +UserName;
console.log(typeof change, typeof change2, typeof change3, typeof change4);

// let count = toString(42);
// let count2 = String(42);
// let UserName = parseInt('42');
// let UserName2 = +'42';
// console.log(typeof count);
// console.log(typeof count2);
// console.log(typeof UserName);
// console.log(typeof UserName2);


// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

const expression = String(a) + String(b) + ' '+ c;
console.log(expression);



// Task 5

let e = 'доступ';
let f = 'морпех';
let g = 'наледь';
let h = 'попрек';
let j = 'рубило';
let lengthWords = e.length + f.length + g.length + h.length + j.length;
console.log(lengthWords);


// Task 6

let k = 20;
let l = '20';
let m = true;
console.log(`variable: k have type: ${typeof k}`);
console.log(`variable: l have type: ${typeof l}`);
console.log(`variable: m have type: ${typeof m}`);





// Task 7

let name = prompt('Назовите ваше имя');
let age = +prompt('Назовите ваш возраст');
console.log(name, age);


// Advanced task 1

let n = 4;                              
let o = 3;

n = n*o;
o = n/o;
n = n/o; 
console.log(n, o);

let p = 4;
let q = 3;

p = p + q;
q = p - q;
p = p - q;
console.log(p, q);


// Advanced task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);
console.log(cipher);
