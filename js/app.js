var allEnemies = [];

var Drawable = function(sprite, x, y) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
}

// Draw the enemy on the screen, required method for game
Drawable.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    Drawable.call(this, 'images/enemy-bug.png', x, y);
    this.speed = speed;
    allEnemies.push(this);
};

Enemy.prototype = Object.create(Drawable.prototype)
Enemy.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function() {
    Drawable.call(this, 'images/char-boy.png', 200, 390);
    this.speed = 1;
};

Player.prototype = Object.create(Drawable.prototype)
Player.constructor = Player;

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.loc += this.speed*dt;
};

Player.prototype.handleInput = function(key) {
    var xDelta = 100;
    var yDelta = 85;
    if (key != undefined) {
      switch (key) {
        case 'left':
          this.x -= xDelta
          break;
        case 'up':
          this.y -= yDelta
          break;
        case 'right':
          this.x += xDelta
          break;
        case 'down':
          this.y += yDelta
          break;
        default:
          console.log('heyyy' + key);
      }
    }
    console.log(key);
    console.log('x=' + this.x + ' y=' + this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
new Enemy(15, 15, 10);
new Enemy(35, 35, 30);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
