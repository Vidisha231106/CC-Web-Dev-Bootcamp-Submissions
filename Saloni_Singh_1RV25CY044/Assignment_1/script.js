function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerText = taskText;

  // Delete button
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}