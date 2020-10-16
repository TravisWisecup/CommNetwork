import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../engine/base/Point.js";
import Triangle from "../prefabs/Triangle.js"
import CollisionCircle from "../prefabs/CollisionCircle.js"


export default class BladeCollisionBehavior extends Base.Behavior {
    
    start() {

    }
    update() {
        
    }
    onCollisionEnter(otherGameObject){
        console.log("in collision");
    }

    onCollisionStay(collisionObject){
        if (collisionObject.gameObject.name == "circle") {

            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            console.log("cWin")
        }
        if (collisionObject.gameObject.name == "corcle") {

            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            console.log("CCWin")
        }
        if (collisionObject.gameObject.name == "Triangle") {

            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(CollisionCircle, new Point(Math.random() * 400, Math.random() * 400), 0);
            // SceneManager.instantiate(Triangle, new Point(Math.random() * 40, Math.random() * 40), 0);
            console.log("tWin")
        }
        if (collisionObject.gameObject.name == "cDot") {

           console.log("Sometimes I wonder.")            
        }
        else if (collisionObject.gameObject.name == "Rectangle") {

            SceneManager.destroy(collisionObject.gameObject);
            // SceneManager.instantiate(Rectangle, new Point(Math.random() * 400, Math.random() * 400), 0);
            
        }
    }
}