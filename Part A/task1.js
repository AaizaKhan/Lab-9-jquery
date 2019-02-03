$(document).ready(function(e)
{
	$("h1").click( function(){
		$("h1").hide();
	});
	$("h2").click( function(){
		$("h2").hide();
	});
	$("h3").click( function(){
		$("h3").hide();
	});
	$("h4").click( function(){
		$("h4").hide();
	});
	$("h5").click( function(){
		$("h5").hide();
	});
	$("h6").click( function(){
		$("h6").hide();
	});

	$("p").dblclick( function(){
		$("p").css("background-color","pink");
	});
	$(".a").focus( function(){
		$(".focus").text("This contains first name");
	});
	$(".b").focus( function(){
		$(".focus").text("This contains middle name");
	});
	$(".c").focus( function(){
		$(".focus").text("This contains last name");
	});

	$("#name").focus(function(){
		$("#name").prop("disabled",true);
	});

	$("button").click(function(){
        var count = $("ul li").length;
		$(".count").text("This list contains " + count + " list items");
	});

});