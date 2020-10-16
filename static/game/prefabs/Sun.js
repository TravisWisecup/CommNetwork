export default {
  name: "Sun",
  components:[
    {
      type:"CircleComponent",
      values:[
        {
          key:"radius",
          value:"55"
        },
        {
          key:"fill",
          value:"orange"
        },
        {
          key:"stroke",
          value:"yellow"
        },
      ]
    },
    {
      type:"CircleCollider",
      values:[
        {
          key:"radius",
          value:"55"
        }
      ]
    }, 
    {
      type:"CollisionCircleBehavior",
    },
    {
      type:"OrbitBehavior",
    },   

  ]
}
