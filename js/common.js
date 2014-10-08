head.ready(function() {

	//textarea text remove
	$(".textarea").focus(function() {

		if( $(this).val() == "Ваше сообщение" ) {
			$(this).val("");
		}
	});

	$(".textarea").blur(function() {

		if( $(this).val() == "" ) {
			$(this).val("Ваше сообщение");
		}
	});

	//lines and description
		$('.mark').mouseenter(function(event) {
			$(this).addClass('is-active').next().show();
			$(this).parent().next().children('.description__in').hide();
			$(this).parent().next().children().filter('[data-name=' + $(this).data('name') + ']').show();
		});

		$('.mark').mouseleave(function(event) {
			$(this).removeClass('is-active').next().hide();
		});

});

