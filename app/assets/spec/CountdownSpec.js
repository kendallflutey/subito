describe("Countdown", function(){

  describe("new Countdown", function(){

    var targetStartTime = "2014/07/11 08:15:35";
    var targetEndTime = "2014/07/11 12:15:35";
    var interval = "01:15:35";
    var hourElem = 2;
    var minuteElem = 34;
    var secondElem = 54;

    it("should have a targetStartTime", function(){
      expect(targetStartTime).toEqual("2014/07/11 08:15:35");
    });

    it("should have a targetEndTime", function(){
      expect(targetEndTime).toEqual("2014/07/11 12:15:35");
    });

    it("should have an interval", function(){
      expect(interval).toEqual("01:15:35");
    });

    it("should have an hourElem", function(){
      expect(hourElem).toEqual(2);
    });

    it("should have a minuteElem", function(){
      expect(minuteElem).toEqual(34);
    });

    it("should have a secondElem", function(){
      expect(secondElem).toEqual(54);
    });
  });
});
