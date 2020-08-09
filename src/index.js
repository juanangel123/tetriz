import Phaser from 'phaser';
import Tetriz from './scenes/Tetriz';
import Menu from './scenes/Menu';
import Highscores from './scenes/Highscores';
import {HEIGHT, WIDTH} from './constants';

const config = {
  type: Phaser.AUTO,
  width: WIDTH,
  height: HEIGHT,
  autoRound: true,
  autoFocus: true,
  autoCenter: true,
  scaleMode: Phaser.Scale.PORTRAIT,
  roundPixels: true,
  scene: [Menu, Highscores, Tetriz],
  backgroundColor: '#fafafa',
};

const game = new Phaser.Game(config);