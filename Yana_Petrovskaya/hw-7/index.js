// Task 1.

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach((i) => {console.log(i)});

// fibonacci.forEach(function foo(i) {
//   console.log(i);
// })

// Task 2.

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// let newArray = users.map((i, index) => 'member ' + (index + 1) + ': ' + i);
// console.log(newArray);

// let newArrayFoo = users.map(function foo(i, index) {
//   return 'member ' + (index + 1) + ': ' + i;
// })
// console.log(newArrayFoo);

// Task 3.

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// let toPositive = numbers.filter(item => item > 0);
// console.log(toPositive);

// let toPositiveFoo = numbers.filter(function foo(item) {
//   return item > 0;
// })
// console.log(toPositiveFoo);

// Task 4.

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// let sum = fibonacci.reduce((sum, i) => sum + i);
// console.log(sum);

// let sumFoo = fibonacci.reduce(function foo(sum, i) {
//   return sum + i;
// });
// console.log(sumFoo);

// Task 5.

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// let evenNumber = numbers.find((i) => i % 2 === 0);
// console.log(evenNumber);

// let evenNumberFoo = numbers.find(function foo(i) {
//   return i % 2 === 0;
// });
// console.log(evenNumberFoo);

// ADVANCED level

// Task 1.

// function getSumOfCredit() {
//   if(this.rate == 'A') {
//     return this.salary * 12;
//   } else if(this.rate == 'B') {
//     return this.salary * 9;
//   } else if(this.rate == 'C') {
//     return this.salary * 6;
//   } else if(this.rate == 'D') {
//     return 0;
//   }
// }

// function Student(name, salary, rate) {
//   this.name = name;
//   this.salary = salary;
//   this.rate = rate;
//   this.getSumOfCredit = getSumOfCredit;
// }

// const student1 = new Student('Katya', 1000, 'A');
// const student2 = new Student('Andrej', 1000, 'B');
// const student3 = new Student('Yana', 1000, 'C');
// const student4 = new Student('Elena', 1000, 'C');
// const student5 = new Student('Aleksej', 1000, 'D');

// let students = [student1, student2, student3, student4, student5];

// for (let i of students) {
//  i.getSumOfCredit();
//  console.log(i);
// }
// console.log(students);

// function getTotalSum(array) {

//   // способ 1

//   // let totalSum = 0;
//   // for (let i of students) {
//   //   totalSum += i.getSumOfCredit();
//   // }
//   // return totalSum;

//   // способ 2

//   // return array.reduce(() => {
//   //   sum = 0;
//   //   for (let i of array) {
//   //     sum += i.getSumOfCredit();
//   //   }
//   //   return sum;
//   // })

//   // способ 3

//   return array.reduce((sum, item) => sum + item.getSumOfCredit(), 0);

// }
// alert('Общая сумма кредитов равна: ' + getTotalSum(students));

// Task 2.

// let sComment = prompt('Введите комментарий');
// console.log(fTroll(sComment));
// function fTroll(sString) {
//   let arr = sString.split('');
//   let newArr = arr.filter(
//     (i) => !['a', 'e', 'i', 'u', 'o'].includes(i.toLowerCase())
//   );
//   return newArr.join('');
// }

// Task 3.

// let sString = prompt('Введите строку');
// while (!fMatch(sString)) {
//   sString = prompt('Введите строку');
// }
// fFunc(sString);
// function fFunc(sString) {
//   const arr = sString.split('');
//   const newArr = arr.map((n, i) => {
//     n = n.repeat(i + 1);
//     n = n[0].toUpperCase() + n.substring(1);
//     return n;
//   });
//   console.log(newArr.join('-'));
// }
// function fMatch(sString) {
//   const arr = sString.split('');
//   return arr.every((i) => i.match(/[a-zA-Z]/g));
// }

// Task 4.

// let sString = prompt('Введите строку чисел через пробел');
// highAndLow(sString);
// function highAndLow(sString) {
//   let arr = sString.split(' ');
//   console.log(arr);
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   console.log(max + ' ' + min);
// }

// Task 5.

// 1;

// let sString = prompt('Введите строку');
// console.log(iso(sString));
// function iso(string) {
//   return string.length == new Set(string.toLowerCase()).size;
// }

// 2;

// let sString = prompt('Введите строку');
// console.log(iso(sString));
// function iso(string) {
//   return !string.match(/([a-z]).*\1/i);
// }

// Task 6.

// let sString = prompt('Введите строку');
// total(sString);
// function total(string) {
//   let total1 = string
//     .split('')
//     .map((item) => item.charCodeAt(0))
//     .join('');
//   console.log(total1);
//   let total2 = total1.split('').map((i) => parseInt(i));
//   let indexOfI = total2.find((i, index) => {
//     if (i == 7);
//     return index;
//   });
//   total2[indexOfI] = 1;
//   total2 = total2.join('');
//   console.log(total2);
//   function toGetSumOfNumbers(total) {
//     total = total.split('').map((i) => parseInt(i));
//     let sumofTotal = total.reduce((sum, i) => sum + i);
//     return sumofTotal;
//   }
//   console.log(toGetSumOfNumbers(total1) - toGetSumOfNumbers(total2));
// }

// Task 7.

// function checkDuplicate(string) {
//   let arr = string
//     .toLowerCase()
//     .split('')
//     .map((item, i, array) => array.indexOf(item) !== array.lastIndexOf(item));

//   let result = '';

//   for (let i in arr) {
//     if(arr[i]) {
//       result += ')';
//       } else {
//       result += '(';
//     }
//   }
//   return result;
// }

// console.log(checkDuplicate("din"));
// console.log(checkDuplicate("recede"));
// console.log(checkDuplicate("Success"));
// console.log(checkDuplicate("(( @"));
