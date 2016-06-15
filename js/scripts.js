// //Returns true if the specified element has been scrolled into the viewport.
// function isElementInViewport(elem) {
//     var $elem = $('path');

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.line-animated');
//     console.log('shitty scroll works');
//     // If the animation has already been started
//     if ($elem.hasClass('start')) return;
// console.log('has class');
//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('start');
//         console.log('added class');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });




// $(document).ready(function () {
// var $line = $('.line-animated');
// var firstScroll = false;
// $(".line-animated").css("opacity", "0");

// $(window).on('scroll', function() {
//   console.log('scroll works');
//   var scroll = $(window).scrollTop();
//   if(scroll >= $('#nes').offset().top && !firstScroll) {
//     doSomeComplicatedStuff();
//   }
// });
// function doSomeComplicatedStuff() {
//   console.log('doing complicated stuff');
//   firstScroll = true;        
//   $(".line-animated").css("strokeDashoffset", "988.01");
//   //Reset paths to starting position
//   lineDraw();
// }
// function lineDraw(){
// var length = $(".line-animated").getTotalLength();
// // Clear any previous transition
// $line.style.transition = $line.style.WebkitTransition =
//   'none';

// // Set up the starting positions
// $line.style.strokeDasharray = length + ' ' + length; 
// $line.style.strokeDashoffset = length;
// // Trigger a layout so styles are calculated & the browser 
// // picks up the starting position before animating
// $line.getBoundingClientRect();
// // Define our transition
// $line.style.transition = $line.style.WebkitTransition =
//   'stroke-dashoffset 7s ease-in-out';
//   'opacity 7s ease-in-out';
// // Go!
// $line.style.strokeDashoffset = '0';
// $line.style.opacity = '1';
//   //0 is the image fully animated, 988.01 is the starting point.
// };
// });

// Caching jQuery selectors: another micro-optimization / protip.
var $window = $(window);
$window.scroll(function() {
  var scroll = $window.scrollTop();
  var $image = $('#image');
  var $logo = $('#logo-jvd');
  var $toplaunch = $('#top-launch');
  var $navbuttons = $('#nav-buttons');
  var $results = $('#results');
  var $navtext = $('#nav-text');
  var $restricted = $('#restricted');

  // @see http://api.jquery.com/offset/
  if(scroll >= $('#restricted').offset().top) {
    $image.addClass('fix-spokane');
    $image.css('transform', '');
    $logo.addClass('logo-down');
    $logo.removeClass('logo-up');
    $toplaunch.addClass('top-launch-visible');
    $toplaunch.addClass('top-launch-animate');
    $navbuttons.css("z-index", "6");
    $navtext.addClass("nav-unclicked");
  } else {
    $image.removeClass('fix-spokane');
    $image.css("transform","translateY(" +  (scroll/2)  + "px)");
    $logo.addClass('logo-up');
    $logo.removeClass('logo-down');
    $toplaunch.removeClass('top-launch-animate');
    $toplaunch.removeClass('top-launch-visible');
    $navbuttons.css("z-index", "-3");
    $navtext.removeClass("nav-unclicked");
  }
});
    /* If the object is completely visible in the window, fade it in */

$window.scroll(function() { 
  var $lineogo = $('.icon');
  var $path = $lineogo.offset().top;
  var bottom_of_object = $path + $lineogo.outerHeight();
  var bottom_of_window = $(window).scrollTop() + $(window).height(); 
  if( bottom_of_window > bottom_of_object ){
    $('.lineogo').attr("class", "start");
    console.log('line animated!');
  }
});

// $(function () {
//     $(window).scroll(function () {
//         var $sideline = $('#sideline');
//         var $windowsDistanceFromTop = $(window).scrollTop();   //y
//         var $sidelineDistanceFromTop = $sideline.offset().top; //r
//         $sidelineDistanceFromTop.height($windowsDistanceFromTop);
//         var x = $windowsDistanceFromTop - 200;
//         $sidelineDistanceFromTop.animate({
//             height: x
//         }, 250);
//     }).scroll();
// });

// $(function () {
//     $(window).scroll(function () {
//         var y = $(window).scrollTop();
//         var r = $('#sideline').offset().top;
//         var $myDiv = $('#sideline');
//         $('#sideline').height(y);
//         x = y - 300;
//         $myDiv.animate({ //I am to assume that myDiv is supposed to be associated with something other than '#restricted'
//             height: x
//         }, 250);
//     }).scroll();
// });