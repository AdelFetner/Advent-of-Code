// Grab element from dom
const element = document.getElementsByTagName("pre")

// Make the HTMLCollection into an array
const elementArr = [...element]

// loop thru array and split the text of the first index
const splittedArr = elementArr[0].innerText.split("\n")
// console.log(splittedArr)

// get first letter and last letter of each element as an object for opponent and player choices
const allChoices = splittedArr.map((choice) => {
    return {
        opponent: choice[0],
        player: choice[choice.length - 1]
    }
})

// the score for a single round is the score for the shape you selected
// (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round
// (0 if you lost, 3 if the round was a draw, and 6 if you won).

// reduce will acc the score with the conditions and scoring and throw the total score after iterating thru allChoices and getting the final score

const totalScore = allChoices.reduce((acc, curr) => {
    let roundScore = 0;

    // score check for the choice of player
    if (curr.player === "X") {
        roundScore += 1; // rock
    } else if (curr.player === "Y") {
        roundScore += 2; // paper
    } else if (curr.player === "Z") {
        roundScore += 3; // scissors
    }

    // score check for the round outcome, same logic as good ol' rock paper scissors

    if (curr.opponent === "A" && curr.player === "Y" || curr.opponent === "B" && curr.player === "Z" || curr.opponent === "C" && curr.player === "X") {
        roundScore += 6; // you win
    } else if (curr.opponent === "B" && curr.player === "X" || curr.opponent === "C" && curr.player === "Y" || curr.opponent === "A" && curr.player === "Z") {
        roundScore += 0; // you lose
    } else {
        // don't need to specify the draw condition because it will be the only other option after specifying the win and lose conditions
        roundScore += 3; // draw
    }

    // add the score for this round to the total score
    return acc + roundScore;
}, 0)

// second part of the challenge is similar to the first part, but the score is calculated differently.
// before, XYZ would be the player's choice. But in this part, it's actually how the round needs to end. So the algorithm is the same, but the score is calculated differently.

const newTotalscore = allChoices.reduce((acc, curr) => {
    let roundScore = 0;

    // score check for the choice of player (0 if you lost, 3 if the round was a draw, and 6 if you won).
    if (curr.player === "X") {
        roundScore += 0; // lost
    } else if (curr.player === "Y") {
        roundScore += 3; // draw
    } else if (curr.player === "Z") {
        roundScore += 6; // win!
    }

    // score check, XYZ is the round outcome, so the same logic as the first part of the challenge applies (1 for Rock, 2 for Paper, and 3 for Scissors). 
    // This was kind of confusing to me at first, but I got it after a few minutes of thinking about it. Need to refactor it in the future
    if (curr.opponent === "B" && curr.player === "X" || curr.opponent === "A" && curr.player === "Y" || curr.opponent === "C" && curr.player === "Z") {
        roundScore += 1; // you chose rock
    } else if (curr.opponent === "C" && curr.player === "X" || curr.opponent === "B" && curr.player === "Y" || curr.opponent === "A" && curr.player === "Z") {
        roundScore += 2; // you chose paper
    } else {
        // don't need to specify the draw condition because it will be the only other option after specifying the win and lose conditions
        roundScore += 3; // you chose scissors
    }
    // add the score for this round to the total score
    return acc + roundScore;
}, 0)