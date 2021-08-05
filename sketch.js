var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(movingRect, fixedRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }
  drawSprites();
}

function isTouching(a, b){
  if(a.x - b.x < b.width/2 + a.width/2 && 
    b.x - a.x < b.width/2 + a.width/2 &&
    a.y - b.y < b.height/2 + a.height/2 &&
    b.y - a.y < b.height/2 + a.height/2){
      
      return true;
      
  }else{
      return false;
  }
}