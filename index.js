const main = document.querySelector("main")
const buttons = document.querySelectorAll(".gameBtn")
let player = document.querySelector('h1#player')
let i = 0
let j = 0
let column = buttons[i].dataset.column
let row = buttons[i].dataset.row
let cross = buttons[i].dataset.cross

let player1 = prompt("Digite o nome do jogador 1: ")
player.dataset.player = player1
let player2 = prompt("Digite o nome do jogador 2: ")
player.innerText = 'Turno do ' + player2

game()
function game(){


        buttons.forEach(function(pressed){
            pressed.addEventListener('click',playerpressed)
            pressed.addEventListener('click',winCondition)
            pressed.addEventListener('click',update)
        })
    

    
    
}
function update(){
    switch(winCondition()){
        case undefined:
            break
        case 'X Ganhou':
            buttons.forEach(function(){
                buttons[j].disabled = true
                j++
            })
            player.innerText = player.dataset.player + ' ganhou'
            break
        case 'O Ganhou':
            buttons.forEach(function(){
                buttons[j].disabled = true
                j++
            })
            player.innerText = player.dataset.player + ' ganhou'
            break
    }
}


function playerpressed(){
    if(player.dataset.player === player2 && this.innerText === ''){
        this.innerText = 'X'
        player.innerText = 'Turno do ' + player2
        player.dataset.player = player1
    }else if(player.dataset.player === player1 && this.innerText === ''){
        this.innerText = 'O'
        player.innerText = 'Turno do ' + player1
        player.dataset.player = player2
    }
}

function winCondition(){

  
    switch(column){
        case 'left':
        if(buttons[0].innerText === 'X' && buttons[3].innerText === 'X' && buttons[6].innerText === 'X'){
            
            return ('X Ganhou')

        }else if (buttons[0].innerText === 'O' && buttons[3].innerText === 'O' && buttons[6].innerText === 'O'){
            return 'O Ganhou'
        }
        

        case 'middle':
        if(buttons[1].innerText === 'X' && buttons[4].innerText === 'X' && buttons[7].innerText === 'X'){
            return 'X Ganhou'
            
        }else if (buttons[1].innerText === 'O' && buttons[4].innerText === 'O' && buttons[7].innerText === 'O'){
            return 'O Ganhou'
            
        }
        

        case 'right':
        if(buttons[2].innerText === 'X' && buttons[5].innerText === 'X' && buttons[8].innerText === 'X'){
            return 'X Ganhou'
        
        }else if (buttons[2].innerText === 'O' && buttons[5].innerText === 'O' && buttons[8].innerText === 'O'){
            return 'O Ganhou'
            
        }
        
    }
    switch(row){
        case 'top':
        if(buttons[0].innerText === 'X' && buttons[1].innerText === 'X' && buttons[2].innerText === 'X'){
            return 'X Ganhou'
            
        }else if (buttons[0].innerText === 'O' && buttons[1].innerText === 'O' && buttons[2].innerText === 'O'){
            return 'O Ganhou'
            
        }
        

        case 'mid':
        if(buttons[3].innerText === 'X' && buttons[4].innerText === 'X' && buttons[5].innerText === 'X'){
            return 'X Ganhou'
            
        }else if (buttons[3].innerText === 'O' && buttons[4].innerText === 'O' && buttons[5].innerText === 'O'){
            return 'O Ganhou'
            
        }
       

        case 'bot':
        if(buttons[6].innerText === 'X' && buttons[7].innerText === 'X' && buttons[8].innerText === 'X'){
            return 'X Ganhou'
            
        }else if (buttons[6].innerText === 'O' && buttons[7].innerText === 'O' && buttons[8].innerText === 'O'){
            return 'O Ganhou'
            
        }
        
    }
    switch(cross){
        case 'left':
        case 'middle':
        if(buttons[0].innerText === 'X' && buttons[4].innerText === 'X' && buttons[8].innerText === 'X'){
            return 'X Ganhou'
            
        }else if(buttons[0].innerText === 'O' && buttons[4].innerText === 'O' && buttons[8].innerText === 'O'){
            return 'O Ganhou'
            
        }
        case 'right':
        case 'middle':
        if(buttons[2].innerText === 'X' && buttons[4].innerText === 'X' && buttons[6].innerText === 'X'){
            return 'X Ganhou'
            
        }else if(buttons[2].innerText === 'O' && buttons[4].innerText === 'O' && buttons[6].innerText === 'O'){
            return 'O Ganhou'
            
        }
    }
    i++ 
}