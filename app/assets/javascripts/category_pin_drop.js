var userPosition = {

}

function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(function(position){
    setGeoCookie(position);
    setUserPosition(position);
    initialize();
  }, geoFail);

}
function setUserPosition(position){
  userPosition = position.coords;
};

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

$('.container').click(function(){
  $('#nav_bottom').hide();
});


var args = {
  id: 3,
  title: "asdfsd",
}

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

function createMarker(pos, title, id, deal_image, description, finish_time) {
    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: title,
        id: id,
        deal_image: deal_image,
        description: description,
        finish_time: finish_time
    });
    google.maps.event.addListener(marker, 'click', function() {
       // alert("I am marker " + marker.id);
       $('#nav_bottom').hide();
       $('#nav_bottom').empty();
       $('#nav_bottom').append('<div id="popup_deal"><div id="deal_image"></div><h4>'+marker.title+'</h4>'+'I am marker'+marker.id+description+'<br //><br //> finishes in: '+marker.finish_time+'</div>');
       $('#nav_bottom').show("slowly");

        // $('#nav_bottom').slideUp(200, DealDown);


    });
    return marker;
}

function DealDown(){
  $('#popup_deal').remove();
}

function initialize() {
  console.log("initialize user position", userPosition);
  var myLatlng = new google.maps.LatLng(userPosition.latitude,userPosition.longitude);
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  };

  var to_objects = function(hash) {

    var deal_list = [];
    $.each(hash, function(index, item){
      var deal = new Deal(item["id"], item["title"], item["description"], item["description"], item["finish_time"], item["deal_image"], item["business_id"], item["category_id"], item["latitude"], item["longitude"], item["finish_time"]);
      console.log(item["finish_time"]);
      deal_list.push(deal);
    });
    console.log(deal_list);
    console.log("TO OBJECTS");
    return deal_list;
  };

  var process_deals = function(deals) {

    var deal_list = to_objects(deals);



    for (var i = 0; i < deal_list.length; i++) {
      var deal = deal_list[i];

      var myLatlng = new
       google.maps.LatLng(deal["latitude"], deal["longitude"]);

       var finish = moment(deal['finish_time']).fromNow();

      marker = createMarker(myLatlng, deal['title'], deal['id'], deal['deal_image'], deal['description'], finish);
      console.log(marker.finish_time);
    }
  };
 $('#nav_bottom').click(function(){
  $('#nav_bottom').hide();
});



  $.ajax({
    url:'/getdeals',
    type: 'GET',
    data: {id: 1},
    success: process_deals
  });


  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


}

google.maps.event.addDomListener(window, 'load', getGeoLocation);
