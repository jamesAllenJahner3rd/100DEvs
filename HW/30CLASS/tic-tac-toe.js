

/*todo:
 tictactoe


    1a |1b |1c 
    -----------
    2a |2b |2c 
    -----------
    3a |3b |3d  

type ticTacToe.run() to start
type ticTacToe.end() to stop
type prompt ' type ttt.1a .etc to place letter

o is first, then next to place is automatically x

when  1,2,3 of a letter, or a,b,c of a number, or 1,2b,3 with a and c triggers a win
otherwise a cat tie.
then ttt.restart() to play again.*/

// Create a global variable to hold the game.
var ttt
// initiate the game
function ticTacToe(){
     ttt =  new TicTacToe();
    ttt.run();
};
// a class to hold all the properties and methods together
class TicTacToe{
    constructor(){
        this._running =false;
        this._currentTurn = {
            'XorO':0,
            '0':' X',
            '1':" O"
        };
        this.gameBoard ={
            '1a' : '1a',
            '1b' : '1b',
            '1c' : '1c',
            '2a' : '2a',
            '2b' : '2b',
            '2c' : '2c',
            '3a' : '3a',
            '3b' : '3b',
            '3c' : '3c'
        };
    };
    
    run() {
        // starts the game, check if it's running and runs the displayboard for the 1st time
        (this._running == true )&& (console.log("The game is running already, Did you mean restart?"));
        if(this._running == false){
            this._running = true;
            console.log("You started this game.");
            this.displayBoard();
            console.log("What's your move?");
            // instructions
            console.log("type: ttt.restart(), ttt.end(),\n ttt.displayBoard(), or ttt.place ='1a' .etc");
        }
    }
    restart(){
        //restart the game if it's running
        (this._running == false)&& (console.log("The game isn't running already, Did you mean run?"));
        if(this._running == true ){
            console.log("You restarted this game")
            ttt =  new TicTacToe()
        };
    }
    end() {
        // stops the game if it's running
        (this._running == false)&& (console.log("The game isn't running already, Did you mean run?"));
        if (this._running == true ){
            this._running = false;
            console.log("This game has ended.")
        };
    }
    displayBoard() {
        // displays the Tic tac toe board in its current state
        if(this._running == true){
            console.log(` ${this.gameBoard['1a']} |${this.gameBoard['1b']} |${this.gameBoard['1c']} `);
            console.log(` -----------`);
            console.log(` ${this.gameBoard['2a']} |${this.gameBoard['2b']} |${this.gameBoard['2c']} `);
            console.log(` -----------`);
            console.log(` ${this.gameBoard['3a']} |${this.gameBoard['3b']} |${this.gameBoard['3c']} `);
    }}
    set  place(square) {
        //this is what the players uses to place their O/X.  
        //Check if this running.
        if(this._running == true){
            //Check if the placement has been used.
            if(this.gameBoard[square.toString()]){
                if(this.gameBoard[square.toString()]=== square.toString() ){
                    this.gameBoard[square] =  this._currentTurn[this._currentTurn['XorO'].toString()]
                    console.clear()
                    // display winner if you win.
                    this.checkForWinner()
                    // change turns
                    this._currentTurn['XorO'] = 1^this._currentTurn[ 'XorO']
                    //then update the games board
                    this.displayBoard()
                }else{
                    console.log("That space is taken.")
                }
            }else{
                alert("You miss typed.")
            }
        }
    }
    checkForWinner(){

                    /**logic
                     * if all 1's, 2's, 3's, a's, b's, or c's are same
                     * or if  1a,2b,3c or 1c,2b,3a*/
       /* (this.gameBoard['1b'] === this.gameBoard['1a'] && this.gameBoard['1c'] === this.gameBoard['1a'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['2b'] === this.gameBoard['2a'] && this.gameBoard['2c'] === this.gameBoard['2a'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['3b'] === this.gameBoard['3a'] && this.gameBoard['3c'] === this.gameBoard['3a'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['1a'] === this.gameBoard['2a'] && this.gameBoard['3a'] === this.gameBoard['2a'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['1b'] === this.gameBoard['2b'] && this.gameBoard['3b'] === this.gameBoard['2b'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['1c'] === this.gameBoard['2c'] && this.gameBoard['3c'] === this.gameBoard['2c'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['1a'] === this.gameBoard['2b'] && this.gameBoard['3c'] === this.gameBoard['2b'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        (this.gameBoard['1c'] === this.gameBoard['2b'] && this.gameBoard['3a'] === this.gameBoard['2b'])&& (console.log(`${this._currentTurn[this._currentTurn['XorO'].toString()]} is the WINNER.`)&& this.end());
        */
       //a map of possible win states
        const winnersMap = {
            '0':['1a','1b','1c'],
            '1':['2a','2b','2c'],
            '2':['3a','3b','3c'],
            '3':['1a','2a','3a'],
            '4':['1b','2b','3b'],
            '5':['1c','2c','3c'],
            '6':['1a','2b','3c'],
            '7':['3a','2b','1c']
        }
        // loop through the when states .
        for(const truthy in winnersMap){
            let a = this.gameBoard[winnersMap[truthy][0]]
            let b = this.gameBoard[winnersMap[truthy][1]]
            let c = this.gameBoard[winnersMap[truthy][2]]
            let currentPlayer = this._currentTurn[this._currentTurn['XorO'].toString()]
            if (a === b && a  === c ){
                console.log(`${currentPlayer} is the WINNER.`)
                this.end()
            }
        }
    }
}
ticTacToe()

