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
                "res_key": "res_key",
                "color": "#000000"
            },
            "layout": [
                {
                    "key": "mummy",
                    "type": "sprite",
                    "image_frame": "",
                    "desc_image_frame": "非必须{string|number} [frame] - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name",
                    "desc_type": "sprite|group|student|image|text",
                    "desc": "最外层代表world,里面是子布局，可以是一个view，也可以是viewgroup",
                    "properties": {
                        "alpha": 0.5,
                        "scale": {
                            "x": 2,
                            "y": 1
                        },
                        "rotation": 1
                    },
                    "element_parameters": {
                        "text": "显示的文字",
                        "text_style": {
                            "fontSize": '60px',
                            "fill": "#0000ff"
                        }
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
                    "init_animation": {
                        "type": "spritesheet|tween|scale",
                        "desc_type": "dragonbone|spritesheet|atlas|tween|scale",
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
                                    "rotation": 0
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

                        },
                        "desc": "初始执行的动画"
                    }
                }
            ],
            "play_list": [
                {
                    "id": "123",
                    "name": "tod jump",
                    "type": "dragonbone|frame|tween|audio",
                    "sprite_animation_list": [
                        {
                            "id": "123",
                            "sprite_key": "sprite_key",
                            "delay": 1000,
                            "desc": "元动画对象,对象只是一个元素的一个动画，如果需要一个元素多个动画叠加，需要写多个，而且可以定义是否自动播放",
                            "auto_start": true,
                            "animation": {
                                "type": "dragonbone|spritesheet|atlas|translate|alpha|scale|rotate",
                                "desc": "这个精灵的动画对象",
                                "parameters": {
                                    "frame_rate": 25,
                                    "from_x": 0,
                                    "to_x": 123
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}