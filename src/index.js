import './style.css';

const mainContainer = document.querySelector('.mainContainer');

const todoTasks = [{
  description: 'wash the dishes',
  completed: true,
  index: 1,
},
{
  description: 'complete project',
  completed: true,
  index: 2,
},
{
  description: 'play game',
  completed: false,
  index: 3,
},
{
  description: 'wash car',
  completed: false,
  index: 4,
}];

document.addEventListener('DOMContentLoaded', () => {
  todoTasks.forEach((n) => {
    const output = document.createElement('div');
    output.classList.add('listitem');
    output.setAttribute('id', `${n.index}`);
    output.innerHTML = `<div><input type="checkbox"> ${n.description}</div> <span class="listitemIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>`;
    mainContainer.appendChild(output);
  });
});