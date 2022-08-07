// #### Task 1 💻

// Написать функцию **getSum**, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем. 

// > Если передадим число 100 то, надо вычислить сумму чисел от 0 до 100 (должно получится 5050)



// function getSum(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//    }
//     return sum;
// }

// console.log(getSum(100));


// #### Task 2 💻

// Напишите функцию которая в качестве аргумента принимает в себя сумму кредита который хочет получить клиент и верните результат переплаты по кредиту:

// + процентная ставка в год — 17%,
// + количество лет — 5.

// > Мы пишем функцию для хорошего банка, поэтому сумма кредита не увеличивается.



    // function HowCredit(n) {
    //     let percent = 17;
    //     let result = (n / 100 * percent) * 5;
    //     return result;
    // }

    // console.log(HowCredit(250));


//     #### Task 3 💻

// Написать функцию **trimString** которая в качестве аргумента принимает три параметра:
// + строку
// + значение от
// + значение по

// После вызова функция должна вернуть переданную строку обрезанную по значениям от и по

// let string = prompt("Введите строку");
// let trimStringFrom = +prompt("Значение от");
// let trimStringTo = +prompt("Значение по");

// function trimString(stringT, trimFrom, trimTo) {
//   let resultString = "";
//   resultString += stringT.substring(trimFrom, trimTo);
//   return resultString;
// }
// console.log(trimString(string, trimStringFrom, trimStringTo));





// #### Task 4 💻
// Написать функцию **getSumNumbers**, которая будет принимать число и вычислять сумму цифр из которых состоит число.

// > Для 2021 это будет 5.


    // function getSumNumbers(n) {
    //     let sum = 0;
    //     let x = String(n);
    //     for (let i = 0; i < x.length; i++) {
    //         sum += Number(x[i]);
    //     }
    //     return(sum);
    // }

    // console.log(getSumNumbers(2022));


//     #### Task 6 💻

// Напишите функцию **fooboo** которая принимает в качестве аргумента три параметра:

// + булевое значение
// + функцию **foo** которая выводит в консоль свое имя
// + функцию **boo** которая выводит в консоль свое имя

// > Если переданное булевое значение **true** запускаем функцию **foo** иначе **boo**


// function boo() {
//     console.log("Boo");
//   }
// function foo() {
//     console.log("Foo");
//   }
  
//   function fooBoo(boolValue, booValue, fooValue) {
//     if (boolValue) {
//       fooValue();
//     } else {
//       booValue();
//     }
//   }
//   fooBoo(true, boo, foo);



    // #### Task 5 💻

    // Написать функцию **`getSum`** которая принимает два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех чисел между ними, включая их, и вернуть ее. Если два числа равны, верните a или b.


    // function getSum(a, b) {
    //     const min = a < b ? a : b;
    //     const max = a < b ? b : a;
      
    //     let sum = 0;
    //     for(let i = min; i <= max; i++) {
    //       sum += i;
    //     }
    //     return sum;
    //   }

    //   console.log(getSum(1,1));





//     ADVANCED level
// Task 1 👨‍🏫
// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

    // let a = +prompt('Введите первую сторону');
    // let b = +prompt('Введите вторую сторону');
    // let c = +prompt('Введите третью сторону');

    // function triangle (a, b, c) {
    //     if ((a + b)>c && (b + c)>a && (a + c)>b) {
    //         alert('Треугольник существует')
    //     } else {
    //         alert('Это не треугольник')
    //     }
    // }

    // triangle(a,b,c);


    // Task 3 👨‍🏫


 