import Base from "../../engine/Base.js";

export default class MatrixReturn extends Base.Behavior{

    matrix = [[1, 1, 1],
              [1, 1, 1],
              [0, 0, 1]];

    start(){
        this.matrix[0][2] = this.gameObject.x;
        this.matrix[1][2] = this.gameObject.y;
        this.matrix[0][0] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleX;
        this.matrix[0][1] = -1 * Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleY;
        this.matrix[1][0] = Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleX;
        this.matrix[1][1] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleY;
    }

    update(){
        this.matrix[0][2] = this.gameObject.x;
        this.matrix[1][2] = this.gameObject.y;
        this.matrix[0][0] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleX;
        this.matrix[0][1] = -1 * Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleY;
        this.matrix[1][0] = Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleX;
        this.matrix[1][1] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.gameObject.scaleY;
    }
}