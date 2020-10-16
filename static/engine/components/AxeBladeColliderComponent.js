import Base from "../Base.js"

export default class AxeBladeColliderComponent extends Base.Component{
    width;
    height;
    fill;
    stroke;
    alpha;
    constructor(width, height, fill, stroke, alpha){
        super();
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
        this.alpha = alpha;
    }
    draw(ctx){
        ctx.save();
        ctx.translate(-this.width/2, -this.height/2);
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.globalAlpha = this.alpha;
        ctx.fillRect(0,0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.restore();
    }
    update(){

    }
}
