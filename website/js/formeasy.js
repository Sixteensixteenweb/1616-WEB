const url =
	'https://script.google.com/macros/s/AKfycbwe4Rv10VY26RBdGjs0Q2nlymuVEKblbcxtCga8_k6Zi3hdp8ebAROBu65Toe5oG28/exec';

document
	.getElementById('order-printed')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    let go = document.getElementById("go");

    go.disabled = true;

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
       .then(() => go.disabled = false )
      .catch((err) => console.log('err', err));
   
	});
