var displayMap = function(myLatlng) {

  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
