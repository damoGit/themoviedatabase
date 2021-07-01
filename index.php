<?php get_header(); ?>

	<div class="tmdb_main">
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			<div class="tmdb_post">
				<h1><?php the_title(); ?></h1>
				<h4>Posted on <?php the_time('F jS, Y') ?></h4>
				<p><?php the_content(__('(more...)')); ?></p>
			</div>
		<?php endwhile; else: ?>
			<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
		<?php endif; ?>
		<?php get_sidebar(); ?>
	</div><!-- .tmdb_main -->
	
<?php get_footer(); ?>