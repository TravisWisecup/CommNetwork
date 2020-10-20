export default {
    name: "Enemy",
    components:[
      {
        type:"CircleComponent",
        values:[
          {
            key:"radius",
            value:"12"
          },
          {
            key:"fill",
            value:"blue"
          },
          {
            key:"stroke",
            value:"black"
          },
        ]
      },
      {
        type:"EnemyMovementBehavior",
      },
      {
        type:"Point",
      },
    ]
  }
