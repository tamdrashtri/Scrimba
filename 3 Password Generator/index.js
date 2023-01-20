const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

passOne = document.querySelector("#password-one")
passTwo = document.querySelector("#password-two")


function genPass() {
  if (passOne.textContent.length === 0 && passTwo.textContent.length === 0) {
    for (let i = 0; i < 15; i++) {
      let randomPass1 = Math.floor(Math.random()* characters.length)
      passOne.textContent += characters[randomPass1] 
  
      let randomPass2 = Math.floor(Math.random()*characters.length)
      passTwo.textContent += characters[randomPass2]
    }
  } else {
    eraseFields()
  }
}

function eraseFields() {
  passOne.textContent = []
  passTwo.textContent = []
  genPass()
}