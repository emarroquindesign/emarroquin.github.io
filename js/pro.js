$(document).ready(function(){

	//LOADER
	setTimeout(function(){
		$(".c_load_c").addClass("active");
		setTimeout(function(){
			$(".loader").fadeOut();
			$("body").css("overflow-y","auto");
		},2500);
	},1000);
	//LOADER

	//LINK_LOCAL EFFECT
	$("a[attr-locallink='true']").click(function(e){
		e.preventDefault();
		let href = $(this).attr("href");
		$(".disspear").fadeIn(function(){
			setTimeout(function(){window.location.href = href;}, 1000);
		});
	});
	//LINK_LOCAL EFFECT

	//ANCHOR FUNCTION TO UP
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 100) {
			$(".cnt_achor_to_top").fadeIn();
		}else{
			$(".cnt_achor_to_top").fadeOut();
		}
	});
	$(".cnt_achor_to_top").click(function(){
		$("html, body").animate({scrollTop: 0}, 1000, 'swing');
	});
	//ANCHOR FUNCTION TO UP


	$(".img_project").one("load", function(){
		$(this).css("visibility", "visible")
		let loader = $(this).parent().parent().find(".pre_img_loader");
		setTimeout(function(){
			loader.fadeOut();
		},1000)
	}).each(function(){
		if (this.complete) {
			$(this).trigger('load');
		}
	});

	slidebox(".img_project",".subcnt_s_img_pro");


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