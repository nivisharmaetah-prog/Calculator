let title = document.getElementById("title");

let description = document.getElementById("description");

let button = document.getElementById("btn");

let taskContainer = document.getElementById("task-container");



button.addEventListener("click",()=>{
    let heading = document.createElement("h1");
    let para = document.createElement("p");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let div = document.createElement("div")
    let taskDiv = document.createElement("div");

    let titleVal = title.value;
    let descriptionVal = description.value;

    heading.textContent = titleVal;
    para.textContent = descriptionVal;

    editButton.textContent = "Edit Task";
    deleteButton.textContent = "Delete Button"

    taskDiv.append(heading,para);
    div.append(editButton,deleteButton)

    taskContainer.append(taskDiv,div);
    
})