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
/*+10:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+11:ILDC*/memint32[reg_sp4-5]=+0
/*+12:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-5];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+13:FLS*/memint32[reg_sp4-2]=GetFloat4(reg_sp4-9) <GetFloat4(reg_sp4-4)
/*+14:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=17;}else{reg_ip=15;}
}
code[15]=function(){
/*+15:ILDC*/memint32[reg_sp4-1]=-1
/*+16:JMP*/reg_ip=18;
}
code[17]=function(){
/*+17:ILDC*/memint32[reg_sp4-1]=+1;reg_ip=18;
}
code[18]=function(){
/*+18:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-1];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+19:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+20:RET*/reg_ip=regs.pop();
}
code[21]=function(){
/*+21:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+22:ILDC*/memint32[reg_sp4-8]=+0
/*+23:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-8];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+24:FLS*/memint32[reg_sp4-5]=GetFloat4(reg_sp4-12) <GetFloat4(reg_sp4-7)
/*+25:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=29;}else{reg_ip=26;}
}
code[26]=function(){
/*+26:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+27:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+28:JMP*/reg_ip=30;
}
code[29]=function(){
/*+29:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=30;
}
code[30]=function(){
/*+30:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+31:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+32:RET*/reg_ip=regs.pop();
}
code[33]=function(){
/*+33:ADDSP*/reg_sp+=+136;reg_sp4=reg_sp>>2;
/*+34:ILDC*/memint32[reg_sp4-34]=+0;reg_ip=35;
}
code[35]=function(){
/*+35:NCALL*/SC_clear();
/*+36:ILDC*/memint32[reg_sp4-33]=+0;reg_ip=37;
}
code[37]=function(){
/*+37:ILDC*/memint32[reg_sp4-26]=+10000
/*+38:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-33] <memint32[reg_sp4-26]
/*+39:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=76;}else{reg_ip=40;}
}
code[40]=function(){
/*+40:MOV*//*8*/{let dst=(reg_sp4-32);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:MOV*//*8*/{let dst=(reg_sp4-30);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+42:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+43:CALL*/regs.push(44);reg_ip=10;
}
code[44]=function(){
/*+44:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+45:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-42)*GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+47:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+48:CALL*/regs.push(49);reg_ip=21;
}
code[49]=function(){
/*+49:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+50:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+51:NCALL*/SC_sqrt();
/*+52:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+53:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+54:FSUB*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+55:FSUB*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat4(reg_sp4-40)-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+56:ILDC*/memint32[reg_sp4-26]=+3
/*+57:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+58:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat4(reg_sp4-25);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+59:ILDC*/memint32[reg_sp4-21]=+512
/*+60:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+61:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+62:ILDC*/memint32[reg_sp4-16]=+3
/*+63:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-38)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+65:ILDC*/memint32[reg_sp4-11]=+512
/*+66:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+67:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+69:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+70:NCALL*/SC_M();
/*+71:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-34)];
/*+72:INC*/memint32[reg_sp4-34]=memint32[reg_sp4-34]+1
/*+73:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-33)];
/*+74:INC*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+1
/*+75:JMP*/reg_ip=37;
}
code[76]=function(){
/*+76:NCALL*/SC_fin();
/*+77:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+78:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+79:NCALL*/SC_width();
/*+80:I2F*/{let addr=(reg_sp4-26);cvtflt64[0]=memint32[reg_sp4-45];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:I2F*/{let addr=(reg_sp4-24);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+82:FDIV*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-24)/GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+83:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+84:ILDC*/memint32[reg_sp4-24]=+1
/*+85:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+86:FSUB*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-23)-GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+88:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+89:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+90:NCALL*/SC_rgb();
/*+91:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+92:NCALL*/SC_alpha();
/*+93:NCALL*/SC_stroke();
/*+94:GR*/memint32[reg_sp4-26]=memint32[reg_sp4-34] >memint32[reg_sp4-45]
/*+95:JMPZ*/if(memint32[reg_sp4-26]==0){reg_ip=97;}else{reg_ip=96;}
}
code[96]=function(){
/*+96:JMP*/reg_ip=99;
}
code[97]=function(){
/*+97:INT*/int_code=+10;interrupt=true;;reg_ip=98;
}
code[98]=function(){
/*+98:JMP*/reg_ip=35;
}
code[99]=function(){
/*+99:ADDSP*/reg_sp+=-136;reg_sp4=reg_sp>>2;
/*+100:RET*/reg_ip=regs.pop();
}
code[101]=function(){
/*+101:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+102:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+103:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+104:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.050000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+105:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+106:NCALL*/SC_rgba();
/*+107:NCALL*/SC_FillRT();
/*+108:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+109:RET*/reg_ip=regs.pop();
}
code[110]=function(){
/*+110:ADDSP*/reg_sp+=+44;reg_sp4=reg_sp>>2;;reg_ip=111;
}
code[111]=function(){
/*+111:CALL*/regs.push(112);reg_ip=101;
}
code[112]=function(){
/*+112:ILDC*/memint32[reg_sp4-11]=+500000
/*+113:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+114:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+30.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+116:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+117:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+118:CALL*/regs.push(119);reg_ip=33;
}
code[119]=function(){
/*+119:CALL*/regs.push(120);reg_ip=101;
}
code[120]=function(){
/*+120:ILDC*/memint32[reg_sp4-11]=+500000
/*+121:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+122:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+123:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+30.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+124:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+125:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+126:CALL*/regs.push(127);reg_ip=33;
}
code[127]=function(){
/*+127:CALL*/regs.push(128);reg_ip=101;
}
code[128]=function(){
/*+128:ILDC*/memint32[reg_sp4-11]=+500000
/*+129:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+130:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+131:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+132:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+133:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+134:CALL*/regs.push(135);reg_ip=33;
}
code[135]=function(){
/*+135:JMP*/reg_ip=111;
}
code[136]=function(){
/*+136:ILDC*/memint32[reg_sp4-12]=+0
/*+137:ADDSP*/reg_sp+=-44;reg_sp4=reg_sp>>2;
/*+138:RET*/reg_ip=regs.pop();
}
let start_addr=110
let start_rsp=88
let graphics=1
let G_SCREEN_WIDTH=1024
let G_SCREEN_HEIGHT=1024
