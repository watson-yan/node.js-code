var fs = require('fs');

var readStream = fs.createReadStream('miao_copy.jpg');
var writeStream = fs.WriteStream('stream_copy.jpg');

readStream
	.on('data', function(chunk){
		//防止读取速度大于写入速度
		if( writeStream.write(chunk) == false){
			console.log('still cached!');
			readStream.pause();
		}
	})
	.on('end', function(){
		console.log('read end');
		writeStream.end();
	})

writeStream
	.on('drain', function(){
		//块数据写完，继续启用读取流
		console.log('data drains');
		readStream.resume();
	})


