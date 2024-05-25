let pipe1_hg; 
let hole1_hg; 
let pipe2_hg; 
let hole2_hg;  
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');
let sound_die2 = new Audio('sounds effect/die2.mp3');
let up = new Audio('sounds effect/up.mp3');

setInterval(()=>{
 pipe1_hg = Math.floor(Math.random()*10) +30; 
 hole1_hg =  Math.floor(Math.random()*20) +25;    

 document.getElementById("pipe1").style.height = pipe1_hg + "%"; 
 document.getElementById("pipe2").style.top = pipe1_hg + hole1_hg + "%"; 
 document.getElementById("pipe2").style.height =100-(pipe1_hg+hole1_hg)+"%"

},4000) 

let bird =  document.getElementById("bird") ; 

setInterval(()=>{
  let x = parseInt(window.getComputedStyle(bird).getPropertyValue("top")); 
  if(x <= 510) {
    bird.style.top = (x+3) + "px"; 
    bird.style.transform = "rotate(5deg)"
  }else  {
    alert("You lost, your score is : " + score);  
    bird.style.top = 100+"px";  
    window.location.reload(); 
  }
},30);  

function jump() {
  let fly = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));  
  console.log(fly)
  if(fly>=14) { 
     bird.style.transform = "rotate(-12deg)"
     bird.style.top = (fly -40) + "px"; 
   
  }
} 
document.addEventListener("click",e=>{
    if(e.code === "Click") {  
      jump(); 
    }
  
}) 


let score = 0 ; 
setInterval(()=>{
  score++;   
  if(score === 10) {
    up.play()
    document.querySelector(".obs").style.animation = " animation: move 2s ease-in-out infinite; "; 
  }else {
    if(score === 30 ) {
      up.play()
      document.querySelector(".obs").style.animation = " animation: move 1.5s ease-in-out infinite; "
    }
  }
  document.getElementById("scr").innerHTML = score; 
  sound_point.play() 
  
},2000) 
function colisionCheck(el,el2) {
  let elReact = el.getBoundingClientRect(); 
  let elReact2 = el2.getBoundingClientRect();  
  
   return (elReact.right>=elReact2.left && elReact.left<= elReact2.right&&(elReact.bottom  >= elReact2.top)&& (elReact.top <= elReact2.bottom)); 

   
} 
setInterval(()=>{
   if(colisionCheck(document.getElementById("bird"),document.getElementById("pipe1"))) {
    bird.style.top = 523 + "px";   
    sound_die.play() 
    sound_die2.play()
  
    setTimeout(()=>{
       alert("Vocẽ perdeu, Thiago é um gato! ")  
      
       return
    },10)
   }else {
     if(colisionCheck(document.getElementById("bird"),document.getElementById("pipe2"))) {
    bird.style.top = 523 + "px";  
    sound_die.play()
    sound_die2.play()
    
      setTimeout(()=>{ 
         
        alert("Vocẽ perdeu, Thiago é um gato! ")  
       
        return
     },10)
     }
   }
},100) 
