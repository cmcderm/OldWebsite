$(document).ready(function() {
	$(".subImage").click(function() {
		var source = $(this).attr('src');
		$("#mainGallery").fadeOut(500, function(){
			$(this).attr("src", source);
			$(this).load(function(){
				$(this).fadeIn(500);
			});
		});
	});
});