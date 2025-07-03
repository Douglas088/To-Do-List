const input = document.getElementById('input');
const btnAdd = document.querySelector('.btn-add')
const listContainer = document.getElementById('list')

btnAdd.addEventListener('click', () => {
    addTask();
});

function addTask() {
    const newTask = input.value

    const li = document.createElement('li')
    li.innerHTML = newTask

    listContainer.appendChild(li) //appendchild adiciona um elemento filho dentro de um elemento pai
    input.value = "" //limpa o input
    

};