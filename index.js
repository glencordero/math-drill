// addition of 2 numbers 1-20
// addition of 3 numbers 1-20
// slow timer and a fast timer
// keeps track of problems missed

// SETUP
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// FUNCTIONS
function getRandomNumbers(numbers, qty){
    const shuffled = numbers.sort(() => 0.5 - Math.random())
    return shuffled.slice(0,qty)
}



function displayAdditionProblem(event){
    let qty = event.target.dataset.quantity
    let generatedNumbers = getRandomNumbers(numbers,qty)
    let problemDiv = document.createElement('div')
    generatedNumbers.forEach((generatedNumber,index) => {
        const p = document.createElement('p')
        p.innerHTML = generatedNumber
        problemDiv.appendChild(p)
        if(index != qty-1){
            const plus = document.createElement('p')
            plus.innerHTML = "+"
            problemDiv.appendChild(plus)
        }
    })
    let equalsLine = document.createElement('p')
    equalsLine.innerHTML = "___________"
    problemDiv.appendChild(equalsLine)
    document.getElementById('problem').innerHTML = ''
    document.getElementById('problem').appendChild(problemDiv)
}

function displaySubtractionProblem(event){
    let qty = event.target.dataset.quantity
    let generatedNumbers = getRandomNumbers(numbers,qty)
    generatedNumbers.sort(function(a, b) {
        return b - a;
      })
    let problemDiv = document.createElement('div')
    generatedNumbers.forEach((generatedNumber,index) => {
        const p = document.createElement('p')
        p.innerHTML = generatedNumber
        problemDiv.appendChild(p)
        if(index != qty-1){
            const minus = document.createElement('p')
            minus.innerHTML = "-"
            problemDiv.appendChild(minus)
        }
    })
    let equalsLine = document.createElement('p')
    equalsLine.innerHTML = "___________"
    problemDiv.appendChild(equalsLine)
    document.getElementById('problem').innerHTML = ''
    document.getElementById('problem').appendChild(problemDiv)
}


document.getElementById('two-numbers-add').addEventListener("click", displayAdditionProblem)
document.getElementById('three-numbers-add').addEventListener("click", displayAdditionProblem)
document.getElementById('two-numbers-sub').addEventListener("click", displaySubtractionProblem)

function timer(){
    let timeLimit = 30
    let timeOut = setInterval(() => {
    if(timeLimit == 0) {
        $('#timer').html('Time Over')
    } else {
        if(timeLimit < 10) {
        timeLimit = 0 + '' + timeLimit
        }
        $('#timer').html('00:' + timeLimit)
        timeLimit -= 1
    }
    }, 1000)
}



