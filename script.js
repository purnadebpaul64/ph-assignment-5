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
    if (inttask == 0) {
      alert("congo motha fhata");
    }
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

function colorChange() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let alpha = Math.random().toFixed(2); // Alpha 0.00 to 1.00

  let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  let body = document.getElementById("body");
  body.classList.remove("bg-primary");
  body.style.background = rgba;
}
