
/*个人信息*/
function closedata(div)
{
	div.style.display="none";
}

/*这些都是以前写的 写的太乱了,改也太麻烦了 我也就不改了*/
/*-------------------------------------*/
var pic1=document.getElementById("pic1");
pic1.onmouseover=function()
{
	pic1.style.background="rgb(255,102,0)";
	pic1.style.cursor="pointer";
}
pic1.onmouseout=function()
{
	pic1.style.background="rgb(76,90,101)";
}

var pic2=document.getElementById("pic2");
pic2.onmouseover=function()
{
	pic2.style.background="rgb(255,102,0)";
	pic2.style.cursor="pointer";
}
pic2.onmouseout=function()
{
	pic2.style.background="rgb(76,90,101)";
}
var pic3=document.getElementById("pic3");
pic3.onmouseover=function()
{
	pic3.style.background="rgb(255,102,0)";
	pic3.style.cursor="pointer";
}
pic3.onmouseout=function()
{
	pic3.style.background="rgb(76,90,101)";
}
/*---------------图片切换---------------------*/
function cutp1()
{
	var photo1=document.getElementById("photo1").style;
	var photo2=document.getElementById("photo2").style;
	var photo3=document.getElementById("photo3").style;
	photo1.zIndex="3";
	photo2.zIndex="0";
	photo3.zIndex="0";
	
}
function cutp2()
{
	var photo1=document.getElementById("photo1").style;
	var photo2=document.getElementById("photo2").style;
	var photo3=document.getElementById("photo3").style;
	photo1.zIndex="0";
	photo2.zIndex="3";
	photo3.zIndex="0";
	
}
function cutp3()
{
	var photo1=document.getElementById("photo1").style;
	var photo2=document.getElementById("photo2").style;
	var photo3=document.getElementById("photo3").style;
	
	photo1.zIndex="0";
	photo2.zIndex="0";
	photo3.zIndex="3";
}
function Navonmouseover1()
{
	var Nav_right_li1=document.getElementById("Nav_right_li1").style;
	Nav_right_li1.cursor="pointer";
}
function Navonclick1()
{
	var Nav_right_li1=document.getElementById("Nav_right_li1").style;
	Nav_right_li1.color="rgb(80,180,0)";
	Nav_right_li1.borderBottomWidth="2px";
	Nav_right_li1.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li2=document.getElementById("Nav_right_li2").style;
	Nav_right_li2.color="#666";
	Nav_right_li2.borderBottomColor="#ddd";
	var Nav_right_li3=document.getElementById("Nav_right_li3").style;
	Nav_right_li3.color="#666";
	Nav_right_li3.borderBottomColor="#ddd";
	var Nav_right_li4=document.getElementById("Nav_right_li4").style;
	Nav_right_li4.color="#666";
	Nav_right_li4.borderBottomColor="#ddd";
	
	var Nav_right_bottom1=document.getElementById("Nav_right_bottom1").style;
	var Nav_right_bottom2=document.getElementById("Nav_right_bottom2").style;
	var Nav_right_bottom3=document.getElementById("Nav_right_bottom3").style;
	var Nav_right_bottom4=document.getElementById("Nav_right_bottom4").style;
	Nav_right_bottom1.zIndex="4";
	Nav_right_bottom2.zIndex="3";
	Nav_right_bottom3.zIndex="3";
	Nav_right_bottom4.zIndex="3";
	
}
function Navonmouseover2()
{
	var Nav_right_li2=document.getElementById("Nav_right_li2").style;
	Nav_right_li2.cursor="pointer";
}
function Navonclick2()
{
	var Nav_right_li2=document.getElementById("Nav_right_li2").style;
	Nav_right_li2.color="rgb(80,180,0)";
	Nav_right_li2.borderBottomWidth="2px";
	Nav_right_li2.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li1=document.getElementById("Nav_right_li1").style;
	Nav_right_li1.color="#666";
	Nav_right_li1.borderBottomColor="#ddd";
	var Nav_right_li3=document.getElementById("Nav_right_li3").style;
	Nav_right_li3.color="#666";
	Nav_right_li3.borderBottomColor="#ddd";
	var Nav_right_li4=document.getElementById("Nav_right_li4").style;
	Nav_right_li4.color="#666";
	Nav_right_li4.borderBottomColor="#ddd";
	
	var Nav_right_bottom1=document.getElementById("Nav_right_bottom1").style;
	var Nav_right_bottom2=document.getElementById("Nav_right_bottom2").style;
	var Nav_right_bottom3=document.getElementById("Nav_right_bottom3").style;
	var Nav_right_bottom4=document.getElementById("Nav_right_bottom4").style;
	Nav_right_bottom1.zIndex="3";
	Nav_right_bottom2.zIndex="4";
	Nav_right_bottom3.zIndex="3";
	Nav_right_bottom4.zIndex="3";
	
}
function Navonmouseover3()
{
	var Nav_right_li3=document.getElementById("Nav_right_li3").style;
	Nav_right_li3.cursor="pointer";
}
function Navonclick3()
{
	var Nav_right_li3=document.getElementById("Nav_right_li3").style;
	Nav_right_li3.color="rgb(80,180,0)";
	Nav_right_li3.borderBottomWidth="2px";
	Nav_right_li3.borderBottomColor="rgb(80,180,0)";
	
	var Nav_right_li2=document.getElementById("Nav_right_li2").style;
	Nav_right_li2.color="#666";
	Nav_right_li2.borderBottomColor="#ddd";
	var Nav_right_li1=document.getElementById("Nav_right_li1").style;
	Nav_right_li1.color="#666";
	Nav_right_li1.borderBottomColor="#ddd";
	var Nav_right_li4=document.getElementById("Nav_right_li4").style;
	Nav_right_li4.color="#666";
	Nav_right_li4.borderBottomColor="#ddd";
	
	var Nav_right_bottom1=document.getElementById("Nav_right_bottom1").style;
	var Nav_right_bottom2=document.getElementById("Nav_right_bottom2").style;
	var Nav_right_bottom3=document.getElementById("Nav_right_bottom3").style;
	var Nav_right_bottom4=document.getElementById("Nav_right_bottom4").style;
	Nav_right_bottom1.zIndex="3";
	Nav_right_bottom2.zIndex="3";
	Nav_right_bottom3.zIndex="4";
	Nav_right_bottom4.zIndex="3";
}
function Navonmouseover4()
{
	var Nav_right_li4=document.getElementById("Nav_right_li4").style;
	Nav_right_li4.cursor="pointer";
}
function Navonclick4()
{
	var Nav_right_li4=document.getElementById("Nav_right_li4").style;
	Nav_right_li4.color="rgb(80,180,0)";
	Nav_right_li4.borderBottomWidth="2px";
	Nav_right_li4.borderBottomColor="rgb(80,180,0)";
	
	var Nav_right_li2=document.getElementById("Nav_right_li2").style;
	Nav_right_li2.color="#666";
	Nav_right_li2.borderBottomColor="#ddd";
	var Nav_right_li3=document.getElementById("Nav_right_li3").style;
	Nav_right_li3.color="#666";
	Nav_right_li3.borderBottomColor="#ddd";
	var Nav_right_li1=document.getElementById("Nav_right_li1").style;
	Nav_right_li1.color="#666";
	Nav_right_li1.borderBottomColor="#ddd";
	
	var Nav_right_bottom1=document.getElementById("Nav_right_bottom1").style;
	var Nav_right_bottom2=document.getElementById("Nav_right_bottom2").style;
	var Nav_right_bottom3=document.getElementById("Nav_right_bottom3").style;
	var Nav_right_bottom4=document.getElementById("Nav_right_bottom4").style;
	Nav_right_bottom1.zIndex="3";
	Nav_right_bottom2.zIndex="3";
	Nav_right_bottom3.zIndex="3";
	Nav_right_bottom4.zIndex="4";
}

