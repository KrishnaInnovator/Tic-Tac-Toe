
let boxes=document.querySelectorAll(".items");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msg_contain=document.querySelector(".msg_contain");
let msg=document.querySelector("#msg");

let turno=true;

const winnerPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msg_contain.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{//button click karne par
        
     if(turno===true){//agar player o ki turn hai toh
        box.innerText="O";
        turno=false;  
     }
     else{//agar player x ki turn hai toh
        box.innerText="X";
        turno=true;  
     }
    box.disabled=true;
     checkWinner();
    })
});
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showWinner=(winner)=>{
msg.innerText=`🎉 Congratulations! 🏆 The winner is "${winner}"!🎊 `;
msg_contain.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
    for(let patterns of winnerPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
               showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

