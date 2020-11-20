
 
  //Create variables here
var  dog, happyDog
var database, foodS, foodStock

function preload()
{
  //load images here
  this.image = loadImage ("Dog.png");
  this.image = loadImage ("happydog.png");
}

function setup() {
  createCanvas(500, 500);

}


function draw() {  
background ("46,139,87");
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydog.png)
}
  drawSprites();
  text ("Note: Press UP_ARROW Key To Feed Drago Milk")
  textSize = 30
  fill("white")
  stroke(3)
  //add styles here
// Function to read values from DB
function readStock(data){
if(x<=0){
  x=0;
} else {
  x=x-1;
}
  foodS=data.val();
}
// Function to write values in DB
function writeStock(x){
  database.ref('/').update({
   Food:x 
  })
}
}



