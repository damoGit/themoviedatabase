$ = jQuery;
 
var mafs = $('#my-ajax-filter-search'); 
var mafsForm = mafs.find('form'); 
 
mafsForm.submit(function(e){
    e.preventDefault(); 
    
    // Empty any previous search results
    $('.ajax_filter_search_results div').html('');
 
	if($('#search').val().length !== 0){
	    var search = $('#search').val();
	}
	
	var data = {
	    action : 'my_ajax_filter_search',
	    search : search
	}

	// If search field is defined	
	if(search){
		
		// Reset h2 default if altered in previous search
		$('.ajax_filter_search_results h2').html('Search Results');
		
		// Start Ajax call
		$.ajax({
		    url : ajax_url['ajax_url'],
		    data : data,
		    success : function(response){
		         if(response){    
			        // Return result response 
			        if(response.length == 1){
				    	 var result = response.length + ' result for ' +  search;    
			        }else{
				    	 var result = response.length + ' results for ' +  search;    
			        }
			        $('.ajax_filter_search_results .result_message').html('')
			        	.append(result);
			        
			        // Loop results
			        for(var i = 0 ;  i < response.length ; i++){
				        
				        var score = response[i].movie_score;
				        
				        // Add colour class to score label
				        if(score <= 30){
							scoreColor = 'red';
						}else if(score >= 31 && score <= 60){
							scoreColor = 'purple';	
						}else if(score >= 61 && score <= 100){
							scoreColor = 'green';	
						}
		                
		                // Format and return html result
		                var	html = '<div class="tmdb_post" data-link="' + response[i].permalink + '">';
		                 	html += '	<span class="score score_' + scoreColor + '">' + response[i].movie_score + '%</span>';
		                    html += '	<img src="' + response[i].movie_cover['url'] + '" alt="' + response[i].title + '" />';
		                    html += '	<p>' + response[i].title + '<small>' + response[i].movie_year + '</small></p>';
		                    html += '<div>';
		                $('.ajax_filter_search_results .results').append(html);
		                
		            }
		            
		           	// Show results 
				   	openSearchResponse();
		            // Ceate clickable link from data attribute of results
		            dataLink('.ajax_filter_search_results .tmdb_post');
		            
		        }else{
			        
					// Format and return html result
					var html = 'Server Error. Please try again later';
		            $('.ajax_filter_search_results .result_message').html('')
		            	.append(html);
		            // Show results 
					openSearchResponse();
 
			     }
		    },
		    error: function(xhr){
				
				// Format and return html result
				var html = '0 results for ' +  search;
	            $('.ajax_filter_search_results .result_message').html('')
	            	.append(html);
	            // Show results 
				openSearchResponse();
	            
		    }
  
		});
	
	// If search field is not defined
	}else{
		
		// Format and return html result
		$('.ajax_filter_search_results h2').html('Whoops!');
		var html = 'Please enter a movie title';
		$('.ajax_filter_search_results .result_message').append(html);	
		// Show results 
		openSearchResponse();
	}
	
	// Close search result overlay
	//closeSearchResponse();
	
});

function openSearchResponse(){	
	$(".ajax_filter_search_results").show();
	var searchResults = $(".ajax_filter_search_results"),
		tlOpenSearch = new TimelineMax({});	
	tlOpenSearch.from(searchResults,0.2,{scale: 0, ease:Sine.easeOut});
}

closeSearchResponse();

function closeSearchResponse(){
	$('.ajax_filter_search_results .close').click(function(){	
		var searchResults = $(".ajax_filter_search_results"),
			tlCloseSearch = new TimelineMax({});		
		tlCloseSearch.to(searchResults,0.2,{scale: 0, ease:Sine.easeIn});
	});	
	$(".ajax_filter_search_results").hide();
/*
	$('.ajax_filter_search_results .close').click(function(){
		
		//$(".ajax_filter_search_results").fadeOut('fast');	
	});
*/
}