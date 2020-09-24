var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var blue = createSprite(140, 20,15,15);
var red = createSprite(180, 20,15,15);
var green = createSprite(220, 20,15,15);
var yellow = createSprite(260, 20,15,15);
var black = createSprite(300, 20,15,15);
var purple = createSprite(100, 20,15,15);
var eraser = createSprite(50, 20,70,30);

var resetButton = createSprite(375, 385,25,15);
var pencil = createSprite(200, 200,5,5);


function draw() {
  pencil.x = World.mouseX;
  pencil.y = World.mouseY;
  
  blue.shapeColor = 'blue';
  black.shapeColor = 'black';
  purple.shapeColor = 'purple';
  red.shapeColor = 'red';
  green.shapeColor = 'green';
  yellow.shapeColor = 'yellow';
  eraser.shapeColor = 'grey';

  
  
  if (mousePressedOver(blue)) {
    pencil.shapeColor = 'blue';
    pencil.height = 5;
    pencil.width = 5;
  }
  
  if (mousePressedOver(red)) {
    pencil.shapeColor = 'red';
    pencil.height = 5;
    pencil.width = 5;
  }  
  
  if (mousePressedOver(green)) {
    pencil.shapeColor = 'green';
    pencil.height = 5;
    pencil.width = 5;
  }
  
  if (mousePressedOver(yellow)) {
    pencil.shapeColor = 'yellow';
    pencil.height = 5;
    pencil.width = 5;
  }  
  
  if (mousePressedOver(black)) {
    pencil.shapeColor = 'black';
    pencil.height = 5;
    pencil.width = 5;
  }
  
  if (mousePressedOver(purple)) {
    pencil.shapeColor = 'purple';
    pencil.height = 5;
    pencil.width = 5;
  }
  
  if (mousePressedOver(eraser)) {
    pencil.shapeColor = 'white';
    pencil.height = 30;
    pencil.width = 30;
  }
  
  if (pencil.y<50) {
    pencil.visible = false;
    
  }
  else{
    pencil.visible = true;
  }
  
  if (mousePressedOver(resetButton)) {
    background('white');
  }
  
  
  drawSprites()
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
