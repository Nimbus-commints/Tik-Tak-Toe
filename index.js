// Create the players - Function Factory
const Player  = (name,marker) =>{
    return {name,marker};
}
console.log(Player("Duxmen","X"))


// Adding the GamingBoard module to handle the board
// ,placing markers and resetting the board
const GamingBoard = (()=>{

    let board = ["","","","","","","","",""];

    const getBoard = () => board;

    const placingMarkers = (index,marker) => {
        if (board[index]===""){
            board[index] = marker;
            return true;
        } 
        return false;
        
    };

    const reset = () => {
        board = ["","","","","","","","",""];

    };

    return {getBoard,placingMarkers,reset};


})();


// Adding the Tik Tak Toe Game Controller to handle the events in the game
const TikController = (()=>{
// creating the player
    const player1 = Player("Nimbus","X");
    const player2 = Player("Duxmen","O");
    let gameOver = false;
    let currentPlayer = player1;

    const winningconditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ];


    const changuePlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    const checkingWinner = () => {
        return winningconditions.some(combo => {
            return combo.every(index=>GamingBoard.getBoard()[index]=== currentPlayer.marker);
        })
    }


    const checkingTie = () => {
        return GamingBoard.getBoard().every(cell=> cell!=="");
    }

    const playingRound = (index) => {
        if (gameOver) {
            console.log("The game is over. Please reset the game!");
            return;
        }

        if (!GamingBoard.placingMarkers(index,currentPlayer.marker)) {
            console.log("The cell is already taken. Please choose another one.");
            return;
        }

        console.log(GamingBoard.getBoard());

        if (checkingWinner()){
            console.log(`${currentPlayer.name} wins!.`)
            gameOver = true;
            return;
        }
        
        if (checkingTie()){
            console.log("It is a tie!.")
            gameOver = true;
            return;
        }

        changuePlayer();
        console.log(`It is the turn of ${currentPlayer.name}!`)
    
        
    }

    const gameReset = () => {
        GamingBoard.reset();
        gameOver= false;
        currentPlayer = player1;
        console.log('Game got reseted, Player 1 starts!.')
    }

    return {playingRound,gameReset}
})()

