function submit(){
    let name = document.getElementById("name").value;
    let passcode = document.getElementById("passcode").value;

    if(name =="" || passcode ==""){
        alert("Please fill in all fields");
        return;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("passcode", passcode);

    alert("Login successful");

    window.location.href = "todo.html";
}

function userDetails(){
    let name = localStorage.getItem("name");

    document.getElementById("welcome").innerText = "Welcome, " + name + "!";
    
}
function addTask(){
    let task = document.getElementById("task").value;
    if(task ==""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
  
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = task;
    
    checkbox.addEventListener("change", function(){
        if(this.checked){
            span.style.textDecoration = "line-through";
        }else{
            span.style.textDecoration = "none";
        }});  
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function(){
            li.remove();
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
       
        document.getElementById("taskList").appendChild(li);
        document.getElementById("task").value = "";
}

