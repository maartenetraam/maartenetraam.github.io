

 
 $(window).on('load', function () 
 {
	setInterval(function() 
	{
    $("#loading").fadeOut(1500)
	}, 1000);
 });


$( document ).ready(function() 
{

/*     //give shaddowwrapper bogus id so css won't run because filter:none does nothing
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
        $("#shadowwrapper").attr("id","newId");
    } */
	


    if( $(this).width() < 555 ) 
	{		
		$(".navbar-toggler").insertAfter(".navbar");
		$(".navbar-toggler").addClass("navbar-toggler2");
		$(".custom-toggler").addClass("custom-toggler2");
		$(".navbar-toggler-icon").addClass("navbar-toggler-icon2");
    }
	
	$("#edu").click(function()
	{
		$( ".experience" ).fadeOut( "slow", function() 
		{
			$( ".skills" ).fadeOut( "slow", function() 
			{
			  $( ".education" ).fadeIn( 3000, function() 
			  {
			  });
			});
		});
			
/* 		$(".education").css("display", "block");
		$(".experience").css("display", "none");
		$(".skills").css("display", "none") */;
		
		$("#edu").addClass("resumeActive");
		$("#exp").removeClass("resumeActive");
		$("#skl").removeClass("resumeActive");
	}); 

	$("#exp").click(function()
	{
		$( ".education" ).fadeOut( "slow", function() 
		{
			$( ".skills" ).fadeOut( "slow", function() 
			{
			  $( ".experience" ).fadeIn( 3000, function() 
			  {
			  });
			});
		});
		
/* 		$(".education").css("display", "none");
		$(".experience").css("display", "block");
		$(".skills").css("display", "none"); */
		
		$("#edu").removeClass("resumeActive");
		$("#exp").addClass("resumeActive");
		$("#skl").removeClass("resumeActive");
	}); 

	$("#skl").click(function()
	{
		$( ".education" ).fadeOut( "slow", function() 
		{
			$( ".experience" ).fadeOut( "slow", function() 
			{
			  $( ".skills" ).fadeIn( 3000, function() 
			  {
			  });
			});
		});
		
/* 		$(".education").css("display", "none");
		$(".experience").css("display", "none");
		$(".skills").css("display", "block"); */
		
		$("#edu").removeClass("resumeActive");
		$("#exp").removeClass("resumeActive");
		$("#skl").addClass("resumeActive");
	}); 

});



var clicked = false;
$( ".navbar-toggler" ).click(function() 
{

	clicked = !clicked;

	
	if(clicked == true)
	{
		$("#text").addClass("toggleMarginDown");
		$("#text").removeClass("toggleMarginUp");				
	}
	else
	{
		$("#text").addClass("toggleMarginUp");	
		$("#text").removeClass("toggleMarginDown");
	}

});

$(window).resize(function() 
{
    if( $(this).width() < 555 ) 
	{		
		$(".navbar-toggler").insertAfter(".navbar");
		$(".navbar-toggler").addClass("navbar-toggler2");
		$(".custom-toggler").addClass("custom-toggler2");
		$(".navbar-toggler-icon").addClass("navbar-toggler-icon2");
    }
});

$(window).resize(function() 
{
    if( $(this).width() > 555 ) 
	{		
		$(".navbar-toggler").insertAfter(".navbar-brand");
		$(".navbar-toggler").removeClass("navbar-toggler2");
		$(".custom-toggler").removeClass("custom-toggler2");
		$(".navbar-toggler-icon").removeClass("navbar-toggler-icon2");

    }
});

