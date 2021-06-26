const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var world,engine
var ground

var divisions;
var rowa;
var rowb;
var rowc;
var rowd;
var rowe;
var options={'isStatic':true,'density':5}

var ground,groundb;
var balls
var array1=[];



var divisionHeight=300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;



divisions = new Division();

rowa = new Plinko(200);
rowb = new Plinko(250);
rowc = new Plinko(300);
rowd = new Plinko(350);
rowe = new Plinko(400);

  ground=createSprite(400,800,800,10);
  groundb=Bodies.rectangle(400,800,800,10,options)

  World.add(world,groundb)

}

function draw() {
  background(0);
  
  Engine.update(engine);
  
  divisions.display();

  rowa.display();
  rowb.display();
  rowc.display();
  rowd.display();
  rowe.display();

  if(frameCount % 10 === 0){
    array1.push(new Particles());
  }

  for(i=0;i<array1.length;i++){
    array1[i].display();
  }

  

drawSprites();
}