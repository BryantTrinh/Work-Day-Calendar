$(document).ready(function() {
console.log('click')
$('.saveBtn').on('click', function () {
  
  var time = $(this).parent().attr('id');
  var value = $(this).siblings('.description').val();

localStorage.setItem(time, value)
$('.notification').addClass('show');


  var myTimeout = setTimeout(hide, 2500);

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

      console.log(currentHour)

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
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});