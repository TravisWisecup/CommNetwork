export default {
  name: "Branch",
  components:[
    {
      type:"RectangleComponent",
      values:[
        {
          key: "width",
          value: "125"
        },
        {
          key: "height",
          value: "35"
        },
        {
          key: "fill",
          value: "green"
        },
      ]
    },
  ]
}

// export default class TreeTrunk extends Base.GameObject{
//   constructor(branchAngle, x, y) {
//     super(0,0)

//     this.branchAngle = branchAngle;
//     this.x = x;
//     this.y = y;

//     let RectangleComponent = new Components.RectangleComponent(130, 20, "DarkGreen", "black");
//     this.addComponent(RectangleComponent);

//     let branchBehavior = new BranchBehavior(branchAngle,x,y);
//     this.addComponent(branchBehavior)
//   }

// }