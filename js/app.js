var run = (function(){
dom(function(team){
  var correctAnswer = team.toLowerCase();
  console.log(correctAnswer);
  var text = document.querySelector('.team-name');
  var submit = document.querySelector('.guess-btn');
  var giveup = document.querySelector('.giveup-btn');

  submit.addEventListener("click", function(){
    var answer = text.value;
    if (answer === correctAnswer) {
      alert("Correct Answer");
      location.reload();
    }
    else alert("Wrong Answer! Try Again");
  });

  giveup.addEventListener("click", function(){
    alert("Correct Answer is "+correctAnswer);
  })

})
})();
