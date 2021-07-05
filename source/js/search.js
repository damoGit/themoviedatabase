$ = jQuery;

var searchForm = $('.my-ajax-filter-search'),
	searchResultOverlay = $('.ajax_filter_search_results'),
	searchResultsH2 = $('.ajax_filter_search_results h2'),
	searchResultMsg = $('.ajax_filter_search_results .result_message');
	searchResult = $('.ajax_filter_search_results .results');
 
$(searchForm).submit(function(e){
    e.preventDefault(); 
    
    // Empty any previous search results
    searchResult.html('');
 
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
		searchResultsH2.html('Search Results');
		
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
			        searchResultMsg.html('')
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
		                searchResult.append(html);
		                
		            }
		            
		            // Ceate clickable link from data attribute of results
		            dataLink('.ajax_filter_search_results .tmdb_post');
					// Open search result overlay
					openSearchResponse();
					
		        }else{
			        
					// Format and return html result
					var html = 'Server Error. Please try again later';
		            searchResult.html('')
		            	.append(html);
		            // Open search result overlay
					openSearchResponse();
			     }
		    },
		    error: function(xhr){
				
				// Format and return html result
				var html = '0 results for ' +  search;
	            searchResultMsg.html('')
	            	.append(html);
	            // Open search result overlay
				openSearchResponse();
		    }
  
		});
	
	// If search field is not defined
	}else{
		
		// Format and return html result
		searchResultsH2.html('Whoops!');
		var html = 'Please enter a movie title';
		searchResultMsg.html('')
			.append(html);	
		// Open search result overlay
		openSearchResponse();
	}
	
});

// Close search result overlay
closeSearchResponse();

function openSearchResponse(){
	var searchResults = $(".ajax_filter_search_results"),
		tlOpenSearch = new TimelineMax({});	
	tlOpenSearch
		.to(searchResults,0.2,{scale: 1, opacity:1, ease:Sine.easeIn});
}

function closeSearchResponse(){
// 	$('.ajax_filter_search_results .close, .ajax_filter_search_results .bg').click(function(){
	$('.ajax_filter_search_results .close').click(function(){	
		var searchResults = $(".ajax_filter_search_results"),
			tlCloseSearch = new TimelineMax({});		
		tlCloseSearch
			.to(searchResults,0.2,{scale: 0, opacity:0, ease:Sine.easeIn});
	});
}

