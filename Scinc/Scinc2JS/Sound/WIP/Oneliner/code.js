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
29: int snd_add(int);// #29
30: void snd_data(int,int,float,float);// #30
31: void snd_out(float,float);// #31
32: void snd_out_buf(float*,int);// #32
33: int snd_bufhealth();// #33
34: void snd_play(int);// #34
35: void SetPresentWait(int);// #35
36: void SetPersistentFloat(char*,float);// #36
37: void SetPersistentInt(char*,int);// #37
38: float GetPersistentFloat(char*,float);// #38
39: int GetPersistentInt(char*,int);// #39
40: void GetMouseState(int&,int&,int&);// #40
41: int GetKeyEvent(int&,int&);// #41
42: int CountKeyEvents();// #42
43: int KeyPressed(int);// #43
44: int glyph(int);// #44
45: int gtext(char*);// #45
46: int stext(char*,int,int,int);// #46
47: void Graph::M(float,float);// #47
48: void Graph::m(float,float);// #48
49: void Graph::L(float,float);// #49
50: void Graph::l(float,float);// #50
51: void Graph::pl(float,float);// #51
52: void Graph::pm(float,float);// #52
53: void Graph::close();// #53
54: void Graph::clear();// #54
55: void Graph::C(float,float,float,float,float,float);// #55
56: void Graph::c(float,float,float,float,float,float);// #56
57: void Graph::Q(float,float,float,float);// #57
58: void Graph::q(float,float,float,float);// #58
59: void Graph::A(float,float,float,int,int,float,float);// #59
60: void Graph::a(float,float,float,int,int,float,float);// #60
61: void Graph::fill1();// #61
62: void Graph::fill2();// #62
63: int Graph::getpos(float,float&,float&);// #63
64: void Graph::getshapepos(float,int,float&,float&);// #64
65: float Graph::getlen();// #65
66: float Graph::getshapelen(int);// #66
67: int Graph::getnshapes();// #67
68: void Graph::calclen();// #68
69: void Graph::cut(float,int);// #69
70: void Graph::stroke();// #70
71: void Graph::miterlim(float);// #71
72: void Graph::fin();// #72
73: void Graph::rgba(float,float,float,float);// #73
74: void Graph::rgba32(int);// #74
75: void Graph::rgb(float,float,float);// #75
76: void Graph::Circle(float,float,float,float,float,int);// #76
77: void Graph::Rect(int,int,int,int,int);// #77
78: void Graph::hairline(float,float,float,float);// #78
79: void Graph::lineH(int,int,int);// #79
80: void Graph::lineH(int,int,int,int);// #80
81: void Graph::lineV(int,int,int);// #81
82: void Graph::lineV(int,int,int,int);// #82
83: void Graph::fillrect(int,int,int,int);// #83
84: void Graph::fillrect(int,int,int,int,int);// #84
85: void Graph::gray(float);// #85
86: void Graph::alpha(float);// #86
87: void Graph::width(float,float);// #87
88: void Graph::graddef(int);// #88
89: void Graph::gradend();// #89
90: void Graph::gradstop(float,float,float,float,float);// #90
91: void Graph::graduse(int);// #91
92: void Graph::gradtype(int);// #92
93: void Graph::gradmethod(int);// #93
94: void Graph::g_t(float,float,float,float,float,float);// #94
95: void Graph::g_0(float,float);// #95
96: void Graph::g_x(float,float);// #96
97: void Graph::g_y(float,float);// #97
98: void Graph::t_t(float,float,float,float,float,float);// #98
99: void Graph::t_0(float,float);// #99
100: void Graph::t_x(float,float);// #100
101: void Graph::t_y(float,float);// #101
102: void Graph::next();// #102
103: int Graph::GetActiveRT();// #103
104: void Graph::SetActiveRT(int);// #104
105: int Graph::CreateRT(int,int);// #105
106: void Graph::DeleteRT(int);// #106
107: void Graph::BitBlt(int,int,int);// #107
108: void Graph::BitBlt(void*,int,int,int,int);// #108
109: void Graph::FillRT();// #109
110: int Graph::LoadTTFont(char*);// #110
111: void Graph::VSetFont(int);// #111
112: void Graph::VChar(int);// #112
113: void Graph::VText(char*);// #113
114: void Graph::WriteImage(char*,char*,char*);// #114
115: int Graph::MpegCreate(char*);// #115
116: void Graph::MpegWriteFrame(int,int);// #116
117: void Graph::MpegDone(int);// #117
118: void PutPixel(int,int,int);// #118
119: int GetPixel(int,int);// #119

