let homeScore=document.getElementById("home-score");
let guestScore=document.getElementById('guest-score');
let displayLeading=document.getElementById('display-leading');

function incrementH1(){
    let result=Number(homeScore.innerHTML)+1;
    homeScore.innerHTML=result;
    check();
}
function incrementH2(){
    let result=Number(homeScore.innerHTML)+2;
    homeScore.innerHTML=result;
    check();
}
function incrementH3(){
    let result=Number(homeScore.innerHTML)+3;
    homeScore.innerHTML=result;
    check();
}
function incrementG1(){
    let result=Number(guestScore.innerHTML)+1;
    guestScore.innerHTML=result;
    check();
}
function incrementG2(){
    let result=Number(guestScore.innerHTML)+2;
    guestScore.innerHTML=result;
    check();
}
function incrementG3(){
    let result=Number(guestScore.innerHTML)+3;
    guestScore.innerHTML=result;
    check();
}
function check(){
    console.log(Number(guestScore.innerHTML)-Number(homeScore.innerHTML))
    if(homeScore.innerHTML>guestScore.innerHTML){
        displayLeading.innerHTML="🎉"+"Home is Leading by "+(Number(homeScore.innerHTML)-Number(guestScore.innerHTML))+"🎉";
    }
    else if(homeScore.innerHTML<guestScore.innerHTML){
        displayLeading.innerHTML="🎉"+"Guest is Leading by "+(Number(guestScore.innerHTML)-Number(homeScore.innerHTML))+"🎉";
    }
    else{
        displayLeading.innerHTML="🎉"+"Both are Equally doing good"+"🎉";
    }
}