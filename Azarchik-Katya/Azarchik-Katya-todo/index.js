let oBtnDelete = document.querySelector("#delete");
let oBtnAdd = document.querySelector("#add");
let oInput = document.querySelector("#input-text");
let oTasks = document.querySelector("#list");

// создаем функцию для добавления тасков. В ней добавляем новые div

function createTask() {
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  let oCheckbox = document.createElement("input");
  oCheckbox.type = "checkbox";
  newTask.appendChild(oCheckbox);

  // oCheckbox.addEventListener("click", () => {
  //   oCheckbox.classList.toggle("checked");
  // });

  let oBtn = document.createElement("button");
  oBtn.textContent = "X";
  oBtn.classList.add("oBtn");
  newTask.innerHTML += `<h3>${oInput.value}</h3>`;

  let parrentDiv = document.createElement("div");
  newTask.appendChild(parrentDiv);
  parrentDiv.appendChild(oBtn);
  parrentDiv.classList.add("task-date");
  oBtn.addEventListener("click", () => {
    newTask.remove();
  });
  let oDate = document.createElement("input");
  oDate.type = "date";
  oDate.classList.add("date");
  parrentDiv.appendChild(oDate);
  return newTask;
}

oBtnAdd.addEventListener("click", () => {
  oTasks.appendChild(createTask());
  oInput.value = "";
});
oBtnDelete.addEventListener("click", () => {
  if (confirm("Выдействительно хотите удалить все таски?")) {
    oTasks.innerHTML = "";
  }
});
