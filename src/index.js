import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import background from './assets/background-castle.jpg'
import TitleScene from './scenes/TitleScene'

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image('background', background)
    }
      
    create ()
    {
        // const background = this.add.image(300, 300, 'background')
        // let backgroundScaleFactor = 600/1080;
        // background.scaleX = backgroundScaleFactor;
        // background.scaleY = backgroundScaleFactor;



        const logo = this.add.image(400, 300, 'logo');
        let creditStatement = this.add.text(400, 100, 'POWERED BY').setFont('50px Ariel')
        creditStatement.setOrigin(0.5, 0.5)
        creditStatement.setFontSize = 200;
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 1000,
            ease: "Power2",
            yoyo: true,
            loop: 0
        });

        this.input.once('pointerdown', function () {
            game.scene.start('TitleScene')
        })
    }



}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    // scene: [MyGame, TitleScene]
};

const game = new Phaser.Game(config);
game.scene.add('MyGame', MyGame);
game.scene.start('MyGame')

game.scene.add('TitleScene', TitleScene);
// game.scene.start('TitleScene')