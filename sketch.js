var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background("white");
if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x+2
}
if(keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x - 2
}
  drawSprites();
}




