var link,linkPos,linkMov
var gameState,edges,life,score;
var bgImg,music,gameOver
var edges,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var og1,og2,og3,og4;
var oui,odi,oli,ori;
var ldi,lui,lli,lri;
var lda,lua,lla,lra;
var lsd,lsu,lsl,lsr;
var lbd,lbu,lbl,lbr;
var arrowGroup,arrow,aru,ard,arl,arr;
var fiu,fid,fir,fil;
var fg1,fg2,fg3,fg4
var boomerang,arrowCount;
var horisword,vertisword,horishield,vertishield;
var num,num1

function preload() {
  bgImg=loadImage("assets/bg.PNG")
  music=loadSound("assets/02 Overworld (1).mp3")
  gameOver=loadSound("assets/07 Game Over (1).mp3")

  boomy=loadAnimation("assets/boomerang.png")
  oui=loadAnimation("assets/u1.png","assets/u2.png")
  odi=loadAnimation("assets/d1.png","assets/d2.png")
  oli=loadAnimation("assets/l1.png","assets/l2.png")
  ori=loadAnimation("assets/r1.png","assets/r2.png")

  ldi=loadAnimation("assets/down.png")
  lui=loadAnimation("assets/up1.png")
  lri=loadAnimation("assets/rite2.png")
  lli=loadAnimation("assets/left2.png")

  lsd=loadAnimation("assets/dstab.png")
  lsu=loadAnimation("assets/ustab.png")
  lsr=loadAnimation("assets/rstab.png")
  lsl=loadAnimation("assets/lstab.png")

  lda=loadAnimation("assets/down1.png","assets/down.png")
  lua=loadAnimation("assets/up1.png","assets/up2.png")
  lra=loadAnimation("assets/rite2.png","assets/right2.png")
  lla=loadAnimation("assets/left1.png","assets/left2.png")
  //hudImg=loadImage("assets/HUD.png")

  aru=loadAnimation("assets/uarrow.png")
  ard=loadAnimation("assets/darrow.png")
  arl=loadAnimation("assets/larrow.png")
  arr=loadAnimation("assets/rarrow.png")

  lbd=loadAnimation("assets/dair.png")
  lbu=loadAnimation("assets/uair.png")
  lbl=loadAnimation("assets/lair.png")
  lbr=loadAnimation("assets/rair.png")

  fiu=loadAnimation("assets/uflame1.png","assets/uflame2.png")
  fid=loadAnimation("assets/dflame1.png","assets/dflame2.png")
  fir=loadAnimation("assets/rflame1.png","assets/rflame2.png")
  fil=loadAnimation("assets/lflame1.png","assets/lflame2.png")

}

function setup() {
  createCanvas(600,600)
  edges=createEdgeSprites();
  horisword=createSprite(1000,1000,10,30)
  vertisword=createSprite(1000,1000,30,10)
  horishield=createSprite(1000,1000,5,50)
  vertishield=createSprite(1000,1000,50,5)
  //horishield.shapeColor("blue")
  //vertishield.shapeColor("blue")
  arrow=createSprite(1000,1000,30,10)
  
  arrowCount=3

  linkMov="still"
  b1=createSprite(250,70,10,250)
  b2=createSprite(340,70,10,250)
  b3=createSprite(120,190,250,10)
  b4=createSprite(470,190,250,10)
  b5=createSprite(250,380,10,250)
  b6=createSprite(340,380,10,250)
  b7=createSprite(120,260,250,10)
  b8=createSprite(470,260,250,10)
  b9=createSprite(300,465,100,10)

  link=createSprite(300,230,10,10)
  link.addAnimation("down",ldi)
  link.addAnimation("up",lui)
  link.addAnimation("down2",lda)
  link.addAnimation("right",lri)
  link.addAnimation("left",lli)  
  link.addAnimation("right2",lra)
  link.addAnimation("up2",lua)
  link.addAnimation("left2",lla)
  link.addAnimation("sdown",lsd)
  link.addAnimation("sup",lsu)
  link.addAnimation("sleft",lsl)
  link.addAnimation("sright",lsr)
  link.addAnimation("adown",lbd)
  link.addAnimation("aup",lbu)
  link.addAnimation("aleft",lbl)
  link.addAnimation("aright",lbr)


  life=5
  score=0

 gameState = "Playing";
 linkPos="down"
 music.play();
 music.loop();

fill("red")

og1=createGroup()
og2=createGroup()
og3=createGroup()
og4=createGroup()
fg1=createGroup()
fg2=createGroup()
fg3=createGroup()
fg4=createGroup()
arrowGroup=createGroup()
}

