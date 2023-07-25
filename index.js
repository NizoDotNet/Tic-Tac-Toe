let board = [[null, null, null],
 [null, null, null],
 [null, null, null]];


let player1Turn = true;
let player2Turn = false;
const start = () => {
    console.log(board);
    for (let index = 0; index < board.length; index++) {
        for (let j = 0; j < board.length; j++) {
            board[index][j] = null;
        }
    }
    let buttons = document.getElementsByClassName('item');
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].innerText = '';
        //buttons[index].style.backgroundColor = 'black';
    }
};

start();
function clicked(button) {
    buttonCheck = document.querySelector('.' + button);
    if(buttonCheck.classList.contains('item-1')){
        sign(buttonCheck, 0, 0);

    }
    if(buttonCheck.classList.contains('item-2')){
        sign(buttonCheck, 0, 1);

    }
    if(buttonCheck.classList.contains('item-3')){
        sign(buttonCheck, 0, 2);

    }
    if(buttonCheck.classList.contains('item-4')){
        sign(buttonCheck, 1, 0);

    }
    if(buttonCheck.classList.contains('item-5')){
        sign(buttonCheck, 1, 1);

    }
    if(buttonCheck.classList.contains('item-6')){
        sign(buttonCheck, 1, 2);

    }
    if(buttonCheck.classList.contains('item-7')){
        sign(buttonCheck, 2, 0);
    }
    if(buttonCheck.classList.contains('item-8')){
        sign(buttonCheck, 2, 1);

    }
    if(buttonCheck.classList.contains('item-9')){
        sign(buttonCheck, 2, 2);

    }
}


function sign(button, row, collumn) {
    if(board[row][collumn] == null){
        if(player1Turn){
            button.innerText = 'X';
            board[row][collumn] = 'X';
        }
        else{
            button.innerText = 'O';
            board[row][collumn] = 'O';
        }
        check();
        player1Turn = !player1Turn;
        player2Turn = !player2Turn;
    }
}

function check(){
    if (board[0][0] != null && board[0][0] == board[0][1] && board[0][1] == board[0][2] || board[1][0] != null && board[1][0] == board[1][1] && board[1][1] == board[1][2] || board[2][0] != null && board[2][0] == board[2][1] && board[2][1] == board[2][2] || board[0][0] != null && board[0][0] == board[1][0] && board[0][0] == board[2][0] || board[0][1] != null && board[0][1] == board[1][1] && board[0][1] == board[2][1] || board[0][2] != null && board[0][2] == board[1][2] && board[0][2] == board[2][2] || board[0][0] != null && board[0][0] == board[1][1] && board[0][0] == board[2][2] || board[2][0] != null && board[2][0] == board[1][1] && board[2][0] == board[0][2]) {
        let winnerElem = document.querySelector('.winner');
        if(player1Turn){
            winnerElem.innerText = 'Player 1 won';
            console.log('player 1 won');
        }
        else{
            winnerElem.innerText = 'Player 2 won';
            console.log('player 2 won');
        }
    }
}