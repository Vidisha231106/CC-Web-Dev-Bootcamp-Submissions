const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const text = document.getElementById("task-input").value;
    const date = document.getElementById("due-date").value;
    const time = document.getElementById("due-time").value;
    const priority = document.getElementById("priority").value;
    const category = document.getElementById("category").value;

    if (text === "") return alert("Enter a task!");

    // Task container
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task", priority.toLowerCase());

    // Left side (task info)
    const left = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.textContent = `${text} | ${category} | ${date} ${time}`;

    checkbox.addEventListener("change", () => {
        taskText.classList.toggle("completed");
    });

    left.appendChild(checkbox);
    left.appendChild(taskText);

    // Right side (delete)
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskDiv.remove();
    });

    taskDiv.appendChild(left);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    // Clear input
    document.getElementById("task-input").value = "";
});