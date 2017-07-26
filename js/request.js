var request= function (url,callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader('X-Auth-Token', '49d0ea6d159a4920a65e2e5c5569e8cf');
  xhr.send();
};
