const main = document.querySelector("main")
const buttons = document.querySelectorAll(".gameBtn")
let player = document.querySelector('h1#player')
let plays = 0
let i = 0
let column = buttons[i].dataset.column
let row = buttons[i].dataset.row
let cross = buttons[i].dataset.cross

let player1 = prompt("Digite o nome do jogador 1: ")
let Player2 = prompt("Digite o nome do jogador 2: ")

game()
function game(){

    buttons.forEach(function(pressed){
        pressed.addEventListener('click',playerpressed)
        pressed.addEventListener('click',winCondition)
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

    switch(column){
        case 'left':
        if(buttons[0].innerText === 'X' && buttons[3].innerText === 'X' && buttons[6].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[0].innerText === 'O' && buttons[3].innerText === 'O' && buttons[6].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        

        case 'middle':
        if(buttons[1].innerText === 'X' && buttons[4].innerText === 'X' && buttons[7].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[1].innerText === 'O' && buttons[4].innerText === 'O' && buttons[7].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        

        case 'right':
        if(buttons[2].innerText === 'X' && buttons[5].innerText === 'X' && buttons[8].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[2].innerText === 'O' && buttons[5].innerText === 'O' && buttons[8].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        
    }
    switch(row){
        case 'top':
        if(buttons[0].innerText === 'X' && buttons[1].innerText === 'X' && buttons[2].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[0].innerText === 'O' && buttons[1].innerText === 'O' && buttons[2].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        

        case 'mid':
        if(buttons[3].innerText === 'X' && buttons[4].innerText === 'X' && buttons[5].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[3].innerText === 'O' && buttons[4].innerText === 'O' && buttons[5].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
       

        case 'bot':
        if(buttons[6].innerText === 'X' && buttons[7].innerText === 'X' && buttons[8].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if (buttons[6].innerText === 'O' && buttons[7].innerText === 'O' && buttons[8].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        
    }
    switch(cross){
        case 'left':
        case 'middle':
        if(buttons[0].innerText === 'X' && buttons[4].innerText === 'X' && buttons[8].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if(buttons[0].innerText === 'O' && buttons[4].innerText === 'O' && buttons[8].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
        case 'right':
        case 'middle':
        if(buttons[2].innerText === 'X' && buttons[4].innerText === 'X' && buttons[6].innerText === 'X'){
            console.log('X Ganhou')
            break
        }else if(buttons[2].innerText === 'O' && buttons[4].innerText === 'O' && buttons[6].innerText === 'O'){
            console.log('O Ganhou')
            break
        }
    }
    i++ 

   })
}