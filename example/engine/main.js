var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, "id_game");

var states = {
    config: undefined,
    state_preload: function () {//加载场景,这是一个构造函数，里面要有StateManager.State的方法

        this.preload = function () {
            game.state.backgroundColor = "#ff0000";
            // game.load.baseURI = "";
            game.load.crossOrigin = "anonymous";
            game.load.json('config', './lesson.json');


        },
            this.create = function () {
                this.config = game.cache.getJSON("config");
                var config = this.config;
                var configElement = config["sources"];
                for (let key in configElement) {
                    if (key.hasOwnProperty("url") && key["url"].endsWith(".png")) {
                        game.load.image(key["key"], key["url"]);
                    }
                }
                var phaserText = game.add.text(game.world.centerX, game.world.centerY, "0%", {
                    fontSize: '60px',
                    fill: "#0000ff"
                }, undefined);


                phaserText.anchor.setTo(0.5, 0.5);

                game.load.onFileComplete.add(function (progress) {
                    phaserText.text = progress + "%";
                }, this);


                var onload = function () {
                    setTimeout(function () {
                        game.state.start("state_play");
                    }, 1000)
                };
                game.load.onLoadComplete.add(onload, this);//这个context是为了判断是否只绑定一次用的

            }
    },
    state_play: function () {

        this.create = function () {
            var width_world = game.world.width;//world是一个最外层的group
            var height_world = game.world.height;
            var centerX = game.world.centerX;
            var centerY = game.world.centerY;

            let config = this.config;
            var scene = config["scene"];
            var sceneElement = scene[0];
            game.state.backgroundColor = sceneElement["background"]["color"];
            var layout = sceneElement["layout"];


        }
    },
    state_over: function () {

    }
};

Object.keys(states).map(function (pro_name) {
    game.state.add(pro_name, states[pro_name]);
});

game.state.start("state_preload");