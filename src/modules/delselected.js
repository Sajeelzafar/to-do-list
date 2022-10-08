const delselected = (todoTasks) => {
  todoTasks = todoTasks.filter((status) => status.completed === false);
  let indexnumber = 1;

  todoTasks.forEach((element) => {
    element.index = indexnumber;
    indexnumber += 1;
  });

  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default delselected;