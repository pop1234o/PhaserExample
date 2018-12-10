var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, "id_game");

var states = {
    state_preload: function () {//加载场景,这是一个构造函数，里面要有StateManager.State的方法

        this.preload = function () {
            game.state.backgroundColor = "#ff0000";
            // game.load.baseURI = "";
            game.load.crossOrigin = "anonymous";
            game.load.json('config', './lesson.json');

        };

        this.create = function () {
            game.state.start("state_preload_source");
        }
    },
    state_preload_source: function () {
        this.preload = function () {

            // window.config = game.cache.getJSON("config");
            window.config = window.lesson;
            let config = window.config;
            let configElement = config.sources;
            //==========加载资源==================================
            for (let element of configElement) {//
                let source_url = element.url;
                let key = element.key;
                switch (element.type) {
                    case "image":
                        game.load.image(key, source_url);
                        break;
                    case "spritesheet":
                        let frameWidth = element.parameters.spritesheet_width;
                        let frameHeight = element.parameters.spritesheet_height;
                        let frameMax = element.parameters.spritesheet_max_frame;
                        game.load.spritesheet(key, source_url, frameWidth, frameHeight, frameMax, 0, 0, 0);
                        break;
                    case "atlas":
                        game.load.atlas(key, element.parameters.atlas_url);
                        break;
                    case "audio":
                        game.load.audio(key, source_url);
                        break;

                }
            }

            ///==================显示进度=============================
            let phaserText = game.add.text(game.world.centerX, game.world.centerY, "0%", {
                fontSize: '60px',
                fill: "#0000ff"
            }, undefined);

            phaserText.anchor.setTo(0.5, 0.5);

            game.load.onFileComplete.add(function (progress) {
                phaserText.text = progress + "%";
            }, this);

            let onload = function () {
                setTimeout(function () {
                    game.state.start("state_play");
                }, 1000)
            };
            game.load.onLoadComplete.add(onload, this);//这个context是为了判断是否只绑定一次用的

        }
    }
    ,
    state_play: function () {//构造函数，里面是类属性定义，方法定义

        this.create = function () {
            let width_world = game.world.width;//world是一个最外层的group
            let height_world = game.world.height;
            let centerX = game.world.centerX;
            let centerY = game.world.centerY;

            //==============加载基础配置=================
            let config = window.config;
            let scene = config.scene;
            let sceneElement = scene[0];
            game.stage.backgroundColor = sceneElement.background.color;
            let layout = sceneElement.layout;

            //==============================加载布局==========
            let spriteMap = {};
            for (let layout_element of layout) {
                let position = layout_element.position;
                let x = position.x;
                let y = position.y;
                let key = layout_element.key;
                let image_frame = undefined;
                if (layout_element.hasOwnProperty("image_frame") && layout_element.image_frame !== "") {
                    image_frame = layout_element.image_frame;
                }
                //============添加=================

                switch (layout_element.type) {
                    case "image":
                        spriteMap[key] = game.add.image(x, y, key, image_frame, undefined);
                        break;
                    case "sprite":
                        spriteMap[key] = game.add.sprite(x, y, key, image_frame, undefined);
                        break;
                    case "text":
                        let parameters = layout_element.element_parameters;
                        spriteMap[key] = game.add.text(x, y, parameters.text, parameters.text_style, undefined);
                        break;
                }
                //=================初始动画===============
                let type = layout_element.init_animation.type;
                let animationParameters = layout_element.init_animation.init_animation_parameters;
                switch (type) {
                    case "spritesheet":
                        let anim = spriteMap[key].animations.add(animationParameters.name, animationParameters.frames, animationParameters.frameRate, animationParameters.loop);
                        anim.play();
                        break;
                }

            }

        }
    },
    state_over: function () {

    }
};

Object.keys(states).map(function (pro_name) {
    game.state.add(pro_name, states[pro_name]);
});

game.state.start("state_preload");