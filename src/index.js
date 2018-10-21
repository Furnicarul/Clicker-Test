var count = 0;
var timeoutStarted = false;
var timeoutHasPassed = false;
// Cache the anchor tag into a variable to be easy to reuse
var refresh = document.getElementById('refresh');
var clicker = document.getElementById('clicker');
// we want to attach a listener, an event listener on our cached variable
refresh.addEventListener('click', function(e) {
  location.reload();
});

clicker.addEventListener('click', function(e) {
  if (!timeoutHasPassed) {
    count = count + 1;
  }
  document.getElementById('demo').value = count;
  if (!timeoutStarted) {
    // start the timeout
    setTimeout(function() {
      alert("Time's up!");
      timeoutHasPassed = true;
    }, 10 * 1000);
    // change the timeoutStarted so it doesn't start again
    timeoutStarted = true;
  }
});

/**
 * we want to create a timer that starts when the clicker is clicked
 * and it will pop an alert after 10 seconds
 */