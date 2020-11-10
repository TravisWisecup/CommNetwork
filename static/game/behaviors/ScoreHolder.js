import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import SceneManager from "../SceneManager.js"

export default class ScoreHolder extends Base.Behavior{
    score = 0;

    start(){
        socket = io();
    }

    update(){

        //this.gameObject.getComponent("Components.TextComponent").text = 'Down';

    }

}