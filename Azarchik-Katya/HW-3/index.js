// ////////////Homework - 2 //////////

// // Task 1

// let x = 2;
// let y = 58;
// let z = 42;
// let xyz = x + y + z;
// console.log("Результат" + " " + xyz);

// // Task 2

// let SecondsInAMinute = 60;
// let MinutesInAHour = 60;
// let HoursInADay = 24;
// let DaysInAYear = 365;
// let MyAge = 29;
// let myAgeInSeconds =
//   MyAge * DaysInAYear * HoursInADay * MinutesInAHour * SecondsInAMinute;

// console.log("Мой возраст" + " " + myAgeInSeconds + " " + "секунд ");

// // Task 3

// let count = 42;
// let userName = "42";

// console.log(typeof String(count));
// console.log(typeof ("" + count));

// console.log(typeof +userName);
// console.log(typeof Number(userName));

// // Task 4

// let a = 1;
// let b = 2;
// let c = "белых медведей";

// console.log(String(a) + String(b) + " " + c);

// // Task 5

// let firstWord = "доступ";
// let secondWord = "морпех";
// let thirdWord = "наледь";
// let fourthWord = "попрек";
// let fifthWord = "рубило";
// let lengthWords =
//   firstWord.length +
//   secondWord.length +
//   thirdWord.length +
//   fourthWord.length +
//   fifthWord.length;

// console.log(lengthWords);

// // Task 6

// let firstVariableType = "4";
// let secondVariableType = true;
// let thirdVariableType = 6;

// console.log(
//   firstVariableType +
//     ": firstVariableType have type: " +
//     typeof firstVariableType
// );
// console.log(
//   secondVariableType +
//     ": secondVariableTyp have type: " +
//     typeof secondVariableType
// );
// console.log(
//   thirdVariableType +
//     ": thirdVariableType have type: " +
//     typeof thirdVariableType
// );

// // Task 7

// let Name = prompt("Введите свое имя");
// let Age = prompt("Введите свой возраст");

// console.log("Ваше имя" + " " + Name);
// console.log("Ваш возраст" + " " + Age);

// // ADVANCED level
// // Task 1

// let a1 = 4;
// let b1 = 3;

// a1 = a1 + b1;
// b1 = a1 - b1;
// a1 = a1 - b1;

// console.log(a1);
// console.log(b1);

// // Task 2

// let codeWord1 = "обернись";
// let codeWord2 = "неужели";
// let codeWord3 = "огурцы";
// let codeWord4 = "липкие";
// let codeWord5 = "?!";
// let cipher =
//   codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];

// console.log(cipher);

// ////////////Homework - 3 //////////

// Task 1 с помощью оператора typeof выведите в консоль все типы созданных значений переменных.

let h = "true";
let t = false;
let e = 17;
let p = undefined;
let u = null;

console.log(typeof h, t, e, p, u);

// Task 2 С помощью условий выведите в консоль разработчика наибольшее число.

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

// Task 3 Написать перебор от 1 до 20, где выведутся все числа кратные трём.

let firstNumber = 1;
let lastNumber = 20;
let numberOfDivision = 3;

for (let i = firstNumber; i <= lastNumber; i++) {
  if (!(i % numberOfDivision)) {
    console.log(i);
  }
}

// Task 4 нужно проверить все ли мы взяли или нет?

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = "Все на месте";

if (key && documents && pen && (apple || orange)) {
  console.log(shouldGoToWork);
} else {
  console.log("Чего-то не хватает, проверье еще раз");
}

// Task 5 Запросить у пользователя число и выполнить условие

let enterNumber = +prompt("Введите число");

if (enterNumber % 5 === 0 && enterNumber % 3 === 0) {
  console.log("FizBuz");
} else if (enterNumber % 3 === 0) {
  console.log("Buz");
} else if (enterNumber % 5 === 0) {
  console.log("Fiz");
} else {
  console.log("Не делится без остатка на 3 или 5");
}

// Task 6 Написать программу, которая выполняет операции

let enterAge = +prompt("Введите свой возраст");
while (enterAge === 0) {
  enterAge = +prompt("Введите свой возраст");
}
if (enterAge >= 18) {
  console.log("Попей пивка");
} else if (enterAge >= 16 && enterAge < 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else {
  console.log("Пей колу");
}

// Task 7 Напишем программу для туристического терминала.

let enterSide = prompt("Введите направление");

switch (enterSide) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Введите направление еще раз");
    break;
}

// ADVANCED level//////////

// Task 1

let wrongUname = prompt("Введите имя и фамилию");
// "пОлИнА нАбЕрЕжНаЯ";
let nameString = wrongUname.toLowerCase().split(" ");
for (let i = 0; i < nameString.length; i++) {
  nameString[i] =
    nameString[i].charAt(0).toUpperCase(1) + nameString[i].slice(1);
}
alert(`Привет, ${nameString.join(" ")}!`);

// Task 2

let enterRandomNumber = +prompt("Введите число");
let minus = +prompt("Cколько отнять?");
let plus = +prompt("Сколько прибавить?");
let multiply = +prompt("На сколько умножить?");
let divide = +prompt("На сколько разделить?");
let result = ((enterRandomNumber - minus + plus) * multiply) / divide;

alert(
  `((((${enterRandomNumber}-${minus})+${plus})*${multiply})/${divide} = ${result})`
);

// Task 3

for (let i = 0; i < 6; i++) {
  let symbol = "";
  for (let j = i; j >= 0; j--) {
    symbol += "#";
  }
  console.log(symbol);
}
