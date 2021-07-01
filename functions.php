<?php
	
	// Add theme scripts	
	add_action( 'wp_enqueue_scripts', function() {
	    wp_enqueue_style( 'style' , get_stylesheet_directory_uri() . '/assets/css/tmdb_style.css', array(), wp_get_theme()->get('Version'));
	    wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), wp_get_theme()->get('Version'));
	});
	
	function my_ajax_filter_search_scripts(){
	    wp_enqueue_script( 'my_ajax_filter_search', get_stylesheet_directory_uri(). '/assets/js/search.js', array(), wp_get_theme()->get('Version'), true );
	    //wp_add_inline_script( 'my_ajax_filter_search', 'ajax_url', admin_url('admin-ajax.php') );
	    wp_localize_script( 'my_ajax_filter_search', 'ajax_url', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
	}

	// Register Custom movie Post Type
	function register_custom_post_type_movie(){
	    $args = array(
	        "label" => __( "Movies", "" ),
	        "labels" => array(
	            "name" => __( "Movies", "" ),
	            "singular_name" => __( "Movie", "" ),
	            "featured_image" => __( "Movie Poster", "" ),
	            "set_featured_image" => __( "Set Movie Poster", "" ),
	            "remove_featured_image" => __( "Remove Movie Poster", "" ),
	            "use_featured_image" => __( "Use Movie Poster", "" ),
	        ),
	        "public" => true,
	        "publicly_queryable" => true,
	        "show_ui" => true,
	        "show_in_rest" => false,
	        "has_archive" => false,
	        "show_in_menu" => true,
	        "exclude_from_search" => false,
	        "capability_type" => "post",
	        "map_meta_cap" => true,
	        "hierarchical" => false,
	        "rewrite" => array( "slug" => "movie", "with_front" => true ),
	        "query_var" => true,
	        "supports" => array( "title", "editor", "thumbnail" ),
	        "taxonomies" => array( "category" ),
	        'menu_position'=>3,
	    );
	    register_post_type( "movie", $args );
	}
	add_action( 'init', 'register_custom_post_type_movie' );
	
	// Creayte AJAX search shortcode 
	function my_ajax_filter_search_shortcode(){
		my_ajax_filter_search_scripts();
	    ob_start(); ?>
	 
		    <div id="my-ajax-filter-search">
		        <form action="" method="get">
		            <input type="text" name="search" id="search" value="" placeholder="Search Here..">
		            <input type="submit" id="submit" name="submit" value="Search">
		        </form>
		        <ul id="ajax_filter_search_results" class="ajax_filter_search_results"></ul>
		    </div>
	     
	    <?php
	    return ob_get_clean();
	} 
	add_shortcode('my_ajax_filter_search', 'my_ajax_filter_search_shortcode');
	
	// Ajax Callback
	
	add_action('wp_ajax_my_ajax_filter_search', 'my_ajax_filter_search_callback');
	add_action('wp_ajax_nopriv_my_ajax_filter_search', 'my_ajax_filter_search_callback');
	 
	function my_ajax_filter_search_callback(){
	 
	    header("Content-Type: application/json");

		if(isset($_GET['search'])) {
	        $search = sanitize_text_field( $_GET['search'] );
	        $search_query = new WP_Query( array(
	            'post_type' => 'movie',
	            'posts_per_page' => -1,
	            's' => $search
	        ) );
	    }
	 
	    if($search_query->have_posts()){
	        $result = array();
	        while ( $search_query->have_posts() ) {
	            $search_query->the_post();
	            $cats = strip_tags( get_the_category_list(", ") );
	            $result[] = array(
	                "id" => get_the_ID(),
	                "title" => get_the_title(),
	                "content" => get_the_content(),
	                "permalink" => get_permalink(),
	                "movie_cover" => get_field('movie_cover'),
	                "movie_poster" => get_field('movie_poster'),
	                "movie_year" => get_field('movie_year'),
	                "movie_score" => get_field('movie_score'),
	                "movie_time" => get_field('movie_time')
	            );
	        }
	        wp_reset_query();
	        echo json_encode($result);
	 
	    } else {
	        // no posts found
	    }
	    wp_die();
	}
	
?>