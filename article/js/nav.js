$(function(){	
	var win = $(window).width();
	if ( win < 415 ){
	$("#down,#next-part4,#next-part5").click(function(){
		$("html,body").animate({scrollTop:$("#add_down").offset().top - 60}, 900);
		return false;
	});
	} else {
	$("#down,#next-part4,#next-part5").click(function(){
		$("html,body").animate({scrollTop:$("#add_down").offset().top - 80}, 900);
		return false;
	});
	}
});


