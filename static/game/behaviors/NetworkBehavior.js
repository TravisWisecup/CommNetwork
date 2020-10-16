import SceneManager from "../SceneManager.js";
import Axe from "../prefabs/Axe.js"
import NetworkDummy from "../prefabs/NetworkDummy.js"


class NetworkBehavior {

  constructor(){
    this.started = false;
  }
  start() {
    if(this.started)return;
    this.started = true;
    this.objects = [];
    this.myObject = null;
    console.log("Started network listener.")

    // Connect to the socket.io server
    socket = io();
    
    // Ask for our object information
    socket.emit("join", "");

    // Listen for our object information
    let self = this;
    socket.on("joinaccept", function (msg) {
      console.log("Join accept " + JSON.stringify(msg));
      self.myObject = msg;
      self.objects.push(self.myObject);
      let axe = SceneManager.currentScene.children.find(i=>i.hasComponent("AxeHandleBehavior"));
      axe.id = self.myObject.id;
      axe.x = msg.x;
      axe.y = msg.y;
    });

    // Listen for updates about other objects
    socket.on('update', obj => {
      if(!self.myObject)return;
      if(obj.id == self.myObject.id)return;
      //console.log("Update " + JSON.stringify(obj))

      //Add the object if we don't know about it
      if (!self.objects.some(i => i.id == obj.id)) {
        self.objects.push(obj);
        let dummy = SceneManager.currentScene.instantiate(NetworkDummy, {x:obj.x, y:obj.y},0);
        dummy.id = obj.id;

      }
      //Otherwise update the object
      else {
        let object = SceneManager.currentScene.children.find(i => i.id == obj.id);
        if(!object) return console.log("Couldn't find dummy object")
        object.x = obj.x;
        object.y = obj.y;
      }
    })

    // Only keep objects that are still in the game
    socket.on('valid', arr => {
      self.objects = self.objects.filter(i => arr.includes(i.id));
      let axes = SceneManager.currentScene.children.filter(i=>i.name == "NetworkDummy");
      axes.forEach(i=>{
        if(!arr.includes(i.id)){
          SceneManager.currentScene.destroy(i);
        }
      }) 
    })
  }
  update(){
    if(!this.myObject)return;//We haven't had a round trip with the server yet.
    let object = SceneManager.currentScene.children.find(i=>i.id == this.myObject.id);
    if(!object) return console.log("Couldn't find my object");
    socket.emit("move", {x:object.x,y:object.y});

  }
  

}

export default NetworkBehavior;