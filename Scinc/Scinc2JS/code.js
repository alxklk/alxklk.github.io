/* Native binds:
0: void Interrupt();// #0
1: int _Inp_GetSP();// #1
2: void _Inp_BRK(void*,int,int);// #2
3: float Time();// #3
4: void* malloc(int);// #4
5: void free(void*);// #5
6: int printf(char*,...);// #6
7: int snprintf(char*,int,char*,...);// #7
8: int puts(char*);// #8
9: float sin(float);// #9
10: float cos(float);// #10
11: float sqrt(float);// #11
12: float exp(float);// #12
13: float atan2(float,float);// #13
14: float pow(float,float);// #14
15: void* memcpy(void*,void*,int);// #15
16: void* memmove(void*,void*,int);// #16
17: FILE* fopen(char*,char*);// #17
18: int fclose(FILE*);// #18
19: int fwrite(void*,int,int,FILE*);// #19
20: int fread(void*,int,int,FILE*);// #20
21: int fseek(FILE*,int,int);// #21
22: int ftell(FILE*);// #22
23: void Wait(float);// #23
24: void CGUI::Print();// #24
25: void CGUI::SPrint();// #25
26: void CGUI::Print1();// #26
27: void Print1();// #27
28: void CGUI::CGUI();// #28
29: void CGUI::~CGUI();// #29
30: void SetPresentWait(int);// #30
31: void SetPersistentFloat(char*,float);// #31
32: void SetPersistentInt(char*,int);// #32
33: float GetPersistentFloat(char*,float);// #33
34: int GetPersistentInt(char*,int);// #34
35: void GetMouseState(int&,int&,int&);// #35
36: int GetKeyEvent(int&,int&);// #36
37: int CountKeyEvents();// #37
38: int KeyPressed(int);// #38
39: int glyph(int);// #39
40: int gtext(char*);// #40
41: int stext(char*,int,int,int);// #41
42: void Graph::M(float,float);// #42
43: void Graph::m(float,float);// #43
44: void Graph::L(float,float);// #44
45: void Graph::l(float,float);// #45
46: void Graph::pl(float,float);// #46
47: void Graph::pm(float,float);// #47
48: void Graph::close();// #48
49: void Graph::clear();// #49
50: void Graph::C(float,float,float,float,float,float);// #50
51: void Graph::c(float,float,float,float,float,float);// #51
52: void Graph::Q(float,float,float,float);// #52
53: void Graph::q(float,float,float,float);// #53
54: void Graph::A(float,float,float,int,int,float,float);// #54
55: void Graph::a(float,float,float,int,int,float,float);// #55
56: void Graph::fill1();// #56
57: void Graph::fill2();// #57
58: int Graph::getpos(float,float&,float&);// #58
59: void Graph::getshapepos(float,int,float&,float&);// #59
60: float Graph::getlen();// #60
61: float Graph::getshapelen(int);// #61
62: int Graph::getnshapes();// #62
63: void Graph::calclen();// #63
64: void Graph::cut(float,int);// #64
65: void Graph::stroke();// #65
66: void Graph::miterlim(float);// #66
67: void Graph::fin();// #67
68: void Graph::rgba(float,float,float,float);// #68
69: void Graph::rgba32(int);// #69
70: void Graph::rgb(float,float,float);// #70
71: void Graph::Circle(float,float,float,float,float,int);// #71
72: void Graph::Rect(int,int,int,int,int);// #72
73: void Graph::hairline(float,float,float,float);// #73
74: void Graph::lineH(int,int,int);// #74
75: void Graph::lineH(int,int,int,int);// #75
76: void Graph::lineV(int,int,int);// #76
77: void Graph::lineV(int,int,int,int);// #77
78: void Graph::fillrect(int,int,int,int);// #78
79: void Graph::fillrect(int,int,int,int,int);// #79
80: void Graph::gray(float);// #80
81: void Graph::alpha(float);// #81
82: void Graph::width(float,float);// #82
83: void Graph::graddef(int);// #83
84: void Graph::gradend();// #84
85: void Graph::gradstop(float,float,float,float,float);// #85
86: void Graph::graduse(int);// #86
87: void Graph::gradtype(int);// #87
88: void Graph::gradmethod(int);// #88
89: void Graph::g_t(float,float,float,float,float,float);// #89
90: void Graph::g_0(float,float);// #90
91: void Graph::g_x(float,float);// #91
92: void Graph::g_y(float,float);// #92
93: void Graph::t_t(float,float,float,float,float,float);// #93
94: void Graph::t_0(float,float);// #94
95: void Graph::t_x(float,float);// #95
96: void Graph::t_y(float,float);// #96
97: void Graph::next();// #97
98: int Graph::GetActiveRT();// #98
99: void Graph::SetActiveRT(int);// #99
100: int Graph::CreateRT(int,int);// #100
101: void Graph::DeleteRT(int);// #101
102: void Graph::BitBlt(int,int,int);// #102
103: void Graph::BitBlt(void*,int,int,int,int);// #103
104: void Graph::FillRT();// #104
105: int Graph::LoadTTFont(char*);// #105
106: void Graph::VSetFont(int);// #106
107: void Graph::VChar(int);// #107
108: void Graph::VText(char*);// #108
109: void Graph::WriteImage(char*,char*,char*);// #109
110: int Graph::MpegCreate(char*);// #110
111: void Graph::MpegWriteFrame(int,int);// #111
112: void Graph::MpegDone(int);// #112
113: void PutPixel(int,int,int);// #113
114: int GetPixel(int,int);// #114

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
let code=[
function(){/*+0:FIN*/interrupt=true;quit=true;},
function(){/*+1:FIN*/interrupt=true;quit=true;},
function(){/*+2:FIN*/interrupt=true;quit=true;},
function(){/*+3:FIN*/interrupt=true;quit=true;},
function(){/*+4:FIN*/interrupt=true;quit=true;},
function(){/*+5:FIN*/interrupt=true;quit=true;},
function(){/*+6:FIN*/interrupt=true;quit=true;},
function(){/*+7:FIN*/interrupt=true;quit=true;},
function(){/*+8:FIN*/interrupt=true;quit=true;},
function(){/*+9:FIN*/interrupt=true;quit=true;},
function(){/*>>> +10:ADDSP*/reg_sp+=+312;reg_ip++;},
function(){/*+11:ILDC*/var dst=reg_sp-312;PutInt(dst, +13);reg_ip++;},
function(){/*+12:I2F*/var dst=reg_sp-308;var sr0=reg_sp-312;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+13:FMUL*/var dst=reg_sp-300;var sr0=reg_sp-328;var sr1=reg_sp-308;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+14:FADD*/var dst=reg_sp-292;var sr0=reg_sp-300;var sr1=+0;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+15:MOV*/var dst=reg_sp-16;var sr0=reg_sp-292;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+16:NCALL*/SC_cos();reg_ip++;},
function(){/*+17:MOV*/var dst=reg_sp-284;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+18:ILDC*/var dst=reg_sp-276;PutInt(dst, +300);reg_ip++;},
function(){/*+19:I2F*/var dst=reg_sp-272;var sr0=reg_sp-276;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+20:FMUL*/var dst=reg_sp-264;var sr0=reg_sp-284;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+21:FLDC*/var dst=reg_sp-256;PutFloat(dst,+1.100000);reg_ip++;},
function(){/*+22:FMUL*/var dst=reg_sp-248;var sr0=+0;var sr1=reg_sp-256;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+23:MOV*/var dst=reg_sp-16;var sr0=reg_sp-248;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+24:NCALL*/SC_sin();reg_ip++;},
function(){/*+25:MOV*/var dst=reg_sp-240;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+26:FMUL*/var dst=reg_sp-232;var sr0=reg_sp-264;var sr1=reg_sp-240;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+27:FLDC*/var dst=reg_sp-224;PutFloat(dst,+27.500000);reg_ip++;},
function(){/*+28:FMUL*/var dst=reg_sp-216;var sr0=reg_sp-328;var sr1=reg_sp-224;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+29:FLDC*/var dst=reg_sp-208;PutFloat(dst,+2.300000);reg_ip++;},
function(){/*+30:FMUL*/var dst=reg_sp-200;var sr0=+0;var sr1=reg_sp-208;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+31:FSUB*/var dst=reg_sp-192;var sr0=reg_sp-216;var sr1=reg_sp-200;PutFloat(dst, GetFloat(sr0)-GetFloat(sr1));reg_ip++;},
function(){/*+32:MOV*/var dst=reg_sp-16;var sr0=reg_sp-192;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+33:NCALL*/SC_cos();reg_ip++;},
function(){/*+34:MOV*/var dst=reg_sp-184;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+35:ILDC*/var dst=reg_sp-176;PutInt(dst, +250);reg_ip++;},
function(){/*+36:I2F*/var dst=reg_sp-172;var sr0=reg_sp-176;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+37:FMUL*/var dst=reg_sp-164;var sr0=reg_sp-184;var sr1=reg_sp-172;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+38:FLDC*/var dst=reg_sp-156;PutFloat(dst,+0.900000);reg_ip++;},
function(){/*+39:FMUL*/var dst=reg_sp-148;var sr0=+0;var sr1=reg_sp-156;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+40:MOV*/var dst=reg_sp-16;var sr0=reg_sp-148;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+41:NCALL*/SC_sin();reg_ip++;},
function(){/*+42:MOV*/var dst=reg_sp-140;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+43:FMUL*/var dst=reg_sp-132;var sr0=reg_sp-164;var sr1=reg_sp-140;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+44:FADD*/var dst=reg_sp-124;var sr0=reg_sp-232;var sr1=reg_sp-132;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+45:FLDC*/var dst=reg_sp-116;PutFloat(dst,+3.100000);reg_ip++;},
function(){/*+46:FMUL*/var dst=reg_sp-108;var sr0=reg_sp-328;var sr1=reg_sp-116;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+47:MOV*/var dst=reg_sp-16;var sr0=reg_sp-108;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+48:NCALL*/SC_sin();reg_ip++;},
function(){/*+49:MOV*/var dst=reg_sp-100;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+50:ILDC*/var dst=reg_sp-92;PutInt(dst, +150);reg_ip++;},
function(){/*+51:I2F*/var dst=reg_sp-88;var sr0=reg_sp-92;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+52:FMUL*/var dst=reg_sp-80;var sr0=reg_sp-100;var sr1=reg_sp-88;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+53:FLDC*/var dst=reg_sp-72;PutFloat(dst,+0.700000);reg_ip++;},
function(){/*+54:FMUL*/var dst=reg_sp-64;var sr0=+0;var sr1=reg_sp-72;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+55:MOV*/var dst=reg_sp-16;var sr0=reg_sp-64;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+56:NCALL*/SC_sin();reg_ip++;},
function(){/*+57:MOV*/var dst=reg_sp-56;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+58:FMUL*/var dst=reg_sp-48;var sr0=reg_sp-80;var sr1=reg_sp-56;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+59:FADD*/var dst=reg_sp-40;var sr0=reg_sp-124;var sr1=reg_sp-48;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+60:FLDC*/var dst=reg_sp-32;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+61:FMUL*/var dst=reg_sp-24;var sr0=reg_sp-40;var sr1=reg_sp-32;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+62:MOV*/var dst=reg_sp-320;var sr0=reg_sp-24;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+63:ADDSP*/reg_sp+=-312;reg_ip++;},
function(){/*+64:RET*/reg_ip=regs.pop();},
function(){/*>>> +65:ADDSP*/reg_sp+=+312;reg_ip++;},
function(){/*+66:ILDC*/var dst=reg_sp-312;PutInt(dst, +13);reg_ip++;},
function(){/*+67:I2F*/var dst=reg_sp-308;var sr0=reg_sp-312;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+68:FMUL*/var dst=reg_sp-300;var sr0=reg_sp-328;var sr1=reg_sp-308;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+69:FADD*/var dst=reg_sp-292;var sr0=reg_sp-300;var sr1=+0;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+70:MOV*/var dst=reg_sp-16;var sr0=reg_sp-292;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+71:NCALL*/SC_sin();reg_ip++;},
function(){/*+72:MOV*/var dst=reg_sp-284;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+73:ILDC*/var dst=reg_sp-276;PutInt(dst, +300);reg_ip++;},
function(){/*+74:I2F*/var dst=reg_sp-272;var sr0=reg_sp-276;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+75:FMUL*/var dst=reg_sp-264;var sr0=reg_sp-284;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+76:FLDC*/var dst=reg_sp-256;PutFloat(dst,+1.100000);reg_ip++;},
function(){/*+77:FMUL*/var dst=reg_sp-248;var sr0=+0;var sr1=reg_sp-256;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+78:MOV*/var dst=reg_sp-16;var sr0=reg_sp-248;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+79:NCALL*/SC_sin();reg_ip++;},
function(){/*+80:MOV*/var dst=reg_sp-240;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+81:FMUL*/var dst=reg_sp-232;var sr0=reg_sp-264;var sr1=reg_sp-240;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+82:FLDC*/var dst=reg_sp-224;PutFloat(dst,+27.500000);reg_ip++;},
function(){/*+83:FMUL*/var dst=reg_sp-216;var sr0=reg_sp-328;var sr1=reg_sp-224;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+84:FLDC*/var dst=reg_sp-208;PutFloat(dst,+0.300000);reg_ip++;},
function(){/*+85:FMUL*/var dst=reg_sp-200;var sr0=+0;var sr1=reg_sp-208;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+86:FSUB*/var dst=reg_sp-192;var sr0=reg_sp-216;var sr1=reg_sp-200;PutFloat(dst, GetFloat(sr0)-GetFloat(sr1));reg_ip++;},
function(){/*+87:MOV*/var dst=reg_sp-16;var sr0=reg_sp-192;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+88:NCALL*/SC_sin();reg_ip++;},
function(){/*+89:MOV*/var dst=reg_sp-184;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+90:ILDC*/var dst=reg_sp-176;PutInt(dst, +250);reg_ip++;},
function(){/*+91:I2F*/var dst=reg_sp-172;var sr0=reg_sp-176;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+92:FMUL*/var dst=reg_sp-164;var sr0=reg_sp-184;var sr1=reg_sp-172;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+93:FLDC*/var dst=reg_sp-156;PutFloat(dst,+0.900000);reg_ip++;},
function(){/*+94:FMUL*/var dst=reg_sp-148;var sr0=+0;var sr1=reg_sp-156;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+95:MOV*/var dst=reg_sp-16;var sr0=reg_sp-148;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+96:NCALL*/SC_sin();reg_ip++;},
function(){/*+97:MOV*/var dst=reg_sp-140;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+98:FMUL*/var dst=reg_sp-132;var sr0=reg_sp-164;var sr1=reg_sp-140;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+99:FADD*/var dst=reg_sp-124;var sr0=reg_sp-232;var sr1=reg_sp-132;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+100:FLDC*/var dst=reg_sp-116;PutFloat(dst,+3.100000);reg_ip++;},
function(){/*+101:FMUL*/var dst=reg_sp-108;var sr0=reg_sp-328;var sr1=reg_sp-116;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+102:MOV*/var dst=reg_sp-16;var sr0=reg_sp-108;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+103:NCALL*/SC_cos();reg_ip++;},
function(){/*+104:MOV*/var dst=reg_sp-100;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+105:ILDC*/var dst=reg_sp-92;PutInt(dst, +150);reg_ip++;},
function(){/*+106:I2F*/var dst=reg_sp-88;var sr0=reg_sp-92;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+107:FMUL*/var dst=reg_sp-80;var sr0=reg_sp-100;var sr1=reg_sp-88;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+108:FLDC*/var dst=reg_sp-72;PutFloat(dst,+0.700000);reg_ip++;},
function(){/*+109:FMUL*/var dst=reg_sp-64;var sr0=+0;var sr1=reg_sp-72;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+110:MOV*/var dst=reg_sp-16;var sr0=reg_sp-64;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+111:NCALL*/SC_sin();reg_ip++;},
function(){/*+112:MOV*/var dst=reg_sp-56;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+113:FMUL*/var dst=reg_sp-48;var sr0=reg_sp-80;var sr1=reg_sp-56;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+114:FADD*/var dst=reg_sp-40;var sr0=reg_sp-124;var sr1=reg_sp-48;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+115:FLDC*/var dst=reg_sp-32;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+116:FMUL*/var dst=reg_sp-24;var sr0=reg_sp-40;var sr1=reg_sp-32;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+117:MOV*/var dst=reg_sp-320;var sr0=reg_sp-24;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+118:ADDSP*/reg_sp+=-312;reg_ip++;},
function(){/*+119:RET*/reg_ip=regs.pop();},
function(){/*>>> +120:ADDSP*/reg_sp+=+332;reg_ip++;},
function(){/*>>> +121:ILDC*/var dst=reg_sp-4;PutInt(dst, -14667712);reg_ip++;},
function(){/*+122:NCALL*/SC_rgba32();reg_ip++;},
function(){/*+123:NCALL*/SC_FillRT();reg_ip++;},
function(){/*+124:NCALL*/SC_Time();reg_ip++;},
function(){/*+125:MOV*/var dst=reg_sp-272;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+126:MOV*/var dst=+0;var sr0=reg_sp-272;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+127:FLDC*/var dst=reg_sp-332;PutFloat(dst,+0.000000);reg_ip++;},
function(){/*+128:FLDC*/var dst=reg_sp-324;PutFloat(dst,+320.000000);reg_ip++;},
function(){/*+129:FLDC*/var dst=reg_sp-316;PutFloat(dst,+240.000000);reg_ip++;},
function(){/*+130:MOV*/var dst=reg_sp-16;var sr0=reg_sp-332;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+131:CALL*/regs.push(reg_ip+1);reg_ip=+10;},
function(){/*>>> +132:MOV*/var dst=reg_sp-272;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+133:FADD*/var dst=reg_sp-308;var sr0=reg_sp-324;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+134:MOV*/var dst=reg_sp-16;var sr0=reg_sp-332;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+135:CALL*/regs.push(reg_ip+1);reg_ip=+65;},
function(){/*>>> +136:MOV*/var dst=reg_sp-272;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+137:FADD*/var dst=reg_sp-300;var sr0=reg_sp-316;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+138:ILDC*/var dst=reg_sp-292;PutInt(dst, +0);reg_ip++;},
function(){/*>>> +139:ILDC*/var dst=reg_sp-272;PutInt(dst, +2500);reg_ip++;},
function(){/*+140:LS*/var dst=reg_sp-268;var sr0=reg_sp-292;var sr1=reg_sp-272;PutInt(dst, GetInt(sr0) <GetInt(sr1));reg_ip++;},
function(){/*+141:JMPZ*/var sr0=reg_sp-268;if(GetInt(sr0)==0){reg_ip+=+64;}reg_ip++;},
function(){/*+142:ILDC*/var dst=reg_sp-272;PutInt(dst, +13);reg_ip++;},
function(){/*+143:I2F*/var dst=reg_sp-268;var sr0=reg_sp-272;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+144:FMUL*/var dst=reg_sp-260;var sr0=reg_sp-332;var sr1=reg_sp-268;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+145:ILDC*/var dst=reg_sp-252;PutInt(dst, +5);reg_ip++;},
function(){/*+146:I2F*/var dst=reg_sp-248;var sr0=reg_sp-252;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+147:FMUL*/var dst=reg_sp-240;var sr0=reg_sp-260;var sr1=reg_sp-248;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+148:MOV*/var dst=reg_sp-16;var sr0=reg_sp-240;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+149:NCALL*/SC_cos();reg_ip++;},
function(){/*+150:MOV*/var dst=reg_sp-232;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+151:FLDC*/var dst=reg_sp-224;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+152:FMUL*/var dst=reg_sp-216;var sr0=reg_sp-224;var sr1=reg_sp-232;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+153:FLDC*/var dst=reg_sp-208;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+154:FADD*/var dst=reg_sp-200;var sr0=reg_sp-208;var sr1=reg_sp-216;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+155:ILDC*/var dst=reg_sp-192;PutInt(dst, +13);reg_ip++;},
function(){/*+156:I2F*/var dst=reg_sp-188;var sr0=reg_sp-192;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+157:FMUL*/var dst=reg_sp-180;var sr0=reg_sp-332;var sr1=reg_sp-188;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+158:ILDC*/var dst=reg_sp-172;PutInt(dst, +4);reg_ip++;},
function(){/*+159:I2F*/var dst=reg_sp-168;var sr0=reg_sp-172;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+160:FMUL*/var dst=reg_sp-160;var sr0=reg_sp-180;var sr1=reg_sp-168;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+161:MOV*/var dst=reg_sp-16;var sr0=reg_sp-160;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+162:NCALL*/SC_sin();reg_ip++;},
function(){/*+163:MOV*/var dst=reg_sp-152;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+164:FLDC*/var dst=reg_sp-144;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+165:FMUL*/var dst=reg_sp-136;var sr0=reg_sp-144;var sr1=reg_sp-152;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+166:FLDC*/var dst=reg_sp-128;PutFloat(dst,+0.750000);reg_ip++;},
function(){/*+167:FADD*/var dst=reg_sp-120;var sr0=reg_sp-128;var sr1=reg_sp-136;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+168:ILDC*/var dst=reg_sp-112;PutInt(dst, +13);reg_ip++;},
function(){/*+169:I2F*/var dst=reg_sp-108;var sr0=reg_sp-112;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+170:FMUL*/var dst=reg_sp-100;var sr0=reg_sp-332;var sr1=reg_sp-108;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+171:ILDC*/var dst=reg_sp-92;PutInt(dst, +3);reg_ip++;},
function(){/*+172:I2F*/var dst=reg_sp-88;var sr0=reg_sp-92;PutFloat(dst, GetInt(sr0));reg_ip++;},
function(){/*+173:FMUL*/var dst=reg_sp-80;var sr0=reg_sp-100;var sr1=reg_sp-88;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+174:MOV*/var dst=reg_sp-16;var sr0=reg_sp-80;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+175:NCALL*/SC_sin();reg_ip++;},
function(){/*+176:MOV*/var dst=reg_sp-72;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+177:FLDC*/var dst=reg_sp-64;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+178:FMUL*/var dst=reg_sp-56;var sr0=reg_sp-64;var sr1=reg_sp-72;PutFloat(dst, GetFloat(sr0)*GetFloat(sr1));reg_ip++;},
function(){/*+179:FLDC*/var dst=reg_sp-48;PutFloat(dst,+0.250000);reg_ip++;},
function(){/*+180:FADD*/var dst=reg_sp-40;var sr0=reg_sp-48;var sr1=reg_sp-56;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+181:MOV*/var dst=reg_sp-24;var sr0=reg_sp-40;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+182:MOV*/var dst=reg_sp-16;var sr0=reg_sp-120;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+183:MOV*/var dst=reg_sp-8;var sr0=reg_sp-200;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+184:NCALL*/SC_rgb();reg_ip++;},
function(){/*+185:FLDC*/var dst=reg_sp-272;PutFloat(dst,+0.005000);reg_ip++;},
function(){/*+186:FADD*/var dst=reg_sp-332;var sr0=reg_sp-332;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+187:MOV*/var dst=reg_sp-264;var sr0=reg_sp-332;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+188:MOV*/var dst=reg_sp-16;var sr0=reg_sp-332;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+189:CALL*/regs.push(reg_ip+1);reg_ip=+10;},
function(){/*>>> +190:MOV*/var dst=reg_sp-272;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+191:FADD*/var dst=reg_sp-288;var sr0=reg_sp-324;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+192:MOV*/var dst=reg_sp-16;var sr0=reg_sp-332;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+193:CALL*/regs.push(reg_ip+1);reg_ip=+65;},
function(){/*>>> +194:MOV*/var dst=reg_sp-272;var sr0=reg_sp-8;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+195:FADD*/var dst=reg_sp-280;var sr0=reg_sp-316;var sr1=reg_sp-272;PutFloat(dst, GetFloat(sr0)+GetFloat(sr1));reg_ip++;},
function(){/*+196:MOV*/var dst=reg_sp-32;var sr0=reg_sp-280;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+197:MOV*/var dst=reg_sp-24;var sr0=reg_sp-288;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+198:MOV*/var dst=reg_sp-16;var sr0=reg_sp-300;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+199:MOV*/var dst=reg_sp-8;var sr0=reg_sp-308;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+200:NCALL*/SC_hairline();reg_ip++;},
function(){/*+201:MOV*/var dst=reg_sp-308;var sr0=reg_sp-288;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+202:MOV*/var dst=reg_sp-300;var sr0=reg_sp-280;Memcpy(dst,sr0,+8);reg_ip++;},
function(){/*+203:MOV*/var dst=reg_sp-272;var sr0=reg_sp-292;Memcpy(dst,sr0,+4);reg_ip++;},
function(){/*+204:INC*/var dst=reg_sp-292;PutInt(dst, GetInt(dst)+1);reg_ip++;},
function(){/*+205:JMP*/reg_ip+=-67;reg_ip++;},
function(){/*>>> +206:INT*/int_code=+10;interrupt=true;reg_ip++;},
function(){/*+207:JMP*/reg_ip+=-87;reg_ip++;},
function(){/*+208:ILDC*/var dst=reg_sp-336;PutInt(dst, +0);reg_ip++;},
function(){/*+209:ADDSP*/reg_sp+=-332;reg_ip++;},
function(){/*+210:RET*/reg_ip=regs.pop();}
]
let start_addr=120
let start_rsp=80
