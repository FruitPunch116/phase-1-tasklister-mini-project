document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Get the new task form from the DOM, and call it 'Task'.
  const task = document.querySelector("#create-task-form");
  // Handle form submissions by listening to task 'submit' event.
  task.addEventListener("submit", event => {
    //Prevent the form to reset
    event.preventDefault()
    const taskList = document.querySelector("#tasks");
    //Sumbit the task 
    const newTask = document.createElement("li");
    const taskInput = document.querySelector("#new-task-description");
    //Alternative: console.log(event.target["#new-task-description"].value);
    const taskText = taskInput.value;
    newTask.textContent= taskText;
    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    //Append the delete button to the new task
    newTask.appendChild(deleteButton);
    //Remove newTask whenever the user clicks on delete button.
    deleteButton.addEventListener("click", () => {
      newTask.remove();
    });
    //Append the new task to the DOM
    // Alternative: document.querySelector("#tasks").append(newTask);
    taskList.append(newTask);
    //Delete the task from the list
    event.target.reset();
    //Alternative: taskIput.value= "";
  });

});
