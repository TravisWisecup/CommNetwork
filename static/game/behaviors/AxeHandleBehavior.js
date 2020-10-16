import Base from "../../engine/Base.js"
import Input from "../../engine/base/Input.js";


export default class AxeHandleBehavior extends Base.Behavior{
    BackSwingLimit = -3.2;
    ForwardSwingLimit = 0.5;
    ForwardSwing = false;
    speed = 2.52;
    multiplier = 1;
    
    start(){
        
    }
    swing()
    {
        if(this.ForwardSwing){
            this.swingForward();
        }
        else{
            this.swingBack();
        }
     
    }
    swingBack()
    {
        this.gameObject.rotation -= this.speed
        this.ForwardSwing = true;
    }
    swingForward()
    {
        this.gameObject.rotation += this.speed
        this.ForwardSwing = false;
    }
    update(){

        // if (this.gameObject.rotation >= this.BackSwingLimit) {
        //     this.left = true;
        //     if(Input.keys['ArrowLeft'])
        //     {
        //         this.gameObject.rotation -= (this.speed * this.multiplier);
        //         if(this.gameObject.rotation < this.BackSwingLimit){
        //             this.gameObject.rotation = this.BackSwingLimit;
        //         }
        //     }
        //     else if(Input.keys['ArrowRight'] && this.gameObject.rotation <= this.ForwardSwingLimit){
        //         this.gameObject.rotation += (this.speed * this.multiplier);
        //     }
        // }
        // else if(this.gameObject.rotation <= this.BackSwingLimit){
        //     this.right = true;
        //     if(Input.keys['ArrowRight'])
        //     {
        //         this.gameObject.rotation += (this.speed * this.multiplier);
        //     }
        //     else if(this.gameObject.rotation >= this.BackSwingLimit){
        //         this.fill = "yellow";
        //     }
            
        // }

        if(Input.getKeyDown('a'))
        {
            this.swing();
        }


        //this.gameObject.x = this.position;
    }
}
