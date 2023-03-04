import { menuArray } from "./data.js";

const menuItems = document.querySelector('.menu-items-container')
const orderList = document.querySelector('.order-list')
const modalEl = document.querySelector('.modal')
const orderTotal = document.querySelector('.order-total')


let orderArray = []

function render() {
  menuItems.innerHTML = menuArray.map(menuItem => {
    return `
      <div class="menu-items">
      <div class="flex-container">
        <div>
          <p class="emoji">${menuItem.emoji}</i>
        </div>
        <div class="items">
          <p class="item-name">${menuItem.name}</p>
          <p class="ingredients">${menuItem.ingredients}</p>
          <p class="price">$${menuItem.price}</p>
        </div>
      </div>
        <div class="add-item-container" data-item="${menuItem.id}">
          <i class="fa-solid fa-plus"></i>
        </div>
        <!-- menu items -->
      </div>
      `
  }).join('')

}

// when add button is clicked, add the name and price of the menuArray item to the order list
menuItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-plus')) {
    const index = e.target.parentElement.dataset.item

    const itemObj = {name: menuArray[index].name, price: menuArray[index].price}
    // add the name and price of this item index to orderArray
    orderArray.push(itemObj)

    orderTotal.style.display = 'inline'
    renderOrderList()
    renderTotal()
  }
})

function renderTotal() {
  const total = orderArray.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  document.querySelector('.total').textContent = ` $ ${total}`
}

function renderOrderList() {
  orderList.innerHTML = orderArray.map(item => {
    return `
      <div class="order-list-block">
      <div class="sub-items">
        <p class="item-name">${item.name}</p>
        <button class="remove" data-itemList=${orderArray.indexOf(item)}>Remove</button>
      </div>
      <p class="item-price">$ ${item.price}</p>
      </div>
    `
  }).join('')
}

// remove the order when click remove
orderList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const index = e.target.dataset.itemlist
    orderArray.splice(index, 1)
    renderOrderList()
    renderTotal()
  }
})

// once the pay button is clicked, pop up the credit card modal
document.querySelector('.complete-order').addEventListener('click', () => {
  modalEl.style.display = 'inline'
})

// after click pay, the order list will be cleared. modal display will be none
document.querySelector('.pay-button').addEventListener('click', (e) => {
  e.preventDefault()
  orderArray = []
  render()
  modalEl.style.display = 'none'
  orderTotal.style.display = 'none'
  // display complete-order text box
  document.querySelector('.order-complete').style.display = 'block'
})

render()
