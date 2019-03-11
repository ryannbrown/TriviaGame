$( document ).ready(function() {
    $("#o1").click(function (){
    $("#a1").show();
    $("#a2").hide();
    });
    
    $("#o2").click(function (){
      $("#a2").show();
      $("#a1").hide();
    });
    
  });