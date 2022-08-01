// let name_1 = prompt("Введите первое имя");
// let name_2 = prompt("Введите первое имя");
// let name_3 = prompt("Введите первое имя");

// sayHello(name_1);
// sayHello(name_2);
// sayHello(name_3);

// function sayHello(sName){
//     console.log("Привет " + sName);
// }


// function findPerimetr(nLength, nHight){
//     let result = nLength * 2 + nHight * 2;

//     function func2(){
//         console.log(result);
//     }

//     func2();

//     return result;
// }

// let h = +prompt("Высота");

// let l = +prompt("Длина");

// console.log(findPerimetr(l, h));

// function findS(a = 10, b = 10){
//     // let hight = a || 10;
//     // let width = b || 10;

//     return a * b;
// }   

// console.log(findS(5,2));
// console.log(findS(1));
// console.log(findS(undefined,4));
// console.log(findS());

// if(true){
//     let sLet = "Let";
//     var sVar = "Var";
// }

// console.log(sVar);
// console.log(sLet);


// declaredFunction();
// fn();

// function declaredFunction(){
//     console.log("declaredFunction");
// }

// let fn = function(){
//     console.log("fn");
// }

// declaredFunction();
// fn();

// console.log("hello", "bye")

// function showSQR(){
//     console.log(arguments);
//     if(!arguments.length){
//         console.log("нет параметров");
//     }
//     for(let i = 0; i < arguments.length; i++){
//         console.log(`Квадрат числа ${arguments[i]} = ${arguments[i]*arguments[i]} `);
//     }
// }

// showSQR(2,3,4,5,6,7);


// Task 7.

// let sName = prompt('Введите Ваше имя!');
// let nAge = Number(prompt('Введите Ваш возраст!'));
// while(!nAge) {
//   nAge =+prompt('Введите Ваш возраст!');
// }
// while(!sName){
//     sName = prompt('Введите Ваше имя!');
// }
// alert('Ваше имя: ' + sName + '. ' + 'Ваш возраст: ' + nAge + '.');

// function fn(){
//     console.log("До return");
//     return ""
//     console.log("До return");
// }

// fn();