$( document ).ready(function(){

  $(".button-collapse").sideNav();

  $('.carousel.carousel-slider').carousel({
      indicators: true,
      full_width: true
  });

  var carouselInterval = '';

  var autoplay = function(){
    carouselInterval = setInterval(function(){
  	$('.carousel.carousel-slider').carousel('next');
  }, 3000);
  };

  //$(autoplay());

  $('.carousel.carousel-slider').hover(function(){
    clearInterval(carouselInterval);
  }, function(){
    autoplay();
  });


  $('.materialboxed').materialbox();


})
