var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
 bullet= createSprite(50, 200, 20, 8);
 thickness=random(22,83)
 bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  this.wall.shapeColor="rgb(80,80,80)";
  this.bullet.shapeColor="white";
}

function draw() {
  background(0);  
  createEdgeSprites();
   bullet.velocityX=speed;
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10){
      this.wall.shapeColor="red";
      if (damage<10){
        this.wall.shapeColor="green";
      }
    }
  }

   
  drawSprites();
  }

  function hasCollided(bullet,wall){

    bulletRightEdge=bullet.x;
    wallLeftEdge=wall.x;  
     if (bulletRightEdge>=wallLeftEdge){
     return true
    }
    return false;
  }