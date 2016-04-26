/*
*原型链
*/

Object.prototype.z = 'Human';
var object1 = new Object();
object1.name = 'Lily';
object1.age = 2;

//Object.prototype.z = 'Human'; 不能放置对象初始化之后，否则所指向的prototype对象不同

console.log(object1.z);