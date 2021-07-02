<?php get_header(); ?>
	<div class="tmdb_main">
		<?php if(!is_singular('movie')):?>
			<div class="popular_movies">
				<h2>Popular Movies</h2>
				<div>
					<?php
						$args = array(  
					        'post_type' => 'movie',
					        'post_status' => 'publish',
					        'posts_per_page' => -1, 
					        'orderby' => 'title', 
					        'order' => 'ASC',
					        'cat' => 'home',
					    );
					    $loop = new WP_Query( $args ); 
					?>    
					<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
					     <div class="tmdb_post" data-link="<?php echo get_permalink();?>">
					     	<?php
								$image = get_field('movie_cover');
								$date = get_field("movie_year");
								$date_array = explode(",",$date);
								$score = get_field('movie_score');
								if($score <= 30){
									$score_color = 'red';
								}else if($score >= 31 && $score <= 60){
									$score_color = 'purple';	
								}else if($score >= 61 && $score <= 100){
									$score_color = 'green';	
								}
							?>
							<span class="score score_<?php echo $score_color;?>"><?php echo get_field('movie_score').'%';?></span>
					     	<img src="<?php echo esc_url($image['url']);?>"/>
							<p><?php the_title(); ?> <small><?php echo $date_array[1].' '.$date_array[2];?></small></p>
						</div>
					<?php endwhile; wp_reset_postdata();?>
				</div>
		<?php else:?>
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<div class="tmdb_post">
					<h1><?php the_title(); ?></h1>
					<h4>Posted on <?php the_time('F jS, Y') ?></h4>
					<p><?php the_content(__('(more...)')); ?></p>
				</div>
			<?php endwhile; else: ?>
				<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
			<?php endif; ?>
		<?php endif;?>
	</div><!-- .tmdb_main -->
<?php get_footer(); ?>