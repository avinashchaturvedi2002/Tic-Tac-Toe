let boxes=document.querySelectorAll(".marker");
let turnO=true;
let winnerText=document.querySelector(".winnerText")
let rstBtn=document.querySelector("#reset")

const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{
        if (turnO)
        {
            box.innerText="0";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
        draw();
    })
})

const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        if((boxes[pattern[0]].innerText!="")&&(boxes[pattern[1]].innerText!="")&&(boxes[pattern[2]].innerText!=""))
        {
            if((boxes[pattern[0]].innerText===boxes[pattern[1]].innerText)&&(boxes[pattern[1]].innerText===boxes[pattern[2]].innerText))
            {
            winnerText.innerText=`Winner is ${boxes[pattern[0]].innerText}`;
            disable();

            }
        }
    }

}

const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enable=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}

rstBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    })
    enable();
    winnerText.innerText="";
})


const draw=()=>{
    let flag=0;
    boxes.forEach((box)=>{  
        if(box.innerText==="")
        flag=1;
    }
)
if (flag!=1)
{
    winnerText.innerText="Game Draw";
}
}
