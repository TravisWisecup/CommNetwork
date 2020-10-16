export default {
    name: "CardBack",
    components:[
      {
        type:"RectangleComponent",
        values:[
          {
            key: "width",
            value: "155"
          },
          {
            key: "height",
            value: "260"
          },
          {
            key: "fill",
            value: "red"
          },
        ]
      },
      {
        type: "AABBCollider",
        values: [
          {
            key: "width",
            value: "155",
          },
          {
            key: "height",
            value: "260"
          }
        ]
      },
    ]
  }