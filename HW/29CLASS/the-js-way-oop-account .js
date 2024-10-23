/**Account list
Let's build upon a previous account object exercise. A bank account is still defined by:

A name property.
A balance property, initially set to 0.
A credit method adding the value passed as an argument to the account balance.
A describe method returning the account description.
Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.*/
/**
 * parameters name
 * return `${this._name} has a balance of $${this._balance}`
 * `Sean has a balance of $1000`
 * `Brad has a balance of $1000`
 * `George has a balance of $1000`
 * i need an account class that take a name and assigns the balance to 0
 * i need a method to credit the balance a certain amount
 * i need a method to call a description of the acount
 * 
 * I need a function that takes in the to be credited amount and everyones name.
 * this will go throught to list of names saving them into an array.
 * then trigger the credit method to add the money to their balance.
 * then display the description on the account
 */
class Account{
    constructor(name){
        this._name = name;
        this._balance = 0;
    }
    credit(amount){
        this._balance += amount;
    }
    description(){
        console.log(`${this._name} has a balance of $${this._balance}`);
    }
}
function createPeople(money,...people){
    let accountList= [];
    people.forEach((person)=>{
        accountList[person] = new Account(person)
        accountList[person].credit(money)
        accountList[person].description
    })
    console.log( accountList)
}
