import './style.css';
import add from './modules/add.js';
import print from './modules/print.js';
import localStorageSave from './modules/localStorage.js';
import edit from './modules/edit.js';
import remove from './modules/remove.js';
import display from './modules/display.js';
import editstatus from './modules/editstatus';
import delselected from './modules/delselected';

const listContainer = document.querySelector('.listContainer');
const listinput = document.querySelector('.listinput');
const error = document.querySelector('.error');
const clearallButton = document.querySelector('.clearallButton');

let todoTasks;
let flag = 1;

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('todoList') === null) {
    todoTasks = [];
  } else {
    todoTasks = JSON.parse(localStorage.getItem('todoList'));
  }
  // Displays everything that is present inside the local storage
  display();
  //Looks for keyword enter in order to add what has been typed in to the list
  listinput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      todoTasks = add(listinput.value, todoTasks);
      print(todoTasks[todoTasks.length - 1]);
      localStorageSave(todoTasks[todoTasks.length - 1]);
      listinput.value = '';
    }
  });
  //Working on delete and tick button when the three vertical dots are pressed on the right side
  listContainer.addEventListener('click', (e) => {
    if (e.target.id === 'menu' && flag === 1) {
      flag += 1;
      const spantag = e.target.parentElement;
      const divselected = spantag.parentElement;
      const textToEdit = divselected.querySelector('p');
      spantag.innerHTML = '<i id="tick" class="fa-solid fa-check"></i><i id="delete" class="fa fa-trash" aria-hidden="true"></i>';
      textToEdit.contentEditable = true;
      textToEdit.classList.add('editing');
      textToEdit.focus();
      //saves the changes to the list
      document.getElementById('tick').addEventListener('click', () => {
        textToEdit.contentEditable = false;
        spantag.innerHTML = '<i id="menu" class="fa-solid fa-ellipsis-vertical"></i>';
        error.innerHTML = '';
        flag = 1;
        todoTasks[divselected.id - 1].description = textToEdit.textContent;
        edit(divselected.id - 1, textToEdit.textContent);
      });
      //deletes the list
      document.getElementById('delete').addEventListener('click', () => {
        todoTasks = remove(divselected, todoTasks);
        display();
        flag = 1;
      });
    } else if (flag !== 1) {
      error.innerHTML = '<span>Please save the changes or remove the element</span>';
    }
    
    const checkbox = document.querySelectorAll('.checkBox');
    let flag2 = 0;
    checkbox.forEach((n) => {
      
      n.addEventListener('change', (e) => {
        const tag = e.target.parentElement;
        const div = tag.parentElement;
        const edit = div.querySelector('p');
      if (e.target.type === "checkbox" && e.target.checked === false && flag2 === 0){
        edit.style.textDecoration = 'none';
        editstatus(div.id, e.target.checked);
        flag2++;
      }
  
      else if (e.target.type === "checkbox" && e.target.checked === true && flag2 === 0){
        edit.style.textDecoration = 'line-through';
        editstatus(div.id, e.target.checked);
        flag2++;
      }
    });
  });
    
  })
    
  });
  clearallButton.addEventListener('click', () => {
    delselected();
});
