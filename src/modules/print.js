const listContainer = document.querySelector('.listContainer');

const print = (n) => {
    const output = document.createElement('div');
    output.classList.add('listitem');
    output.setAttribute('id', `${n.index}`);
    output.innerHTML = `<div class="listitemleft"><input type="checkbox"> <span>${n.description}</span></div> <span class="listitemIcon"><i class="fa-solid fa-ellipsis-vertical"></i></span>`;
    listContainer.appendChild(output);
  };


export default print;