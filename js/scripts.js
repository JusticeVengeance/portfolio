var $document = $(document),
    $element = $('#header'),
    className = 'hide-bg';

$document.scroll(function() {
  $element.toggleClass(className, $document.scrollTop() >= 50);
});
$('#name').hide();
$(document).ready(function() {
	 var j = 0;
	 var delay = 3500; //millisecond delay between cycles
	 function cycleThru(e){
	 	e.preventDefault();
	         var jmax = $("ul#line3 li").length -1;
	         $("ul#line3 li:eq(" + j + ")")
	                 .animate({"opacity" : "1"} ,400)
	                 .animate({"opacity" : "1"}, delay)
	                 .animate({"opacity" : "0"}, 400, function(){
	                         (j == jmax) ? j=0 : j++;
	                         cycleThru();
	                 });
	         };

	 cycleThru();

		  //For Firefox users
	 $('body').bind('DOMMouseScroll', function(e){
	     if(e.originalEvent.detail > 0) {
	         //scroll down
	         console.log('Down');
	         //hide my logo on scroll down
	         $( "#logo" ).fadeOut(100);
	     }else {
	         //scroll up
	         console.log('Up');
	     }

	     //prevent page fom scrolling
	     return true;
	 });

	 // For IE, Opera, Safari, and Chrome users
	 $('body').bind('mousewheel', function(e){
	     if(e.originalEvent.wheelDelta < 0) {
	         //scroll down
	         console.log('Down');
	         //hide my logo on scroll down
	         $( "#lion" ).fadeOut('fast', function() {
			    // will be called when the element finishes fading out
			    // if selector matches multiple elements it will be called once for each
			    $( "#name" ).fadeIn('fast');
			});
	     }else {
	         //scroll up
	         console.log('Up');
	         //hide my logo on scroll down
	         $( "#name" ).fadeOut('fast', function() {
			    // will be called when the element finishes fading out
			    // if selector matches multiple elements it will be called once for each
			    $( "#lion" ).fadeIn('fast');
			});
	     }

	     //prevent page fom scrolling
	     return true;
	 });
 });