$(document).on("scroll", function(){
  var element = document.getElementById("bumper");
  if
    ($(document).scrollTop() > 150){
    $("nav").addClass("shrink");
    $("header").addClass("shrink");
    $(element).addClass("shrink");
  }
  if
    ($(document).scrollTop() < 130){
    $("nav").removeClass("shrink");
    $("header").removeClass("shrink");
    $(element).removeClass("shrink");
  }
});
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
