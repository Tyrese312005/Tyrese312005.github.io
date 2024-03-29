$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(150, 700, 250, 150)
createPlatform(500,600 , 250, 300)
createPlatform(200,480, 250, 20 )
createPlatform(500, 350, 250,20 )
createPlatform(200, 230,250,20)
createPlatform(500,100,250,20)    
createPlatform(750,10,20,450)
createPlatform(800, 650, 200, 10)
createPlatform(1100, 650, 200 , 10)
createPlatform(970, 520, 200, 10)
createPlatform(1200,400 ,200,10)
createPlatform(750,400,200,10)
createPlatform(970,300,200,10)
createPlatform(1200,200,200,10)
createPlatform(750,200,200,10)
createPlatform(970,100,200,10)
    
    
    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    
    createCollectable("database",250,650,0,5)
    createCollectable("database", 200,650,0,5)
    createCollectable("database",300,650,0,5)
    createCollectable("diamond",250,430,0,5)
    createCollectable("grace",700,300,0,5)
    createCollectable("kennedi",250,180,0,5)
    createCollectable("max",700,50,0,5)
    createCollectable("database",1360,700,0,5)
    createCollectable("database",1360,700,0,5)
    createCollectable("database",1360,700,0,5)
    createCollectable("database",1360,700,0,5)
    createCollectable("database",1360,700,0,5)
    createCollectable("diamond",1360,360,0,5)
    createCollectable("diamond",770,360,0,5)
    createCollectable("grace",1050,250,0,5)
    createCollectable("kennedi",1360,160,0,5)
    createCollectable("kennedi",770,160,0,5)
    createCollectable("max",1050,60,0,5)
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay)
   createCannon("left", 400,2000)
   createCannon("left",150,2000)
   createCannon("bottom",720,2000)
   createCannon("bottom",1000,2000)
   createCannon("bottom",1250,2000)





    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
