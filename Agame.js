///game goes here
'use strict';


var game = new Phaser.Game(800, 600, Phaser .AUTO, 'game',
    {preload:preload,create:create,update:update,render:render});


var player;
var cursors;
var backround;
var enemy;


function preload() {
  game.load.image('backround', 'backround.gif');
  game.load.image('player', 'player.gif');
  game.load.image('enemy', 'enemy.gif');
}

function create() {
  backround = game.add.tileSprite(0,0,800,600,'backround');
  backround.autoScroll(100,0);
  enemy = game.add.sprite(744,300,'enemy');
  game.physics.enable(enemy, Phaser.Physics.ARCADE);
  player = game.add.sprite(744,300,'player');
  game.physics.enable(submarine, Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();
}

function update() {
  game.physics.arcade.overlap(enemy, player, collisionHandler, null, this);

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  ///if (! enemy.shooting) {
  ///  ltorpedo.body.velocity.x = 0;
  //  ltorpedo.body.velocity.x = 0;
  //  ltorpedo.x = submarine.x + 16;
  //  ltorpedo.y = submarine.y + 16;
  //  ltorpedo.renderable = true;
  //}

  if (cursors.up.isDown) {
    player.body.velocity.y = -300;
    //if (! ltorpedo.shooting) {
    //ltorpedo.body.velocity.x = -300;
    //}
  }

  else if (cursors.down.isDown) {
    player.body.velocity.y = 300;
    //if (! player.shooting) {
     // ltorpedo.body.velocity.x = 300;
    //}
  }

  //if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
  //  ltorpedo.body.velocity.x = -1000;
  //  ltorpedo.shooting = true;

  //}

  //if (ltorpedo.x < 0) ltorpedoReset();
//}

function render() {}

//function collisionHandler(player, enemy) {
//  ltorpedoReset();
//  repositionSquid();
//}
//function repositionSquid() {
//    squid.x = game.rnd.integerInRange(100,780);
//    squid.y = game.rnd.integerInRange(20, 540);  
//}
//function ltorpedoReset() {
//    ltorpedo.shooting = false;
//    ltorpedo.body.velocity.x = 0;
//    ltorpedo.body.velocity.y = 0;
//}
