// game
import {Game} from "./src/game";

const game = Game.getInstance();

window.game = game;

// react

import React from "react";
import ReactDOM from "react-dom";


let HelloWorld = () => {
    return <h1>Hello there World!</h1>
};

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("root")
);

