
let total = 0
let taskArray = []
const taskInput = document.querySelector('.task-input')
const taskList = document.querySelector('.task-list')
let totalAmount = document.querySelector('.total')
const sendBtn = document.querySelector('.send')

// when input is submit, add the content to .task-list
// receive the selected value from the select element, then add it to .task-price
document.querySelector('.addTask').addEventListener('click', function() {
  const selectedValue = Number(document.querySelector('.selection').value);

  if (taskInput.value) {
    function task(name, price) {
      this.name = name;
      this.price = price;
    }
    const newTask = new task(taskInput.value, selectedValue);

    taskArray.push(newTask);

    // clear input value
    taskInput.value = ''

    renderTasks();
    displayTotal()
  }})

  // when remove button is clicked, delete the content of that id from the array
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const index = e.target.dataset.item
      taskArray.splice(index, 1)
      renderTasks();
      displayTotal()
    }
  })
  
  // render tasks
  function renderTasks() {
    taskList.innerHTML = taskArray.map(item => {
      return `
          <div class="task-list-block">
          <div class="task-list-block--left-side">
            <p class="task-header">${item.name}</p>
            <button class="remove" data-item=${taskArray.indexOf(item)}>Remove</button>
          </div>
          <p class="task-price"><span class="gray-dollar">$</span>${item.price}</p>
          </div>
        `
    }).join('')
  }

  function displayTotal() {
    totalAmount.textContent = '$' + taskArray.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  }

  // when SEND button is clicked, reset the tasks and inputs 
  sendBtn.addEventListener('click', () => {
    taskArray = []
    renderTasks();
    displayTotal()
  })

