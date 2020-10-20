import Base from "../../engine/Base.js"
import Enemy from "../prefabs/Enemy.js"
import SceneManager from "../SceneManager.js";
import GameObjects from "../GameObjects.js"
import Point from "../../engine/base/Point.js";
import Triangle from "../prefabs/Triangle.js";


export default class EnemyGenerator extends Base.Behavior {
  enemies = 15;
  time = 0;

  start() {
    
  }

  update()
  {
    this.time += .004;

    for(let i = 0; i < this.startEnemies; i++)
    {
      let treeScale = randomInteger(0.65, 1.1);	
      let _x = 525;
      let _y = 325;
      if(i % 2 == 0)	
      {	
        _x += (i*55);	
      }	
      else{	
        _x -= (i*55);
      }	
      let treetrunk = SceneManager.instantiate(TreeTrunk, new Base.Point(_x,_y), 0)
      // let triangle = SceneManager.instantiate(Triangle, new Base.Point(_x,_y), 0)
      // treetrunk.scaleX = treeScale;	
      // treetrunk.scaleY = treeScale;	
      let branchX = 32;
      let branchY = -280;
      for(let j = 0; j < this.branches; j++)	
      {	
        branchY = -280;
        if(j % 2 == 0){
          branchY += ((j/2) * 30);
        }
        else{	
          branchX *= -1;
          branchY += (((j-1)/2) * 30);
        }
        SceneManager.currentScene.instantiate(Enemy, new Base.Point(enemyX, enemyY));
      }	
    }
  }
}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}