let ourSkills = document.querySelector("#ourskills");
let ranges = document.querySelectorAll("#ourskills .range span");
let numbers = document.querySelectorAll("#ourskills .rate span");

let stats = document.querySelectorAll("#stats p");
let statesSection = document.querySelector("#stats");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= ourSkills.offsetTop - 300) {
    ranges.forEach(range => {
      range.style.width = range.dataset.width;
    })
    numbers.forEach(number => {
      let count = setInterval(() => {
        if (number.textContent === number.dataset.goal) {
          clearInterval(count);
        } else {
          number.textContent++;
        }
      }, 2000 / number.dataset.goal)
    })
  }
  if (window.scrollY >= statesSection.offsetTop - 300) {
    if (!started) {
      stats.forEach(state => statesNums(state));
    }
    started = true;
  }
}

function statesNums(state) {
  let count = setInterval(() => {
    if (state.textContent === state.dataset.target) {
      clearInterval(count);
    } else {
      state.textContent++;
    }
  }, 2000 / state.dataset.target)
}

let eventDate = new Date("dec 31, 2024 23:59:59").getTime();

let count = setInterval(() => {
  let dateNow = new Date().getTime();
  let difference = eventDate - dateNow;

  let days = parseInt(difference / (1000 * 60 * 60 * 24));
  let hours = parseInt(difference % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
  let mins = parseInt(difference % (1000 * 60 * 60) / 1000 / 60);
  let seconds = parseInt(difference % (1000 * 60) / 1000);
  
  document.querySelector("#events .day").innerHTML = days;
  document.querySelector("#events .hour").innerHTML = hours;
  document.querySelector("#events .min").innerHTML = mins;
  document.querySelector("#events .second").innerHTML = seconds;
}, 1000);