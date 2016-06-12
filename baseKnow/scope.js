/*
** 解析:
** 在挂载test2的时候 把里面的变量和方法先提炼出来
** 里面声明了 i1 即test2方法的环境里面先为它声明了 i1: undefined 直到var i1 = '11'的时候 i1才有值
*/

// var i1 = 10;
// function test2(){
// 	console.log(i1);  //undefined
// 	var i1 = '11';
// 	console.log(i1);	// 11
// }

// test2();



//这个很容易看懂
// name = "test";  
// function t(){  
//     var name = "test1";  
//     function s(){  
//         var name = "test2";  
//         console.log(name);  
//     }  
//     function ss(){  
//         console.log(name);  
//     }  
//     s();  
//     ss();  
// }  
// t(); 

function test(){
	myName = 'test';
	console.log(myName);
}

test();

console.log(myName);
