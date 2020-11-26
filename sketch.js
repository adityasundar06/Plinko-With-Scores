const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];

var ground;
var engine, world;

var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  background("black");
  textSize(20)
  stroke("red");
  fill("red");
  text("Score = "+score,20,30);

  text("500",20,550);
  text("500",105,550);
  text("500",185,550);
  text("500",265,550);
  text("100",345,550);
  text("100",425,550);
  text("100",505,550);
  text("200",585,550);
  text("200",665,550);
  text("200",745,550);

  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
  }
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display();
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){

    if(particle.body.position.x < 300){
      score += 500;
      particle = null;

      if(turn >= 5){
        gameState = "end";
      }
    }
   } 
  }
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){

    if(particle.body.position.x > 301 && particle.body.position.x < 600){
      score += 100;
      particle = null;

      if(turn >= 5){
        gameState = "end";
      }
    }
   } 
  }
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){

    if(particle.body.position.x > 601 && particle.body.position.x < 900){
      score += 200;
      particle = null;

      if(turn >= 5){
        gameState = "end";
      }
    }
   } 
  }
  if(gameState == "end"){
    text("GAME OVER",340,450);
  }
}
function mousePressed() {
  if (mouseIsPressed && gameState != "end") {
    turn++;
    console.log(turn)
    particle = new Particle(mouseX, 10, 10, 10);
  }
}