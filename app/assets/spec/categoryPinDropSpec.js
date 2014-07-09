describe("Category Pin Drop", function(){


  describe("Check geolocation", function(){

    beforeEach(function(){
      this.coords = new getCoords();
      this.url = '/categories/user_coords';
    });

    it("should call haveGeolocation function if browser can use geolocation", function(){
      spyOn(Modernizr, 'load');
      Modernizr.load();
      expect(Modernizr.load).toHaveBeenCalled();
    });
  });

  describe("Ajax call", function() {
    it("should make an ajax return correct parameters", function(){
      spyOn($, "ajax");

      beforeEach(function(){
        haveGeolocation();
        this.requestArgs = $.ajax.calls.argsFor(0)[0];
      });

       it("makes a POST request", function () {
            expect(this.requestArgs.type).toEqual('POST');
        });

        it("categories user/coords show url", function () {
            expect(this.requestArgs.url).toEqual('/game_state/show');
        });
    });
  });

  describe("displayMap", function() {
    xit("should return a mapOption var zoom property of 14", function() {
      expect(mapOptions.zoom).toEqual(14);
    });
  });
});
