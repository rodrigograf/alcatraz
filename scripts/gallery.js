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
		'centerOnScroll':	true,
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
		'centerOnScroll':	true,
		'overlayColor'	:	'#000',
		'overlayOpacity':	'0.80',	
		'titleFormat'	:	function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-inside">' + (title.length ? '' + title : '') + '</span><span class="fancybox-title-inside-counter">Joy of the Finish - ' + (currentIndex + 1) + ' of ' + currentArray.length + '</span>'
		}
	});
	
	$("a.modal-zoom").fancybox({
		'width'			: 840,
		'height'		: '75%',
		'autoScale'     : false,
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	300, 
		'speedOut'		:	200, 
		'changeSpeed'	:	200,
		'overlayShow'	:	true,
		'titlePosition'	:	'inside',
		'centerOnScroll':	true,
		'overlayColor'	:	'#000',
		'overlayOpacity':	'0.80',
		'type'			: 'iframe',
		'titleFormat'	:	function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-inside" style="display: block; height:30px; border-top: #eee 1px solid;"></span>'
		}
	});

});