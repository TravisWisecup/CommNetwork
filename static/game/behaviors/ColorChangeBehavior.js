import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js";

export default class ColorChangeBehavior extends Base.Behavior{
    color;
    objectChangeChance = -1;
    start(){
        this.objectChangeChance = randomInteger(0,99);
        if(this.objectChangeChance < 5)
        {
            this.gameObject.components[0].fill = "red";
        }
        else if(this.objectChangeChance > 5 && this.objectChangeChance < 10)
        {
            this.gameObject.components[0].fill = "green";
        }
        else if(this.objectChangeChance > 10 && this.objectChangeChance < 15)
        {
            this.gameObject.components[0].fill = "yellow";
        }
        else if(this.objectChangeChance > 15 && this.objectChangeChance < 20)
        {
            this.gameObject.components[0].fill = "turquoise";
        }
        //this.color = this.gameObject.components[0].fill;
        //this.gameObject.components[0].fill = "red";
    }
    update(){
        
    }

}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}