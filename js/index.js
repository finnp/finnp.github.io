$(function() {
	var highlightTag = function(tag) {
		$('.portfolio-item').each(function() {
			var tags = $(this).find('.tags').text();
			$(this).css('opacity', tags.indexOf(tag) == -1 ? 0.4 : 1.0);
		});
	};	

	$('.skills > li').each(function() {
		$(this).hover(function() {
			highlightTag($(this).text());
		}, function() {
			highlightTag('');
		});
	});
});