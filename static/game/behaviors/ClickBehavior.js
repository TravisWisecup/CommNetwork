import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js";
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";

export default class ClickBehavior extends Base.Behavior{
    compName = "";

    start(){
        this.compName = this.gameObject.name;
    }
    update(){

    }

    onMouseOver(){
        // console.log("Mouse Over");

    }

    onMouseDown(){
        if(this.compName == "StartGame")
        {
            SceneManager.currentScene = "StartScene";
        }
        // console.log("Mouse down");
        // this.gameObject.x += (Math.random() - .5) * 300;
        // this.gameObject.y += (Math.random() - .5) * 300;
    }
}