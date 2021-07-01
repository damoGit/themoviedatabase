<?php get_header(); ?>
	<div class="tmdb_main">
		<?php if(!is_singular('movie')):?>
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
			     <div class="tmdb_post">
					<h1><?php the_title(); ?></h1>
					<h4>Posted on <?php the_time('F jS, Y') ?></h4>
					<p><?php the_content(__('(more...)')); ?></p>
				</div>
			<?php endwhile; wp_reset_postdata();?>
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