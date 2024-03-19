const container = document.querySelector(".container")
const gridItems = document.querySelectorAll(".grid-item");
const messageTxt = document.querySelector("h3");
const resetBtn = document.querySelector(".resetBtn");
const input1 = document.querySelector(".name-input-one")
const input2 = document.querySelector(".name-input-two")
const startBtn = document.querySelector(".startBtn")
const nameContainer = document.querySelector(".name-container")

const X_MARK = "X";
const O_MARK = "O";

let player1;
let player2;
let curPlayer;
let blocks = Array.from(gridItems);
let gameEnded = false;


container.style = "display: none"

resetBtn.addEventListener("click", () => {
    newGame();
})
startBtn.addEventListener("click", () => {
    newGame();
})


function newGame() {
    blocks.forEach((block) => {
        nameContainer.style = "display: none"
        gameEnded = false;
        block.innerText = ""
        messageTxt.innerText = "";
        container.style = "display: flex"
        block.addEventListener("click", () => {
            playRound(block);
        })
    })

    name1 = input1.value;
    name2 = input2.value;
    player1 = createPlayer(name1, X_MARK);
    player2 = createPlayer(name2, O_MARK);
    curPlayer = player1;
    
}

function playRound(block) {
    if(block.innerText !== "" || gameEnded) { return }
    block.innerText = curPlayer.mark;
    winningCombos.forEach((combo) => {
        let [a, b, c] = combo;
        if(blocks[a].innerText === curPlayer.mark && blocks[b].innerText === curPlayer.mark && blocks[c].innerText === curPlayer.mark) {
            endGame(curPlayer);
            return;
        }
    })
    curPlayer = curPlayer === player1? player2 : player1
}

function endGame(player) {
    gameEnded = true
    messageTxt.innerText = player.name + " has won"
}

function createPlayer(name, mark) {
    return { name, mark }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];