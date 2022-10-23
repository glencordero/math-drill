// addition of 2 numbers 1-20
// addition of 3 numbers 1-20
// slow timer and a fast timer
// keeps track of problems missed

// SETUP
let allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// FUNCTIONS
function getRandomNumbers(numbers, qty){
    const shuffled = numbers.sort(() => 0.5 - Math.random())
    return shuffled.slice(0,qty)
}

function solveAdditionProblem(problemNumbers){
    let additionSolution = problemNumbers.reduce(function(prevVal, currVal) {
        return prevVal + currVal
    })
    return additionSolution
}

function solveSubtractionProblem(problemNumbers){
    problemNumbers.sort(function(a, b) {
        return b - a
      })
    let subtractionSolution = problemNumbers.reduce(function(prevVal, currVal) {
        return prevVal - currVal
    })
    return subtractionSolution
}



function timer(timeLimit){
    let timerClock = document.getElementById('timer')
    let timeOut = setInterval(() => {
        if(timeLimit == 0) {
            timerClock.innerHTML = "Time Over"
        } else {
            if(timeLimit < 10) {
                timeLimit = 0 + '' + timeLimit
            }
            timerClock.innerHTML = "00:" + timeLimit
            timeLimit -= 1
        }
    }, 1000)
}

function generateProblem(type, qty){
    let _numbers = getRandomNumbers(allNumbers, qty)
    //create problem object
    //set the given type as type property
    //set numbers property from getRandomNumbers
    //set correct answer property from solveProblem
    //set enteredAnswer to ''
    //set correct property to false (default) 
    //set student property from login 
    let problem = {
        type: type,
        numbers: _numbers,
        correctAnswer: solveProblem(type, _numbers),
        enteredAnswer: '',
        correct: false,
        student: "Ann"
    }
    displayProblem(problem)
}

function solveProblem(type, problemNumbers){
    if(type == "+"){
        return solveAdditionProblem(problemNumbers)
    } 
    if(type == "-"){
        return solveSubtractionProblem(problemNumbers)
    }
}

function submitAnswer(event){
    
}

function displayProblem(problem){
    let problemDiv = document.getElementById('problem')
    // create equationDiv
    let equationDiv = document.createElement('div')
    // loop over problemNumbers
    problem.numbers.forEach((problemNumber, index) => {
        let problemNumberDiv = document.createElement('div')
        problemNumberDiv.innerHTML = problemNumber
        equationDiv.appendChild(problemNumberDiv)
        if(index !== problem.numbers.length -1){
            let operatorDiv = document.createElement('div')
            operatorDiv.innerHTML = problem.type
            equationDiv.appendChild(operatorDiv)
        }
    })
    let solutionLineDiv = document.createElement('div')
    solutionLineDiv.innerHTML = "____________"
    equationDiv.appendChild(solutionLineDiv)
    problemDiv.appendChild(equationDiv)
}

// create div, with innerHTML of problem number
// append div to equationDiv
// unless at end, add an operatorDiv
// append equationDiv to problemDiv


// EVENT LISTENERS
// document.getElementById('two-numbers-add').addEventListener("click", displayAdditionProblem)
// document.getElementById('three-numbers-add').addEventListener("click", displayAdditionProblem)
// document.getElementById('two-numbers-sub').addEventListener("click", displaySubtractionProblem)


generateProblem("+",3)
