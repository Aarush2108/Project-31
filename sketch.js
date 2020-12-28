const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine, world;
var division=[];
var plinko=[];
var particle=[];
function setup() {
  createCanvas(400,700);
  engine=Engine.create();
  world=engine.world;

   ground=new Ground(200,690,400,20)

   for(var i=0;i<400;i=i+70){
     division.push(new Division(i,600,10,200));
   }
for(var i=50;i<400;i=i+70){
  plinko.push(new Plinko(i,150))
}
for(var i=70;i<400;i=i+60){
  plinko.push(new Plinko(i,200))
}
for(var i=50;i<400;i=i+70){
  plinko.push(new Plinko(i,250))
}
for(var i=70;i<400;i=i+60){
  plinko.push(new Plinko(i,300))
}
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  for(var i=0; i<division.length;i++){
    division[i].display();
  }

  for(var i=0;i<plinko.length;i++){
    plinko[i].display();
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(10,390),10))
  }
  for(var i=0;i<particle.length;i++){
    particle[i].display();
  }
  
}