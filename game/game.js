import { GameRederer } from ".GameRederer.js"
import { GameLogic } from ".GameLogic"

class Game 
{
    constructor()
    { 
        this.logic = new GameLogic(this);
        this.renderer = new GameRederer(this);
    }
    Init()
    {
        let scope = this;
        setInterval(function () { scope.doGameFrame() },33);
    }
    doGameFrame()
    {
        this.logic.logic();
        this.renderer.render();
    }
}

let game = new Game()
