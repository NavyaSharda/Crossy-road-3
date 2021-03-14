
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,rectangle1,rectangle2,circle1,circle2;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  rectangle1=Bodies.rectangle(150,50,20,20);
  rectangle2=Bodies.rectangle(250,100,20,20)
  circle1=Bodies.circle(120,150,20)
  circle2=Bodies.circle(100,160,20)
  World.add(world,[rectangle1,rectangle2,circle1,circle2])
  
  console.log(rectangle1)
  console.log(rectangle1.position.x)
  console.log(rectangle1.position.y)
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(rectangle1.position.x,rectangle1.position.y,50,50);
  rect(rectangle2.position.x,rectangle2.position.y,50,50)
  circle(circle1.position.x,circle1.position.y,50)
  circle(circle2.position.x,circle2.position.y,50)
}
