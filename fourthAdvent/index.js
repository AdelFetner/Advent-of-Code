// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const splittedArr = elementArr[0].innerText.split("\n").map((sectionID) => sectionID.trim())

// function to get the elves
const getElves = (sectionID) => {
    // get the first and second elf sections
    let firstElf = sectionID.slice(0, sectionID.length / 2)
    let secondElf = sectionID.slice(sectionID.length / 2, sectionID.length)

    // if last letter is a , remove it
    if (firstElf[firstElf.length - 1] === ",")
        firstElf = firstElf.slice(0, firstElf.length - 1)

    if (secondElf[0] === ",")
        secondElf = secondElf.slice(1, secondElf.length)

    // Get the first and second elf sections in an array
    const firstElfSections = firstElf.split("-").map((section) => Number(section))
    const secondElfSections = secondElf.split("-").map((section) => Number(section))

    // return elves to use later on for the two parts of the Advent
    return [firstElf, secondElf, firstElfSections, secondElfSections]
}

const overlappingSections = []

const sectionIDs = splittedArr.forEach((sectionID) => {
    const [firstElf, secondElf, firstElfSections, secondElfSections] = getElves(sectionID)

    // functions to make conditionals cleaner and more readable, compares indexes between sectionA and sectionB
    const hasSameTens = (sectionA, sectionB) => sectionA[0] >= sectionB[0]
    const hasSameUnits = (sectionA, sectionB) => sectionA[1] <= sectionB[1]

    // conditonals, if it has the same tens and units, push it to the overlappingSections array. Same with the second elf
    if (hasSameTens(firstElfSections, secondElfSections) && hasSameUnits(firstElfSections, secondElfSections) || hasSameTens(secondElfSections, firstElfSections) && hasSameUnits(secondElfSections, firstElfSections))
        overlappingSections.push(firstElf)
})


// Part 2
const anyOverlappingSections = []

const anyOverlap = splittedArr.forEach((sectionID) => {
    const [firstElf, secondElf, firstElfSections, secondElfSections] = getElves(sectionID)

    // functions to make conditionals cleaner and more readable, compares indexes between sectionA and sectionB
    const hasSameTens = (sectionA, sectionB) => sectionA[0] >= sectionB[0]
    const hasSameUnits = (sectionA, sectionB) => sectionA[1] <= sectionB[1]

    const hasOverlap = (sectionA, sectionB) => sectionA[0] <= sectionB[1] && sectionA[1] >= sectionB[0]

    // conditonals, if the first elf starts before the second elf and ends after the second elf, or vice versa, push it to the anyOverlappingSections array
    if (hasOverlap(firstElfSections, secondElfSections) || hasOverlap(secondElfSections, firstElfSections))
        anyOverlappingSections.push(firstElf)
})