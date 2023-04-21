const taskInput = document.getElementById('add-task')
const addTaskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')

addTaskBtn.addEventListener('click', addTask)

function addTask(event) {
    event.preventDefault();
    if (taskInput.value) {
        const itemBox = document.createElement('div');
        itemBox.className = 'item-box'
        itemBox.innerHTML = `
        <li>${taskInput.value}</li>
        <button><img src="trash-can.png" alt="trash-can"></button>`
        taskList.appendChild(itemBox);
        taskInput.value = '';
        itemBox.querySelector('button').addEventListener('click', deleteTask);
    }
}

function deleteTask() {
    this.parentElement.remove()
}
