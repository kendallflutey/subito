// Spec folder should not be in application file. Move into spec folder.
describe("Category Pin Drop", function(){

  describe("ajax call", function() {
    it("passed parameters to ajax", function(){
      spyOn($, "ajax");
      haveGeolocation();

      expect($.ajax).toHaveBeenCalledWith({
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
