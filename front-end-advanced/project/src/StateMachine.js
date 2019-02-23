import {EventDispatcher} from "./EventDispatcher";

/** Available states. */
export const States = Object.freeze({
    START: 'start',
    PLAY: 'play',
    FINISH: 'finish'
});

/** Primitive state machine realisation. */
export class StateMachine extends EventDispatcher {
    constructor() {
        super();
        this.currentState = ''
    }

    setState(state) {
        this.currentState = state;
        this.dispatchEvent(state);
    }

    start() {
        this.setState(States.START);
    }

    play() {
        this.setState(States.PLAY);
    }

    finish() {
        this.setState(States.FINISH);
    }
}
