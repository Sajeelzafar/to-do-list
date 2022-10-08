const localStorageSave = (todoTasks) => {
  
  localStorage.setItem('todoList', JSON.stringify(todoTasks));
};

export default localStorageSave;