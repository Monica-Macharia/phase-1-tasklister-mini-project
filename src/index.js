document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");


   form.addEventListener("submit", (e) => {
    e.preventDefault()

    const add = document.querySelector("#new-task-description").value

 
   
      const ulList = document.createElement("li")
      ulList.innerText = add 

      tasks.append(ulList);
      form.reset
   })
 })



