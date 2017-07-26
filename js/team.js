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
       var team = res[Math.floor(Math.random() * 20) + 1].shortName;
        cb(team);
   })
 }
 }

 if (typeof module !== 'undefined') {
   module.exports = teamName;
 }
