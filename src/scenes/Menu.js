import logoImg from '../assets/tetriz-logo.png';
import startGameImg from '../assets/button_start-game.png';
import startGameOverImg from '../assets/button_start-game_over.png';
import highscoresImg from '../assets/button_highscores.png';
import highscoresOverImg from '../assets/button_highscores_over.png';
import {HEIGHT, WIDTH} from "../constants";

/**
 * Menu class.
 */
export default class Menu extends Phaser.Scene {
    /**
     * Menu constructor.
     */
    constructor() {
        super({key: 'MenuScene', active: true});
    }

    preload() {
        this.load.image('logo', logoImg);
        this.load.image('startGame', startGameImg);
        this.load.image('startGameOver', startGameOverImg);
        this.load.image('highscores', highscoresImg);
        this.load.image('highscoresOver', highscoresOverImg);
    }

    create() {
        const logo = this.add.image(WIDTH / 2, HEIGHT / 4, 'logo');
        logo.setScale(0.75, 0.75);

        const startButton = this.add.image(WIDTH / 2, HEIGHT * 3 / 4, 'startGame').setInteractive();
        startButton.on('pointerdown', () => {
            startButton.setTexture('startGameOver');

            this.time.addEvent({
                delay: 200,
                callback: () => {
                    this.game.scene.stop('MenuScene');
                    this.game.scene.start('GameScene');
                }
            });
        });
        startButton.on('pointerout', () => {
            startButton.setTexture('startGame');
        });
        startButton.on('pointerup', () => {
            startButton.setTexture('startGame');
        });

        const highscoresButton = this.add.image(WIDTH / 2, HEIGHT * 3 / 4 + startButton.height + 10, 'highscores').setInteractive();
        highscoresButton.on('pointerdown', () => {
            highscoresButton.setTexture('highscoresOver');

            this.time.addEvent({
                delay: 200,
                callback: () => {
                    this.game.scene.stop('MenuScene');
                    this.game.scene.start('HighscoresScene');
                }
            });
        });
        highscoresButton.on('pointerout', () => {
            highscoresButton.setTexture('highscores');
        });
        highscoresButton.on('pointerup', () => {
            highscoresButton.setTexture('highscores');
        });
    }
}