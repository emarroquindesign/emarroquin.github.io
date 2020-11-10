let bool_slidebox = false;
let bool_slidebox_index = false;
let limit = 0;
let indexImg;
let clone_img_sidebox;

function slidebox(target,trigger){

	$(trigger).click(function(){
		indexImg = $(this).index(trigger);
		bool_slidebox_index = true;

		let obj_sbox_img = $(target);

		if (bool_slidebox_index){

			let slidebox = $(".slidebox");
			let content = $(".slidebox_content");
			let counter_img_loader = 0;

			open_slidebox();

			let img_fill = "";
			for (var i = 0; i < obj_sbox_img.length; i++) {
				img_fill += '<img src="'+obj_sbox_img.eq(i).attr("src")+'" class="slidebox_img_clone">';
			}

			content.html(img_fill);
			clone_img_sidebox = $(".slidebox_img_clone");
			limit = clone_img_sidebox.length - 1;

			clone_img_sidebox.one("load", function(){
				counter_img_loader++;
				if (counter_img_loader == clone_img_sidebox.length) {
					bool_slidebox = true;
					clone_img_sidebox.eq(indexImg).fadeIn();
				}
			}).each(function(){
				if (this.complete) {
					$(this).trigger("load");
				}
			});

		}else{
			console.log("ERROR");
			return false;
		}

	});

	$(".sldbx_ctrls_close,.slidebox_back").click(function(){
		if (bool_slidebox) {close_slidebox()}
	});

	$(".sldbx_ctrls_left").click(function(){
		if (bool_slidebox) {change_img_slidebox("left")}
	});
	$(".sldbx_ctrls_right").click(function(){
		if (bool_slidebox) {change_img_slidebox("right")}
	});

}

function open_slidebox(){
	$(".slidebox").fadeIn();
	$("html").css("overflow-y","hidden");
}

function close_slidebox(){
	$(".slidebox").fadeOut(function(){
		$(".slidebox_content").html("");
	});
	$("html").css("overflow-y","auto");
}

function change_img_slidebox(dir){
	bool_slidebox = false;
	let  old_index = indexImg;
	let index = (dir === "left")? indexImg-1 : indexImg+1;

	if (index < 0) {
		index = limit
	}else if (index > limit) {
		index = 0
	}
	indexImg = index;

	clone_img_sidebox.eq(old_index).css("z-index","1");
	clone_img_sidebox.eq(index).css("z-index","2");

	clone_img_sidebox.eq(old_index).fadeOut(function(){
		clone_img_sidebox.eq(index).fadeIn(function(){
			bool_slidebox = true;
		});
	});

}