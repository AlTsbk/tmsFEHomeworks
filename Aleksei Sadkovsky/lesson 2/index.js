// // Task 1

// let a ='true';
// let b = false;
// let c = 17;
// let d = undefined;
// let z = null;

// console.log (typeof a, typeof b, typeof c, typeof d, typeof z);

// // Task 2

// let height = 20;
// let width = 20;

// if (height > width) {
//     console.log (height);
// } else if (height < width) {
//     console.log (width);}
//  else if (height == width) {
//     console.log ("Числа равны");
// }



// // Task 3

// let nFirts = 1;
// let nLast = 20;

// for ( let i = nFirts; i <= nLast; i++) {
//      if (i % 3 == 0) {
//         console.log (i);
//      }
// }

// Task 4 

// let key = true;
// let documents = true;
// let pen = true;
// let apple = false;
// let orange = true;

// if (key && documents && pen && (apple || orange)) {
//       let shouldGoToWork = console.log('Всё взял');
//     }else {
//       let shouldGoToWork = console.log('Положи яблоко на место. Это для жены');
//     }

// Task 5 

// let nUserNumber = +prompt("Введите число");

// if (nUserNumber % 3 === 0 && nUserNumber % 5 === 0) {
//     console.log ("FizBuz");
// } else if (nUserNumber % 3 == 0) {
//     console.log ("Buz"); }
//  else if (nUserNumber % 5 === 0) {
//     console.log ("Fiz");
// } 

// Task 6 

// let nUserAge = +prompt("Введите свой возраст");

// if (nUserAge > 18) {
//     console.log ("Попей пивка");
// } else if (nUserAge < 18) {
//     console.log ("Пей колу");
// } 

// if ( 16 < nUserAge < 18) {
//     console.log ("Можешь выкурить сигаретку, только маме не говори");
// }


// Task 7

// let userdirection = prompt("Куда отправляемся ?")

// switch (userdirection) {
//     case "Юг": console.log ("на юг пойдешь счастье найдешь")
//     break;
//     case "Север": console.log ("на север пойдешь много денег найдешь")
//     break;
//     case "запад": console.log ("на запад пойдешь верного друга найдешь")
//     break;
//     case "восток": console.log ("на восток пойдешь разработчиком станешь")
//     break;
// }

// ADVANCED level

//Task 1

// let UserName = prompt("Как вас зовут");
// let UserNameLower = UserName.toLowerCase();
// alert ("Привет " + UserNameLower);

// Task 2 

// let nUserNumber = +prompt("Введите число");
// let nUserOut = +prompt("Введите число");
// let nUserSum = +prompt("Введите число");
// let nUserLotap = +prompt("Введите число");
// let nUserdep = +prompt("Введите число");

// alert (((nUserNumber - nUserOut) + nUserSum) * nUserLotap / nUserdep);

// Task 3


let aCicle = "#"

for (let i = aCicle;; i = i + "#") {
  console.log(i);
  if(i.length > 10) break;
}