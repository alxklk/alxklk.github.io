
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
	addr|=0;
	cvtint32[0]=memint32[addr>>2];
	cvtint32[1]=memint32[(addr>>2)+1];
	return cvtflt64[0];
}

function GetFloat4(addr)
{
	addr|=0;
	cvtint32[0]=memint32[addr];
	cvtint32[1]=memint32[addr+1];
	return cvtflt64[0];
}

function PutFloat(addr, value)
{
	addr|=0;
	cvtflt64[0]=value;
	memint32[addr>>2]    =cvtint32[0];
	memint32[(addr>>2)+1]=cvtint32[1];
}

function PutFloat4(addr, value)
{
	addr|=0;
	cvtflt64[0]=value;
	memint32[addr]  =cvtint32[0];
	memint32[addr+1]=cvtint32[1];
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

function SC_memcpy()
{
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
	ctx.globalAlpha=1
	ctx.fillRect(0, 0, screen.width, screen.height);
}

function SC_miterlim()
{
}

g_path=new Path2D

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

function SC_clear()
{
	g_path=new Path2D()
	ctx.beginPath()
}

var SC_gcpx
var SC_gcpy

function SC_M()
{
	SC_gcpx=GetFloat(reg_sp-8)
	SC_gcpy=GetFloat(reg_sp-16)
	g_path.moveTo(SC_gcpx-0.00001, SC_gcpy);
	g_path.lineTo(SC_gcpx, SC_gcpy);
}

function SC_L()
{
	SC_gcpx=GetFloat(reg_sp-8)
	SC_gcpy=GetFloat(reg_sp-16)
	g_path.lineTo(SC_gcpx, SC_gcpy);
}

function SC_l()
{
	SC_gcpx+=GetFloat(reg_sp-8)
	SC_gcpy+=GetFloat(reg_sp-16)
	g_path.lineTo(SC_gcpx, SC_gcpy);
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
	g_path.bezierCurveTo(x0,y0,x1,y1,x,y);
	SC_gcpx=x
	SC_gcpy=y
}

function SC_c()
{
	//void Graph::C(float,float,float,float,float,float);// #49
	var x0=GetFloat(reg_sp-8)+SC_gcpx
	var y0=GetFloat(reg_sp-16)+SC_gcpy
	var x1=GetFloat(reg_sp-24)+SC_gcpx
	var y1=GetFloat(reg_sp-32)+SC_gcpy
	var x=GetFloat(reg_sp-40)+SC_gcpx
	var y=GetFloat(reg_sp-48)+SC_gcpy
	g_path.bezierCurveTo(x0,y0,x1,y1,x,y);
	SC_gcpx=x
	SC_gcpy=y
}

function SC_a()
{
	//void Graph::a(float,float,float,int,int,float,float);// #54
	var rx   =GetFloat(reg_sp-8)
	var ry   =GetFloat(reg_sp-16)
	var a    =GetFloat(reg_sp-24)
	var sweep=GetFloat(reg_sp-28)|0
	var large=GetFloat(reg_sp-32)|0
	var dx   =GetFloat(reg_sp-40)
	var dy   =GetFloat(reg_sp-48)
	var path = 
	'L '+SC_gcpx+' '+SC_gcpy+' '+
	'A'
	+' '+rx
	+' '+ry
	+' '+a
	+' '+sweep
	+' '+large
	+' '+(SC_gcpx+dx)
	+' '+(SC_gcpy+dy)
	g_path.addPath(new Path2D(path))
	SC_gcpx+=dx
	SC_gcpy+=dy
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
	path=new Path2D
	path.moveTo(x, y);
	path.lineTo(x+0.001, y);
	ctx.strokeStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.lineCap="round"
	ctx.globalAlpha=g_col_a/4.
	for(i=0;i<4;i++)
	{
		ctx.lineWidth=a*4*i/4
		ctx.stroke(path)
	}
}

function SC_close(){g_path.closePath()}

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

var g_width1=1
var g_width2=1

function SC_width()
{
	g_width1=GetFloat(reg_sp-8)
	g_width2=GetFloat(reg_sp-16)
}

function SC_fill1()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fill(g_path,"nonzero");
}

function SC_fill2()
{
	ctx.fillStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.fill(g_path,"evenodd");
}

function SC_stroke()
{
	ctx.strokeStyle='rgb('+g_col_r*255+','+g_col_g*255+','+g_col_b*255+')'
	ctx.lineCap="round"
	ctx.lineJoin="round"
	var width1=g_width1
	var width2=g_width2
	if(width1>width2)
	{
		var tmp=width1
		width1=width2
		width2=tmp
	}

	var d=(width2-width1)/0.95;
	if(d<1)
	{
		ctx.globalAlpha=g_col_a
		ctx.lineWidth=width1*2
		ctx.stroke(g_path)
	}
	else
	{
		if(d>10)d=10
		for(i=0;i<d;i++)
		{
			ctx.globalAlpha=g_col_a*1/d
			ctx.lineWidth=(width1+(width2-width1)*i/d)*2
			ctx.stroke(g_path)
		}
	}
}

function SC_t_0()
{

}
function SC_t_x()
{

}
function SC_t_y()
{

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
function SC_gtext(){}

function SC_snprintf(){}
function SC_stext(){}
function SC_GetKeyEvent(){}

// Sound

let audioContext = new AudioContext()
let scincAudioQueue=[]
var ready=false

async function CreateAudio()
{
	let newAudioNode
	try
	{
		console.log("adding...")
		await audioContext.audioWorklet.addModule("SC_Audio.js");
		console.log("OK")
		newAudioNode = new AudioWorkletNode(audioContext, "ScincAudio", 
		{
			numberOfInputs:0,
			numberOfOutputs:1,
			outputChannelCount:[2],
		})
	}
	catch(e)
	{
		try
		{
			console.log("adding... once more")
			await audioContext.audioWorklet.addModule("SC_Audio.js");
			console.log("OK")
			newAudioNode = new AudioWorkletNode(audioContext, "ScincAudio");
		}
		catch(e)
		{
			console.log('** Error: Unable to create worklet node: ${e}');
		}
	}
	newAudioNode.scbuf=scincAudioBuf
	ready=true
	return newAudioNode
}

let processorNode;

health=0

silenceBuf=[]
for(let i=0;i<256;i++)silenceBuf.push(0)

async function StartAudio()
{
	processorNode=await CreateAudio()
	processorNode.port.onmessage=function(e)
	{
		if(scincAudioQueue.length)
		{
			processorNode.port.postMessage(scincAudioQueue[0])
			scincAudioQueue.shift()
		}
		else
		{
			processorNode.port.postMessage(silenceBuf)
		}
}
	processorNode.connect(audioContext.destination)
	console.log("Resuming")
	await audioContext.resume()
	console.log("OK")
}

StartAudio()

function SC_snd_add(){}
function SC_snd_data(){}
function SC_snd_play(){}

function SC_snd_bufhealth()
{
	if(ready)
		PutInt(reg_sp-4,scincAudioQueue.length*128)
	else
	PutInt(reg_sp-4,20000)
}

var scincAudioBuf=[]

function SC_snd_out()
{
	var l=GetFloat(reg_sp-8)
	var r=GetFloat(reg_sp-16)
	scincAudioBuf.push(l)
	scincAudioBuf.push(r)
	if(scincAudioBuf.length>=256)
	{
		scincAudioQueue.push(scincAudioBuf)
		scincAudioBuf=[]
	}
}
