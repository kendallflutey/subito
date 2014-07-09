function getCoords() {
  Modernizr.load({
    test: Modernizr.geolocation,
    yep : haveGeolocation(),
    nope: 'geo.js'
  });
}

function haveGeolocation() {

  navigator.geolocation.getCurrentPosition(function(position){

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var myLatlng = new google.maps.LatLng(latitude, longitude);
    var createMap = new displayMap(myLatlng);

    $.ajax({
        url: '/categories/user_coords',
        type: 'POST',
        data: { latitude: latitude, longitude: longitude, id: categoryId },
        success: function(data){
          createMap;
          processDeals(data);
        }
      });

    function processDeals(data) {
      $.each(data,function(index, deal){
        var markerCoords = new google.maps.LatLng(deal.latitude, deal.longitude);
        var startTime = moment(deal.start_time).toDate();
        var finishTime = moment(deal.finish_time).toDate();
        createMarker(markerCoords, deal.title, deal.id, deal.deal_image, deal.description, startTime, finishTime);
      });
    }
  });
}

var countdown = new Countdown();

function createMarker(markerCoords, title, id, deal_image, description, start_time, finish_time) {

  var dealMarker = new google.maps.Marker({
    position: markerCoords,
    map: map,
    title: title,
    id: id,
    icon: '/assets/map-pin-small.png',
    deal_image: deal_image,
    description: description,
    start_time: start_time,
    finish_time: finish_time
  });

  var source = $("#deal-template").html();
  var template = Handlebars.compile(source);
  var context = { title: dealMarker.title, description: dealMarker.description };
  var html = template(context);

  google.maps.event.addListener(dealMarker, 'click', function() {
     $('#nav_bottom').hide();
     $('#nav_bottom').empty();
     $('#nav_bottom').append(html);
     $('#nav_bottom').show("slowly");

     countdown.stop();
     countdown.onUpdate = function(formattedTimeLeft) { $('#pop-up-timer').html(formattedTimeLeft); };
     countdown.onComplete = function() { alert('Deal ended!'); };
     countdown.start(start_time);
     countdown.end(finish_time);
  });
}
