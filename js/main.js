let playerScore = ""
let botScore = ""
let user = document.getElementById("user")
let pieces = document.getElementsByClassName("pieces")


document.getElementById("rock").addEventListener("click", throwRock)
document.getElementById("paper").addEventListener("click", throwPaper)
document.getElementById("scissor").addEventListener("click", throwScissor)
document.getElementById("lizard").addEventListener("click", throwLizard)
document.getElementById("spock").addEventListener("click", throwSpock)

function throwRock(){
 user.innerHTML = `<img src="img/rock.jpeg"/>`
 chooseBotsWeapon()
}
function throwPaper(){
user.innerHTML = `<img src="img/paper.jpg"/>`
chooseBotsWeapon()
}
function throwScissor(){
user.innerHTML = `<img src="img/scissor.jpg"/>`
chooseBotsWeapon()
}
function throwLizard(){
user.innerHTML = `<img src="img/lizard1.png"/>`
chooseBotsWeapon()
}
function throwSpock(){
user.innerHTML = `<img src="img/spock.jpg"/>`
chooseBotsWeapon()
}

function chooseBotsWeapon (){
 const botChoice = Math.floor(Math.random() * pieces.length )
 let imgArray = ["img/rock.jpeg","img/paper.jpg","img/scissor.jpg","img/lizard1.png","img/spock.jpg"]
 //console.log(botChoice)
 // console.log(pieces[botChoice].id)
 botSec.innerHTML = `<img src= ${imgArray[botChoice]}>`
}
