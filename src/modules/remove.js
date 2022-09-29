const remove = (removeitem, array) => {
  for (let i = parseInt((removeitem.id - 1), 10); i < array.length; i += 1) {
    array[i].index -= 1;
  }

  removeitem.remove();
  array.splice(parseInt((removeitem.id - 1), 10), 1);
  localStorage.setItem('todoList', JSON.stringify(array));

  return array;
};

export default remove;