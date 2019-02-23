import {EventDispatcher} from "./EventDispatcher";

/** Typical game element. */
export class GameElement extends EventDispatcher{

    /** Default constructor. */
    constructor(color) {
        super();
        this.color = color;

        this.addEventListener(`gameEl.${color}`, () => {
            console.log(this);
        })
    }
}