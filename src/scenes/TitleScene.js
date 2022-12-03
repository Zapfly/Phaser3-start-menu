import background from '../assets/background-castle.jpg'

class TitleScene extends Phaser.Scene{
    constructor() {
        super({key: 'TitleScene'});

    }
    preload() {
        this.load.image('background_image',);
        this.load.image('background-castle', background);

    }
    create() {
        const background = this.add.image(300, 300, 'background-castle')
        let backgroundScaleFactor = 600/1080;
        background.scaleX = backgroundScaleFactor;
        background.scaleY = backgroundScaleFactor;
    }
}

export default TitleScene;