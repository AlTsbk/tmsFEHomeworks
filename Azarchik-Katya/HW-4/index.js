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

// let h = "true";
// let t = false;
// let e = 17;
// let p = undefined;
// let u = null;

// console.log(typeof h, typeof t, typeof e, typeof p, typeof u);

// // Task 2 С помощью условий выведите в консоль разработчика наибольшее число.

// let height = 15;
// let width = 20;

// if (height > width) {
//   console.log(height);
// } else {
//   console.log(width);
// }

// // Task 3 Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// let firstNumber = 1;
// let lastNumber = 20;
// let numberOfDivision = 3;

// for (let i = firstNumber; i <= lastNumber; i++) {
//   if (!(i % numberOfDivision)) {
//     console.log(i);
//   }
// }

// // Task 4 нужно проверить все ли мы взяли или нет?

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;
// let shouldGoToWork = "Все на месте";

// if (key && documents && pen && (apple || orange)) {
//   console.log(shouldGoToWork);
// } else {
//   console.log("Чего-то не хватает, проверье еще раз");
// }

// // Task 5 Запросить у пользователя число и выполнить условие

// let enterNumber = +prompt("Введите число");

// if (enterNumber % 5 === 0 && enterNumber % 3 === 0) {
//   console.log("FizBuz");
// } else if (enterNumber % 3 === 0) {
//   console.log("Buz");
// } else if (enterNumber % 5 === 0) {
//   console.log("Fiz");
// } else {
//   console.log("Не делится без остатка на 3 или 5");
// }

// // Task 6 Написать программу, которая выполняет операции

// let enterAge = +prompt("Введите свой возраст");
// while (enterAge === 0) {
//   enterAge = +prompt("Введите свой возраст");
// }
// if (enterAge >= 18) {
//   console.log("Попей пивка");
// } else if (enterAge >= 16 && enterAge < 18) {
//   console.log("Можешь выкурить сигаретку, только маме не говори");
// } else {
//   console.log("Пей колу");
// }

// // Task 7 Напишем программу для туристического терминала.

// let enterSide = prompt("Введите направление");

// switch (enterSide) {
//   case "юг":
//     console.log("на юг пойдешь счастье найдешь");
//     break;
//   case "север":
//     console.log("на север пойдешь много денег найдешь");
//     break;
//   case "запад":
//     console.log("на запад пойдешь верного друга найдешь");
//     break;
//   case "восток":
//     console.log("на восток пойдешь разработчиком станешь");
//     break;
//   default:
//     console.log("Введите направление еще раз");
//     break;
// }

// // ADVANCED level//////////

// // Task 1

// let wrongUname = prompt("Введите имя и фамилию");
// // "пОлИнА нАбЕрЕжНаЯ";
// let nameString = wrongUname.toLowerCase().split(" ");
// for (let i = 0; i < nameString.length; i++) {
//   nameString[i] =
//     nameString[i].charAt(0).toUpperCase(1) + nameString[i].slice(1);
// }
// alert(`Привет, ${nameString.join(" ")}!`);

// // Task 2

// let enterRandomNumber = +prompt("Введите число");
// let minus = +prompt("Cколько отнять?");
// let plus = +prompt("Сколько прибавить?");
// let multiply = +prompt("На сколько умножить?");
// let divide = +prompt("На сколько разделить?");
// let result = ((enterRandomNumber - minus + plus) * multiply) / divide;

// alert(
//   `((((${enterRandomNumber}-${minus})+${plus})*${multiply})/${divide} = ${result})`
// );

// // Task 3

// for (let i = 0; i < 6; i++) {
//   let symbol = "";
//   for (let j = i; j >= 0; j--) {
//     symbol += "#";
//   }
//   console.log(symbol);
// }

// ////////////Homework - 4 /////////////////////////////////////////////////

// Task 1 Написать функцию getSum, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

let number = +prompt("Введите число");

function getSum(nSum) {
  let result = 0;
  for (let i = 0; i <= nSum; i++) {
    result += i;
  }
  return result;
}
console.log(getSum(number));

