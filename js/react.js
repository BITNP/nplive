$(function(){
	//window.onload = function(){
			winResize();
			$("#2017junli").find("div:nth-child(3)").nextAll().hide();
	//}
	window.onresize = function(){
			winResize();
	}

	$("#history .more").click(function(){
		if($(this).hasClass("more-close")){
			$(this).parent().siblings().show();
		}else{
			$(this).parent().parent().find("div:nth-child(3)").nextAll().hide();
		}
		$(this).siblings().show();
		$(this).hide();
	});
});

//if window resize
function winResize(){

	var iWidth = $('.container').eq(1).width();

	if(typeof(videoPlayer) != "undefined")videoPlayer.width(iWidth);



	if($("#history").hasClass("history1120")){
		$("#history").removeClass("history1120");
		$(".history-section").removeClass("history-section1120");
		$(".content").removeClass("content1120");
	}
	if($("#history").hasClass("history940")){
		$("#history").removeClass("history940");
		$(".history-section").removeClass("history-section940");
		$(".content").removeClass("content940");
	}
	if($("#history").hasClass("history720")){
		$("#history").removeClass("history720");
		$(".history-section").removeClass("history-section720");
		$(".content").removeClass("content720");
	}
	if($("#history").hasClass("history100")){
		$("#history").removeClass("history100");
		$(".history-section").removeClass("history-section100");
		$(".content").removeClass("content100");
		$(".content").css("height","");
		//nav
		$("#nav-aboutUs").show();
		$("#nav-bitnpIndex").show();
	}

	if(iWidth >= 1120){
		$("#history").addClass("history1120");
		$(".history-section").addClass("history-section1120");
		$(".content").addClass("content1120");
		// $(".content").eq(1).show();
		// $(".content").eq(2).show();
	}else if(iWidth >= 940){
		$("#history").addClass("history940");
		$(".history-section").addClass("history-section940");
		$(".content").addClass("content940");
		// $(".content").eq(1).show();
		// $(".content").eq(2).show();
	}else if(iWidth >= 720){
		$("#history").addClass("history720");
		$(".history-section").addClass("history-section720");
		$(".content").addClass("content720");
		// $(".content").eq(1).show();
		// $(".content").eq(2).hide();
	}else{
		$("#history").addClass("history100");
		$(".history-section").addClass("history-section100");
		$(".content").addClass("content100");

		// $(".content").eq(1).hide();
		// $(".content").eq(2).hide();
		//nav
		$("#nav-bitnpIndex").hide();
		$("#nav-aboutUs").hide();
	}

	// switch(true){
	// 	case (iwidth >= 1120):
	// 	{
	// 		$("#history").addClass("history1120");
	// 		$(".history-section").addClass("history-section1120");
	// 		$(".content").addClass("content1120");
	// 		$(".content").eq(1).show();
	// 		$(".content").eq(2).show();
	// 	}
	// 	break;
	// 	case (iwidth < 1120&&iWidth >= 940):
	// 	{
	// 		$("#history").addClass("history940");
	// 		$(".history-section").addClass("history-section940");
	// 		$(".content").addClass("content940");
	// 		$(".content").eq(1).show();
	// 		$(".content").eq(2).show();
	// 	}
	// 	break;
	// 	case (iwidth < 940&&iWidth >= 720):
	// 	{
	// 		$("#history").addClass("history720");
	// 		$(".history-section").addClass("history-section720");
	// 		$(".content").addClass("content720");
	// 		$(".content").eq(1).show();
	// 		$(".content").eq(2).hide();
	// 	}
	// 	break;
	// 	default:
	// 	{
	// 		$("#history").addClass("history100");
	// 		$(".history-section").addClass("history-section100");
	// 		$(".content").addClass("content100");

	// 		$(".content").eq(1).hide();
	// 		$(".content").eq(2).hide();
	// 		//nav
	// 		$("#nav-bitnpIndex").hide();
	// 		$("#nav-aboutUs").hide();
	// 	}
	// 	break;
	// }

	// $('.whiteIfHovered').hover(function(){
	// 	$(this).css("color","rgb(242,242,242)");
	// },function(){
	// 	$(this).css("color","rgb(128,128,128)");
	// });
}

