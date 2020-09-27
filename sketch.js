
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 550);

  engine = Engine.create();
	world = engine.world;
	rect1 = new Rect(400,540,200,20)
	rect2 = new Rect(490,480,20,100)
    rect3 = new Rect(310,480,20,100)

    paper= new Ball(150,450,26)

    ground =new Ground(400,550,800,20)
 
	


  
}


function draw() {
 
  background(255);
  Engine.update(engine);
  
   fill(255)
  text(mouseX + "," + mouseY,10,15)
  
  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
  ground.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

    
  }
}