//nav script
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $(".navbar").addClass("nav-fix");
    }else{
      $(".navbar").removeClass("nav-fix");
    }
  });
  //nav script

//type.js
var typed = new Typed(".type", {
  strings: ["Designer", "Developer","Designer", "Developer"],
  typeSpeed:120,
  backSpeed:120,
  loop:true

});
//review script
$('.owl-carousel').owlCarousel({
  autoplay:true,
  items:2,
  loop:true,
  dots:true,
  autoplayTimeout:6000,
  responsive:{
      991:{items:2},
      767:{items:2},
      0:{items:1}
   }
});

   //back to top script start
 $(document).ready(function(){
    $(window).scroll(function()
    {
      if ($(this).scrollTop()>300) {
        $('#scroll').fadeIn();
      }
      else{
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(function(){
      $('html,body').animate({
        scrollTop:0 } , 600);
    return false;
      })
    });
  //back to top script end




  //smooth-scroll

      // Instantiate Scrolls
      var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

      var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

      var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
      var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
      var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
      var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

      var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
      var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
      var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
      var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

      var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
      var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
      var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
      var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});

    // Log scroll events
      var logScrollEvent = function (event) {
      console.log('type:', event.type);
      console.log('anchor:', event.detail.anchor);
      console.log('toggle:', event.detail.toggle);
    };
    document.addEventListener('scrollStart', logScrollEvent, false);
    document.addEventListener('scrollStop', logScrollEvent, false);
    document.addEventListener('scrollCancel', logScrollEvent, false);
//




//wow.js script start
wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true        
    }
  )
  wow.init();
  //wow.js script end


//counter script start
var x = 0;
$(window).scroll(function() {

  var oTop = $('#stats-counter').offset().top - window.innerHeight;
  if (x == 0 && $(window).scrollTop() > oTop) {
    $('.stats-counter-value').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
                 {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    x = 1;
  }
});
//counter script end


//portfolio script


$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');

      $(".filter-button").css({'color':'#636363','border-right':'2px solid transparent','border-left':'2px solid transparent','font-width':'bold;'});
      $(this).css({'color':'#000','border-right':'2px solid #3bbf75','border-left':'2px solid #3bbf75'});
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('1000');
      }
      else
      {
//      $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//       $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});




///map


 // When the window has finished loading create our google map below
 google.maps.event.addDomListener(window, 'load', init);
        
 function init() {
     // Basic options for a simple Google Map
     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
     var mapOptions = {
         // How zoomed in you want the map to start at (always required)
         zoom: 11,

         // The latitude and longitude to center the map (always required)
         center: new google.maps.LatLng(40.6700, -73.9400), // New York

         // How you would like to style the map. 
         // This is where you would paste any style found on Snazzy Maps.
         styles: [{"stylers":[{"hue":"#baf4c4"},{"saturation":10}]},{"featureType":"water","stylers":[{"color":"#effefd"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]}]
     };

     // Get the HTML DOM element that will contain your map 
     // We are using a div with id="map" seen below in the <body>
     var mapElement = document.getElementById('map');

     // Create the Google Map using our element and options defined above
     var map = new google.maps.Map(mapElement, mapOptions);

     // Let's also add a marker while we're at it
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(40.6700, -73.9400),
         map: map,
         title: 'Snazzy!'
     });
 }

 //review script
