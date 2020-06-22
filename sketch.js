const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot, ground2;
var gameState = "onSling";
var score=0;  
var bg="sprite/background_2.png";

function preload() {
   /*if(backgroundImg) 
    background(backgroundImg);
   */ 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
     getBgImg();

    ground = new Ground(550,380,350,20); 
    ground2 = new Ground(900,250,350,20);

  

    box1 = new Box(450,320,70,70);
    box2 = new Box(520,320,70,70);
   

    box3 = new Box(590,320,70,70);
    box4 = new Box(660,320,70,70);
    

    

    box5 = new Box(570,210,70,70);
    
    bird = new Bird(200,50);

    box6=new Box(500,180,70,70); 
    box7=new Box(570,180,70,70); 
    box8=new Box(500,100,70,70); 
      
    box9 = new Box(830,230,70,70);
    box10 = new Box(870,230,70,70);
    
    box11= new Box(940,230,70,70);
    box12 = new Box(1010,230,70,70);
    box13=new Box(880,180,70,70); 

    
    box14=new Box(900,180,70,70); 
    box15=new Box(990,180,70,70); 
    box16=new Box(950,100,70,70); 
    slingshot = new SlingShot(bird.body,{x:200, y:50});

}

function draw(){
 if(backgroundImg){ 

    background(backgroundImg);  
    
    noStroke();
    textSize(35)
    fill("white"); 
    text("SCORE: " + score, 560,40); 
    Engine.update(engine);  


    //strokeWeight(4);

    box1.display();
    box1.score();
    
    box2.display();
    box2.score();
    
    ground.display();
    
    box3.display();
    box3.score();
    
    box4.display(); 
    box4.score(); 
   
    
    box9.display();
    box9.score();
    
    box10.display();
    box10.score();
  
    box11.display()
    box11.score()

    box12.display()
    box12.score()
    
    box13.display()
    box13.score()

    
    box14.display()
    box14.score()

    box15.display();
    box15.score();

    box16.display();
    box16.score();
    
    box5.display();
    box5.score();    

    bird.display();
    
    slingshot.display();    
    ground2.display(); 

    }

}


function mouseDragged(){
    if (gameState==="onSling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}   

function keyPressed(){
    if(keyCode === 32 ){
       slingshot.attach(bird.body); 
    gameState="onSling" ;
    }
} 

async function getBgImg(){ 
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json(); 
    
    var datetime = responseJSON.datetime; 
    var hour = datetime.slice(11,13); 

    if(hour>=06 && hour <=19){ 
        bg ="sprite/background.png"; 
    } 
    else{ 
        bg = "sprites/background2.png";
    }
    backgroundImg = loadImage(bg); 
    console.log(backgroundImg); 
} 
/*function Score(){ 
    if(this.visibility<0 && this.visibility>=1005){ 
        score++;
    }
}
*/ 
