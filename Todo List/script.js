let tasks = "";
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
    // for (let i = 0; i < tasks.length; i++) {
    //     listItems.append(tasks);
    // }
    listItems.innerHTML=tasks;
}

function clearAllTasks() {
    listItems.innerHTML = "";
    tasks = "";
    storeTasks();
}

function addTask() {
    let newTask = inputField.value;
    inputField.value = "";

    if (newTask.trim() == "") {
        alert("Empty tasks cant be added!");
    }

    else {
        // let li = document.createElement('li');
        let checkBox=`<li><input type='checkbox' id=${i}><span>${tasks[i]}</span></li>`;
        // li.innerHTML = checkBox;
        tasks+=checkBox;
        renderTasks();
        storeTasks();
    }
}

// function deleteTask() {
//     //delete one task
// }

function deleteSelectedTasks() {
    //delete selected tasks
    for(i=0;i<tasks.length;i++){
        let li=listItems
    }
       
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