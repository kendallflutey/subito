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

    $.ajax({
        url: '/categories/user_coords',
        type: 'POST',
        data: { latitude: latitude, longitude: longitude, id: categoryId },
        success: function(data){
          displayMap();
          processDeals(data);
        }
      });

    function displayMap() {

      var mapOptions = {
        zoom: 14,
        center: myLatlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    }

    function processDeals(data) {
      $.each(data,function(index, deal){

        var markerCoords = new google.maps.LatLng(deal.latitude, deal.longitude);

        //"July 8, 2014 23:15:00"
        var finishTime = moment(deal.finish_time).toDate();
        createMarker(markerCoords, deal.title, deal.id, deal.deal_image, deal.description, finishTime);
      });
    }
  });
}

var countdown = new Countdown();

function createMarker(markerCoords, title, id, deal_image, description, finish_time) {

  var dealMarker = new google.maps.Marker({
    position: markerCoords,
    map: map,
    title: title,
    id: id,
    deal_image: deal_image,
    description: description,
    finish_time: finish_time
  });


  google.maps.event.addListener(dealMarker, 'click', function() {
     $('#nav_bottom').hide();
     $('#nav_bottom').empty();
     $('#nav_bottom').append('<div id="popup_deal"><div id="deal_image"></div><h4>'+dealMarker.title+'!</h4>'+'<p id="popup-description">'+dealMarker.description+'</p><p id="pop-up-timer"></p></div>');
     $('#nav_bottom').show("slowly");

     countdown.stop();
     countdown.onUpdate = function(formattedTimeLeft) { $('#pop-up-timer').html(formattedTimeLeft); };
     countdown.onComplete = function() { alert('Deal ended!'); };
     countdown.start(finish_time);
  });
}