function draw() {
  textSize(35)
  if (linkMov==="still"){
    if(linkPos==="up"){
      link.changeAnimation("up",lui)
  
    }
    if(linkPos==="down"){
      link.changeAnimation("down",ldi)
    
    }
    if(linkPos==="left"){
      link.changeAnimation("left",lli)
  
    }
    if(linkPos==="right"){
      link.changeAnimation("right",lri)
  
    }  
  }
  if(link.vlocityX===0&&link.velocityY===0){
    linkMov="still"
  }
  if(life!==0){
 background(bgImg)
}
if(life>=20){
  life=20
}
arrowGroup.bounceOff(horishield)
arrowGroup.bounceOff(vertishield)

og1.collide(horishield)
og1.collide(vertishield)
og2.collide(horishield)
og2.collide(vertishield)
og3.collide(horishield)
og3.collide(vertishield)
og4.collide(horishield)
og4.collide(vertishield)
 link.setVelocity(0,0)
 link.bounceOff(edges)
 link.bounceOff(b1)
 link.bounceOff(b2)
 link.bounceOff(b3)
 link.bounceOff(b4)
 link.bounceOff(b5)
 link.bounceOff(b6)
 link.bounceOff(b7)
 link.bounceOff(b8)
 link.bounceOff(b9)
 b1.visible=false
 b2.visible=false
 b3.visible=false
 b4.visible=false
 b5.visible=false
 b6.visible=false
 b7.visible=false
 b8.visible=false
 b9.visible=false
 horisword.visible=false
 vertisword.visible=false
 link.setCollider("rectangle",0,0,100,100)
 //console.log(linkPos)
 if(gameState==="Playing"){
 if(keyWentDown("a")&&linkMov==="still"){
  if(linkPos==="up"){
    link.changeAnimation("sup",lsu)
    horisword.x=link.x-5
    horisword.y=link.y-30
  }
  if(linkPos==="down"){
    link.changeAnimation("sdown",lsd)
    horisword.x=link.x
    horisword.y=link.y+30
  }
  if(linkPos==="left"){
    link.changeAnimation("sleft",lsl)
    vertisword.x=link.x-33
    vertisword.y=link.y+3
  }
  if(linkPos==="right"){
    link.changeAnimation("sright",lsr)
    vertisword.x=link.x+33
    vertisword.y=link.y+3
  }
 }
 if(keyDown("d")&&linkMov==="still"){
  if(linkPos==="up"){
    vertishield.x=link.x
    vertishield.y=link.y-20
  }
  if(linkPos==="down"){
    vertishield.x=link.x
    vertishield.y=link.y+20
  }
  if(linkPos==="left"){
    horishield.y=link.y
    horishield.x=link.x-20
  }
  if(linkPos==="right"){
    horishield.y=link.y
    horishield.x=link.x+20
  }
 }
 if(keyWentUp("d")){
  horishield.x=1000
  horishield.y=1000
  vertishield.x=1000
  vertishield.y=1000}
 if(keyWentDown("w")&&arrowCount!==0&&linkMov==="still"){
  if(linkPos==="up"){
    link.changeAnimation("aup",lbu)
    uarow()
  }
  if(linkPos==="down"){
    link.changeAnimation("adown",lbd)
    darow()
  }
  if(linkPos==="left"){
    link.changeAnimation("aleft",lbl)
    larow()
  }
  if(linkPos==="right"){
    link.changeAnimation("aright",lbr)
    rarow()
  }
  if(keyDown("space")){
    if(linkPos==="up"){
      link.changeAnimation("aup",lbu)
      boomerang=createSprite(link.x,link.y-30,30,30)
      boomerang.addAnimation("doink",boomy)
      //boomerang.rotationSpeed=-10
      boomerang.scale=0.7
      boomerang.velocityY=-4
    }
    if(linkPos==="down"){
      link.changeAnimation("adown",lbd)
      boomerang=createSprite(link.x,link.y+30,30,30)
      boomerang.addAnimation("doink",boomy)
      //boomerang.rotationSpeed=-10
      boomerang.scale=0.7
      boomerang.velocityY=4
    }
    if(linkPos==="left"){
      link.changeAnimation("aleft",lbl)
      boomerang=createSprite(link.x-30,link.y,30,30)
      boomerang.addAnimation("doink",boomy)
      //boomerang.rotationSpeed=-10
      boomerang.scale=0.7
      boomerang.velocityX=-4
    }
    if(linkPos==="right"){
      link.changeAnimation("aright",lbr)
      boomerang=createSprite(link.x+30,link.y,30,30)
      boomerang.addAnimation("doink",boomy)
      //boomerang.rotationSpeed=-10
      boomerang.scale=0.7
      boomerang.velocityX=4
    }}
  if(keyWentUp("w")){
    
    if(linkPos==="up"){
      link.changeAnimation("up",lui)
  
    }
    if(linkPos==="down"){
      link.changeAnimation("down",ldi)
    
    }
    if(linkPos==="left"){
      link.changeAnimation("left",lli)
  
    }
    if(linkPos==="right"){
      link.changeAnimation("right",lri)
  
    }
   }
 }
 flames()
 if(keyWentUp("a")){
  horisword.x=1000
  horisword.y=1000
  vertisword.x=1000
  vertisword.y=1000
  if(linkPos==="up"){
    link.changeAnimation("up",lui)

  }
  if(linkPos==="down"){
    link.changeAnimation("down",ldi)
  
  }
  if(linkPos==="left"){
    link.changeAnimation("left",lli)

  }
  if(linkPos==="right"){
    link.changeAnimation("right",lri)

  }
 }
 if(frameCount%100===0){
  var num=Math.round(random(1,4))
  switch(num){
    case 1:spawnup()
    break
    case 2:spawndown()
    break
    case 3:spawnleft()
    break
    case 4:spawnright()
    break
  }
}
 if(vertisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(vertisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(vertisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}

if(vertisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(horisword.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(horisword.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og1)){
  og1.destroyEach();
  score=score+1
  num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
} 
if(arrow.isTouching(og2)){
 og2.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og3)){
 og3.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
if(arrow.isTouching(og4)){
 og4.destroyEach();
 score=score+1
 num1=Math.round(random(1,2))
  switch(num1){
    case 1:arrowCount++
    break
    case 2:life++
    break
  }
}
 if(keyDown(UP_ARROW)){
  linkMov==="moving"
  link.changeAnimation("up2",lua)
  link.velocityY=-2
  linkPos="up"
}
if(keyDown(DOWN_ARROW)){
  linkMov==="moving"
  link.changeAnimation("down",lda)
  link.velocityY=2
  linkPos="down"
}
if(keyDown(LEFT_ARROW)){
  linkMov==="moving"
  link.changeAnimation("left2",lla)
  link.velocityX=-2
  linkPos="left"
}
if(keyDown(RIGHT_ARROW)){
  linkMov==="moving"
  link.changeAnimation("right2",lra)
  link.velocityX=2
  linkPos="right"
}
if(link.isTouching(og1)||link.isTouching(og2)||link.isTouching(og3)||link.isTouching(og4)){
  life=life-1;
  if(link.isTouching(og1)){og1.destroyEach()}
  if(link.isTouching(og2)){og2.destroyEach()}
  if(link.isTouching(og3)){og3.destroyEach()}
  if(link.isTouching(og4)){og4.destroyEach()}
}
fill("red")
text(life,150,500)
text(score,85,580)
fill("white")
textSize(15)
text(arrowCount,357,575)
if(life===0){
  background(0)
  
  end()
}
}

 link.scale=0.4
  drawSprites();

  


}
function spawnup(){
  oktou=createSprite(300,450,10,10)
  oktou.addAnimation("oup",oui)
  oktou.scale=0.4  
  oktou.velocityY=-3
  og4.add(oktou)
}
function spawndown(){
  oktou=createSprite(300,0,10,10)
  oktou.addAnimation("odown",odi)
  oktou.scale=0.4  
  oktou.lifetime=700
  oktou.velocityY=3
  if(oktou.y===500){
    oktou.y=700
  }
  og3.add(oktou)
}
function spawnleft(){
  oktou=createSprite(0,225,10,10)
  oktou.addAnimation("olp",ori)
  oktou.scale=0.4  
  oktou.velocityX=3
  og2.add(oktou)
}
function spawnright(){
  oktou=createSprite(600,225,10,10)
  oktou.addAnimation("orp",oli)
  oktou.scale=0.4  
  oktou.velocityX=-3
  og1.add(oktou)
}
function end(){
  gameState="End"
  music.stop();
  gameOver.play();
  
  background(0)
  fill("white")
  textSize(45)
  text("Game Over",200,300)
  
  link.destroy()
  og1.destroyEach()
  og2.destroyEach()
  og3.destroyEach()
  og4.destroyEach()
}
function uarow(){
  arrow=createSprite(link.x,link.y-20,10,10)
  arrow.addAnimation("uppy",aru)
  arrow.scale=0.4
  arrow.velocityY=-5
  arrowCount=arrowCount-1
  arrowGroup.add(arrow) 
}
function darow(){
  arrow=createSprite(link.x,link.y+20,10,10)
  arrow.addAnimation("dppy",ard)
  arrow.scale=0.4
  arrow.velocityY=5
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
function larow(){
  arrow=createSprite(link.x-20,link.y,10,10)
  
  arrow.addAnimation("rppy",arl)
  arrow.scale=0.4
  arrow.velocityX=-5
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
function rarow(){
  arrow=createSprite(link.x+20,link.y,10,10)
  arrow.addAnimation("lppy",arr)
  arrow.scale=0.4
  arrow.velocityX=5
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
}
function flames(){
  if(proximity(og1,link)&&frameCount){
    fire=createSprite(oktou.x,oktou.y-30,10,10)
    fire.addAnimation("upflame",fiu)
    fire.scale=0.5
    fire.velocityY=-3
    fg1.add(fire)
  }
  if(proximity(og2,link)&&frameCount){
    fire=createSprite(oktou.x,oktou.y+30,10,10)
    fire.addAnimation("downflame",fid)
    fire.scale=0.5
    fire.velocityY=3
    fg2.add(fire)
  }
  if(proximity(og3,link)&&frameCount){
    fire=createSprite(oktou.x-30,oktou.y,10,10)
    fire.addAnimation("leftflame",fil)
    fire.scale=0.5
    fire.velocityX=-3
    fg3.add(fire)
  }
  if(proximity(og4,link)&&frameCount){
    fire=createSprite(oktou.x+30,oktou.y,10,10)
    fire.addAnimation("rflame",fir)
    fire.scale=0.5
    fire.velocityX=3
    fg4.add(fire)
  }
}
function proximity(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2+80
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2+80&&
    obj1.y - obj2.y < obj2.height/2 + obj1.height/2+80
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2+80){
    return true
  }
  else{
    return false
  }
}