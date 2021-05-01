

var dog,dogImg,dogHappy;
var database,foodStock,foodS;

function preload()
{
  dogImg=loadImage("images/dogimg.png")
  dogHappy=loadImage("images/dogimg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  dog=createSprite(350,400,10,10)
  dog.scale=0.25
  dog.addImage(dogImg)
  foodStock=database.ref('food');

  foodStock.on("value",readStock)
}


function draw() { 

  background(46,139,87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy)

  }
  drawSprites();
  fill(255);
  stroke(0)
  textSize(27)
  text("foodRemaining:"+foodS,220,220);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

}
