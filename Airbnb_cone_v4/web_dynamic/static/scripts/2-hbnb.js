const $ = window.$

let amenityIds = []

$(document).ready(function () {
  $('div.amenities input[type="checkbox"]').on('click', function () {
    $(this).each(function (idx, item) {
      if ($(this).is(':checked')) {
        amenityIds.push($(this).attr('data-id'));
      } else {
        // Checkbox unchecked
        if (amenityIds.includes($(this).attr('data-id'))) {
          // Delete the id in a way that actually affects the array length
          amenityIds.splice(amenityIds.indexOf($(this).attr('data-id')), 1);
	}
      }
    });
    
    // Update h4 tag
    $('.amenities h4').text(amenityIds.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      // Add class
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
