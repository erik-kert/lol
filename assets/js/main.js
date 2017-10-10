/*
	Hielo by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/






	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header'),
			$banner 	= $('.banner');


		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});


		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});
                
                
                  <div id='map' style='width: 400px; height: 100px;'></div>
            <script>
                mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpa2tlcnQiLCJhIjoiY2o4YTl5MXhlMGFobjMxbzAwamhiMnkyMCJ9.7FN4zVqKFO7J0hy6vnnqQQ';
                var map = new mapboxgl.Map({
                container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v9'
                    
                    
                });
                
                 
            </script>

			}

	});

})(jQuery);