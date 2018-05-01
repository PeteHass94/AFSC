$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 500){
    $("nav").addClass("shrink");
    $("header").addClass("shrink");
  }
  else
  {
    $("nav").removeClass("shrink");
    $("header").removeClass("shrink");
  }
});
