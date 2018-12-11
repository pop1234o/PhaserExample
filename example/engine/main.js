var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, "id_game");

var currentSceneIndex = 0;

function nextSnece() {
    currentSceneIndex++;
    game.state.start("state_play");
}

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
            window.config_phaser = window.lesson;
            let config = window.config_phaser;
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

            //==================显示进度=============================
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
    },
    state_play: function () {//构造函数，里面是类属性定义，方法定义

        this.create = function () {
            let width_world = game.world.width;//world是一个最外层的group
            let height_world = game.world.height;
            let centerX = game.world.centerX;
            let centerY = game.world.centerY;

            //==============加载基础配置=================
            let config = window.config_phaser;
            let scene = config.scene;
            if (currentSceneIndex >= scene.length) {
                return;
            }
            let sceneElement = scene[currentSceneIndex];

            //region ==============加载背景================
            let bg_types = sceneElement.background.type.split("|");
            for (let bg_type of bg_types) {
                switch (bg_type) {
                    case "color":
                        game.stage.backgroundColor = sceneElement.background.color;
                        break;
                    case "image":
                        game.add.image(0, 0, sceneElement.background.res_key);
                        break;
                    case "tile_sprite":
                        game.add.tileSprite(0, 0, width_world, height_world, sceneElement.background.res_key);
                        break;
                }
            }
            //endregion


            //region ==============================加载布局==========
            let layout = sceneElement.layout;
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
                //region============添加=================

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
                    case "button":
                        // spriteMap[key] =  game.add.button();
                        break;
                }
                //endregion

                //region ================元素初始属性=================
                let spriteElement = spriteMap[key];
                //不存在的元素类型
                if (spriteElement === undefined || spriteElement === null) {
                    continue;
                }
                if (layout_element.hasOwnProperty("properties")) {
                    let properties = layout_element.properties;
                    if (properties.hasOwnProperty("alpha")) {
                        spriteElement.alpha = properties.alpha;
                    }
                    if (properties.hasOwnProperty("scale")) {
                        spriteElement.scale.set(properties.scale.x, properties.scale.y);
                    }
                    if (properties.hasOwnProperty("rotation")) {
                        spriteElement.rotation = properties.rotation;
                    }
                    if (properties.hasOwnProperty("angle")) {
                        spriteElement.angle = properties.angle;
                    }
                }
                //endregion

            }

            //endregion

            //region =====初始动画=========
            this.playAnimationList(sceneElement.init_animation, sceneElement.actions, spriteMap);
            //endregion

            // 开始准备播放动作
            let currentIndex = -1;

            game.input.onDown.add(function () {
                if (currentIndex === sceneElement.play_list.length - 1) {
                    return;
                }
                let playElement = sceneElement.play_list[++currentIndex];
                console.log("播放" + currentIndex);
                if (playElement !== undefined) {//有这个
                    this.playAnimationList(playElement.sprite_animation_list, sceneElement.actions, spriteMap);
                }
            }, this);


        };
        this.playAnimationList = function (animation_list, actions, spriteMap) {
            for (let action_key of animation_list) {
                let action_object = actions[action_key];
                //播放动作
                let spriteElement = spriteMap[action_object.sprite_key];
                this.playSpriteAnimation(spriteElement, action_object);

            }
        };

        this.playSpriteAnimation = function (spriteElement, action_object) {
            let type = action_object.type;
            let animationParameters = action_object.init_animation_parameters;
            let types = type.split("|");
            for (let anim_type of types) {
                switch (anim_type) {
                    case "spritesheet":
                        let parameter = animationParameters.spritesheet_parameter;
                        let anim = spriteElement.animations.add(parameter.name, parameter.frames, parameter.frameRate, parameter.loop);
                        anim.play();
                        break;
                    case "tween":
                        let tweenParameter = animationParameters.tween_parameter;
                        let tween = game.add.tween(spriteElement).to(
                            tweenParameter.properties,
                            tweenParameter.duration,
                            tweenParameter.ease,
                            false,
                            tweenParameter.delay,
                            tweenParameter.repeat,
                            tweenParameter.yoyo
                        );
                        tween.start();

                        break;
                    case "scale":
                        let scale_parameter = animationParameters.scale_parameter;
                        let tween_scale = game.add.tween(spriteElement.scale).to(
                            scale_parameter.properties,
                            scale_parameter.duration,
                            scale_parameter.ease,
                            false,
                            scale_parameter.delay,
                            scale_parameter.repeat,
                            scale_parameter.yoyo
                        );
                        tween_scale.start();
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