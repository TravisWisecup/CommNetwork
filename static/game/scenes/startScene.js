export default {
    name: "StartScene",

    objects : [
      {
        name:"NetworkListener",
        type:"NetworkListener",
        location:{x:0,y:0},
      },
      {
        name:"Trees",
        type:'Trees',
        location:{x:0,y:0}
      },
      {
        name: "Main Camera",
        location: { x: 150, y: 150 },
        type: "Camera",
        componentValues: [
        {
          type: "CameraComponent",
          values: [
            {
              key: "backgroundColor",
              value: "white"
            }
          ],
        }
      ],
      components: [
        {
          type: "MovementBehavior"
        }
      ]
    },
      {
        name: "GUI Canvas",
        location: { x: 0, y: 0 },
        type: "Canvas",
        children: [
          {
            name: "Upper Left",
            location: { x: 10, y: 20 },
            type: "ScreenText",
            componentValues: [
              {
                type: "RectTransform",
                values: [
                  {
                    key: "anchorHorizontal",
                    value: "left",
                  },
                  {
                    key: "anchorVertical",
                    value: "top"
                  }

                ]
              },
              {
                type:"TextComponent",
                values:[
                  {
                    key:"text",
                    value:"Text"
                  }
                ]
              }
            ]
          },
          {
            name: "Lower Right",
            location: { x: -100, y: -10 },
            type: "ScreenText",
            componentValues: [
              {
                type: "RectTransform",
                values: [
                  {
                    key: "anchorHorizontal",
                    value: "right",
                  },
                  {
                    key: "anchorVertical",
                    value: "bottom"
                  }

                ]
              },
              {
                type:"TextComponent",
                values:[
                  {
                    key:"text",
                    value:"Text"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name:"background",
        location: {x:350, y:500},
        type:"BackGroundDay",
        children: [
            {
                name:"sun",
                location: {x:0, y:0},
                type:"Sun",
            },
          ]
      },
      {
          name:"boxCollider",
          location: {x:105, y:20},
          type:"BoxCollider"
      },
      // {
      //   name:"cDot",
      //   location: {x:200, y:200},
      //   type:"CollisionDot",
      // },
      {
        name:"enemy",
        location: {x:400, y:75},
        type:"Enemy",
      }
    ]
  }
