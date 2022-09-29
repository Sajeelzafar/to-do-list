const listContainer = document.querySelector('.listContainer');
const remove = (removeitem, array) => {
    console.log(typeof parseInt(removeitem.id-1))
    array.splice(parseInt(removeitem.id-1), 1);
    for(let i=parseInt(removeitem.id-1); i < array.length; i++){
        array[i].index--;
    }
    removeitem.remove();

    return array;
}

export default remove;