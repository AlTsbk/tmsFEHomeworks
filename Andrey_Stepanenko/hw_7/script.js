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

// ### ADVANCED level

// #### Task 1 👨‍🏫

// function Student (name, salary, rate){
//     this.name = name;
//     this.salary = salary;
//     this.rate = rate;
// }

// let user = new Student('Alex', 100, 'A');
// let user2 = new Student('Katerina', 250, 'B')
// let user3 = new Student('Andrey', 200, 'A');
// let user4 = new Student('Igor', 20, 'D');
// let user5 = new Student('Sofia', 300, 'C');

// console.log(user, user2, user3, user4, user5);

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// let disemvowel = (str) => str.replace(/[aeiouy]/gi, '')
// let trollcomment = prompt('Введите строку')
// console.log(disemvowel(trollcomment));



// #### Task 4
    let a = ("1 2 3 4 5"); 
    let b = ("1 2 -3 4 5"); 
    let c = ("1 9 3 4 -5");

    let one = a.split(' ');
    let m = Math.max(...one);
    let min = Math.min(...one);
    console.log(m, min);

    let two = b.split(' ');
    let n = Math.max(...two);
    let o = Math.min(...two);
    console.log(n, o);

    let three = c.split(' ');
    let k = Math.max(...three);
    let l = Math.min(...three);
    console.log(k, l);

