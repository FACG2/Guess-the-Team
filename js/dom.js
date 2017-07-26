(function() {
  teamName.getRandomTeam(function(team) {
    loadDoc(team,function(gifs){
    var gifcontainer = document.getElementsByClassName("gifimages")[0];
console.log(gifs);
    gifs.forEach(function(gif,i){
    var newdiv = document.createElement("img");
    newdiv.src = gif.images.fixed_height_small.url;
    //console.log(gif.embed_url);
    newdiv.classList.add("gif"+i);
    gifcontainer.appendChild(newdiv);
    })
    })
  });
})();
