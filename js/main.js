//var eventQueue = ["#welcome-msg", [moreInfoYes], ];


var nextMsgId;

$(document).ready(function(){
	fadeInManager();

	$(".yes-btn").on("click", function(){
		effectsOut(true);
	});

	$(".no-btn").on("click", function(){
		effectsOut(false);
	});



}); //closes document.ready

function fadeInManager(nextMsgId){
	console.log('fadeInManager');
	//initialize
	if (arguments.length == 0 || nextMsgId === undefined){
		$("#welcome-msg").addClass("active");
	}

	else{
		console.log('nextMsgId' + nextMsgId);


	    $(".active").removeClass("active");
	 // $(".active").each(function(){
	//		$(this).removeClass("active");
	//	});
    $("#"+nextMsgId).addClass("active");

    if (nextMsgId.indexOf("email") == 0){
			console.log("email corner case");
			$("#email-form").addClass("active");
		}
	}


	//TODO delete this when done
	logoEffectsIn();
	textEffectsIn();
	btnEffectsIn();

	//TODO put this back when done
	//setTimeout(logoEffectsIn,1000);
	//setTimeout(textEffectsIn,3000); //offsets
	//setTimeout(btnEffectsIn,5000);

};


function signalNext(lastMsgId, yesSelect){
	console.log("signalNext");
	var nextMsgId;
	var last = lastMsgId;
	var select;

	if ($($("#" + lastMsgId).parent(".inner")).id == "emailPrompt-container"){
		nextMsgId = "confirmation-msg";
		fadeInManager();
		return;
	}

	switch(lastMsgId){
		case "welcome-msg":
			if (yesSelect === true){
				nextMsgId = "moreInfoYes-msg";
				break;
			}
			else if (yesSelect == false){
				nextMsgId = "moreInfoNo-msg";
				break;
			}
		case "moreInfoYes-msg":
			if (yesSelect == true){
				nextMsgId = "emailPromptA-msg";
				break;
			}
			else if (yesSelect == false){
				nextMsgId = "emailPromptB-msg";
				break;
			}
		case "moreInfoNo-msg":
			if (yesSelect == true){
				nextMsgId = "emailPromptC-msg";
				break;
			}
			else if (yesSelect == false){
			  nextMsgId = "emailPromptD-msg";
				break;
			}
	}
    fadeInManager(nextMsgId);
	}

function logoEffectsIn(){
	console.log('logoEffectsIn');

	$(".active").children('.lark-icon').css('visibility','visible').hide().fadeIn('slow');
	//$($(".active").children('.lark-icon')).css('visibility','visible').hide().fadeIn('slow');
	//$(".lark-icon").fadeIn(1000);
}


function textEffectsIn(){
	console.log('textEffectsIn');
  $(".active").children('.prompt').css('visibility','visible').hide().fadeIn('slow');
//	$($(".active").children('.prompt')).css('visibility','visible').hide().fadeIn('slow');
}


function btnEffectsIn(){
	console.log('btnEffectsIn');
	console.log($(".active"));

	$(".active").children('.convo-btns').css('visibility','visible').hide().fadeIn('slow');
	//$(".active").children('.convo-btns').each(function(){ //corner case since html layout is different
	//	$(this).css('visibility','visible').hide().fadeIn('slow');
	//});


}

//TODO make fancier
//clickedYes is true if user clicked yes button; false if user clicked no button
function effectsOut(btnSelection){
	console.log('effectsOut');
	//TODO callback after fade out to bring up the next state

	//$($(".active").children(".lark-icon")).fadeOut(1000);
	$(".active").children(".lark-icon").fadeOut(1000);

	//$($(".active").children(".prompt")).fadeOut(1000);
	$(".active").children(".prompt").fadeOut(1000);

	//$($(".active").children(".convo-btns")).fadeOut(1000, signalNext($(".active")[0].id, btnSelection));
  $(".active").children(".convo-btns").fadeOut(1000,signalNext($(".active")[0].id, btnSelection));

}
