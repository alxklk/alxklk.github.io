/* Native binds:
0: void Interrupt();// #0
1: int _Inp_GetSP();// #1
2: float Time();// #2
3: void* malloc(int);// #3
4: void free(void*);// #4
5: int printf(char*,...);// #5
6: int snprintf(char*,int,char*,...);// #6
7: int puts(char*);// #7
8: float sin(float);// #8
9: float cos(float);// #9
10: float sqrt(float);// #10
11: float exp(float);// #11
12: float atan2(float,float);// #12
13: float pow(float,float);// #13
14: void* memcpy(void*,void*,int);// #14
15: void* memmove(void*,void*,int);// #15
16: FILE* fopen(char*,char*);// #16
17: int fclose(FILE*);// #17
18: int fwrite(void*,int,int,FILE*);// #18
19: int fread(void*,int,int,FILE*);// #19
20: int fseek(FILE*,int,int);// #20
21: int ftell(FILE*);// #21
22: void Wait(float);// #22
23: void CGUI::Print();// #23
24: void CGUI::SPrint();// #24
25: void CGUI::Print1();// #25
26: void Print1();// #26
27: void CGUI::CGUI();// #27
28: void CGUI::~CGUI();// #28
29: void SetPresentWait(int);// #29
30: void SetPersistentFloat(char*,float);// #30
31: void SetPersistentInt(char*,int);// #31
32: float GetPersistentFloat(char*,float);// #32
33: int GetPersistentInt(char*,int);// #33
34: void GetMouseState(int&,int&,int&);// #34
35: int GetKeyEvent(int&,int&);// #35
36: int CountKeyEvents();// #36
37: int KeyPressed(int);// #37
38: int glyph(int);// #38
39: int gtext(char*);// #39
40: int stext(char*,int,int,int);// #40
41: void Graph::M(float,float);// #41
42: void Graph::m(float,float);// #42
43: void Graph::L(float,float);// #43
44: void Graph::l(float,float);// #44
45: void Graph::pl(float,float);// #45
46: void Graph::pm(float,float);// #46
47: void Graph::close();// #47
48: void Graph::clear();// #48
49: void Graph::C(float,float,float,float,float,float);// #49
50: void Graph::c(float,float,float,float,float,float);// #50
51: void Graph::Q(float,float,float,float);// #51
52: void Graph::q(float,float,float,float);// #52
53: void Graph::A(float,float,float,int,int,float,float);// #53
54: void Graph::a(float,float,float,int,int,float,float);// #54
55: void Graph::fill1();// #55
56: void Graph::fill2();// #56
57: int Graph::getpos(float,float&,float&);// #57
58: void Graph::getshapepos(float,int,float&,float&);// #58
59: float Graph::getlen();// #59
60: float Graph::getshapelen(int);// #60
61: int Graph::getnshapes();// #61
62: void Graph::calclen();// #62
63: void Graph::cut(float,int);// #63
64: void Graph::stroke();// #64
65: void Graph::miterlim(float);// #65
66: void Graph::fin();// #66
67: void Graph::rgba(float,float,float,float);// #67
68: void Graph::rgba32(int);// #68
69: void Graph::rgb(float,float,float);// #69
70: void Graph::Circle(float,float,float,float,float,int);// #70
71: void Graph::Rect(int,int,int,int,int);// #71
72: void Graph::hairline(float,float,float,float);// #72
73: void Graph::lineH(int,int,int);// #73
74: void Graph::lineH(int,int,int,int);// #74
75: void Graph::lineV(int,int,int);// #75
76: void Graph::lineV(int,int,int,int);// #76
77: void Graph::fillrect(int,int,int,int);// #77
78: void Graph::fillrect(int,int,int,int,int);// #78
79: void Graph::gray(float);// #79
80: void Graph::alpha(float);// #80
81: void Graph::width(float,float);// #81
82: void Graph::graddef(int);// #82
83: void Graph::gradend();// #83
84: void Graph::gradstop(float,float,float,float,float);// #84
85: void Graph::graduse(int);// #85
86: void Graph::gradtype(int);// #86
87: void Graph::gradmethod(int);// #87
88: void Graph::g_t(float,float,float,float,float,float);// #88
89: void Graph::g_0(float,float);// #89
90: void Graph::g_x(float,float);// #90
91: void Graph::g_y(float,float);// #91
92: void Graph::t_t(float,float,float,float,float,float);// #92
93: void Graph::t_0(float,float);// #93
94: void Graph::t_x(float,float);// #94
95: void Graph::t_y(float,float);// #95
96: void Graph::next();// #96
97: int Graph::GetActiveRT();// #97
98: void Graph::SetActiveRT(int);// #98
99: int Graph::CreateRT(int,int);// #99
100: void Graph::DeleteRT(int);// #100
101: void Graph::BitBlt(int,int,int);// #101
102: void Graph::BitBlt(void*,int,int,int,int);// #102
103: void Graph::FillRT();// #103
104: int Graph::LoadTTFont(char*);// #104
105: void Graph::VSetFont(int);// #105
106: void Graph::VChar(int);// #106
107: void Graph::VText(char*);// #107
108: void Graph::WriteImage(char*,char*,char*);// #108
109: int Graph::MpegCreate(char*);// #109
110: void Graph::MpegWriteFrame(int,int);// #110
111: void Graph::MpegDone(int);// #111
112: void PutPixel(int,int,int);// #112
113: int GetPixel(int,int);// #113

*/

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255
]
var code=[]
code[0]=function(){
/*+0:FIN*/interrupt=true;quit=true;
}
code[1]=function(){
/*+1:FIN*/interrupt=true;quit=true;
}
code[2]=function(){
/*+2:FIN*/interrupt=true;quit=true;
}
code[3]=function(){
/*+3:FIN*/interrupt=true;quit=true;
}
code[4]=function(){
/*+4:FIN*/interrupt=true;quit=true;
}
code[5]=function(){
/*+5:FIN*/interrupt=true;quit=true;
}
code[6]=function(){
/*+6:FIN*/interrupt=true;quit=true;
}
code[7]=function(){
/*+7:FIN*/interrupt=true;quit=true;
}
code[8]=function(){
/*+8:FIN*/interrupt=true;quit=true;
}
code[9]=function(){
/*+9:FIN*/interrupt=true;quit=true;
}
code[10]=function(){
/*+10:ADDSP*/reg_sp+=+24;
/*+11:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-40)*GetFloat(reg_sp-56));
/*+12:FMUL*/PutFloat(reg_sp-16, GetFloat(reg_sp-48)*GetFloat(reg_sp-64));
/*+13:FADD*/PutFloat(reg_sp-8, GetFloat(reg_sp-24)+GetFloat(reg_sp-16));
/*+14:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+15:ADDSP*/reg_sp+=-24;
/*+16:RET*/reg_ip=regs.pop();
}
code[17]=function(){
/*+17:ADDSP*/reg_sp+=+160;
/*+18:ILDC*/memint32[(reg_sp-160)>>2]=+0;reg_ip=19;
}
code[19]=function(){
/*+19:ILDC*/memint32[(reg_sp-156)>>2]=+32
/*+20:LS*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-160)>>2] <memint32[(reg_sp-156)>>2]
/*+21:JMPZ*/if(memint32[(reg_sp-152)>>2]==0){reg_ip=49;}else{reg_ip=22;}
}
code[22]=function(){
/*+22:LEA*/PutInt(reg_sp-156,+0);
/*+23:ILDC*/memint32[(reg_sp-152)>>2]=+8
/*+24:MADD*/PutInt(reg_sp-156,memint32[(reg_sp-156)>>2]+memint32[(reg_sp-160)>>2]*memint32[(reg_sp-152)>>2]);
/*+25:FLDC*/PutFloat(reg_sp-148,+0.021000);
/*+26:FMUL*/PutFloat(reg_sp-140, GetFloat(reg_sp-168)*GetFloat(reg_sp-148));
/*+27:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-140)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-140)>>2)+1];
/*+28:NCALL*/SC_sin();
/*+29:MOV*//*8*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-132)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+30:FLDC*/PutFloat(reg_sp-124,+0.100000);
/*+31:FMUL*/PutFloat(reg_sp-116, GetFloat(reg_sp-132)*GetFloat(reg_sp-124));
/*+32:FLDC*/PutFloat(reg_sp-108,+1.800000);
/*+33:FADD*/PutFloat(reg_sp-100, GetFloat(reg_sp-108)+GetFloat(reg_sp-116));
/*+34:I2F*/PutFloat(reg_sp-92,memint32[(reg_sp-160)>>2]);
/*+35:FLDC*/PutFloat(reg_sp-84,+0.710000);
/*+36:FMUL*/PutFloat(reg_sp-76, GetFloat(reg_sp-92)*GetFloat(reg_sp-84));
/*+37:FLDC*/PutFloat(reg_sp-68,+0.020000);
/*+38:FMUL*/PutFloat(reg_sp-60, GetFloat(reg_sp-168)*GetFloat(reg_sp-68));
/*+39:FADD*/PutFloat(reg_sp-52, GetFloat(reg_sp-76)+GetFloat(reg_sp-60));
/*+40:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-52)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-52)>>2)+1];
/*+41:NCALL*/SC_sin();
/*+42:MOV*//*8*/memint32[(reg_sp-44)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-44)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+43:FLDC*/PutFloat(reg_sp-36,+0.410000);
/*+44:FMUL*/PutFloat(reg_sp-28, GetFloat(reg_sp-36)*GetFloat(reg_sp-44));
/*+45:FADD*/PutFloat(GetInt(reg_sp-156), GetFloat(reg_sp-100)+GetFloat(reg_sp-28));
/*+46:MOV*//*4*/memint32[(reg_sp-156)>>2]=memint32[(reg_sp-160)>>2];
/*+47:INC*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-160)>>2]+1
/*+48:JMP*/reg_ip=19;
}
code[49]=function(){
/*+49:ADDSP*/reg_sp+=-160;
/*+50:RET*/reg_ip=regs.pop();
}
code[51]=function(){
/*+51:ADDSP*/reg_sp+=+168;
/*+52:FLDC*/PutFloat(reg_sp-168,+8.000000);
/*+53:FLDC*/PutFloat(reg_sp-160,+0.030000);
/*+54:FLDC*/PutFloat(reg_sp-152,-0.050000);
/*+55:ILDC*/memint32[(reg_sp-144)>>2]=+0;reg_ip=56;
}
code[56]=function(){
/*+56:LS*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-144)>>2] <memint32[(reg_sp-192)>>2]
/*+57:JMPZ*/if(memint32[(reg_sp-84)>>2]==0){reg_ip=113;}else{reg_ip=58;}
}
code[58]=function(){
/*+58:LEA*/PutInt(reg_sp-84,+0);
/*+59:ILDC*/memint32[(reg_sp-80)>>2]=+8
/*+60:MADD*/PutInt(reg_sp-84,memint32[(reg_sp-84)>>2]+memint32[(reg_sp-144)>>2]*memint32[(reg_sp-80)>>2]);
/*+61:MOV*/Memcpy(reg_sp-140,GetInt(reg_sp-84),+8);
/*+62:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-140)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-140)>>2)+1];
/*+63:NCALL*/SC_cos();
/*+64:MOV*//*8*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-84)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+65:MOV*//*8*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-132)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+66:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-140)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-140)>>2)+1];
/*+67:NCALL*/SC_sin();
/*+68:MOV*//*8*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-84)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+69:MOV*//*8*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-124)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+70:FLDC*/PutFloat(reg_sp-84,+320.000000);
/*+71:FSUB*/PutFloat(reg_sp-76, GetFloat(GetInt(reg_sp-172))-GetFloat(reg_sp-84));
/*+72:ILDC*/memint32[(reg_sp-68)>>2]=+240
/*+73:I2F*/PutFloat(reg_sp-64,memint32[(reg_sp-68)>>2]);
/*+74:FSUB*/PutFloat(reg_sp-56, GetFloat(GetInt(reg_sp-176))-GetFloat(reg_sp-64));
/*+75:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-124)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-124)>>2)+1];
/*+76:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-132)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-132)>>2)+1];
/*+77:MOV*//*8*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-56)>>2];memint32[((reg_sp-24)>>2)+1]=memint32[((reg_sp-56)>>2)+1];
/*+78:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-76)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-76)>>2)+1];
/*+79:CALL*/regs.push(80);reg_ip=10;
}
code[80]=function(){
/*+80:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+81:MOV*//*8*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-48)>>2];memint32[((reg_sp-116)>>2)+1]=memint32[((reg_sp-48)>>2)+1];
/*+82:FMUL*/PutFloat(reg_sp-84, GetFloat(reg_sp-188)*GetFloat(reg_sp-152));
/*+83:FMUL*/PutFloat(reg_sp-76, GetFloat(reg_sp-116)*GetFloat(reg_sp-160));
/*+84:FADD*/PutFloat(reg_sp-108, GetFloat(reg_sp-84)+GetFloat(reg_sp-76));
/*+85:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-108)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-108)>>2)+1];
/*+86:NCALL*/SC_sin();
/*+87:MOV*//*8*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-84)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+88:FMUL*/PutFloat(reg_sp-100, GetFloat(reg_sp-84)*GetFloat(reg_sp-168));
/*+89:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-108)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-108)>>2)+1];
/*+90:NCALL*/SC_cos();
/*+91:MOV*//*8*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-84)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+92:FMUL*/PutFloat(reg_sp-92, GetFloat(reg_sp-84)*GetFloat(reg_sp-168));
/*+93:FMUL*/PutFloat(reg_sp-84, GetFloat(reg_sp-92)*GetFloat(reg_sp-132));
/*+94:FSUB*/PutFloat(GetInt(reg_sp-172), GetFloat(GetInt(reg_sp-172))-GetFloat(reg_sp-84));
/*+95:MOV*/Memcpy(reg_sp-76,GetInt(reg_sp-172),+8);
/*+96:FMUL*/PutFloat(reg_sp-84, GetFloat(reg_sp-92)*GetFloat(reg_sp-124));
/*+97:FSUB*/PutFloat(GetInt(reg_sp-176), GetFloat(GetInt(reg_sp-176))-GetFloat(reg_sp-84));
/*+98:MOV*/Memcpy(reg_sp-76,GetInt(reg_sp-176),+8);
/*+99:FSUB*/PutFloat(GetInt(reg_sp-180), GetFloat(GetInt(reg_sp-180))-GetFloat(reg_sp-100));
/*+100:MOV*/Memcpy(reg_sp-84,GetInt(reg_sp-180),+8);
/*+101:FLDC*/PutFloat(reg_sp-84,+0.720000);
/*+102:FMUL*/PutFloat(reg_sp-168, GetFloat(reg_sp-168)*GetFloat(reg_sp-84));
/*+103:MOV*//*8*/memint32[(reg_sp-76)>>2]=memint32[(reg_sp-168)>>2];memint32[((reg_sp-76)>>2)+1]=memint32[((reg_sp-168)>>2)+1];
/*+104:FLDC*/PutFloat(reg_sp-84,+1.270000);
/*+105:FMUL*/PutFloat(reg_sp-160, GetFloat(reg_sp-160)*GetFloat(reg_sp-84));
/*+106:MOV*//*8*/memint32[(reg_sp-76)>>2]=memint32[(reg_sp-160)>>2];memint32[((reg_sp-76)>>2)+1]=memint32[((reg_sp-160)>>2)+1];
/*+107:FLDC*/PutFloat(reg_sp-84,-1.210000);
/*+108:FMUL*/PutFloat(reg_sp-152, GetFloat(reg_sp-152)*GetFloat(reg_sp-84));
/*+109:MOV*//*8*/memint32[(reg_sp-76)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-76)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+110:MOV*//*4*/memint32[(reg_sp-84)>>2]=memint32[(reg_sp-144)>>2];
/*+111:INC*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-144)>>2]+1
/*+112:JMP*/reg_ip=56;
}
code[113]=function(){
/*+113:ADDSP*/reg_sp+=-168;
/*+114:RET*/reg_ip=regs.pop();
}
code[115]=function(){
/*+115:ADDSP*/reg_sp+=+200;
/*+116:FLDC*/PutFloat(reg_sp-8,+1.000000);
/*+117:NCALL*/SC_miterlim();;reg_ip=118;
}
code[118]=function(){
/*+118:NCALL*/SC_Time();
/*+119:MOV*//*8*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-136)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+120:MOV*//*8*/memint32[(reg_sp-200)>>2]=memint32[(reg_sp-136)>>2];memint32[((reg_sp-200)>>2)+1]=memint32[((reg_sp-136)>>2)+1];
/*+121:ILDC*/memint32[(reg_sp-4)>>2]=-10452737
/*+122:NCALL*/SC_rgba32();
/*+123:NCALL*/SC_FillRT();
/*+124:ILDC*/memint32[(reg_sp-136)>>2]=+25
/*+125:I2F*/PutFloat(reg_sp-132,memint32[(reg_sp-136)>>2]);
/*+126:FMUL*/PutFloat(reg_sp-192, GetFloat(reg_sp-200)*GetFloat(reg_sp-132));
/*+127:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-192)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_sp-192)>>2)+1];
/*+128:CALL*/regs.push(129);reg_ip=17;
}
code[129]=function(){
/*+129:ILDC*/memint32[(reg_sp-184)>>2]=+0;reg_ip=130;
}
code[130]=function(){
/*+130:ILDC*/memint32[(reg_sp-136)>>2]=+480
/*+131:LS*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-184)>>2] <memint32[(reg_sp-136)>>2]
/*+132:JMPZ*/if(memint32[(reg_sp-132)>>2]==0){reg_ip=197;}else{reg_ip=133;}
}
code[133]=function(){
/*+133:ILDC*/memint32[(reg_sp-180)>>2]=+0;reg_ip=134;
}
code[134]=function(){
/*+134:ILDC*/memint32[(reg_sp-136)>>2]=+640
/*+135:LS*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-180)>>2] <memint32[(reg_sp-136)>>2]
/*+136:JMPZ*/if(memint32[(reg_sp-132)>>2]==0){reg_ip=193;}else{reg_ip=137;}
}
code[137]=function(){
/*+137:I2F*/PutFloat(reg_sp-176,memint32[(reg_sp-180)>>2]);
/*+138:I2F*/PutFloat(reg_sp-168,memint32[(reg_sp-184)>>2]);
/*+139:FLDC*/PutFloat(reg_sp-160,+0.000000);
/*+140:FLDC*/PutFloat(reg_sp-136,+3.000000);
/*+141:FSUB*/PutFloat(reg_sp-128, GetFloat(reg_sp-192)-GetFloat(reg_sp-136));
/*+142:ILDC*/memint32[(reg_sp-24)>>2]=+12
/*+143:MOV*//*8*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-128)>>2];memint32[((reg_sp-20)>>2)+1]=memint32[((reg_sp-128)>>2)+1];
/*+144:LEA*/PutInt(reg_sp-120,reg_sp-160);
/*+145:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-120)>>2];
/*+146:LEA*/PutInt(reg_sp-116,reg_sp-168);
/*+147:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-116)>>2];
/*+148:LEA*/PutInt(reg_sp-112,reg_sp-176);
/*+149:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-112)>>2];
/*+150:CALL*/regs.push(151);reg_ip=51;
}
code[151]=function(){
/*+151:FNEG*/PutFloat(reg_sp-136,-GetFloat(reg_sp-160));
/*+152:FLDC*/PutFloat(reg_sp-128,+16.000000);
/*+153:FADD*/PutFloat(reg_sp-120, GetFloat(reg_sp-136)+GetFloat(reg_sp-128));
/*+154:FLDC*/PutFloat(reg_sp-112,+0.023000);
/*+155:FMUL*/PutFloat(reg_sp-152, GetFloat(reg_sp-120)*GetFloat(reg_sp-112));
/*+156:ILDC*/memint32[(reg_sp-136)>>2]=+191
/*+157:I2F*/PutFloat(reg_sp-132,memint32[(reg_sp-136)>>2]);
/*+158:FMUL*/PutFloat(reg_sp-124, GetFloat(reg_sp-152)*GetFloat(reg_sp-132));
/*+159:ILDC*/memint32[(reg_sp-116)>>2]=+64
/*+160:I2F*/PutFloat(reg_sp-112,memint32[(reg_sp-116)>>2]);
/*+161:FADD*/PutFloat(reg_sp-104, GetFloat(reg_sp-124)+GetFloat(reg_sp-112));
/*+162:F2I*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-104)
/*+163:MOV*//*4*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-144)>>2];
/*+164:ILDC*/memint32[(reg_sp-132)>>2]=-16777216
/*+165:OR*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-132)>>2]|memint32[(reg_sp-136)>>2]
/*+166:FLDC*/PutFloat(reg_sp-120,+0.500000);
/*+167:I2F*/PutFloat(reg_sp-112,memint32[(reg_sp-144)>>2]);
/*+168:FMUL*/PutFloat(reg_sp-104, GetFloat(reg_sp-112)*GetFloat(reg_sp-120));
/*+169:F2I*/memint32[(reg_sp-124)>>2]=GetFloat(reg_sp-104)
/*+170:ILDC*/memint32[(reg_sp-96)>>2]=+8
/*+171:SHL*/memint32[(reg_sp-92)>>2]=memint32[(reg_sp-124)>>2]<<memint32[(reg_sp-96)>>2]
/*+172:OR*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-128)>>2]|memint32[(reg_sp-92)>>2]
/*+173:FLDC*/PutFloat(reg_sp-80,+0.500000);
/*+174:I2F*/PutFloat(reg_sp-72,memint32[(reg_sp-144)>>2]);
/*+175:FMUL*/PutFloat(reg_sp-64, GetFloat(reg_sp-72)*GetFloat(reg_sp-80));
/*+176:ILDC*/memint32[(reg_sp-56)>>2]=+30
/*+177:I2F*/PutFloat(reg_sp-52,memint32[(reg_sp-56)>>2]);
/*+178:FADD*/PutFloat(reg_sp-44, GetFloat(reg_sp-64)+GetFloat(reg_sp-52));
/*+179:F2I*/memint32[(reg_sp-84)>>2]=GetFloat(reg_sp-44)
/*+180:ILDC*/memint32[(reg_sp-36)>>2]=+16
/*+181:SHL*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-84)>>2]<<memint32[(reg_sp-36)>>2]
/*+182:OR*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-88)>>2]|memint32[(reg_sp-32)>>2]
/*+183:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-140)>>2];
/*+184:ILDC*/memint32[(reg_sp-16)>>2]=+10
/*+185:ILDC*/memint32[(reg_sp-12)>>2]=+10
/*+186:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-184)>>2];
/*+187:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-180)>>2];
/*+188:NCALL*/SC_Rect();
/*+189:ILDC*/memint32[(reg_sp-136)>>2]=+5
/*+190:ADD*/memint32[(reg_sp-180)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-136)>>2]
/*+191:MOV*//*4*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-180)>>2];
/*+192:JMP*/reg_ip=134;
}
code[193]=function(){
/*+193:ILDC*/memint32[(reg_sp-136)>>2]=+5
/*+194:ADD*/memint32[(reg_sp-184)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-136)>>2]
/*+195:MOV*//*4*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-184)>>2];
/*+196:JMP*/reg_ip=130;
}
code[197]=function(){
/*+197:INT*/int_code=+10;interrupt=true;;reg_ip=198;
}
code[198]=function(){
/*+198:JMP*/reg_ip=118;
}
code[199]=function(){
/*+199:ILDC*/memint32[(reg_sp-204)>>2]=+0
/*+200:ADDSP*/reg_sp+=-200;
/*+201:RET*/reg_ip=regs.pop();
}
let start_addr=115
let start_rsp=328
