import { menuArray } from "./data.js";

const menuItems = document.querySelector('.menu-items-container')
const addButton = document.querySelector('.fa-plus')

function render() {
  let menuHtml = ''
  menuArray.forEach(menuItem => {
    menuHtml += `
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
      <div class="add-item-container">
        <i class="fa-solid fa-plus"></i>
      </div>
      <!-- menu items -->
    </div>
    `
  })
  menuItems.innerHTML = menuHtml
}

render()

// Once add button is clicked, order total will show up

document.addEventListener('click', (e) => {
  console.log(e.target.dataset.add)
})