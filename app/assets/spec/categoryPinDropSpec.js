describe("Category Pin Drop", function(){


  describe("Check geolocation", function(){


    beforeEach(function(){
      getCoords();
    });

    describe("getCoords", function() {
        xit("should execute the test function with valid data", function() {
              var jasmineSuccess = jasmine.createSpy();
              var jasmineError = jasmine.createSpy();

              spyOn(Modernizr.geolocation,"getCoords").andCallFake(function() {
                     var position = { coords: { latitude: 32.8569, longitude: -96.9628 } };
                     arguments[0](position);
              });

              getCoords(jasmineSuccess, jasmineError);

              waitsFor(jasmineSuccess.callCount > 0);

              runs(function() {
                    expect(jasmineSuccess).wasCalledWith('75038');
              });
        });
  });

    xit("should call haveGeolocation function if browser can use geolocation", function(){
      spyOn(Modernizr, 'load');
      expect(Modernizr.load).toHaveBeenCalled();
    });
  });

  describe("Ajax call", function() {
    xit("should make an ajax request to the correct URL", function(){
      spyOn($, "ajax");

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
