$ = jQuery;
 
var mafs = $('#my-ajax-filter-search'); 
var mafsForm = mafs.find('form'); 
 
mafsForm.submit(function(e){
    e.preventDefault(); 
    
    mafs.find('.ajax_filter_search_results').html('');
    
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
		         console.log(response);
		         for(var i = 0 ;  i < response.length ; i++) {
	                 var html  = "<li id='movie-" + response[i].id + "'>";
	                     html += "  <a href='" + response[i].permalink + "' title='" + response[i].title + "'>";
	                     html += "      <img src='" + response[i].movie_cover['url'] + "' alt='" + response[i].title + "' />";
	                     html += "      <div class='movie-info'>";
	                     html += "          <h4>" + response[i].title + "</h4>";
	                     html += "          <p>Year: " + response[i].movie_year + "</p>";
	                     html += "          <p>Score: " + response[i].movie_score + "</p>";
	                     html += "      </div>";
	                     html += "  </a>";
	                     html += "</li>";
	                 mafs.find(".ajax_filter_search_results").append(html);
	            }
		     }else{
				var html  = '<li class="no-result">No matching movies found. Try a different filter or search keyword</li>';
	            mafs.find('.ajax_filter_search_results').append(html);     
		     }
	/*
	        if(response) {
		        console.log(response);
	            for(var i = 0 ;  i < response.length ; i++) {
	                 var html  = "<li id='movie-" + response[i].id + "'>";
	                     html += "  <a href='" + response[i].permalink + "' title='" + response[i].title + "'>";
	                     html += "      <img src='" + response[i].movie_cover + "' alt='" + response[i].title + "' />";
	                     html += "      <div class='movie-info'>";
	                     html += "          <h4>" + response[i].title + "</h4>";
	                     html += "          <p>Year: " + response[i].movie_year + "</p>";
	                     html += "          <p>Score: " + response[i].movie_score + "</p>";
	                     html += "      </div>";
	                     html += "  </a>";
	                     html += "</li>";
	                 mafs.find(".ajax_filter_search_results").append(html);
	            }
	        } else {
	            var html  = '<li class="no-result">No matching movies found. Try a different filter or search keyword</li>';
	            mafs.find('.ajax_filter_search_results').append(html);
	        }
	*/
	    },
	    error: function(xhr){
	      var html  = '<li class="no-result">No matching movies found. Try a different filter or search keyword</li>';
		  mafs.find('.ajax_filter_search_results').append(html);
	    }
	    
	});
	
});