$(document).ready(function() {
	$(".subImage").click(function() {
		alert("Clicked!");
		var source = $(this).attr('src');
		alert(source);
		$("#mainGallery").fadeOut(500, function(){
			$(this).attr("src", source);
			$(this).load(function(){
				$(this).fadeIn(500);
			});
		});
	});
});