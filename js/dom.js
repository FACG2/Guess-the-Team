var dom = function(cb) {
  teamName.getRandomTeam(function(team) {
    loadDoc(team,function(gifs){
      cb(team);
    })
  });
};
