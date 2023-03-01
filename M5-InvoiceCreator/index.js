import accounts from './data.js';


// when click on any account, get the id of the specific account
document.addEventListener('click', (e) => {
  if (e.target.dataset.id) {
    displaySpendings(e.target.dataset.id)
  }
})

// const getPercents = (balance, spent) => (spent / balance) * 100

// display spending on the Spending section
// if account section is clicked, then show the spending of that account
function displaySpendings(accountId) {
  const targetAccount = accounts[accountId-1]
  const isClickedEl = document.querySelector(`.clicked-${targetAccount.id}`)
  const spendingBlocksEl = document.querySelector('.spending-blocks')
  
  if (isClickedEl) {
    isClickedEl.classList.toggle('is-clicked')
  } 

  spendingBlocksEl.innerHTML = targetAccount.spendings.map(item => {
    // const percent = getPercents(targetAccount.balance, item.spent) style="width: ${percent}%
    return `
      <div class="spending-block">
        <p class="spending-text">${item.category}</p>
        <p class="spending-amount"">$ ${item.spent}</p>
      </div>
    `
  }).join('')
}

// display amount on the Account section
// for each of the id in this array, display the title and the balance
// Renders all the accounts from the imported accounts object.
// It iterates over the array and creates elements which contain the
// title of the account and its balance and also provides data attributes
// such as data-id to refer to from the element.
function renderAccounts() {
  const accountBlocksEl = document.querySelector('.account-blocks');

  accountBlocksEl.innerHTML = accounts.map(account => {
    return `
      <div class="account-block clicked-${account.id}" data-id="${account.id}">
        <p class="account-text">${account.title}</p>
        <p class="account-amount">$ ${account.balance}</p>
      </div>
    `;
  }).join('');
}


// Render entries in the DOM such as accounts, their balances and and respective spendings
function render() {
  renderAccounts();
}

render()