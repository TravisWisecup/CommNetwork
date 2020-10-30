export default {
    name: "BoxCollider",
    components: [
      {
        type: "pcComponent",
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
            value: "1"
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
        type:"MovementBehavior",
      }, 
      {
        type:"ScoreBehavior",
      },
    ]
  }