// 

class Contractor{
    constructor(name,lang) {
        this._name = name
        this.language = lang
    }
    codes() {
        console.log(`${this._name} codes in ${ this.language}`)
    }
    get name() {
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello() {
        console.log("hi i can talk well")
    }
}
class FrontEnd extends Contractor{
    constructor(name,lang) {
        super(name,lang)
      
       
    }
    makesPrettyStuff() {
        console.log("true")
    }
    
}
class BackEnd extends Contractor{
    constructor(name,lang) {
        super(name,lang)
      
        
    }
    makesLogicalStuff() {
        console.log("true")
    }
    
}
op = new FrontEnd("james","js")
op.codes()


