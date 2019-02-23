import {GameElement} from "./gameElement";

let gameInstance;
/** Game class is an entry point of game. */
export class Game {

    /** Default constructor. */
    constructor() {
        this.name = 'tetris';

        this.gameEl1 = new GameElement('green');
        this.gameEl2 = new GameElement('red');
    }

    /** Singletone function. */
    static getInstance() {
        if (gameInstance) {
            return gameInstance;
        } else {
            gameInstance = new Game();
            return gameInstance;
        }
    }
}