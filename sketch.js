var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody,Circle;
var rightarrow ,leftarrow


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	leftarrowImg=loadImage("left arrow.png")

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();
	fairy = createSprite(520, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    



	engine = Engine.create();
	world = engine.world;

	var rect_options ={
		restitution:0, isStatic:false
	}

	starBody = Bodies.circle(650,30,10,rect_options);
	World.add(world, starBody);


	ground=Bodies.rectangle(620,520,100,100,{isStatic:true
	})
	World.add(world,ground);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);



  fairy.x=ground.x
 ground.x=fairy.x

  star.x=starBody.position.x
  star.y=starBody.position.y
 
 
 


  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(starBody.position.x,starBody.position.y,0.01,0.01);

  rectMode(CENTER);
  rect(fairy.x,fairy.y,0.01,0.01)

  
  
  fairy.x=mouseX

  
   

  if(keyDown("SPACE")){
	keyPressed();
  }
  
 console.log(star.y)

  drawSprites();

}

function keyPressed() {
	//write code here
   star.velocityY=2
}
