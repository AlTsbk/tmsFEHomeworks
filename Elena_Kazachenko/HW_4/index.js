// hw-4

// task 1

// function getSum(a) {
//     let b = 0;
//     for (let i = b; i <= a; i++) {
//         b += i;
        
//     }
//     return b;

// }

// let number = +prompt('введите число');

// console.log(getSum(number));
                      
// task 2

// let sum = +prompt('введите сумму кредита');

// function persentCredit() {

//     let percent = 17;
//     let p = percent / 100;
//     let result = (sum * p) * 5;

//     console.log(result)
// }
// persentCredit();

// task 3

// let str = prompt('Введите текст');
// let ValFrom = +prompt('Значение от');
// let ValTo = +prompt('Значение до');

// function partOfTheString(a, b, c) {
//     s = a.substring(b, c) 
//     return s;
// }

// partOfTheString(str, ValFrom, ValTo);
// console.log('строка от и до: ', s);


// task 4

// function getSumNumbers(a) {
//     let sum = 0;
//     let x = String(a);
//     for (let i = 0; i < x.length; i++) {
//         sum += Number(x[i]);
//     }
//     return sum;
// }
// console.log(getSumNumbers(1994));

// task 5

// let getFirstNumber = +prompt('ВВедите первое число');
// let getSecondNumber = +prompt('ВВедите ворое число');

// function getSum(First, Second) {
//     if (First === Second) {
//         console.log('Числа одинаковы!')
//     } else {
//         let min = Math.min(First, Second);
//         let max = Math.max(First, Second);
//         let sum = 0;

//         for (let i = min; i <= max; i++) {
//             sum += i;;
//         }
//         console.log(sum);
//     }
// }
// getSum(getFirstNumber, getSecondNumber);


// task 6

// function foo() {
//     console.log('foo');
// }

// function boo() {
//     console.log('boo');
// }

// function fooboo(bul, foo, boo) {
//     if (bul) {
//         foo();
//     } else {
//         boo();
//     }
// }

// fooboo(true, foo, boo);

// -----ADVANCED level-----


// task 1

// let sideOfATriangleA = +prompt('Введите первую сторону треугольника');
// let sideOfATriangleB = +prompt('Введите вторую сторону треугольника');
// let sideOfATriangleC = +prompt('Введите третью сторону треугольника');

// function triangele(a, b, c) {
//     if ((a + b) > c && (a + c) > b && (b + c) > a) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }

// triangele(sideOfATriangleA, sideOfATriangleB, sideOfATriangleC);

// task 2

// let sideN = +prompt('введите первую сторону шоколада');
// let sideM = +prompt('введите вторую сторону шоколада');

// function chocolateBar(n, m) {
//     if (n <= 0 || m <= 0) {
//         console.log(0);
//     } else {
//         let result = (n * m) - 1;
//         console.log(result);
//     }
// }

// chocolateBar(sideN, sideM)