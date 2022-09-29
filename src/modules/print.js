const listContainer = document.querySelector('.listContainer');

const print = (n) => {
    const output = document.createElement('div');
    output.classList.add('listitem');
    output.setAttribute('id', `${n.index}`);
    output.innerHTML = `<div><input type="checkbox"> ${n.description}</div> <span class="listitemIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>`;
    listContainer.appendChild(output);
  };


export default print;