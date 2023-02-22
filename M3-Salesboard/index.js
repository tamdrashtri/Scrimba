// Product A info
let productA = {
  emoji: "⭐",
  revenue: 200,
  commision: 50
}

// Product B info
let productB = {
  emoji: "🔥",
  revenue: 300,
  commision: 75
}

const starBtn = document.querySelector('.star')
const fireBtn = document.querySelector('.fire')
const salesInput = document.querySelector('.input-livesales')
const achiInput = document.querySelector('.input-liveachivements')
const revenueInput = document.querySelector('.input-revenue')
const commissionInput = document.querySelector('.input-commission')

let salesRecord = []
let achivementsRecord = []

// First achivements
// when click star, add to live sales board productA
// add a bell when a button is clicked for the first time
starBtn.addEventListener('click', (e) => {
  e.preventDefault()
  achivementsRecord.push('🔔')
  achiInput.textContent += achivementsRecord
  console.log(achivementsRecord)
})

// Second point
// when total revenue > 2500, add a dollar bag to achivements

// Third point
// when lengthh of sales is 15, add a trophy to achivements

// Add a reset button

