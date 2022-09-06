// ////////////Homework - 5 /////////////////////////////////////////////////

// Task 1 Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта.

let purchases = {
  bread: 1,
  milk: 2,
};

delete purchases.milk;

console.log(purchases);

// Task 2 Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль true

let purchasesList = {
  eggs: 1,
  milk: 2,
};

if ("milk" in purchasesList) {
  console.log(true);
} else {
  console.log(false);
}

// Task 3 C помощью цикла for in вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
  name: "John",
  age: 19,
  isHappy: true,
};
for (const key in student) {
  console.log(key);
  console.log(student[key]);
}

// Task 4 Вывести в консоль слово красный и синий

const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);

// Task 5 Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  egor: 664,
  alexandra: 199,
};

function sumSalaries(oSalaries) {
  let oSumm = 0;
  let numberOfworkers = Object.keys(salaries).length;
  for (const key in oSalaries) {
    oSumm += oSalaries[key] / numberOfworkers;
  }
  return oSumm.toFixed(2);
}

console.log(`Средняя зарплата: ${sumSalaries(salaries)}`);

// Task 6 Создать валидатор, запросить у пользователя логин и пароль для регистрации. Затем данные записать в обьект. Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожалоВать.

let login = prompt("Введите логин").toLocaleLowerCase();
let password = prompt("Введите пароль").toLocaleLowerCase();
let oData = { login, password };
login = prompt("Ведите логин еще раз").toLocaleLowerCase();
password = prompt("Введите пароль еще раз").toLocaleLowerCase();
let oDataCheck = { login, password };
if (
  oData.login.length <= 0 &&
  oDataCheck.login.length <= 0 &&
  oData.password.length <= 0 &&
  oDataCheck.password.length <= 0
) {
  alert("Попробуйте еще раз.");
} else if (JSON.stringify(oData) === JSON.stringify(oDataCheck)) {
  alert("Добро пожаловать!");
} else {
  alert("Попробуйте еще раз.");
}

// ADVANCED level

// Task 1

let gameScore = prompt("Введите счет");
let gameScoreSplit = gameScore.split(":");

let scoreNumbers = {
  0: "ноль",
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
};

if (gameScoreSplit[0] > 9 && gameScoreSplit[1] > 9) {
  console.log("Данные введены некорректно ");
} else {
  console.log(
    "Счет: " +
      scoreNumbers[gameScoreSplit[0]] +
      " - " +
      scoreNumbers[gameScoreSplit[1]]
  );
}

// Task 2 Даны два одинаковых обьекта. Сравните их так чтобы они были равны

let student1 = {
  name: "Polina",
  age: 27,
};

let student2 = {
  name: "Polina",
  age: 27,
};

function compareObj(Ostudent1, Ostudent2) {
  let oResult = {};
  for (const key in Ostudent1) {
    if (Ostudent1[key] === Ostudent2[key]) {
      oResult[key] = Ostudent1[key];
    }
    if (!Object.keys(oResult).length) {
      return "Объекты не совпадают!";
    }
  }
  return oResult;
}

console.log(compareObj(student1, student2));

// Task 3 Наша задача узнать имя птицы и вывести его в консоль.

const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};

if ("bird" in animals) {
  console.log(animals.bird.name);
}
