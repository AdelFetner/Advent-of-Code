// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const splittedArr = elementArr[0].innerText.split("\n").map((sectionID) => sectionID.trim())

// const bidimensional array with the stacks
const stacks = [
    [],
    ["L", "N", "W", "T", "D"],
    ["C", "P", "H"],
    ["W", "P", "H", "N", "D", "G", "M", "J"],
    ["C", "W", "S", "N", "T", "Q", "L"],
    ["P", "H", "C", "N"],
    ["T", "H", "N", "D", "M", "W", "Q", "B"],
    ["M", "B", "R", "J", "G", "S", "L"],
    ["Z", "N", "W", "G", "V", "B", "R", "T"],
    ["W", "G", "D", "N", "P", "L"]
]

// This is the first part of the challenge, as it changes only the way the moves are made, I decided to leave it commented out.

// const moveTo = (quantity, stack, stackNew) => {
//     // save the last item of the stack
//     const lastItem = stack[stack.length - 1]
//     // push the last item to the new stack
//     stackNew.push(lastItem)
//     // pop the last item from the original stack
//     stack.pop()

//     // recursivity to move the items however many times quantity indicates
//     if (quantity > 1) {
//         // if quantity is still greater than 1, call the function again with the new quantity
//         quantity--
//         moveTo(quantity, stack, stackNew)
//     }
// }

// Second part
const moveTo = (quantity, stack, stackNew) => {
    const crates = stack.splice(stack.length - quantity, quantity)
    stackNew.push(...crates)
}

// function that takes the instruction and returns an array with the quantity, and the stacks to move from and to
const getMoves = (instruction) => instruction.match(/\d+/g).map((num) => Number(num))

// get usable move instructions from the array of instructions
const moveInstructions = splittedArr.map((instruction) => instruction = getMoves(instruction))

// for each instruction, move the items by how much quantity indicates the first value, from the stack indicated by the second value to the stack indicated by the last value. 
moveInstructions.forEach((instruction) => moveTo(instruction[0], stacks[instruction[1]], stacks[instruction[2]]))

// function that returns the top item of a stack
const whatIsOnTop = (stack) => stack[stack.length - 1]

// get the top items of each stack
const topItems = stacks.map((stack) => whatIsOnTop(stack)).join("")