export default {
  name: "InputBar",
  components:[
    {
      type:"RectangleComponent",
      values:[
        {
          key: "width",
          value: "8"
        },
        {
          key: "height",
          value: "40"
        },
        {
          key: "fill",
          value: "black"
        },
        {
          key: "stroke",
          value: "black"
        },
      ]
    },
    {
      type:"InputBarBehavior",
    },
  ]
}