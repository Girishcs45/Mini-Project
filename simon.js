let gameseq=[];
let userseq=[];
let btns=["red","yell","green","purple"];

let start=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
        // console.log("Game is started!");
        start=true;

        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let rndidx=Math.floor(Math.random()*3);
    let rndclr=btns[rndidx];
    let rndbtn=document.querySelector(`.${rndclr}`);
    gameseq.push(rndclr);  
    // console.log(gameseq);
    btnFlash(rndbtn);
}

function checkans(idx){
    // let idx = level-1;
    // console.log(`level is${level}`);

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start= false;
    gameseq=[];
    userseq=[];
    level = 0;
}