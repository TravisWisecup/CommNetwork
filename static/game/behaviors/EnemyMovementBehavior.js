import Base from "../../engine/Base.js"


export default class EnemyMovementBehavior extends Base.Behavior {
    speed = 5;

    start() {

    }
    update() {
       this.gameObject.x -= this.speed;

    }

}