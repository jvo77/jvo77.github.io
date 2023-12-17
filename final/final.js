const phoneNumberDisplay= document.querySelector('#number');
const continueBtn= document.getElementById("continue");

$(document).ready(function(){
  
  var ball = {};
  
  ball.listofanswers = ["I guess so", "Yup, it is", "Yes, definitely", "Yes, duh", "Probably", "I think so", "Try again", "Ask again", "Not sure", "Cannot think, retry", "Maybe ask again", "No", "Hmmm No", "NO", "I don't know, retry"];
  
  $("#answer").hide();
  display();
  var phoneNumber = Math.floor(Math.random() * 1000000000);

  ball.getAnswer = function()
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    $("#8ball").effect("shake");
    $("answer").effect("shake");
    $("#answer").text(answer);
    $("#answer").fadeIn(800);
    $("#8ball").attr("src", "/img/8ballAnswer.png");

    console.log(answer);

    if (answer.includes('I guess so'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber );
      }, 500);

    }
    if (answer.includes('Yup, it is'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber);
      }, 500);

    }
    if (answer.includes('Yes, definitely'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber);
      }, 500);

    }
    if (answer.includes('Yes, duh'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber);
      }, 500);

    }
    if (answer.includes('Probably'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber);
      }, 500);

    }
    if (answer.includes('I think so'))
    {
      window.onload = setTimeout(function(){
        alert('the fates have decided that your number is: ' + phoneNumber);
      }, 500);
    }
  };


  function display()
  {
    phoneNumber = Math.floor(Math.random() * 1000000000);
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