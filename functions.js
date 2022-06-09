function testFunction() {
  alert('Function call works!');
}

function pushNotificaiton(seconds) {
  alert('pushNotification() called!');
  var title = "Notification Title"; //title of the notification
  var message = "Test"; //notification message
  var seconds = 5; //seconds from now on
  window.location.href = "sendlocalpushmsg://push.send?s="+ seconds +"=msg!"+ message +"&!#"+ title +"";
}

function startCountdown(label,expiration){

  // Set the date we're counting down to
  // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
  var countDownDate = new Date(expiration).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById(label).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById(label).innerHTML = "EXPIRED";
      }

  }, 1000);

}