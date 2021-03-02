var canvas;
var box1,box2,box3,box4;
var movingBox;
var musicSound;
var edges1,edges2,edges3;

function preload(){
    musicSound = loadSound("music.mp3");
}


function setup(){

    musicSound.loop();

    canvas = createCanvas(800,600);

    movingBox=createSprite(random(100,700),random(100,450),10,10)
    movingBox.setVelocity(2,2);
    movingBox.shapeColor="white"

    box1=createSprite(100,575,195,20);
    box1.shapeColor="red"

    box2=createSprite(300,575,195,20);
    box2.shapeColor="yellow"

    box3=createSprite(500,575,195,20);
    box3.shapeColor="orange"

    box4=createSprite(700,575,195,20);
    box4.shapeColor="blue"

    edges1=createSprite(0,600,10,1200);
    
    edges2=createSprite(800,0,1600,10);

    edges3=createSprite(800,0,10,1600);

  
}

function draw() {
    background(rgb(169,169,169));

    movingBox.bounceOff(edges1);
    movingBox.bounceOff(edges2);
    movingBox.bounceOff(edges3);

    
    if(box1.isTouching(movingBox) && movingBox.bounceOff(box1)){
        movingBox.shapeColor="red"

    }
    else if(box2.isTouching(movingBox) && movingBox.bounceOff(box2)){
        movingBox.shapeColor="yellow"
        //musicSound.stop();
        movingBox.velocityX=0;
        movingBox.velocityY=0;
    }
    else if(box3.isTouching(movingBox) && movingBox.bounceOff(box3)){
        movingBox.shapeColor="orange"
    }
    else if(box4.isTouching(movingBox) && movingBox.bounceOff(box4)){
        movingBox.shapeColor="blue"
    }

    drawSprites();
}
