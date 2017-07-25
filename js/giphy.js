//javascript

function loadDoc (myInput) {
  var xhr = new XMLHttpRequest();
  var myImages ="";

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
      var myJsone = JSON.parse(xhr.responseText);
      myJsone.data.map(function(mydata){
        myImages += '<iframe src="' + mydata.embed_url + '"width="33.33%" height ="50%"></iframe>'
      })
      document.getElementsByClassName("search-results")[0].innerHTML = myImages;

      }
  };
  xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q="+myInput.replace(/ /g, '+')+ "&api_key=32a0bb56b37a4e23b1d75c92094695b8&limit=6", true);
  xhr.send();
}
