//TASK 1

//созданы переменные, затем сложины и выведены  в консоль разработчика.//
let a = 20;
let b = 58;
let c = 42;
console.log(a + b + c);

//TASK 2

//Созданы переменные
    - количество секунд в минуте
    - количество минут в часу
    - количество часов в сутках
    - количество суток в году
//
let second = 60;
let minute = 60;
let hour = 24;
let day = 365;

let myAgeInSeconds = 26 * day * hour * minute * second;
//console.log(myAgeInSeconds); //в секундах
//console.log(myAgeInMinute); //в минутах
//console.log(myAgeInHour); //в часах
//console.log(myAgeInDay); //в днях

//TASK 3

let count = 42;
let userName = '42';
//созданы две переменные

let inNumber = Number(console.log(userName));
let inString = String(console.log(count));
let count = String(42);
let userName = +'42';
//userName преобразовано в число//count переведен в строку 


//TASK 4
let a = 1;
let b = 2;
let c = "белых медведей";
//выражение '12 белых медведей'
alert(String(a) + String(b) + ' ' + c);

//TASK 5

let a = 'доступ';
let b = 'морпех';
let c = 'наледь';
let d = 'попрек';
let e = 'рубило';
//создание переменной lengthWords для подсчета слов.
let lengthWords = a.length + b.length + c.length + d.length + e.length;
alert('Длина слов равна: ' + lengthWords +'.'); 

//TASK 6

//создано три переменные
let sFirstVariable = 'Aloha';
let nSecondVariable = 101;
let bThirdVariable = true;
//выведено
alert('Variable: ' + String(Object.keys({ sFirstVariable })) + ' have type: ' + String(typeof (sFirstVariable)));
alert('Variable: ' + String(Object.keys({ nSecondVariable })) + ' have type: ' + String(typeof (nSecondVariable)));
alert('Variable: ' + String(Object.keys({ bThirdVariable })) + ' have type: ' + String(typeof (bThirdVariable)));


//TASK 7

//запрос имя и возаста
let name = prompt('Введите ваше имя');
let age = +prompt('Введите ваш возраст');
//вывод
console.log(name, age);


//ADVANSED\\

//TASK1 

let a = 4;
let b = 3;
a = a + b;
b = a - b;
a = a - b;
alert('a = ' + a);
alert('b = ' + b);
// за счет сложения/вычетания значения переменных изменились не меняя ее саму


//TASK 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
//вывод вычленения 
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);

