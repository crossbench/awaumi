$(function(){
	$('#unsou01_txt,#unsou02_txt,#unsou03_txt,#unsou04_txt').hide();	
	$('#unsou01').on("click", function() {
		$('#unsou01_txt').slideToggle(600);
		$('#unsou02_txt,#unsou03_txt,#unsou04_txt').hide();
	});
	$('#unsou02').on("click", function() {
		$('#unsou02_txt').slideToggle(600);
		$('#unsou01_txt,#unsou03_txt,#unsou04_txt').hide();
	});
	$('#unsou03').on("click", function() {
		$('#unsou03_txt').slideToggle(600);
		$('#unsou01_txt,#unsou02_txt,#unsou04_txt').hide();
	});
	$('#unsou04').on("click", function() {
		$('#unsou04_txt').slideToggle(600);
		$('#unsou01_txt,#unsou02_txt,#unsou03_txt').hide();
	});
});

$(function () {
	var $globalNavElem = $('#mainNav01,#mainNav02');
	// ヘッダーメニュー
	$globalNavElem.on('mouseenter', function () {
	  $(this).addClass('is-opened');
	});
	$globalNavElem.on('mouseleave', function () {
	  $(this).removeClass('is-opened');
	});
});


$(function() {
	var linkboxes = $(".bx-wrapper");
		for (var i=0; i<linkboxes.length; i++){
		var readmores = $("div a");
		for (var j=0; j<readmores.length; j++){
			$(".bx-viewport").click(function() {
				var anchorTags = this.getElementsByTagName("a");
				window.location = anchorTags[0].href;
			});
		}
	}
}); 


