var fixed, moving;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  fixed = createSprite(400, 200, 50, 50); 
  fixed.shapeColor = 'green'; 
  fixed.debug = true; 
  moving = createSprite(500, 200, 100, 50); 
  moving.shapeColor = 'green'; 
  moving.debug = true;
}

function draw() {
  background(255,255,255);  

  moving.x = World.mouseX; 
  moving.y = World.mouseY; 
  if(moving.x-fixed.x < moving.width/2 + fixed.width/2 &&
    fixed.x-moving.x < fixed.width/2 + moving.width/2 &&
    fixed.y-moving.y <fixed.height/2 + moving.height/2 &&
    moving.y-fixed.y <moving.height/2 + fixed.height/2){

     moving.shapeColor = 'red'; 
     fixed.shapeColor = 'red'; 
    } 
    else{
       moving.shapeColor = 'green'; 
       fixed.shapeColor = 'green';
       }
  drawSprites();
}