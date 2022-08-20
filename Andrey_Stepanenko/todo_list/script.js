//Создаем у всех li кнопки close (крестик)
let myNodelist = document.getElementsByTagName('li');
for (let i = 0; i < myNodelist.length; i++) {
    createCloseButton(myNodelist[i]);
}



//Добавляем выделение при клике на li
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
})
//Создание нового элемента из данных в myInput
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('Поле не может быть пустым!');
    } else {
        document.getElementById('myUL').appendChild(li);
    }

    //Делаем кнопку для удаления (крестик)
    createCloseButton(li);

    //Чистим поле input
    document.getElementById('myInput').value = "";

    //Делаем кнопку для удаления delete last
    // lastbt(li);
}
    //делаем кнопки delete all и delete last
let deleteLastBtn = document.querySelector('.deleteLastBtn');
let deleteAllbtn = document.querySelector('.deleteAllBtn');

let task = document.querySelector('.spisok')
let lastChild = task.lastElementChild;

function myFunction() {
   return task.innerHTML = ''; 
}
function lastbt() {
    return lastChild.style.display = 'none';
}


deleteAllbtn.addEventListener('click', myFunction);
deleteLastBtn.addEventListener('click', lastbt);


function createCloseButton(myNodelist) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist.appendChild(span);
    span.onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
}


