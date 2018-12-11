

/*
* 动画可以是个数组
* game.add.tween(logo).to( { x: [ w, w, 0, 0 ], y: [ 0, h, h, 0 ] }, 4000, "Sine.easeInOut", true, -1, false);
* ======设置显示帧===========
* sprite.frame=2;//
* ========相对位置========
* game.add.tween(sprite).to( { x: '+300' }, 2000, Phaser.Easing.Linear.None, true);
*
*  ==========可以将精灵表格中的某一帧作为一个精灵==================
* add.sprite时候指定

*
*
*
*
*
* */

/*===========group=============
* *========组中创建精灵=========
*    sprites = game.add.group();
    sprites.create(100, 100, 'beball');
*  ----------遍历--------
*  sprites.cursor
*  sprites.next();
*
* */


/*==========input=================
* * ====================精灵允许拖动===========
*  tempSprite.inputEnabled = true;
   tempSprite.input.enableDrag(false, true);
** ==========点击事件===========
* 	sprite.inputEnabled = true;
	sprite.events.onInputDown.add(move, this);
*
*
*
* */


/*==============loader===============
*  ==============加载瓦片地图=============
*   game.load.tilemap('mario', 'assets/tilemaps/maps/super_mario.json', null, Phaser.Tilemap.TILED_JSON);
*  =============判断cache是否存在=========
*  game.cache.checkImageKey（‘’）
*
* ===============获取缓存key==================
* game.cache.getKeys(Phaser.Cache.IMAGE);
*
* */

/*========debug=============
===========鼠标信息=========================
*  game.debug.inputInfo(32, 32); //
*============精灵信息=====
*  game.debug.spriteInfo(s, 20, 32);
*
*
* */

/*====random===============
* game.rnd.angle()
*  game.rnd.integerInRange(0, my)
*
* */

/*============= sprite=================
* ========对齐边框=============
*   rect = new Phaser.Rectangle(100, 50, 600, 500);

    //  Try some of the commented-out positions below to see what happens
    sprite1.alignIn(rect, Phaser.TOP_LEFT);
    sprite2.alignIn(rect, Phaser.TOP_CENTER);
    sprite3.alignIn(rect, Phaser.BOTTOM_RIGHT);
========================对齐精灵=======
sprite.alignTo(sprite1, Phaser.RIGHT_CENTER, 16)
* ===============销毁sprite=============
*sprite.destroy();
* ================crop============
* sprite.crop(cropRect);
* function update () {
    pic.updateCrop();
}
* =============判断两个精灵是否重叠，不用物理引擎======
* function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

*=================旋转=============
*   orb = game.add.sprite(400, 300, 'ball');
    orb.anchor.setTo(0.5);
    orb.pivot.x = 100;
*       orb.x = ship.x;
    orb.y = ship.y;
*  //orb.rotation += 0.05; 改变这个就可以
*
* */