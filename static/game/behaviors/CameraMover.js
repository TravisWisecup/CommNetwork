import Base from "../../engine/Base.js"

export default class CameraMover extends Base.Behavior{
    x = 50
    y = 100
    start(){
        this.gameObject.x = this.x;
        this.gameObject.y = this.y;
    }
    update(){
        // if(){
           
        // }


    }
}