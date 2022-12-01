// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const splittedArr = elementArr[0].innerText.split("\n\n")

// get elves from the array, and transform their calories elements into numbers from strings
const elves = splittedArr.map((elf) => elf.split("\n").map((calories) => Number(calories)))

// add calories to make a total for each elf with a reduce, initial value 0 as it needs to add elements
const totalCalories = elves.map((elf) => elf.reduce((acc, current) => acc + current), 0)

// gets the highest number of calories from the totalCalories with a Math.max and the elements spreaded to pass them as arguments
const getHighestCalories = (calories) => Math.max(...calories)

// Second Part, Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?

// get the top three elves with a sort (to sort from highest to lowest) and a slice (to get only the first three, so the top three highest)
const getTopThreeElves = (calories) => calories.sort((a, b) => b - a).slice(0, 3)

// get the total calories of the top three elves with a reduce, initial value 0 as it needs to add elements
const totalCaloriesTopThree = (calories) => getTopThreeElves(calories).reduce((acc, current) => acc + current, 0)
