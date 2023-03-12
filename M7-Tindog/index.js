import dogs from "./data.js";
import Dog from "./Dog.js";

const dogDiv = document.querySelector('.dog-section')
const nopeBtn = document.querySelector('.btn-no');
const likeBtn = document.querySelector('.btn-yes');
const randomDog = dogs[Math.floor(Math.random() * dogs.length)]
const dog = new Dog(randomDog);

// display a random dog from Dog class
function displayRandomDog() {
  dogDiv.innerHTML = dog.displayDog()
}

function displayRejected() {
  dogDiv.innerHTML += dog.rejected()
  setTimeout(switchDog, 1000)
}

function displayLiked() {
  dogDiv.innerHTML += dog.liked()
  setTimeout(switchDog, 1000)
}

function switchDog() {
  if (dog.hasBeenSwiped = true) {
    const newDog = dogs[Math.floor(Math.random() * dogs.length)]
    if (newDog !== randomDog) {
      dogDiv.innerHTML = new Dog(newDog).displayDog()
    } else {
      switchDog()
    }
  }
}

nopeBtn.addEventListener('click', displayRejected)
likeBtn.addEventListener('click', displayLiked)


displayRandomDog()