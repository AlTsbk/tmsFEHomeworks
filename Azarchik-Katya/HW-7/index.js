// ////////////Homework - 7 /////////////////////////////////////////////////

// Task 1 Выведи все элементы массива в консоль с помощью метода forEach

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonacci.forEach((item) => console.log(item));

// Task 2 Используя метод map создайте новый массив, на основе массива users, в котором каждый элемент массива будет содержать строку вида:['member 1: Darya', 'member 2: Masha', ... etc]. Реализуйте решение двумя способами, используя function declaration & arrow function.

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

let usersMap = users.map((item, index) => "member " + index + ": " + item);

console.log(usersMap);

// Task 3 С помощью метода filter создайте новый массив в котором не будет отрицательных чисел. Реализуйте решение двумя способами, используя function declaration & arrow function.

const numbers = [7, -4, 32, -90, 54, 32, -21];
let numbersFilter = numbers.filter((item) => item > 0);
let numbersFilterFoo = numbers.filter(function numbersFoo(item) {
  return item > 0;
});

console.log(numbersFilter);
console.log(numbersFilterFoo);

// Task 4 Используя метод reduce получите сумму всех чисел массива. Реализуйте решение двумя способами, используя function declaration & arrow function.

const fibonacci1 = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
let fibonacciReduce = fibonacci1.reduce((sum, item) => sum + item);
let fibonacciReduceFoo = fibonacci1.reduce(function foo(sum, item) {
  return sum + item;
});
console.log(fibonacciReduce);
console.log(fibonacciReduceFoo);

// Task 5 Используя метод find найдите в массиве первое четное число.

const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
let numbersFind = numbers1.find((item) => item % 2 === 0);
let numbersFindFoo = numbers1.find(function foo(item) {
  return item % 2 === 0;
});
console.log(numbersFind);
console.log(numbersFindFoo);

// Advanced level

// TAsk 1
class Student {
  constructor(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;
    this.result = function () {
      let oResult = 0;
      if (this.rate === "A") {
        oResult += this.salary * 12;
      } else if (this.rate === "B") {
        oResult += this.salary * 9;
      } else if (this.rate === "C") {
        oResult += this.salary * 6;
      } else {
        oResult += this.salary * 0;
      }
      return oResult;
    };
  }
}
let student1 = new Student("Gleb", 1050, "A");
let student2 = new Student("Lena", 400, "B");
let student3 = new Student("Olga", 300, "C");
let student4 = new Student("Yra", 90, "D");
let student5 = new Student("Sergey", 10, "D");
let students = [
  student1.result(),
  student2.result(),
  student3.result(),
  student4.result(),
  student5.result(),
];
let summOfCredit = students.reduce((sum, item) => sum + item);
console.log("Общая сумма кредита составляет " + summOfCredit + " рублей");

// Task 2 Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
let comment = prompt("Введите комментарий");
let deleteVowels = comment
  .split("")
  .filter((letter) => !["a", "e", "i", "o", "u"].includes(letter.toLowerCase()))
  .join("");
alert(deleteVowels);

//Task 3
function repeatLetters(letters) {
  let repeatLettersresult = letters
    .split("")
    .map(
      (item, i) =>
        (item = item.toLowerCase().repeat(i + 1)) &&
        item.charAt(0).toUpperCase() + item.slice(1)
    )
    .join("-");
  return repeatLettersresult;
}
console.log(repeatLetters("abcd"));
console.log(repeatLetters("RqaEzty"));
console.log(repeatLetters("cwAt"));

// Task 4 В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

let highAndLow = "1 2 3 4 5"; // return "5 1"
let highAndLow2 = "1 2 -3 4 5"; // return "5 -3"
let highAndLow3 = "1 9 3 4 -5"; // return "9 -5"

function arrayHighAndLow(numbers) {
  let arrayNumbers = numbers.split(" ");
  let sortedNumbers = arrayNumbers.sort(function (a, b) {
    return Number(b) - Number(a);
  });
  return sortedNumbers[0] + " " + sortedNumbers[sortedNumbers.length - 1];
}
console.log(arrayHighAndLow(highAndLow));
console.log(arrayHighAndLow(highAndLow2));
console.log(arrayHighAndLow(highAndLow3));

// Task 5 Проверить является ли слово изограммой не учитывая регистр

let isIsogram = (word) =>
  word
    .toLowerCase()
    .split("")
    .filter((item, i, arr) => arr.indexOf(item) === i).length === word.length;
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

// Task 6

function changeSymbol(symbol) {
  let asciiCode = symbol.split("").map((item) => item.charCodeAt());
  let total1 = Number(asciiCode.join(""));
  let total12 = String(total1)
    .split("")
    .filter((item) => item !== "7")
    .join("");
  return total1 - Number(total12);
}

console.log(changeSymbol("ABC"));

// Task 7 Дубликаты

function checkDublicate(someItem) {
  let resultDuplicateСheck = someItem
    .toLowerCase()
    .split("")
    .map((item, i, array) => array.indexOf(item) !== array.lastIndexOf(item));
  let arrResult = "";
  for (const i in resultDuplicateСheck) {
    if (resultDuplicateСheck[i]) {
      arrResult += ")";
    } else {
      arrResult += "(";
    }
  }
  return arrResult;
}

console.log(checkDublicate("din"));
console.log(checkDublicate("recede"));
console.log(checkDublicate("Success"));
console.log(checkDublicate("(( @"));
