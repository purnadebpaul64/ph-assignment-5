let inttask = 6;
let completetask = 23;

document.getElementById("completed-task").innerText = completetask;

document.getElementById("task-assigned").innerText = inttask;
function dsctask() {
  --inttask;
  completetask++;
  document.getElementById("task-assigned").innerText = inttask;
  document.getElementById("completed-task").innerText = completetask;
}

let buttons = document.getElementsByClassName("card-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    alert("You clicked Button");
    dsctask();
    let y = document.getElementById(`card-btn-${i}`);
    y.setAttribute("disabled", true);
    y.classList.add("opacity-40");
  };
}

// document
//   .getElementsByClassName("card-button")
//   .addEventListener("click", function () {
//     alert("Button Clicked!");
//   });
