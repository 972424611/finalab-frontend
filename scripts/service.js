$(function(){
    $("#service-carousel-bar").particleground({
        dotColor: '#5cbdaa',
        lineColor: '#5cbdaa'
    });
	var wrap = $("#wrap-container"),
		wrapHeight = wrap.height(),
		car = $("#service-carousel-container"),
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
			console.log("fixed");
		}
		else{
			wrap.addClass('wrap-absolute').removeClass('wrap-fixed');
			console.log("absolute");
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
});
