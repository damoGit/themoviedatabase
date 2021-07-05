jQuery.noConflict();
(function($){
	$(function(){
		
		// Call logo animation function
		animateLogo();
		
		// Call datalink function
		dataLink('.popular_movies .tmdb_post');
		
	
		// Header animation using Greensock TimelineMax	
		function animateLogo(){
			
			// Define header line svg elements
			var lines = $('.lines'),
				left1 = $('.lines .left3'),
				left2 = $('.lines .left2'),
				left3 = $('.lines .left1'),
				right1 = $('.lines .right1'),
				right2 = $('.lines .right2'),
				right3 = $('.lines .right3'),
				tlLines = new TimelineMax({});
			
			// Define header logo svg elements
			var logo = $('.logo'),
				logoOuter = $('.logo .outer'),
				logoThe = $('.logo .the'),
				logoMovie = $('.logo .movie'),
				logoDB = $('.logo .db'),
				tlLogo = new TimelineMax({delay:.5});
			
			// Line animation timeline	
			tlLines
				.to(lines,0,{opacity:1})
				.from(left1,.7,{x: 100, y:-100, opacity:0, ease:Sine.easeOut},0)
				.from(right3,.7,{x: -100, y:100, opacity:0, ease:Sine.easeOut},0)
				.from(left2,.7,{x: 100, y:-100, opacity:0, ease:Sine.easeOut},0)
				.from(right2,.7,{x: -100, y:100, opacity:0, ease:Sine.easeOut},0)
				.from(left3,.7,{x: 100, y:-100, opacity:0, ease:Sine.easeOut},0)
				.from(right1,.7,{x: -100, y:100, opacity:0, ease:Sine.easeOut},0);
			
			// Logo animation timeline	
			tlLogo
				.to(logo,0,{opacity:1},0)	
				.from(logoOuter,.2,{scale: 0, opacity:0, transformOrigin: '50% 50%', ease:Sine.easeOut})
				.from(logoThe,.2,{x: -50, opacity:0, transformOrigin: '50% 50%', ease:Back.easeOut})
				.from(logoMovie,.2,{x: -50, opacity:0, transformOrigin: '50% 50%', ease:Back.easeOut})
				.from(logoDB,.2,{x: -50, opacity:0, transformOrigin: '50% 50%', ease:Back.easeOut})
				.to(logo,.2,{scale: 1.2, transformOrigin: '50% 50%', ease:Sine.easeIn})
				.to(logo,.2,{scale: 1, transformOrigin: '50% 50%'});
		}
		
		// Create link to movie post for data attribute
		function dataLink(dl){
			$(dl).click(function(){
				var url = $(this).attr('data-link');
				$(window).attr('location',url);
			});
		}
		
		
	});
})(jQuery);