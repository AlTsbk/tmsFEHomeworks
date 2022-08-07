// ### NORMAL level

// #### Task 1 🖥

// Дан массив:

// ```javascript
//     const colors = ['red', 'green', 'blue']
// ```

// Выведите в консоль его длину.


// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);


// Дан массив:

// ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```

// Выведите в консоль его последний элемент вне зависимости от его длинны.

// const animals = ['monkey', 'dog', 'cat'];

// console.log(animals[animals.length-1]);


// #### Task 3 🖥

// Дан массив:

// ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```

// Удалите все элементы в массиве и выведите в консоль полученный результат.

// > Реализуйте решение двумя способами.

// const numbers = [5, 43, 63, 23, 90];

// numbers.splice(0, 5);

// console.log(numbers);

// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// console.log(numbers);


// #### Task 4 🖥

// Дан массив:

// ```javascript
//     const students = ['Polina', 'Dasha', 'Masha']
// ```

// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.


// const students = ['Polina', 'Dasha', 'Masha'];

// students.splice(2,1,'Borya');
// students.splice(0,1,'Andrey');
// console.log(students);




// #### Task 5 🖥

// Дан массив:

// ```javascript
//     const cats = ['Gachito', 'Tom', 'Batman']
// ```

// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

// const cats = ['Gachito', 'Tom', 'Batman'];

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// for (const value of cats) {
//     console.log(value);
// }


// #### Task 6 🖥

// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```

// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

// const evenNumbers = [2, 4, 6, 8, 10];
// const oddNumbers = [1, 3, 5, 7, 9];

// let aArr = [];
// console.log(aArr.concat(evenNumbers, oddNumbers));
// console.log(aArr.concat(evenNumbers, oddNumbers).indexOf(8));


// #### Task 7 🖥

// Дан массив:

// ```javascript
//     const binary = [0, 0, 0, 0]
// ```
 
// + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.

// > [0, 0, 0, 0] -> '0101010'


// const binary = [0, 0, 0, 0];

// let str = binary.join('1');
// console.log(str);

// ### ADVANCED level

// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫

// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

// function checkPalindrome(word) {    
//     const l = word.length;
//     for (let i = 0; i < l / 2; i++) {
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//             return console.log('слово не полиндром');
//         }
//     }
//     return console.log('Ура, полиндром!');
// }

// checkPalindrome('дед');


// #### Task 2 👨‍🏫

// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```

// > Выведите в консоль среднее значение чисел в многомерном массиве.

// const matrix = [
//     [12, 98, 78, 65, 23],
//     [54, 76, 98, 43, 65],
//     [13, 324, 65, 312],
//     [9092, 22, 45, 90000],
// ]

// for(let j = 0; j < matrix.length; j++) {
//     for(let n = 0; n < matrix.length; n++) {
      
//     }
    
//   }


// #### Task 3 👨‍🏫

// Дан массив:

// ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```

// Создайте два массива, в один поместите все положительные числа включая 0, в другой все отрицательные. Оба массива затем выведите в консоль. 


// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

// function posneg(parametr){

//         let oResult = {
//             positive:[],
//             negative:[]
//         }
        
//         for (let i = 0; i < parametr.length; i++) {
//             if (parametr[i] >= 0 ) {
//                 oResult.positive.push(parametr[i]);
//             } else {
//                 oResult.negative.push(parametr[i]);
//             }
//         }
//         return oResult;
//     }
    
//     console.log(posneg(mixedNumbers));


// #### Task 4 👨‍🏫

// Создать массив длинной не менее 5, из динамически созданных случайных чисел. Далее написать алгоритм который берет все числа из исходного массива, возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

// let y = Math.round((Math.random() * 100));
// let x = Math.round((Math.random() * 100));
// let w = Math.round((Math.random() * 100));
// let f = Math.round((Math.random() * 100));
// let u = Math.round((Math.random() * 100));

// const aArr = [y, x, w, f, u];

// function cube(array) {
//     let aResult = [];
//     for (let i = 0; i < array.length; i++) {
//         aResult.push(array[i] ** 3);
//     }
//     console.log(aResult);
// }


// console.log(aArr);
// cube(aArr);


