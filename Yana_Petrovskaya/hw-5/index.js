// Task 1.

// const cat = {
//   name: 'Nyasha',
//   color: 'grey',
//   age: 5
// }
// const parrot = {
//   name: 'Zhorik',
//   color: 'green',
//   age: 8
// }
// console.log(cat, parrot);
// delete parrot.age;
// delete cat.age;
// console.log(cat, parrot);

// Task 2.

// const cat = {
//   name: 'Nyasha',
//   color: 'grey',
//   age: 5
// }
// const parrot = {
//   name: 'Zhorik',
//   color: 'green',
//   age: 8
// }
// if('age' in cat) {
//   console.log(cat.age);
// }
// if('color' in parrot) {
//   console.log(parrot.color);
// }

// Task 3.

// const student = {
//   name: 'John',
//   age: 19,
//   isHappy: true
// }
// for (const key in student) {
//   console.log(key);
//   console.log(student[key]);
// }

// for (const key in student) {
//   console.log(key);
// }
// for (const key in student) {
//   console.log(student[key]);
// }

// Task 4.

// const colors = {
//   'ru pum pu ru rum': {
//     red: 'красный',
//     green: 'зеленый',
//     blue: 'синий'
//   },
// };
// console.log(colors["ru pum pu ru rum"].red +' и ' + colors["ru pum pu ru rum"].blue);

// Task 5.

// let salaries = {
//   evgeniya: 500,
//   sveta: 413,
//   anton: 987,
//   andrey: 664,
//   alexandra: 199
// }
// function sumSalaries(salaries) {
//   let nSumSalary = 0;
//   for(let salary of Object.values(salaries)) {
//   console.log(salary);
//   nSumSalary += salary;
//   console.log(nSumSalary);
//   }
//   return nSumSalary;
// }
// console.log(Object.keys(salaries).length);
// nAverageSalary = sumSalaries(salaries)/(Object.keys(salaries).length);
// console.log(nAverageSalary);

// Task 6.


// let sLogin = prompt('Введите логин!');
// let sPassword = prompt('Введите пароль!');

// const user = {
//   Login: sLogin,
//   Password: sPassword
// }
// alert('Ваш логин: ' + sLogin + '. Ваш пароль: ' + sPassword + '.');
// let bConfirm = confirm('Данные верны?');
// if(!bConfirm) {
//   alert('Пройдите регистрацию еще раз!');
// } else {
//   alert('Добро пожаловать!');
// }

// ADVANCED level

// Task 1.

// let sCount = prompt('Введите счет');
// let aNumbers = sCount.split(':');

// if(!aNumbers.every(item => {
//   return +item <=9 && +item >=0
// })) {
//   console.log('Некорректные данные');
// } else {
//   let oNumMap = {
//     '0': 'Ноль',
//     '1': 'Один',
//     '2': 'Два',
//     '3': 'Три',
//     '4': 'Четыре',
//     '5': 'Пять',
//     '6': 'Шесть',
//     '7': 'Семь',
//     '8': 'Восемь',
//     '9': 'Девять',
//   }
//   console.log('Счет: ' + oNumMap[aNumbers[0]] + ' - ' + oNumMap[aNumbers[1]]);
// }


// Task 2.

// let student1 = {
//   name: 'Polina',
//   age: 27
// }

// let student2 = {
//   name: 'Polina',
//   age: 27
// }

// // способ 1

// // console.log(JSON.stringify(student1) === JSON.stringify(student2));

// // способ 2

// function compareObjects(oA,oB) {
//   const propsA = Object.getOwnPropertyNames(oA);
//   const propsB = Object.getOwnPropertyNames(oB);
//   if(propsA.length !== propsB.length) {
//     return false;
//   } 
//   for(let i = 0; i < propsA.length; i++) {
//     const prop = propsA[i];
//     const areObjects = typeof(oA[prop]) === 'object' && typeof(oB[prop]) === 'object';

//     if(!areObjects && (oA[prop] !== oB[prop])) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(compareObjects(student1, student2));


// Task 3.

// const animals = {
//   cat: {
//     name: 'Енчик',
//     age: 3,
//   },
//   dog: {
//     name: 'Орео',
//     age: 2,
//   }
// }

// console.log(animals.cat.name, animals.dog.name);
// console.log(animals?.bird?.name);
