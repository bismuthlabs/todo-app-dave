const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list'); // ul

let todoItems = [];
todoInput.focus()


function addTodo(text) {
    todoItems.push(text);
    
    
}


function eventHandler() { 
    const todoText = todoInput.value;
    if (todoText === '') {
        alert('Please enter a text');
        
    }else{
        addTodo(todoText);
        appendTodo(todoText);
        todoInput.value = '';
        todoInput.focus()

    }
  
}

function appendTodo(text) {
    const li = document.createElement("li")
    li.innerText = text;
    todoList.appendChild(li);
}


addBtn.addEventListener('click', eventHandler);































// const todoInput = document.getElementById('todo-input');
// const addBtn = document.getElementById('add-btn');
// const todoList = document.getElementById('todo-list'); // ul

// let todoItems = [];
// todoInput.focus()


// function addTodo(text) {
//     todoItems.push(text);
    
// }

// function eventHandler() { 
//     const todoText = todoInput.value;
//     addTodo(todoText);
//     appendTodo(todoText);
//     todoInput.value = '';
//     todoInput.focus()
// }

// function appendTodo(text) {
//     const li = document.createElement("li")
//     li.innerText = text;
//     todoList.appendChild(li);
// }


// addBtn.addEventListener('click', eventHandler);
