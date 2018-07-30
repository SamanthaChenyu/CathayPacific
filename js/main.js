$(function() {

	$.scrollify({
		section:".panel",
		scrollSpeed:1100,
		after:function(i) {
		}
	});

	$("#next-part2,#next-part3,#next-part4,#next-part5").click(function(e) {
		e.preventDefault();
		$.scrollify.next();
	});

	$('.dorts2,.dorts10').click(function(e){
		e.preventDefault();
		$.scrollify.move("#methods");
	});

	$('#tks_trigger').click(function (e) {
		$('#sec3_tks').show();
		$('.quiz-direction').hide();
		$('#restart').show();
	});

	$(window).load(function() {
        $(".loading").fadeOut();
    });

	$('#restart').click(function(e) {
		$('.quiz-direction').show(300);
		$('#sec3_tks').hide();
	});

	$(window).scroll(function () {
	var elemTop = $(".methods").offset().top;
	var winTop = $(this).scrollTop();
	var size = $(window).width();
	if (winTop >= elemTop && size > 415) {
		$('.footer').fadeIn();
	} else {
		$('.footer').fadeOut();
	}
	});

});

