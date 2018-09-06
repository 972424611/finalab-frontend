$(function() {

    //banner
	var rand = Math.random();
    if(rand <= .5){
        $('#carousel-bar').append('<img src="images/banner.jpg" alt="banner">');
	} else{
        $('#carousel-bar').append('<img src="images/service-banner.png" alt="banner">');
	}

	var flag = false;
	function hover() {
		if (flag) return false;
		flag = true;
		$(this).siblings().animate({
			width: "13%",
			height: "400px"
		}, "100ms");
		$(this).animate({
			width: "35%",
			height: "470px"
		}, "100ms", function() {
			flag = false;
		});

		$(this).siblings().removeClass('fc-fc-list-item-active').addClass('fc-fc-list-item');
		$(this).removeClass('fc-fc-list-item').addClass('fc-fc-list-item-active');
	}
	$(".fc-fc-list>li").hover(
		hover,
		function() {});

	var wrap = $("#wrap-container"),
		wrapHeight = wrap.height(),
		car = $("#carousel-container"),
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
			// console.log("fixed");
		}
		else{
			wrap.addClass('wrap-absolute').removeClass('wrap-fixed');
			// console.log("absolute");
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
	//video
    $('.video-container').hide();
    $('.btnstart').on("click",function(){
        $('.video-container').show();
        $('.video-container').html('<video class="video-content" width="1000" height="580" controls>\n' +
            '<source src="http://img.finalab.cn/finalab-data/video/final.mp4" type="video/mp4">\n' +
            '您的浏览器不支持 video 标签。\n' +
            '</video>\n' +
            '<span class="video-close">X</span>');
    });
	$('.video-container').on("click",".video-close",function(){
        $('.video-container').html('');
        $('.video-container').hide();
	})
});

