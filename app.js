const themeToggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    bodyElement.classList.add(currentTheme);
}

const toggleTheme = () => {
    if (bodyElement.classList.contains('dark-theme')) {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme'); 
    } else {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme'); 
    }
};

themeToggleButton.addEventListener('click', toggleTheme);


// game
let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restart");
let newButton = document.querySelector("#new");
let msgDabba = document.querySelector(".msg-dabba");
let msg = document.querySelector("#msg");

let chanceO = true;
const win = [
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
        if(chanceO === true){
            box.innerText = "O";
            box.classList.add("o-color"); 
            box.classList.remove("x-color"); 
            chanceO = false;
        }else{
            box.innerText = "X";
            box.classList.add("x-color"); 
            box.classList.remove("o-color"); 
            chanceO = true;
        }
        box.disabled = true;

        winnerCheck();
    });
});

const winnerCheck = () => {
    for(let pattern of win){
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
        if(pos1Value===pos2Value && pos2Value===pos3Value){
            showWinner(pos1Value);
            return;
        }
    }
}
const allFilled = Array.from(boxes).every((box) => box.innerText !== "");
    if (allFilled) {
        showDraw();
    }
};

const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgDabba.classList.remove("hide");
    disableBoxes();
};

const showWinner = (winner) => {
    msg.innerText = `Tadaa, Winner is ${winner}`;
    msgDabba.classList.remove("hide");
    disableBoxes();
};

const restartGame = () => {
    chanceO = true;
    enableBoxes();
    msgDabba.classList.add("hide");
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

newButton.addEventListener("click", restartGame);
restart.addEventListener("click", restartGame);