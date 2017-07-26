(function() {
  teamName.getRandomTeam(function(team) {
    loadDoc(team,function(gifs){
      console.log(gifs);
    })
  });
})();
