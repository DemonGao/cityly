// JavaScript Document
	function writetrue(id)
	{
		id.style.border="";
		id.style.color="";
		id.innerHTML="<img src='../Images/true.gif' height='20px' align='center' />";	
	}
	function testusername(name,userspan)
	{
		var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{2,12}$/;//正则表达式
		if(reg.test(name.value))
		{
			name.style.borderColor="";
			writetrue(userspan);
		}
		else
		{
			name.style.borderColor="red";
			userspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />请输入2-12位以内的中英文字符和数字！";
		}
	}
	function promptusername(password,passwspan)
	{
		password.value="";
		passwspan.style.border="2px solid rgb(164,198,253)";
		passwspan.style.color="#666";
		passwspan.innerHTML="请输入2-12位以内的中英文字符和数字！";
	}
	function testpassword(password,passwspan,username)
	{
		var str=password.value;
		if(username.value=="")
		{
			return;
		}
		if(str.length>3)
		{
			password.style.borderColor="";
			writetrue(passwspan);
		}
		else
		{
			password.style.borderColor="red";
			passwspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />密码不能小于4个字符！";
			return ;
		}
	}
	function promptpassword(password,passwspan,username)
	{
		if(username.value=="")
		{
			return;
		}
		password.value="";
		passwspan.style.border="2px solid rgb(164,198,253)";
		passwspan.style.color="#666";
		passwspan.innerHTML="请输入4-12位任意字符！";
	}	
	
	
	
	function testcpassword(cpassword,password,cpasswspan)
	{
		var cstr=cpassword.value;
		if(password.value=="")
		{
			return;
		}
		else if(cstr.length<4)
		{
			cpassword.style.borderColor="red";
			cpasswspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />密码不能小于4个字符！";
			return ;
		}
		else if(cpassword.value==password.value&&cpassword.value!="")
		{
			cpassword.style.borderColor="";
			writetrue(cpasswspan);
		}
		else
		{
			cpassword.style.borderColor="red";
			cpasswspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />两次密码不一致！";
			return;
		}
	}
	function promptcpassword(cpassword,cpasswspan,password)
	{
		if(password.value=="")
		{
			return;
		}
		cpassword.value="";
		cpasswspan.style.border="2px solid rgb(164,198,253)";
		cpasswspan.style.color="#666";
		cpasswspan.innerHTML="请输入与上面相同的密码！";
	}
	
	
	
	function testemail(email,emailspan,cpassword)
	{
		if(cpassword.value=="")
		{
			return ;
		}
		var x=email.value;
		var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;//正则表达式
		if(x.length==0)
		{
			email.style.borderColor="red";
			emailspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />电子邮件不能为空！"
		}
		else if(x.length<6||x.length>18)
		{
			email.style.borderColor="red";
			emailspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />请输入6~18个字符！";
		}
		else if(!reg.test(x))
		{
			email.style.borderColor="red";
			emailspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />必须包含@符号或.符号！";
		}
		else
		{
			email.style.borderColor="";
			writetrue(emailspan);		
		}
	}
	function promptemail(email,emailspan,cpassword)
	{
		if(cpassword.value=="")
		{
			return ;
		}
		email.value="";
		emailspan.style.border="2px solid rgb(164,198,253)";
		emailspan.style.color="#666";
		emailspan.innerHTML="6~18个字符,可使用字母、数字、下划线，需以字母开头!";
	}
	
	
	
	function testphonenumber(phonenumber,phonenumberspan,email)
	{
		if(email.value=="")
		{
			return ;
		}
/*		if(phonenumber.value=="")
		{
			phonenumber.style.border="";
			phonenumber.style.color="";
		}*/
		var x=phonenumber.value;
		if(!isNaN(x)&&x.length==11)
		{
			phonenumber.style.borderColor="";
			writetrue(phonenumberspan);
		}
		else
		{
			phonenumber.style.borderColor="red";
			phonenumberspan.innerHTML="<img src='../Images/flase.gif' height='20px' align='center' />手机号格式错误！";;
		}
	}
	function promptphonenumber(phonenumber,phonenumberspan,email)
	{
		if(email.value=="")
		{
			return ;
		}
		phonenumberspan.value="";
		phonenumberspan.style.border="2px solid rgb(164,198,253)";
		phonenumberspan.style.color="#666";
		phonenumberspan.innerHTML="请输入手机号!";
	}
	
	function yanzheng(phonenumber,email)
	{
		if(email.value=="")
		{
			return ;
		}
		var x=phonenumber.value;
		if(!isNaN(x)&&x.length==11)
		{
			return true;
		}
		else
		{
			return false;
		}
	}