import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js";

export default class ColorChangeBehavior extends Base.Behavior{
    color;
    colorChangeChance = -1;
    time = 0;
    start(){
        this.colorChangeChance = randomInteger(0,99);
        this.color = this.gameObject.components[0].fill;
        if(this.colorChangeChance < 5)
        {
            this.gameObject.components[0].fill = "red";
        }
        else if(this.colorChangeChance > 5 && this.colorChangeChance < 10)
        {
            this.gameObject.components[0].fill = "SeaShell";
        }
        else if(this.colorChangeChance > 10 && this.colorChangeChance < 15)
        {
            this.gameObject.components[0].fill = "yellow";
        }
        else if(this.colorChangeChance > 15 && this.colorChangeChance < 20)
        {
            this.gameObject.components[0].fill = "turquoise";
        }
        //this.color = this.gameObject.components[0].fill;
        //this.gameObject.components[0].fill = "red";
    }
    update(){
        this.time++;
        this.color = this.gameObject.components[0].fill;

        if(this.color == "turquoise" && this.time > 30)
        {
            this.gameObject.components[0].fill = "red";
        }
        else if(this.color == "red" && this.time < 30)
        {
            this.gameObject.components[0].fill = "turquoise";
        }

        if(this.time > 150)
        {
            this.time = 0;
        }
    }

}

function randomInteger(min, max) 
{
  return (Math.random() * (min - max) + max)
}