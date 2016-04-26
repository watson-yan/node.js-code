/*
*原型链的相关用法
*/
Object.prototype.z = 'Human';
var object1 = new Object();
object1.name = 'Lily';
object1.age = 2;

//Object.prototype.z = 'Human'; 不能放置对象初始化之后，否则所指向的prototype对象不同

console.log(object1.z);

console.log('z' in object1);  //z这个属性是可以从object1这个对象上找到的
console.log(object1.hasOwnProperty('z')); 
//但是object1自身并没有这个属性，z是属于原型链上的z，object1的原型指向Object


console.log(object1.prototype);

object1.z = 10;  //尝试改变z的值，看是否能修改原型链中的值
console.log(object1.z);   //10
//会在自身创建一个z属性，并赋值为10
console.log(object1.hasOwnProperty('z')); //true


delete object1.z  //删除z,删除自身的属性z 那么z还是指向原型链上的z =3
console.log(object1.z);   //3
console.log(object1.hasOwnProperty('z')); //false


/*
*创建对象
*/

//Object.create创建对象，对象的原型会指向参数这个对象
var obj = Object.create({x:1});
console.log(obj.x); //1
console.log(obj.hasOwnProperty('x')); //false