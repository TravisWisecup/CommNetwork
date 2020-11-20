export default {
    name: "Camera",
    components:[
      {
        type:"CameraComponent",
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
    ]
  }