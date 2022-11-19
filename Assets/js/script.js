// .ready, jQuery will only run once we want JavaScript to execute. So on '.saveBtn' click, we call the function to grab time and value, in which we store it in the localStorage, using setItem. 

$(document).ready(function() {
console.log('click')
$('.saveBtn').on('click', function () {
  
  var time = $(this).parent().attr('id');
  var value = $(this).siblings('.description').val();

// 
localStorage.setItem(time, value)

// We are using jQuery $, to look for class: notification. Once it finds 'notification', it will addClass, 'show'. 'show' class, displays: block. We should now see the notification.

$('.notification').addClass('show');

// We create a new variable and have it equal to setTimeout parameter would be hide function, and interval 2.5 seconds (hide, 2500)

  var myTimeout = setTimeout(hide, 2500);
  
  // We call the hide function and make it remove the show class after 2.5 seconds.
  function hide() {
    $('.notification').removeClass('show');
  }
});

// show notification that it was saved to local storage

// get current hour

  function presentHour() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      console.log(this)

      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

presentHour();

setInterval(presentHour, 15000);

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

//end
