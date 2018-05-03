$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 130){
    $("nav").addClass("shrink");
    $("header").addClass("shrink");
  }
  if
    ($(document).scrollTop() < 130){
    $("nav").removeClass("shrink");
    $("header").removeClass("shrink");
  }
});
