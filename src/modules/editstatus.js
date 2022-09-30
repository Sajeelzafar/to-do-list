let todoTasks;

const editstatus = (id, checkbox) => {
  if (localStorage.getItem('todoList') === null) {
    todoTasks = [];
  } else {
    todoTasks = JSON.parse(localStorage.getItem('todoList'));
  }

  if (checkbox) {
    todoTasks[id - 1].completed = true;
  } else {
    todoTasks[id - 1].completed = false;
  }
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default editstatus;