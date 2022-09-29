import './style.css';
import add from './modules/add.js';
import print from './modules/print.js';
import localStorageSave from './modules/localStorage.js';
import edit from './modules/edit.js';

const listContainer = document.querySelector('.listContainer');
const listinput = document.querySelector('.listinput');
const error = document.querySelector('.error');

let todoTasks;
let flag = 1;

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
    output.innerHTML = `<div class="listitemleft"><input type="checkbox"> <p>${n.description}</p></div> <span class="listitemIcon"><i id="menu" class="fa-solid fa-ellipsis-vertical"></i></span>`;
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
    if (e.target.id == "menu" && flag == 1){
      flag++;
      let spantag = e.target.parentElement;
      let divselected = spantag.parentElement;
      let textToEdit = divselected.querySelector("p");
      spantag.innerHTML = `<i id="tick" class="fa-solid fa-check"></i><i id="delete" class="fa fa-trash" aria-hidden="true"></i>`;
      textToEdit.contentEditable = true;
      textToEdit.classList.add('editing');
      textToEdit.focus();
      
      document.getElementById("tick").addEventListener("click", (e) => {
        textToEdit.contentEditable = false;
        spantag.innerHTML=`<i id="menu" class="fa-solid fa-ellipsis-vertical"></i>`;
        error.innerHTML = ``;
        flag = 1;
        todoTasks[divselected.id-1].description = textToEdit.textContent;
        edit(divselected.id-1, textToEdit.textContent);
        console.log(todoTasks);
      })
    }

    else if (flag !== 1) {
      error.innerHTML = `<span>Please save the changes or remove the element</span>`;
    }
  })
  
});

