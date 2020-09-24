import NameableParent from "./NameableParent.js"
import Point from "./Point.js";

/**
 * A game object represents a "thing" in a game.
 * a gameOject instance can be a character, part of the background
 * or an invisible container for logic
 */
class GameObject extends NameableParent {
    /**
     * The x position of the game object relative to its parent
     */
    x;

    /**
     * The y position of the game object relative to its parent
     */
    y;

    /**
     * The scale of the game object in x relative to its parent
     */
    scaleX;

    /**
     * The scale of the game object in y relative to its parent
     */
    scaleY;

    /**
     * The rotation of the game object relative to its parent
     */
    rotation;

    /**
     * Array of components this game object has. Note, components should only be
     * added to this array used GameObject.addComponent() to components.push().
     * Otherwise the components won't have their parent game object member
     * variable method populated.
     */
    components = [];

    matrix = [3][3] = [[1,1,1],[1,1,1],[0,0,1]];

    parent = null;

    /**
     * Returns the location of the game object as a Point object rather than two
     * variables x and y.
     */
    get location() {
        return new Point(this.x, this.y);
    }

    /**
     * 
     * @param {Number} x The x position of the game object relative to its parent. Defaults to 0
     * @param {Number} y The y positon of the game object relative to its
     * parent. Defaults to 0
     * @param {Number} scaleX The scale of the objet in x relative to its
     * parent. Defaults to 1.
     * @param {Number} scaleY The scale of the object in y relative to its
     * parent. Scales to 1.
     * @param {Number} rotation The scale of the object relative to its parent.
     */
    constructor(x = 0, y = 0, scaleX = 1, scaleY = 1, rotation = 0) {
        super();
        [this.x, this.y, this.scaleX, this.scaleY, this.rotation] = [x, y, scaleX, scaleY, rotation];
        this.matrix[0][2] = this.x;
        this.matrix[1][2] = this.y;
        this.matrix[0][0] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleX;
        this.matrix[0][1] = -1 * Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleY;
        this.matrix[1][0] = Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleX;
        this.matrix[1][1] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleY;
        this.parent = this.parent;
    }
    /**
     * 
     * @param {Component} component The component to be added to this game
     * object's list of components
     * 
     * Call this method instead of GameObject.components.push() to add
     * components so that components will have their gameObject parent member
     * variable populated.
     */
    addComponent(component) {
        this.components.push(component);
        component.gameObject = this;
    }

    updatewithParentMatrix()
    {
        this.matrix[0][2] = this.parent.x + this.x;
        this.matrix[1][2] = this.parent.x + this.y;
        this.multiplyMatrices(this.matrix, this.parent.matrix);
    }

