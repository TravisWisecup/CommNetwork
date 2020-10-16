export default {
    name: "BladeCollider",
    components: [
      {
        type: "AxeBladeColliderComponent",
        values: [
          {
            key: "width",
            value: "100"
          },
          {
            key: "height",
            value: "53"
          },
          {
            key: "stroke",
            value: "black"
          },
          {
            key: "fill",
            value: "black"
          },
          {
            key: "alpha",
            value: "0.5"
          },
        ]
      },
      {
        type: "AABBCollider",
        values: [
          {
            key: "width",
            value: "100",
          },
          {
              key: "height",
              value: "53",
          }
        ]
      },     
      {
        type:"BladeCollisionBehavior",
      },
    ]
  }