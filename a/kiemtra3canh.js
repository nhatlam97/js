function check() {
	var n1 = parseInt(document.getElementById('canh-1').value);
	var n2 = parseInt(document.getElementById('canh-2').value);
	var n3 = parseInt(document.getElementById('canh-3').value);
	var message = document.getElementById('message');
	console.log(n1);
	if (!n1 ||  !n2 || !n3) {
		message.innerHTML = 'Nhap gia tri vao di';
		message.style.color = 'red';
	} else if (n1 < 0 || n2 < 0 || n3 < 0) {
		message.innerHTML = 'Nhap gia tri duong';
		message.style.color = 'red';
	} else if (n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1) {
		alert('La  3 canh');
		message.innerHTML = '';
	} else {
		alert('khong la ba canh cua tam giac');
	}
}
//  || 1 trong cac giá trị còn && là đồng thời
