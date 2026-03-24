let addBtn = document.getElementById("plus");

addBtn.onclick = function () {
    let input = document.getElementById("tasktext");
    let taskText = input.value;

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    let text = document.createElement("span");
    text.textContent = taskText;

    let btn = document.createElement("div");
    btn.className = "circleBtn";

    btn.onclick = function () {
    text.classList.toggle("completed");
    btn.classList.toggle("filled");
    };

    taskDiv.appendChild(text);
    taskDiv.appendChild(btn);

    document.getElementById("tasks").appendChild(taskDiv);

    input.value = "";
};