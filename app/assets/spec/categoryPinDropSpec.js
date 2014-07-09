describe("CategoryPinDrop", function(){

  describe("Modernizr", function(){

    it("should call Modernizr.load", function(){
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
        // this.requestArgs = $.ajax.calls.argsFor(0)[0];
      });

      it("makes a POST request", function() {
          expect(this.requestArgs.type).toEqual('POST');
      });

      it("categories user/coords show url", function () {
          expect(this.requestArgs.url).toEqual('/game_state/show');
      });
    });
  });
});


