import Engine from "../../engine/Engine.js"

export default class RectangleBehavior extends Engine.Base.Behavior{
    start(){
        this.gameObject.rotation = 0;
    }
    update(){
        this.gameObject.rotation += .04;
    }
}
