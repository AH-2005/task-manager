document.addEventListener("DOMContentLoaded", function addTask() => {
//When the submit button is clicked:
document.querySelector("[value='Add Task']").onclick =
() =>

const taskId = Math.floor(Math.random() * 10000) 
const taskCard = {}
const activeCounter = 0 
const completeCounter = 0
  
taskCard.name = document.querySelector("#taskField").value
taskCard.id = taskId
taskCard.priorityLevel = document.querySelector("#priorityLevel").value 
taskCard.description = document.querySelector("#description").value
taskCard.date = document.querySelector("#dateField").value 
document.createElement("li").value = taskCard 
document.querySelector("#activeList").append("li")  
activeTasks.push(taskCard)
activeCounter++
document.querySelector("#activeCounter").innerHTML = activeCounter
})

