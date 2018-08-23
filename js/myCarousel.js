var iCarImgNum = 5;
var iCarImgIndex = 0;
var tTimer;

//main function
$(function(){
	//if object "#carousel .Img" exists, Begin carousel
	if($("#carousel .Img").length > 0)beginCarousel();

});

//carousel entry
function beginCarousel(){
	
	$("#carousel ul").show();
	$("#carousel .Img").eq(0).show().siblings().hide();
	StartTimer(tTimer);

	$("#carousel").hover(function(){
		$("#carousel .btns").fadeIn(300);
	},function(){
		$("#carousel .btns").fadeOut(300);
	});
	$("#carousel li").hover(function(){
		iCarImgIndex = $(this).index();
		refreshImg(iCarImgIndex);
		clearInterval(tTimer);
	},function(){
		StartTimer(tTimer);
	});

	$("#carousel .btn1").click(function(){
		clearInterval(tTimer);
		if(iCarImgIndex <= 0)
			iCarImgIndex = iCarImgNum - 1;
		else
			iCarImgIndex--;
		refreshImg(iCarImgIndex);
		StartTimer(tTimer);
	});

	$("#carousel .btn2").click(function(){
		clearInterval(tTimer);
		if(iCarImgIndex == iCarImgNum - 1)
			iCarImgIndex = 0;
		else
			iCarImgIndex++;
		refreshImg(iCarImgIndex);
		StartTimer(tTimer);
	});

	$("#carousel .Img").click(function(){
		window.location.href="bitnp-live-video.html";
	});
}

//refresh images
function refreshImg(){
	$("#carousel .Img").eq(iCarImgIndex).fadeIn(300).siblings().fadeOut(300);
	$("#carousel li").eq(iCarImgIndex).addClass("hoverLi").siblings().removeClass("hoverLi");
}

//start timer
function StartTimer(){
	tTimer = setInterval(function(){
		iCarImgIndex++;
		if(iCarImgIndex > iCarImgNum)
			iCarImgIndex = 0;
		refreshImg(iCarImgIndex);
	},4000);
}

//Position configuration function
function positionConfig(iWidth,iHeight){
	$("#carousel .Img").css({
		"width":iWidth+'px',
		"height":iHeight+'px'});
	$("#carousel .btns").css("top",iHeight/2 + 'px');
	$("#carousel .btn2").css("left",iWidth-parseInt($("#carousel .btns").width())+'px');
	$("#carousel ul").css({
		"top":iHeight-30+'px',
		"left":(iWidth-parseInt($("#carousel ul").width()))/2 + 'px'
	});
	$("#imgs").css("height",iHeight+'px');
	//$("#carousel").css("height",iHeight+100+'px');
	//
	//video
	$("#video_1").css({
		"width":iWidth + "px",
		"height":iHeight + "px"
	});
}

//mediate function
function mediate(){
	var iWidth;
	//if object "#carousel .Img" exists
	if($("#carousel .Img").length > 0){
		iWidth = $("#carousel .Img").css('width')
	}
	else
	{
		iWidth = $("#video_1").css('width');
	}
	$("#carousel").css("left",(parseInt($(window).width())-parseInt(iWidth))/2 + 'px');
}