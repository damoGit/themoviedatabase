<div id="tmdb_sidebar">
	<h2><?php _e('Categories'); ?></h2>
	<ul><?php wp_list_categories('sort_column=namonthly');?></ul>
	<h2><?php _e('Archives'); ?></h2>
	<ul> <?php wp_get_archives(); ?></ul>
</div>