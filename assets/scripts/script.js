
var width = $(window).width(), height = $(window).height();

window.addEventListener("resize", ()=>{
    if($(window).width() != width || $(window).height() != height){
        //Do something
        location.reload();
        }
  });