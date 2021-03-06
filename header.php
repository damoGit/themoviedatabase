<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="format-detection" content="telephone=no">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<body <?php body_class(); ?>>

<div id="ajax_filter_search_results" class="ajax_filter_search_results">
	<span class="close">
		<svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20 5L18 3L4 20L6 22L20 5Z" fill="white"/>
			<path d="M4 5L6 3L20 20L18 22L4 5Z" fill="white"/>
		</svg>
	</span>
	<h2>Search Results</h2>
	<p class="result_message"></p>
	<div class="results"></div>
	<div class="bg"></div>
</div><!-- .ajax_filter_search_results -->

<div class="tmdb_wrapper">
	
	<header class="tmdb_header">
		<div>
			<?php if(!is_singular('movie')):?>
				<svg class="logo" width="66" height="59" viewBox="0 0 66 59" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path class="outer" fill-rule="evenodd" clip-rule="evenodd" d="M59.5715 55.1419C63.4055 55.1419 66 52.5257 66 48.6596V6.48229C66 2.61622 63.4055 0 59.5715 0H6.42852C2.59452 0 0 2.61622 0 6.48229V59L3.29829 55.1445V6.48229C3.30118 4.74027 4.70094 3.3288 6.42852 3.32588H59.5715C61.2991 3.3288 62.6988 4.74027 62.7017 6.48229V48.6596C62.6988 50.4016 61.2991 51.8131 59.5715 51.816H11.3208L8.02252 55.1419L8.00151 55.1154" fill="#01D277"/>
					<g class="the">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1404 20H17.8596V12.7891H20V11H14V12.7891H16.1404V20Z" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M26.2843 20H28V11H26.2843V14.599H23.7157V11H22V20H23.7157V16.3984H26.2843V20Z" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M35 18.1979H31.7401V16.3984H34.5243V14.599H31.7401V12.7995H34.8523V11H30V20H35V18.1979Z" fill="#01D277"/>
					</g>
					<g class="db">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M14 35H16.6163C22.4612 35 22.4612 44 16.6163 44H14V35ZM15.756 42.2H16.6163C20.0296 42.2 20.0296 36.8 16.6163 36.8H15.756V42.2Z" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1016 39.4987C28.647 39.1102 28.8797 38.4058 28.9022 37.7272C28.9398 36.1422 27.979 35 26.4378 35H23V44H26.4378C27.1243 43.9945 27.7805 43.7063 28.2613 43.1989C28.7421 42.6915 29.0078 42.0068 28.9998 41.2961C29.0029 40.5808 28.6674 39.9094 28.1016 39.4987ZM24.7489 36.7948H26.2926C26.7507 36.8307 27.1046 37.2258 27.1046 37.7013C27.1046 38.1768 26.7507 38.5719 26.2926 38.6078H24.7489V36.7948ZM24.7489 42.2H26.2926V42.2026C26.5255 42.2054 26.7496 42.1107 26.914 41.94C27.0784 41.7693 27.1692 41.5371 27.1658 41.2961C27.1686 41.0565 27.0772 40.8259 26.9125 40.6574C26.7479 40.4889 26.5241 40.3969 26.2926 40.4026H24.7489V42.2Z" fill="#01D277"/>
					</g>
					<g class="movie">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0063 26.8922L14.5612 23H14V32H15.7716V27.0531L18.0063 29.4333L20.241 27.0531L20.2309 32H22V23H21.4514L18.0063 26.8922Z" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 23C22.5 23 22.5 32 28.5 32C34.5 32 34.5 23 28.5 23ZM28.5 30.1935C25.0126 30.1935 25.0126 24.7965 28.5 24.7965C31.9874 24.7965 31.9874 30.1935 28.5 30.1935Z" fill="#01D277"/>
						<rect x="43" y="23" width="2" height="9" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M48.7385 30.2V28.4H51.524V26.6H48.7385V24.8H51.8522V23H47V32H52V30.2H48.7385Z" fill="#01D277"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5013 27.7578L35.1024 23H33L37.2966 32H37.706L42 23H39.8976L37.5013 27.7578Z" fill="#01D277"/>
					</g>
				</svg><!-- .logo -->
				<svg width="405" height="286" class="lines" viewBox="0 0 405 286" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect class="right1" x="287" y="123.551" width="162" height="4" rx="2" transform="rotate(-45 287 123.551)" fill="#01D277" fill-opacity="0.83"/>
					<rect class="right2" x="276" y="159.551" width="162" height="4" rx="2" transform="rotate(-45 276 159.551)" fill="#01D277" fill-opacity="0.83"/>
					<rect class="right3" x="249" y="282.551" width="162" height="4" rx="2" transform="rotate(-45 249 282.551)" fill="#01D277" fill-opacity="0.83"/>
					<rect class="left1" y="276.551" width="162" height="4" rx="2" transform="rotate(-45 0 276.551)" fill="#01D277" fill-opacity="0.83"/>
					<rect class="left2" x="31" y="141.551" width="162" height="4" rx="2" transform="rotate(-45 31 141.551)" fill="#01D277" fill-opacity="0.83"/>
					<rect class="left3" x="31" y="114.551" width="162" height="4" rx="2" transform="rotate(-45 31 114.551)" fill="#01D277" fill-opacity="0.83"/>
				</svg><!-- .lines -->
				<?php echo do_shortcode('[my_ajax_filter_search]'); ?> 
			<?php endif;?>
		</div>
	</header><!-- tmdb_header -->
	
	<div class="tmdb_container">