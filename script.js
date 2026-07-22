let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    loadTasks();
};

// Add Task
addBtn.addEventListener("click", function () {

    let task = input.value.trim();

    if (task === "") return;

    createTask(task, false);

    saveTasks();

    input.value = "";
});

// Create Task
function createTask(taskText, checked) {

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    let span = document.createElement("span");
    span.innerText = taskText;

    if (checked) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    }

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }

        saveTasks();

    });

    let deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.className = "delete";

    deleteBtn.onclick = function () {

        li.remove();

        saveTasks();

    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

}

// Save Local Storage
function saveTasks() {

    let tasks = [];

    let allTask = document.querySelectorAll("#taskList li");

    allTask.forEach(function(li){

        tasks.push({

            text: li.querySelector("span").innerText,

            checked: li.querySelector("input").checked

        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Load Local Storage
function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task){

        createTask(task.text, task.checked);

    });

}

// Clear All
clearBtn.addEventListener("click", function(){

    taskList.innerHTML="";

    localStorage.removeItem("tasks");

});
