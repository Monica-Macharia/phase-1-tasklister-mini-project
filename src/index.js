document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newContainer = document.getElementById("create-task-form");
  const container = ul();

const add = document.querySelector("#new-task-description")
   newContainer.addEventListener("submit", (e) => {
    e.preventDefault();
   
    container.new(add.value)
    e.target.reset;
    function insert(){
      const ulList = document.getElementById("tasks")
      ulList.innerHTML = container.tasks() 
    }
  })
});