*/

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
1, 6, 1, 6, 4, 2, 8, 9, \0, T, i, m, e,  , %, f,
 , n, r,  , %,  , i, \0, (, (, t, *, (, ", 1, 6,
1, 6, 4, 2, 8, 9, ", [, (, t, >, >, 1, 3, ), &,
7, ], &, 1, 5, ), ), /, 1, 2, &, 1, 2, 8, ), +,
(, (, (, (, (, t, >, >, 1, 2, ), ^, (, t, >, >,
1, 2, ), -, 2, ), %, 1, 1, *, t, ), /, 4, |, t,
>, >, 1, 3, ), &, 1, 2, 7, ), \0, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
49, 54, 49, 54, 52, 50, 56, 57, 0, 84, 105, 109, 101, 32, 37, 102,
32, 110, 114, 32, 37, 32, 105, 0, 40, 40, 116, 42, 40, 34, 49, 54,
49, 54, 52, 50, 56, 57, 34, 91, 40, 116, 62, 62, 49, 51, 41, 38,
55, 93, 38, 49, 53, 41, 41, 47, 49, 50, 38, 49, 50, 56, 41, 43,
40, 40, 40, 40, 40, 116, 62, 62, 49, 50, 41, 94, 40, 116, 62, 62,
49, 50, 41, 45, 50, 41, 37, 49, 49, 42, 116, 41, 47, 52, 124, 116,
62, 62, 49, 51, 41, 38, 49, 50, 55, 41, 0, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
]
var code=[]
code[0]=function(){
/*+0:FIN*/interrupt=true;quit=true;
/*+1:FIN*/interrupt=true;quit=true;
/*+2:FIN*/interrupt=true;quit=true;
/*+3:FIN*/interrupt=true;quit=true;
/*+4:FIN*/interrupt=true;quit=true;
/*+5:FIN*/interrupt=true;quit=true;
/*+6:FIN*/interrupt=true;quit=true;
/*+7:FIN*/interrupt=true;quit=true;
/*+8:FIN*/interrupt=true;quit=true;
/*+9:FIN*/interrupt=true;quit=true;
}
code[10]=function(){
/*+10:ADDSP*/reg_sp+=+132;reg_sp4=reg_sp>>2;
/*+11:ILDC*/memint32[reg_sp4-32]=+13
/*+12:SHR*/memint32[reg_sp4-31]=memint32[reg_sp4-36]>>memint32[reg_sp4-32]
/*+13:ILDC*/memint32[reg_sp4-30]=+7
/*+14:AND*/memint32[reg_sp4-29]=memint32[reg_sp4-31]&memint32[reg_sp4-30]
/*+15:LEA*/memint32[reg_sp4-28]=+64
/*+16:IDX*/memint32[reg_sp4-28]=memint32[reg_sp4-28]+memint32[reg_sp4-29]*1
/*+17:ILDC*/memint32[reg_sp4-26]=+15
/*+18:C2I*/memint32[reg_sp4-25]=GetChar(memint32[(reg_sp4-28)])
/*+19:AND*/memint32[reg_sp4-24]=memint32[reg_sp4-25]&memint32[reg_sp4-26]
/*+20:MUL*/memint32[reg_sp4-23]=Math.imul(memint32[reg_sp4-36],memint32[reg_sp4-24]);
/*+21:ILDC*/memint32[reg_sp4-22]=+12
/*+22:DIV*/memint32[reg_sp4-21]=memint32[reg_sp4-23]/memint32[reg_sp4-22]
/*+23:ILDC*/memint32[reg_sp4-20]=+128
/*+24:AND*/memint32[reg_sp4-19]=memint32[reg_sp4-21]&memint32[reg_sp4-20]
/*+25:ILDC*/memint32[reg_sp4-18]=+12
/*+26:SHR*/memint32[reg_sp4-17]=memint32[reg_sp4-36]>>memint32[reg_sp4-18]
/*+27:ILDC*/memint32[reg_sp4-16]=+12
/*+28:SHR*/memint32[reg_sp4-15]=memint32[reg_sp4-36]>>memint32[reg_sp4-16]
/*+29:ILDC*/memint32[reg_sp4-14]=+2
/*+30:SUB*/memint32[reg_sp4-13]=memint32[reg_sp4-15]-memint32[reg_sp4-14]
/*+31:XOR*/memint32[reg_sp4-12]=memint32[reg_sp4-17]^memint32[reg_sp4-13]
/*+32:ILDC*/memint32[reg_sp4-11]=+11
/*+33:MOD*/memint32[reg_sp4-10]=memint32[reg_sp4-12] %memint32[reg_sp4-11]
/*+34:MUL*/memint32[reg_sp4-9]=Math.imul(memint32[reg_sp4-10],memint32[reg_sp4-36]);
/*+35:ILDC*/memint32[reg_sp4-8]=+4
/*+36:DIV*/memint32[reg_sp4-7]=memint32[reg_sp4-9]/memint32[reg_sp4-8]
/*+37:ILDC*/memint32[reg_sp4-6]=+13
/*+38:SHR*/memint32[reg_sp4-5]=memint32[reg_sp4-36]>>memint32[reg_sp4-6]
/*+39:OR*/memint32[reg_sp4-4]=memint32[reg_sp4-7]|memint32[reg_sp4-5]
/*+40:ILDC*/memint32[reg_sp4-3]=+127
/*+41:AND*/memint32[reg_sp4-2]=memint32[reg_sp4-4]&memint32[reg_sp4-3]
/*+42:ADD*/memint32[reg_sp4-33]=memint32[reg_sp4-19]+memint32[reg_sp4-2]
/*+43:ILDC*/memint32[reg_sp4-32]=+255
/*+44:AND*/memint32[reg_sp4-31]=memint32[reg_sp4-33]&memint32[reg_sp4-32]
/*+45:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+255.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-31];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+47:FDIV*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)/GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+48:MOV*//*8*/{let dst=(reg_sp4-35);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+49:ADDSP*/reg_sp+=-132;reg_sp4=reg_sp>>2;
/*+50:RET*/reg_ip=regs.pop();
}
code[51]=function(){
/*+51:ADDSP*/reg_sp+=+36;reg_sp4=reg_sp>>2;
/*+52:ILDC*/memint32[reg_sp4-9]=+0;reg_ip=53;
}
code[53]=function(){
/*+53:LS*/memint32[reg_sp4-6]=memint32[reg_sp4-9] <memint32[reg_sp4-10]
/*+54:JMPZ*/if(memint32[reg_sp4-6]==0){reg_ip=67;}else{reg_ip=55;}
}
code[55]=function(){
/*+55:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(+44)];
/*+56:CALL*/regs.push(57);reg_ip=10;
}
code[57]=function(){
/*+57:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+58:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+59:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(+44)];
/*+60:INC*/memint32[+44]=memint32[+44]+1
/*+61:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+62:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+63:NCALL*/SC_snd_out();
/*+64:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-9)];
/*+65:INC*/memint32[reg_sp4-9]=memint32[reg_sp4-9]+1
/*+66:JMP*/reg_ip=53;
}
code[67]=function(){
/*+67:ADDSP*/reg_sp+=-36;reg_sp4=reg_sp>>2;
/*+68:RET*/reg_ip=regs.pop();
}
code[69]=function(){
/*+69:ADDSP*/reg_sp+=+172;reg_sp4=reg_sp>>2;
/*+70:NCALL*/SC_Time();
/*+71:MOV*//*8*/{let dst=(reg_sp4-21);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+72:MOV*//*8*/{let dst=(reg_sp4-43);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+73:NCALL*/SC_Time();
/*+74:MOV*//*8*/{let dst=(reg_sp4-21);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+75:MOV*//*8*/{let dst=(reg_sp4-41);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+76:ILDC*/memint32[+44]=+0;reg_ip=77;
}
code[77]=function(){
/*+77:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+78:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+79:NCALL*/SC_t_0();
/*+80:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+82:NCALL*/SC_t_x();
/*+83:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+84:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+85:NCALL*/SC_t_y();
/*+86:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.050000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+88:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+89:NCALL*/SC_rgb();
/*+90:NCALL*/SC_clear();
/*+91:NCALL*/SC_FillRT();
/*+92:NCALL*/SC_clear();
/*+93:NCALL*/SC_Time();
/*+94:MOV*//*8*/{let dst=(reg_sp4-21);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+95:MOV*//*8*/{let dst=(reg_sp4-41);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+96:ILDC*/memint32[reg_sp4-39]=+0;reg_ip=97;
}
code[97]=function(){
/*+97:NCALL*/SC_snd_bufhealth();
/*+98:MOV*//*4*/memint32[(reg_sp4-21)]=memint32[(reg_sp4-1)];
/*+99:ILDC*/memint32[reg_sp4-20]=+3000
/*+100:LS*/memint32[reg_sp4-19]=memint32[reg_sp4-21] <memint32[reg_sp4-20]
/*+101:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=107;}else{reg_ip=102;}
}
code[102]=function(){
/*+102:ILDC*/memint32[reg_sp4-1]=+1024
/*+103:CALL*/regs.push(104);reg_ip=51;
}
code[104]=function(){
/*+104:MOV*//*4*/memint32[(reg_sp4-21)]=memint32[(reg_sp4-39)];
/*+105:INC*/memint32[reg_sp4-39]=memint32[reg_sp4-39]+1
/*+106:JMP*/reg_ip=97;
}
code[107]=function(){
/*+107:ILDC*/memint32[reg_sp4-21]=+640
/*+108:SUB*/memint32[reg_sp4-20]=memint32[+44]-memint32[reg_sp4-21]
/*+109:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-20)];
/*+110:CALL*/regs.push(111);reg_ip=10;
}
code[111]=function(){
/*+111:MOV*//*8*/{let dst=(reg_sp4-19);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+112:FLDC*/{let addr=(reg_sp4-17);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+113:FMUL*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-17)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+114:ILDC*/memint32[reg_sp4-13]=+120
/*+115:I2F*/{let addr=(reg_sp4-12);cvtflt64[0]=memint32[reg_sp4-13];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+116:FADD*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+117:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+118:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+119:NCALL*/SC_M();
/*+120:ILDC*/memint32[reg_sp4-38]=+1;reg_ip=121;
}
code[121]=function(){
/*+121:ILDC*/memint32[reg_sp4-21]=+640
/*+122:LS*/memint32[reg_sp4-20]=memint32[reg_sp4-38] <memint32[reg_sp4-21]
/*+123:JMPZ*/if(memint32[reg_sp4-20]==0){reg_ip=141;}else{reg_ip=124;}
}
code[124]=function(){
/*+124:ADD*/memint32[reg_sp4-21]=memint32[+44]+memint32[reg_sp4-38]
/*+125:ILDC*/memint32[reg_sp4-20]=+640
/*+126:SUB*/memint32[reg_sp4-19]=memint32[reg_sp4-21]-memint32[reg_sp4-20]
/*+127:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-19)];
/*+128:CALL*/regs.push(129);reg_ip=10;
}
code[129]=function(){
/*+129:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+130:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+131:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+132:ILDC*/memint32[reg_sp4-12]=+120
/*+133:I2F*/{let addr=(reg_sp4-11);cvtflt64[0]=memint32[reg_sp4-12];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+134:FADD*/{let addr=(reg_sp4-9);cvtflt64[0]=GetFloat4(reg_sp4-11)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+135:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+136:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:NCALL*/SC_L();
/*+138:MOV*//*4*/memint32[(reg_sp4-21)]=memint32[(reg_sp4-38)];
/*+139:INC*/memint32[reg_sp4-38]=memint32[reg_sp4-38]+1
/*+140:JMP*/reg_ip=121;
}
code[141]=function(){
/*+141:NCALL*/SC_fin();
/*+142:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+143:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+144:NCALL*/SC_width();
/*+145:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+146:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+147:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+148:NCALL*/SC_rgb();
/*+149:NCALL*/SC_stroke();
/*+150:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+152:NCALL*/SC_width();
/*+153:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+155:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+156:NCALL*/SC_rgb();
/*+157:NCALL*/SC_stroke();
/*+158:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+160:NCALL*/SC_t_x();
/*+161:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+162:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+163:NCALL*/SC_t_y();
/*+164:NCALL*/SC_clear();
/*+165:NCALL*/SC_Time();
/*+166:MOV*//*8*/{let dst=(reg_sp4-21);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+167:MOV*//*4*/memint32[(reg_sp4-7)]=memint32[(reg_sp4-39)];
/*+168:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+169:ILDC*/memint32[reg_sp4-4]=+73
/*+170:ILDC*/memint32[reg_sp4-3]=+64
/*+171:LEA*/memint32[reg_sp4-18]=reg_sp-148
/*+172:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-18)];
/*+173:NCALL*/SC_snprintf();
/*+174:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+175:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+176:NCALL*/SC_t_0();
/*+177:LEA*/memint32[reg_sp4-20]=reg_sp-148
/*+178:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-20)];
/*+179:NCALL*/SC_gtext();
/*+180:ILDC*/memint32[reg_sp4-5]=-8323104
/*+181:ILDC*/memint32[reg_sp4-4]=+30
/*+182:ILDC*/memint32[reg_sp4-3]=+10
/*+183:ILDC*/memint32[reg_sp4-2]=+88
/*+184:NCALL*/SC_stext();
/*+185:NCALL*/SC_fin();
/*+186:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+187:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:NCALL*/SC_width();
/*+189:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+192:NCALL*/SC_rgb();
/*+193:NCALL*/SC_stroke();
/*+194:INT*/int_code=+10;interrupt=true;;reg_ip=195;
}
code[195]=function(){
/*+195:JMP*/reg_ip=77;
}
code[196]=function(){
/*+196:ILDC*/memint32[reg_sp4-44]=+0
/*+197:ADDSP*/reg_sp+=-172;reg_sp4=reg_sp>>2;
/*+198:RET*/reg_ip=regs.pop();
}
let start_addr=69
let start_rsp=192
let graphics=1
