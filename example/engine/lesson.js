window.lesson = {
    "id": "1",
    "name": "课程1",
    "sources": [
        {
            "key": "mummy",
            "url": "../assets/sprites/metalslug_mummy37x45.png",
            "parameters": {
                "atlas_url": "",
                "spritesheet_width": 37,
                "spritesheet_height": 45,
                "spritesheet_max_frame": 18
            },
            "type": "spritesheet",
            "desc_type": "image|spritesheet|atlas|atlasJSONHash|audio",
            "desc": "这个课程所需的所有资源，包括图片，json，audio"
        }
    ],
    "scene": [
        {
            "id": "1",
            "name": "sence_name",
            "desc": "代表一个场景，每个场景有不同的布局，背景",
            "type": "class|outdoor|pk",
            "background": {
                "type": "",
                "desc_type": "color|image|tile_sprite",
                "res_key": "res_key",
                "color": "#000000"
            },
            "layout": [
                {
                    "key": "mummy",
                    "type": "sprite",
                    "image_frame": "",
                    "desc_image_frame": "非必须{string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name",
                    "desc_type": "sprite|group|image|text|button|student",
                    "desc": "最外层代表world,里面是子布局，可以是一个view，也可以是viewgroup",
                    "properties": {
                        "alpha": 0.5,
                        "scale": {
                            "x": 2,
                            "y": 1
                        },
                        "angle": 0,
                        "rotation": 0
                    },
                    "element_parameters": {
                        "text": "显示的文字",
                        "text_style": {
                            "fontSize": '60px',
                            "fill": "#0000ff"
                        },
                    },
                    "position": {
                        "x": 100,
                        "y": 100,
                        "anchor_x": 0.5,
                        "anchor_y": 0.5,
                        "width": "123",
                        "height": "123"
                    },
                    "child": [],

                }
            ],
            "init_animation": ["mummy_animation"],
            "play_list": [
                {
                    "id": "123",
                    "name": "tod jump",
                    "desc": "一个按钮按下需要执行动画的集合",
                    "sprite_animation_list": [
                        "mummy_animation"
                    ]
                }
            ],
            "actions": {
                "mummy_animation": {
                    "sprite_key": "mummy",
                    "type": "spritesheet|tween|scale",
                    "desc_type": "dragonbone|spritesheet|atlas|tween|scale",
                    "desc": "初始执行的动画",
                    "init_animation_parameters": {
                        "spritesheet_parameter": {
                            "name": "walk",
                            "frames": [],
                            "frameRate": 10,
                            "loop": true,
                            "desc_spritesheet": "表格动画或者图集动画",
                        }
                        ,
                        "tween_parameter": {
                            "properties": {
                                "alpha": 1,
                                "y": 500,
                                "angle": 360
                            },
                            "ease": "Linear",
                            "duration": 2000,
                            "delay": 1000,
                            "repeat": 0,
                            "yoyo": false
                        },
                        "scale_parameter": {
                            "properties": {
                                "x": 1,
                                "y": 1
                            },
                            "ease": "Linear",
                            "duration": 2000,
                            "delay": 1000,
                            "repeat": 0,
                            "yoyo": false
                        }

                    }
                }

            }


        }
        , {
            "id": "1",
            "name": "sence_name",
            "desc": "代表一个场景，每个场景有不同的布局，背景",
            "type": "class|outdoor|pk",
            "background": {
                "type": "",
                "desc_type": "color|image|tile_sprite",
                "res_key": "res_key",
                "color": "#000000"
            },
            "layout": [
                {
                    "key": "mummy",
                    "type": "sprite",
                    "image_frame": "",
                    "desc_image_frame": "非必须{string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name",
                    "desc_type": "sprite|group|image|text|button|student",
                    "desc": "最外层代表world,里面是子布局，可以是一个view，也可以是viewgroup",
                    "properties": {
                        "alpha": 0.5,
                        "scale": {
                            "x": 2,
                            "y": 1
                        },
                        "angle": 0,
                        "rotation": 0
                    },
                    "element_parameters": {
                        "text": "显示的文字",
                        "text_style": {
                            "fontSize": '60px',
                            "fill": "#0000ff"
                        },
                    },
                    "position": {
                        "x": 100,
                        "y": 100,
                        "anchor_x": 0.5,
                        "anchor_y": 0.5,
                        "width": "123",
                        "height": "123"
                    },
                    "child": [],

                }
            ],
            "init_animation": ["mummy_animation"],
            "play_list": [
                {
                    "id": "123",
                    "name": "tod jump",
                    "desc": "一个按钮按下需要执行动画的集合",
                    "sprite_animation_list": [
                        "mummy_animation"
                    ]
                }
            ],
            "actions": {
                "mummy_animation": {
                    "sprite_key": "mummy",
                    "type": "spritesheet|tween|scale",
                    "desc_type": "dragonbone|spritesheet|atlas|tween|scale",
                    "desc": "初始执行的动画",
                    "init_animation_parameters": {
                        "spritesheet_parameter": {
                            "name": "walk",
                            "frames": [],
                            "frameRate": 10,
                            "loop": true,
                            "desc_spritesheet": "表格动画或者图集动画",
                        }
                        ,
                        "tween_parameter": {
                            "properties": {
                                "alpha": 1,
                                "y": 500,
                                "angle": 360
                            },
                            "ease": "Linear",
                            "duration": 2000,
                            "delay": 1000,
                            "repeat": 0,
                            "yoyo": false
                        },
                        "scale_parameter": {
                            "properties": {
                                "x": 1,
                                "y": 1
                            },
                            "ease": "Linear",
                            "duration": 2000,
                            "delay": 1000,
                            "repeat": 0,
                            "yoyo": false
                        }

                    }
                }
            }

        }
    ]
}