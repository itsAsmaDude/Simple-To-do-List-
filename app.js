let taskText = document.getElementById('taskText');
let addButton = document.getElementById('add');
let tasks = document.getElementById('tasks');

addButton.addEventListener('click', () => taskText.value !== '' ? addTask() : alert('Please Write a Text For your task.'));

function addTask() {
    let task = document.createElement('div');
    let taskContent = document.createElement('p');
    let buttons = document.createElement('div');
    let done = document.createElement('button');
    let doneIcon = document.createElement('i');
    let dele = document.createElement('button');
    let deleteIcon = document.createElement('i');

    task.append(taskContent, buttons);
    taskContent.textContent = taskText.value
    buttons.append(done, dele);
    done.appendChild(doneIcon);
    dele.appendChild(deleteIcon);

    task.classList = 'task';
    doneIcon.classList = 'bi bi-check2-all';
    deleteIcon.classList = 'bi bi-trash3';

    tasks.appendChild(task)

    done.onclick = function() {
        task.classList.add('done')
        done.style.pointerEvents = 'none';
    }

    dele.onclick = function() {
        task.remove();
    }
}