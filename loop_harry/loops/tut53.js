

// let name = "Harry"
// let name1 = "Shubham"
// let name2 = "Rohan"
// let name3 = "Sagar"

// console.log(name + " is a good boy")
// console.log(name1 + " is a good boy")
// console.log(name2+ " is a good boy")
// console.log(name3 + " is a good boy")



// In Function 
function greet(name, greatText="Greetings from Javascript") {  // greatText="Greetings from Javascript" this is default value.
    let name1 = "Name1"    // This is local variable...
    console.log(greatText + " " + name)
    console.log(name + " is a good boy.")
}


function sum(a, b, c) {
    let d = a+b+c
    return d 
}


let name = "Harry"
let name1 = "Shubham"
let name2 = "Rohan"
let name3 = "Sagar"
let greatText = "Good Morning"
greet(name, greatText)
greet(name1, greatText)
greet(name2, greatText)
// let returnVal = greet(name3)
// console.log(returnVal)


let returnVal = sum(1, 2, 3)
console.log(returnVal)