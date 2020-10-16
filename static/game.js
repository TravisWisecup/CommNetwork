import Engine from "../engine/Engine.js"
import Scenes from "../game/Scenes.js"
import SceneManager from "../game/SceneManager.js"
import GameBehaviors from "../game/GameBehaviors.js";
import GameObjects from "../game/GameObjects.js"
import Guy from "./game/prefabs/Guy.js";

Engine.Base.Scene.gameObjects = GameObjects;
Engine.Base.Scene.components = Engine.Components;
Engine.Base.Scene.gameBehaviors = GameBehaviors;

Scenes.allScenes
    .forEach(i => SceneManager.addScene(Engine.Base.Scene.parse(i)))

SceneManager.currentScene = Scenes.StartScreen;


//Setup event handling
document.body.addEventListener('keydown', keydown);
document.body.addEventListener('keyup', keyup);
document.body.addEventListener('keypress', keypress);
document.body.addEventListener('mousedown', mousedown);
document.body.addEventListener('mouseup', mouseup);
document.body.addEventListener('contextmenu', contextmenu); //Kill the right mouse context menu
document.body.addEventListener('mousemove', mousemove);
document.body.addEventListener('wheel', wheel);

let Input = Engine.Base.Input;

function keydown(event) {
  if (Input.keys[event.key] != true)
    Input.down[event.key] = true;
  Input.keys[event.key] = true;
}

function keyup(event) {
  if (Input.keys[event.key] != false)
    Input.up[event.key] = true;
  Input.keys[event.key] = false;
}

function mousedown(event) {
  if (Input.mouseButtons[event.button] != true)
    Input.mouseButtonsDown[event.button] = true;
  Input.mouseButtons[event.button] = true;
}

function mouseup(event) {
  if (Input.mouseButtons[event.button] != false)
    Input.mouseButtonsUp[event.button] = true;
  Input.mouseButtons[event.button] = false;
}

function keypress(event) {
  //console.log(`Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
}

function mousemove(event){
  Input.mousePosition.x = event.offsetX;
  Input.mousePosition.y = event.offsetY;
}

function wheel(event){
  Input.mouseScrollDelta = event.delta;
}

// Based on https://stackoverflow.com/questions/381795/how-to-disable-right-click-context-menu-in-javascript
  // Kills the right mouse context menu
  function contextmenu(event) {
    if (event.preventDefault != undefined)
      event.preventDefault();
    if (event.stopPropagation != undefined)
      event.stopPropagation();
    return false;
  }

  var socket = io();
  socket.on('message', function(data) {
    console.log(data);
  });
  
  socket.on('test', function() {
    SceneManager.currentScene.instantiate(Guy, [100, 200]);
  });

  // var movement = {
  //     up: false,
  //     down: false,
  //     left: false,
  //     right: false
  //   }
  //   document.addEventListener('keydown', function(event) {
  //     switch (event.keyCode) {
  //       case 65: // A
  //         movement.left = true;
  //         break;
  //       case 87: // W
  //         movement.up = true;
  //         break;
  //       case 68: // D
  //         movement.right = true;
  //         break;
  //       case 83: // S
  //         movement.down = true;
  //         break;
  //     }
  //   });
  //   document.addEventListener('keyup', function(event) {
  //     switch (event.keyCode) {
  //       case 65: // A
  //         movement.left = false;
  //         break;
  //       case 87: // W
  //         movement.up = false;
  //         break;
  //       case 68: // D
  //         movement.right = false;
  //         break;
  //       case 83: // S
  //         movement.down = false;
  //         break;
  //     }
  //   });
  
  // socket.emit('new player');
  // setInterval(function() {
  //   socket.emit('movement', movement);
  // }, 1000 / 60);

//Keep our canvas full screen
//from https://blog.codepen.io/2013/07/29/full-screen-canvas/

var can = document.getElementById("canv");

function resizeCanvas() {
  can.style.width = window.innerWidth + "px";
  setTimeout(function () {
    can.style.height = window.innerHeight + "px";
  }, 0);
  can.width = window.innerWidth;
  can.height = window.innerHeight;
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();

let canv, ctx;

function main() {
  canv = document.querySelector("#canv");
  ctx = canv.getContext('2d');

  setInterval(gameLoop, 33);
}

function gameLoop() {
  Input.swapUpDownArrays();
  update(ctx);
  draw(ctx);
}

function update(ctx) {
  SceneManager.currentScene.update(Engine.Components.Collider, Engine.Components.CollisionHelper, ctx);
}

function draw(ctx) {
  SceneManager.currentScene.draw(ctx, canv.width, canv.height);
}

// socket.on('state', function(players) {
//   var count = 0;
//   for (var id in players) {
//     count++;
//     var player = players[id];
//     if(SceneManager.currentScene.name == "StartScene")
//     {
//       player.Obj = SceneManager.instantiate(Guy, [player.x + count * 5, player.y]);
//       for(var i = 0; i < 5; i++)
//       {
//         player.Obj.x += 5;
//       }
//     }

//   }
// });

// socket.on('test', function(myObject){
//   console.log("Test success! myObject x = " + myObject.x + " and myObject y = " + myObject.y);
// });

main();
