document.addEventListener("DOMContentLoaded", function () {
document.querySelector("#addTask").disabled = true;
  document.querySelector("#titleField").onkeyup = function () {
    if (!document.querySelector("#titleField").value.length > 0) {
      document.querySelector("#addTask").disabled = true;
    } else {
      document.querySelector("#addTask").disabled = false;
    }
  }
})
