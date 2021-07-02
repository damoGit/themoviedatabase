$ = jQuery;
 
var mafs = $('#my-ajax-filter-search'); 
var mafsForm = mafs.find('form'); 
 
mafsForm.submit(function(e){
    e.preventDefault(); 
    
    $('.ajax_filter_search_results div').html('');
    
    console.log('form submitted');
 
	if(mafsForm.find('#search').val().length !== 0) {
	    var search = mafsForm.find('#search').val();
	}
	
	var data = {
	    action : 'my_ajax_filter_search',
	    search : search
	}
	
	$.ajax({
	    url : ajax_url['ajax_url'],
	    data : data,
	    success : function(response) {
	         if(response) {
		      	//$('.ajax_filter_search_results h3').append('<h3>Search Results</h3>');
		        for(var i = 0 ;  i < response.length ; i++) {
	                var	html  = '<div class="tmdb_post" data-link="' + response[i].permalink + '">';
	                 	html += '	<span class="score">' + response[i].movie_score + '</span>';
	                    html += '	<img src="' + response[i].movie_cover['url'] + '" alt="' + response[i].title + '" />';
	                    html += '	<p>' + response[i].title + '<small>' + response[i].movie_year + '</small></p>';
	                    html += '<div>';
	                $('.ajax_filter_search_results .results').append(html);
	            }
	            $('.ajax_filter_search_results').show();
	            closeSearchResponse();
		     }else{
				var html = '<p class="no-result">No matching movies found. Try a different search keyword</p>';
	            $('.ajax_filter_search_results .results').append(html);
	            $('.ajax_filter_search_results').show(); 
	            closeSearchResponse();    
		     }
	    },
	    error: function(xhr){
			var html = '<p class="no-result">No matching movies found. Try a different search keyword</p>';
            $('.ajax_filter_search_results .results').append(html);
            $('.ajax_filter_search_results').show(); 
			closeSearchResponse();
	    }
	    
	});
	
});

function closeSearchResponse(){
	$('.ajax_filter_search_results .close').click(function(){
		$(".ajax_filter_search_results").fadeOut('fast');	
	});
}

$('.popular_movies .tmdb_post').click(function(){
	var url = $(this).attr('data-link');
	$(window).attr('location',url);
});
