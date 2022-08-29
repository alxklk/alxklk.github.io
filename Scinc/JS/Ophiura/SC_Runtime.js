
var cvtbuf   = new ArrayBuffer(8);
var cvt8     = new Uint8Array(cvtbuf);
var cvtflt64 = new Float64Array(cvtbuf);
var cvtint32 = new Int32Array(cvtbuf);
var membuf   = new ArrayBuffer(1024*128);
var mem8     = new Uint8Array(membuf);
var memint32 = new Int32Array(membuf);
var memflt64 = new Float64Array(membuf);

function Memcpy(dst, src, count)
{
	for(i=0;i<count;i++)
	{
		mem8[dst++]=mem8[src++]
	}
}

function GetInt(addr)
{
	return memint32[addr>>2];
}

function PutInt(addr, value)
{
	memint32[addr>>2]=value;
}

function GetFloat(addr)
{
	cvtint32[0]=memint32[addr>>2];
	cvtint32[1]=memint32[(addr>>2)+1];
	return cvtflt64[0];
}

function PutFloat(addr, value)
{
	cvtflt64[0]=value;
	memint32[addr>>2]    =cvtint32[0];
	memint32[(addr>>2)+1]=cvtint32[1];
}

function GetChar(addr)
{
	return mem8[addr];
}

function PutChar(addr, value)
{
	mem8[addr]=value;
}

function GetString(addr)
{
	var s="";
	var i=0;
	while(true)
	{
		var c=GetChar(addr+i);
		if(c==0)
			break;
		if(i>10240)
			break;
		s+=String.fromCharCode(c);
		i++;
	}
	return s;
}


function SC_sqrt()
{
	var argOffset=16;
	var arg=GetFloat(reg_sp-argOffset);
	PutFloat(reg_sp-8, Math.sqrt(arg));
}

function SC_sin()
{
	var argOffset=16;
	var arg=GetFloat(reg_sp-argOffset);
	PutFloat(reg_sp-8, Math.sin(arg));
}

function SC_cos()
{
	var argOffset=16;
	var arg=GetFloat(reg_sp-argOffset);
	PutFloat(reg_sp-8, Math.cos(arg));
}

function SC_Time()
{
	PutFloat(reg_sp-8, performance.now()/1000);
}

function SC_printf()
{
	var argOffset=8;
	var format=GetString(GetInt(reg_sp-argOffset));
	while(true)
	{
		var percentpos=format.search("%")
		if(percentpos<0)
			break;
		if(format[percentpos+1]=="i")
		{
			argOffset+=4;
			format=format.replace("%i",GetInt(reg_sp-argOffset))
		}
		else if(format[percentpos+1]=="f")
		{
			argOffset+=8;
			format=format.replace("%f",GetFloat(reg_sp-argOffset))
		}
		else if(format[percentpos+1]=="s")
		{
			argOffset+=4;
			var s=GetString(GetInt(reg_sp-argOffset));
			format=format.replace("%s",s)
		}
		else
		{
			format=format.replace("%","")
		}
	}
	if(gui)
		out.innerText+=format
	console.log(format)
	printed++
}

function SC_malloc()
{
	var count=GetInt(reg_sp-8);
	addr=membuf.byteLength;
	membuf   = new ArrayBuffer(1024*128+(count/8+1)*8);
	mem8     = new Uint8Array(membuf);
	memint32 = new Int32Array(membuf);
	memflt64 = new Float64Array(membuf);
	PutInt(reg_sp-4,addr)
}

function SC_BitBlt(){}

var g_col_r;
var g_col_g;
var g_col_b;
var g_col_a;

function SC_rgba32()
{
	var col=GetInt(reg_sp-4);
	g_col_r=((col>>16)&0xff)/255.;
	g_col_g=((col>>8 )&0xff)/255.;
	g_col_b=((col    )&0xff)/255.;
	g_col_a=((col>>24)&0xff)/255.;
	ctx.globalAlpha=g_col_a
}

function SC_rgb()
{
	g_col_r=GetFloat(reg_sp-24);
	g_col_g=GetFloat(reg_sp-16);
	g_col_b=GetFloat(reg_sp-8);
	g_col_a=1;
	ctx.globalAlpha=g_col_a
}

function SC_rgba()
{
	g_col_r=GetFloat(reg_sp-24);
	g_col_g=GetFloat(reg_sp-16);
	g_col_b=GetFloat(reg_sp-8);
	g_col_a=GetFloat(reg_sp-32);
	ctx.globalAlpha=g_col_a
}

function SC_gray()
{
	var gr=GetFloat(reg_sp-8);
	g_col_r=gr;
	g_col_g=gr;
	g_col_b=gr;
	g_col_a=1;
	ctx.globalAlpha=g_col_a
}

function SC_hairline()
{
	var x0=GetFloat(reg_sp-8);
	var y0=GetFloat(reg_sp-16);
	var x1=GetFloat(reg_sp-24);
	var y1=GetFloat(reg_sp-32);
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.lineTo(x1,y1);
	ctx.strokeStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.globalAlpha=g_col_a
	ctx.stroke();
}

function SC_FillRT()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.globalAlpha=g_col_a
	ctx.fillRect(0, 0, 640, 480);
}

function SC_miterlim()
{
}

