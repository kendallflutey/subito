var Geo = (function() {
  var locCallback;

  var setGeoCookie = function(position) {
    var latlong= {latitude: position.coords.latitude, longitude: position.coords.longitude};
    document.cookie = "lat_lng=" + escape(JSON.stringify(latlong)) +";path=/";
    console.log("lat_lng", position);
    console.log(position.coords);
    var userlat = position.coords.latitude;
    var userlong = position.coords.longitude;
  };

  var setUserPosition = function(position){
    userPosition = position.coords;
  };

  var getGeoLocation = function() {
    navigator.geolocation.getCurrentPosition(function(position){
      setGeoCookie(position);
      setUserPosition(position);
      locCallback();
    }, geoFail);
  };

  var getLocation = function(callback) {
    locCallback = callback;
    getGeoLocation();
  };

  return {
    getLocation: getLocation
  };
})();

var Map = (function() {
  var buildMap = function() {
    //build model objects from data
    //use objects to generate DOM stuff
  };

  return {
    buildMap: buildMap
  };
})();

var Server = (function() {
  var getData = function(callback) {
    $.ajax({
      url:'/getdeals',
      type: 'GET',
      data: {id: 1},
      success: callback
    });
  };

  return {
    getData: getData
  };
})();

var App = (function() {
  var generateMap = function() {
    Server.getData(Map.buildMap);
  };

  var start = function() {
    Geo.getLocacation(generateMap);
  };

  return {
    start: start
  };
})();


