  // From: http://www.codechewing.com/demo/javascript-countdown-timer/
  // Modified by Subito 2014-07-08

var Countdown = (function(){
  var startTime = new Date();
      expiryTime = "";//new Date("July 8, 2014 23:15:00");
      hourElem = "";
      minuteElem = "";
      secondElem = "";

  function setEndDate(dealEndTime){
    expiryTime = new Date(dealEndTime);
    expiryTime.setHours( expiryTime.getHours());
    expiryTime.setMinutes( expiryTime.getMinutes());
    expiryTime.setSeconds( expiryTime.getSeconds());
  };

  var diffInMs = expiryTime - startTime,
      diffInSecs = Math.round( diffInMs / 1000 ),
      amountOfHours = Math.floor( diffInSecs / 3600 ),
      amountOfSeconds = diffInSecs - (amountOfHours * 3600),
      amountOfMinutes = Math.floor( amountOfSeconds / 60 ),
      amountOfSeconds = amountOfSeconds - ( amountOfMinutes * 60 );

  // Set up the countdown timer for display
  // Set up the hours
  if( amountOfHours > 0 ) {
    hourElem = (amountOfHours < 10)
    ? '0' + amountOfHours + ' : '
    : amountOfHours + ' : ';
  } else {
    hourElem = '00 : ';
  }

  // Set up the minutes
  if( amountOfMinutes > 0 ) {
    minuteElem = ( amountOfMinutes < 10 )
    ? '0' + amountOfMinutes + ' : '
    : amountOfMinutes + ' : ';
  } else {
    minuteElem = '00 : ';
  }

  // // Set up the seconds
  if( amountOfSeconds > 0 ) {
    secondElem = (amountOfSeconds < 10)
    ? '0' + amountOfSeconds
    : amountOfSeconds;
  } else {
    secondElem = '00';
  }

  function countDown() {
    var dateNow = new Date();
   
    // If we're not at the end of the timer, continue the countdown
    if( expiryTime > dateNow ) {
   
    // References to current countdown values
    var hours = parseInt(hourElem);
        minutes = parseInt(minuteElem),
        seconds = parseInt(secondElem);
   
    // Update the hour if necessary
    if( minutes == 0 && seconds == 0) {
      --hours;
   
      hourElem = ( hours < 10 ) ? '0' + (hours) + ' : ' : (hours) + ' : ';
      minuteElem = '59 : ';
      secondElem = '59';
      return;
    }
   
    // Update the minute if necessary
    if( seconds == 0 ) {
   
      if( minutes > 0 ) {
        --minutes;
        minuteElem = ( minutes > 10 ) ? minutes + ' : ' : '0' + minutes + ' : ';
   
        } else {
          minuteElem = '59' + ' : ';
        }
   
        return secondElem = '59';
   
      } else {
        --seconds;
        secondElem = ( seconds < 10 ) ? '0' + seconds : seconds;
      }
   
    } else {
      // Reset the seconds
      secondElem = '00';
   
      // Clear interval and fire countDownOnComplete()
      clearInterval(countDownInterval);
      countDownOnComplete();
    }
  }

  function countDownOnComplete() {
    console.log('Countdown timer has completed!');
  }

  function timeFormat() {
    countDown();

    return hourElem + ':' + minuteElem + ':' + secondElem;
  }

  return {
    setEndDate: setEndDate,
    timeFormat: timeFormat
  }
})();