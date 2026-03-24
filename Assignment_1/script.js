/* To-Do App Functionality */

// DOM Elements
const input = document.querySelector('input[type="text"]');
const addBtn = document.getElementById('addBtn');
const taskList = document.querySelector('ul');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Add new task
function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;
    
    // Delete functionality
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
    });
    
    taskList.appendChild(li);
    input.value = '';
    input.focus();
}
