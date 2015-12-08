//THIS IS MY SCRIPTS.JS

//THIS IS A MODULE
// @todo create an angular module that launches a whoAreYou modal. 
// @todo create an angular module that accepts the user's name and adds it to firebase.
// @todo create an angular module that gets user's location.
// @todo create an angular module that conisders the user's location and selects the nearest agency.
// @todo create an angular module that asks for the user to confirm their agency.
var $document = $(document),
    $element = $('#header'),
    className = 'hide-bg';

$(document).ready(function() {
    $(".divider").animate({width: "+=50%"}, 2000);
    $(".divider").animate({width: "-=50%"}, 2000);
setTimeout(arguments.callee, 1000);
});

$document.scroll(function() {
//   $element.toggleClass(className, $document.scrollTop() >= 50);
// });
// $('#name').hide();
// $(document).ready(function() {
// 	 var j = 0;
// 	 var delay = 3500; //millisecond delay between cycles
// 	 function cycleThru(){
// 	         var jmax = $("ul#line3 li").length -1;
// 	         $("ul#line3 li:eq(" + j + ")")
// 	                 .animate({"opacity" : "1"} ,400)
// 	                 .animate({"opacity" : "1"}, delay)
// 	                 .animate({"opacity" : "0"}, 400, function(){
// 	                         (j == jmax) ? j=0 : j++;
// 	                         cycleThru();
// 	                 });
// 	         };

// 	 cycleThru();

		  //For Firefox users
	 $('body').bind('DOMMouseScroll', function(e){
	     if(e.originalEvent.detail > 0) {
	         //scroll down
	         console.log('Down');
	         //hide my logo on scroll down
	         $( "#lion" ).fadeOut(100);
	         $( "#name" ).fadeIn(100);
	     }else if(e.originalEvent.detail < 0) {
	         //scroll up
	         console.log('Up');
	         $( "#name" ).fadeOut(100);
	         $( "#lion" ).fadeIn(100);
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
	     }else if(e.originalEvent.wheelDelta > 0) {
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
  var percentage1 = $('.flav1').attr('data-value');
  var percentage2 = $('.flav2').attr('data-value');
  var percentage3 = $('.flav3').attr('data-value');
	var chart = new CanvasJS.Chart("flavorChart", {
    animationEnabled: true,     
		data: [
		{        
			type: "doughnut",
			startAngle: 60,                					
			showInLegend: false,
			dataPoints: [
				{y: percentage1/*, indexLabel: "EXAMPLE TITLE #percent%"*/},
				{y: percentage2},
				{y: percentage3}			
			]
		}
		]
	});
	chart.render();
	// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 5);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 1700;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
 });