// Task 1

let x = 2;
let y = 58;
let z = 42;
let xyz = x + y + z;
console.log("Результат" + " " + xyz);

// Task 2

let SecondsInAMinute = 60;
let MinutesInAHour = 60;
let HoursInADay = 24;
let DaysInAYear = 365;
let MyAge = 29;
let myAgeInSeconds =
  MyAge * DaysInAYear * HoursInADay * MinutesInAHour * SecondsInAMinute;

console.log("Мой возраст" + " " + myAgeInSeconds + " " + "секунд ");

// Task 3

let count = 42;
let userName = "42";

console.log(typeof String(count));
console.log(typeof ("" + count));

console.log(typeof +userName);
console.log(typeof Number(userName));

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(String(a) + String(b) + " " + c);

// Task 5

let firstWord = "доступ";
let secondWord = "морпех";
let thirdWord = "наледь";
let fourthWord = "попрек";
let fifthWord = "рубило";
let lengthWords =
  firstWord.length +
  secondWord.length +
  thirdWord.length +
  fourthWord.length +
  fifthWord.length;

console.log(lengthWords);

// Task 6

let firstVariableType = "4";
let secondVariableType = true;
let thirdVariableType = 6;

console.log(
  firstVariableType +
    ": firstVariableType have type: " +
    typeof firstVariableType
);
console.log(
  secondVariableType +
    ": secondVariableTyp have type: " +
    typeof secondVariableType
);
console.log(
  thirdVariableType +
    ": thirdVariableType have type: " +
    typeof thirdVariableType
);

// Task 7

let Name = prompt("Введите свое имя");
let Age = prompt("Введите свой возраст");

console.log("Ваше имя" + " " + Name);
console.log("Ваш возраст" + " " + Age);

// ADVANCED level
// Task 1

let a1 = 4;
let b1 = 3;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a1);
console.log(b1);

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher =
  codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

console.log(cipher);
