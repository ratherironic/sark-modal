$(document).ready(function() {
	
	$('a').on('click', function (e) {
		e.preventDefault();

		$(this).sarkModal({
			'modalContent': 'Hey bro'
		})
	});
});