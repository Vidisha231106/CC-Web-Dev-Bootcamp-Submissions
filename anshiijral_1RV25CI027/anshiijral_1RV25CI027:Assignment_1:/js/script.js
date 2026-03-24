alert("You are opening a to-do list website!");
// Get todos from localStorage (or empty array if none)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Show tasks when page loads
displayTasks();

// Add Task
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Add task to array
    todos.push(task);

    // Clear input box
    input.value = "";

    // Save + display
    saveAndDisplay();
}

// Delete Task
function deleteTask(index) {
    todos.splice(index, 1);
    saveAndDisplay();
}

// Display Tasks
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    todos.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// Save to localStorage + refresh UI
function saveAndDisplay() {
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTasks();
}