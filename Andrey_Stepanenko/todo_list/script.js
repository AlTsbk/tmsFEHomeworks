
let aArrOfTasks = [];
let input = document.getElementById('myInput');

window.addEventListener('load', () => {
    aArrOfTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
        aArrOfTasks.forEach(oTask => {
            renderElement(oTask);
        })
    

})


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
        aArrOfTasks.find((oTask) => {
           return oTask.id == ev.target.id
        }).isDone = ev.target.classList.contains('checked')
        console.log(aArrOfTasks);
        localStorage.setItem('tasks', JSON.stringify(aArrOfTasks));
    }
})

function renderElement(oTask) {
    let li = document.createElement('li');
    let t = document.createTextNode(oTask.text);
    li.appendChild(t);
    li.id = oTask.id
    let dateElement = document.createElement('input');
    dateElement.type = 'date';
    dateElement.valueAsDate = new Date(oTask.date);
    dateElement.addEventListener('change', () => {
        aArrOfTasks.find((oTask) => {
            return oTask.id == li.id
         }).date = dateElement.valueAsDate;
         localStorage.setItem('tasks', JSON.stringify(aArrOfTasks));
    })
    li.appendChild(dateElement);
    if(oTask.isDone){
        li.classList.add('checked')

    }
    //Делаем кнопку для удаления (крестик)
    createCloseButton(li);

    
    document.getElementById('myUL').appendChild(li);

}

//Создание нового элемента из данных в myInput
function newElement() {
    if(input.value === ''){
        alert('Поле не может быть пустым!');
    } else {
       
    
    let oNewTask = {
        id: new Date() * 2,
        date: new Date(),
        text: input.value,
        isDone: false
    }
    aArrOfTasks.push(oNewTask);
    localStorage.setItem('tasks', JSON.stringify(aArrOfTasks));
    renderElement(oNewTask);
     //Чистим поле input
     input.value = "";
    }
   
    
    //Делаем кнопку для удаления delete last
    // lastbt(li);
}
    //делаем кнопки delete all и delete last
let deleteLastBtn = document.querySelector('.deleteLastBtn');
let deleteAllbtn = document.querySelector('.deleteAllBtn');
// let showAllBtn = document.querySelector('.showAllBtn');
// let showCompletedBtn = document.querySelector('.showCompletedBtn');

let task = document.querySelector('.spisok')
let lastChild = task.lastElementChild;

function myFunction() {
   return task.innerHTML = ''; 
}
function lastbt() {
     lastChild.remove();
}


deleteAllbtn.addEventListener('click', myFunction);
deleteLastBtn.addEventListener('click', lastbt);
// showCompletedBtn.addEventListener("click", ()=>{
//     let task = document.querySelector('.spisok')
//     let list = document.querySelectorAll('li');
//     task.forEach(df => {
//       if(!list.classList.contains("checked")){
//         list.style.display = "none";
//       }
//     });
//   });
 
//   let li = document.querySelectorAll('li')
//   showAllBtn.addEventListener("click", ()=>{
//     task.forEach(li => {
//       li.style.display = "block";
//     });
//   });


function createCloseButton(myNodelist) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist.appendChild(span);
    span.onclick = function() {
            let div = this.parentElement;
            div.remove();
            aArrOfTasks.splice(myNodelist.id, 1);
            localStorage.setItem('tasks', JSON.stringify(aArrOfTasks));
        }
}
// Добавляем эластичный поиск по элементам списка
document.querySelector('#elastic').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.spisok li');
    if (val != ''){
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val) == -1){
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str,elem.innerText.search(val), val.length);
            }
        })
    }
    else {
        elasticItems.forEach(function(elem){
            elem.classList.remove('hide');
            elem.innerHTML = elem.innerText;
            });
    }
}

// прикручиваем к поиску цветовое выделение
function insertMark(string,pos,len){
    return string.slice(0, pos)+ '<mark>'+string.slice(pos, pos+len)+'</mark>'+string.slice(pos+len);
}


