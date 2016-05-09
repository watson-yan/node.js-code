/*调用http模块*/
var http = require('http');
var cheerio = require('cheerio');
var Promise = require('bluebird');

var baseUrl = 'http://www.imooc.com/learn/';
var videoIds = [348, 259, 197, 134, 75];

function getPageAsync(url){
	return new Promise(function(resolve,reject){
		console.log('正在爬取 ' + url);
		
		//http.get 发送请求
		http.get(url, function(res){
			var html='';
			res.on('data',function(data){
				html += data;
			});
			res.on('end', function(){
				resolve(html); //传递下去
				//var courseData = FilterChapters(html);
				//PrintCourseInfo(courseData); //打印
			});
		}).on('error',function(e){
			reject(e);   //如果出错 返回错误
			console.log('请求失败');
		});
	});
}


var fetchCourseArray = [];
videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl + id));
})

Promise
	.all(fetchCourseArray)
	.then(function(pages){
		var coursesData = [];
		//对页面集进行过滤处理
		pages.forEach(function(html){
			var courseData = FilterChapters(html);

			coursesData.push(courseData);
		});

		coursesData.sort(function(a, b){
			return a.number < b.number;
		})

		PrintCourseInfo(coursesData);
	});


/*
** 过滤方法
*/
function FilterChapters(html){
	var $ = cheerio.load(html);
	var title = $('.path span').text();
	var number = parseInt($($('.course-infos .meta-value strong')[2]).text(), 10);
	//----结构----
	// var courseData = {
	// 	title: title,
	// 	num: num,
	// 	videos: [{
	// 		chapterTitle: chapterTitle,
	// 		videos:[{
	// 			id: id,
	// 			title: title
	// 		}]
	// 	}]
	// };

	var courseData = {
		title: title,
		number: number,
		videos: []
	}


	//章
	var chapters = $('.chapter');
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

		courseData.videos.push(chapterData);
	});

	return courseData;
}

/*
** 打印方法
*/
function PrintCourseInfo(coursesData){
	//先打印课程名
	coursesData.forEach(function(courseData){
		console.log('[课程名称]: ' + courseData.title + '  [学习人数]: ' + courseData.number + '\n');
	})

	coursesData.forEach(function(courseData){
		console.log('### 课程：' + courseData.title);

		courseData.videos.forEach(function(item){
			var courseTitle = item.title;
			console.log(courseTitle + '\n');

			item.videos.forEach(function(item){
				console.log('   [小节编号]' + item.id + '   小节视频名称：' + item.videoTitle);
			});
		})
	})
}