// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const splittedArr = elementArr[0].innerText.split("\n")

// trim each rucksack in rucksacks, from the splittedArr
const rucksacks = splittedArr.map((rucksack) => rucksack.trim())

// this function takes a compartment from the rucksack and returns the value of the compartment's letters
const getTotalAlphabetValues = (compartment) => {
    // splits it into an array of letters
    const compartmentArr = compartment.split("")

    // maps each letter and reduce it to get total
    return compartmentArr.map((letter) => {
        // gives it a value, and returns the value of the letters (a letter representing the item).
        // The value is different if it's lowercase or uppercase. It's as follows: 
        // Lowercase item types a through z have value 1 through 26.
        // Uppercase item types A through Z have value 27 through 52.
        const isLowerCase = letter === letter.toLowerCase()
        return isLowerCase ?
            letter.charCodeAt(0) - 96 :
            letter.charCodeAt(0) - 38
        // charCode refers to the unicode value of the letter
    }).reduce((acc, curr) => acc + curr, 0)
}

// get the compartments of each rucksack, each rucksack has 2 compartments.
const rucksackCompartements = rucksacks.map((rucksack) => {
    // get first compartment, so first half of the rucksack's letters
    const firstCompartment = rucksack.slice(0, rucksack.length / 2).trim()

    // get second compartment, so second half of the rucksack's letters
    const secondCompartment = rucksack.slice(rucksack.length / 2, rucksack.length).trim()

    // return an object with the compartments
    return {
        firstCompartment,
        secondCompartment
    }
})

// finds the repeated items in the rucksacks
const findRepeatedItems = (rucksack) => {
    // get the compartments of the rucksack
    const firstCompartment = rucksack.firstCompartment
    const secondCompartment = rucksack.secondCompartment

    // create empty array to store repeated items later on
    const repeatedItems = []

    // split the first compartment into an array of letters
    const splittedFirstCompartment = firstCompartment.split("")

    // for each letter in the compartment, check if it's in the second compartment, if it is, push it to the repeatedItems array
    for (const item of splittedFirstCompartment) {
        if (secondCompartment.includes(item) && !repeatedItems.includes(item))
            repeatedItems.push(item)
    }

    // returns the repeated items joined into a string
    return repeatedItems.join("")
}

// rucksacks with only repeated items
const repeatedRucksacks = rucksackCompartements.map((rucksack) => findRepeatedItems(rucksack))

// the value of the repeated items in each rucksack
const repeatedValue = repeatedRucksacks.map((rucksack) => getTotalAlphabetValues(rucksack))

// the total value of all the rucksacks of repeated items combined
const repeatedTotalValue = repeatedValue.reduce((acc, curr) => acc + curr, 0)


// Part 2. Find the unique badge per group of 3 elves

// Every groupd of 3 elves has a unique badge. 

// empty array for later storing of all the unique badges
const uniqueBadges = []
for (let index = 0; index < rucksacks.length; index += 3) {
    // getting the elves in the group of 3
    const firstElf = rucksacks[index]
    const secondElf = rucksacks[index + 1]
    const thirdElf = rucksacks[index + 2]

    // getting the unique badge of this iteration's group
    const uniqueBadge = []

    // split first elf items into an array
    const splittedFirstElf = firstElf.split("")

    // for each item in the first elf, check if it's in the second and third elf, if it is, push it to the uniqueBadge array
    splittedFirstElf.forEach((letter) => {
        if (secondElf.includes(letter) && thirdElf.includes(letter) && !uniqueBadge.includes(letter)) {
            uniqueBadge.push(letter)
        }
    })

    // push the unique badge of this iteration's group to the uniqueBadges array
    uniqueBadges.push(uniqueBadge.join(""))
}
// get the value of each unique badge in the uniqueBadges array
const uniqueBadgeValue = uniqueBadges.map((badge) => getTotalAlphabetValues(badge))

// get the total value of all the badges in the uniqueBadges array combined
const uniqueBadgeTotalValue = uniqueBadgeValue.reduce((acc, curr) => acc + curr, 0)