// let a = 'true';
// let b = false;
// let c = 17;
// let d = undefined;
// let e = null;

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e);


//Task 2

    // let height = 20;
    // let width = 20;

    // if (height > width) {
    //     console.log(height) }
    //     else if (height < width){
    //         console.log(width)} 
    //         else {console.log('Значения равны')
    //     }
        
    //Task 7


    // let a = prompt('Укажите сторону света в которую хотите отправиться! :))');

    // switch (a) {
    //     case 'Север': console.log('на север пойдешь много денег найдешь');     
    //         break;
    //     case 'Юг': console.log('на юг пойдешь счастье найдешь');
    //         break;
    //     case 'Запад': console.log('на запад пойдешь верного друга найдешь');
    //         break;
    //     case 'Восток': console.log('на восток пойдешь разработчиком станешь');
    //         break;
    //     default: console.log('Такой стороны света не существует, дружок ;)');
    //         break;
    // }


    //Task 3

    // Написать перебор от 1 до 20, где выведутся все числа кратные трём.

// > Для вычисления кратности обратите внимание на оператор %

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }  
// }

//Task 4
//     Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
// Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
// Для решения этой задачи нам помогут логические операторы **`|| &&`**.

// let key = true
// let documents = true
// let pen = true
// let apple = false
// let orange = true

// if (key && documents && pen && (apple || orange)) {
//   let shouldGoToWork = console.log('Все ок');
// }else {
//   let shouldGoToWork = console.log('Что то не взяли');
// }



// Task 5

// Запросить у пользователя число: 

//     1. Если число делится без остатка на 5 выводим сообщение Fiz
//     2. Если число делится без остатка на 3 выводим сообшение Buz
//     3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz

    // let nNumber = +prompt('Введите число');

    // if (nNumber % 15 === 0) {
    //     alert('Fizbuz'); 
    // } else if (nNumber % 3 === 0) {
    //     alert('Buz');
    // } else if (nNumber % 5 === 0){
    //     alert ('Fiz');
    // } else {
    //     alert('Введите другое число');
    // }


    //Task 6

//     Написать программу, которая выполняет следующие операции:

// - Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - `Попей пивка`. 
// - Если меньше, то выводит сообщение - `Пей колу`. 
// - Добавить условие, что если возраст от 16-18, выводим сообщение - `Можешь выкурить сигаретку, только маме не говори`.


//     let age = +prompt('Введите свой возраст');

//    if (age >= 18) {
//     alert('Попей пивка!')
//    } else if (age < 16) {
//     alert('Пей колу!') 
//    } else if (age >= 16 && age < 18) {
//     alert ('Можешь выкурить сигаретку, только маме не говори!')
//    }


// ### ADVANCED level

// #### Task 1 👨‍🏫 

// Пользователь решил повеселиться и ввел свое имя в таком ввиде 'пОлИнА нАбЕрЕжНаЯ'

// Испрвьте эту ситацию чтобы мы смогли корректно поприветсвовать пользователя, и поприветствуйте его через **alert**

// > Привет, Полина Набережная!


// let sLastName = prompt('Введите Вашу фамилию!');
// let sName = prompt('Введите Ваше имя!');

// let sNameMod = sName.charAt(0).toUpperCase() + sName.slice(1).toLowerCase();
// let sLastNameMod = sLastName.charAt(0).toUpperCase() + sLastName.slice(1).toLowerCase();


// alert('Привет, ' + sNameMod + ' ' + sLastNameMod + '!');

    








//     #### Task 3 👨‍🏫

// Написать программу, которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

// > Не забудьте вопспользоваться циклами


// var str = '#';

// while (str.length <= 7) {
//     console.log(str += '#');
// }





// #### Task 2 👨‍🏫 

// Написать программу, которая выполняет следующие операции: 

// 1. Запрашивает у пользователя число.
// 2. Последовательно задает вопрос: 
//     cколько отнять / прибавить / умножить / разделить от предыдущего результата?
// 3. По окончании вывести пользователю **`alert`**, содержащий формулу и результат например: 
// > ((((6 - 10) + 5) * 20) / 2 = 110)


// let a = +prompt('Введите число');
// let b = +prompt('сколько отнять?');
// let c = +prompt('сколько прибавить?');
// let d = +prompt('на сколько умножить?');
// let e = +prompt('на сколько разделить');

// // let f = a - b;
// // let g = f + c;
// // let h = g * d;
// // let j = h / e;

// let k = (((a - b) + c) * d) / e; 
// alert(`(((${a} - ${b}) + ${c}) * ${d}) / ${e} = ${k}`);
