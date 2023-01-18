let plus_1 = document.querySelector(".button-plus")
let home_score = document.querySelector(".homescore")
let guest_score = document.querySelector(".guestscore")

let count_home = 0
let count_guest = 0

function plus1home() {
  count_home++;
  home_score.textContent = count_home
}

function plus2home() {
  count_home += 2;
  home_score.textContent = count_home
}

function plus3home() {
  count_home += 3;
  home_score.textContent = count_home
}

function plus1guest() {
  count_guest++;
  guest_score.textContent = count_guest
}

function plus2guest() {
  count_guest += 2;
  guest_score.textContent = count_guest
}

function plus3guest() {
  count_guest += 3;
  guest_score.textContent = count_guest
}