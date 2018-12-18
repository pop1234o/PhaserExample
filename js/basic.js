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

/*
js object就是map，底层引擎很多都是hashmap的实现，es5的key必须是字符串类型
es6
* var map = {};
// add a item
map[key1] = value1;
// or remove it
delete map[key1];
// or determine whether a key exists
key1 in map;
*
*
* */


let key = "key";
//访问域
let obj = {//创建一个对象，里面有方法和属性,不用var声名
    name: "",
    func: function () {
        console.log(this.name);//访问这个对象的
        // console.log(name); 错误的
        console.log(key);
    }
};

console.log(obj.name);
obj.func();

function ClassName() {//定义构造函数
    this.name = "";//这个对象的属性
    this.func = function () {
        console.log(this.name);
    };
}

ClassName.prototype = {
    fatherFun: function () {

    }
};

let className = new ClassName();
className.fatherFun();


/*
* js遍历对象
* for in 或者 Object.keys(obj)返回一个数组
* 遍历数组
* arr.forEach(function(val,index,array){})
* for in 用arr[key]
* 或者直接for of
* */


/*
* apply call bind方法
* 都是为了改变上下文
*
*
* */

Function.prototype.bind = function (ctx) {
    var fn = this;
    return function () {
        fn.apply(ctx, arguments);
    };
};


/*
* =============new 关键字==================
* JSON (JavaScript Object Notation) is a lightweight data-interchange format.
* It is easy for humans to read and write. It is easy for machines to parse and generate.
* -----------------
* js new出来的对象就是json对象
* -----------
* debugger相当于断点
*
* {
* "xxx":"xxx",
* "__prototype__":{
*    "constructor":构造函数对象,
*    "__prototype__":{Object对象}
*  }
* }
*===============================
* obj.key = 123;
* 相当于 obj["key"] 这个.key代表字符串
*=======================
* foo.hasOwnProperty(key)
* 只包含自己的
*============================
* http://www.w3school.com.cn/js/pro_js_object_defining.asp
* new 省去了new Object()和return 的过程
* this指向的其实就是 新创建的对象
* 使用 new 运算符构造函数时，在执行第一行代码前先创建一个对象，只有用 this 才能访问该对象。然后可以直接赋予 this 属性，
* 默认情况下是构造函数的返回值（不必明确使用 return 运算符）。
*========================
* Foo 函数名是 function对象，他不是object对象
* object对象是{key:value}  函数对象是特殊的对象，他不是key-value形式的
* foo.__proto__ === Foo.prototype
* 两个都是指向的是一个object  ，里面是{constructor:指向函数对象，这个函数就是构造函数对象,__proto__;{...}}
*=======================
* 函数对象中的prototype属性指向的object和所有实例化的对象的 __proto__指向的是一个对象
*
*
*
* */


/*
* =============es创建对象=============
* http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html
*
* js 对象的属性和key是两个概念
*
* */

/*
* ==========es继承===========
* http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html
*
*
*
* */

/*
* 设计模式
*
* */

/*
* =============解构=================
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
* var o = {p: 42, q: true};
* console.log(foo); // 42
console.log(bar); // true
var {p: foo, q: bar} = o;
* 可以
*
* */