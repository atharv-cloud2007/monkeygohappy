
var monkey , monkey_running,gameState
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, bananaGroup
var ground,obstacleGroup,survivalTime
function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
}
function setup() {
  createCanvas(600,600)
  monkey= createSprite(70,530,50,50)
  monkey.scale=0.2
  monkey.addAnimation("running ",monkey_running)
  ground=createSprite(300,590,600,10)
  gameState="play"
  survivalTime=0 
  obstacleGroup=new Group()
  bananaGroup=new Group()
}
function draw(){
  background("white")
  monkey.collide(ground)
  
  if(gameState=="play"){
    monkey.velocityY=monkey.velocityY+0.5
    if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    }
    if (frameCount%80==0){
    spawnbananas()
    }
    if(keyDown("space")&&monkey.y>520){
    monkey.velocityY=-22
    }
    if(frameCount%300==0){  
    spawnObstacle()
    }
    if(monkey.isTouching(obstacleGroup)){
    
      obstacleGroup.destroyEach()
      bananaGroup.destroyEach()
      survivalTime=0
      }
  }
    
  }
     survivalTime= survivalTime + Math.round(frameRate()/60)
     text("survivalTime;"+survivalTime,300,50)
     drawSprites()
}
function spawnbananas(){
  rand1=Math.round(random(100,400)) 
  banana=createSprite(550,50,50,50)
  banana.scale=0.1
  banana.velocityX=-5
  banana.lifetime=150
  banana.y=rand1
  banana.addImage(bananaImage)
  bananaGroup.add(banana)
}
function spawnObstacle(){
  obstacle=createSprite(600,550,50,50)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-5
  obstacle.scale=0.4
  obstacle.lifetime=200
  obstacleGroup.add(obstacle)
}