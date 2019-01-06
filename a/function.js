function  tong(a,b){
	var tong = a + b;
	alert("kết quả:" +tong);
}

function sum(a,b){
	var sum = a+b;
	return sum;
}

// goi ham khong return

tong(3,4);
// goi ham co return
var kq = sum(10,20);
console.log(kq);

// tạo hành động cho element 
var btn = document.getElementById('btn');
var cha = document.getElementById('comments');
btn.onclick = function(){
	var input =  document.getElementById('content');
	console.log(content);
	// gán nội dung của input cho thẻ p
	document.getElementById('edit').innerHTML = input.value;
	//lưu nhiều comment
	// tạo ra thẻ p chưa nhiều comment
	var pTag = document.createElement('p');
	//GÁN gtri cho thẻ p vừa tạo
	pTag.innerHTML = input.value;
	// append vào thẻ cha
	cha.append(pTag);
		// xóa input
	input.value = '';
	document.getElementById('edit').innerHTML = '';

}

var image = document.getElementById('image');
image.onmouseenter = function(){
	image.width = '900';
}
image.onmouseleave = function(){
	image.width = '100';
}
//vote

var currentPoint = 0;
var pointTag = document.getElementById('point');
function up() {
	// currentPoint++;
	currentPoint = currentPoint +2;
	pointTag.innerHTML = currentPoint;
}

function down() {
	// currentPoint--;
	currentPoint = currentPoint -2;
	pointTag.innerHTML = currentPoint;
	}
