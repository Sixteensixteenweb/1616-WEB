const url =
	'https://script.google.com/macros/s/AKfycbzmh70TAyaXzKtX_B-tBLWXeeSZ4v4krT9wdK3uyuQth9uc-vRqGcp9y9B-TMXCwLpq/exec';

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
