import Base from "../../engine/Base.js"

export default class BranchBehavior extends Base.Behavior{
    branchAngle;
    x;
    y;
    
    constructor(branchAngle, x, y){
        super();
        this.x = x;
        this.y = y;
        this.branchAngle = branchAngle;
    }
    
    start(){
    }
    update(){
        this.gameObject.x = this.x;
        this.gameObject.y = this.y;
        if(this.branchAngle == "left"){
            this.gameObject.rotation = .8;
        }
        else if(this.branchAngle == "right"){
            this.gameObject.rotation = -.8
        }
    }
}
