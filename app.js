// Remember that we have to add the JS script tag link from the settings in order for the scrolling effect to work

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 72;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 72;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// If we decide to add Chicago back or the head coach joke we have to dive degree values (360/6 instead of 360/5 here and in CSS)