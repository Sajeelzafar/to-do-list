const localStorageSave = (newtask) => {
  let todoTasks;

  if (localStorage.getItem('todoList') === null) {
    todoTasks = [];
  } else {
    todoTasks = JSON.parse(localStorage.getItem('todoList'));
  }
  todoTasks.push(newtask);
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default localStorageSave;