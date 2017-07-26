
/* global console*/
var run = (function(){
dom(function(team){
  var correctAnswer = team.toLowerCase();
  console.log(correctAnswer);
  var text = document.querySelector('.team-name');
  var submit = document.querySelector('.guess-btn');
  var giveup = document.querySelector('.giveup-btn');

  var modal = document.getElementById('myModal');
  var closeModal = document.getElementsByClassName('close')[0];
  var modalText = document.getElementById('modalText');
  var mContent = document.getElementsByClassName('modal-content')[0];

  submit.addEventListener("click", function(event){
    event.preventDefault();
    var answer = text.value;
    if (answer === correctAnswer) {
      modal.style.display = "block";
      mContent.style.backgroundColor = '#00ff90';
      closeModal.focus();
      modalText.innerText = 'Success! The Team is ' + answer;
      mContent.style.color = '#000';
      closeModal.textContent= 'OK';
      closeModal.onclick = function() {
        modal.style.display = "none";
        location.reload();
      };
    }
    else {
      modal.style.display = "block";
      closeModal.focus();
      mContent.style.backgroundColor = '#ff0070';
      modalText.innerText = 'Try again'
      closeModal.textContent= 'OK';
      closeModal.onclick = function() {
        modal.style.display = "none";
      };
    }

  });

  giveup.addEventListener("click", function(event){
    event.preventDefault();
     closeModal.focus();
     modal.style.display = "block";
     modalText.innerText = 'The Team was ' + correctAnswer;
     closeModal.textContent= 'OK';
     closeModal.onclick = function() {
       modal.style.display = "none";
       location.reload();

     };
  })



})
})();
