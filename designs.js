// Select color input
let color;

// Select size input
let height;
let width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {

	event.preventDefault();
	$('tr').remove();

	// Get the values of height and width
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();

	// Call makeGrid()
	makeGrid(height, width);

});

function makeGrid(n, m) {

	for (let i = 0; i < n; i++) {
			$('#pixelCanvas').append('<tr></tr>');

			for (let j = 0; j < m; j++) {
				$('tr').last().append('<td></td>');
			}
		}

	$('td').click(function() {
		// Get the value of the color
		color = $('#colorPicker').val();

		// Remove background-color from cell if it exists, and then add the selected color.
		$(this).attr('style') ? $(this).removeAttr('style') : $(this).css('background-color', color);
	});
}
