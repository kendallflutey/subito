var startTime = new Date();
    expiryTime = new Date("July 7, 2014 23:15:00");
    hourElem = document.getElementById('js-hour');
    minuteElem = document.getElementById('js-minute');
    secondElem = document.getElementById('js-second');

// Set up expiry time
expiryTime.setHours( expiryTime.getHours() + 2);
expiryTime.setMinutes( expiryTime.getMinutes());
expiryTime.setSeconds( expiryTime.getSeconds());

var diffInMs = expiryTime - startTime,
    diffInSecs = Math.round( diffInMs / 1000 ),
    amountOfHours = Math.floor( diffInSecs / 3600 ),
    amountOfSeconds = diffInSecs - (amountOfHours * 3600),
    amountOfMinutes = Math.floor( amountOfSeconds / 60 ),
    amountOfSeconds = amountOfSeconds - ( amountOfMinutes * 60 );

// Set up the countdown timer for display
// Set up the hours
if( amountOfHours > 0 ) {
  hourElem.innerHTML = (amountOfHours < 10)
  ? '0' + amountOfHours + ' : '
  : amountOfHours + ' : ';
} else {
  hourElem.innerHTML = '00 : ';
}

// Set up the minutes
if( amountOfMinutes > 0 ) {
  minuteElem.innerHTML = ( amountOfMinutes < 10 )
  ? '0' + amountOfMinutes + ' : '
  : amountOfMinutes + ' : ';
} else {
  minuteElem.innerHTML = '00 : ';
}

// // Set up the seconds
if( amountOfSeconds > 0 ) {
  secondElem.innerHTML = (amountOfSeconds < 10)
  ? '0' + amountOfSeconds
  : amountOfSeconds;
} else {
  secondElem.innerHTML = '00';
}

function countDown() {
  var dateNow = new Date();

  // If we're not at the end of the timer, continue the countdown
  if( expiryTime > dateNow ) {

  // References to current countdown values
  var hours = parseInt(hourElem.innerHTML);
      minutes = parseInt(minuteElem.innerHTML),
      seconds = parseInt(secondElem.innerHTML);

  // Update the hour if necessary
  if( minutes == 0 && seconds == 0) {
    --hours;

    hourElem.innerHTML = ( hours < 10 ) ? '0' + (hours) + ' : ' : (hours) + ' : ';
    minuteElem.innerHTML = '59 : ';
    secondElem.innerHTML = '59';
    return;
  }

  // Update the minute if necessary
  if( seconds == 0 ) {

    if( minutes > 0 ) {
      --minutes;
      minuteElem.innerHTML = ( minutes > 10 ) ? minutes + ' : ' : '0' + minutes + ' : ';

      } else {
        minuteElem.innerHTML = '59' + ' : ';
      }

      return secondElem.innerHTML = '59';

    } else {
      --seconds;
      secondElem.innerHTML = ( seconds < 10 ) ? '0' + seconds : seconds;
    }

  } else {
    // Reset the seconds
    secondElem.innerHTML = '00';

    // Clear interval and fire countDownOnComplete()
    clearInterval(countDownInterval);
    countDownOnComplete();
  }
}

function countDownOnComplete() {
  console.log('Countdown timer has completed!');
}

window.onload = function() {
  // Begin the countdown!
  countDownInterval = setInterval( countDown, 1000 );
}
