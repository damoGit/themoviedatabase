jQuery.noConflict();
(function($){
	$(function(){
		
		dataLink('.popular_movies .tmdb_post');
		
	});
})(jQuery);

function dataLink(dl){
	$(dl).click(function(){
		var url = $(this).attr('data-link');
		$(window).attr('location',url);
	});
}