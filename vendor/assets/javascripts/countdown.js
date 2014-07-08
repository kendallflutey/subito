//From: https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer

function Countdown() {
  this.onUpdate;
  this.onComplete;

  var targetDate;
  var interval;

  this.stop = function() {
    clearInterval(interval);
  };

  this.start = function(finishTime) {
    targetDate = finishTime;
    // interval = setInterval(this.update, 1000);
    interval = setInterval((function(self) {
      return function() { self.update(); }
    })(this), 1000);
  };

  this.update = function() {
    var secondsLeft = (targetDate.getTime() - new Date().getTime()) / 1000;
    if (secondsLeft < 0) {
      this.stop();
      if (this.onComplete)
        this.onComplete();
    }

    var days = parseInt(secondsLeft / 86400);
    secondsLeft = secondsLeft % 86400;

    var hours = parseInt(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    var minutes = parseInt(secondsLeft / 60);
    var seconds = parseInt(secondsLeft % 60);

    if (this.onUpdate)
      this.onUpdate(days + ":" + hours + ":" + minutes + ":" + seconds);
  }
}
