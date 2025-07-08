let taskInput = document.querySelector("#task-input");
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
    });
