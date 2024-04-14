
const taskContainer = document.querySelector('.task__container');
console.log(taskContainer);
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageurl: document.getElementById("imageURL").value,
        tasktitle: document.getElementById("taskTitle").value,
        tasktype: document.getElementById("taskType").value,
        taskdescription: document.getElementById("taskDescription").value

    };
    console.log(taskData);


    const newCard = `
    <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
           <div class="card">
             <div class="card-header d-flex justify-content-end gap-2">
               <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
               <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
             </div>
             <div class="card-body">
               <img src="${taskData.imageurl}" class="card-img-top mh-100" alt="...">
               <h5 class="card-title text-primary">${taskData.tasktitle}</h5>
               <p class="card-text">${taskData.taskdescription}</p>
               <a href="#" class="btn btn-primary">Go somewhere</a>
             </div>
           </div>
         </div>
    `;

    taskContainer.insertAdjacentHTML("beforeend",newCard);
};