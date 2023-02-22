// Product A info
let productA = {
  emoji: "⭐",
  revenue: 200,
  commission: 50
}

// Product B info
let productB = {
  emoji: "🔥",
  revenue: 300,
  commission: 75
}

const starBtn = document.querySelector('.star')
const fireBtn = document.querySelector('.fire')
const salesInput = document.querySelector('.input-livesales')
const achiInput = document.querySelector('.input-liveachivements')
const revenueInput = document.querySelector('.input-revenue')
const commissionInput = document.querySelector('.input-commission')
const resetBtn = document.querySelector('.reset')

let salesRecord = []
let achivementsRecord = []
let totalRevenue = 0
let totalCommission = 0


// First achivements
// when click star, add to live sales board productA
// add a bell when a button is clicked for the first time
starBtn.addEventListener('click', (e) => {
  e.preventDefault()
  salesRecord.push(productA.emoji)
  addSales(productA)
  renderSalesRecord(salesInput)
  addAchivements()
})

fireBtn.addEventListener('click', (e) => {
  e.preventDefault()
  salesRecord.push(productB.emoji)
  addSales(productB)
  renderSalesRecord(salesInput)
  addAchivements()
})


function renderAchivements(input) {
  input.textContent = achivementsRecord.join('')
}

function renderSalesRecord(input) {
  input.textContent = salesRecord.join('')
}

function addAchivements() {
  if (salesRecord.length === 1) {
    achivementsRecord.push('🔔')
    renderAchivements(achiInput)
  } else if (salesRecord.length > 15) {
    achivementsRecord.push('🏆')
    renderAchivements(achiInput)
  } else if (totalRevenue > 2500) {
    achivementsRecord.push('💰')
    renderAchivements(achiInput)
  }
}

function addSales(product) {
  totalRevenue += product.revenue
  revenueInput.textContent = `$ ${totalRevenue}`
  totalCommission += product.commission
  commissionInput.textContent = `$ ${totalCommission}` 
}

// Add a reset button
resetBtn.addEventListener('click', function() {
  salesRecord = []
  achivementsRecord = []
  totalRevenue = 0
  totalCommission = 0
  salesInput.textContent = ''
  achiInput.textContent = ''
  revenueInput.textContent = ''
  commissionInput.textContent = ''
})