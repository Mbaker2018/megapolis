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
		$('.mark').click(function(event) {
			$('.mark').removeClass('is-active');
			$(this).addClass('is-active');
			$(this).parent().next().children('.description__in').hide();
			$(this).parent().next().children().filter('[data-name=' + $(this).data('name') + ']').show();
		});

});

