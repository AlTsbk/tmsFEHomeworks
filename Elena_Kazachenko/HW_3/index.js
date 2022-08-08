// task 1

// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;

// console.log(`have type a: ${typeof a}`);
// console.log(`have type b: ${typeof b}`);
// console.log(`have type c: ${typeof c}`);
// console.log(`have type d: ${typeof d}`);
// console.log(`have type e: ${typeof e}`);

// task 2

// let height = 15;
// let width = 20;

// if (height > width) {
//     console.log(height);
// } else if(width > height) {
//     console.log(width);
// }

// task 3

// let nFirstNumber = 1;
// let nSecondNumber = 20;
// let nThirdNumber = 3;

// for (let i = nFirstNumber; i <= nSecondNumber; i++) {
//     if(i % nThirdNumber === 0) {
//         console.log(i)
//     }
    
// }

// task 4

// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true

// if(key && documents && pen && (apple || orange)) {
//     let shouldGoToWork = console.log('Все готово! Можешь отправлятся на работу')
// } else {
//     let shouldGoToWork = console.log('Кажется ты что то забыл')
// }


// task 5

// let a = +prompt('введите число');

// if ((a % 5 == 0) && (a % 3 == 0)) {
//     alert('FizBuz');
// } else if (a % 5 === 0) {
//     alert('Fiz');
// } else if (a % 3 === 0) {
//     alert('Buz');
// }

// task 6 

// let age = +prompt('введи возраст');

// if (age < 18 && age >= 16) {
//     alert('можешь выкурить сигаретку, только маме не говори')
// } else if (age >= 18) {
//     alert('попей пивка')
// } else if (age < 18) {
//     alert('пей колу')
// }

// task 7

// let sSideOfTheWorld = prompt('в какую сторону света вы бы хотели отправиться?')

// switch (sSideOfTheWorld) {
//     case 'север':
//         alert('на север пойдешь много денег найдешь');
//         break;
//     case 'юг':
//         alert('на юг пойдешь счастье найдешь');
//         break;
//     case 'запад':
//         alert('на запад пойдешь верного друга найдешь');
//         break;
//     case 'восток':
//         alert('на восток пойдешь разработчиком станешь');
//         break;

//     default: alert('попробуйте еще раз');
//         break;
// }


// -----ADVANCED level-----

// task 1

// let sName = prompt('введите свое имя');
// let sSurname = prompt('введите фамилию');

// let sNameRes = sName.charAt(0).toUpperCase() + sName.slice(1).toLowerCase();
// let sSurnameRes = sSurname.charAt(0).toUpperCase() + sSurname.slice(1).toLowerCase();

// alert('Привет, ' + sNameRes + ' ' + sSurnameRes + '!');

// task 2

// let a = +prompt('Введите число');
// let b = +prompt('Сколько отнять');
// let c = +prompt('Сколько прибавить');
// let d = +prompt('На сколько умножить');
// let e = +prompt('На сколько разделить');

// let nResult = ((((a-b)+c)*d)/e);

// alert(`((((${a} - ${b}) + ${c}) * ${d}) / ${e}) = ${nResult}`);

// Task 3.

// let str = "";

// while (str.length < 6)

// console.log(str += "#");