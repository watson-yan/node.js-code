var fs = require('fs');

var streamReader = fs.createReadStream('miao_copy.jpg');
var n = 0;

streamReader
	.on('data', function(chunk){
		n++;
		console.log('data start');
		console.log(Buffer.isBuffer(chunk));
		//console.log(chunk.toString('utf-8'));
		streamReader.pause();
		console.log('read stream pause!');
		setTimeout(function(){
			console.log('read stram pause end');
			streamReader.resume();
		}, 2000);
	})
	.on('readable', function(){
		console.log('data readable');
	})
	.on('end', function(){		//数据传递完成以后.目标不再可被写
		console.log(n);
		console.log('data ends');
	})
	.on('close', function(){
		console.log('data close');
	})
	.on('error', function(err){
		console.log('data read error:' + err);
	})