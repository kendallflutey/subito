// $(document).ready(function(){

// var userPosition = {

// }

// function getGeoLocation() {
//   navigator.geolocation.getCurrentPosition(function(position){
//     setGeoCookie(position);
//     setUserPosition(position);
//     initialize();
//   }, geoFail);

// }
// function setUserPosition(position){
//   userPosition = position.coords;
// };

// function setGeoCookie(position) {
//   var latlong= {latitude: position.coords.latitude, longitude: position.coords.longitude};
//   document.cookie = "lat_lng=" + escape(JSON.stringify(latlong)) +";path=/";
//   console.log("lat_lng", position);
//   console.log(position.coords);
//   var userlat = position.coords.latitude;
//   var userlong = position.coords.longitude;
// }
// function geoFail(data){console.log("geofail", data)}


// var map;

// $('.container').click(function(){
//   $('#nav_bottom').hide();
// });



// function Deal(id, title, description, start_time, finish_time, deal_image, business_id, category_id, latitude, longitude){
//   this.id = id;
//   this.title = title;
//   this.description = description;
//   this.start_time = start_time;
//   this.finish_time = finish_time;
//   this.deal_image = deal_image;
//   this.business_id = business_id;
//   this.category_id = category_id;
//   this.latitude = latitude;
//   this.longitude =  longitude;
// }

// function createMarker(pos, title, id, deal_image, description, finish_time) {
//     var marker = new google.maps.Marker({
//         position: pos,
//         map: map,
//         title: title,
//         id: id,
//         deal_image: deal_image,
//         description: description,
//         finish_time: finish_time
//     });
//     google.maps.event.addListener(marker, 'click', function() {
//        // alert("I am marker " + marker.id);
//        $('#nav_bottom').hide();
//        $('#nav_bottom').empty();
//        $('#nav_bottom').append('<div id="popup_deal"><div id="deal_image"></div><h4>'+marker.title+'</h4>'+'I am marker'+marker.id+description+'<br //><br //> finishes in: '+marker.finish_time+'</div>');
//        $('#nav_bottom').show("slowly");

//         // $('#nav_bottom').slideUp(200, DealDown);


//     });
//     return marker;
// }

// function DealDown(){
//   $('#popup_deal').remove();
// }

// function initialize() {
//   console.log("initialize user position", userPosition);
//   var myLatlng = new google.maps.LatLng(userPosition.latitude,userPosition.longitude);
//   var mapOptions = {
//     zoom: 14,
//     center: myLatlng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true
//   };

//   var to_objects = function(hash) {

//     var deal_list = [];
//     $.each(hash, function(index, item){
//       var deal = new Deal(item["id"], item["title"], item["description"], item["description"], item["finish_time"], item["deal_image"], item["business_id"], item["category_id"], item["latitude"], item["longitude"], item["finish_time"]);
//       console.log(item["finish_time"])
//       deal_list.push(deal);
//     });
//     console.log(deal_list);
//     console.log("TO OBJECTS");
//     return deal_list;
//   };

//   var process_deals = function(deals) {

//     var deal_list = to_objects(deals);

  

//     for (var i = 0; i < deal_list.length; i++) {
//       var deal = deal_list[i];

//       var myLatlng = new
//        google.maps.LatLng(deal["latitude"], deal["longitude"]);

//        var finish = moment(deal['finish_time']).fromNow();

//       marker = createMarker(myLatlng, deal['title'], deal['id'], deal['deal_image'], deal['description'], finish);
//       console.log(marker.finish_time)
//     }
//   };
//  $('#nav_bottom').click(function(){
//   $('#nav_bottom').hide();
// })



//   $.ajax({
//     url:'/getdeals',
//     type: 'GET',
//     data: {id: 1},
//     success: process_deals
//   });


//   map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


// }

// google.maps.event.addDomListener(window, 'load', getGeoLocation);

// });

//***************************************************************
//**************************************************************


