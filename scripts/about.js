var modelbody = document.getElementById('modelbody');
var carouselinner = document.getElementById('carousel-inner');
function showimage(source) {
    modelbody.innerHTML='<img width="100%" src="'+source+'" >';
};
$(function(){
	var wrap = $("#wrap-container"),
		wrapHeight = wrap.height(),
		car = $("#about-carousel-container"),
		carHegiht = car.height(),
		cwarpH = carHegiht - 51,
		wrapList = $("#wrap-container li"),
		dataWrapArr = wrapList.map(function(index, value){
						return value.dataset['wrap'];
					});
		dataWrapHeightArr = dataWrapArr.map(function(i, v){
			return $(v).offset().top;
		});
		wrapList.click(function(){
			var height = dataWrapHeightArr[$(this).index()];
			$("body, html").animate({
				scrollTop: height - 50
				},500, function() {
				/* stuff to do after animation is complete */
			});
		});
	$(window).scroll(function(event) {
		/* Act on the event */
		var scrollTop = $(window).scrollTop() ;
		if(scrollTop > cwarpH){
			wrap.addClass('wrap-fixed').removeClass('wrap-absolute');
		}
		else{
			wrap.addClass('wrap-absolute').removeClass('wrap-fixed');
		}

		var qid = -1;

		dataWrapHeightArr.map(function(index, value){
			if(scrollTop >= value - 50){
				qid = index;
			}
		});
		if(qid != -1) $(wrapList[qid]).addClass('active').siblings().removeClass('active');
		else wrapList.removeClass('active');

	});

	//the leaders
    $.ajax({
        url:"http://www.finalab.cn:12580/sys/member/getCouncil",
        type: "POST",
        dataType: "JSON",
        success: function (res) {
            let result = res.data;
            if (result) {
                $('.leader-ul').html("");
                for (let i = 0;i < result.length; i++){
                    $('.leader-ul').append('<li class="leader-li">\n' +
                        '<p class="leader-photo"><img src="'+ result[i].image +'" alt=""></p>\n' +
                        '<h2 class="leader-name">'+ result[i].name +'</h2>\n' +
                        '<h4 class="leader-job">'+ result[i].levelName +'</h4>\n' +
                        '<p class="leader-words">'+ result[i].catchphrase +'</p>\n' +
                        '</li>')
                }
            }
        }
    })
	//the win
    $.ajax({
        url:"http://www.finalab.cn:12580/sys/winning/getAll",
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (res) {
            let result = res.data;
            if (res) {
                $('.award-ul').html("");
                for (let i = 0;i < result.length; i++){
                    $('.award-ul').append('<li class="award-li">\n' +
                        '<h4><img src="'+result[i].awardImage+'" alt="">'+result[i].name+'</h4>\n' +
                        '<p class="award-award">'+result[i].awardName+'</p>\n' +
                        '<div class="award-imglist">\n' +
                        '<h4>奖项照</h4>\n' +
                        '<img data-toggle="modal" data-target="#myModal" ' +
                        ' src="'+result[i].awardImage+'" onclick="showimage(\''+result[i].awardImage+'\')" />\n' +
                        '</div>\n'+
                        '<div class="award-time">'+result[i].time.substring(0,10)+'</div>\n' +
                        '<div class="award-desc">\n' +
                        ''+result[i].profile+'' +
                        '</div>\n' +
                        '</li>');
                }
                $(".award-li").hover(function(){
                    $(this).addClass('active').siblings().removeClass('active');
                }, function(){
                });
            }
        },
        complete: function () {
            var list = document.getElementsByClassName('award-ul')[0]//这个list指的是选取的整个ul，通过getElementsByClassName(拿到的是一个数组，长度为1
            list.style.left = '0px';
            var listlength = list.getElementsByClassName('award-li').length;
            list.style.width = listlength * 320 + 'px';
            var prev = document.getElementById('prev');//是呀没毛病呀对呀  ？？？ 为啥是一个长度为1的数组，不应该死一个对象？不是对象，你重新建一个html，我演示一下
            var next = document.getElementById('next');//等等你删我注释干嘛
            var a;
            next.onmouseover = function () {
                a = setInterval(function () {
                    if(parseInt(list.style.left) > -(listlength - 8) * 370)
                    {
                        console.log(parseInt(list.style.left));
                        list.style.left = parseInt(list.style.left) - 1 + 'px';
                    }
                },5);
            };
            next.onmouseleave = function () {
                clearInterval(a);
            };
            prev.onmouseover = function () {
                a = setInterval(function () {
                    if(parseInt(list.style.left) < 0)
                    {
                        list.style.left = parseInt(list.style.left) + 1 + 'px';
                    }
                },5);
            };
            prev.onmouseleave = function () {
                clearInterval(a);
            };
        }
    })
});
