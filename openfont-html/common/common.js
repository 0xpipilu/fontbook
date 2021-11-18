var $doc = $(document);

var page = {
	init: function() {
		this.events();
	},
	events: function() {
		$doc.on('click', '.goto-help', function (e) {
			e.preventDefault();
		});
		$doc.on('mouseenter', '.goto-help', function (e) {
			$('.help-img').show();
		});
		$doc.on('mouseleave', '.goto-help', function (e) {
			$('.help-img').hide();
		});
			$doc.on('click', '.goto-chat', function (e) {
			e.preventDefault();
		});
		$doc.on('mouseenter', '.goto-chat', function (e) {
			$('.chat-img').show();
		});
		$doc.on('mouseleave', '.goto-chat', function (e) {
			$('.chat-img').hide();
		});
		
		$doc.on('click', '.goto-top', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		});
	}
};

page.init();