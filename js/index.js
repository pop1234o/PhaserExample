// var myNameSpace = (function toString() {
//     var num = 10;
//     document.write("aaa");
//     return {
//         getNum: function () {
//             return num;
//         }
//     }
// })();
//
// (function f() {
//
//     document.write("====")
// }());
// //两种方式的立即执行
//
// //这个需要new
// var myNameSpace1 = function toString() {
//     var num = 10;
//     document.write("aaa");
//     return {
//         getNum: function () {
//             return num;
//         }
//     }
// };
//
// var myNameSpace1_1 = function toString() {
//     var num = 10;
//     document.write("aaa");
//     var obj = {
//         getNum: function () {
//             return num;
//         }
//     };
//     return obj;
// };

//new 关键字的作用
//https://zhuanlan.zhihu.com/p/23987456
/**
 *
 *
 *
 **/

//工厂模式
//每个对象都有一份变量
function Car(ID) {
    var car = {}
    car.__proto__ = Car.prototype;

    car.ID = ID;
    car.wheel = 4;
    return car;
}

//多个对象共用一份变量  相当于静态的
Car.prototype = {
    name: "car",
    getName: function () {
        return this.name; //这里一定要写this
    },
    setName: function (name) {
        this.name = name;
    }
};


var car = Car(1);

document.write("====="+car.getName());
car.setName("123")
document.write(car.getName());


//使用new===这种是标准写法===========
// https://zhuanlan.zhihu.com/p/23987456

function Car1(ID) {//定义构造函数

    //这里省去了对象定义，原型指向，return对象 new就是语法糖  new使得创建的对象的原型指向了函数对象，省的我们自己写了
    this.ID = ID;
    this.wheel = 4;
}

//多个对象共用一份变量  相当于静态的
Car1.prototype = {
    name: "car1",
    getName: function () {
        return this.name; //这里一定要写this
    },
    setName: function (name) {
        this.name = name;
    }
};
var car1 = new Car1(1);//car1这个对象的原型指向Car函数对象的原型

document.write("====="+car1.wheel);


/*
*
* 数组也是map
* {
* "0":1
* "2":'adf'
* }
*
* */

var pos=[];
pos.push("");
pos.push(1);
pos.push(true);

/*
*
* var style = { font: "48px Arial", fill: "#ff0044", align: "center" }
* */