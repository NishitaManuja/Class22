//namespacing - renaming 
//modules of matter.js lib - Matter.Engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball, ground;


function setup() {
  createCanvas(800, 400);

  //1. create Physics Engine
  engine = Engine.create();

  //2. create world using engine
  world = engine.world;

  //object allows you to add properties and give it value
  //JSON Java Script Object Notation(format of storing data js) objectName = { key: value, key1: value}

  options = {
    friction: 0.4,
    density: 0.8,

  }
  groundOptions = {
    isStatic: true
  }

  //3. create object/body

  ball = Bodies.circle(200, 200, 30, options);
  ground = Bodies.rectangle(0, 380, 800, 20, groundOptions);

  //4. add object/body to the world
  World.add(world, ball)
  World.add(world, ground)



}

function draw() {
  background(255, 255, 255);

  //5. update engine
  Engine.update(engine);


  ellipse(ball.position.x, ball.position.y, 30, 30);
  rect(ground.position.x, ground.position.y, 800, 20);
}