    updatewithoutParent()
    {
        this.matrix[0][2] = this.x;
        this.matrix[1][2] = this.y;
        this.matrix[0][0] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleX;
        this.matrix[0][1] = -1 * Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleY;
        this.matrix[1][0] = Math.sin(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleX;
        this.matrix[1][1] = Math.cos(Math.atan2(this.matrix[0][2], this.matrix[1][2])) * this.scaleY;
    }

    /**
     * 
     * Render this game object to a canvas by calling the draw method on all its
     * components and then recursively calling draw on its child components.
     * 
     * @param {Canvas_2D_Context} ctx The canvas context  to draw to. This may a
     * literal reference to a canvas on the DOM or a background image for
     * deferred rendering.
     */
    draw(ctx) {

        ctx.save();

        //Check if we have a RectTransform
        if (this.hasComponent("RectTransform")) {
            let rectTransform = this.getComponent("RectTransform");
            let anchorHorizontal = rectTransform.anchorHorizontal;
            let anchorVertical = rectTransform.anchorVertical;

            let screenWidth = ctx.canvas.width;
            let screenHeight = ctx.canvas.height;

            let tx = 0;
            let ty = 0;

            switch(anchorHorizontal){
                case "left":
                    tx = 0;
                    break;
                case "center":
                    tx = screenWidth/2;
                    break;
                case "right":
                    tx = screenWidth;
                    break;
                default:
                    console.log("You have a had value for anchorHorizontal " + anchorHorizontal);
            }

            switch(anchorVertical){
                case "top":
                    ty = 0;
                    break;
                case "middle":
                    ty = screenHeight/2;
                    break;
                case "bottom":
                    ty = screenHeight;
                    break;
                default:
                    console.log("You have a had value for anchorHorizontal " + anchorVertical);
            }

            ctx.translate(tx, ty);
        }

        //Otherwise we are in world space

        //The normal transforms become screen space offsets from the anchor.
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.rotate(this.rotation);

        this.components.filter(i => i.draw).forEach(i => i.draw(ctx));

        //Now draw all the children
        this.children.filter(i => i.draw).forEach(i => i.draw(ctx))

        ctx.restore();
    }
    update() {
        this.components.filter(i => i.update).forEach(i => i.update());

        //Now update all the children
        this.children.forEach(i => i.update());

        if(this.parent == null)
            this.updatewithoutParent();
        else
            this.updatewithParentMatrix();

    }
    multiplyMatrixAndPoint(matrix, point) {
        // Give a simple variable name to each part of the matrix, a column and row number
        let c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
        let c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
        let c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
        
        // Now set some simple names for the point
        let x = point[0];
        let y = point[1];
        let z = point[2];
        
        // Multiply the point against each part of the 1st column, then add together
        let resultX = (x * c0r0) + (y * c0r1) + (z * c0r2);
        
        // Multiply the point against each part of the 2nd column, then add together
        let resultY = (x * c1r0) + (y * c1r1) + (z * c1r2);
        
        // Multiply the point against each part of the 3rd column, then add together
        let resultZ = (x * c2r0) + (y * c2r1) + (z * c2r2);
        
        return [resultX, resultY, resultZ];
      }
      multiplyMatrices(matrixA, matrixB) {
        // Slice the second matrix up into rows
        let row0 = [matrixB[ 0], matrixB[ 1], matrixB[ 2], matrixB[ 3]];
        let row1 = [matrixB[ 4], matrixB[ 5], matrixB[ 6], matrixB[ 7]];
        let row2 = [matrixB[ 8], matrixB[ 9], matrixB[10], matrixB[11]];
      
        // Multiply each row by matrixA
        let result0 = this.multiplyMatrixAndPoint(matrixA, row0);
        let result1 = this.multiplyMatrixAndPoint(matrixA, row1);
        let result2 = this.multiplyMatrixAndPoint(matrixA, row2);
      
        // Turn the result rows back into a single matrix
        return [
          result0[0], result0[1], result0[2], result0[3],
          result1[0], result1[1], result1[2], result1[3],
          result2[0], result2[1], result2[2], result2[3],
        ];
      }
    getComponent(type) {
        if (typeof (type) === 'string' || type instanceof String) {
            //The user passed us a string, not a type
            //https://stackoverflow.com/a/7772724/10047920
            let component = this.components.find(i => i.constructor.name === type);
            if (component) return component;
            throw "Error, couldn't find type " + type;
        } else {
            let component = this.components.find(i => i instanceof type);
            if (component) return component;
            throw "Error, couldn't find type " + type;
        }
    }
    hasComponent(type) {
        if (typeof (type) === 'string' || type instanceof String) {
            //The user passed us a string, not a type
            //https://stackoverflow.com/a/7772724/10047920
            let component = this.components.find(i => i.constructor.name === type);
            if (component) return true;
            return false;
        } else {
            let component = this.components.find(i => i instanceof type);
            if (component) return true;
            return false;
        }
    }
    recursiveCall(functionName) {
        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i];
            if (component[functionName]) {
                component[functionName]();
            }
        }
        //Now call the function on the children
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            child.recursiveCall(functionName);
        }
    }

    
}

export default GameObject;