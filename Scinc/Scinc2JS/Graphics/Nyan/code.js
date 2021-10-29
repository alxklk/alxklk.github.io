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
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255
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
/*+10:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+11:ILDC*/memint32[reg_sp4-6]=+1103515245
/*+12:MUL*/memint32[reg_sp4-5]=Math.imul(GetInt(memint32[(reg_sp4-8)]),memint32[reg_sp4-6]);
/*+13:ILDC*/memint32[reg_sp4-4]=+12345
/*+14:ADD*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+memint32[reg_sp4-4]
/*+15:ILDC*/memint32[reg_sp4-2]=+134217727
/*+16:AND*/PutInt(memint32[(reg_sp4-8)],memint32[reg_sp4-3]&memint32[reg_sp4-2])
/*+17:MOV*/{let addr=memint32[(reg_sp4-8)];mem8.copyWithin(reg_sp-28,addr,addr+4);}
/*+18:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+19:RET*/reg_ip=regs.pop();
}
code[20]=function(){
/*+20:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+21:ILDC*/memint32[reg_sp4-8]=+0
/*+22:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-8];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+23:FLS*/memint32[reg_sp4-5]=GetFloat4(reg_sp4-12) <GetFloat4(reg_sp4-7)
/*+24:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=28;}else{reg_ip=25;}
}
code[25]=function(){
/*+25:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+26:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+27:JMP*/reg_ip=29;
}
code[28]=function(){
/*+28:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=29;
}
code[29]=function(){
/*+29:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+30:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+31:RET*/reg_ip=regs.pop();
}
code[32]=function(){
/*+32:ADDSP*/reg_sp+=+76;reg_sp4=reg_sp>>2;
/*+33:NCALL*/SC_clear();
/*+34:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:NCALL*/SC_cos();
/*+36:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+37:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+39:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+42:NCALL*/SC_M();
/*+43:ILDC*/memint32[reg_sp4-19]=+0;reg_ip=44;
}
code[44]=function(){
/*+44:ILDC*/memint32[reg_sp4-16]=+50
/*+45:LS*/memint32[reg_sp4-15]=memint32[reg_sp4-19] <memint32[reg_sp4-16]
/*+46:JMPZ*/if(memint32[reg_sp4-15]==0){reg_ip=68;}else{reg_ip=47;}
}
code[47]=function(){
/*+47:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+48:I2F*/{let addr=(reg_sp4-14);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+49:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+50:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+51:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+52:NCALL*/SC_sin();
/*+53:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+54:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+55:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.050000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+56:I2F*/{let addr=(reg_sp4-14);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+57:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+58:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+59:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+60:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+61:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+62:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+63:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:NCALL*/SC_l();
/*+65:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-19)];
/*+66:INC*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+1
/*+67:JMP*/reg_ip=44;
}
code[68]=function(){
/*+68:NCALL*/SC_fin();
/*+69:ILDC*/memint32[reg_sp4-16]=+2
/*+70:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-28)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+73:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+74:NCALL*/SC_width();
/*+75:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-24)];
/*+76:NCALL*/SC_rgba32();
/*+77:NCALL*/SC_stroke();
/*+78:ADDSP*/reg_sp+=-76;reg_sp4=reg_sp>>2;
/*+79:RET*/reg_ip=regs.pop();
}
code[80]=function(){
/*+80:ADDSP*/reg_sp+=+88;reg_sp4=reg_sp>>2;
/*+81:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+82:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+83:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+84:NCALL*/SC_M();
/*+85:ILDC*/memint32[reg_sp4-22]=+0
/*+86:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+88:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=99;}else{reg_ip=89;}
}
code[89]=function(){
/*+89:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+90:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+91:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+92:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+93:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+94:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+95:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+96:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+97:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:NCALL*/SC_c();;reg_ip=99;
}
code[99]=function(){
/*+99:ILDC*/memint32[reg_sp4-22]=+2
/*+100:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+101:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+102:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-28)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+103:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+104:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+105:NCALL*/SC_l();
/*+106:ILDC*/memint32[reg_sp4-22]=+0
/*+107:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+108:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+109:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=117;}else{reg_ip=110;}
}
code[110]=function(){
/*+110:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+111:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+112:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+113:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+114:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+116:NCALL*/SC_c();;reg_ip=117;
}
code[117]=function(){
/*+117:ILDC*/memint32[reg_sp4-22]=+2
/*+118:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+119:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+120:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+122:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+123:NCALL*/SC_l();
/*+124:ILDC*/memint32[reg_sp4-22]=+0
/*+125:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+126:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+127:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=137;}else{reg_ip=128;}
}
code[128]=function(){
/*+128:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+129:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+130:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+131:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+132:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+134:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+135:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:NCALL*/SC_c();;reg_ip=137;
}
code[137]=function(){
/*+137:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:ILDC*/memint32[reg_sp4-20]=+2
/*+139:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-20];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+140:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+141:FADD*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+142:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+143:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+144:NCALL*/SC_l();
/*+145:ILDC*/memint32[reg_sp4-22]=+0
/*+146:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+147:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+148:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=161;}else{reg_ip=149;}
}
code[149]=function(){
/*+149:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+150:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+152:FNEG*/{let addr=(reg_sp4-16);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:FNEG*/{let addr=(reg_sp4-14);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+155:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+156:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+157:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+158:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+160:NCALL*/SC_c();;reg_ip=161;
}
code[161]=function(){
/*+161:NCALL*/SC_close();
/*+162:ADDSP*/reg_sp+=-88;reg_sp4=reg_sp>>2;
/*+163:RET*/reg_ip=regs.pop();
}
code[164]=function(){
/*+164:ADDSP*/reg_sp+=+36;reg_sp4=reg_sp>>2;
/*+165:FDIV*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-13)/GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+166:F2I*/memint32[reg_sp4-9]=GetFloat4(reg_sp4-8)
/*+167:I2F*/{let addr=(reg_sp4-6);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+168:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+169:FSUB*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-13)-GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+170:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+171:ADDSP*/reg_sp+=-36;reg_sp4=reg_sp>>2;
/*+172:RET*/reg_ip=regs.pop();
}
code[173]=function(){
/*+173:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+174:FGR*/memint32[reg_sp4-3]=GetFloat4(reg_sp4-7) >GetFloat4(reg_sp4-9)
/*+175:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=178;}else{reg_ip=176;}
}
code[176]=function(){
/*+176:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-7);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+177:JMP*/reg_ip=179;
}
code[178]=function(){
/*+178:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=179;
}
code[179]=function(){
/*+179:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+180:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+181:RET*/reg_ip=regs.pop();
}
code[182]=function(){
/*+182:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+183:FLS*/memint32[reg_sp4-3]=GetFloat4(reg_sp4-7) <GetFloat4(reg_sp4-9)
/*+184:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=187;}else{reg_ip=185;}
}
code[185]=function(){
/*+185:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-7);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+186:JMP*/reg_ip=188;
}
code[187]=function(){
/*+187:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=188;
}
code[188]=function(){
/*+188:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+189:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+190:RET*/reg_ip=regs.pop();
}
code[191]=function(){
/*+191:ADDSP*/reg_sp+=+80;reg_sp4=reg_sp>>2;
/*+192:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+193:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+194:CALL*/regs.push(195);reg_ip=164;
}
code[195]=function(){
/*+195:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+196:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+30.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+197:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+198:ILDC*/memint32[reg_sp4-16]=+100
/*+199:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+200:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+201:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-22)-GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+202:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+203:ILDC*/memint32[reg_sp4-16]=+1
/*+204:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+205:FLS*/memint32[reg_sp4-13]=GetFloat4(reg_sp4-26) <GetFloat4(reg_sp4-15)
/*+206:JMPZ*/if(memint32[reg_sp4-13]==0){reg_ip=295;}else{reg_ip=207;}
}
code[207]=function(){
/*+207:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+208:ILDC*/memint32[reg_sp4-14]=+30
/*+209:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+210:FMUL*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+211:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+25.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+212:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+213:CALL*/regs.push(214);reg_ip=182;
}
code[214]=function(){
/*+214:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+215:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+216:ILDC*/memint32[reg_sp4-16]=+50
/*+217:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+218:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+219:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+25.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+220:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+221:CALL*/regs.push(222);reg_ip=182;
}
code[222]=function(){
/*+222:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+223:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+224:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+225:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+226:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+227:NCALL*/SC_M();
/*+228:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+229:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+230:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+231:NCALL*/SC_L();
/*+232:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)-GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+233:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+234:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+235:NCALL*/SC_M();
/*+236:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+237:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+238:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+239:NCALL*/SC_L();
/*+240:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-24)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+241:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+242:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+243:NCALL*/SC_M();
/*+244:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-24)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+245:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+246:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+247:NCALL*/SC_L();
/*+248:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+250:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+251:NCALL*/SC_M();
/*+252:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+253:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+254:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+255:NCALL*/SC_L();
/*+256:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+257:FGR*/memint32[reg_sp4-14]=GetFloat4(reg_sp4-26) >GetFloat4(reg_sp4-16)
/*+258:JMPZ*/if(memint32[reg_sp4-14]==0){reg_ip=295;}else{reg_ip=259;}
}
code[259]=function(){
/*+259:ILDC*/memint32[reg_sp4-16]=+17
/*+260:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+261:FADD*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+262:ILDC*/memint32[reg_sp4-11]=+17
/*+263:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+264:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-24)+GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+265:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+266:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+267:NCALL*/SC_M();
/*+268:ILDC*/memint32[reg_sp4-16]=+17
/*+269:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+270:FSUB*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-22)-GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+271:ILDC*/memint32[reg_sp4-11]=+17
/*+272:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+273:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-24)+GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+275:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+276:NCALL*/SC_M();
/*+277:ILDC*/memint32[reg_sp4-16]=+17
/*+278:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+279:FADD*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+280:ILDC*/memint32[reg_sp4-11]=+17
/*+281:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+282:FSUB*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+283:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+284:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+285:NCALL*/SC_M();
/*+286:ILDC*/memint32[reg_sp4-16]=+17
/*+287:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+288:FSUB*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-22)-GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+289:ILDC*/memint32[reg_sp4-11]=+17
/*+290:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+291:FSUB*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+292:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+293:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+294:NCALL*/SC_M();;reg_ip=295;
}
code[295]=function(){
/*+295:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+296:FLS*/memint32[reg_sp4-14]=GetFloat4(reg_sp4-26) <GetFloat4(reg_sp4-16)
/*+297:FLDC*/{let addr=(reg_sp4-13);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+298:FGR*/memint32[reg_sp4-11]=GetFloat4(reg_sp4-26) >GetFloat4(reg_sp4-13)
/*+299:LAND*/memint32[reg_sp4-10]=memint32[reg_sp4-14]&&memint32[reg_sp4-11]
/*+300:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=304;}else{reg_ip=301;}
}
code[301]=function(){
/*+301:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+302:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+303:NCALL*/SC_M();;reg_ip=304;
}
code[304]=function(){
/*+304:ADDSP*/reg_sp+=-80;reg_sp4=reg_sp>>2;
/*+305:RET*/reg_ip=regs.pop();
}
code[306]=function(){
/*+306:ADDSP*/reg_sp+=+188;reg_sp4=reg_sp>>2;;reg_ip=307;
}
code[307]=function(){
/*+307:NCALL*/SC_Time();
/*+308:MOV*//*8*/{let dst=(reg_sp4-39);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+309:MOV*//*8*/{let dst=(reg_sp4-47);let src=(reg_sp4-39);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+310:ILDC*/memint32[reg_sp4-1]=-16777152
/*+311:NCALL*/SC_rgba32();
/*+312:NCALL*/SC_FillRT();
/*+313:NCALL*/SC_clear();
/*+314:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+315:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+316:NCALL*/SC_M();
/*+317:NCALL*/SC_fin();
/*+318:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+319:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+435.200012;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+320:NCALL*/SC_width();
/*+321:ILDC*/memint32[reg_sp4-1]=-15703904
/*+322:NCALL*/SC_rgba32();
/*+323:NCALL*/SC_stroke();
/*+324:ILDC*/memint32[reg_sp4-45]=+0
/*+325:NCALL*/SC_clear();
/*+326:ILDC*/memint32[+20]=+73661561
/*+327:ILDC*/memint32[reg_sp4-44]=+0;reg_ip=328;
}
code[328]=function(){
/*+328:ILDC*/memint32[reg_sp4-39]=+200
/*+329:LS*/memint32[reg_sp4-38]=memint32[reg_sp4-44] <memint32[reg_sp4-39]
/*+330:JMPZ*/if(memint32[reg_sp4-38]==0){reg_ip=364;}else{reg_ip=331;}
}
code[331]=function(){
/*+331:LEA*/memint32[reg_sp4-38]=+80
/*+332:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-38)];
/*+333:CALL*/regs.push(334);reg_ip=10;
}
code[334]=function(){
/*+334:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_sp4-1)];
/*+335:ILDC*/memint32[reg_sp4-37]=+512
/*+336:MOD*/memint32[reg_sp4-36]=memint32[reg_sp4-39] %memint32[reg_sp4-37]
/*+337:ILDC*/memint32[reg_sp4-35]=+100
/*+338:ADD*/memint32[reg_sp4-34]=memint32[reg_sp4-36]+memint32[reg_sp4-35]
/*+339:LEA*/memint32[reg_sp4-32]=+80
/*+340:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-32)];
/*+341:CALL*/regs.push(342);reg_ip=10;
}
code[342]=function(){
/*+342:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-1)];
/*+343:ILDC*/memint32[reg_sp4-31]=+512
/*+344:MOD*/memint32[reg_sp4-30]=memint32[reg_sp4-33] %memint32[reg_sp4-31]
/*+345:FLDC*/{let addr=(reg_sp4-29);cvtflt64[0]=+0.050000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+346:FMUL*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+347:LEA*/memint32[reg_sp4-24]=+80
/*+348:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-24)];
/*+349:CALL*/regs.push(350);reg_ip=10;
}
code[350]=function(){
/*+350:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-1)];
/*+351:ILDC*/memint32[reg_sp4-23]=+200
/*+352:MOD*/memint32[reg_sp4-22]=memint32[reg_sp4-25] %memint32[reg_sp4-23]
/*+353:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.005000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+354:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+355:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-19)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+356:FADD*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-27)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+357:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+358:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+359:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+360:CALL*/regs.push(361);reg_ip=191;
}
code[361]=function(){
/*+361:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_sp4-44)];
/*+362:INC*/memint32[reg_sp4-44]=memint32[reg_sp4-44]+1
/*+363:JMP*/reg_ip=328;
}
code[364]=function(){
/*+364:NCALL*/SC_fin();
/*+365:ILDC*/memint32[reg_sp4-1]=-1
/*+366:NCALL*/SC_rgba32();
/*+367:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+368:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+369:NCALL*/SC_width();
/*+370:NCALL*/SC_stroke();
/*+371:ILDC*/memint32[reg_sp4-39]=+226
/*+372:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+373:ILDC*/memint32[reg_sp4-37]=+12
/*+374:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+375:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+376:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+377:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+378:ILDC*/memint32[reg_sp4-5]=-65536
/*+379:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+380:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+381:CALL*/regs.push(382);reg_ip=32;
}
code[382]=function(){
/*+382:ILDC*/memint32[reg_sp4-39]=+14
/*+383:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-39]
/*+384:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-45)];
/*+385:ILDC*/memint32[reg_sp4-39]=+226
/*+386:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+387:ILDC*/memint32[reg_sp4-37]=+12
/*+388:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+389:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+390:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+391:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+392:ILDC*/memint32[reg_sp4-5]=-32768
/*+393:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+394:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+395:CALL*/regs.push(396);reg_ip=32;
}
code[396]=function(){
/*+396:ILDC*/memint32[reg_sp4-39]=+14
/*+397:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-39]
/*+398:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-45)];
/*+399:ILDC*/memint32[reg_sp4-39]=+226
/*+400:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+401:ILDC*/memint32[reg_sp4-37]=+12
/*+402:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+403:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+404:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+405:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+406:ILDC*/memint32[reg_sp4-5]=-256
/*+407:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+408:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+409:CALL*/regs.push(410);reg_ip=32;
}
code[410]=function(){
/*+410:ILDC*/memint32[reg_sp4-39]=+14
/*+411:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-39]
/*+412:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-45)];
/*+413:ILDC*/memint32[reg_sp4-39]=+226
/*+414:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+415:ILDC*/memint32[reg_sp4-37]=+12
/*+416:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+417:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+418:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+419:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+420:ILDC*/memint32[reg_sp4-5]=-16711936
/*+421:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+422:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+423:CALL*/regs.push(424);reg_ip=32;
}
code[424]=function(){
/*+424:ILDC*/memint32[reg_sp4-39]=+14
/*+425:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-39]
/*+426:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-45)];
/*+427:ILDC*/memint32[reg_sp4-39]=+226
/*+428:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+429:ILDC*/memint32[reg_sp4-37]=+12
/*+430:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+431:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+432:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+433:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+434:ILDC*/memint32[reg_sp4-5]=-14638849
/*+435:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+436:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+437:CALL*/regs.push(438);reg_ip=32;
}
code[438]=function(){
/*+438:ILDC*/memint32[reg_sp4-39]=+12
/*+439:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-39]
/*+440:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-45)];
/*+441:ILDC*/memint32[reg_sp4-39]=+226
/*+442:ADD*/memint32[reg_sp4-38]=memint32[reg_sp4-39]+memint32[reg_sp4-45]
/*+443:ILDC*/memint32[reg_sp4-37]=+12
/*+444:I2F*/{let addr=(reg_sp4-36);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+445:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+446:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+447:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+448:ILDC*/memint32[reg_sp4-5]=-10485505
/*+449:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+450:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+451:CALL*/regs.push(452);reg_ip=32;
}
code[452]=function(){
/*+452:NCALL*/SC_clear();
/*+453:ILDC*/memint32[reg_sp4-39]=+12
/*+454:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+455:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+456:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+457:NCALL*/SC_sin();
/*+458:MOV*//*8*/{let dst=(reg_sp4-34);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+459:FNEG*/{let addr=(reg_sp4-32);cvtflt64[0]=-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+460:ILDC*/memint32[reg_sp4-30]=+5
/*+461:I2F*/{let addr=(reg_sp4-29);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+462:FMUL*/{let addr=(reg_sp4-43);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+463:ILDC*/memint32[reg_sp4-39]=+12
/*+464:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+465:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+466:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+467:NCALL*/SC_cos();
/*+468:MOV*//*8*/{let dst=(reg_sp4-34);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+469:ILDC*/memint32[reg_sp4-32]=+3
/*+470:I2F*/{let addr=(reg_sp4-31);cvtflt64[0]=memint32[reg_sp4-32];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+471:FMUL*/{let addr=(reg_sp4-41);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+472:ILDC*/memint32[reg_sp4-39]=+200
/*+473:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+474:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+475:ILDC*/memint32[reg_sp4-34]=+270
/*+476:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+477:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+478:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+479:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+480:NCALL*/SC_M();
/*+481:ILDC*/memint32[reg_sp4-39]=+2
/*+482:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+483:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+484:ILDC*/memint32[reg_sp4-34]=+5
/*+485:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+486:FSUB*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)-GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+487:ILDC*/memint32[reg_sp4-29]=-40
/*+488:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+489:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+490:FNEG*/{let addr=(reg_sp4-24);cvtflt64[0]=-GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+491:ILDC*/memint32[reg_sp4-22]=+4
/*+492:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+493:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+494:ILDC*/memint32[reg_sp4-17]=+10
/*+495:I2F*/{let addr=(reg_sp4-16);cvtflt64[0]=memint32[reg_sp4-17];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+496:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-19)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+497:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+498:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+499:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+500:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+501:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+502:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:NCALL*/SC_c();
/*+504:ILDC*/memint32[reg_sp4-39]=+305
/*+505:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+506:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+507:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+508:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+235.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+509:NCALL*/SC_M();
/*+510:FNEG*/{let addr=(reg_sp4-39);cvtflt64[0]=-GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+511:FLDC*/{let addr=(reg_sp4-37);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+512:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-39)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+513:ILDC*/memint32[reg_sp4-33]=+5
/*+514:I2F*/{let addr=(reg_sp4-32);cvtflt64[0]=memint32[reg_sp4-33];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+515:FSUB*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-35)-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+517:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+518:NCALL*/SC_l();
/*+519:ILDC*/memint32[reg_sp4-39]=+305
/*+520:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+521:FSUB*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)-GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+522:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+523:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+315.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+524:NCALL*/SC_M();
/*+525:FNEG*/{let addr=(reg_sp4-39);cvtflt64[0]=-GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+526:FLDC*/{let addr=(reg_sp4-37);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+527:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-39)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+528:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+529:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-35);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+530:NCALL*/SC_l();
/*+531:NCALL*/SC_fin();
/*+532:ILDC*/memint32[reg_sp4-1]=-16777216
/*+533:NCALL*/SC_rgba32();
/*+534:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+535:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+536:NCALL*/SC_width();
/*+537:NCALL*/SC_stroke();
/*+538:ILDC*/memint32[reg_sp4-1]=-6250336
/*+539:NCALL*/SC_rgba32();
/*+540:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+541:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+542:NCALL*/SC_width();
/*+543:NCALL*/SC_stroke();
/*+544:NCALL*/SC_clear();
/*+545:ILDC*/memint32[reg_sp4-39]=+305
/*+546:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+547:FSUB*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)-GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+548:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+549:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+210.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+550:NCALL*/SC_M();
/*+551:FNEG*/{let addr=(reg_sp4-39);cvtflt64[0]=-GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+552:FLDC*/{let addr=(reg_sp4-37);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+553:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-39)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+554:ILDC*/memint32[reg_sp4-33]=+5
/*+555:I2F*/{let addr=(reg_sp4-32);cvtflt64[0]=memint32[reg_sp4-33];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+556:FSUB*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-35)-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+557:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+558:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+559:NCALL*/SC_l();
/*+560:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+1.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+561:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+562:ILDC*/memint32[reg_sp4-35]=+305
/*+563:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+564:FSUB*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+565:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+566:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+290.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+567:NCALL*/SC_M();
/*+568:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+569:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+570:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+571:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-37);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+572:NCALL*/SC_l();
/*+573:NCALL*/SC_fin();
/*+574:ILDC*/memint32[reg_sp4-1]=-16777216
/*+575:NCALL*/SC_rgba32();
/*+576:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+577:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+578:NCALL*/SC_width();
/*+579:NCALL*/SC_stroke();
/*+580:ILDC*/memint32[reg_sp4-1]=-6250336
/*+581:NCALL*/SC_rgba32();
/*+582:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+583:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+584:NCALL*/SC_width();
/*+585:NCALL*/SC_stroke();
/*+586:NCALL*/SC_clear();
/*+587:ILDC*/memint32[reg_sp4-39]=+200
/*+588:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+589:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+590:ILDC*/memint32[reg_sp4-34]=+210
/*+591:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+592:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+593:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+594:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+595:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+135.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+596:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+597:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+598:CALL*/regs.push(599);reg_ip=80;
}
code[599]=function(){
/*+599:NCALL*/SC_fin();
/*+600:ILDC*/memint32[reg_sp4-1]=-2047840
/*+601:NCALL*/SC_rgba32();
/*+602:NCALL*/SC_fill1();
/*+603:ILDC*/memint32[reg_sp4-1]=-16777216
/*+604:NCALL*/SC_rgba32();
/*+605:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+606:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+607:NCALL*/SC_width();
/*+608:NCALL*/SC_stroke();
/*+609:NCALL*/SC_clear();
/*+610:ILDC*/memint32[reg_sp4-1]=-28432
/*+611:NCALL*/SC_rgba32();
/*+612:ILDC*/memint32[reg_sp4-39]=+210
/*+613:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+614:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+615:ILDC*/memint32[reg_sp4-34]=+220
/*+616:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+617:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+618:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+619:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+620:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+115.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+621:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+622:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+623:CALL*/regs.push(624);reg_ip=80;
}
code[624]=function(){
/*+624:NCALL*/SC_fin();
/*+625:NCALL*/SC_fill1();
/*+626:NCALL*/SC_clear();
/*+627:ILDC*/memint32[reg_sp4-39]=+215
/*+628:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+629:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+630:ILDC*/memint32[reg_sp4-34]=+0
/*+631:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+632:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+633:ILDC*/memint32[reg_sp4-29]=+220
/*+634:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+635:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+636:ILDC*/memint32[reg_sp4-24]=+50
/*+637:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+638:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+639:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+640:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+641:NCALL*/SC_M();
/*+642:ILDC*/memint32[reg_sp4-39]=+215
/*+643:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+644:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+645:ILDC*/memint32[reg_sp4-34]=+10
/*+646:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+647:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+648:ILDC*/memint32[reg_sp4-29]=+220
/*+649:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+650:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+651:ILDC*/memint32[reg_sp4-24]=+10
/*+652:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+653:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+654:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+655:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+656:NCALL*/SC_M();
/*+657:ILDC*/memint32[reg_sp4-39]=+215
/*+658:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+659:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+660:ILDC*/memint32[reg_sp4-34]=+20
/*+661:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+662:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+663:ILDC*/memint32[reg_sp4-29]=+220
/*+664:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+665:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+666:ILDC*/memint32[reg_sp4-24]=+70
/*+667:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+668:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+669:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+670:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+671:NCALL*/SC_M();
/*+672:ILDC*/memint32[reg_sp4-39]=+215
/*+673:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+674:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+675:ILDC*/memint32[reg_sp4-34]=+30
/*+676:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+677:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+678:ILDC*/memint32[reg_sp4-29]=+220
/*+679:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+680:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+681:ILDC*/memint32[reg_sp4-24]=+40
/*+682:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+683:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+684:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+685:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+686:NCALL*/SC_M();
/*+687:ILDC*/memint32[reg_sp4-39]=+215
/*+688:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+689:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+690:ILDC*/memint32[reg_sp4-34]=+40
/*+691:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+692:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:ILDC*/memint32[reg_sp4-29]=+220
/*+694:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+695:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+696:ILDC*/memint32[reg_sp4-24]=+20
/*+697:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+698:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+699:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+700:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+701:NCALL*/SC_M();
/*+702:ILDC*/memint32[reg_sp4-39]=+215
/*+703:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+704:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+705:ILDC*/memint32[reg_sp4-34]=+50
/*+706:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+707:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+708:ILDC*/memint32[reg_sp4-29]=+220
/*+709:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+710:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+711:ILDC*/memint32[reg_sp4-24]=+50
/*+712:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+713:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+714:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+715:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+716:NCALL*/SC_M();
/*+717:ILDC*/memint32[reg_sp4-39]=+215
/*+718:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+719:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+720:ILDC*/memint32[reg_sp4-34]=+60
/*+721:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+722:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+723:ILDC*/memint32[reg_sp4-29]=+220
/*+724:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+725:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+726:ILDC*/memint32[reg_sp4-24]=+10
/*+727:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+728:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+729:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+730:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+731:NCALL*/SC_M();
/*+732:ILDC*/memint32[reg_sp4-39]=+215
/*+733:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+734:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+735:ILDC*/memint32[reg_sp4-34]=+70
/*+736:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+737:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+738:ILDC*/memint32[reg_sp4-29]=+220
/*+739:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+740:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+741:ILDC*/memint32[reg_sp4-24]=+60
/*+742:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+743:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+744:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+745:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+746:NCALL*/SC_M();
/*+747:ILDC*/memint32[reg_sp4-39]=+215
/*+748:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+749:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+750:ILDC*/memint32[reg_sp4-34]=+80
/*+751:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+752:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+753:ILDC*/memint32[reg_sp4-29]=+220
/*+754:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+755:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+756:ILDC*/memint32[reg_sp4-24]=+10
/*+757:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+758:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+759:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+760:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+761:NCALL*/SC_M();
/*+762:ILDC*/memint32[reg_sp4-39]=+215
/*+763:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+764:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+765:ILDC*/memint32[reg_sp4-34]=+90
/*+766:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+767:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-36)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+768:ILDC*/memint32[reg_sp4-29]=+220
/*+769:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-29];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+770:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+771:ILDC*/memint32[reg_sp4-24]=+20
/*+772:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+773:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+774:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+775:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+776:NCALL*/SC_M();
/*+777:NCALL*/SC_fin();
/*+778:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+779:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+780:NCALL*/SC_width();
/*+781:ILDC*/memint32[reg_sp4-1]=-53040
/*+782:NCALL*/SC_rgba32();
/*+783:NCALL*/SC_stroke();
/*+784:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+785:NCALL*/SC_miterlim();
/*+786:NCALL*/SC_clear();
/*+787:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+788:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+789:ILDC*/memint32[reg_sp4-35]=+285
/*+790:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+791:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+792:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+793:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+794:ILDC*/memint32[reg_sp4-26]=+260
/*+795:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+796:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+797:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+798:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+799:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+800:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+801:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+802:NCALL*/SC_M();
/*+803:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+55.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+804:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+38.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+805:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+55.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+806:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+807:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+30.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+808:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+809:NCALL*/SC_c();
/*+810:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-55.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+811:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+37.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+812:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+813:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+814:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+815:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+25.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+816:NCALL*/SC_c();
/*+817:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-22.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+818:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+819:NCALL*/SC_l();
/*+820:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+821:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+822:NCALL*/SC_l();
/*+823:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+824:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-16.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+825:NCALL*/SC_l();
/*+826:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+827:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-22.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+828:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+829:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-18.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+830:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+831:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+832:NCALL*/SC_c();
/*+833:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-15.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+834:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-16.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+835:NCALL*/SC_l();
/*+836:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+837:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+838:NCALL*/SC_l();
/*+839:NCALL*/SC_close();
/*+840:NCALL*/SC_fin();
/*+841:ILDC*/memint32[reg_sp4-1]=-6250336
/*+842:NCALL*/SC_rgba32();
/*+843:NCALL*/SC_fill1();
/*+844:ILDC*/memint32[reg_sp4-1]=-16777216
/*+845:NCALL*/SC_rgba32();
/*+846:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+847:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+848:NCALL*/SC_width();
/*+849:NCALL*/SC_stroke();
/*+850:NCALL*/SC_clear();
/*+851:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+852:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+853:ILDC*/memint32[reg_sp4-35]=+295
/*+854:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+855:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+856:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+857:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+858:ILDC*/memint32[reg_sp4-26]=+290
/*+859:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+860:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+861:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+862:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+863:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+864:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+865:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+866:NCALL*/SC_M();
/*+867:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+868:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+869:ILDC*/memint32[reg_sp4-35]=+355
/*+870:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+871:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+872:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+873:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+874:ILDC*/memint32[reg_sp4-26]=+290
/*+875:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+876:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+877:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+878:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+879:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+880:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+881:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+882:NCALL*/SC_M();
/*+883:NCALL*/SC_fin();
/*+884:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+885:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+886:NCALL*/SC_width();
/*+887:ILDC*/memint32[reg_sp4-1]=-1007456
/*+888:NCALL*/SC_rgba32();
/*+889:NCALL*/SC_stroke();
/*+890:NCALL*/SC_clear();
/*+891:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+892:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+893:ILDC*/memint32[reg_sp4-35]=+305
/*+894:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+895:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+896:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+897:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+898:ILDC*/memint32[reg_sp4-26]=+278
/*+899:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+900:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+901:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+902:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+903:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+904:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+905:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+906:NCALL*/SC_M();
/*+907:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+908:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+909:ILDC*/memint32[reg_sp4-35]=+348
/*+910:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+911:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+912:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+913:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+914:ILDC*/memint32[reg_sp4-26]=+278
/*+915:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+916:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+917:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+918:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+919:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+920:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+921:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+922:NCALL*/SC_M();
/*+923:NCALL*/SC_fin();
/*+924:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+925:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+926:NCALL*/SC_width();
/*+927:ILDC*/memint32[reg_sp4-1]=-16777216
/*+928:NCALL*/SC_rgba32();
/*+929:NCALL*/SC_stroke();
/*+930:NCALL*/SC_clear();
/*+931:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+932:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+933:ILDC*/memint32[reg_sp4-35]=+302
/*+934:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+935:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+936:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+937:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+938:ILDC*/memint32[reg_sp4-26]=+276
/*+939:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+940:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+941:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+942:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+943:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+944:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+945:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+946:NCALL*/SC_M();
/*+947:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+948:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+949:ILDC*/memint32[reg_sp4-35]=+345
/*+950:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+951:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+952:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+953:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+954:ILDC*/memint32[reg_sp4-26]=+276
/*+955:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+956:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+957:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+958:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+959:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+960:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+961:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+962:NCALL*/SC_M();
/*+963:NCALL*/SC_fin();
/*+964:ILDC*/memint32[reg_sp4-1]=-1
/*+965:NCALL*/SC_rgba32();
/*+966:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+967:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+968:NCALL*/SC_width();
/*+969:NCALL*/SC_stroke();
/*+970:NCALL*/SC_clear();
/*+971:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+972:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+973:ILDC*/memint32[reg_sp4-35]=+307
/*+974:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+975:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+976:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+977:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+978:ILDC*/memint32[reg_sp4-26]=+290
/*+979:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+980:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+981:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+982:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+983:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+984:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+985:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+986:NCALL*/SC_M();
/*+987:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+988:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+989:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+990:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+991:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+992:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+993:NCALL*/SC_c();
/*+994:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+995:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+996:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+997:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+998:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+13.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+999:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1000:NCALL*/SC_c();
/*+1001:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1002:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1003:ILDC*/memint32[reg_sp4-35]=+330
/*+1004:I2F*/{let addr=(reg_sp4-34);cvtflt64[0]=memint32[reg_sp4-35];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1005:FADD*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1006:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1007:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1008:ILDC*/memint32[reg_sp4-26]=+282
/*+1009:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1010:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1011:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1012:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-43)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1013:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1014:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1015:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1016:NCALL*/SC_M();
/*+1017:NCALL*/SC_fin();
/*+1018:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1019:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1020:NCALL*/SC_width();
/*+1021:ILDC*/memint32[reg_sp4-1]=-16777216
/*+1022:NCALL*/SC_rgba32();
/*+1023:NCALL*/SC_stroke();
/*+1024:INT*/int_code=+10;interrupt=true;;reg_ip=1025;
}
code[1025]=function(){
/*+1025:JMP*/reg_ip=307;
}
code[1026]=function(){
/*+1026:ILDC*/memint32[reg_sp4-48]=+0
/*+1027:ADDSP*/reg_sp+=-188;reg_sp4=reg_sp>>2;
/*+1028:RET*/reg_ip=regs.pop();
}
code[1029]=function(){
/*+1029:ADDSP*/reg_sp+=+4;reg_sp4=reg_sp>>2;
/*+1030:ILDC*/memint32[+20]=+12736347
/*+1031:CALL*/regs.push(1032);reg_ip=306;
}
code[1032]=function(){
/*+1032:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-1)];
/*+1033:ADDSP*/reg_sp+=-4;reg_sp4=reg_sp>>2;
/*+1034:FIN*/interrupt=true;quit=true;
}
let start_addr=1029
let start_rsp=88
let graphics=1
let G_SCREEN_WIDTH=512
let G_SCREEN_HEIGHT=512
