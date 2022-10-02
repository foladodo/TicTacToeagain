const circle_constant = "circle"
const x_constant = "x"
const board = document.getElementById('board')
const winningDisplay = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageText = document.querySelector('[data-winning-text')
const cellElements = document.querySelectorAll('[data-cell]')
const winningCombinations = [[0,1,2],[0,4,8],[2,4,6],[3,4,5],[0,3,6],[2,5,8],[7,4,1],[6,7,8]]
let circleTurn = false
let arra
let CURRENT_CLASS = circleTurn ? circle_constant : x_constant
let gameON = true
let win

cellElements.forEach((cell,key) => (cell.addEventListener("click", handleClick, {once:true} )))
//For numbering them: cellElements.forEach((cell,key) => {cell.innerHTML = key}) 
/**function restart() {
    cellElements.forEach((cell,index) => {cell.classList.remove(circle_constant,x_constant)})
    winningDisplay.classList.remove("show")
    gameON = true
    console.log("restarted")
}**/
restartButton.addEventListener("click", startGame)
function startGame() {

    circleTurn = false
    cellElements.forEach((cell,key) => {
        cell.classList.remove(x_constant)
        cell.classList.remove(circle_constant)
        cell.classList.remove("won")
        cell.addEventListener("click", handleClick, {once:true} )}
        )
    setBoardHoverClass(CURRENT_CLASS)
    winningDisplay.classList.remove("show")
}
function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = `Draw`
    } else {
        winningMessageText.innerText = `${circleTurn ? "O's" : "X's"} Win!`
    }
    winningDisplay.classList.add("show")
}
function placeMark(cell,CURRENT_CLASS) {
    cell.classList.add(CURRENT_CLASS)
}

function arrayIsEqual(a, b) {
    return a.join() == b.join();
}

function setBoardHoverClass(CURRENT_CLASS) {
    board.classList.remove(x_constant)
    board.classList.remove(circle_constant)
    if (circleTurn) {  
        board.classList.add(circle_constant)
    }
    else {
        board.classList.add(x_constant)
    }
}

function swapTurns() {
    circleTurn = !circleTurn
}

function checkForWin(CURRENT_CLASS) {
    
    win =  winningCombinations.some((value,index) => {
        return value.every((v,i,a) => {
            arra = a
            return cellElements[v].classList[1] == CURRENT_CLASS
        })
    })
    if (win) {
        arra.forEach((va,ind) => {
            cellElements[va].classList.add("won")
        })
        return win
    }
}

function handleClick(a) {
    const cell = a.target
    CURRENT_CLASS = circleTurn ? circle_constant : x_constant
    placeMark(cell, CURRENT_CLASS)
    //console.log(cellElements)
    if(checkForWin(CURRENT_CLASS)) {
        endGame (false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        swapTurns()
        setBoardHoverClass(CURRENT_CLASS)}
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_constant) || cell.classList.contains(circle_constant)
    })
}