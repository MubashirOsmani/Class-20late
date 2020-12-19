var fixedobj, movingobj;
function setup() {
 createCanvas(1200,800);
  fixedobj = createSprite(200,200,50,80);
  fixedobj.shapeColor = "red";
  movingobj= createSprite(400, 200, 80, 30);
  movingobj.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingobj.y=World.mouseY;
  movingobj.x=World.mouseX;
  if(movingobj.x-fixedobj.x<fixedobj.width/2+movingobj.width/2 &&
    fixedobj.x-movingobj.x<fixedobj.width/2+movingobj.width/2 &&
    fixedobj.y-movingobj.y<fixedobj.height/2+movingobj.height/2 &&
    movingobj.y-fixedobj.y<fixedobj.height/2+movingobj.height/2)
    {
    fixedobj.shapeColor = "green";
    movingobj.shapeColor = "green";
  }
  console.log(fixedobj.x);
  console.log(fixedobj.width);
  console.log(movingobj.x);
  console.log(movingobj.width);
  drawSprites();
}