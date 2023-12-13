$(document).ready(function(){
  // $("#blockPopup").hide();
  $("#blockPopup").css('display','none');
  
  $(".dotPosition").hover(function () {
    console.log($(this).css("top"));
      // $("#blockPopup").show();
      $("#blockPopup").css('display','block');

                      var topValue = $(this).css("top")
                      var leftValue = $(this).css("left")
                      $("#blockPopup").css("top",topValue);
                      $("#blockPopup").css("left",leftValue +"" +"!important");
                      $("#blockPopup").css("margin-left",leftValue +"" +"!important");
                }, function () {
                  
                  $("#blockPopup").css('display','none');
                  // $("#blockPopup").hide();
                 
                });
  
  })