import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"

export default class ScoreBehavior extends Base.Behavior{
    time = 0;
    time_increase = .004
    score = 0;
    score_loss = 75;
    tempScore = 0;
    userInfo = [];

    start(){
        socket = io();

        //socket.emit("ScoreStart", "");
    }

    update(){
        if(this.tempScore >= this.score)
        {
            console.log("Setting isColliding true: Works!");
            socket.emit("ScoreLoss", "");
            this.tempScore = this.score;
        }

        socket.on('objectInfo', msg => {
            console.log("ScoreLoss from " + JSON.stringify(msg) + " score is now: " + this.score);
        } )
        this.time+=this.time_increase;
        this.score += Math.ceil((this.time_increase) * 900);

    }
    onCollisionEnter(collisionObject){

    }

    onCollisionStay(collisionObject){

        if (collisionObject.gameObject.hasComponent("EnemyMovementBehavior") && (this.tempScore + 250) < this.score && this.score > 200) {
            // SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            console.log("this.score before: " + this.score);

            this.tempScore = this.score;
            this.score -= this.score_loss;

            console.log("this.score after: " + this.score);
        }

    }
}