/**
 * make a stopwatch object sw
 * property: duration
 * methods of : start,reset, stop
 * duration starts a 0  will return a float. will only clear to 0 after reset
 * start() twice will error with : 'Stopwatch has already started.'
 * stop() twice will error with :' Stopwatch is not started.'
 * reset() clears duration to 0
 */


// class Stopwatch{
//     constructor(){
//         #duration = 0;
//         #stop =0;
//         #start = 0;
//         #started =false;
//         get duration(){
//             const sec = this.#duration/1000;
//             const min = parseInt(this.#duration/60)
//             return`${min}$min : ${sec}s`;
//         }
//         start(){
//             Object.defineProperty(this, "this.#start", {
//                 set:function(this.#started){
//                     if(this.#started = true)
//                         throw new Error ('Stopwatch has already started.');
//                     this.#started = true;
//                     const d = new Date();
//                     this.#start = d.getTime();
//                 }
//             });
//         }
//         reset(){
//             this.#duration = 0;
//             this.#stop =0;
//             this.#start = 0;
//         }
//         stop(){
//             Object.defineProperty(this, "this.#stop", {
//                 set:function(this.#started){
//                     if(this.this.#started = false)
//                         throw new Error ('Stopwatch is not started.');
//                     this.#started = false;
//                     const d = new Date();
//                     stop = d.getTime();
//                     this.#duration += this.#stop - this.#start
//                     this.#start = this.#stop
//                 }
//             });
//         }



  /*      class Stopwatcha{
            constructor(){
                this._duration = 0;
                this._ending =0;
                this._initial = 0;
                this._started =false;
                this.getDuration=()=>{
                    const sec = this._duration/1000;
                    const min = parseInt(this._duration/60)
                    return console.log(`${min}$min : ${sec}s`)
                };


                this.start = function(){
                    if(this._started == true){
                            throw new Error ('Stopwatch has already started.');
                    }
                    this._started = true;
                    const d = new Date();
                    this._initial = d.getTime();
                    };

                this.reset = function(){
                    this._duration = 0;
                    this._ending =0;
                    this._initial = 0;
                }

                this.stop = function(){
                    if(this._started == false){
                        throw new Error ('Stopwatch is not started.');
                    }
                    this._started = false;
                    const d = new Date();
                    this._ending = d.getTime();
                    this._duration += this._ending - this._initial
                    this._initial = this._ending
                };
            }

        get duration(){
            return this.getDuration()
            console.log(swa.duration)
        }

}
const swa = new Stopwatcha();

*/
function Stopwatch(){
    let startTime, stopTime, duration = 0;
    let startFlag = false;
    this.getDuration = function() {
        return duration;
    };

    this.reset = function(){
        this.startTime = this.stopTime = this.duration = 0;
        this.startFlag = false;
    }

    this.start = function(){
        if (this.startFlag){
            throw new Error ("The stopwatch is already running");
        }
        this.startTime = new Date().getTime();
        this.startFlag = true;
    }
    this.stop = function(){
        if(!startFlag){
            throw Error ("The stopwatch is not running yet.");
        }
        this.stopTime = new Date().getTime();
        this.startFlag = false
        this.duration = this.stopTime - this.startTime;
    }
    Object.defineProperty(this, "duration", {
        get: function(){
             return this.getDuration()
        }
    })
}
/**prep
 * para none.
 * return the length of time between start and stop is hit.
 * "Start and stop can't be hit consecutively."
 * reset clears everything
 *
 */
