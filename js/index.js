$(function() {
	var highlightTag = function(tag) {
		$('.portfolio-item').each(function() {
			var tags = $(this).find('.tags').text();
			if(tags.indexOf(tag) == -1) {
				$(this).addClass('hide-away');
			} else {
				$(this).addClass('highlight');
			}
		});
	};	

	$('.skills > li').each(function() {
		$(this).hover(function() {
			highlightTag($(this).text());
			$(this).css('text-decoration', 'underline');
		}, function() {
			$('.portfolio-item').each(function() {
				$(this).removeClass('hide-away').removeClass('highlight');
			});
			$(this).css('text-decoration', 'none');
		});
	});
});