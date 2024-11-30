let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        // box.innerText = "X";
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && isWinner != true){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = "Game was a draw !";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {
    count = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPattern){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        
        if(a != "" && b != "" && c != ""){
            if(a===b && b===c){
                // console.log("winner",a);
                showWinner(a)
                return true;
            }
        }
    }
};

newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);