const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box5= new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(810,350);
    
    log1=new Log(810,260,20,300,PI/2);
    log2=new Log(810,200,20,300,PI/2)
    log3=new Log(760,120,20,150,PI/7);
    log4=new Log(870,120,20,150,PI/-7);

    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new Pig(810,220);
    bird1=new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    class Box {
        constructor(x, y, width, height) {
          var options = {
              'restitution':0.8,
              'friction':1,
              'density':1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("orange");
          rect(0, 0, this.width, this.height);
          pop();
        }
      };
      log1.display();
    box3.display();
    bird1.display();
    box4.display();
    box5.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    fill("white");
    text(mouseX + ' , '+mouseY, 1000,50);

}