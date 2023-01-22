/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let number = document.getElementById('input-el')
let lengthResult = document.getElementById('length-result')
let volumeResult = document.querySelector('.volume-converter')
let massResult = document.querySelector('.mass-converter')
let btn = document.querySelector('.convert-btn')
let numValue = 0

function lengthConverter() {
  let meter = 3.281*numValue
  let feet = 3.281/numValue
  let result = `${numValue} meters = ${meter.toFixed(3)} feet | ${numValue} feet = ${feet.toFixed(3)} meters`
  return (lengthResult.innerHTML = result)
}

function volumeConverter() {
  let gallon = 0.264*numValue
  let liter = 0.264/numValue
  let result = `${numValue} liters = ${gallon.toFixed(3)} gallons | ${numValue} gallons = ${liter.toFixed(3)} liters`
  return (volumeResult.innerHTML = result)
}

function massConverter() {
  let kilogram = 2.204*numValue
  let pound = 2.204/numValue
  let result = `${numValue} kilos = ${kilogram.toFixed(3)} pounds | ${numValue} pounds = ${pound.toFixed(3)} kilos`
  return (massResult.innerHTML = result)
}

btn.addEventListener('click', function() {
  numValue = number.value
  lengthConverter(numValue)
  volumeConverter(numValue)
  massConverter(numValue)
})
