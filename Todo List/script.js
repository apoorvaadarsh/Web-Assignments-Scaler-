let tasks = [];
inputField = document.getElementById('taskTextField');
addButton = document.getElementById('add');
deleteButton = document.getElementById('delete');
listItems = document.getElementById('listItems');


function storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function retrieveTasks() {
    let retrievedItems = localStorage.getItem('tasks');

    if (retrievedItems)
        tasks = JSON.parse(retrievedItems);
}

function renderTasks() {
    listItems.innerHTML = ""; //that means all the HTML tags inside it will be cleared , so no li elements inside it now
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        let checkBox=`<input type='checkbox' id=${i}><span>${tasks[i]}</span>`;
        li.innerHTML = checkBox;
        listItems.append(li);
    }
}

function clearAllTasks() {
    listItems.innerHTML = "";
    tasks = [];
    storeTasks();
}

function addTask() {
    let newTask = inputField.value;
    inputField.value = "";

    if (newTask.trim() == "") {
        alert("Empty tasks cant be added!");
    }

    else {
        tasks.push(newTask);
        renderTasks();
        storeTasks();
    }
}

function deleteTask() {
    //delete one task
}

function deleteSelectedTasks() {
    //delete selected tasks
}

//button Functions
addButton.onclick = function () {
    addTask();
}

deleteButton.onclick = function () {
    clearAllTasks();
}

retrieveTasks();
renderTasks();