/*-----------Navleft--------------------*/
function leftonclick1(){
	var a=document.getElementById("Nav_left_1").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";


/*=============================================================*/	
	var Nav_right1=document.getElementById("Nav_right1").style;
	var Nav_right2=document.getElementById("Nav_right2").style;
	var Nav_right3=document.getElementById("Nav_right3").style;
	Nav_right1.zIndex="4";
	Nav_right2.zIndex="3";
	Nav_right3.zIndex="3";
}

function leftonclick2(){
	var a=document.getElementById("Nav_left_2").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_1").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
	
	/*=======================================*/
	var Nav_right1=document.getElementById("Nav_right1").style;
	var Nav_right_bottom21=document.getElementById("Nav_right_bottom21").style;
	Nav_right_bottom21.zIndex="4";
	var Nav_right2=document.getElementById("Nav_right2").style;
	var Nav_right3=document.getElementById("Nav_right3").style;
	Nav_right1.zIndex="3";
	Nav_right2.zIndex="4";
	Nav_right3.zIndex="3";
	
}

function leftonclick3(){
	var a=document.getElementById("Nav_left_3").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_1").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
	/*=======================================*/
	var Nav_right1=document.getElementById("Nav_right1").style;
	var Nav_right_bottom31=document.getElementById("Nav_right_bottom31").style;
	Nav_right_bottom31.zIndex="4";
	var Nav_right2=document.getElementById("Nav_right2").style;
	var Nav_right3=document.getElementById("Nav_right3").style;
	Nav_right1.zIndex="3";
	Nav_right2.zIndex="3";
	Nav_right3.zIndex="4";
	
}

