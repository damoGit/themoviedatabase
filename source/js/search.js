$ = jQuery;
 
var mafs = $('#my-ajax-filter-search'); 
var mafsForm = mafs.find('form'); 
 
mafsForm.submit(function(e){
    e.preventDefault(); 
    
    $('.ajax_filter_search_results div').html('');
    
    console.log('form submitted');
 
	if($('#search').val().length !== 0){
	    var search = $('#search').val();
	}
	
	var data = {
	    action : 'my_ajax_filter_search',
	    search : search
	}
	
	if(search){
		
		$.ajax({
		    url : ajax_url['ajax_url'],
		    data : data,
		    success : function(response){
		         if(response){
			      	$('.ajax_filter_search_results h3').html('<h3>Search Results for: ' + search + '</h3>');
			        for(var i = 0 ;  i < response.length ; i++){
				        var score = response[i].movie_score;
				        if(score <= 30){
							scoreColor = 'red';
						}else if(score >= 31 && score <= 60){
							scoreColor = 'purple';	
						}else if(score >= 61 && score <= 100){
							scoreColor = 'green';	
						}
		                var	html  = '<div class="tmdb_post" data-link="' + response[i].permalink + '">';
		                 	html += '	<span class="score score_' + scoreColor + '">' + response[i].movie_score + '%</span>';
		                    html += '	<img src="' + response[i].movie_cover['url'] + '" alt="' + response[i].title + '" />';
		                    html += '	<p>' + response[i].title + '<small>' + response[i].movie_year + '</small></p>';
		                    html += '<div>';
		                $('.ajax_filter_search_results .results').append(html);
		            }
		            $('.ajax_filter_search_results').show();
		            closeSearchResponse();
		            dataLink('.ajax_filter_search_results .tmdb_post');
		        }else{
			        $('.ajax_filter_search_results h3').html('<h3>Search Results for: ' + search + '</h3>');
					var html = '<p class="no-result">No matching movies found. Try a different search keyword</p>';
		            $('.ajax_filter_search_results .results').append(html);
		            $('.ajax_filter_search_results').show(); 
		            closeSearchResponse();    
			     }
		    },
		    error: function(xhr){
			    $('.ajax_filter_search_results h3').html('<h3>Search Results for: ' + search + '</h3>');
				var html = '<p class="no-result">No matching movies found. Try a different search keyword</p>';
	            $('.ajax_filter_search_results .results').append(html);
	            $('.ajax_filter_search_results').show(); 
				closeSearchResponse();
		    }
		    
		});
	
	}else{
		 $('.ajax_filter_search_results h3').html('<h3>Whoops! Please enter a search keyword.</h3>');	
		 $('.ajax_filter_search_results').show();
		 closeSearchResponse(); 
	}
	
});

dataLink('.popular_movies .tmdb_post');

function closeSearchResponse(){
	$('.ajax_filter_search_results .close').click(function(){
		$(".ajax_filter_search_results").fadeOut('fast');	
	});
}

function dataLink(dl){
	$(dl).click(function(){
		var url = $(this).attr('data-link');
		$(window).attr('location',url);
	});
}
