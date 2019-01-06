//console.log('Hien thi man hinh console');
console.log(document);
console.log(document.getElementById('content'));
console.log(document.getElementsByClassName('content'));

//thay đổi thuộc tính style của thẻ bằng id
document.getElementById('content').style = 'color:red';
//thay đổi nội dung text của thẻ bằng id
document.getElementById('content').innerHTML = "New text"	;

// khai báo biến trong js
var  contentById = document.getElementById('content');
contentById.style.color = 'orange';
contentById.innerHTML = "New text by var"

// kieu biến
var number = 123;
var text = 'content';
var bool = true;
var array = [1,2,4,'text'];
// đếm sô phần tử của mảng
console.log(array.length);\
// tạo 1 thẻ mới bằng createElement
	var imageTag = document.createElement('img');
	imageTag.src = "https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F207962%2Fpexels-photo-207962.jpeg%3Fcs%3Dsrgb%26dl%3Dartistic-blossom-bright-207962.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fartistic-blossom-bright-clouds-207962%2F&docid=NBFHcdExZHjHKM&tbnid=7MOiScst-3B_1M%3A&vet=10ahUKEwjDi9G7gt7eAhXPEnAKHXomBVwQMwg7KAAwAA..i&w=1920&h=1200&bih=695&biw=1366&q=photo&ved=0ahUKEwjDi9G7gt7eAhXPEnAKHXomBVwQMwg7KAAwAA&iact=mrc&uact=8";
	if (array[0]===1) {
		document.getElementById('image').append(imageTag);
	}
//console.log('kieu cua bien number: ',typeof number);
//console.log('kieu cua bien text: ',typeof text);
console.log(array, array.lengthe);
//toan tu
console.log(2 + 2);
console.log('2' + '2')
console.log(2 + 'abc')
console.log('2a'*'2abc')
console.log(3*'abc2')

function check() {
	var n1 = parseInt(document.getElementById('canh-1').value);
	var n2 = parseInt(document.getElementById('canh-2').value);
	var n3 = parseInt(document.getElementById('canh-3').value);
	var message = document.getElementById('message');
	if (!n1 ||  !n2 || !n3) {
		message.innerHTML = 'Nhap gia tri vao di';
		message.style.color = 'red';
	} else if (n1 < 0 || n2 < 0 || n3 < 0) {
		message.innerHTML = 'Nhap gia tri duong';
		message.style.color = 'red';
	} else if (n1 + n2 > n3 || n1 + n3 > n2 || n2 + n3 > n1) {
		alert('La  3 canh');
		message.innerHTML = '';
	} else {
		alert('Khong laa ba canh cua tam giac');
	}
}