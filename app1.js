let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let btns=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
})
function gameflashlight(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflashlight(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++; 
    h2.innerText=`Level:${level}`;
    let randno=Math.floor(Math.random()*4)
    console.log(randno);
    let randcolor=btns[randno];
    console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    let btn=document.querySelector(`.${randcolor}`);
    gameflashlight(btn);
}
function checkseq(idx){
    
    if(gameseq[idx]===userseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerHTML=`game over! Your score was <b>${level}</b> <br>Press any key to start`;
        h2.style.color="red";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn=this;
    userflashlight(btn);
    let btncolor=btn.getAttribute("id");
    userseq.push(btncolor);
    console.log(userseq);
    checkseq(userseq.length-1);
}
allbtns=document.querySelectorAll(".btn");
for(let btns of allbtns){
    btns.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}