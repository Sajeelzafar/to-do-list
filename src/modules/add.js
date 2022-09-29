const add = (element, array) => {
    let entry = {};
    entry.description = element;
    entry.completed = false;
    let n = array.length+1;
    entry.index = n;
    array.push(entry);
    return array;
}

export default add;