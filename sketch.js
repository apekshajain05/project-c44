var form;
var taskName;
var input,button,title;
var ToDo;


function setup() {
  createCanvas(20,20);
  title=createElement("h1");
  title.html("TO DO LIST");
  title.position(430,30);
   input=createInput("Enter a Task");
   input.position(470,150);
   button=createButton("Add Task");
   button.position(650,150);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}