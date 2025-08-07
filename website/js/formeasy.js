const url =
	'https://script.google.com/macros/s/AKfycbzuHXugcOy0LdMMHhWOWFPSBvqKexPkbig2IxwHXtBLD5nlky4YjVm0CPRJSRRGtt5B/exec';

document
	.getElementById('order-printed')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const formData = new FormData(this);
		const data = Object.fromEntries(formData);

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain;charset=utf-8',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('Successful', data);
				this.reset();
			})
			.catch((err) => console.log('err', err));
	});
