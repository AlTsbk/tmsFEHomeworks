// #### Task 1 

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// fibonacci.forEach(element => console.log(element));


// #### Task 2 


// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// const members = users.map(item =>
//  `'member ${users.indexOf(item)}: '${item}`
// )

// console.log(members)


// #### Task 3 

// const numbers = [7, -4, 32, -90, 54, 32, -21];

// const filteredNumbers = numbers.filter(number => number >= 0);
// console.log(filteredNumbers);

// function arrayFilter (aArr, func) {
//     let result = [];
//     for (let i = 0; i < aArr.length; i++) {
//         if(func(aArr[i])) {
//             result.push(aArr[i]);
//         }
//     }
//     return result;
// }
// let filteredArray = arrayFilter(numbers, (item) => item >= 0 );
// console.log(filteredArray);


// #### Task 4

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// const sumFibonacci = fibonacci.reduce((previousValue, currentValue) => previousValue + currentValue);

// console.log(sumFibonacci);


// #### Task 5


// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// const findNumber = numbers.find((item) => item % 2 ===0);
// console.log(findNumber);