function leftonclick4(){
	var a=document.getElementById("Nav_left_4").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_1").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
}

function leftonclick5(){
	var a=document.getElementById("Nav_left_5").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_1").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
}

function leftonclick6(){
	var a=document.getElementById("Nav_left_6").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_1").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
}

function leftonclick7(){
	var a=document.getElementById("Nav_left_7").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_1").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_8").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
}

function leftonclick8(){
	var a=document.getElementById("Nav_left_8").style;
	a.color="rgb(80,180,0)";
	a.backgroundColor="#fff";
	

	var b=document.getElementById("Nav_left_2").style;
	b.color="#fff";
	b.background="rgb(76,90,101)";
	var c=document.getElementById("Nav_left_3").style;
	c.color="#fff";
	c.background="rgb(76,90,101)";
	var d=document.getElementById("Nav_left_4").style;
	d.color="#fff";
	d.background="rgb(76,90,101)";
	var e=document.getElementById("Nav_left_5").style;
	e.color="#fff";
	e.background="rgb(76,90,101)";
	var f=document.getElementById("Nav_left_6").style;
	f.color="#fff";
	f.background="rgb(76,90,101)";
	var g=document.getElementById("Nav_left_7").style;
	g.color="#fff";
	g.background="rgb(76,90,101)";
	var h=document.getElementById("Nav_left_1").style;
	h.color="#fff";
	h.background="rgb(76,90,101)";
	
}
function leftonmouseover()
{
	var a=document.getElementById("Nav_left_1").style;
	a.cursor="pointer";
	var b=document.getElementById("Nav_left_2").style;
	b.cursor="pointer";
	var c=document.getElementById("Nav_left_3").style;
	c.cursor="pointer";
	var d=document.getElementById("Nav_left_4").style;
	d.cursor="pointer";
	var e=document.getElementById("Nav_left_5").style;
	e.cursor="pointer";
	var f=document.getElementById("Nav_left_6").style;
	f.cursor="pointer";
	var g=document.getElementById("Nav_left_7").style;
	g.cursor="pointer";
	var h=document.getElementById("Nav_left_8").style;
	h.cursor="pointer";
	
}


