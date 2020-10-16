export default {
  name: "Axe",
  components:[
    {
      type:"RectangleComponent",
      values:[
        {
          key: "width",
          value: "175"
        },
        {
          key: "height",
          value: "10"
        },
        {
          key: "fill",
          value: "brown"
        },
        {
          key: "stroke",
          value: "black"
        },
      ]
    },
    {
      type:"AxeHandleBehavior",
    },
    {
      type:"MovementBehavior",
    },
  ]
}