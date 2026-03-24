const tasks=[];
let task_n=0;
document.getElementById('addtaskbtn').addEventListener('click',()=>{
    const task_ = (document.getElementById('addtask').value);
    const card = document.createElement('li');
    
    const text_=document.createElement('span');
    text_.textContent=task_;
    text_.classList.add('task-text');

    const clrbtn=document.createElement('button');
    clrbtn.classList.add('clrbtn');
    clrbtn.textContent='Done';


    card.classList.add('card');

    clrbtn.id=task_n;
    
    card.appendChild(text_);
    card.appendChild(clrbtn);
    document.querySelector('#eachtask').appendChild(card);
    tasks.push(task_);
    document.getElementById(task_n).addEventListener('click',()=>{
    card.remove();
    });
    task_n++;
    document.getElementById('addtask').value = "";
});

