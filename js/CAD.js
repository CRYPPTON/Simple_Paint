var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
document.body.style.margin = 0;
var widthLine ;


//console.log(widthLine);

class Rectangle {
  constructor(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
  }

  draw_rectangle(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.width,this.height);
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.stroke();
    ctx.closePath();
  }
}


class Square {
  constructor(x,y,width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw_square(){
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.width,this.width);
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.stroke();
    ctx.closePath();
  }
}

class Cyrcle {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  draw_cyrcle(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.stroke();
    ctx.closePath();
  }
}

class Line {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  draw_line(){


    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1,);
    ctx.lineTo(this.x2,this.y2);
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.stroke();
    ctx.closePath();
  }
}

class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  draw_point(){
    ctx.beginPath();
    ctx.fillRect(this.x,this.y,document.getElementById('lineW').value,document.getElementById('lineW').value);
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.stroke();
    ctx.closePath();
  }
}

function line_(){

  var line = new Line (
    prompt("Enter x1", 0),
    prompt("Enter y2", 0),
    prompt("Enter x2", 0),
    prompt("Enter y2",0)
  )
  line.draw_line();
}

function point_(){

  var point = new Point (
    prompt("Enter x", 0),
    prompt("Enter y", 0),
  )
  point.draw_point();
}

function cyrcle_(){
  var cyrcle = new Cyrcle (
    prompt("Enter x", 0),
    prompt("Enter y", 0),
    prompt("Enter r", 0),
  )
  cyrcle.draw_cyrcle();
}

function square_(){
  var square = new Square (
    prompt("Enter x", 0),
    prompt("Enter y", 0),
    prompt("Enter width", 0),

  )
  square.draw_square();
}

function rectangle_(){
  var rectangle = new Rectangle (
    prompt("Enter x", 0),
    prompt("Enter y", 0),
    prompt("Enter width", 0),
    prompt("Enter height",0)
  )
  rectangle.draw_rectangle();
}

function clear_(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);
}


//drawing
var pos = { x: 0, y: 0 };
function drawing(){
  document.removeEventListener('mousemove', del);
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', draw);
  document.addEventListener('mousedown', setPosition);
  document.addEventListener('mouseenter', setPosition);
}

function delete_() {
  document.removeEventListener('mousemove', draw);
  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', del);
  document.addEventListener('mousedown', setPosition);
  document.addEventListener('mouseenter', setPosition);
}



  // new position from mouse event
  function setPosition(e) {
    pos.x = e.clientX-2;
    pos.y = e.clientY-40;
  }

  // resize canvas
  function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin
    ctx.lineWidth = document.getElementById('lineW').value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "black";
    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to
    ctx.stroke(); // draw it!
  }

  function del(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;
    ctx.beginPath(); // begin
    ctx.moveTo(pos.x, pos.y); // from
    ctx.clearRect(pos.x, pos.y, document.getElementById('lineW').value, document.getElementById('lineW').value);
    setPosition(e);
    ctx.clearRect(pos.x, pos.y, document.getElementById('lineW').value, document.getElementById('lineW').value);
  }
