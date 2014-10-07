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

});

