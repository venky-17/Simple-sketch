//select elements
const canvas = document.querySelector('#sketch');
const context = canvas.getContext('2d');
const shakebutton = document.querySelector('.shakebtn');

const MOVE_AMT = 30;
// const width = canvas.width;
// const height = canvas.height;
const { width, height} = canvas;

//create random starting points
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);
// const width = Math.floor(Math.random(0,8001)*100);
// const height = Math.floor(Math.random(0,5000)*100);

//set up canvas for drawing
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = MOVE_AMT;
 

let hue = 0;
context.strokeStyle =`hsl(${Math.random()*360},100%,50%)`;


context.beginPath();
context.moveTo(x,y);
context.lineTo(x,y);
context.stroke();


//draw fn
function draw({key}){
//increment hue
hue +=8;
context.strokeStyle =`hsl(${Math.random()*360},100%,50%)`;

   context.beginPath();
   context.moveTo(x,y);

  switch(key){
    case 'ArrowUp' : 
    y = y - MOVE_AMT;
    break;
    case 'ArrowLeft' : 
    x = x - MOVE_AMT
break;
    case 'ArrowDown' : 
    y = y + MOVE_AMT;
break;
    case 'ArrowRight' : 
    x = x + MOVE_AMT;x
  }
   context.lineTo(x,y);
   context.stroke(); 
}





//handler for keys
function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({key:e.key});
      
    }
    
}

//shake fn
function clearCanvas(){
    canvas.classList.add('shake');
    context.clearRect(0,0,width,height)
    canvas.addEventListener('animationend',function(){
        canvas.classList.remove('shake')
    }, {once: true})
}

shakebutton.addEventListener('click', clearCanvas)
//listen for arrow keys

window.addEventListener('keydown', handleKey)