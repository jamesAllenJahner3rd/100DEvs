

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
var ttt
function ticTacToe(){
     ttt =  new TicTacToe();
    ttt.displayBoard()
}
class TicTacToe{
    constructor(){
        this._running =false
        this._currentTurn = {
            'XorO':0,
            '0':' X',
            '1':" O"
        }
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
        }
    }
    run() {
        
        (this._running == true )&& (console.log("The game is running already, Did you mean restart?"));
        if(this._running == false){
            this._running = true;
            console.log("You started this game");
        }
    }
    restart(){
        (this._running == false)&& (console.log("The game isn't running already, Did you mean run?"));
        if(this._running == true ){
            console.log("You restarted this game")
            ttt =  new TicTacToe()
        };
    }
    end() {
        
        (this._running == false)&& (console.log("The game isn't running already, Did you mean run?"));
        if (this._running == true ){
            this._running = false;
            console.log("You restarted this game")
        };
    }
    displayBoard() {
        console.log(` ${this.gameBoard['1a']} |${this.gameBoard['1b']} |${this.gameBoard['1c']} `);
        console.log(` -----------`);
        console.log(` ${this.gameBoard['2a']} |${this.gameBoard['2b']} |${this.gameBoard['2c']} `);
        console.log(` -----------`);
        console.log(` ${this.gameBoard['3a']} |${this.gameBoard['3b']} |${this.gameBoard['3c']} `);
    }
    set  place(square) {

        this.gameBoard[square] =  this._currentTurn[this._currentTurn['XorO'].toString()]
        this._currentTurn['XorO'] = 1^this._currentTurn[ 'XorO']
        console.clear()
        this.displayBoard()

    }
}
ticTacToe()

