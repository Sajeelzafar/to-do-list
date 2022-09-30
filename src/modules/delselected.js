let todoTasks;

const delselected = () => {
    if (localStorage.getItem('todoList') === null) {
        todoTasks = [];
      } else {
        todoTasks = JSON.parse(localStorage.getItem('todoList'));
      }

      todoTasks = todoTasks.filter(status => status.completed === false);
    //   console.log(todoTasks.completed);
    console.log("updated", todoTasks);
}

export default delselected;