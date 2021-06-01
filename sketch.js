var bg, bg2;
var form,system,code,security;
var score = 0;

function preload()
 {
   //loading the img
   bg= loadImage("aladdin_cave.jpg")
   //load image for the treasure background
   bg2 = loadImage("aladdin_cave2.jpg")
}

function setup() 
{
  createCanvas(1000,500);

  security = new Security();
  system = new System(); 
}

function draw()
{

  background(bg);
  //calling clues function
  clues();
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  // add code for changing the background to the treasure background
  //if score is 3(all answers are coreect)...
  if(score === 3)
  {
    //chnage the bg and write treasure unlocked
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED!",270, 150);
  }

  drawSprites()
}