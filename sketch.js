
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var boyIMG;
var tree;

function preload()
{
	boyIMG = loadImage("Pluckingmangoes/boy.png")
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,650,1600,20);
	tree = new Tree(1200,450,400,400)
	stone = new Stone(274,491,40,40)
	mango1 = new Mango(1190,310,60,60)
	mango2 = new Mango(1150,400,60,60)
	mango3 = new Mango(1200,400,60,60)
	mango4 = new Mango(1100,380,60,60)
	mango5 = new Mango(1300,430,60,60)
	laucher = new Laucher(stone.body,{x:274,y:491});

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");


text(mouseX+","+mouseY,mouseX,mouseY)

  image(boyIMG,250,420,200,300)

  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  laucher.display();
  detectionCollision(stone,mango1)
  detectionCollision(stone,mango2)
  detectionCollision(stone,mango3)
  detectionCollision(stone,mango4)
  detectionCollision(stone,mango5)
  
  drawSprites();
 
}


function mouseDragged() {

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}


function mouseReleased() {

    laucher.fly();
}

function detectionCollision(lstone,lmango) {

    mangoBodyPosition = lmango.body.Position
    stoneBodyPosition = lstone.body.Position

    var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if (distance<=lmango.r+lstone.r) {

      Matter.Body.setStatic(lmango.body,false)
    }

}



