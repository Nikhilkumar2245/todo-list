// Select Elements
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function () {

    let task = input.value.trim();

    // Don't use alert
    if (task === "") {
        input.focus();
        return;
    }

    let li = document.createElement("li");
    li.style.fontSize = "28px";
    li.style.margin = "15px 0";

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.width = "25px";
    checkbox.style.height = "25px";

    // Task Text
    let span = document.createElement("span");
    span.innerText = " " + task;
    span.style.marginLeft = "10px";

    // Check / Uncheck
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "black";
        }
    });

    // Delete Button
    let deleteBtn = document.createElement("button");
deleteBtn.innerHTML = "🗑️";
deleteBtn.style.fontSize = "22px";

deleteBtn.onclick = function () {
    li.style.transform = "translateX(200px)";
    li.style.opacity = "0";

    setTimeout(() => {
        li.remove();
    }, 300);
};

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
    input.focus();
});

// Clear All
clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
});