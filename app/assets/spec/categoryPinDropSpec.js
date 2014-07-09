describe("Category Pin Drop", function(){


  describe("Check geolocation", function(){

    beforeEach(function(){
      getCoords();
    });

    it("should call haveGeolocation function if browser can use geolocation", function(){
      spyOn(Modernizr, 'load');
      Modernizr.load();
      expect(Modernizr.load).toHaveBeenCalled();
    });
  });

  describe("Ajax call", function() {
    xit("should make an ajax request to the correct URL", function(){
      spyOn($, "ajax");

      haveGeolocation();

      expect($.ajax).toHaveBeenCalled({
        url: '/categories/user_coords',
        type: 'POST',
        data: { latitude: latitude, longitude: longitude, id: categoryId },
        success: function(data){
          displayMap();
          processDeals(data);
        }
      });
    });
  });

  describe("displayMap", function() {
    xit("should return a mapOption var zoom property of 14", function() {
      expect(mapOptions.zoom).toEqual(14);
    });
  });
});
