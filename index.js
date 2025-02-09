const buttons =document.querySelectorAll(".drum");
buttons.forEach((item)=>{
    item.onclick=function(e){
        let text = e.target.innerHTML;
        addSound(text);
    }
})
document.addEventListener('keydown',function(e){
    let text = e.key;
    addSound(text);
})
function addSound(word){
    if(word == "w"){
        let audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    if(word == "a"){
        let audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    if(word == "s"){
        let audio=new Audio("./sounds/tom-2.mp3");
        audio.play();
    }
    if(word == "d"){
        let audio=new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
    if(word == "j"){
        let audio=new Audio("./sounds/snare.mp3");
        audio.play();
    }
    if(word == "k"){
        let audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }
    if(word == "l"){
        let audio=new Audio("./sounds/crash.mp3");
        audio.play();
    }
}