const phoneNumberDisplay= document.querySelector('#number');

$(document).ready(function(){
  
  var ball = {};
  
  ball.listofanswers = ["I guess so", "Yup, it is", "Yes, definitely", "Yes, duh", "Probably", "Yes", "I think so", "Try again", "Ask again", "Not sure", "Cannot think, retry", "Maybe ask again", "No", "Hmmm No", "NO", "I don't know, retry"];
  
  $("#answer").hide();
  display();

  ball.getAnswer = function()
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#answer").text(answer);
    $("#answer").fadeIn(3000);
    $("#8ball").effect( "shake");
    $("#8ball").attr("src", "/img/8ballAnswer.png");

    console.log(answer);
    if (answer == ("I guess so", "Yup, it is", "Yes, definitely", "Yes, duh", "Probably", "Yes", "I think so"))
    {
      console.log("YAY");
    }
  };

  function display()
  {
    var phoneNumber = Math.floor(Math.random() * 1000000000);
    phoneNumberDisplay.textContent = phoneNumber;
    console.log(phoneNumber);
  }

  var onClick = function()
  {
    $("#answer").hide();
    ball.getAnswer();
    console.log(display());
  };
  
  $("#revealButton").click( onClick );

});