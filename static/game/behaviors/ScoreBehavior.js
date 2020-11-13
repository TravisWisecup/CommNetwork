import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"

export default class ScoreBehavior extends Base.Behavior{
    time = 0;
    time_increase = .004
    score = 0;
    score_increase = 200;
    tempScore = 0;

    start(){
        socket = io();
    }

    update(){
        if(this.tempScore != this.score)
        {
            socket.emit("ScoreUpdate", this.score);
            this.tempScore = this.score;
        }

        socket.on('objectInfo', msg => {
            //console.log("Score Increase from " + JSON.stringify(msg) + " score is now: " + this.score);
        } )
        this.time+=this.time_increase;

    }
    onCollisionEnter(collisionObject){

    }

    onCollisionStay(collisionObject){

        if (collisionObject.gameObject.components[0].fill == "blue" && (this.tempScore + 75) > this.score) {
            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            // console.log("this.score before: " + this.score);

            this.tempScore = this.score;
            this.score += this.score_increase;

            // console.log("this.score after: " + this.score);
        }
        if (collisionObject.gameObject.components[0].fill == "red" && (this.tempScore + 75) > this.score) {
            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            // console.log("this.score before: " + this.score);

            this.tempScore = this.score;
            this.score -= this.score_increase;

            // console.log("this.score after: " + this.score);
        }
        if (collisionObject.gameObject.components[0].fill == "turquoise" && (this.tempScore + 75) > this.score) {
            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            // console.log("this.score before: " + this.score);

            this.tempScore = this.score;
            this.score += this.score_increase * 5;

            // console.log("this.score after: " + this.score);
        }
    }
}