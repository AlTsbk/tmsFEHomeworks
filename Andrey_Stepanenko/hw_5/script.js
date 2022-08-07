
// #### Task 1 💻

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 


// let oObj = {
//     color: 'grey',
//     type: 'strong'
// }

// delete oObj.color;
// delete oObj.type;
// console.log(oObj);


// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**


// let oCat = {
//     color: 'white',
//     age: '8'
// }

// for (const key in oCat) {
//     if (oCat.hasOwnProperty('color')) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// #### Task 3 🖥

// Дан обьект:

// ```javascript
//     const student = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.



// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
// }

// for (const key in student) {
//    console.log(key);
//    console.log(student[key]);
//    console.log(Object.values(student)); просто для информации, что можно так вывести массив со значениями
// }


// #### Task 4 🖥

// Дан обьект:

// ```javascript
// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };
// ```

// Вывести в консоль слово красный и синий



// const colors = {
//     'ru pum pu ru rum': {
//         red: 'красный',
//         green: 'зеленый',
//         blue: 'синий'
//     },
// };

// console.log(`${colors["ru pum pu ru rum"].red} и ${colors["ru pum pu ru rum"].blue}`);


// #### Task 5 🖥

// Дан обьект:

// ```javascript
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную



// let salaries = {
//     andrey: 500,
//     sveta: 413,
//     anton: 987,
//     andrey2: 664,
//     alexandra: 199
// }

// function sumSalaries(salaries) {

//     let sum = 0;
//     let midsum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//       midsum += 1;
//       midsalari = sum / midsum; 
//     }
  
//     return midsalari;
//   }

//   console.log(sumSalaries(salaries));




// #### Task 6 🖥

// Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. 
// Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 

// let oObj1 = {
//     login: prompt('Введите логин'),
//     password: prompt('Введите пароль')
// }

// let oObj2 = {
//     login: prompt('Подтвердите логин'),
//     password: prompt('Подтвердите пароль')
// }
// console.log(JSON.stringify(oObj1))
// console.log(JSON.stringify(oObj2))
// if (JSON.stringify(oObj1) == JSON.stringify(oObj2)) {
//     alert('Добро пожаловать')

// } else {
//     alert('Данные введены не верно')
// }


// ### ADVANCED level

// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны

// ```javascript
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
// ```


// let student1 = {
//     name: 'Polina',
//     age: 27,
// }

// let student2 = {
//     name: 'Polina',
//     age: 27,
// }

// function ConcatObjects(oFirstObj, oSecondObj) {
//     for (const key in oSecondObj) {
//         if(oFirstObj[key] === oSecondObj[key])
//         console.log('объекты равны')
//     }
// }

// console.log(ConcatObjects(student1, student2))



// #### Task 1 👨‍🏫

// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. Жаль что нам присылают результат матча в формате '2:5', ведь нам надо это вывести в консоль словами. Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 