const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);

    
    engine = Engine.create();
    world = engine.world;
   
    roof = new Roof (500,100)

    bobObject1 = new Bob(400, 350);
    bobObject2 = new Bob(450, 350);
    bobObject3 = new Bob(500, 350);
    bobObject4 = new Bob(550, 350);
    bobObject5 = new Bob(600, 350);

    rope1 = new Rope(bobObject1.body, roof.body,-100,0);
    rope2 = new Rope(bobObject2.body,roof.body,-50,0);
    rope3 = new Rope(bobObject3.body, roof.body,0,0);
    rope4 = new Rope(bobObject4.body, roof.body , 50, 0);
    rope5 = new Rope(bobObject5.body,roof.body, 100,0)



}

function draw(){

    background("lightblue");
    
    Engine.update(engine);

  
    roof.display();

    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();

  rope1.display();
   rope2.display(); 
   rope3.display();
   rope4.display();
   rope5.display();

    
}

function keyPressed () {
    if (keyCode === LEFT_ARROW) {
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
    }
}

