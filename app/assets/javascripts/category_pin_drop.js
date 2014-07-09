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

    // Into a server module (can be then called from map module)
    $.ajax({
        url: '/categories/user_coords',
        type: 'POST',
        data: { latitude: latitude, longitude: longitude, id: categoryId },
        success: function(data){
          displayMap();
          processDeals(data);
        }
      });

    // Into a map view module
    function displayMap() {

      var mapOptions = {
        zoom: 14,
        center: myLatlng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    }

    // Into a map module
    function processDeals(data) {
      $.each(data,function(index, deal){

        var markerCoords = new google.maps.LatLng(deal.latitude, deal.longitude);

        var finishTime = moment(deal.finish_time).toDate();
        createMarker(markerCoords, deal.title, deal.id, deal.deal_image, deal.description, finishTime);
      });
    }
  });
}

// Global variablies are just asking for trouble. This is only used in one function so put
// it in that function or if you need to keep it around then at least put it in a module.
var countdown = new Countdown();

function createMarker(markerCoords, title, id, deal_image, description, finish_time) {

  var dealMarker = new google.maps.Marker({
    position: markerCoords,
    map: map,
    title: title,
    id: id,
    icon: '/assets/map-pin-small.png',  
    deal_image: deal_image, 
    description: description,
    finish_time: finish_time
  });


  // There is a lot going on in here.
  // - the anon function can be put into a named function
  // - the DOM stuff can at least be put into another function if not module dealing with
  //   pop up deal view stuff
  // - The counter and it's functions can be in it's own module
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
