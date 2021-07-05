<?php get_header(); ?>
	<div class="tmdb_main">
		<?php if(!is_singular("movie")):?>
			<div class="popular_movies">
				<h2>Popular Movies</h2>
				<div>
					<?php
						$args = array(  
					        "post_type" => "movie",
					        "post_status" => "publish",
					        "posts_per_page" => -1, 
					        "orderby" => "title", 
					        "order" => "ASC",
					        "cat" => "home",
					    );
					    $loop = new WP_Query( $args ); 
					?>    
					<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
					     <div class="tmdb_post" data-link="<?php echo get_permalink();?>">
					     	<?php
								$image = get_field("movie_cover");
								$date = get_field("movie_year");
								$date_array = explode(",",$date);
								$score = get_field("movie_score");
								if($score <= 30){
									$score_color = "red";
								}else if($score >= 31 && $score <= 60){
									$score_color = "purple";	
								}else if($score >= 61 && $score <= 100){
									$score_color = "green";	
								}
							?>
							<span class="score score_<?php echo $score_color;?>"><?php echo get_field("movie_score")."%";?></span>
					     	<img src="<?php echo esc_url($image["url"]);?>"/>
							<p><?php the_title(); ?> <small><?php echo $date_array[1]." ".$date_array[2];?></small></p>
						</div>
					<?php endwhile; wp_reset_postdata();?>
				</div>
		<?php else:?>
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div class="review">
					<a href="<?php echo home_url();?>">
						<svg width="22" height="28" class="back" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0435 12.9714V15.4664H6.64837L12.3215 22.5952L10.8913 24.3774L2.73914 14.2189L10.8913 4.06042L12.3692 5.84261L6.64837 12.9714H19.0435Z" fill="white"/>
						</svg>
					</a>
					<div class="tmdb_post tmdb_post_review">
						<?php
							$image_cover = get_field("movie_cover");
							$image_poster = get_field("movie_poster");
							$date = get_field("movie_year");
							$date_array = explode(",",$date);
							$score = get_field("movie_score");
							$time = get_field("movie_time");
						?>
						<div class="review_header">
							<img src="<?php echo esc_url($image_poster["url"]);?>" class="image_poster"/>
							<div>
								<img src="<?php echo esc_url($image_cover["url"]);?>" width="155" height="233"/>
								<div>
									<h1><?php the_title();?></h1>
									<p><?php echo $date_array[2]." - ".$score."/100" ;?><br><?php echo $time;?></p>
								</div>
							</div>
						</div><!-- review_header -->
						<div class="review_content">
							<hr>
							<h2>Review</h2>
							<p><?php the_content();?></p>
						</div><!-- .review_content -->
					</div><!-- .tmdb_post -->
				</div> <!-- .review -->
			<?php endwhile; else: ?>
				<p><?php _e("Sorry, no posts matched your criteria."); ?></p>
			<?php endif; ?>
		<?php endif;?>
	</div><!-- .tmdb_main -->
<?php get_footer(); ?>