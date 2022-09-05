// ////////////Homework - 6 /////////////////////////////////////////////////

// Task 1 Вывести в консоль длину массива

const colors = ["red", "green", "blue"];

console.log(`Длина массива ${colors.length}`);

// Task 2  Выведите в консоль последний элемент массива вне зависимости от его длинны.

const animals = ["monkey", "dog", "cat"];

console.log(animals[animals.length - 1]);

// Task 3 Удалите все элементы в массиве и выведите в консоль полученный результат.

const numbers = [5, 43, 63, 23, 90];
while (numbers.length > 0) {
  numbers.pop();
}
console.log(numbers);
numbers.length = 0;
console.log(numbers);

// Task 4 Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya; Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey

const students = ["Polina", "Dasha", "Masha"];

students.pop();
students.push("Borya");
console.log(students);

students.shift();
students.unshift("Andrey");
console.log(students);

// Task 5 Выведите в консоль все элементы массива. Сначала через цикл for, затем for of.

const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (const iterator of cats) {
  console.log(iterator);
}

// Task 6 Соедините два массива чисел в один. В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
let numbersConcat = evenNumbers.concat(oddNumbers);
const indexofNumber = numbersConcat.indexOf(8);
console.log(numbersConcat);
console.log(indexofNumber);

// Task 7 Наш бинарный массив неполный, в нем явно не хватает единиц. Превратите данный массив в строку.

const binary = [0, 0, 0, 0];
let binaryString = binary.join("1");
console.log(binaryString);

// ADVANCED level

// Task 1 Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function palindrome(string) {
  let reverseString = "";
  for (const n in string) {
    reverseString += string[string.length - n - 1];
  }
  if (string === reverseString) {
    console.log("Это слово является палиндромом");
  } else {
    console.log("Это не палиндром");
  }
}
palindrome("alla");

// Task 2 Выведите в консоль среднее значение чисел в многомерном массиве.
const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let matrixResult = 0;
let matrixCount = 0;

for (const i of matrix) {
  matrixCount += i.length;
}

for (let i = 0; i < matrix.length; i++) {
  for (let n = 0; n < matrix[i].length; n++) {
    matrixResult += matrix[i][n] / matrixCount;
  }
}
console.log(matrixResult.toFixed(2));

// Task 3 Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];

let positive = [];
let negative = [];
for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] >= 0) {
    positive.push(mixedNumbers[i]);
  } else {
    negative.push(mixedNumbers[i]);
  }
}
console.log(positive);
console.log(negative);

// Task 4 Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

let myArray = [34, 6, 7, 3, 22];
let cubedArray = [];

for (let i = 0; i < myArray.length; i++) {
  cubedArray.push(Math.pow(myArray[i], 3));
}
console.log(myArray);
console.log(cubedArray);
