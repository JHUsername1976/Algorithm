var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(400, 100, 50, 80);
 movingRect = createSprite(400,800,80,30);
 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";

 movingRect.velocityY = -5;
 fixedRect.velocityY = 5;

}

function draw() {
  background(0);  
 // movingRect.x = mouseX;
  //movingRect.y = mouseY;

  //an algorithm that functions like the ".isTouching" function
  // if this was ...fixedRect.x === fixedRect..., it would only work if its exactly touching it
  // if there is no && + that code, it would work when it goes on right side or left side, doesnt need to be in it.
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x -movingRect.x < fixedRect.width/2 + movingRect.width/2) {

      movingRect.velocityX =  movingRect.velocityX *(-1) ;
      fixedRect.velocityX =  fixedRect.velocityX *(-1) ;

    }
    /* this below is for y axis*/
    
    
  if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
    fixedRect.y -movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.velocityY =  movingRect.velocityY *(-1) ;
      fixedRect.velocityY =  fixedRect.velocityY *(-1) ;
  }

  
  drawSprites();
}