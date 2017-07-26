 var url = 'http://api.football-data.org/v1/competitions/445/teams';
 var teamName = {

  //  randomNumber: function(limit) {
  //    return Math.floor(Math.random() * limit) + 1;
  //  },

   getTeamsList: function(cb) {
     request('football-data',url, function(response) {
       var res =response.teams;
    cb(res);
     });
   },

   getRandomTeam: function(cb) {
      this.getTeamsList(function(res){
       var team = res[Math.floor(Math.random() * 20)].shortName;
       if (team==="ManCity") team = "Manchester City";
       else if (team==="Crystal") team = "Crystal Palace";
       else if(team==="West Ham") team = "WestHam";
       else if(team==="ManU") team = "Manchester United";
       else if(team==="Swans") team = "Swansea City";
       else if(team==="Spurs") team = "Tottenham";
       else if(team==="Foxes") team = "Leicester City";
        cb(team);
   })
 }
 }

 if (typeof module !== 'undefined') {
   module.exports = teamName;
 }
