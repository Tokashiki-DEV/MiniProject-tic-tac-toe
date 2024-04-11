const main = document.querySelector("main")
const buttons = document.querySelectorAll(".gameBtn")
let player = document.querySelector('h1#player')
let plays = 0
let i = 0
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

function winCondition(){
   buttons.forEach(function(){
    let column = buttons[i].dataset.column
    let row = buttons[i].dataset.row

    switch(column){
        case 'left':
        if(buttons[i].innerText === 'X'){
            console.log(buttons[i].innerText + ' Ganhou')
        }else if (buttons[i].innerText === 'O'){
            console.log(buttons[i].innerText + ' Ganhou')
        }
        break
    }


    i++ 
   })
}