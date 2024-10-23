/**Complete the following program to add the definition of the Dog class.

Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

TODO define the Dog class here

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
Execution result */
/**
 * parameters name, species, size
 * return `${fang.name} is a ${fang.species} dog measuring ${fang.size}
 * Fang is a boarhound dog measuring 75in.`
 * `Look, a cat! Fang barks: "Grrr! Grrr!" `
 * Bod is a caley dog measuring 34in.`
 * `Look, a cat! Fang barks: "Woof! Woof!" `
 *  * Demon is a bull dog measuring 180in.`
 * `Look, a cat! Demon barks: "Grrr! Grrr!"`
 */
class Dog{
    constructor(name, species, size){
        this._name = name;
        this._species = species;
        this._size = size;
    }
    dogDoes(){
        console.log(`${this._name} is a ${this._species} dog measuring ${this._size}`);
console.log(`Look, a cat! ${this._name} barks: ${this.bark()}`);
    }
    bark(){
        let sound ={
            '1' : "Grrr! Grrr!",
            '-1': "Woof! Woof!",
            '0 ': "Grrr! Grrr!"
        }
        return sound[Math.sign(this._size -60).toString()];
      }
}

const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);