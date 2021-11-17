var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cceac259-ed9c-445b-93e8-3baeaa0feb34","3399f5b4-7eda-42d3-a82b-efbef1dfc587","06a5abd7-4c04-4379-9908-cc8fdbcc8821","8adbb665-19db-41cb-8438-86b2f748d53e"],"propsByKey":{"cceac259-ed9c-445b-93e8-3baeaa0feb34":{"name":"lula","sourceUrl":"assets/v3/animations/ljpdL3HSKkrHhCk5IJye58ezmTnvDD8tADsq2Uh_pzQ/cceac259-ed9c-445b-93e8-3baeaa0feb34.png","frameSize":{"x":256,"y":256},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z1rDh4uh_7BTG.D0EzoGGX6O3kt3IOgh","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":256},"rootRelativePath":"assets/v3/animations/ljpdL3HSKkrHhCk5IJye58ezmTnvDD8tADsq2Uh_pzQ/cceac259-ed9c-445b-93e8-3baeaa0feb34.png"},"3399f5b4-7eda-42d3-a82b-efbef1dfc587":{"name":"objetivo","sourceUrl":"assets/v3/animations/ljpdL3HSKkrHhCk5IJye58ezmTnvDD8tADsq2Uh_pzQ/3399f5b4-7eda-42d3-a82b-efbef1dfc587.png","frameSize":{"x":256,"y":256},"frameCount":1,"looping":true,"frameDelay":4,"version":"GtzLbC.Ver6IVLRWE06uXEj1kihOagt.","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":256},"rootRelativePath":"assets/v3/animations/ljpdL3HSKkrHhCk5IJye58ezmTnvDD8tADsq2Uh_pzQ/3399f5b4-7eda-42d3-a82b-efbef1dfc587.png"},"06a5abd7-4c04-4379-9908-cc8fdbcc8821":{"name":"chave","sourceUrl":"assets/api/v1/animation-library/gamelab/z_8jxS2UoTgzleZGPPjQkNF91jc_0LhB/category_household_objects/joy_stick.png","frameSize":{"x":62,"y":99},"frameCount":1,"looping":true,"frameDelay":2,"version":"z_8jxS2UoTgzleZGPPjQkNF91jc_0LhB","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":62,"y":99},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z_8jxS2UoTgzleZGPPjQkNF91jc_0LhB/category_household_objects/joy_stick.png"},"8adbb665-19db-41cb-8438-86b2f748d53e":{"name":"guarda","sourceUrl":null,"frameSize":{"x":143,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"RWhFcEQar7pxDTczsgbUznCOLSeT0RZR","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":399},"rootRelativePath":"assets/8adbb665-19db-41cb-8438-86b2f748d53e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var lula = createSprite(200,200,25,25);
  lula.setAnimation("lula");
  lula.scale=0.15;
  var parede1 = createSprite(125,150,10,300);
  parede1.shapeColor="DimGray";
  var parede2 = createSprite(275,250,10,300);
  parede2.shapeColor="DimGray";
  var partidodastrevas = createSprite(350,350,50,50);
  partidodastrevas.setAnimation("objetivo");
  partidodastrevas.scale=0.4;
  var laserlock1 = createSprite(50,300,140,1);
  laserlock1.visible=false;
  var laserlock2 = createSprite(50,50,140,1);
  laserlock2.visible=false;
  var laser1 = createSprite(80,175,80,5);
  laser1.shapeColor="Red";
  var laser2 = createSprite(40,175,80,5);
  laser2.shapeColor="Red";
  var chave = createSprite(50,25,5,5);
  chave.setAnimation("chave");
  chave.scale=0.5;
  var porta = createSprite(275,50,10,100);
  porta.shapeColor="Orange";
  var guarda = createSprite(350,50,20,20);
  guarda.setAnimation("guarda");
  guarda.scale=0.25;
 
  guarda.velocityX=+2;

  laser1.velocityY=+3;
  laser2.velocityY=-3;


function draw() {
 
  background("Gray");
  createEdgeSprites();
  GameOver();
  GameOver2();
  GameOver3();
  WIN();
  
  if (keyDown("w")){
  lula.y=lula.y-3; }
  if (keyDown("s")){
  lula.y=lula.y+3; }
  if (keyDown("a")){
  lula.x=lula.x-3; }
  if (keyDown("d")){
  lula.x=lula.x+3; }
  
  lula.collide(parede1);
  lula.collide(parede2);
  lula.collide(edges);
  lula.collide(porta);
  laser1.bounceOff(laserlock1);
  laser1.bounceOff(laserlock2);
  laser2.bounceOff(laserlock1);
  laser2.bounceOff(laserlock2);
  guarda.bounceOff(porta);
  guarda.bounceOff(parede1);
  guarda.bounceOff(edges); 
  
  if (lula.isTouching(chave)){
   porta.y=porta.y-2;
 }

 
  drawSprites();
}

function GameOver(){
  if (lula.isTouching(laser1)){
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    guarda.velocityX = 0;
    
    if (keyDown("w")){
    lula.y=lula.y+3; }
    if (keyDown("s")){
    lula.y=lula.y-3; }
    if (keyDown("a")){
    lula.x=lula.x+3; }
    if (keyDown("d")){
    lula.x=lula.x-3; }
    
    textSize(30);
    fill("White");
    text("GAME OVER",25,350);
  }
}

function GameOver2(){
  if (lula.isTouching(laser2)){
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    guarda.velocityX = 0;
    
    if (keyDown("w")){
    lula.y=lula.y+3; }
    if (keyDown("s")){
    lula.y=lula.y-3; }
    if (keyDown("a")){
    lula.x=lula.x+3; }
    if (keyDown("d")){
    lula.x=lula.x-3; }
    
    textSize(30);
    fill("White");
    text("GAME OVER",25,350);
  }
}

function GameOver3(){
  if (lula.isTouching(guarda)){
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    guarda.velocityX = 0;
    
    if (keyDown("w")){
    lula.y=lula.y+3; }
    if (keyDown("s")){
    lula.y=lula.y-3; }
    if (keyDown("a")){
    lula.x=lula.x+3; }
    if (keyDown("d")){
    lula.x=lula.x-3; }
    
    textSize(30);
    fill("White");
    text("GAME OVER",25,350);
  }
}

function WIN(){
  if (lula.isTouching(partidodastrevas)){
    laser1.velocityY = 0;
    laser2.velocityY = 0;
    guarda.velocityX = 0;
    
    if (keyDown("w")){
    lula.y=lula.y+3; }
    if (keyDown("s")){
    lula.y=lula.y-3; }
    if (keyDown("a")){
    lula.x=lula.x+3; }
    if (keyDown("d")){
    lula.x=lula.x-3; }
    
    textSize(25);
    fill("LimeGreen");
    text("WIN COMPANHEIRO",25,350);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
