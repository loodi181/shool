$(document).ready(function(){
    $("article > p").mouseenter(function(){ 
    $(this).css("color", "black");
    

    $("article > p").mouseleave(function() {
        $(this).css("color","white");
        
        
});
  });
});