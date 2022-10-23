/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
const saveTitle = document.getElementById('recipient-name');
const saveBtn = document.getElementById('save');
const editBtn = document.getElementById('edit');
const deletBtn = document.getElementById('delete');
const savePriority = document.getElementById('Priority');
const statusform = document.getElementById('status');
let recipientDate = document.getElementById('recipient-date');
let message = document.getElementById('message-text');
saveBtn.addEventListener('click', saveTask);
document.getElementById('addtaskk').addEventListener('click', initTaskForm)
let toDo = document.getElementById('to-do-tasks1')
let toDo2 = document.getElementById('to-do-tasks2')
let toDo3 = document.getElementById('to-do-tasks3')
var indexx;







var index;

function createTask() {
    // initialiser task form
    toDo.innerHTML = ''
    toDo2.innerHTML = ''
    toDo3.innerHTML = ''

    document.getElementById('todo-count').innerHTML = 0;
    document.getElementById('In-progress-count').innerHTML = 0;
    document.getElementById('done-count').innerHTML = 0;


    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].status == "To Do") {

            document.getElementById('todo-count').innerHTML++;
            toDo.innerHTML += `
             <button 
             data-bs-toggle="modal" data-bs-target="#modal"
             onclick="editTask(${i}),index(${i})" class="w-100 border-0 d-flex bg-white border-bottom ">
								<div class="col-1 mt-1">
									<i class="bi bi-question-circle h4 text-green "></i> 
								</div>
								<div class="text-start  mt-1">
									<div class="fw-bold">${tasks[i].title}</div>
									<div class="">
										<div class="">#${i+1} created in ${tasks[i].date}</div>
										<div class="" >${tasks[i].description} </div>
									</div>
									<div class="h5">
										<span class="btn btn-sm btn-primary p-0 px-1 ">${tasks[i].priority}</span>
										<span class="btn btn-sm btn-light text-black p-0 px-1 ">${tasks[i].type}</span>
                                         </div>
				</div>
                
			</button>
            
             `




        } else if (tasks[i].status == "In Progress") {
            document.getElementById('In-progress-count').innerHTML++;
            toDo2.innerHTML += `
            <button 
            data-bs-toggle="modal" data-bs-target="#modal"
             onclick=editTask(${i}) class="w-100 border-0 d-flex bg-white border-bottom ">
            <div class="col-1 mt-1">
                <i class="spinner-border text-success spinner-border-sm"></i> 
            </div>
            <div class="text-start  mt-1">
                <div class="fw-bold">${tasks[i].title}</div>
                <div class="">
                    <div class="">#${i+1} created in ${tasks[i].date}</div>
                    <div class="" >${tasks[i].description} </div>
                </div>
                <div class="h5">
                    <span class="btn btn-sm btn-primary p-0 px-1 ">${tasks[i].priority}</span>
                    <span class="btn btn-sm btn-light text-black p-0 px-1 ">${tasks[i].type}</span>
                </div>
            </div>
         </button> 
         `


        } else if (tasks[i].status == "Done") {
            document.getElementById('done-count').innerHTML++;
            toDo3.innerHTML += `
            <button 
            data-bs-toggle="modal" data-bs-target="#modal"
            onclick=editTask(${i}) class="w-100 border-0 d-flex bg-white border-bottom ">
            <div class="col-1 mt-1">
                <i class="bi bi-check-circle h4 text-green "></i> 
            </div>
                <div class="text-start  mt-1">
                <div class="fw-bold">${tasks[i].title}</div>
                <div class="">
                    <div class="">#${i+1} created in ${tasks[i].date}</div>
                    <div class="" >${tasks[i].description} </div>
                </div>
                     <div class="h5">
                         <span class="btn btn-sm btn-primary p-0 px-1 ">${tasks[i].priority}</span>
                         <span class="btn btn-sm btn-light text-black p-0 px-1 ">${tasks[i].type}</span>
                        
                    </div>
               </div>
            </button>
                             `
        }
    }

}

function saveTask() {

    if (saveTitle.value == '') {
        alert("remplis la form s'il vous plait")
    }
    // Recuperer task attributes a partir les champs input
    else {
        let objectsTask = {
            title: saveTitle.value,
            type: document.querySelector(".form-check-input:checked").value,
            priority: savePriority.value,
            status: statusform.value,
            date: recipientDate.value,
            description: message.value,
        }
        tasks.push(objectsTask)


        // Ajoutez object au Array


        // refresh tasks
        createTask()
        reloadTasks();
    }
    // Créez task object


}

function checkk(index) {
    if (tasks[index].type == 'Feature') {
        document.querySelector('#flexRadioDefault1').checked = true;
    } else {
        document.querySelector('#flexRadioDefault2').checked = true;
    }
}


function editTask(index) {
    saveBtn.style.display = "none";
    editBtn.style.display = "block";
    deletBtn.style.display = "block";

    indexx = index;

    saveTitle.value = tasks[index].title;
    // document.querySelector(".form-check-input:checked").value = tasks[index].type;
    checkk(index);
    savePriority.value = tasks[index].priority;
    statusform.value = tasks[index].status;
    recipientDate.value = tasks[index].date;
    message.value = tasks[index].description;
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}



function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    tasks[indexx].title = saveTitle.value;
    tasks[indexx].type = document.querySelector(".form-check-input:checked").value;
    tasks[indexx].priority = savePriority.value;
    tasks[indexx].status = statusform.value;
    tasks[indexx].date = recipientDate.value;
    tasks[indexx].description = message.value;
    // Créez task object
    createTask();


    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function
    tasks.splice(indexx, 1)
    createTask();
    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data
    saveBtn.style.display = "block";
    editBtn.style.display = "none";
    deletBtn.style.display = "none";
    reloadTasks()
        // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    let inputs = document.querySelectorAll('input')
    let tex = document.querySelector('textarea')
    inputs.forEach(input => {
        input.value = ''

    });
    tex.value = '';

    // Set Task coun
}