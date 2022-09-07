// Task 1.

// способ 1

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fibonacci.forEach((i) => {console.log(i)});

// способ 2

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// fForEach(fibonacci);
// function fForEach(array) {
//   array.forEach((i) => {console.log(i)});
// }

// или нужно было так? 

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function fForEach(array) {
//   for (let i of array) {
//     console.log(i);
//   }
// }
// fForEach(fibonacci);


// Task 2.

// способ 1 

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// let newarray = users.map((i, index) => 'member ' + (index + 1) + ': ' + i);
// console.log(newarray);

// способ 2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// function fnewarray(array) {
//   let newarray = array.map((i, index) => 'member ' + (index + 1) + ': ' + i);
//   return newarray;
// }
// console.log(fnewarray(users));

// или так

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
// function fnewarray(array) {
//   let newarray = [];
//   for (let i of array) {
//     i = 'Member ' + (array.indexOf(i) + 1) + ': ' + i;
//     newarray.push(i);
//   }
//   return newarray;
// }
// console.log(fnewarray(users));

// Task 3.

// способ 1 

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// let toPositive =numbers.filter(item => item > 0);
// console.log(toPositive);

// способ 2

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// function toPosotive(array) {
//   return array.filter(item => item > 0);;
// }
// console.log(toPosotive(numbers));

// или так

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// function toPositive(array) {
//   let arrToPositive = [];
//   for (let i of array) {
//     if(i > 0) {
//       arrToPositive.push(i);
//     }
//   }
//   return arrToPositive;
// }
// console.log(toPositive(numbers)); 

// Task 4.

// способ 1 

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// let sum = fibonacci.reduce((sum, i) => sum + i);
// console.log(sum);

// способ 2

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function sum(array) {
//   return array.reduce((sum, i) => sum + i);
// }
// console.log(sum(fibonacci));

// или так 

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// function sum(array) {
//   let sum = 0;
//   for (let i of array) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sum(fibonacci));

// Task 5. 

// способ 1

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// let evenNumber = numbers.find((i) => i % 2 === 0);
// console.log(evenNumber);

// способ 2

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// function evenNumber(array) {
//   return array.find((i) => i % 2 === 0);
// }
// console.log(evenNumber(numbers));

// или так

// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
// function evenNumber(array) {
//   for(let i of array) {
//     if(i % 2 === 0) {
//       console.log(i);
//       break
//     }
//   }
// }
// evenNumber(numbers);

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

// // ??? я не понимаю, почему в методе getSumOfCredit стоит значение f при выводе в консоль тут

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
//   let newArr = arr.filter((i) => {
//     if(i !== 'a' && i !== 'e' && i !== 'u' && i !== 'i' && i !== 'o') {
//       return i;
//     }
//   })
//   console.log(newArr);
//   return newArr.join('');
// }

// Task 3.

// let sString = prompt('Введите строку');
// while (!fMatch(sString)) {
//   sString = prompt('Введите строку');
// };
// fFunc(sString);
// function fFunc(sString) {
//   const arr = sString.split('');
//   const newArr = arr.map(
//     (n, i) => {
//      n = n.repeat(i+1);
//      n = n[0].toUpperCase() + n.substring(1)
//      return n;
//     }
//   );
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

// сделаю чуть позже, добавлю в след. домашку

// Task 6. 

// let sString = prompt('Введите строку');
// total(sString);
// function total(string) {
//   let arr = string.split('');
//   console.log(arr);
//   const total1 = (arr.map((item) => item.charCodeAt(0))).join('');
//   console.log(total1);
//   const total2 = (total1.split('')).map((i) => parseInt(i));
//   console.log(total2);
//   let indexOfI = total2.find((i, index) => {if(i == 7); return index;});
//   console.log(indexOfI);
//   total2[indexOfI] = 1;
//   console.log(total2);
//   let sumofTotal1 = total1.reduce((sum, i) => sum + i, 0);
//   console.log(sumofTotal1);
//   let sumOfTotal2 = total2.reduce((sum, i) => sum + i, 0);
//   console.log(sumOfTotal2);
//   console.log(sumofTotal1 - sumOfTotal2);
//   // (прочитала, что такая ошибка появляется, если использовать reduce не на массиве, но у меня же массив.. использовала reduce выше таким же образом.. не понимаю)
// }

// Task 7.

// сделаю чуть позже, добавлю в след. домашку