import Base from "../Base.js"

export default class AxeBladeComponent extends Base.Component{
    x;
    y;
    r;
    sAngle;
    eAngle;
    fill;
    constructor(x, y, r, sAngle, eAngle, fill){
        super();
        this.fill = fill;
        this.x = x;
        this.y = y;
        this.r = r;
        this.sAngle = sAngle;
        this.eAngle = eAngle;
    }
    draw(ctx){
        ctx.save();
        ctx.fillStyle = this.fill;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle);
        ctx.fill();
        ctx.stroke()
        ctx.restore();
    }
    update(){

    }
}
