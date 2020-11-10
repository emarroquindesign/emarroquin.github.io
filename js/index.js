function random(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){


	/**///LOADER
	setTimeout(function(){
		$(".c_load_c").addClass("active");
		setTimeout(function(){
			$(".loader").fadeOut();
			$("body").css("overflow-y","auto");
		},2500);
	},1000);
	/**///LOADER

	//STICKY AND ANCHOR UP APPEAR
	let header = $(".header");
	let hetop = header.offset().top;
	$(window).scroll(function(){
		if ($(this).scrollTop() >= hetop) {
			header.addClass("sticky");
			$(".cnt_achor_to_top").fadeIn();
		}else{
			header.removeClass("sticky");
			$(".cnt_achor_to_top").fadeOut();
		}
	});
	//STICKY AND ANCHOR UP APPEAR

	//ANCHOR FUNCTION
	$(".menu a,.link_anchor").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html, body').animate({scrollTop: $(aid).offset().top}, 1000, 'swing');
	});
	$(".cnt_achor_to_top").click(function(){
		$("html, body").animate({scrollTop: 0}, 1000, 'swing');
	});
	//ANCHOR FUNCTION

	//LINK_LOCAL EFFECT
	$("a[attr-locallink='true']").click(function(e){
		e.preventDefault();
		let href = $(this).attr("href");
		$(".disspear").fadeIn(function(){
			setTimeout(function(){window.location.href = href;}, 1000);
		});
	});
	//LINK_LOCAL EFFECT



	//RESPONSIVE MENU
	$(".a_bars_hdmn").click(function(){
		$(this).toggleClass("active");
		$(".cnt_menu_hd_mn").fadeToggle();
	});
	$(".menu_hd_mn a, .a_logo_hdmn").click(function(){
		$(".a_bars_hdmn").removeClass("active");
		$(".cnt_menu_hd_mn").fadeOut();
	});

	var widthMatch = window.matchMedia("(max-width: 1100px)");
	if(!widthMatch.matches) {
		hidden_menu();
	}
	widthMatch.addListener(function(e){
		if(!e.matches) {
			hidden_menu();
		}
	});
	function hidden_menu(){
		$(".cnt_menu_hd_mn").fadeOut();
	}
	//RESPONSIVE MENU

});
