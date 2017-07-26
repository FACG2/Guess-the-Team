var loadDoc = function(myInput,cb) {
  var url = "http://api.giphy.com/v1/gifs/search?q=" + myInput.replace(/ /g, '+') + "&api_key=32a0bb56b37a4e23b1d75c92094695b8&limit=6&rating=g";
  request('giphy',url, function(response) {
    var gifs =response.data;
 cb(gifs);
  });
}
