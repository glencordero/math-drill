// addition of 2 numbers 1-20
// addition of 3 numbers 1-20
// slow timer and a fast timer
// keeps track of problems missed

// SETUP
let allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let allProblems = []


// FUNCTIONS
function getRandomNumbers(allNumbers, qty){
    const shuffled = allNumbers.sort(() => 0.5 - Math.random())
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

let myInterval

function timer(timeLimit){
    let timerClock = document.getElementById('timer')
    timerClock.innerHTML = ''
    myInterval = setInterval(() => {
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

function stopTimer(){
    clearInterval(myInterval)
}


function generateProblem(event){
    //create problem object
    //set the given type as type property
    //set numbers property from getRandomNumbers
    //set correct answer property from solveProblem
    //set enteredAnswer to ''
    //set correct property to false (default) 
    //set student property from login 
    
    let _numbers = getRandomNumbers(allNumbers, event.target.qty)
    let problem = {
        type: event.target.operator,
        numbers: _numbers,
        correctAnswer: solveProblem(event.target.operator, _numbers),
        enteredAnswer: '',
        correct: false,
        student: "Ann"
    }
    allProblems.push(problem)
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
    let submittedAnswer = document.getElementById('solution').value
    let problem = allProblems[allProblems.length-1]
    _validateAnswer(submittedAnswer, problem)
    _displayResult(problem)
}

function _displayResult(problem){
    let resultsDiv = document.getElementById('results')
    if(problem.correct){
        resultsDiv.innerHTML = "Correct"
    }else{
        resultsDiv.innerHTML = "Please Try Again"
    }
}

function _validateAnswer(submittedAnswer, problem){
    problem.enteredAnswer = submittedAnswer
    if(submittedAnswer == problem.correctAnswer){
        problem.correct = true
    }
}

function displayProblem(problem){
    try{
        clearInterval(myInterval)
    }catch{

    }
    timer(60)
    let problemDiv = document.getElementById('problem')
    problemDiv.innerHTML = ''
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

const twoNumbersAdd = document.getElementById('two-numbers-add')
twoNumbersAdd.addEventListener('click', generateProblem)
twoNumbersAdd.operator = '+'
twoNumbersAdd.qty = 2 

const threeNumbersAdd = document.getElementById('three-numbers-add')
threeNumbersAdd.addEventListener('click', generateProblem)
threeNumbersAdd.operator = '+'
threeNumbersAdd.qty = 3 

const twoNumbersSub = document.getElementById('two-numbers-sub')
twoNumbersSub.addEventListener('click', generateProblem)
twoNumbersSub.operator = '-'
twoNumbersSub.qty = 2 

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click', submitAnswer)