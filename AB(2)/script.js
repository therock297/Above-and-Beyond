$(document).ready(function() {
    $('.color-picker').on('input', function() {
      var lightId = $(this).closest('.light').attr('id');
      var color = $(this).val();
      $('#' + lightId + ' .bulb').css('background-color', color);
    });
  });
  