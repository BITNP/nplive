
$(function(){
	args=getArgs();
	var iWidth = $('.container').eq(1).width();
    // videoPlayer.size(iWidth,iWidth*9/16);

});

function getArgs(){
    var args = {};
    var match = null;
    var search = decodeURIComponent(location.search.substring(1));
    var reg = /(?:([^&]+)=([^&]+))/g;
    while((match = reg.exec(search))!==null){
        args[match[1]] = match[2];
    }
    return args;
}