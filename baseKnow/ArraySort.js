/*
** 数组冒泡排序
*/
var sort = function(arr){
	var temp;
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length - i; j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
};


var array = [1,2,4,13,12,2,1,4,5,1,6,7,9,8,5,3];
sort(array);
console.log(array);