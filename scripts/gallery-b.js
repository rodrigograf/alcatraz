// JavaScript Document
$(document).ready(function(){
						   
	$(".enlarge").click(function(){
		$(".gallery a:first").click();
	});
	
	$("a.zoom").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	300, 
		'speedOut'		:	200, 
		'changeSpeed'	:	200,
		'overlayShow'	:	true,
		'titlePosition'	:	'inside',
		'overlayColor'	:	'#000',
		'overlayOpacity':	'0.80'
	});
	
	$("a.zoom[rel]").fancybox({		
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	300, 
		'speedOut'		:	200, 
		'changeSpeed'	:	200,
		'overlayShow'	:	true,
		'titlePosition'	:	'inside',
		'overlayColor'	:	'#000',
		'overlayOpacity':	'0.80',	
		'titleFormat'	:	function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-inside">' + (title.length ? '' + title : '') + '</span><span class="fancybox-title-inside-counter">Joy of the Finish - ' + (currentIndex + 1) + ' of ' + currentArray.length + '</span>'
		}
	});
	
	$("a.modal-zoom").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	300, 
		'speedOut'		:	200, 
		'changeSpeed'	:	200,
		'overlayShow'	:	true,
		'titlePosition'	:	'inside',
		'overlayColor'	:	'#000',
		'overlayOpacity':	'0.80',
		'width'			:	'820'
	});

});