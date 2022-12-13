import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import background from './assets/background-castle.jpg'
import TitleScene from './scenes/TitleScene'

function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}

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
        // loadFont('MontserratVariableFont', './fonts/Montserrat-VariableFont_wght.ttf')
        // loadFont('Montserrat-ExtraBold', './fonts/Montserrat-ExtraBold.ttf')
    }
      
    create ()
    {
        // const background = this.add.image(300, 300, 'background')
        // let backgroundScaleFactor = 600/1080;
        // background.scaleX = backgroundScaleFactor;
        // background.scaleY = backgroundScaleFactor;



        const logo = this.add.image(400, 300, 'logo');
        let creditStatement = this.add.text(400, 100, 'POWERED BY', { fontFamily: 'Montserrat-ExtraBold'})
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

        // let menuButton = this.add.dom(200, 200, 'div', 'background-color: green;')
    }



}


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    dom: {
        createContainer: true
    },
    // scene: [MyGame, TitleScene]
};

const game = new Phaser.Game(config);
game.scene.add('MyGame', MyGame);
// game.scene.start('MyGame')

game.scene.add('TitleScene', TitleScene);
game.scene.start('TitleScene')