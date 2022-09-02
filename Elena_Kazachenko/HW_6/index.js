/////////////////////////hw-6/////////////////////


// task 1

// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);


// task 2

// const animals = ['monkey', 'dog', 'cat'];

// console.log(animals[animals.length - 1]);

// task 3

// const numbers = [5, 43, 63, 23, 90];

// // numbers.length = 0;

// // console.log(numbers);

// numbers.splice(0, numbers.length);

// console.log(numbers);

// task 4

// const students = ['Polina', 'Dasha', 'Masha'];

// students.pop();
// students.push('Borya');

// students.shift();
// students.unshift('Andrey');

// console.log(students)

// task 5

// const cats = ['Gachito', 'Tom', 'Batman'];

// // for (let i = 0; i < cats.length; i++) {
// //     console.log(cats[i]);
// // }

// for (const value of cats) {
//     console.log(value);
// }

// task 6

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// const unionOfArray = evenNumbers.concat(oddNumbers);

// console.log(unionOfArray);

// console.log(unionOfArray.indexOf(8));

// task 7 

// const binary = [0, 0, 0, 0];

// console.log(binary.join('1'));

// -----------------ADVANCED level----------------


// task 1

// let sWord = prompt('Введите слово');

// function palindrom(word) {
//   let WordPalindrom = word.split('');
//   let PalindromRevers = word.split('').reverse();
//   for(let i = 0; i < WordPalindrom.length; i++) {
//     if(WordPalindrom[i] !== PalindromRevers[i]) 
//     return result = console.log(false);
//     else {
//       return result = console.log(true);
//     } 
//   }
// }

// palindrom(sWord);



// task 2

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ];

// for (let i = 0; i < matrix.length; i++) {

//     let result = matrix[i] / matrix.length - 1;
//     console.log(result)
// }







// task 3

// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// let positiveNumbers = [];
// let negativeNumbers = [];

// for (let i = 0; i <= mixedNumbers.length - 1; i++) {
//     if (mixedNumbers[i] >= 0) {
//         positiveNumbers.push(mixedNumbers[i])
//     } else {
//         negativeNumbers.push(mixedNumbers[i])
//     }
// }

// console.log(positiveNumbers);
// console.log(negativeNumbers);

// task 4



// let a = Math.round(Math.random() * 20);
// let b = Math.round(Math.random() * 20);
// let c = Math.round(Math.random() * 20);
// let d = Math.round(Math.random() * 20);
// let e = Math.round(Math.random() * 20);

// let randomNum = [a, b, c, d, e];

// let numberCubed = [];

// for (let i = 0; i < randomNum.length; i++) {
//     numberCubed.push(Math.pow(randomNum[i], 3));
    
// }

// console.log(randomNum);
// console.log(numberCubed);

