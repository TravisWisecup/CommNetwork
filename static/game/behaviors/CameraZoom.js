import Base from "../../engine/Base.js"

export default class CameraZoom extends Base.Behavior{
    scale = .2;
    start(){
        this.gameObject.scaleX = this.scale;
        this.gameObject.scaleY = this.scale;
    }
    update(){
        if(this.scale < 1 ){
            this.scale += .005;
        }

        this.gameObject.scaleX = this.scale;
        this.gameObject.scaleY = this.scale;
    }
}