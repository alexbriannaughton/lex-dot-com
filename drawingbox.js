
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }


// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener('mousedown', (e) => {
    console.log('MOUSE DOWN!!!!');
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});






// following is for the moving stuff // 
/*
let canvas = document.getElementById('myPics')
let topAmount = 1;
let leftAmount = 1;

function 

function moveCanvas() {
  let leftThing = canvas.offsetLeft;
  canvas.style.left = (leftThing + amount) + 'px';
  let topThing = canvas.offsetTop;
  canvas.style.top = (topThing + amount) + 'px';
  console.log("canvas t", canvas.style);

}

function go() {
  // canvas.style.position = 'absolute';
  setInterval(moveCanvas, 5);
}


// moveCanvas();

// go();

*/
