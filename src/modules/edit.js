const edit = (index, edit) => {
  let todoTasks;
  if (localStorage.getItem('todoList') === null) {
    todoTasks = [];
  } else {
    todoTasks = JSON.parse(localStorage.getItem('todoList'));
  }
  todoTasks[index].description = edit;
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default edit;