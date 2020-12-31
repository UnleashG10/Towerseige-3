const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var  world;
var pentagon,box1;
var gameState = "onsling"

var score = 0;

function preload() {
    pentagonImg = loadImage("Img/polygon.png")

}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(440,380);
    ground1 = new Ground(400,height,120,20);
    box2 = new Box(420,380);
    box3 = new Box(400,380);
    box4 = new Box(380,380);
    box5 = new Box(360,380);
    box6 = new Box(370,360);
    box7 = new Box(390,360);
    box8 = new Box(410,360);
    box9 = new Box(430,360);
    box10 = new Box(380,340);
    box11 = new Box(400,340);
    box12 = new Box(420,340);
    box13 = new Box(410,320);
    box14 = new Box(390,320);
    box15 = new Box(400,300);

    ground2 = new Ground(700,280,120,15)
    box16 = new Box(740,260);
    box17 = new Box(720,260);
    box18 = new Box(700,260);
    box19 = new Box(680,260);
    box20 = new Box(660,260);
    box21 = new Box(670,240);
    box22 = new Box(690,240);
    box23 = new Box(710,240);
    box24 = new Box(730,240);
    box25 = new Box(720,220);
    box26 = new Box(700,220);
    box27 = new Box(680,220);
    box28 = new Box(690,200);
    box29 = new Box(710,200);
    box30 = new Box(700,180);

    pentagon = new Pentagon(170,260)
    
    slingshot = new SlingShot(pentagon.body,{x:170, y:260});
}

function draw(){

    background(0);
    Engine.update(engine);

    

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 ground1.display();

 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();
 box27.display();
 box28.display();
 box29.display();
 box30.display();
 ground2.display();

 pentagon.display();
 slingshot.display();

if(box1.body.position.y > 400 && box1.body.position.y < 405|| box2.body.position.y === 400 || box3.body.position.y === 400 ||

  box4.body.position.y === 400 ||box5.body.position.y === 400 || box6.body.position.y === 400 ||

  box7.body.position.y === 400 || box8.body.position.y === 400 ||box9.body.position.y === 400 || 

  box10.body.position.y > 400 && box1.body.position.y < 405 || box11.body.position.y === 400 || box12.body.position.y === 400 || 

  box13.body.position.y > 400 && box1.body.position.y < 405 ||box14.body.position.y === 400 || box15.body.position.y === 400 || 

  box16.body.position.y === 400 || box17.body.position.y === 400 ||box18.body.position.y === 400 || 

  box19.body.position.y === 400 ||box20.body.position.y === 400 ||box21.body.position.y === 400 || 

  box22.body.position.y === 400 || box23.body.position.y === 400 || box24.body.position.y === 400 ||

  box25.body.position.y === 400 || box26.body.position.y === 400 || box28.body.position.y === 400 ||

  box29.body.position.y === 400 || box30.body.position.y === 400 ){



push();

score = score + 2;

pop();



    }

fill ("red");
 text("score = "+ score , 1100 , 50);



}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}