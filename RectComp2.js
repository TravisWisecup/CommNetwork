import Component from "./Component.js"

class RectangleComponent extends Component{
    width;
    height;
    fill;
    stroke;
    speed;
    x;
    y;

    constructor(width, height, fill, stroke, speed, x, y){
        super();
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
        this.speed = speed;
        this.x = x;
        this.y = y;

    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.width, this.height);
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(0,0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.restore();
        ctx.save();
        ctx.translate(this.width*7, this.height*7);
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fillRect(0,0, this.width, this.height);
        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.restore();
    }
    update(){

    }
}

export default RectangleComponent;