function SC_Rect()
{
	var x0 =GetInt(reg_sp-4);
	var y0 =GetInt(reg_sp-8);
	var x1 =GetInt(reg_sp-12);
	var y1 =GetInt(reg_sp-16);
	var col=GetInt(reg_sp-20);
	g_col_r=((col>>16)&0xff)/255.;
	g_col_g=((col>>8 )&0xff)/255.;
	g_col_b=((col    )&0xff)/255.;
	g_col_a=((col>>24)&0xff)/255.;
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.globalAlpha=g_col_a
	ctx.fillRect(x0, y0, x1, y1);
}

function SC_GetMouseState()
{
	var pmx=GetInt(reg_sp-4);
	var pmy=GetInt(reg_sp-8);
	var pmb=GetInt(reg_sp-12);
	memint32[pmx>>2]=SC_mx;
	memint32[pmy>>2]=SC_my;
	memint32[pmb>>2]=SC_mb;
}
function SC_KeyPressed()
{
	let keyCode=memint32[(reg_sp-8)>>2]
	memint32[(reg_sp-4)>>2]=keysPressed.has(keyCode);
}
function SC_SetPersistentFloat(){};
function SC_GetPersistentFloat(){};
function SC_pow()
{
	PutFloat(reg_sp-8, Math.pow(GetFloat(reg_sp-16),GetFloat(reg_sp-24)));
};

function SC_fillrect()
{
	var x0 =GetInt(reg_sp-4);
	var y0 =GetInt(reg_sp-8);
	var x1 =GetInt(reg_sp-12);
	var y1 =GetInt(reg_sp-16);
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.globalAlpha=g_col_a
	ctx.fillRect(x0, y0, x1, y1);
}

function SC_lineH()
{
	var x0 =GetInt(reg_sp-4);
	var y0 =GetInt(reg_sp-8);
	var l =GetInt(reg_sp-12);
	var col =GetInt(reg_sp-16);
	g_col_r=((col>>16)&0xff)/255.;
	g_col_g=((col>>8 )&0xff)/255.;
	g_col_b=((col    )&0xff)/255.;
	g_col_a=((col>>24)&0xff)/255.;
	ctx.globalAlpha=g_col_a
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fillRect(x0, y0, l, 1);
}

function SC_SetPresentWait(){}

function SC_clear(){ctx.beginPath()}

var SC_gcpx
var SC_gcpy

function SC_M()
{
	SC_gcpx=GetFloat(reg_sp-8)
	SC_gcpy=GetFloat(reg_sp-16)
	ctx.moveTo(SC_gcpx, SC_gcpy);
}

function SC_L()
{
	SC_gcpx=GetFloat(reg_sp-8)
	SC_gcpy=GetFloat(reg_sp-16)
	ctx.lineTo(SC_gcpx, SC_gcpy);
}

function SC_l()
{
	SC_gcpx+=GetFloat(reg_sp-8)
	SC_gcpy+=GetFloat(reg_sp-16)
	ctx.lineTo(SC_gcpx, SC_gcpy);
}

function SC_C()
{
	//void Graph::C(float,float,float,float,float,float);// #49
	var x0=GetFloat(reg_sp-8)
	var y0=GetFloat(reg_sp-16)
	var x1=GetFloat(reg_sp-24)
	var y1=GetFloat(reg_sp-32)
	var x=GetFloat(reg_sp-40)
	var y=GetFloat(reg_sp-48)
	ctx.bezierCurveTo(x0,y0,x1,y1,x,y);
	SC_gcpx=x
	SC_gcpy=y
}

function SC_a()
{
	//void Graph::a(float,float,float,int,int,float,float);// #54
	var rx   =GetFloat(reg_sp-8)
	var ry   =GetFloat(reg_sp-16)
	var a    =GetFloat(reg_sp-24)
	var sweep=GetFloat(reg_sp-28)
	var large=GetFloat(reg_sp-32)
	var dx   =GetFloat(reg_sp-40)
	var dy   =GetFloat(reg_sp-48)
	ctx.arc(SC_gcpx+dx/2,SC_gcpy+dy/2,Math.max(dx,dy)/2,Math.PI/2,Math.PI*1.5)
}

function SC_Circle()
{
	var x=GetFloat(reg_sp-8)
	var y=GetFloat(reg_sp-16)
	var r=GetFloat(reg_sp-24)
	var w=GetFloat(reg_sp-32)
	var a=GetFloat(reg_sp-40)
	var col=GetInt(reg_sp-44)
	g_col_r=((col>>16)&0xff)/255.;
	g_col_g=((col>>8 )&0xff)/255.;
	g_col_b=((col    )&0xff)/255.;
	g_col_a=((col>>24)&0xff)/255.;
	ctx.beginPath();
	ctx.arc(x, y, r+w+a, 0, 2 * Math.PI);
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.globalAlpha=g_col_a
	ctx.fill()
}

function SC_close(){ctx.closePath()}

function SC_fin(){}

function SC_alpha()
{
	ctx.globalAlpha=GetFloat(reg_sp-8)
}

function SC_graddef(){}
function SC_gradend(){}
function SC_gradmethod(){}
function SC_gradstop(){}
function SC_graduse(){}
function SC_gradtype(){}
function SC_g_t(){}
function SC_width(){}

function SC_fill1()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fill("nonzero");
}

function SC_fill2()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fill("evenodd");
}

function SC_stroke()
{
	ctx.strokeStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.stroke()
}

function SC_g_0()
{

}
function SC_g_t()
{

}
function SC_g_x()
{

}
function SC_g_y()
{

}

function SC_snprintf(){}
function SC_stext(){}
function SC_GetKeyEvent(){}

// Sound
function SC_snd_add(){}
function SC_snd_data(){}
function SC_snd_play(){}
