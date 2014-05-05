var q1=0
var q2=0
var q3=0
function proverka(b){

	if (b==1){
		document.getElementById('text1').value=document.getElementById('text1').value.replace(/,/g,".")
		v= document.getElementById('text1').value;
		if ((isNaN(v)) || (v<=0)){
			document.getElementById('text1').value = 'Ошибка!';
			document.getElementById('b1').disabled = true
			q1=1
		}else{
			q1=0
		}
	}
	if (b==2){
		document.getElementById('text2').value=document.getElementById('text2').value.replace(/,/g,".")
		v= document.getElementById('text2').value;
		if ((isNaN(v)) || (v<=0)){
			document.getElementById('text2').value = 'Ошибка!';
			document.getElementById('b1').disabled = true
			q2=1
		}else{
			q2=0
		}
	}
	if (b==3){
		document.getElementById('text3').value=document.getElementById('text3').value.replace(/,/g,".")
		v= document.getElementById('text3').value;
		if ((isNaN(v)) || (v<=0)){
			document.getElementById('text3').value = 'Ошибка!';
			document.getElementById('b1').disabled = true
			q3=1
		}else{
			q3=0
		}
	}
	if((q1==0)&&(q2==0)&&(q3==0)){
		document.getElementById('b1').disabled = false
	}
}

function summ() {
			var w = window.open("","", "top=75px, left=360px, width=770px, height=600px");
			var vP= document.getElementById('text1').value;
			var n= document.getElementById('text2').value;
			var rate= document.getElementById('text3').value;
			var x = Math.pow(parseFloat(1)+parseFloat(rate),-n);
			
			var sum= (vP * rate )/( 1 - x);
			sum = Math.round(sum*100)/100;
			var o = sum*n;
			o = Math.round(o*100)/100;
			var p = o-vP;
			p = Math.round(p*100)/100;
			w.document.head.innerHTML='<style> td {text-align: center; width: 250px; border-width: 1px; border-style: solid; border-color: black;} th {background-color:#b6b2ff; text-align: center; width: 250px; border-width: 1px; border-style: solid; border-color: black;} </style>'
			w.document.body.innerHTML='<table><tr><th>Ежемесячный платеж</th><th>Размер вылат</th><th>Переплата</th></tr><tr><td>'+sum+'</td><td>'+o+'</td><td>'+p+'</td></tr></table>';
			w.document.body.innerHTML+='<br>';
			w.document.body.innerHTML+='<table id="t"><tr><th style="width:50">№</th>'+'<th>Размер вылаты</th>'+'<th>Остаток</th></tr></table>';
			var z = o;
			for (i=1;i<=n;i++){
				z = z-sum;
				z = Math.round(z*100)/100;
				w.document.getElementById('t').innerHTML+='<tr><td>'+i+'</td><td>'+sum+'</td><td>'+z+'</td></tr>';
			}
		}

