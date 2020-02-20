$(document).ready(function(){
	$('#card1').animate({'opacity': 1}, 1000);

	$('#card4 .photos').waypoint(function() {
		$('#card4').addClass('hover');
	}, { offset: 'bottom-in-view' });

	var waypoint = new Waypoint.Inview({
		element: $('#card4 .photos')[0],
		enter: function(direction) {
			if (direction == "up") {
				$('#card4').addClass('hover');
			}
		},
		exited: function(direction) {
			$('#card4').removeClass('hover');
		}
	});
});
