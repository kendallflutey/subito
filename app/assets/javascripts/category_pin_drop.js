function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(setGeoCookie, geoFail);

}

function setGeoCookie(position) {
  var latlong= {latitude: position.coords.latitude, longitude: position.coords.longitude};
  document.cookie = "lat_lng=" + escape(JSON.stringify(latlong)) +";path=/";
  console.log("lat_lng", position);
  console.log(position.coords);
  var userlat = position.coords.latitude;
  var userlong = position.coords.longitude;
}
function geoFail(data){console.log("geofail", data)}


var map;



function Deal(id, title, description, start_time, finish_time, deal_image, business_id, category_id, latitude, longitude){
  this.id = id;
  this.title = title;
  this.description = description;
  this.start_time = start_time;
  this.finish_time = finish_time;
  this.deal_image = deal_image;
  this.business_id = business_id;
  this.category_id = category_id;
  this.latitude = latitude;
  this.longitude =  longitude;
}

function createMarker(pos, title, id) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title,
        id: id
    });
    google.maps.event.addListener(marker, 'click', function() {
       // alert("I am marker " + marker.id);
       $('body').append('<div id="popup">'+marker.title+'<br \\>'+'I am marker'+marker.id+'</div>');

    });
    return marker;
}

// var mapCenter = new google.maps.LatLng(-42.301225,178.773961);
function initialize() {
  getGeoLocation();
  var myLatlng = new google.maps.LatLng(-41.301225,174.773961);
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };

  var to_objects = function(hash) {
    var deal_list = [];
    $.each(hash, function(index, item){
      var deal = new Deal(item["id"], item["title"], item["description"], item["description"], item["finish_time"], item["deal_image"], item["business_id"], item["category_id"], item["latitude"], item["longitude"]);
      deal_list.push(deal);
    });
    console.log(deal_list);
    return deal_list;
  };

  var process_deals = function(deals) {
    var deal_list = to_objects(deals);

    for (var i = 0; i < deal_list.length; i++) {
      var deal = deal_list[i];
      console.log(deal);

      var myLatlng = new
       google.maps.LatLng(deal["latitude"], deal["longitude"]);

      // var marker = new google.maps.Marker({
      //     position: myLatlng,
      //     map: map,
      //     title: deal['title'],
      //     id: i
      // });

      createMarker(myLatlng, deal['title'], i);
    }
  };

  $.ajax({
    url:'/getdeals',
    type: 'GET',
    data: {id: 1},
    success: process_deals
  });


  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

//   var ekim = {"title": "cheap burgers",
//             "latitude": -41.29237,
//             "longitude": 174.77642
// };

// var jjs = {'title': "$5 steak",
//             'latitude': -41.29341,
//             'longitude': 174.78118
// };

// var fix = {'title': "$2 pies",
//             'latitude': -41.29759,
//             'longitude': 174.77327
// };

// var mollies = {'title': "guiness",
//             'latitude': -41.301225,
//             'longitude': 174.773961,
// };

// var deals = [ekim, jjs, fix, mollies];


  // google.maps.event.addListener(marker, 'click', function() {
  //   console.log('clicked');
  // });
}

google.maps.event.addDomListener(window, 'load', initialize);