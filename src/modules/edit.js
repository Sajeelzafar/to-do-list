const edit = (index, edit, todoTasks) => {
  todoTasks[index].description = edit;
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default edit;