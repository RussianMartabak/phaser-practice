import Phaser from "phaser";



var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    parent: document.querySelector('#canva')
    
};
var game = new Phaser.Game(config);

function preload ()
{
    //loading assets
}

function create ()
{
}

function update ()
{
}