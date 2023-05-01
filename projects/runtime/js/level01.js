var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE


        function createSawBlade(x, y) {

            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);


            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap("img/sawblade.png");
            obstacleImage.x = -hitZoneSize
            obstacleImage.y = -hitZoneSize
            sawBladeHitZone.addChild(obstacleImage);


        }

        for (var i = 0; i < 10; i++) {
            createSawBlade(Math.random() * 500, Math.random() * 400)
        }

        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "gray");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = 400;
        enemy.y = groundY - 50;
        game.addGameItem(enemy);
        enemy.velocityX = 1;
        enemy.rotationalVelocity = 10

        enemy.onPlayerCollision = function () {
            game.increaseScore(100);
            enemy.fadeOut();
            game.changeIntegrity(-10)
        };
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
