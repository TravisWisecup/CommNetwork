import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";

export default class InputBarBehavior extends Base.Behavior {
    speed = 1;
    multiplier = 1;
    left = false;
    right = false;

    leftRight = false;

    start() {

    }
    update() {
        this.time -= .1;
        if (Input.keys['ArrowUp']) {
            this.left = true;
            this.gameObject.x += (this.speed * this.multiplier);
        }
        else {

            
        }

    }
}