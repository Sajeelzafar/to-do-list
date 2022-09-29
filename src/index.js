import './style.css';
import add from './modules/add.js';
import print from './modules/print.js';
import localStorageSave from './modules/localStorage.js';

const listContainer = document.querySelector('.listContainer');
const listinput = document.querySelector('.listinput');


let todoTasks;

window.addEventListener('DOMContentLoaded', () => {

  if (localStorage.getItem('todoList') === null) {
    todoTasks = [];
  } else {
    todoTasks = JSON.parse(localStorage.getItem('todoList'));
  }

  todoTasks.forEach((n) => {
    const output = document.createElement('div');
    output.classList.add('listitem');
    output.setAttribute('id', `${n.index}`);
    output.innerHTML = `<div><input type="checkbox"> ${n.description}</div> <span id="${n.index}" class="listitemIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>`;
    listContainer.appendChild(output);
    
  });
  
  listinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      todoTasks = add(listinput.value, todoTasks);
      print(todoTasks[todoTasks.length - 1]);
      localStorageSave(todoTasks[todoTasks.length - 1]);
      listinput.value = '';
    }
  });

  listContainer.addEventListener("click", (e) => {
    if (e.target.nodeName == "I"){
      let spantag = e.target.parentElement;
    };
  })
  
});

