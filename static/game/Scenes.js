import SceneOne from "./scenes/SceneOne.js"
import SceneTwo from "./scenes/SceneTwo.js"
import StartScene from "./scenes/startScene.js"
import LetsPlayScene from "./scenes/LetsPlayScene.js"

export default{
  StartScreen: "LetsPlayScene",
  allScenes: [
    StartScene,
    SceneOne,
    SceneTwo,
    LetsPlayScene
  ]
}