// Create the Dog class from the data from data.js

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  displayDog() {
    return `
        <div class="main-section">
        <div>
          <img class="profile-pic" src="${this.avatar}" alt="" srcset="">
        </div> 
        <div class="profile-info">
          <h1>${this.name}</h1>
          <p>${this.bio}</p>
        </div>
      </div>
      `
  }
  // write rejected method that will display a badge with a nope image
  rejected() {
    this.hasBeenLiked = false;
    this.hasBeenSwiped = true;
    return `
    <div class="badge">
      <img src="./images/badge-nope.png" alt="" class="nope-badge">
    </div>
    `
  }

  liked() {
    this.hasBeenLiked = true;
    this.hasBeenSwiped = true;
    return `
    <div class="badge">
    <img src="./images/badge-like.png" alt="" class="like-badge">
  </div>
    `
  }
}

export default Dog;
