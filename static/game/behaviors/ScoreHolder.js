import Base from "../../engine/Base.js"
import Components from "../../engine/Components.js"
import SceneManager from "../SceneManager.js"

export default class ScoreHolder extends Base.Behavior{
    score = 0;
    players = {};
    ScoreText = "";

    start(){
        this.text = this.gameObject.getComponent("TextComponent");
        this.text.text = "";
        this.ScoreText = "Scores";

        let shObjects = {
            text:this.text,
            textText:this.text.text,
            ScoreText:this.ScoreText,
            players:this.players
        }

        socket = io();

        socket.emit('SendScoreHolderObjects', shObjects)
    }

    update(){

        //this.gameObject.getComponent("Components.TextComponent").text = 'Down';
        socket.on('objectInfo', function(msg) {

            this.players[msg.playerID] = msg.playerScore;

            for(var key in this.players)
            {
                this.ScoreText += "\n" + "Player: " + key + "   Score: " + this.players[key];
                this.text.text = this.ScoreText;
                this.ScoreText = "";
            }
        });
    }

}