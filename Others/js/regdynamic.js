document.getElementById("button").onclick=function()
{
	var phonenumber=document.getElementById("phonenumber");
	var email=document.getElementById("email");
	var sexslt=document.getElementById("sexslt");
	
	var topset=parseInt((window.innerHeight-600)/2);
	var leftset=(window.innerWidth-600)/2;
	if(yanzheng(phonenumber,email)==true&&sexslt.value!=0&&sexslt.value!=0)
	{	
		window.open('../index.html','恭喜你！注册成功');
	}
	else{
		alert("请将信息填写完整！");
	}
}

document.getElementById("reset").onclick=function()
{
	var userspan=document.getElementById("userspan");
	var passwspan=document.getElementById("passwspan");
	var cpasswspan=document.getElementById("cpasswspan");
	var emailspan=document.getElementById("emailspan");
	var phonenumberspan=document.getElementById("phonenumberspan");
	
	userspan.innerHTML="";
	userspan.style.border="";
	passwspan.innerHTML="";
	passwspan.style.border="";
	cpasswspan.innerHTML="";
	cpasswspan.style.border="";
	emailspan.innerHTML="";
	emailspan.style.border="";
	phonenumberspan.innerHTML="";
	phonenumberspan.style.border="";
}
function disptime(dateTime)
{
	//var dateTime=document.getElementById("dateTime");
	var now=new Date();
	/*dateTime.value=now.toLocaleString();*/
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	var year=now.getFullYear();
	var month=parseInt(now.getMonth())+1;
	var date=now.getDate();
	var day=now.getDay()
	var str;
	if(hour>8&&hour<12)
	{
		str="上午好！";
	}
	else if(hour>12&&hour<18)
	{
		str="下午好！"
	}
	else{
		str="晚上好！"
	}
	var str1;
	switch(parseInt(day))
	{
		case 1:
			str1="今天星期一";
			break;
		case 2:
			str1="今天星期二";
			break;
		case 3:
			str1="今天星期三";
			break;
		case 4:
			str1="今天星期四";
			break;
		case 5:
			str1="今天星期五";
			break;
		case 6:
			str1="今天星期六";
			break;
		case 0:
			str1="今天星期日";
			break;	
	}
	
	dateTime.innerHTML=str+str1+"<br/>现在日期:"+year+"年"+month+"月"+date+"日"+"&nbsp;&nbsp;&nbsp;现在时间："+addzero(hour)+":"+addzero(minute)+":"+addzero(second);
	var MyTime=setTimeout("disptime(dateTime)",1000);
}
function addzero(x)
{
	if(parseInt(x)<10)
	{
		x="0"+x;
	}
	return x;
}