describe("mapOptions", function(){

  mapOptions = {
    zoom: 14,
    center: "41.2889, 174.7772",
    disableDefaultUI: true
  }

  it("should have a zoom value of 14", function(){
    expect(mapOptions.zoom).toEqual(14);
  });

  it("should have coordinates for the center property", function(){
    expect(mapOptions.center).toEqual("41.2889, 174.7772");
  });

  it("should have disableDefaultUI property value of true", function(){
    expect(mapOptions.disableDefaultUI).toBe(true);
  });
});
