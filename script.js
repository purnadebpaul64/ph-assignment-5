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
    let z = document.getElementById(`card-heading-${i}`);
    commentpush(z.innerText);
  };
}

const time = new Date().toDateString();
document.getElementById("date-place").innerText = time;

function commentpush(text) {
  const comments = document.getElementById("comment");
  comments.innerHTML += `
  <div class="p-2 bg-primary rounded-lg text-sm mb-3">
            <p>You have Complete The Task ${text} at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} PM</p>
          </div>
          `;
}

document.getElementById("clear-history").addEventListener("click", function () {
  const comments = document.getElementById("comment");
  comments.innerHTML = ``;
});
