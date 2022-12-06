// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
let splittedArr = elementArr[0].innerText.split("\n").slice(0, -1)
// for to check if the code has any repeated letter
const code = splittedArr[0]

// Function to loop thru each letter 
const howManyChar = (input, scope) => {
    for (let index = 0; index <= input.length - scope; index++) {
        // create a slicedString of the input with the scope indicated
        const slicedString = input.slice(index, index + scope)
        // create a set with the slicedString to check if there are any repeated letters
        const set = new Set(slicedString)

        // if the size of the set is equal to the scope, return the index + scope
        if (set.size === scope)
            return index + scope
    }
}

console.log(howManyChar(code, 14))