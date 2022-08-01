// let oCat = {
//     name: "Ciri",
//     age: 3,
//     color: "Black",
//     "a b": "a b",
//     voice: function(sWord){
//         console.log(this);
//         // console.log(this.name + " says " + sWord);
//     }
// }

// oCat.voice();
// console.log(oCat.name, oCat.age);

// oCat.voice("Hi");


// console.log(oCat["a b"]);
// for(let key in oCat){
//     console.log(key);
//     console.log(oCat[key]);
// }


// let Dog = function(sName, nAge, sColor){
//     this.name = sName,
//     this.age = nAge,
//     this.color = sColor,
//     this.voice = function(){
//         console.log(this.name + " Гавкает");
//     }
// }

// let oSharik = new Dog("Шарик", 8, "Белый");

// let Druzhok = new Dog("Дружок", 3, "Черный");

// oSharik.voice();

// oSharik.age = 10;

// oSharik.type = "Corgy";

// console.log(type in oSharik);

// delete oSharik.type;

// console.log(oSharik);

// console.log(type in oSharik);

// console.log(oSharik, Druzhok);

// for(let key in oSharik){
//     console.log(key + ":" + oSharik[key]);
// }

// oSharik.voice();

// delete oSharik.age;

// console.log(oSharik.age);


// console.log(Object.values(oSharik));

// let a = {a: 5};

// let b = a;

// let c = a;

// b.a = 10;

// console.log(a, b, c);

let a = {a: 5, b: 3, c: {h: 1, g: {}}};

let b = {a: 5, b: 3, c: {h: 1, g: {}}};


// function compareObjects(oA, oB){
//     if(Object.keys(oA).length !== Object.keys(oB).length){
//         return false;
//     }

//     for(let key in oA){
//         if(typeof oA[key] === "object"){
//             if(!compareObjects(oA[key], oB[key])){
//                 return false;
//             }
//         }
//        if(oA[key] !== oB[key]){
//         return false;
//        } 
//     }
//     return true;
// }

// console.log(compareObjects(a, b))

// console.log(JSON.stringify(a) === JSON.stringify(b));

// let sObject = "{a: 2}"

// console.log(JSON.parse("{'a': 2}"));


// console.log(a.a === b.a);

