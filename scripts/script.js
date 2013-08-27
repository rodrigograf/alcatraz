// JavaScript Document Created by Rodrigo Graf

$(document).ready(function(){
	
	var elementPosition = $('body').offset().top;
	var elementID = "";
		
	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
		  e.preventDefault();
	  e.returnValue = false;  
	}	
	
	$('.menu li a').click(function(e){		
		preventDefault(e);
		elementID = $(this).attr('href');
		elementID = elementID.substring(1, elementID.length);
		elementPosition = $('body').find("#"+elementID).offset().top - 160;
		
		$('html, body').animate({scrollTop:elementPosition}, 'slow');
		return false;
	});
	
	$('#logo').click(function(e){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	
	//Mixpanel
	$(".menu ul li a").click(function() {
		mixpanel.track("Menu item clicked: " + $(this).attr('id')); 
	});
	$(".action").click(function() {
		mixpanel.track("Donate button clicked: " + $(this).attr('id')); 
	});
	$(".sponsors a").click(function() {
		mixpanel.track("Sponsor link clicked: " + $(this).attr('id')); 
	});
	$(".share a").click(function() {
		mixpanel.track("Share link clicked: " + $(this).attr('id')); 
	});
	$(".tips").click(function() {
		mixpanel.track("Tips link clicked: " + $(this).attr('id')); 
	});
});