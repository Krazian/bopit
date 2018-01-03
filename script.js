$(document).ready(function(){
  const actions = ["click","mouseenter","keypress","double-click"]
  var action,completedAction,score = 0;
  $("#score").html(score);

  $("#start").click(function(){
    score = 0;
    $("#start").hide();
    $("#score").html(score);
    checkGameState(2000);
    promptPlayer();
  });

  function checkGameState(time){
    //faster as score increases
    if(score >= 1000){
      time -= 250;
    } else if ( score >= 2000){
      time -= 500;
    } else if ( score >= 3000){
      time -= 750;
    } else if ( score >= 3500){
      time -= 1000;
    } else if ( score >= 4500){
      time -= 1250;
    } else if ( score >= 5000){
      time -= 1500;
    };

    setTimeout(function(){
      if(completeAction){
        checkGameState(time);
        promptPlayer();
      } else {
       alert("gameOver");
       $("#active-area").off();
       $("#start").show();
     };
    },time);
  };

  function promptPlayer(){
    action = actions[Math.floor(Math.random()*(actions.length))]

    switch(action) {
      case "click":
        completeAction = false;
        //Replace below w/ audio
        alert("Click It!")
        $("#active-area").on("click",function(){
          score += 100;
          $("#score").html(score);
          completeAction = true;
          $("#active-area").off();
        });
        break;
      case "mouseenter":
        completeAction = false;
        //Replace below w/ audio
        alert("Hover It!")
        $("#active-area").on("mouseenter",function(){
          score += 100;
          $("#score").html(score);
          completeAction = true;
          $("#active-area").off();
        });
        break;
      case "keypress":
        completeAction = false;
        //Replace below w/ audio
        alert("Press Space!")
        $(document).on("keypress",function(e){
          score += 100;
          $("#score").html(score);
          completeAction = true;
          $(document).off();
        });
        break;

      case "double-click":
        completeAction = false;
        //Replace below w/ audio
        alert("Double Click It!")
        $("#active-area").on("dblclick",function(){
          score += 100;
          $("#score").html(score);
          completeAction = true;
          $("#active-area").off();
        });
        break;
    };
  };
});