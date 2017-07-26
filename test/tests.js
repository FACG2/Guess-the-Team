var test  = require('tape');
var teams = require('../js/team.js');

test('random number from 0 to 19', function(t){
  var result = teams.randomNumber(20) > 0 &&
   teams.randomNumber(19) < 20;
  t.ok(result);
  t.end();
});

test('get a list of 20 teams', function(t){
  var actual = teams.getTeamsList().length;
  var expected = 20
  t.equal(actual,expected);
  t.end();
});
