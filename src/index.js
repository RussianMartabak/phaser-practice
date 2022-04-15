import Phaser from "phaser";
import sky from './assets/sky.png';
import ground from './assets/platform.png';
import spriteSheetDude from './assets/dude.png';


var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    parent: document.querySelector('#canva')
    
};
var game = new Phaser.Game(config);

function preload ()
{
    //loading assets
    this.load.image('sky', sky);
    this.load.image('ground', ground);
    this.load.spritesheet('dude',
    spriteSheetDude,
    {
        frameWidth: 32,
        frameHeight: 48
    }
    )
}

var platforms, player, cursors;
function create ()
{   
    //putting asset
    this.add.image(400, 300, 'sky');//x, y, name of image
    platforms = this.physics.add.staticGroup();//static body cannot move or affected by gravity


    platforms.create(400, 568, 'ground').setScale(2).refreshBody();//refreshbody so the physics
    //adapt to changed size
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    //put player
    player = this.physics.add.sprite(100, 0, 'dude');
    this.physics.add.collider(player, platforms);

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);//no clipping

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 //means yes loop it
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    
}

function update ()
{
    //controls
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down)
{
    player.setVelocityY(-330);
}
}