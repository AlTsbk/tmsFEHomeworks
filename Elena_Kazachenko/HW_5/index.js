/////////////////////////hw-5/////////////////////


// task 1


// let oDog = {
//     name: 'Jasi',
//     age: 0,
// }
// delete oDog.name;
// delete oDog.age;

// console.log(oDog);

// task 2

// let oDog = {
//     name: 'Jasi',
//     age: 0,
// }

// console.log('type' in oDog);

// task 3

// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (key in student) {
//     console.log(key);
// }
// for (key in student) {
//     console.log(student[key]);
// }

// task 4

// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий',
//     },
// };

// for (key in colors) {
//     console.log(colors['ru pum pu ru rum'].red);
//     console.log(colors['ru pum pu ru rum'].blue);
// }

// task 5

// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// };


// function averageSalary (staff){
//     let oNewSum = 0;
//     let numberOfKeys = Object.keys(salaries).length;

//     for (const key in staff) {
//         oNewSum += staff[key] / numberOfKeys;
//     }
//     return oNewSum.toFixed(3);
// }

// console.log(`средняя зп: ${averageSalary(salaries)}`);


// task 6 

// let oUserData1 = {
//     login: prompt('введите логин'),
//     password: prompt('введите пароль'),
// }

// let oUserData2 = {
//     login: prompt('введите еще раз логин'),
//     password: prompt('введите еще раз пароль'),
// }

// if (JSON.stringify(oUserData1) === JSON.stringify(oUserData2)) {
//     alert('Добро пожаловать')
// } else {
//     alert('Попробуйте еще раз')
// }

// console.log(JSON.stringify(oUserData1));
// console.log(JSON.stringify(oUserData2));


// -----------------ADVANCED level----------------

// task 1

// let sCount = prompt('Введите счет');

// let aNumbers = sCount.split(':');

// let oNumMap = {
//     '0' : 'ноль',
//     '1' : 'один',
//     '2' : 'два',
//     '3' : 'три',
//     '4' : 'четыре',
//     '5' : 'пять',
//     '6' : 'шесть',
//     '7' : 'семь',
//     '8' : 'восемь',
//     '9' : 'девять',
    
// }

// console.log('Счет ' + oNumMap[aNumbers[0]] + ' - ' + oNumMap[aNumbers[1]]);




// task 2

// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// function comparisonStudents(s1, s2) {
//     for (let key in s1) {
//         if(s1[key] !== s2[key]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(comparisonStudents(student1, student2));

// task 3

// const animals = {
//     cat: {
//        name: 'Енчик',
//        age: 3,
//     },
//     dog: {
//        name: 'Орео',
//        age: 2,
//     }
//  }

//  if ('bird' in animals) {
//     console.log(animals.bird);
//   }

