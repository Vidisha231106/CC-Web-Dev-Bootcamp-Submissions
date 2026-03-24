document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter something!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete";

    btn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}