// Theme
// let themeBtn = document.querySelector("#theme");
// let body = document.querySelector("body");
// let currentTheme = "light";
// themeBtn.addEventListener("click", () => {
//     if(currentTheme === "light"){
//         currentTheme = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currentTheme = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// });


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
            chanceO = false;
        }else{
            box.innerText = "X";
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
        }
    }
};
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