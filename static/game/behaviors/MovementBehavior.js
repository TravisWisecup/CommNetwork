import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"
import Components from "../../engine/Components.js"
import Input from "../../engine/base/Input.js";

export default class MovementBehavior extends Base.Behavior {
    speed = 12;
    speed_increase = 5;
    time = 0;
    speed_time = 0;
    enemy_color = "";
    start() {
    }
    update() {
        this.time += 0.1;
        if(this.time - 14 > this.speed_time)
        {
            this.speed = 12;
        }
        if (Input.keys['ArrowUp'] && this.gameObject.y > -160) {
            this.gameObject.y -= this.speed
        }
        if( Input.keys['ArrowDown'] && this.gameObject.y < 280) {
            this.gameObject.y += this.speed
        }
        if (Input.keys['ArrowLeft'] && this.gameObject.x > -1200) {
            this.gameObject.x -= this.speed
        }
        if( Input.keys['ArrowRight'] && this.gameObject.x < 1200) {
            this.gameObject.x += this.speed
        }

    }

    onCollisionStay(collisionObject){
        this.color = this.gameObject.components[0].fill
        if (collisionObject.gameObject.components[0].fill == "yellow") {
            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            this.speed_time = this.time;
            
            this.speed += this.speed_increase;
        }

    }
}