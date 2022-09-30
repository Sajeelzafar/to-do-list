let todoTasks;

const delselected = () => {
    if (localStorage.getItem('todoList') === null) {
        todoTasks = [];
      } else {
        todoTasks = JSON.parse(localStorage.getItem('todoList'));
      }

    console.log("updated", todoTasks);
}

export default delselected;