// Task 1.

// let nLastNumber = +prompt('Найти сумму от 0 до ... ? Введите число!');

// getSum (nLastNumber);

// function getSum(b) {
//   let sum = 0;
//   for( let i = 0; i <= b; i++) {
//     sum += i;
//   }
//   alert(sum);
// }

// Task 2.

// let nCredit = +prompt('Наше предложение: \n  - процетная ставка в год - 17 %,\n  - срок - 5 лет.\n На какую сумму Вы хотите взять кредит? ');

// overPayment(17, 5);

// function overPayment(nPercentPerYear, nTerm) {
//   let paymentInMonth = Math.round(((nCredit*(nPercentPerYear/100/12)*(1+(nPercentPerYear/100/12))**(nTerm*12))/((1+(nPercentPerYear/100/12))**(nTerm*12)-1))*100)/100;
//   console.log('Ежемесячный платеж: ' + paymentInMonth);
//   let totalPayment = Math.round((nTerm*12*paymentInMonth)*100)/100;
//   let result = Math.round((totalPayment - nCredit)*100)/100;
//   alert('Переплата по кредиту составит: ' + result + '.');
// }

// Task 3.

// trimString();

// function trimString() {
//   let sString = prompt('Введите текст.');
//   let nFrom = +prompt('Введите значение "от".');
//   let nTo = +prompt('Введите значение "до".');

//   alert(sString.substring(nFrom, nTo));
// }

// Task 4.

// getSumNumbers ();

// function getSumNumbers() {
//   let nNumber = +prompt('Введите число.');
//   sNumber = nNumber.toString();
//   output = [];

//   for ( let i = 0, len = sNumber.length; i < len; i++) {
//     output.push(+sNumber.charAt(i));
//   }
//   let sum = 0;
//   for (let i = 0; i < output.length; sum += output[i++]);
//   alert(sum);
// }

// Task 5.

// let nFirstNumber = +prompt('Мы вычислим сумму всех числе от ... (Введите первое число.)');
// let nLastNumber = +prompt('до ... (Введите второе число.)');

// getSum (nFirstNumber, nLastNumber);

// function getSum(a, b) {
//   let sum = 0;
//   if (a === b) {
//     alert(a + '. Числа одинаковы.');
//   } else if (a < b) {
//     for( let i = a; i <= b; i++) {
//       sum += i;
//     }
//   } else if (a > b) {
//     for( let i = b; i <= a; i++) {
//       sum += i;
//     }
//   }
//   alert(sum);

// Task 6.

// let bBoolean = true;

// function foo() {
//   console.log(foo.name);
// }
// function boo() {
//   console.log(boo.name);
// }

// fooboo(bBoolean, foo, boo);
// function fooboo(bBoolean, foo, boo) {
//   if(bBoolean) {
//     foo();
//   } else {
//     boo();
//   }
// }

// ADVANCED level

// Task 1.

// triangle ();

// function triangle() {
//   let a = +prompt('Введите первую сторону');
//   let b = +prompt('Введите вторую сторону');
//   let c = +prompt('Введите третью сторону');
//   if ((a+b)>c && (b+c)>a && (a+c)>b) {
//     alert('Треугольник существует');
//     return true;
//   } 
//   return false;
// }


// Task 2.

// let n = +prompt('Зададим размер шоколадной плитки в формате n х m. Введите число n: ');
// while(!n || n < 0 || n % 1 != 0) {
//   n = +prompt('Введите ЦЕЛОЕ и ПОЛОЖИТЕЛЬНОЕ число!');
// }
// let m = +prompt('Введите число m: ');
// while(!m || m < 0 || m % 1 != 0) {
//   m = +prompt('Введите ЦЕЛОЕ и ПОЛОЖИТЕЛЬНОЕ число!');
// }
// splitTheChocolate(n, m);
// function splitTheChocolate(n, m) {
//   if (n === 0 || m === 0) {
//     alert('Количество надломов: 0.');
//   } else {
//     let nNumberOfBreaks = (n - 1) + ((m - 1)*m);
//   alert('Количество надломов: ' + nNumberOfBreaks);
//   }
// }

// Task 3.

// const nTaxRate = 7;
// const nPhonePrice = 2400;
// const nAccessoryPrice = 210;

// let nCreditCardBalance = +prompt('Введите баланс Вашей кредитной карты!');
// alert('Баланс Вашей кредитной карты равен: ' + nCreditCardBalance + ' р.');


// let price = priceCalculation(nPhonePrice, nTaxRate, nAccessoryPrice);
// let nFinalPrice = rounding(price); 
// alert('Окончательная сумма к оплате: ' + nFinalPrice  + ' р.'); 

// function priceCalculation(price, tax, addOnPrice) {
//   console.log('Стоимость телефона: ' + price + ' р.');
//   console.log('Стоимость аксессуаров составит: ' + addOnPrice + ' р.');
//   console.log('Налог составит: ' + tax + '%.');
//   return ((price+addOnPrice)*(tax/100))+(price+addOnPrice);
// }
// function rounding(variable) {
//   return +(variable.toFixed(2));
// }

// let nNumberofPhones = 0;

// while(nCreditCardBalance >= nFinalPrice) {
//   let sQuestion = confirm('Хотите купить телефон?');
//   if(!sQuestion) {
//     alert('Всего хорошего! Совершено покупок: ' + nNumberofPhones + '.');    
//   } else {
//     nCreditCardBalance = nCreditCardBalance - nFinalPrice;
//     let nRoundCreditCardBalance = rounding(nCreditCardBalance);
//     nNumberofPhones = nNumberofPhones + 1;
//     alert('Вы удачно совершили покупку. На счету осталось: ' + nRoundCreditCardBalance + ' р.\n Количество телефонов у вас: ' + nNumberofPhones + '.');  
//   }
// } alert('На вашем счету недостаточно средств. Покупка невозможна.\n Количество совершенных покупок: ' + nNumberofPhones + '.');

