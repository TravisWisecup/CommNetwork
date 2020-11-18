import SceneOne from "./Scenes/SceneOne.js"
import SceneTwo from "./Scenes/SceneTwo.js"
import StartScene from "./Scenes/startScene.js"
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