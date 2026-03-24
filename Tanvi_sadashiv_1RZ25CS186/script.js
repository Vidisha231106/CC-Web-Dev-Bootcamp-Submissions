function addTask(){

    var input = document.getElementById("taskInput");

    var task = input.value;

    if(task == ""){
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML = task + " <button onclick='deleteTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
function setName(){

    var name = document.getElementById("nameInput").value;

    if(name == ""){
        alert("Please enter your name");
        return;
    }

    document.getElementById("title").innerText = name + "'s To Do List";
}

function deleteTask(button){

    button.parentElement.remove();

}