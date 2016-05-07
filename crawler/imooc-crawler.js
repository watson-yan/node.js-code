/*调用http模块*/
var http = require('http');
var cheerio = require('cheerio');

var url = 'http://www.imooc.com/learn/348';  //慕课网路径

/*
**http.get 发送请求
*/
http.get(url, function(res){
	var html='';
	res.on('data',function(data){
		html += data;
	});
	res.on('end', function(){
		var courseData = FilterChapters(html);
		PrintCourseInfo(courseData); //打印
	});
}).on('error',function(){
	console.log('请求失败');
});

/*
** 过滤方法
*/
function FilterChapters(html){
	var $ = cheerio.load(html);
	var courseData = [];
	//章
	var chapters = $('.mod-chapters');
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find('strong').text();

		//课程大纲
		var videos = chapter.find('.video').children('li');
		var chapterData = {
			title: chapterTitle,
			videos: []
		};

		//每一小节
		videos.each(function(item){
			var video = $(this).find('.studyvideo');
			var videoTitle = video.text();
			var id = video.attr('href').split('/video/')[1];
			chapterData.videos.push({
				videoTitle: videoTitle,
				id: id
			})
		});

		courseData.push(chapterData);
	});

	return courseData;
}

/*
** 打印方法
*/
function PrintCourseInfo(courseData){
	courseData.forEach(function(item){
		var courseTitle = item.chapterTitle;
		console.log(courseTitle + '\n');

		item.videos.forEach(function(item){
			console.log('[小节编号]' + item.id + '   小节视频名称：' + item.videoTitle);
		});
	})
}