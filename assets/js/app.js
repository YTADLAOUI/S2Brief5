/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
  let data=[]
   const saveTitle =document.getElementById('recipient-name');
   const saveBtn = document.getElementById('save');
   const savePriority=document.getElementById('Priority');
   const statusform = document.getElementById('status');
   let recipientDate  = document.getElementById('recipient-date');
   let message = document.getElementById('message-text');
   saveBtn.addEventListener('click',saveTask);
   let toDo = document.getElementById('to-do-tasks1')
   let toDo2 = document.getElementById('to-do-tasks2')
   let toDo3 = document.getElementById('to-do-tasks3')
   
   function createTask() {
    // initialiser task form
    toDo.innerHTML=''
    toDo2.innerHTML=''
    toDo3.innerHTML=''

    for(let i=0; i<data.length ;i++){
        if( data[i].status=="To do"){
             toDo.innerHTML+=`
             <button class="w-100 border-0 d-flex bg-white border-bottom ">
								<div class="col-1 mt-1">
									<i class="bi bi-question-circle h4 text-green "></i> 
								</div>
								<div class="text-start  mt-1">
									<div class="fw-bold">${data[i].title}</div>
									<div class="">
										<div class="">#${i+1} created in ${data[i].date}</div>
										<div class="" >${data[i].description} </div>
									</div>
									<div class="h5">
										<span class="btn btn-sm btn-primary p-0 px-1 ">${data[i].priority}</span>
										<span class="btn btn-sm btn-light text-black p-0 px-1 ">${data[i].type}</span>
									</div>
				</div>
			</button>
             `
        }else if(data[i].status=="progress"){
            toDo2.innerHTML+= `
            <button class="w-100 border-0 d-flex bg-white border-bottom ">
                <div class="col-1 mt-1">
                    <i class="spinner-border text-success spinner-border-sm "></i> 
                </div>
                <div class="text-start col-11 mt-1">
                    <div class="fw-bold">${data[i].title}</div>
                    <div class="">
                        <div class="">#${i+1} created in ${data[i].date}</div>
                        <div class="">$</div>
                    </div>
                    <div class="h5">
                        <span class="btn btn-sm btn-primary p-0 px-1 ">${data[i].priority}</span>
                        <span class="btn btn-sm btn-light text-black p-0 px-1 ">${data[i].type}</span>
                    </div>
                </div>
            </button>
        `}else if(data[i].status=="Done"){
            toDo3.innerHTML+= `
            <button class="w-100 border-0 d-flex bg-white border-bottom ">
                <div class="col-1 mt-1">
                    <i class="spinner-border text-success spinner-border-sm "></i> 
                </div>
                <div class="text-start col-11 mt-1">
                    <div class="fw-bold">${data[i].title}</div>
                    <div class="">
                        <div class="">#${i+1} created in ${data[i].date}</div>
                        <div class="">$</div>
                    </div>
                    <div class="h5">
                        <span class="btn btn-sm btn-primary p-0 px-1 ">${data[i].priority}</span>
                        <span class="btn btn-sm btn-light text-black p-0 px-1 ">${data[i].type}</span>
                    </div>
                </div>
            </button>
    `
        }
    
    // Afficher le boutton save
    
    // Ouvrir modal form
    
}
   }

function saveTask() {
    // Recuperer task attributes a partir les champs input
    let objectsTask =
    {
        title         : saveTitle.value,
        type          : document.querySelector(".form-check-input:checked").value,
        priority      : savePriority.value,
        status        : statusform.value,
        date          : recipientDate.value,
        description   : message.value,
    }
    // Créez task object
    data.push(objectsTask)
    
    // Ajoutez object au Array


    // refresh tasks
    console.log(data);
    createTask()
    
    }

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
   
     // Set Task coun
}