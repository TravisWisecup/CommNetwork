import Base from "../../engine/Base.js"
import Enemy from "../prefabs/Enemy.js"
import SceneManager from "../SceneManager.js";
import GameObjects from "../GameObjects.js"
import Point from "../../engine/base/Point.js";
import Triangle from "../prefabs/Triangle.js";


export default class EnemyGenerator extends Base.Behavior {
  time = 0;
  second_increment = 0;
  start() {
    
  }

  update()
  {
    this.time += .008;

    if(Math.floor(this.time) % 4 == this.second_increment)
    {
        ++this.second_increment;
        // var check = Math.floor(this.time) % 4;
        // console.log("Enemy created at time: " + check);
        var enemyY = randomInteger(-250, 200);
        var enemyX = 700;
        SceneManager.currentScene.instantiate(Enemy, new Base.Point(enemyX, enemyY));

        if(this.second_increment == 4)
        {
            this.second_increment = 0;
        }
    }
  }

}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}