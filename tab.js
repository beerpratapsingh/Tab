$(document).ready(function(i){	
	var $tabLinks = $(".tab-links"),
	    $tabCont = $(".tab-sec");	   
	    
	    $tabCont.filter(':not([hidden])').attr('hidden', true);	    
	    $tabCont.first().attr('hidden', false);
	$tabLinks.on("click", "a",  function(e){				
		e.preventDefault();	
		var curTab = $(this).attr("href");	
		$tabCont.filter(':not([hidden])').attr('hidden', true);
		$(curTab).removeAttr('hidden');
		$tabLinks.find(".active").removeClass("active");
		$(this).parent().addClass("active");
	})
});