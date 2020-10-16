import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";

export default class WASDMovementBehavior extends Base.Behavior {
    speed = 12;
    
    start() {
    }
    update() {
        
        if (Input.keys['w'] && this.gameObject.y > -120) {
            this.gameObject.y -= this.speed
        }
        if( Input.keys['s'] && this.gameObject.y < 160) {
            this.gameObject.y += this.speed
        }
        if (Input.keys['a'] && this.gameObject.x > -1200) {
            this.gameObject.x -= this.speed
        }
        if( Input.keys['d'] && this.gameObject.x < 1200) {
            this.gameObject.x += this.speed
        }

    }
}