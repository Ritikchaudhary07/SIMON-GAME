let gameSeq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];

let started =false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
     
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameFlash(btn){
         btn.classList.add("flash");
         setTimeout(function(){
            btn.classList.remove("flash"); 
         },250);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash"); 
    },500);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
     
    //random color
    let randIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);

    gameFlash(randbtn);

}
function checkAns(idx){
//    console.log("curr level: ",level)
     if(userseq[idx]==gameSeq[idx]){
        // console.log("same value")
        if(userseq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
     }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
     }
}

function btnPress(){
    // console.log("button was pressed");
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    // console.log(userColor)
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}