// Task 1.

// const colors = ['red', 'green', 'blue'];
// console.log(colors.length);

// Task 2.

// const animals = ['monkey', 'dog', 'cat'];
// console.log(animals[animals.length - 1]);

// Task 3.

// const numbers = [5, 43, 63, 23, 90];
// console.log(numbers);

// способ 1 

// numbers.length = 0;
// console.log(numbers);

// способ 2

// while(numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// способ 3

// numbers.splice(0,numbers.length);
// console.log(numbers);

// Task 4.

// const students = ['Polina', 'Dasha', 'Masha'];
// console.log(students);
// students.pop();
// students.push('Borya');
// console.log(students);
// students.shift();
// students.unshift('Andrey');
// console.log(students);

// Task 5.

// const cats = ['Gachito', 'Tom', 'Batman'];

// for(i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }
// for(let item of cats) {
//   console.log(cats);
// }

// Task 6.

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];
// const numbers = evenNumbers.concat(oddNumbers);
// console.log(numbers);
// console.log(numbers.indexOf(8));

// Task 7.

// const binary = [0, 0, 0, 0];
// let sString = binary.join('1');
// console.log(sString);

// ADVANCED level

// Task 1.

// let sWord = prompt('Введите слово.');
// polindrom(sWord);
// function polindrom(word) {
//   const aWord = word.split('');
//   const sDrow = word.split('').reverse();
//   for(let i = 0; i < aWord.length; i++) {
//     if(aWord[i] !== sDrow[i]) return result = console.log('Слово не является полиндромом');
//     else {
//       return result = console.log('Слово является полиндромом');
//     } 
//   }
// }

// Task 2.

// const matrix = [
//   [12, 98, 78, 65, 23],
//   [54, 76, 98, 43, 65],
//   [13, 324, 65, 312],
//   [9092, 22, 45, 90000],
// ];

// function arrMean(array) {
//   let sString = array.join( );
//   let oneArr = sString.split(',');
//   let sum = 0;
//   for(let i of oneArr) {
//     i = +i;
//     sum += i; 
//   }
//   let mean = sum / oneArr.length;
//   return mean;
// }
// console.log(arrMean(matrix));

// Task 3.

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// function sort(array) {
//   let negative = [];
//   let positive = [];
//   for (let item of array) {
//     if(item < 0) {
//       negative.push(item);
//     } else {
//       positive.push(item);
//     }
//   }
//   console.log(negative, positive);
// }
// sort(mixedNumbers);

// Task 4.

// min = 0;
// max = 100;
// function getRandomNumber(min, max) {
//   return Math.round(Math.random() * (max-min)) + min;
// }
// let arr1 = randomArray();
// console.log(arr1);
// let arrInCube = arr1.map(((item) => item*item*item));
// console.log(arrInCube);

// function randomArray() {
//   arr = [];
//   for( i = 0; i < 5; i++) {
//     arr.push(getRandomNumber(min, max));
//   }
//   return arr;
// }




