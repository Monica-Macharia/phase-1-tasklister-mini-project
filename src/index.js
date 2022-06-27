document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  const deletebtn = document.createElement("button")


   form.addEventListener("submit", (e) => {
    e.preventDefault()

    const add = document.querySelector("#new-task-description").value

 
   
      const ulList = document.createElement("li")
      ulList.innerText = add 

      tasks.append(ulList);

      
      deletebtn.innerText = "x" 
      console.log(deletebtn)
      ulList.append(deletebtn)

      deletebtn.addEventListener("click", function(e){
   console.log(e.target)
   e.target.parentElement.remove()
 })

      form.reset
   })
 })

 





