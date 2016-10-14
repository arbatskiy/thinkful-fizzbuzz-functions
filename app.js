$(document).ready(function() {
	for (var i = 1; i <= 15; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$('body').append('<p><strong>FizzBuzz</strong></p>');
		} else if (i % 3 === 0) {
			$('body').append('<p><strong>Fizz</strong></p>');
		} else if (i % 5 === 0) {
			$('body').append('<p><strong>Buzz</strong></p>');
		} else {
			var html = "<p><strong>" + i + "</strong></p>";
			$('body').append(html);
		}
	}
});

