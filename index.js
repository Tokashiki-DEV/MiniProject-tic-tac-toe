const main = document.querySelector("main")
const buttons = document.querySelectorAll(".gameBtn")
let player = document.querySelector('h1#player')
let plays = 0
game()
function game(){

    buttons.forEach(function(pressed){
        pressed.addEventListener('click',playerpressed)
    })
    
}

function playerpressed(){
    if(player.dataset.player === 'Player1'){
        this.innerText = 'X'
        player.dataset.player = 'Player2'
    }else{
        this.innerText = 'O'
        player.dataset.player = 'Player1'
    }
}
