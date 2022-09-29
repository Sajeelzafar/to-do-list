const add = (element, array) => {
  const entry = {};
  entry.description = element;
  entry.completed = false;
  const n = array.length + 1;
  entry.index = n;
  array.push(entry);
  return array;
};

export default add;