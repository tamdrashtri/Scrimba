const pagerEl = document.querySelector('.pager-input')
const numpadInputEl = document.querySelector('.numpad-input')
const resetEl = document.querySelector('.reset-btn')
const submitEl = document.querySelector('.submit')
const numsEl = document.querySelector('.nums')
const notification = new Audio('assets/pager.wav')

let numArray = []

// when click input button, it will display on the input
numsEl.addEventListener('click', (e) => {
  if (numArray.length < 11) {
    e.preventDefault()
    numpadInputEl.value += e.target.textContent
    numArray.push(e.target.textContent)
  }
})

// when click send, it'll be sent to the pager input
  // add a time delay after click send
  // play notifications when sent


submitEl.addEventListener('click', () => {
  setTimeout(() => {
    pagerEl.value = numArray.join('')
    notification.play()
  }, 1000);
})


// when click reset, the input and pager will be empty
resetEl.addEventListener('click', (e) => {
  e.preventDefault()
  numpadInputEl.value = ''
  numArray = []
})