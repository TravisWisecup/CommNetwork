import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js";

export default class ColorChangeBehavior extends Base.Behavior{
    color;
    start(){
        color = this.gameObject.color;
    }
    update(){
        
    }

}