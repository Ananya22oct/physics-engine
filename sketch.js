var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(300,500,50,80);
  rect1.shapeColor="green";
  rect2=createSprite(500,300,80,50);
  rect2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,rect1)){
    movingRect.shapeColor="yellow";
    rect1.shapeColor="yellow";
  }
  else{
    movingRect.shapeColor="green";
    rect1.shapeColor="green";
  }
  drawSprites();
}
