var fs = require('fs');

fs.readFile('miao.jpg', function(error,origin_buffer){
	console.log(Buffer.isBuffer(origin_buffer));

	fs.writeFile('miao_buffer.jpg', origin_buffer, function(err){
		if(err) console.log(err);
	});

	var base64Image = origin_buffer.toString('base64');
	console.log(base64Image);

	//又把base64Image变为buffer对象
	var buf = new Buffer(base64Image, 'base64');
	console.log(Buffer.compare(buf, origin_buffer));

	fs.writeFile('miao_decode.jpg', buf, function(err){
		if(err) console.log(err);
	});
});