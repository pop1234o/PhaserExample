var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, "id_game");

var states = {
    state_preload: function () {//加载场景,这是一个构造函数，里面要有StateManager.State的方法

        this.preload = function () {
            game.state.backgroundColor = "#ff0000";
            // game.load.baseURI = "";
            game.load.crossOrigin = "anonymous";
            game.load.image('lazur', '../assets/pics/thorn_lazur.png');

            game.load.image('shinyball', '../assets/sprites/shinyball.png');
            game.load.spritesheet("mummy", '../assets/sprites/metalslug_mummy37x45.png', 37, 45, 18, 0, 0, 0);
            game.load.spritesheet("explosion", "../assets/sprites/explosion.png", 64, 64, 23);
            //Atlas的素材集可以通过Texture Packer或者Shoebox来制作。
            //jsonArray
            game.load.atlas('seacreatures', '../assets/sprites/seacreatures_json.png', '../assets/sprites/seacreatures_json.json', null, Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
            //和atlas区别 expects the atlas data to be in a JSON Hash format
            game.load.atlasJSONHash('bot', '../assets/sprites/running_bot.png', '../assets/sprites/running_bot.json');

            game.load.audio("boss_hit", "../assets/audio/SoundEffects/boss_hit.wav");

            loadDragonbone("../assets/dragonbone/侧面女孩B")

            //region

            var phaserText = game.add.text(game.world.centerX, game.world.centerY, "0%", {
                fontSize: '60px',
                fill: "#0000ff"
            }, undefined);


            phaserText.anchor.setTo(0.5, 0.5);

            game.load.onFileComplete.add(function (progress) {
                phaserText.text = progress + "%";
            }, this);

            var deadLine = false;

            setTimeout(function () {
                deadLine = true;
            }, 1000);

            var onload = function () {
                if (deadLine) {
                    game.state.start("state_play");
                } else {
                    setTimeout(onload, 1000);
                }
            };
            game.load.onLoadComplete.add(onload, this);//这个context是为了判断是否只绑定一次用的

            //endregion

        }
        function loadDragonbone(path) {
            game.load.image(path,path);
            // game.load.json();
        }
    },
    state_play: function () {

        this.create = function () {
            var width_world = game.world.width;//world是一个最外层的group
            var height_world = game.world.height;
            var centerX = game.world.centerX;
            var centerY = game.world.centerY;


            var image_bg = game.add.image(0, 0, 'lazur');
            // image_bg.width = width_world;//设置宽高
            // image_bg.height = height_world;

            // Phaser.Image  doesn't need physics or animation
            var image_shinyball = game.add.image(centerX, centerY, 'shinyball');
            image_shinyball.anchor.setTo(0.5);//默认左上角是锚点
            // This returns a DOM Image object, not a Phaser.Image object.
            // var image_shinyball_dom = game.cache.getImage('shinyball');

            //都一样
            // console.log(image_shinyball.width+"  "+image_shinyball_dom.width);

            var group = game.add.group(game.world, "group_name", false, false, 0);
            var sprite = game.add.sprite(100, 100, "mummy", 0, group);
            //PIXI.DisplayObject中的方法
            sprite.scale.setTo(2);
            sprite.smoothed = false;
            sprite.animations.add("walk");
            sprite.animations.play("walk", 10, true, false);





        }
    },
    state_over: function () {

    }
};

Object.keys(states).map(function (pro_name) {
    game.state.add(pro_name, states[pro_name]);
});

game.state.start("state_preload");