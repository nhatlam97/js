for (var i = 0; i < 10; i++) {
	console.log(i);
}
// cosole ra dãy số chẵn
for(var i=0;i<10;i++){
	if (i%2==0) {
		console.log(i);
	}
}
// cach viet thu 2
for(var i =0;i<10;i+=2){
	if (i%2==0) {
		console.log(i);
	}
}
// hàm while
var j =0;
while(j<20){
	if (j%2==1) {
		console.log(j);
	}
	j++;
}

// thay đổi nội dung li
var litags = document.getElementsByTagName('li');
for(i=0; i<litags.length; i++)
{
	console.log(litags[i]);
	litags[i].innerHTML = "nội dung mới,vi tri " +i;
	if (i%2==1) {
		litags[i].style.color = 'red';
	}
	else{
		litags[i].style.color = 'blue';
	}
}

var trtags =  document.getElementsByTagName('tr');
for(i=0;i<trtags.length;i++)
{
	console.log(trtags[i]);
	if (i%2==1) {
		trtags[i].style.background = 'yellow';
		trtags[i].innerHTML = "Hàng này đã bị đổi màu và nội dung";
	}
	else{
		trtags[i].style.background = 'green';
		trtags[i].style.color = 'red';
	}
}

