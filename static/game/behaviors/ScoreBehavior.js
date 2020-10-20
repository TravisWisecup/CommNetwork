import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"

export default class ScoreBehavior extends Base.Behavior{
    time = 0;
    time_increase = .004
    score = 0;
    score_loss = 20;
    start(){
        
    }
    update(){
        this.time+=this.time_increase;
        this.score += (this.time_increase) * 900;

        if( Math.ceil(this.time) % 10 == 0)
        {
            console.log(this.score);
            //  SceneManager.currentScene = "SceneOne";
        }
    }
    onCollisionEnter(collisionObject){
        if (collisionObject.gameObject.hasComponent("EnemyMovementBehavior")) {

            // SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            console.log("this.score before: " + this.score);

            this.score -= this.score_loss;

            console.log("this.score after: " + this.score);
        }
    }

    onCollisionStay(collisionObject){
        if (collisionObject.gameObject.hasComponent("EnemyMovementBehavior")) {

            // SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            console.log("this.score before: " + this.score);

            this.score -= this.score_loss;

            console.log("this.score after: " + this.score);
        }
    }
}