const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rail1,rail2,rail3,runner;
var railImg,runnerImg,coinImg;
var score=0;
var r1Grp,r2Grp,r3Grp;

function preload(){
    railImg=loadImage("sprites/track.png");
    runnerImg=loadImage("sprites/runner2.png");
    coinImg=loadImage("sprites/coin.png");

}
function setup(){
    createCanvas(1000,600);
    physicsEngine = Engine.create()
    myWorld = physicsEngine.world;
    
    rail1=createSprite(130,380,40,550);
    rail1.addImage(railImg);
	rail1.scale=1;
	rail1.velocityY=-2

    rail2=createSprite(450,380,40,550);
    rail2.addImage(railImg);
	rail2.scale=1;
	rail2.velocityY=-2

    rail3=createSprite(750,380,40,550);
    rail3.addImage(railImg);
	rail3.scale=1;
	rail3.velocityY=-2;


    runner=createSprite(130,100,30,30);
    runner.addImage(runnerImg);
    runner.scale=.2;
    runner.shapeColor=0;

    r1Grp=new Group();
    r2Grp=new Group();
    r3Grp=new Group();

    
}

function draw(){
    background("lightblue");
    if (rail1.y <100){
        rail1.y = height/2;
     }
     if (rail2.y <100){
        rail2.y = height/2;
     }
     if (rail3.y <100){
        rail3.y = height/2;
     }
text(mouseX+","+mouseY,mouseX,mouseY);
if(keyWentDown(LEFT_ARROW)){
    //rail2.x
    if(runner.x>390 && runner.x<515){
        runner.x=runner.x-320
    }
    //rail3.x
    if(runner.x>690 &&runner.x<815){
        runner.x=runner.x-300
    }
    }

    if(keyWentDown(RIGHT_ARROW)){
        if(runner.x>390 && runner.x<515){
            runner.x=runner.x+300
        }
        //rail1.x
        if(runner.x>70 &&runner.x<190){
            runner.x=runner.x+320
        }
        }

    textSize(20);
    fill(0);
    stroke(0);
    text("Coins : "+ score,890,20);

    
    spawnCoinsRail1();
    spawnCoinsRail2();
    spawnCoinsRail3();

    
    drawSprites();
}

function spawnCoinsRail1(){
    if(frameCount % Math.round(random(60,100)) === 0){
        var coin = createSprite(Math.round(random(95,175)),600,20,20);
        coin.addImage(coinImg);
        coin.scale=.02;
        coin.velocityY=-2;
        r1Grp.add(coin);

        if(coin.isTouching(runner)){
            score=score+10;
            coin.destroy();
        }
    }

}

function spawnCoinsRail2(){
    if(frameCount % Math.round(random(60,100)) === 0){
        var coin = createSprite(Math.round(random(405,500)),600,20,20);
        coin.addImage(coinImg);
        coin.scale=.02;
        coin.velocityY=-2;
        r2Grp.add(coin);
    }
}

function spawnCoinsRail3(){
    if(frameCount % Math.round(random(60,100)) === 0){
        var coin = createSprite(Math.round(random(705,800)),600,20,20);
        coin.addImage(coinImg);
        coin.scale=.02;
        coin.velocityY=-2;
       r3Grp.add(coin);
    }
}

