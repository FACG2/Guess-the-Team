var dom = function(cb) {
  teamName.getRandomTeam(function(team) {
    loadDoc(team, function(gifs) {
      var gifcontainer = document.getElementsByClassName("gifimages")[0];
      gifs.forEach(function(gif, i) {
        var newdiv = document.createElement("img");
        newdiv.alt = "gif football";
        newdiv.src = gif.images.fixed_height_small.url;
        
        newdiv.classList.add("gif" + i);
        gifcontainer.appendChild(newdiv);
      })
    })
    cb(team);
  });
};
