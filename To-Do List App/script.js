function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task) {
        let ul = document.getElementById("taskList");
        let li = document.createElement("li");

        li.innerHTML = `
            <span onclick="toggleTask(this)">${task}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        ul.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTask(span) {
    span.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}
