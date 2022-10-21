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

    for(let i=0; i<tasks.length ;i++){
        if( tasks[i].status=="To Do"){
             toDo.innerHTML+=`
             <button onclick=editTask(${i}) class="w-100 border-0 d-flex bg-white border-bottom ">
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
                                         <span class="btn btn-sm btn-light text-black p-0 px-1 ">updeat</span>
                                         <span class="btn btn-sm btn-primary p-0 px-1 ">supprimer</span>
                                         </div>
				</div>
			</button>
             `
        }else if(tasks[i].status=="In Progress"){
            toDo2.innerHTML+= `
            <button onclick=editTask(${i}) class="w-100 border-0 d-flex bg-white border-bottom ">
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
                    <span class="btn btn-sm btn-light text-black p-0 px-1 ">updeat</span>
                    <span class="btn btn-sm btn-primary p-0 px-1 ">supprimer</span>
                </div>
</div>
</button>
        `}else if(tasks[i].status=="Done"){
            toDo3.innerHTML+= `
            <button onclick=editTask(${i}) class="w-100 border-0 d-flex bg-white border-bottom ">
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
                         <span class="btn btn-sm btn-light text-black p-0 px-1 ">updeat</span>
                         <span class="btn btn-sm btn-primary p-0 px-1 ">supprimer</span>
                    </div>
               </div>
            </button>
                             `
        }
    
    
}
   }

function saveTask() {
    if(saveTitle.value==''){
      alert("remplis la form s'il vous plait")
    }
    // Recuperer task attributes a partir les champs input
    else{
        let objectsTask =
    {
        title         : saveTitle.value,
        type          : document.querySelector(".form-check-input:checked").value,
        priority      : savePriority.value,
        status        : statusform.value,
        date          : recipientDate.value,
        description   : message.value,
    }
    tasks.push(objectsTask)
    
    // Ajoutez object au Array


    // refresh tasks
    console.log(tasks);
    createTask()
    reloadTasks()
    }
    // Créez task object
   
    
    }

function editTask(index) {
    let taskIndex = index;
    
    return taskIndex
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
    let inputs = document.querySelectorAll('input')
    let tex = document.querySelector('textarea')
inputs.forEach(input => {
     input.value = ''
    
});
tex.value = '';
   
     // Set Task coun
}