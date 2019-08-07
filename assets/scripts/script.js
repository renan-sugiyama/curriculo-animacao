
var width = $(window).width(), height = $(window).height();

window.addEventListener("resize", ()=>{
    if($(window).width() != width || $(window).height() != height){
        if(!document.querySelector('#name').hasFocus() || !document.querySelector('#email').hasFocus() || !document.querySelector('#message').hasFocus())
        location.reload();
        }
  });