/*-------------------酒店 内部连接---------------------------------------*/
function Navonmouseover21()
{
	var Nav_right_li21=document.getElementById("Nav_right_li21").style;
	Nav_right_li21.cursor="pointer";
}
function Navonclick21()
{
	var Nav_right_li21=document.getElementById("Nav_right_li21").style;
	Nav_right_li21.color="rgb(80,180,0)";
	Nav_right_li21.borderBottomWidth="2px";
	Nav_right_li21.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li22=document.getElementById("Nav_right_li22").style;
	Nav_right_li22.color="#666";
	Nav_right_li22.borderBottomColor="#ddd";
	var Nav_right_li23=document.getElementById("Nav_right_li23").style;
	Nav_right_li23.color="#666";
	Nav_right_li23.borderBottomColor="#ddd";
	var Nav_right_li24=document.getElementById("Nav_right_li24").style;
	Nav_right_li24.color="#666";
	Nav_right_li24.borderBottomColor="#ddd";
	
	
	var Nav_right_bottom21=document.getElementById("Nav_right_bottom21").style;
	var Nav_right_bottom22=document.getElementById("Nav_right_bottom22").style;
	var Nav_right_bottom23=document.getElementById("Nav_right_bottom23").style;
	var Nav_right_bottom24=document.getElementById("Nav_right_bottom24").style;
	Nav_right_bottom21.zIndex="4";
	Nav_right_bottom22.zIndex="3";
	Nav_right_bottom23.zIndex="3";
	Nav_right_bottom24.zIndex="3";
	
}
function Navonmouseover22()
{
	var Nav_right_li22=document.getElementById("Nav_right_li22").style;
	Nav_right_li22.cursor="pointer";
}
function Navonclick22()
{
	var Nav_right_li22=document.getElementById("Nav_right_li22").style;
	Nav_right_li22.color="rgb(80,180,0)";
	Nav_right_li22.borderBottomWidth="2px";
	Nav_right_li22.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li21=document.getElementById("Nav_right_li21").style;
	Nav_right_li21.color="#666";
	Nav_right_li21.borderBottomColor="#ddd";
	var Nav_right_li23=document.getElementById("Nav_right_li23").style;
	Nav_right_li23.color="#666";
	Nav_right_li23.borderBottomColor="#ddd";
	var Nav_right_li24=document.getElementById("Nav_right_li24").style;
	Nav_right_li24.color="#666";
	Nav_right_li24.borderBottomColor="#ddd";
	
	
	var Nav_right_bottom21=document.getElementById("Nav_right_bottom21").style;
	var Nav_right_bottom22=document.getElementById("Nav_right_bottom22").style;
	var Nav_right_bottom23=document.getElementById("Nav_right_bottom23").style;
	var Nav_right_bottom24=document.getElementById("Nav_right_bottom24").style;
	Nav_right_bottom21.zIndex="3";
	Nav_right_bottom22.zIndex="4";
	Nav_right_bottom23.zIndex="3";
	Nav_right_bottom24.zIndex="3";
	
}
function Navonmouseover23()
{
	var Nav_right_li23=document.getElementById("Nav_right_li23").style;
	Nav_right_li23.cursor="pointer";
}
function Navonclick23()
{
	var Nav_right_li23=document.getElementById("Nav_right_li23").style;
	Nav_right_li23.color="rgb(80,180,0)";
	Nav_right_li23.borderBottomWidth="2px";
	Nav_right_li23.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li22=document.getElementById("Nav_right_li22").style;
	Nav_right_li22.color="#666";
	Nav_right_li22.borderBottomColor="#ddd";
	var Nav_right_li21=document.getElementById("Nav_right_li21").style;
	Nav_right_li21.color="#666";
	Nav_right_li21.borderBottomColor="#ddd";
	var Nav_right_li24=document.getElementById("Nav_right_li24").style;
	Nav_right_li24.color="#666";
	Nav_right_li24.borderBottomColor="#ddd";
	
	
	var Nav_right_bottom21=document.getElementById("Nav_right_bottom21").style;
	var Nav_right_bottom22=document.getElementById("Nav_right_bottom22").style;
	var Nav_right_bottom23=document.getElementById("Nav_right_bottom23").style;
	var Nav_right_bottom24=document.getElementById("Nav_right_bottom24").style;
	Nav_right_bottom21.zIndex="3";
	Nav_right_bottom22.zIndex="3";
	Nav_right_bottom23.zIndex="4";
	Nav_right_bottom24.zIndex="3";
	
}
function Navonmouseover24()
{
	var Nav_right_li24=document.getElementById("Nav_right_li24").style;
	Nav_right_li24.cursor="pointer";
}
function Navonclick24()
{
	var Nav_right_li24=document.getElementById("Nav_right_li24").style;
	Nav_right_li24.color="rgb(80,180,0)";
	Nav_right_li24.borderBottomWidth="2px";
	Nav_right_li24.borderBottomColor="rgb(80,180,0)";
	var Nav_right_li22=document.getElementById("Nav_right_li22").style;
	Nav_right_li22.color="#666";
	Nav_right_li22.borderBottomColor="#ddd";
	var Nav_right_li23=document.getElementById("Nav_right_li23").style;
	Nav_right_li23.color="#666";
	Nav_right_li23.borderBottomColor="#ddd";
	var Nav_right_li21=document.getElementById("Nav_right_li21").style;
	Nav_right_li21.color="#666";
	Nav_right_li21.borderBottomColor="#ddd";
	
	
	var Nav_right_bottom21=document.getElementById("Nav_right_bottom21").style;
	var Nav_right_bottom22=document.getElementById("Nav_right_bottom22").style;
	var Nav_right_bottom23=document.getElementById("Nav_right_bottom23").style;
	var Nav_right_bottom24=document.getElementById("Nav_right_bottom24").style;
	Nav_right_bottom21.zIndex="3";
	Nav_right_bottom22.zIndex="3";
	Nav_right_bottom23.zIndex="3";
	Nav_right_bottom24.zIndex="4";
	
}




