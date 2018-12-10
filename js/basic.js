/**
 * js数据类型
 * 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
 * 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
 *
 * 也就是说普通对象Object 和函数对象Function
 * ==========js原型链===========
 * https://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
 * js原来没有class所以不能创建对象，但是js要设计成面向对象编程的语言，怎么办？
 * 1.var obj = new Object;
 *  obj.xxx=1;
 *  obj.fun=function(){}
 *  这样来创建一个对象
 * 2.这样不方便复用，所以我们就用工厂模式来创建
 * function Car(id){
 *     var car =  new Object();//等于 var car={}
 *     car.__proto__=Car.原型
 *     car.xxx=id;
 *     car.fun=function(){}
 *     return car;
 * }
 * Car.原型={
 *
 * }
 *
 * 3、后来为了简化，推出了new关键字，原理同上，就是语法糖
 * new出来的Car 自动返回对象，而且对象原型关联了 函数对象Car的原型
 *
 *
 *
 *
 *
 * 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性
 * prototype属性指向一个对象，这个对象有个默认的属性，叫constructor，它指向函数对象
 *
 * Person.prototype.constructor == Person
 *
 * Person就是指向函数对象（函数名默认指向函数对象）
 *
 *
 *
 *
 * */

/**
 * 原因是加载了两次同样key的资源
 * Uncaught TypeError: Cannot read property 'compressionAlgorithm' of null
 at ./libs/phaser/pixi.js.PIXI.BaseTexture.updateTexture (pixi.js:7488)
 at ./libs/phaser/pixi.js.PIXI.WebGLRenderer.updateTexture (pixi.js:3821)
 at ./libs/phaser/pixi.js.PIXI.WebGLSpriteBatch.renderBatch (pixi.js:5356)
 at ./libs/phaser/pixi.js.PIXI.WebGLSpriteBatch.flush (pixi.js:5335)
 at ./libs/phaser/pixi.js.PIXI.WebGLSpriteBatch.stop (pixi.js:5373)
 at PhaserSlotMeshDisplay../libs/phaser/phaser-split.js.Phaser.BaseMesh._renderWebGL (phaser-split.js:95692)
 at PhaserArmatureDisplay../libs/phaser/pixi.js.PIXI.Sprite._renderWebGL (pixi.js:1939)
 at ./libs/phaser/phaser-split.js.Phaser.World../libs/phaser/pixi.js.PIXI.DisplayObjectContainer._renderWebGL (pixi.js:1420)
 at ./libs/phaser/phaser-split.js.Phaser.Stage../libs/phaser/pixi.js.PIXI.DisplayObjectContainer._renderWebGL (pixi.js:1420)
 at ./libs/phaser/pixi.js.PIXI.WebGLRenderer.renderDisplayObject (pixi.js:3769)
 *
 * */


/*
* 推荐在循环对象属性的时候，使用for...in,在遍历数组的时候的时候使用for...of。

for...in循环出的是key，for...of循环出的是value

注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足

for...of不能循环普通的对象，需要通过和Object.keys()搭配使用
*
* */