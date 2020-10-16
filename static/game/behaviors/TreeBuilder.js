import Base from "../../engine/Base.js"
import Branch from "../prefabs/Branch.js"
import SceneManager from "../SceneManager.js";
import GameObjects from "../GameObjects.js"
import Point from "../../engine/base/Point.js";
import TreeTrunk from "../prefabs/TreeTrunk.js";
import Triangle from "../prefabs/Triangle.js";


export default class TreeBuilder extends Base.Behavior {
  trees = 15;
  branches = 14;
  
  start() {
    for(let i = 0; i < this.trees; i++)
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
      let branchRotate = .8;
      for(let j = 0; j < this.branches; j++)	
      {	
        branchY = -280;
        if(j % 2 == 0){
          branchY += ((j/2) * 30);
        }
        else{	
          branchX *= -1;
          branchRotate *= -1;
          branchY += (((j-1)/2) * 30);
        }
        SceneManager.currentScene.instantiate(Branch, new Base.Point(branchX, branchY), branchRotate,treetrunk.children)
      }	
    }
  }
}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}