const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const btnInsert = document.getElementById("btnInsert");

btnInsert.addEventListener("click", function (e) {
  e.preventDefault();
});

btnInsert.onclick = function () {
  const taskText = taskInput.value;
  if (taskText !== "") {
    console.log(taskText);
    addTask(taskText);
    taskInput.value = "";
  }
};

function addTask(taskText) {
  const newLi = document.createElement("div");
  newLi.innerText = taskText;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑️";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    newLi.remove();
  };
  newLi.onclick = function () {
    newLi.classList.toggle("barred");
  };
  newLi.appendChild(deleteBtn);
  taskList.appendChild(newLi);
}

