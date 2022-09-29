let todoTasks;

const remove = (removeitem, array) => {
    if (localStorage.getItem('todoList') === null) {
        todoTasks = [];
      } else {
        todoTasks = JSON.parse(localStorage.getItem('todoList'));
      }

    for(let i=parseInt(removeitem.id-1); i < array.length; i++){
        array[i].index--;
    }
    
    removeitem.remove();
    array.splice(parseInt(removeitem.id-1), 1);
    localStorage.setItem('todoList', JSON.stringify(array));
    
    return array;
    
}

export default remove;