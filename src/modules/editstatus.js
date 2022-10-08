const editstatus = (id, checkbox, todoTasks) => {
  if (checkbox) {
    todoTasks[id - 1].completed = true;
  } else {
    todoTasks[id - 1].completed = false;
  }
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default editstatus;