let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newgameBtn= document.querySelector("#new-btn")
let msgContainer= document.querySelector(".msg-container")
let msg = document.querySelector("#msg")


let turn_o=true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count=0;

const resetGame = ()=>{
    turn_o=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}

const enableBoxes = ()=>{
    for( let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes = ()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) => {

    if (winner === "Game is Drawed") {
        msg.innerText = winner;
    } 
    else {
        msg.innerHTML = `Congratulations, Winner is <span class="winner-name">${winner}</span>`;
    }

    msgContainer.classList.remove("hide");
    disableBoxes();
};


boxes.forEach( (box)=>{
    box.addEventListener("click", ()=>{
        if(turn_o) {
            turn_o=false;
            box.innerText="O";
        
        }
        else{
            turn_o=true;
             box.innerText="X";
        }

        box.disabled=true;
         count++;
        checkWinner();
        console.log("box is clicked");
    })
})


function checkWinner(){
    for( let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log(pos1Val);
            showWinner(pos1Val);
        
        return true;
    }
    }
    }

    if(count===9) showWinner("Game is Drawed");
}


newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);