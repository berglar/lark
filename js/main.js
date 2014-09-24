$(document).ready(function(){
	var detached_2 = $('.page2').detach();
	var detached_3 = $('.page3').detach();
	var detached_4 = $('.page4').detach();

    function call_scroll() {
        $(".main").onepage_scroll({
            sectionContainer: "section",
            easing: "ease-out",
            pagination: false,
            responsiveFallback: false,
            loop: false
        });
    }

	var func_1 = function() {
		$(detached_2).insertAfter($('.page1'));
	};

	var func_2 = function() {
		$("#container-2a .prompt").html("Great! Using your phone as a health sensor, lark texts with you about your exercise, sleep, eating, and stress. Interested?");
	};

    var func_3 = function() {
    	$(".main").moveTo(2);
    };

    var func_4 = function() {
        setTimeout(function(){
             $("#container-2a").fadeIn(2000);
        }, 300);
    };

	var func_5 = function () {
        setTimeout(function(){
            $("#container-1").addClass('opacity');
            $("#container-button-1").hide();
        }, 1500);
	};

	var func_6 = function() {
		$("#container-2a").hide();
    	$("#container-2b").hide();
	};

    var func_7 = function() {
    	$("#container-2b .prompt").html("No worries. Studies have shown that the only way to get healthier in the long term is to do what makes you happy. Lark actually makes getting healthier really enjoyable.");
    };

	var func_8 = function() {
        setTimeout(function(){
             $("#container-2b").fadeIn(2000);
        }, 300);
	};

	var func_9 = function() {
        $("#container-3 .prompt").html("Hmmm...");
        $("#container-3 #prompt-b").html("What's your email? The lark app will be emailed to you. It's free.");
	};

	var func_10 = function() {
		$(detached_3).insertAfter($('.page2'));
	};

	var func_11 = function() {
        $(".main").moveTo(3);
	};

	var func_12 = function() {
        setTimeout(function(){
             $("#container-3").fadeIn(2000);
        }, 300);
    };

    var func_13 = function() {
        setTimeout(function(){
            $("#container-2a").addClass('opacity');
            $("#container-button-2a").hide();
        }, 1500);
    };

	var func_14 = function() {
    	$("#container-3 .prompt").html("Lark is designed by <a>some of the top health experts from Harvard and Stanford</a>, so you're in good hands.");
        $("#container-3 #prompt-b").html("What's your email? The lark app will be emailed to you. It's <strong>free.</strong>");
	};

	var func_15 = function() {
		$("#container-3 .prompt").html("Give it a try. Download the lark app for <strong>free!</strong>");
        $("#container-3 #prompt-b").text("Just need your email, so it can be sent to you.");
	};

    var func_16 = function() {
        setTimeout(function(){
            $("#container-2b").addClass('opacity');
            $("#container-button-2b").hide();
        }, 1500);
    };

    var func_17 = function() {
        $("#container-3 .prompt").text("Still not sure? The lark app is free, so test it out today.");
        $("#container-3 #prompt-b").text("Just need your email, so it can be emailed to you.");
    };

    var func_18 = function() {
		$(detached_4).insertAfter($('.page3'));
		$("#badges").animate({opacity: 1.0}, 2000);
	};

	var func_19 = function() {
        $(".main").moveTo(4);
	};

	var func_20 = function() {
        setTimeout(function(){
             $("#container-4").fadeIn(2000);
        }, 300);
    };

	var func_21 = function() {
        $("#container-3").addClass('opacity');
    };

	var func_22 = function() {
        setTimeout(function(){
			$(".page1").detach();
            $(".page2").detach();
        	$(".page3").detach();
        }, 1500);
    };

    var func_23 = function() {
		blinkingCursor(document.querySelector('.blinking-cursor'));
    };

    $( '.menu-btn' ).click(function(){
        $('.responsive-menu').toggleClass('expand');
    });

	call_scroll();

    $("#container-1").fadeIn(2000);

    func_23();

    $("#button-1").click(function(){
		var callbacks_1 = $.Callbacks();
		callbacks_1.add(func_1);
		callbacks_1.add(func_2);
		callbacks_1.add(call_scroll);
		callbacks_1.add(func_3);
		callbacks_1.add(func_4);
		callbacks_1.add(func_5);
		callbacks_1.add(func_6);
		callbacks_1.fire();
    });

    $("#button-2").click(function(){
		var callbacks_2 = $.Callbacks();
		callbacks_2.add(func_1);
		callbacks_2.add(func_6);
		callbacks_2.add(func_7);
		callbacks_2.add(call_scroll);
		callbacks_2.add(func_3);
		callbacks_2.add(func_8);
		callbacks_2.add(func_5);
		callbacks_2.fire();
    });

    $(document).on('click', '#button-3', function() {
		var callbacks_3 = $.Callbacks();
		callbacks_3.add(func_10);
		callbacks_3.add(func_9);
		callbacks_3.add(call_scroll);
		callbacks_3.add(func_11);
		callbacks_3.add(func_12);
		callbacks_3.add(func_13);
		callbacks_3.fire();
    });

    $(document).on('click', '#button-4', function() {
		var callbacks_4 = $.Callbacks();
		callbacks_4.add(func_10);
		callbacks_4.add(func_14);
		callbacks_4.add(call_scroll);
		callbacks_4.add(func_11);
		callbacks_4.add(func_12);
		callbacks_4.add(func_13);
		callbacks_4.fire();
    });

    $(document).on('click', '#button-5', function() {
		var callbacks_5 = $.Callbacks();
		callbacks_5.add(func_10);
		callbacks_5.add(func_15);
		callbacks_5.add(call_scroll);
		callbacks_5.add(func_11);
		callbacks_5.add(func_12);
		callbacks_5.add(func_16);
		callbacks_5.fire();
    });

    $(document).on('click', '#button-6', function() {
        var callbacks_6 = $.Callbacks();
		callbacks_6.add(func_10);
		callbacks_6.add(func_17);
		callbacks_6.add(call_scroll);
		callbacks_6.add(func_11);
		callbacks_6.add(func_12);
		callbacks_6.add(func_16);
		callbacks_6.fire();
    });

    $(document).on('click', '#button-7', function() {
        var callbacks_7 = $.Callbacks();
		callbacks_7.add(func_18);
		callbacks_7.add(call_scroll);
		callbacks_7.add(func_19);
		callbacks_7.add(func_20);
		callbacks_7.add(func_21);
		callbacks_7.add(func_22);
		callbacks_7.fire();
    });
});
