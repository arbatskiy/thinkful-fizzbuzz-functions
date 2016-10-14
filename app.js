$(document).ready(function() {
	$('#fizzbuzz-form').on('submit', function(e) {
		e.preventDefault();
		var container = $('#fizz-buzz-container');
		container.empty();
		var number = +$('#input-number').val();
		$('#input-number').val('');
		if (isNaN(number) || number % 1 !== 0) {
			$('#error').show();
		} else {
			$('#error').hide();
			fizzBuzz(number, container);
		}
	});
});

function fizzBuzz(num, container) {
	for (i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			container.append('<p><strong>FizzBuzz</strong></p>');
		} else if (i % 3 === 0) {
			container.append('<p><strong>Fizz</strong></p>');
		} else if (i % 5 === 0) {
			container.append('<p><strong>Buzz</strong></p>');
		} else {
			var html = "<p><strong>" + i + "</strong></p>";
			container.append(html);
		}
	}
}

