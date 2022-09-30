let todoTasks;

const delselected = () => {
    if (localStorage.getItem('todoList') === null) {
        todoTasks = [];
      } else {
        todoTasks = JSON.parse(localStorage.getItem('todoList'));
      }

      todoTasks = todoTasks.filter(status => status.completed === false);
    let indexnumber = 1;
      
    todoTasks.forEach(element => {
        element.index = indexnumber;
        indexnumber += 1;
      });

    localStorage.setItem('todoList', JSON.stringify(todoTasks));
}

export default delselected;