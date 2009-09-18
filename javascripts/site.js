$(document).ready(function() {

	// I'm on the outside
	hostname = window.location.hostname
	$("a[href^=http]")
		.not("a[href*='" + hostname + "']")
		.addClass('link external')
		.attr('target', '_blank');

	$('.posts .post:first-child, .posts_admin ul li:first-child').addClass('first');
	$('.posts .post p:last-child, .posts .post:last-child').addClass('last');
	
	$('.gist-data .line:odd').livequery(function(){
		$(this).addClass('odd');
	});
	$('.gist-data .line:even').livequery(function(){
		$(this).addClass('even');
	});
	
});