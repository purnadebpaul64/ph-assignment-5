// ===== BUTTON CLICK TASK DSC AND COMPLETE TASK INC SECTION ===== //

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

// ===== MAIN FUNCION ===== //

let buttons = document.getElementsByClassName("card-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    alert("Board Updated Successfully");
    dsctask();
    let y = document.getElementById(`card-btn-${i}`);
    y.setAttribute("disabled", true);
    y.classList.add("opacity-40");
    let z = document.getElementById(`card-heading-${i}`);
    commentpush(z.innerText);
    if (inttask == 0) {
      alert("Congrates!!! You have completed all the current task");
    }
  };
}

// ===== TIME AND RIGHT BAR TASK COMPLETE MSG SECTION ===== //

const time = new Date().toDateString();
document.getElementById("date-place").innerText = time;

function commentpush(text) {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  const comments = document.getElementById("comment");
  comments.innerHTML += `
  <div class="p-2 bg-primary rounded-lg text-sm mb-3">
            <p>You have Complete The Task ${text} at ${hours}:${minutes}:${seconds} ${
    hours >= 12 ? "PM" : "AM"
  }</p>
          </div>
          `;
}

// ====== RANDOM COLORS SECTION ======= //

document.getElementById("clear-history").addEventListener("click", function () {
  const comments = document.getElementById("comment");
  comments.innerHTML = ``;
});

function colorChange() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let alpha = Math.random().toFixed(2);

  let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  let body = document.getElementById("body");
  body.classList.remove("bg-primary");
  body.style.background = rgba;
}

// ===== BLOG PAGE ===== //

document.getElementById("redirectblog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
