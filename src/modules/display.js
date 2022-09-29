let todoTasks;
const listContainer = document.querySelector('.listContainer');

const display = () => {
  listContainer.innerHTML = '';
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
};

export default display;