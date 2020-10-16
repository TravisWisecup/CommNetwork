export default {
    name: "StartButton",
    components: [
      {
        type: "RectangleComponent",
        values: [
          {
            key: "width",
            value: "300"
          },
          {
            key: "height",
            value: "75"
          },
          {
            key: "fill",
            value: "white"
          },
          {
            key: "stroke",
            value: "black"
          },
        ]
      },
      {
        type: "AABBCollider",
        values: [
          {
            key: "width",
            value: "300",
          },
          {
            key: "height",
            value: "75"
          }
        ]
      },

    ]
  }