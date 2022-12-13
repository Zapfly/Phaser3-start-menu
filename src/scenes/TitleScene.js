import background from '../assets/background-castle.jpg'
// import menuButtons from '../assets/grey buttons.png'
import startButton from '../assets/start-button.png'

class TitleScene extends Phaser.Scene{
    constructor() {
        super({key: 'TitleScene'});

    }
    preload() {
        this.load.image('background_image',);
        this.load.image('background-castle', background);
        this.load.image('start button', startButton)

        // this.load.spriteSheet('buttons', '../assets/grey-buttons.png', { frameWidth: 158, frameHeight: 52})
    }
    create() {

        // let buttonStyle = {
        //     'width' : 'fit-content',
        //     'padding' : '10px'
        // }


        // let startButton = document.createElement(300, 300, 'div', null, 'Start');


        
        const background = this.add.image(300, 300, 'background-castle');
        let backgroundScaleFactor = 600/1080;
        background.scaleX = backgroundScaleFactor;
        background.scaleY = backgroundScaleFactor;
        

        // let menuButton = this.add.rectangle(400, 300, 100, 40, 0xa2a2a2)
        let buttons = this.add.group();

        let startMenuButton = buttons.create(400, 100, 'start button').setInteractive()
        

        
    }
}

export default TitleScene;