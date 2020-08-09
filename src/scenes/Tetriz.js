import Playfield from '../classes/Playfield';

/**
 * Tetriz class.
 */
export default class Tetriz extends Phaser.Scene {
    /**
     * Tetriz constructor.
     */
    constructor() {
        super('GameScene');

        this.playfield = new Playfield();

        console.log('game constructor');
    }

    preload() {
        console.log('game preload');
    }

    create() {
        console.log('game create');
    }
}