//var eventQueue = ["#welcome-msg", [moreInfoYes], ];


var nextMsgId;

var logoTimeout = 1000;
var textTimeout = 3000;
var btnTimeout = 5000;

var emailCaseFlag = false;
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
//TODO CHANGE
	$("#welcome-msg").addClass("active");

	}

	else{
		console.log('nextMsgId' + nextMsgId);


	    $(".active").removeClass("active");
	 // $(".active").each(function(){
	//		$(this).removeClass("active");
	//	});
    $("#"+nextMsgId).addClass("active");

    if (nextMsgId.indexOf("email") == 0){ //email case
			console.log("email corner case");
			$("#email-form").addClass("active");
			emailCaseFlag = true;
		}
	}
/*

if (emailCaseFlag == true){
	loadEmailConvo();
}
else if (emailCaseFlag == false){
	*/
	setTimeout(logoEffectsIn,logoTimeout);
	setTimeout(textEffectsIn,textTimeout); //offsets
	setTimeout(btnEffectsIn,btnTimeout);
//}

};

function loadEmailConvo(){

   setTimeout(loadLogo1, 1000);
   setTimeout(loadText1, 3000);
   setTimeout(loadLogo2, 4000);
   setTimeout(loadText2, 6000);
   setTimeout(loadButtons, 7000); //this should be the function we already have.

  emailCaseFlag = false; //reset
}

function loadLogo1(){

 $(".active").children(".lark-first").css("visibility","visible").hide().fadeIn('fast');

 }

 function loadText1(){

 $(".active").children(".prompt-first").css("visibility","visible").hide().fadeIn('fast');

 }

 function loadLogo2(){

 $(".active").children(".lark-second").css("visibility","visible").hide().fadeIn('fast');

 }

 function loadText2(){

 $(".active").children(".prompt-second").css("visibility","visible").hide().fadeIn('fast');

 }



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
	console.log($(".active").children('.lark-icon'));
	$(".active").children('.lark-icon').css('visibility','visible').hide().fadeIn('slow');


//$($(".active").parents(".inner")[0]).css("display", "block");

}


function textEffectsIn(){
	console.log('textEffectsIn');
	console.log($(".active").children('.prompt'));
  $(".active").children('.prompt').css('visibility','visible').hide().fadeIn('slow');
//	$($(".active").children('.prompt')).css('visibility','visible').hide().fadeIn('slow');
}


function btnEffectsIn(){
	console.log('btnEffectsIn');
	console.log($(".active"));

  var _jq_currYesBtn = $(".active").children('.convo-btns').children(".yes-btn");
	var _jq_currNoBtn = $(".active").children('.convo-btns').children(".no-btn");
	if (_jq_currYesBtn.length > 0){
		$(_jq_currYesBtn).css('visibility', 'visible').hide().fadeIn('slow');
		setTimeout(function(){
			$(_jq_currNoBtn).css('visibility', 'visible').hide().fadeIn('slow');
		}, 1000);

	}

	//$(".active").children('.convo-btns').css('visibility','visible').hide().fadeIn('slow');
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
