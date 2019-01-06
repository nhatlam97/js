var money = 200000;
var sl = 4;
var btn = document.getElementById('btn');
var mess = document.getElementById('message');
var sum = parseInt(money*sl);
btn.onclick=function(){
	console.log(sl);
	console.log(sum);
	mess.innerHTML = 'Bạn đã đặt hàng thành công.Số tiền phai thanh toán là : '+sum ;
	mess.style = 'color:red';
}