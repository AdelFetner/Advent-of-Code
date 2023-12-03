// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const calibrationLines = elementArr[0].innerText.split("\n")

// making a dictionary for the numbers written as letters
const numberDictionary = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

// going thru each line in the calibrationLine array and getting the first and last number
const getNumbers = () => {
    let total = 0
    calibrationLines.forEach(line => {
        let nums = []
        for (let i = 0; i < line.length; i++) {
            // check if the current character is a number
            if (!isNaN(line.charAt(i))) {
                // if so, add it to the nums list
                nums.push(parseInt(line.charAt(i)))
            } else {
                // if not, traverse the dictionary and check if the substring from the current character matches any dictionary value
                numberDictionary.forEach(num => {
                    // If so, add its current index +1 to the nums list
                    if (line.slice(i).startsWith(num)) {
                        nums.push(numberDictionary.indexOf(num) + 1)
                    }
                })
            }
        }
        // only use the first and last values in the nums array to calculate the total
        total += nums[0] * 10 + nums[nums.length - 1]
    })
    return total
}