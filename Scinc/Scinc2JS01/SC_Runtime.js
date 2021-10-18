
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
	//console.log("GetInt [", addr, "]->",memint32[addr>>2])
	//if((addr%4)!=0)console.log("Unaligned addr @", reg_ip , "=", addr)
	return memint32[addr>>2];
	//for(i=0;i<4;i++)cvt8[i]=mem8[addr+i];
	//return cvtint32[0];
}

function PutInt(addr, value)
{
	//console.log("PutInt ", value, "->[", addr, "]")
	//if((addr%4)!=0)console.log("Unaligned addr @", reg_ip , "=", addr)
	memint32[addr>>2]=value;
	//cvtint32[0]=value;
	//for(i=0;i<4;i++)mem8[addr+i]=cvt8[i];
}

function GetFloat(addr)
{
	//if((addr%4)!=0)console.log("Unaligned addr @", reg_ip , "=", addr)
	//for(i=0;i<8;i++)cvt8[i]=mem8[addr+i];
	cvtint32[0]=memint32[addr>>2];
	cvtint32[1]=memint32[(addr>>2)+1];
	//console.log("GetFloat [", addr, "]->",cvtflt64[0])
	return cvtflt64[0];
}

function PutFloat(addr, value)
{
	//if((addr%4)!=0)console.log("Unaligned addr @", reg_ip , "=", addr)
	//console.log("PutFloat ", value, "->[", addr, "]")
	cvtflt64[0]=value;
	//for(i=0;i<8;i++)mem8[addr+i]=cvt8[i];
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
		if(i>1024)
			break;
		//console.log("Char: "+c+" = '"+String.fromCharCode(c)+"'")
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

function SC_Time()
{
	PutFloat(reg_sp-8, performance.now()/1000);
}

function SC_cos()
{
	var argOffset=16;
	var arg=GetFloat(reg_sp-argOffset);
	PutFloat(reg_sp-8, Math.cos(arg));
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
	g_col_r=GetFloat(reg_sp-8);
	g_col_g=GetFloat(reg_sp-16);
	g_col_b=GetFloat(reg_sp-24);
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