// $(document).ready(function(){

//   var latitude = -41.295094;
//   var longitude = 174.773017;
//   var myLatlng;
//   var map;
//   var dealImage;

//   function createMarker(pos, title, business, address, counter, id) {

//     dealImage = '<div id="deal_image"></div>';

//     var marker = new google.maps.Marker({       
//           position: pos, 
//           map: map,
//           title: title,
//           business: business,
//           address: address,
//           counter: counter,
//           id: id    
//       }); 

//        function DealDown() {
//         $('#popup_deal').remove();
//       }

//       function DealUp() {
//         $('#nav_bottom').append('<div id="popup_deal">' + dealImage + marker.title + '<br \>' + marker.business + '<br \>' + marker.address +'<br \>' + 'I am marker' + '<br \>' + marker.counter + marker.id + '</div>');
//       }

//       google.maps.event.addListener(marker, 'click', function() {
//         $('#nav_bottom').slideUp(200, DealUp);
//         $('#nav_bottom').slideDown(200, DealDown);
//         });
        
//         return marker;
//   }

//   function initialize() {

//     myLatlng =  new google.maps.LatLng(latitude, longitude);

//     var mapOptions = {
//       zoom: 15,
//         center: myLatlng
//     };

//     map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

//     var ekim = {
//         'title': 'Half Price Burgers',
//         'business': 'Ekim Burgers',
//         'address': '101 Cuba St',
//         'description': 'Buy and regular',
//         'latitude': -41.29237,
//         'longitude': 174.77642,
//         'counter': '00:34:45'
//     };

//     var jjs = {
//       'title': '$5 steak',
//       'business': 'JJ Murphy & Co',
//       'address': '34 Manners St',
//           'latitude': -41.29341,
//           'longitude': 174.78118,
//           'counter': '01:34:45'
//       };

//     var fix = {
//       'title': '$2 pies',
//       'business': 'Fix Manners',
//       'address': '67 Manners St',
//           'latitude': -41.29759,
//           'longitude': 174.77327,
//           'counter': '00:20:45'
//     };

//     var mollies = {
//       'title': 'Cheap Guiness',
//       'business': 'Molly Malones',
//       'address': '50 Courtenay Pl',
//           'latitude': -41.301225,
//           'longitude': 174.773961,
//           'counter': '00:45:45'
//       };

//       var deals = [ekim, jjs, fix, mollies];

//       for (var i = 0; i < deals.length; i++) {
//         var deal = deals[i];
//       console.log(deal);
//       var myLatlng = new google.maps.LatLng(deal["latitude"], deal["longitude"]);
//       createMarker(myLatlng, deal['title'], deal['business'], deal['address'], deal['counter'], i);
//     }
//   }

//   google.maps.event.addDomListener(window, 'load', initialize);
// });

//**********************
//**********************************************
//

function showMap() {
   
  //If HTML5 Geolocation Is Supported In This Browser
    if (navigator.geolocation) {
        
      //Use HTML5 Geolocation API To Get Current Position
        navigator.geolocation.getCurrentPosition(function(position){
          
          //Get Latitude From Geolocation API
          var latitude = position.coords.latitude;
          
          //Get Longitude From Geolocation API
          var longitude = position.coords.longitude;
          
          //Define New Google Map With Lat / Lon
          var myLatlng = new google.maps.LatLng(latitude, longitude);
          
          //Specify Google Map Options
          var mapOptions = {
            zoom: 14,
            center: myLatlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
              
          map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "You Are Here!"
          });
   
      }
    );

    }else {
      
      //Otherwise - Gracefully Fall Back If Not Supported... Probably Best Not To Use A JS Alert Though :)
        alert("Sorry, but your browser doesn't play nice with Subito...");
    }
    
};   
  
//Once Page Is Populated - Initiate jQuery
$(document).ready(function() {
  
  //Show The Map
  showMap();
 
});





