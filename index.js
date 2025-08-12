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

    return {getBoard,placingMarkers,reset}


})();