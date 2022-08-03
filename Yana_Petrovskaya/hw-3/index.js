// Task 1.

// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// Task 2.

// let height = 15;
// let width = 20;

// if(height>width) {
//   console.log(height);
// }else {
//   console.log(width);
// }

// Task 3.

// let nFirst = 1;
// let nLast = 20;

// for (let i = nFirst; i <= nLast; i++) {
//   if(i % 3 === 0) {
//     console.log(i);
//   }
// }

// Task 4.

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// if (key && documents && pen && (apple || orange)) {
//   let shouldGoToWork = console.log('Все на месте. Можно идти на работу');
// }else {
//   let shouldGoToWork = console.log('Вы что-то забыли');
// }

// Task 5.

// let nNumber = +prompt('Введите число');
// alert('Ваше число: ' + nNumber);
// if(nNumber % 5 === 0 && nNumber % 3 === 0) {
//   alert('FizBuz');
// } else if (nNumber % 3 === 0) {
//   alert('Buz');
// } else if (nNumber % 5 === 0) {
//   alert('Fiz');
// } else {
//   alert ('Число не делится без остатка на 3 и на 5')
// }

// Task 6.

// let nYourAge = +prompt('Введите ваш возраст!');

// if(nYourAge >= 18) {
//   alert('Попей пивка! (Советую нефильтрованное)');
// } else {
//   alert('Пей колу');
// }
// if(nYourAge >= 16 && nYourAge <= 18) {
//   alert('Можешь выкурить сигаретку, только маме не говори.');
// }

// Task 7. 

// let sCompassDirection = prompt('Куда ты хочешь отправиться? Введи сторону света.');
// switch (sCompassDirection) {
//   case 'юг': 
//     alert('На юг пойдешь счастье найдешь');
//     break;
//   case 'север':
//     alert('На север пойдешь много денег найдешь');
//     break;
//   case 'запад':
//     alert('На запад пойдешь верного друга найдешь');
//     break;
//   case 'восток':
//     alert('На восток пойдешь разработчиком станешь');
//     break;
//   default: 
//   let sCompassDirection = prompt('Попробуйте еще раз. Куда ты хочешь отправиться? Введи сторону света.');
// }

// Advanced level

// Task 1.

// let sSurname = prompt('Введите Вашу фамилию!');
// let sName = prompt('Введите Ваше имя!');

// let sNameFixed = sName.charAt(0).toUpperCase() + sName.slice(1).toLowerCase();
// let sSurnameFixed = sSurname.charAt(0).toUpperCase() + sSurname.slice(1).toLowerCase();
// alert('Привет, ' + sNameFixed + ' ' + sSurnameFixed + '!');

// Task 2.

// let nNumber = +prompt('Введите число!');
// let nMinus = +prompt('Сколько отнять?');
// let nPlus = +prompt('Сколько прибавить');
// let nMultiply = +prompt('На сколько умножить?');
// let nDivide = +prompt('На сколько разделить?');

// alert('Результат: ' + ((nNumber - nMinus + nPlus) * nMultiply) / nDivide);

// Task 3.

// for (let i = '#';; i = i + '#') {
//   console.log(i);
//   if(i.length > 6) break;
// }