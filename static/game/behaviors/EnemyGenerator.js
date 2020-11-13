import Base from "../../engine/Base.js"
import Enemy from "../prefabs/Enemy.js"
import SceneManager from "../SceneManager.js";

export default class EnemyGenerator extends Base.Behavior {
  time = 0;
  time_increment = 0.5;
  time_before_new_enemy = 140;
  second_increment = 0;
  start() {
    
  }

  update()
  {

    if(this.time % this.time_before_new_enemy == this.second_increment)
    {
      //The more you multiply by the slower it generates enemies
        this.second_increment += this.time_increment * 45;
        // var check = Math.floor(this.time) % 4;
        // console.log("Enemy created at time: " + check);
        var enemyY = randomInteger(-150, 350);
        var enemyX = 700;

        SceneManager.currentScene.instantiate(Enemy, new Base.Point(enemyX, enemyY));


        if(this.second_increment >= this.time_before_new_enemy)
        {
            this.second_increment = 0;
        }
    }
    this.time += this.time_increment;


  }

}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}