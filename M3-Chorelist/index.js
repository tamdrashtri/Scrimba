let choresArray = []

const addBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');
const inputEl = document.getElementById('input');
const tasksEl = document.querySelector('.task-list-btns')

let choresFromLocalStorage = JSON.parse(localStorage.getItem('choresList')) 

if (choresFromLocalStorage) {
  choresArray = choresFromLocalStorage
  render(choresArray)
}

addBtn.addEventListener('click', () => {
    if (inputEl.value != '') {
        choresArray.push(inputEl.value)
        localStorage.setItem('choresList', JSON.stringify(choresArray))
        inputEl.value = '';
        render(choresArray)
    }
  
})

function render(choresArray) {
  choresContent = ''
  for (const chore of choresArray) {
    choresContent += `<button class="task-btn">${chore}</button>`
  }
  tasksEl.innerHTML = choresContent
}

deleteBtn.addEventListener('click', () => {
  localStorage.clear()
  choresArray = []
  choresContent = ''
  render(choresArray)
})
