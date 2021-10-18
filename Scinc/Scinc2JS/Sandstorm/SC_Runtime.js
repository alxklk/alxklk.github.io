
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
}

function SC_rgb()
{
	g_col_r=GetFloat(reg_sp-24);
	g_col_g=GetFloat(reg_sp-16);
	g_col_b=GetFloat(reg_sp-8);
	g_col_a=1;
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
	ctx.stroke();
}

function SC_FillRT()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
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
	ctx.fillRect(x0, y0, x1, y1);
}

function SC_GetMouseState(){}
function SC_KeyPressed(){}
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
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fillRect(x0, y0, l, 1);
}

function SC_SetPresentWait(){}
