const phoneNumberDisplay= document.querySelector('#number');
$(document).ready(function(){
  
  var ball = {};
  
  ball.listofanswers = ["I guess so", "Yup, it is", "Yes, definitely", "Yes, duh", "Probably", "Yes", "I think so", "Try again", "Ask again", "Not sure", "Cannot think, retry", "Maybe ask again", "No", "Hmmm No", "NO", "I don't know, retry"];
 
  $("#answer").hide();

  ball.getAnswer = function()
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#answer").text(answer);
    $("#answer").fadeIn(3000);
    $("#8ball").effect( "shake");
    $("#8ball").attr("src", "/img/8ballAnswer.png");

    console.log(question);
    console.log(answer);
  };

  function display()
  {
    var phoneNumber = Math.floor(100000000 + Math.random() * 900000000);

    phoneNumberDisplay.textContent = phoneNumber;
    console.log(phoneNumber);
  }

  var onClick = function()
  {
    $("#answer").hide();
    ball.getAnswer();

    ball.display();
  };
  
  $("#revealButton").click( onClick );

});