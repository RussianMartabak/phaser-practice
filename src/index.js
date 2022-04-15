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

var platforms;
function create ()
{   
    //putting asset
    this.add.image(400, 300, 'sky');//x, y, name of image
    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

}

function update ()
{
}