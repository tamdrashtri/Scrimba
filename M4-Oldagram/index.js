const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const nameEl = document.getElementById('name')
const usernameEl = document.getElementById('username')
const locationEl = document.getElementById('location')
const avatarEl = document.getElementById('avatar')
const postEl = document.getElementById('post')
const commentEl = document.getElementById('comment')
const likesEl = document.getElementById('likes')
const addLikesEl = document.getElementById('addLikes')

let randomIndex = Math.floor(Math.random() * posts.length)

function renderRandom() {
  let postIndex = posts[randomIndex]
  nameEl.textContent = postIndex.name
  usernameEl.textContent = postIndex.username
  locationEl.textContent = postIndex.location
  avatarEl.src = postIndex.avatar
  postEl.src = postIndex.post
  commentEl.textContent = postIndex.comment
  likesEl.textContent = `${postIndex.likes} likes`
} 

renderRandom()

addLikesEl.addEventListener('click', function() {
  let postIndex = posts[randomIndex]

  addLikesEl.classList.toggle('liked')

  if (addLikesEl.classList.contains('liked')) {
    postIndex.likes += 1
    likesEl.textContent = `${postIndex.likes} likes`
  } else {
    postIndex.likes -= 1
    likesEl.textContent = `${postIndex.likes} likes`
  }

})