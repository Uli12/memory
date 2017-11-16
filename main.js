$("img").attr("src", "./resources/images/card.jpg")

var clickedImages= []
$(document).ready( function() {
  
  $("img").on("click", function() {
    var source = $(this).attr("alt")
    $(this).attr("src", "./resources/images/" + source )

  
    setTimeout(function() {
      $("img").attr("src", "./resources/images/card.jpg")
    }, 1000);

    function flipOver() {
      $("img").attr("id", "no_click")    
      setTimeout( function() {
        $("img").attr("src", "images/card.jpg" )     
        ansArr = []
        $("img").attr("id", "")
      }, 500)
    }

    //if two of the cards are the same stay open

      
      


 })

    
  
 


});


