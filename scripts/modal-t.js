var responseImg = {
			"success": "&#xe628;",
			"error" : "&#xe62a;",
			"linkerror" : "&#xe629;"
	};
//setResponseImg("发表成功", "success", 1000, function(){});
function setResponseImg(tx, a, ti, calls){
	var responseimg = $('<div class="discuss-response-img ' + a +' clearfix" style="display:none;"><span class="iconfont ">' + responseImg[a]+ '</span><span class="icontextBar fr"><span class="icon-text">' + tx + '</span></span></div>');
	var height = $(window).height();
	var width = $(window).width();
	$("body").append(responseimg);
	responseimg.css({
		"position":"fixed", 
		"left" : (width - responseimg.width()) / 2,
		"top" :(height - responseimg.height()) / 2,
		"zIndex": 300,
		"display":"block",
		"opacity":0});
	responseimg.animate({"opacity":1}, 500);
	responseimg.animate({"opacity" : 0}, ti, function(){
		//responseimg.remove();
		if(typeof(calls) === 'function'){
			calls();
		}
	});
}

function scrolljs(sj, ej, c){
		var self = this;
		var cz = sj < ej ? 1 : -1;
		$(document).scrollTop(sj);
		if(sj == ej) return;
		sj += cz * c;
		if(cz == 1){
			if(sj > ej) sj = ej;
		}
		else{
			if(sj < ej) sj = ej;
		}
		requestAnimationFrame(function(){
			scrolljs(sj, ej, c);
		});
}


function unhtml(a, b) {
			return a ? a.replace(b || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
				return b ? a : {
					"<": "&lt;",
					"&": "&amp;",
					'"': "&quot;",
					">": "&gt;",
					"'": "&#39;"
				}[a]
			}) : ""
		}