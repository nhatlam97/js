function giai(){
	var a =document.getElementById('a').value;
	var b =document.getElementById('b').value;
	var c =document.getElementById('c').value;
	var delta = b*b - 4*a*c;
	console.log(a,b,c);
	console.log(delta);
	if (!a && !b && !c) {
		alert('Chua nhap hoac phuong trinh co vo so nghiem');
	}
	else if (!a && !b && !c){
		alert('vo nghiem');
	}
	else if (a) {
		if (delta ==0) {
			var x = -b/(2*a);
			alert('x1= x2 = ' +x);
		}
		else if (delta<0) {
			alert('vo nghiem');
		}
		else{
			var x1 = (-b + Math.sqrt(delta))/(2*a);
			var x2 = (-b - Math.sqrt(delta))/(2*a);
			alert('x1 = ' +x1 +', x2 = ' +x2);
		}
	}
}