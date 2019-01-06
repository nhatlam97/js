var array = [1,2,3,6,'text'];
console.log(array);
console.log(array.length);
var anh =  document.createElement('img');
anh.src = "https://cdn.24h.com.vn/upload/4-2018/images/2018-11-20/120x90/1542702702-786-154270268410381-thumbnail.jpg";
if (array[1] == 2) {
	document.getElementById('photo').append(anh);
}
function check(){
	var array = [1,2,4,5,6];
	console.log(array);
	console.log(array.length);
	console.log(array[2]);
	if (array[2]==3) {
		alert('phần tử thứ 3 là 3');
	}
	else{
		alert('aaaaa');
	}
}
