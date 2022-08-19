//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function show_foods(obj) {
    for(let value of Object.values(obj)) {
        if (Array.isArray(value)) {
            if (typeof value[0] == 'object') {
                for (let food of Object.values(value[0])) {
                    console.log(food)
                }
            } else {
                for (let food of value) {
                    console.log(food)
                }
            }
        } else {
            console.log(value)
        }
    }
}

show_foods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => console.log(`${this.name} is ${this.age} years old`)
    

    increaseAge = () => {
        this.age++
        console.log(`${this.name} is now ${this.age} years old`)
    }
}

let minga = new Person('Minga', 12)
let mong = new Person('Mong', 23)

minga.printInfo()
mong.printInfo()

mong.increaseAge()
mong.increaseAge()
mong.increaseAge()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function wordSize(word) {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve('Big Word')
        } else {
            reject('Small Word')
        }
    })
}

wordSize('Congradulations')
.then((result) => console.log(result))
.catch((error) => console.log(error))