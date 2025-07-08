const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector(".task-list");

function createTask(text) {
  const taskItem = document.createElement("div") let taskInput = document.querySelector("#task-input");
    let addTask = document.querySelector("#add-task");
    let taskList = document.querySelector(".task-list");

    addTask.addEventListener('click', () => {
        let taskItem = document.createElement("p");
        taskItem.setAttribute("class", "task-item");

        let removeTask = document.createElement("button");
        removeTask.setAttribute("class", "remove-task");

        let checkedTask = document.createElement("input");
        checkedTask.setAttribute("type", "checkbox"); 

        if (taskInput.value.trim() !== "") {
            let inputValue = taskInput.value;

          
            let taskText = document.createElement("span");
            taskText.textContent = inputValue;

            removeTask.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            taskItem.appendChild(checkedTask);
            taskItem.appendChild(taskText);
            taskItem.appendChild(removeTask);
            taskList.prepend(taskItem);
        }

        if (taskInput.value !== "") {
            taskInput.value = "";
        }  

        removeTask.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    });;
  taskItem.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-task");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  removeBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(span);
  taskItem.appendChild(removeBtn);

  taskList.prepend(taskItem);
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    createTask(text);
    taskInput.value = "";
    taskInput.focus();
  }
});

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
