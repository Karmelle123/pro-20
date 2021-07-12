var bg,sleep,brush,gym,eat,drink,move


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  bg=loadImage("iss.png")
  sleep=loadAnimation("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png", "drink2.png")
  move=loadAnimation("move.png","move1.png")
}

function draw() {
  var astronuant=createSprite(300,200)
  astronuant.addAnimation("sleeping", sleep)
  astronuant.scale=0.1

  var astronuant3=createSprite(490,200)
  astronuant3.addAnimation("gym", gym)
  astronuant3.scale=0.1

  background(bg);  
  drawSprites();
}