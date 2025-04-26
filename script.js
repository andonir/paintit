const canvas  = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clientRect = canvas.getBoundingClientRect();
const eraser = document.getElementById('eraser')
let painting = false;
let color,width,firstPositionX, firstPositionY;
let delAllowed = false;

canvas.addEventListener('mousedown', (e)=>{
    firstPositionX = e.clientX - clientRect.left;
    firstPositionY = e.clientY - clientRect.top;
    color = document.getElementById('inputColor').value;
    width  = document.getElementById('inputWidth').value;
    painting = true;
    ctx.beginPath();
    
    
})
canvas.addEventListener('touchend', (e)=>{
    firstPositionX = e.clientX - clientRect.left;
    firstPositionY = e.clientY - clientRect.top;
    color = document.getElementById('inputColor').value;
    width  = document.getElementById('inputWidth').value;
    painting = true;
    ctx.beginPath();
    
    
})
canvas.addEventListener('mousemove',(e)=>{
    let currentPositionX = e.clientX - clientRect.left;
    let currentPositionY = e.clientY -clientRect.top;
    
    if(painting && delAllowed != true){
        draw(firstPositionX,firstPositionY, currentPositionX, currentPositionY, color, width);
    }
    if(delAllowed && painting){
        ctx.lineWidth = width;
        ctx.clearRect(firstPositionX,firstPositionY, width*1.5,width*1.5)
    }
   
        firstPositionX = currentPositionX;
        firstPositionY = currentPositionY;
})
canvas.addEventListener('touchmove',(e)=>{
    let currentPositionX = e.clientX - clientRect.left;
    let currentPositionY = e.clientY -clientRect.top;
    
    if(painting && delAllowed != true){
        draw(firstPositionX,firstPositionY, currentPositionX, currentPositionY, color, width);
    }
    if(delAllowed && painting){
        ctx.lineWidth = width;
        ctx.clearRect(firstPositionX,firstPositionY, width*1.5,width*1.5)
    }
   
        firstPositionX = currentPositionX;
        firstPositionY = currentPositionY;
})
canvas.addEventListener('mouseup', (e)=>{
    painting= false;
    ctx.closePath();
})
canvas.addEventListener('touchup', (e)=>{
    painting= false;
    ctx.closePath();
})
const draw = (x,y,x2,y2,color,width)=>{
    ctx.lineTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke()

}

eraser.addEventListener('click', ()=>{
    if (delAllowed){
      delAllowed = false;  
        eraser.classList.toggle('true');
    }else{
        delAllowed = true;
        eraser.classList.toggle('true');

    }
})
eraser.addEventListener('touchend', ()=>{
    if (delAllowed){
      delAllowed = false;  
        eraser.classList.toggle('true');
    }else{
        delAllowed = true;
        eraser.classList.toggle('true');

    }
})