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
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
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
/*+10:ADDSP*/reg_sp+=+312;
/*+11:ILDC*/memint32[(reg_sp-312)>>2]=+13
/*+12:I2F*/PutFloat(reg_sp-308,memint32[(reg_sp-312)>>2]);
/*+13:FMUL*/PutFloat(reg_sp-300, GetFloat(reg_sp-328)*GetFloat(reg_sp-308));
/*+14:FADD*/PutFloat(reg_sp-292, GetFloat(reg_sp-300)+GetFloat(+0));
/*+15:MOV*/Memcpy(reg_sp-16,reg_sp-292,+8);
/*+16:NCALL*/SC_cos();
/*+17:MOV*/Memcpy(reg_sp-284,reg_sp-8,+8);
/*+18:ILDC*/memint32[(reg_sp-276)>>2]=+300
/*+19:I2F*/PutFloat(reg_sp-272,memint32[(reg_sp-276)>>2]);
/*+20:FMUL*/PutFloat(reg_sp-264, GetFloat(reg_sp-284)*GetFloat(reg_sp-272));
/*+21:FLDC*/PutFloat(reg_sp-256,+1.100000);
/*+22:FMUL*/PutFloat(reg_sp-248, GetFloat(+0)*GetFloat(reg_sp-256));
/*+23:MOV*/Memcpy(reg_sp-16,reg_sp-248,+8);
/*+24:NCALL*/SC_sin();
/*+25:MOV*/Memcpy(reg_sp-240,reg_sp-8,+8);
/*+26:FMUL*/PutFloat(reg_sp-232, GetFloat(reg_sp-264)*GetFloat(reg_sp-240));
/*+27:FLDC*/PutFloat(reg_sp-224,+27.500000);
/*+28:FMUL*/PutFloat(reg_sp-216, GetFloat(reg_sp-328)*GetFloat(reg_sp-224));
/*+29:FLDC*/PutFloat(reg_sp-208,+2.300000);
/*+30:FMUL*/PutFloat(reg_sp-200, GetFloat(+0)*GetFloat(reg_sp-208));
/*+31:FSUB*/PutFloat(reg_sp-192, GetFloat(reg_sp-216)-GetFloat(reg_sp-200));
/*+32:MOV*/Memcpy(reg_sp-16,reg_sp-192,+8);
/*+33:NCALL*/SC_cos();
/*+34:MOV*/Memcpy(reg_sp-184,reg_sp-8,+8);
/*+35:ILDC*/memint32[(reg_sp-176)>>2]=+250
/*+36:I2F*/PutFloat(reg_sp-172,memint32[(reg_sp-176)>>2]);
/*+37:FMUL*/PutFloat(reg_sp-164, GetFloat(reg_sp-184)*GetFloat(reg_sp-172));
/*+38:FLDC*/PutFloat(reg_sp-156,+0.900000);
/*+39:FMUL*/PutFloat(reg_sp-148, GetFloat(+0)*GetFloat(reg_sp-156));
/*+40:MOV*/Memcpy(reg_sp-16,reg_sp-148,+8);
/*+41:NCALL*/SC_sin();
/*+42:MOV*/Memcpy(reg_sp-140,reg_sp-8,+8);
/*+43:FMUL*/PutFloat(reg_sp-132, GetFloat(reg_sp-164)*GetFloat(reg_sp-140));
/*+44:FADD*/PutFloat(reg_sp-124, GetFloat(reg_sp-232)+GetFloat(reg_sp-132));
/*+45:FLDC*/PutFloat(reg_sp-116,+3.100000);
/*+46:FMUL*/PutFloat(reg_sp-108, GetFloat(reg_sp-328)*GetFloat(reg_sp-116));
/*+47:MOV*/Memcpy(reg_sp-16,reg_sp-108,+8);
/*+48:NCALL*/SC_sin();
/*+49:MOV*/Memcpy(reg_sp-100,reg_sp-8,+8);
/*+50:ILDC*/memint32[(reg_sp-92)>>2]=+150
/*+51:I2F*/PutFloat(reg_sp-88,memint32[(reg_sp-92)>>2]);
/*+52:FMUL*/PutFloat(reg_sp-80, GetFloat(reg_sp-100)*GetFloat(reg_sp-88));
/*+53:FLDC*/PutFloat(reg_sp-72,+0.700000);
/*+54:FMUL*/PutFloat(reg_sp-64, GetFloat(+0)*GetFloat(reg_sp-72));
/*+55:MOV*/Memcpy(reg_sp-16,reg_sp-64,+8);
/*+56:NCALL*/SC_sin();
/*+57:MOV*/Memcpy(reg_sp-56,reg_sp-8,+8);
/*+58:FMUL*/PutFloat(reg_sp-48, GetFloat(reg_sp-80)*GetFloat(reg_sp-56));
/*+59:FADD*/PutFloat(reg_sp-40, GetFloat(reg_sp-124)+GetFloat(reg_sp-48));
/*+60:FLDC*/PutFloat(reg_sp-32,+0.250000);
/*+61:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-40)*GetFloat(reg_sp-32));
/*+62:MOV*/Memcpy(reg_sp-320,reg_sp-24,+8);
/*+63:ADDSP*/reg_sp+=-312;
/*+64:RET*/reg_ip=regs.pop();
}
code[65]=function(){
/*+65:ADDSP*/reg_sp+=+312;
/*+66:ILDC*/memint32[(reg_sp-312)>>2]=+13
/*+67:I2F*/PutFloat(reg_sp-308,memint32[(reg_sp-312)>>2]);
/*+68:FMUL*/PutFloat(reg_sp-300, GetFloat(reg_sp-328)*GetFloat(reg_sp-308));
/*+69:FADD*/PutFloat(reg_sp-292, GetFloat(reg_sp-300)+GetFloat(+0));
/*+70:MOV*/Memcpy(reg_sp-16,reg_sp-292,+8);
/*+71:NCALL*/SC_sin();
/*+72:MOV*/Memcpy(reg_sp-284,reg_sp-8,+8);
/*+73:ILDC*/memint32[(reg_sp-276)>>2]=+300
/*+74:I2F*/PutFloat(reg_sp-272,memint32[(reg_sp-276)>>2]);
/*+75:FMUL*/PutFloat(reg_sp-264, GetFloat(reg_sp-284)*GetFloat(reg_sp-272));
/*+76:FLDC*/PutFloat(reg_sp-256,+1.100000);
/*+77:FMUL*/PutFloat(reg_sp-248, GetFloat(+0)*GetFloat(reg_sp-256));
/*+78:MOV*/Memcpy(reg_sp-16,reg_sp-248,+8);
/*+79:NCALL*/SC_sin();
/*+80:MOV*/Memcpy(reg_sp-240,reg_sp-8,+8);
/*+81:FMUL*/PutFloat(reg_sp-232, GetFloat(reg_sp-264)*GetFloat(reg_sp-240));
/*+82:FLDC*/PutFloat(reg_sp-224,+27.500000);
/*+83:FMUL*/PutFloat(reg_sp-216, GetFloat(reg_sp-328)*GetFloat(reg_sp-224));
/*+84:FLDC*/PutFloat(reg_sp-208,+0.300000);
/*+85:FMUL*/PutFloat(reg_sp-200, GetFloat(+0)*GetFloat(reg_sp-208));
/*+86:FSUB*/PutFloat(reg_sp-192, GetFloat(reg_sp-216)-GetFloat(reg_sp-200));
/*+87:MOV*/Memcpy(reg_sp-16,reg_sp-192,+8);
/*+88:NCALL*/SC_sin();
/*+89:MOV*/Memcpy(reg_sp-184,reg_sp-8,+8);
/*+90:ILDC*/memint32[(reg_sp-176)>>2]=+250
/*+91:I2F*/PutFloat(reg_sp-172,memint32[(reg_sp-176)>>2]);
/*+92:FMUL*/PutFloat(reg_sp-164, GetFloat(reg_sp-184)*GetFloat(reg_sp-172));
/*+93:FLDC*/PutFloat(reg_sp-156,+0.900000);
/*+94:FMUL*/PutFloat(reg_sp-148, GetFloat(+0)*GetFloat(reg_sp-156));
/*+95:MOV*/Memcpy(reg_sp-16,reg_sp-148,+8);
/*+96:NCALL*/SC_sin();
/*+97:MOV*/Memcpy(reg_sp-140,reg_sp-8,+8);
/*+98:FMUL*/PutFloat(reg_sp-132, GetFloat(reg_sp-164)*GetFloat(reg_sp-140));
/*+99:FADD*/PutFloat(reg_sp-124, GetFloat(reg_sp-232)+GetFloat(reg_sp-132));
/*+100:FLDC*/PutFloat(reg_sp-116,+3.100000);
/*+101:FMUL*/PutFloat(reg_sp-108, GetFloat(reg_sp-328)*GetFloat(reg_sp-116));
/*+102:MOV*/Memcpy(reg_sp-16,reg_sp-108,+8);
/*+103:NCALL*/SC_cos();
/*+104:MOV*/Memcpy(reg_sp-100,reg_sp-8,+8);
/*+105:ILDC*/memint32[(reg_sp-92)>>2]=+150
/*+106:I2F*/PutFloat(reg_sp-88,memint32[(reg_sp-92)>>2]);
/*+107:FMUL*/PutFloat(reg_sp-80, GetFloat(reg_sp-100)*GetFloat(reg_sp-88));
/*+108:FLDC*/PutFloat(reg_sp-72,+0.700000);
/*+109:FMUL*/PutFloat(reg_sp-64, GetFloat(+0)*GetFloat(reg_sp-72));
/*+110:MOV*/Memcpy(reg_sp-16,reg_sp-64,+8);
/*+111:NCALL*/SC_sin();
/*+112:MOV*/Memcpy(reg_sp-56,reg_sp-8,+8);
/*+113:FMUL*/PutFloat(reg_sp-48, GetFloat(reg_sp-80)*GetFloat(reg_sp-56));
/*+114:FADD*/PutFloat(reg_sp-40, GetFloat(reg_sp-124)+GetFloat(reg_sp-48));
/*+115:FLDC*/PutFloat(reg_sp-32,+0.250000);
/*+116:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-40)*GetFloat(reg_sp-32));
/*+117:MOV*/Memcpy(reg_sp-320,reg_sp-24,+8);
/*+118:ADDSP*/reg_sp+=-312;
/*+119:RET*/reg_ip=regs.pop();
}
code[120]=function(){
/*+120:ADDSP*/reg_sp+=+332;;reg_ip=121;
}
code[121]=function(){
/*+121:ILDC*/memint32[(reg_sp-4)>>2]=-14667712
/*+122:NCALL*/SC_rgba32();
/*+123:NCALL*/SC_FillRT();
/*+124:NCALL*/SC_Time();
/*+125:MOV*/Memcpy(reg_sp-272,reg_sp-8,+8);
/*+126:MOV*/Memcpy(+0,reg_sp-272,+8);
/*+127:FLDC*/PutFloat(reg_sp-332,+0.000000);
/*+128:FLDC*/PutFloat(reg_sp-324,+320.000000);
/*+129:FLDC*/PutFloat(reg_sp-316,+240.000000);
/*+130:MOV*/Memcpy(reg_sp-16,reg_sp-332,+8);
/*+131:CALL*/regs.push(132);reg_ip=10;
}
code[132]=function(){
/*+132:MOV*/Memcpy(reg_sp-272,reg_sp-8,+8);
/*+133:FADD*/PutFloat(reg_sp-308, GetFloat(reg_sp-324)+GetFloat(reg_sp-272));
/*+134:MOV*/Memcpy(reg_sp-16,reg_sp-332,+8);
/*+135:CALL*/regs.push(136);reg_ip=65;
}
code[136]=function(){
/*+136:MOV*/Memcpy(reg_sp-272,reg_sp-8,+8);
/*+137:FADD*/PutFloat(reg_sp-300, GetFloat(reg_sp-316)+GetFloat(reg_sp-272));
/*+138:ILDC*/memint32[(reg_sp-292)>>2]=+0;reg_ip=139;
}
code[139]=function(){
/*+139:ILDC*/memint32[(reg_sp-272)>>2]=+2500
/*+140:LS*/memint32[(reg_sp-268)>>2]=memint32[(reg_sp-292)>>2] <memint32[(reg_sp-272)>>2]
/*+141:JMPZ*/if(memint32[(reg_sp-268)>>2]==0){reg_ip=206;}else{reg_ip=142;}
}
code[142]=function(){
/*+142:ILDC*/memint32[(reg_sp-272)>>2]=+13
/*+143:I2F*/PutFloat(reg_sp-268,memint32[(reg_sp-272)>>2]);
/*+144:FMUL*/PutFloat(reg_sp-260, GetFloat(reg_sp-332)*GetFloat(reg_sp-268));
/*+145:ILDC*/memint32[(reg_sp-252)>>2]=+5
/*+146:I2F*/PutFloat(reg_sp-248,memint32[(reg_sp-252)>>2]);
/*+147:FMUL*/PutFloat(reg_sp-240, GetFloat(reg_sp-260)*GetFloat(reg_sp-248));
/*+148:MOV*/Memcpy(reg_sp-16,reg_sp-240,+8);
/*+149:NCALL*/SC_cos();
/*+150:MOV*/Memcpy(reg_sp-232,reg_sp-8,+8);
/*+151:FLDC*/PutFloat(reg_sp-224,+0.250000);
/*+152:FMUL*/PutFloat(reg_sp-216, GetFloat(reg_sp-224)*GetFloat(reg_sp-232));
/*+153:FLDC*/PutFloat(reg_sp-208,+0.250000);
/*+154:FADD*/PutFloat(reg_sp-200, GetFloat(reg_sp-208)+GetFloat(reg_sp-216));
/*+155:ILDC*/memint32[(reg_sp-192)>>2]=+13
/*+156:I2F*/PutFloat(reg_sp-188,memint32[(reg_sp-192)>>2]);
/*+157:FMUL*/PutFloat(reg_sp-180, GetFloat(reg_sp-332)*GetFloat(reg_sp-188));
/*+158:ILDC*/memint32[(reg_sp-172)>>2]=+4
/*+159:I2F*/PutFloat(reg_sp-168,memint32[(reg_sp-172)>>2]);
/*+160:FMUL*/PutFloat(reg_sp-160, GetFloat(reg_sp-180)*GetFloat(reg_sp-168));
/*+161:MOV*/Memcpy(reg_sp-16,reg_sp-160,+8);
/*+162:NCALL*/SC_sin();
/*+163:MOV*/Memcpy(reg_sp-152,reg_sp-8,+8);
/*+164:FLDC*/PutFloat(reg_sp-144,+0.250000);
/*+165:FMUL*/PutFloat(reg_sp-136, GetFloat(reg_sp-144)*GetFloat(reg_sp-152));
/*+166:FLDC*/PutFloat(reg_sp-128,+0.750000);
/*+167:FADD*/PutFloat(reg_sp-120, GetFloat(reg_sp-128)+GetFloat(reg_sp-136));
/*+168:ILDC*/memint32[(reg_sp-112)>>2]=+13
/*+169:I2F*/PutFloat(reg_sp-108,memint32[(reg_sp-112)>>2]);
/*+170:FMUL*/PutFloat(reg_sp-100, GetFloat(reg_sp-332)*GetFloat(reg_sp-108));
/*+171:ILDC*/memint32[(reg_sp-92)>>2]=+3
/*+172:I2F*/PutFloat(reg_sp-88,memint32[(reg_sp-92)>>2]);
/*+173:FMUL*/PutFloat(reg_sp-80, GetFloat(reg_sp-100)*GetFloat(reg_sp-88));
/*+174:MOV*/Memcpy(reg_sp-16,reg_sp-80,+8);
/*+175:NCALL*/SC_sin();
/*+176:MOV*/Memcpy(reg_sp-72,reg_sp-8,+8);
/*+177:FLDC*/PutFloat(reg_sp-64,+0.250000);
/*+178:FMUL*/PutFloat(reg_sp-56, GetFloat(reg_sp-64)*GetFloat(reg_sp-72));
/*+179:FLDC*/PutFloat(reg_sp-48,+0.250000);
/*+180:FADD*/PutFloat(reg_sp-40, GetFloat(reg_sp-48)+GetFloat(reg_sp-56));
/*+181:MOV*/Memcpy(reg_sp-24,reg_sp-40,+8);
/*+182:MOV*/Memcpy(reg_sp-16,reg_sp-120,+8);
/*+183:MOV*/Memcpy(reg_sp-8,reg_sp-200,+8);
/*+184:NCALL*/SC_rgb();
/*+185:FLDC*/PutFloat(reg_sp-272,+0.005000);
/*+186:FADD*/PutFloat(reg_sp-332, GetFloat(reg_sp-332)+GetFloat(reg_sp-272));
/*+187:MOV*/Memcpy(reg_sp-264,reg_sp-332,+8);
/*+188:MOV*/Memcpy(reg_sp-16,reg_sp-332,+8);
/*+189:CALL*/regs.push(190);reg_ip=10;
}
code[190]=function(){
/*+190:MOV*/Memcpy(reg_sp-272,reg_sp-8,+8);
/*+191:FADD*/PutFloat(reg_sp-288, GetFloat(reg_sp-324)+GetFloat(reg_sp-272));
/*+192:MOV*/Memcpy(reg_sp-16,reg_sp-332,+8);
/*+193:CALL*/regs.push(194);reg_ip=65;
}
code[194]=function(){
/*+194:MOV*/Memcpy(reg_sp-272,reg_sp-8,+8);
/*+195:FADD*/PutFloat(reg_sp-280, GetFloat(reg_sp-316)+GetFloat(reg_sp-272));
/*+196:MOV*/Memcpy(reg_sp-32,reg_sp-280,+8);
/*+197:MOV*/Memcpy(reg_sp-24,reg_sp-288,+8);
/*+198:MOV*/Memcpy(reg_sp-16,reg_sp-300,+8);
/*+199:MOV*/Memcpy(reg_sp-8,reg_sp-308,+8);
/*+200:NCALL*/SC_hairline();
/*+201:MOV*/Memcpy(reg_sp-308,reg_sp-288,+8);
/*+202:MOV*/Memcpy(reg_sp-300,reg_sp-280,+8);
/*+203:MOV*/Memcpy(reg_sp-272,reg_sp-292,+4);
/*+204:INC*/memint32[(reg_sp-292)>>2]=memint32[(reg_sp-292)>>2]+1
/*+205:JMP*/reg_ip=139;
}
code[206]=function(){
/*+206:INT*/int_code=+10;interrupt=true;;reg_ip=207;
}
code[207]=function(){
/*+207:JMP*/reg_ip=121;
}
code[208]=function(){
/*+208:ILDC*/memint32[(reg_sp-336)>>2]=+0
/*+209:ADDSP*/reg_sp+=-332;
/*+210:RET*/reg_ip=regs.pop();
}
let start_addr=120
let start_rsp=80
