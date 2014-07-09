//From: https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer
//Modified by Subito 2014

function Countdown() {
  this.onUpdate;
  this.onComplete;

  var targetStartTime;
  var targetEndTime;
  var interval;
  var hourElem;
  var minuteElem;
  var secondElem;

  this.stop = function() {
    clearInterval(interval);
  };

  this.start = function(startTime) {
    targetStartTime = startTime;
  };

  this.end = function(finishTime) {
    targetEndTime = finishTime;
    // interval = setInterval(this.update, 1000);
    interval = setInterval((function(self) {
      return function() { self.update(); }
    })(this), 1000);

  };

  this.update = function() {
    if(targetStartTime.getTime() < new Date().getTime())
    {
    var secondsLeft = (targetEndTime.getTime() - new Date().getTime()) / 1000;
    }

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

     if( hours > 0 ) {
    hourElem = (hours < 10)
    ? '0' + hours + ' : '
    : hours + ' : ';
  } else {
    hourElem = '00 : ';
  }

  // Set up the minutes
  if( minutes > 0 ) {
    minuteElem = ( minutes < 10 )
    ? '0' + minutes + ' : '
    : minutes + ' : ';
  } else {
    minuteElem= '00 : ';
  }

  // // Set up the seconds
  if( seconds > 0 ) {
    secondElem = (seconds < 10)
    ? '0' + seconds
    : seconds;
  } else {
    secondElem = '00';
  }
    if (this.onUpdate)
      //this.onUpdate(days + " days, " + hourElem + minuteElem  + secondElem);
      this.onUpdate(hourElem + minuteElem  + secondElem);
  }
}
