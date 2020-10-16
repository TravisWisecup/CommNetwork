import Behavior from "./Behavior.js"

export default class RectangleBehavior2 extends Engine.Base.Behavior{

    start(){
        this.gameObject.speed = 0;
    }

    countUp()
    {
        this.count += this.gameObject.speed;
        if(this.count > 200)
        {
            this.count = 0;
            this.moveLeft = !this.moveLeft;
        }
    }


    moveLeft = false;
    count = 0;

    update(){
        this.gameObject.speed = 3;
        this.countUp();
        if(!this.moveLeft)
        {
            this.gameObject.x += this.gameObject.speed;
        }
        else{
            this.gameObject.x -= this.gameObject.speed;
        }
    }
}