// Task 2 Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

let credit = +prompt("Введите сумму кредита");
let ratePerYear = 17;
let mounth = 5 * 365;

function overpayment(creditPayment, ratePerYear, mnth) {
  return (ratePerYear / 100 / 365) * mnth * creditPayment;
}
alert(
  "Сумма процентов по кдедиту за 5 лет составит: " +
    overpayment(credit, ratePerYear, mounth).toFixed(2)
);

// Task 3

let string = prompt("Введите текст");
let trimStringFrom = +prompt("Значение от");
let trimStringTo = +prompt("Значение по");

function trimString(stringT, trimFrom, trimTo) {
  let resultString = "";
  resultString += stringT.substring(trimFrom, trimTo);
  return resultString;
}
console.log(trimString(string, trimStringFrom, trimStringTo));

// Task 4 Написать функцию getSumNumbers, которая будет принимать число и вычислять сумму цифр из которых состоит число.

let nNumber = prompt("Введите число");

function getSumNumbers(getSum) {
  getSumResult = 0;
  for (let i = 0; i < getSum.length; i++) {
    getSumResult += Number(getSum[i]);
  }
  return getSumResult;
}

console.log(getSumNumbers(nNumber));

// Task 5

let getSumNumberFirst = +prompt("Введите первое число");
let getSumNumberLast = +prompt("Введите второе число");

function getSumNumber(firstNumber, lastNumber) {
  let first = firstNumber < lastNumber ? firstNumber : lastNumber;
  let last = firstNumber < lastNumber ? lastNumber : firstNumber;
  let result = 0;
  for (let i = first; i <= last; i++) {
    if (first === last) {
      result = i;
    } else {
      result += i;
    }
  }
  return result;
}
console.log(getSumNumber(getSumNumberFirst, getSumNumberLast));

// Task 6 Напишите функцию fooboo которая принимает в качестве аргумента три параметра:

function boo() {
  console.log("Boo");
}
function foo() {
  console.log("Foo");
}

function fooBoo(boolValue, booValue, fooValue) {
  if (boolValue) {
    fooValue();
  } else {
    booValue();
  }
}
fooBoo(true, boo, foo);

// Advanced level

// TAsk 1

let triangleSideA = +prompt("Введите первую сторону");
let triangleSideB = +prompt("Введите вторую сторону");
let triangleSideC = +prompt("Введите третью сторону");

function triangle(a, b, c) {
  if (a + b > c && a + c > b && c + b > a) {
    console.log(true);
  } else {
    console.log(false);
  }
}

triangle(triangleSideA, triangleSideB, triangleSideC);

// Task 2

let n = +prompt("Введите первый параметр");
let m = +prompt("Введите второй параметр");

function division(paramN, paramM) {
  result = 0;
  if ((paramN % 1 !== 0 && paramM % 1 !== 0) || paramN < 0 || paramM < 0) {
    return result;
  } else if (paramN > 1 || paramM > 1) {
    result += paramN * paramM - 1;
  }
  return result;
}
console.log(division(n, m));

// Task 3

let amountOnAccount = +prompt("Введите баланс банковского счета");
const priceOfPhone = 199.99;
const taxRate = 10;
const priceOfAccessories = 5.67;

function byingOfPhones(money, pricePh, rate, priceAcs) {
  let resultOfBying = 0;
  while (resultOfBying <= money) {
    resultOfBying += pricePh;
  }
  if (resultOfBying < money) {
    resultOfBying += priceAcs;
  }
  resultOfBying = resultOfBying * (1 + rate / 100);
  if (resultOfBying > money) {
    console.log(
      `Вы не можете себе позволить эту покупку. Сумма на вашем счету ${money.toFixed(
        2
      )}$`
    );
  }
  return `Сумма вашей покупки ${resultOfBying.toFixed(2)}$`;
}

console.log(
  byingOfPhones(amountOnAccount, priceOfPhone, taxRate, priceOfAccessories)
);
