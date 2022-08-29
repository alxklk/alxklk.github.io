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
\-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255
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
/*+11:ILDC*/memint32[(reg_sp-24)>>2]=+1103515245
/*+12:MUL*/memint32[(reg_sp-20)>>2]=memint32[(+72)>>2]*memint32[(reg_sp-24)>>2]
/*+13:ILDC*/memint32[(reg_sp-16)>>2]=+12345
/*+14:ADD*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-16)>>2]
/*+15:ILDC*/memint32[(reg_sp-8)>>2]=+134217727
/*+16:AND*/memint32[(+72)>>2]=memint32[(reg_sp-12)>>2]&memint32[(reg_sp-8)>>2]
/*+17:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(+72)>>2];
/*+18:ADDSP*/reg_sp+=-24;
/*+19:RET*/reg_ip=regs.pop();
}
code[20]=function(){
/*+20:ADDSP*/reg_sp+=+40;
/*+21:CALL*/regs.push(22);reg_ip=10;
}
code[22]=function(){
/*+22:MOV*//*4*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-4)>>2];
/*+23:ILDC*/memint32[(reg_sp-36)>>2]=+11
/*+24:SHR*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-40)>>2]>>memint32[(reg_sp-36)>>2]
/*+25:FLDC*/{let addr=(reg_sp-28)>>2;cvtflt64[0]=+65536.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+26:I2F*/{let addr=(reg_sp-20)>>2;cvtflt64[0]=memint32[(reg_sp-32)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+27:FDIV*/{let addr=(reg_sp-12)>>2;cvtflt64[0]=GetFloat(reg_sp-20)/GetFloat(reg_sp-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+28:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-12)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+29:ADDSP*/reg_sp+=-40;
/*+30:RET*/reg_ip=regs.pop();
}
code[31]=function(){
/*+31:ADDSP*/reg_sp+=+588;
/*+32:ILDC*/memint32[(reg_sp-588)>>2]=-1
/*+33:ILDC*/memint32[(reg_sp-536)>>2]=+0;reg_ip=34;
}
code[34]=function(){
/*+34:ILDC*/memint32[(reg_sp-376)>>2]=+6
/*+35:LS*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-536)>>2] <memint32[(reg_sp-376)>>2]
/*+36:JMPZ*/if(memint32[(reg_sp-372)>>2]==0){reg_ip=50;}else{reg_ip=37;}
}
code[37]=function(){
/*+37:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-584
/*+38:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+39:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-536)>>2])*(memint32[(reg_sp-372)>>2])
/*+40:CALL*/regs.push(41);reg_ip=20;
}
code[41]=function(){
/*+41:MOV*//*8*/{let dst=(reg_sp-368)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+42:FLDC*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+43:FMUL*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=GetFloat(reg_sp-368)*GetFloat(reg_sp-360);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+44:ILDC*/memint32[(reg_sp-344)>>2]=+30
/*+45:I2F*/{let addr=(reg_sp-340)>>2;cvtflt64[0]=memint32[(reg_sp-344)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:FSUB*/{let addr=(memint32[(reg_sp-376)>>2])>>2;cvtflt64[0]=GetFloat(reg_sp-340)-GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+47:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-536)>>2];
/*+48:INC*/memint32[(reg_sp-536)>>2]=memint32[(reg_sp-536)>>2]+1
/*+49:JMP*/reg_ip=34;
}
code[50]=function(){
/*+50:NCALL*/SC_Time();
/*+51:MOV*//*8*/{let dst=(reg_sp-376)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+52:ILDC*/memint32[(reg_sp-368)>>2]=+2
/*+53:I2F*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=memint32[(reg_sp-368)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+54:FMUL*/{let addr=(+64)>>2;cvtflt64[0]=GetFloat(reg_sp-376)*GetFloat(reg_sp-364);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+55:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+56:FLDC*/{let addr=(reg_sp-16)>>2;cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+57:FLDC*/{let addr=(reg_sp-8)>>2;cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+58:NCALL*/SC_rgb();
/*+59:NCALL*/SC_FillRT();
/*+60:ILDC*/memint32[(reg_sp-436)>>2]=+0;reg_ip=61;
}
code[61]=function(){
/*+61:ILDC*/memint32[(reg_sp-376)>>2]=+6
/*+62:LS*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-436)>>2] <memint32[(reg_sp-376)>>2]
/*+63:JMPZ*/if(memint32[(reg_sp-372)>>2]==0){reg_ip=75;}else{reg_ip=64;}
}
code[64]=function(){
/*+64:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-532
/*+65:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+66:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-436)>>2])*(memint32[(reg_sp-372)>>2])
/*+67:FLDC*/{let addr=(memint32[(reg_sp-376)>>2])>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-484
/*+69:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+70:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-436)>>2])*(memint32[(reg_sp-372)>>2])
/*+71:FLDC*/{let addr=(memint32[(reg_sp-376)>>2])>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-436)>>2];
/*+73:INC*/memint32[(reg_sp-436)>>2]=memint32[(reg_sp-436)>>2]+1
/*+74:JMP*/reg_ip=61;
}
code[75]=function(){
/*+75:FLDC*/{let addr=(reg_sp-432)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=76;
}
code[76]=function(){
/*+76:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+30.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+77:FLS*/memint32[(reg_sp-368)>>2]=GetFloat(reg_sp-432) <GetFloat(reg_sp-376)
/*+78:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=354;}else{reg_ip=79;}
}
code[79]=function(){
/*+79:ILDC*/memint32[(reg_sp-424)>>2]=+0;reg_ip=80;
}
code[80]=function(){
/*+80:ILDC*/memint32[(reg_sp-376)>>2]=+6
/*+81:LS*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-424)>>2] <memint32[(reg_sp-376)>>2]
/*+82:JMPZ*/if(memint32[(reg_sp-372)>>2]==0){reg_ip=350;}else{reg_ip=83;}
}
code[83]=function(){
/*+83:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-584
/*+84:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+85:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+86:FGR*/memint32[(reg_sp-368)>>2]=GetFloat(reg_sp-432) >GetFloat(memint32[(reg_sp-376)>>2])
/*+87:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=89;}else{reg_ip=88;}
}
code[88]=function(){
/*+88:JMP*/reg_ip=347;
}
code[89]=function(){
/*+89:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-584
/*+90:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+91:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+92:FDIV*/{let addr=(reg_sp-420)>>2;cvtflt64[0]=GetFloat(reg_sp-432)/GetFloat(memint32[(reg_sp-376)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+93:ILDC*/memint32[(reg_sp-412)>>2]=+0
/*+94:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+95:FSUB*/{let addr=(reg_sp-368)>>2;cvtflt64[0]=GetFloat(reg_sp-376)-GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+96:FLDC*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+97:FDIV*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=GetFloat(reg_sp-360)/GetFloat(reg_sp-368);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-352)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+99:NCALL*/SC_cos();
/*+100:MOV*//*8*/{let dst=(reg_sp-344)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+101:MOV*//*8*/{let dst=(reg_sp-408)>>2;let src=(reg_sp-344)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+102:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+103:FLS*/memint32[(reg_sp-368)>>2]=GetFloat(reg_sp-408) <GetFloat(reg_sp-376)
/*+104:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=108;}else{reg_ip=105;}
}
code[105]=function(){
/*+105:FNEG*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=-GetFloat(reg_sp-408);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+106:MOV*//*8*/{let dst=(reg_sp-356)>>2;let src=(reg_sp-364)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+107:JMP*/reg_ip=109;
}
code[108]=function(){
/*+108:MOV*//*8*/{let dst=(reg_sp-356)>>2;let src=(reg_sp-408)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=109;
}
code[109]=function(){
/*+109:MOV*//*8*/{let dst=(reg_sp-408)>>2;let src=(reg_sp-356)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+110:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+111:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-408)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+112:NCALL*/SC_pow();
/*+113:MOV*//*8*/{let dst=(reg_sp-376)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+114:MOV*//*8*/{let dst=(reg_sp-408)>>2;let src=(reg_sp-376)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+115:ILDC*/memint32[(reg_sp-376)>>2]=+255
/*+116:ILDC*/memint32[(reg_sp-372)>>2]=+24
/*+117:SHL*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-372)>>2]
/*+118:OR*/memint32[(reg_sp-412)>>2]=memint32[(reg_sp-412)>>2]|memint32[(reg_sp-368)>>2]
/*+119:MOV*//*4*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-412)>>2];
/*+120:FLDC*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:FMUL*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(+64)*GetFloat(reg_sp-372);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+122:ILDC*/memint32[(reg_sp-356)>>2]=+14
/*+123:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+124:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-364);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+125:FLDC*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=+1.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+126:FMUL*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-336);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+127:FADD*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+128:I2F*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+129:FADD*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-320)+GetFloat(reg_sp-312);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+130:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-304)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+131:NCALL*/SC_sin();
/*+132:MOV*//*8*/{let dst=(reg_sp-296)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:FLDC*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+134:FMUL*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=GetFloat(reg_sp-288)*GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+135:FLDC*/{let addr=(reg_sp-272)>>2;cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:FADD*/{let addr=(reg_sp-264)>>2;cvtflt64[0]=GetFloat(reg_sp-280)+GetFloat(reg_sp-272);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:FMUL*/{let addr=(reg_sp-256)>>2;cvtflt64[0]=GetFloat(reg_sp-408)*GetFloat(reg_sp-264);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:F2I*/memint32[(reg_sp-376)>>2]=GetFloat(reg_sp-256)
/*+139:OR*/memint32[(reg_sp-412)>>2]=memint32[(reg_sp-412)>>2]|memint32[(reg_sp-376)>>2]
/*+140:MOV*//*4*/memint32[(reg_sp-248)>>2]=memint32[(reg_sp-412)>>2];
/*+141:FLDC*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+142:FMUL*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(+64)*GetFloat(reg_sp-372);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+143:ILDC*/memint32[(reg_sp-356)>>2]=+41
/*+144:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+145:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-364);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+146:FLDC*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=+1.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+147:FMUL*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-336);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+148:FADD*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+149:I2F*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+150:FADD*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-320)+GetFloat(reg_sp-312);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-304)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+152:NCALL*/SC_sin();
/*+153:MOV*//*8*/{let dst=(reg_sp-296)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+154:FLDC*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+155:FMUL*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=GetFloat(reg_sp-288)*GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+156:FLDC*/{let addr=(reg_sp-272)>>2;cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+157:FADD*/{let addr=(reg_sp-264)>>2;cvtflt64[0]=GetFloat(reg_sp-280)+GetFloat(reg_sp-272);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+158:FMUL*/{let addr=(reg_sp-256)>>2;cvtflt64[0]=GetFloat(reg_sp-408)*GetFloat(reg_sp-264);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:F2I*/memint32[(reg_sp-376)>>2]=GetFloat(reg_sp-256)
/*+160:ILDC*/memint32[(reg_sp-248)>>2]=+8
/*+161:SHL*/memint32[(reg_sp-244)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-248)>>2]
/*+162:OR*/memint32[(reg_sp-412)>>2]=memint32[(reg_sp-412)>>2]|memint32[(reg_sp-244)>>2]
/*+163:MOV*//*4*/memint32[(reg_sp-240)>>2]=memint32[(reg_sp-412)>>2];
/*+164:FLDC*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+165:FMUL*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(+64)*GetFloat(reg_sp-372);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+166:ILDC*/memint32[(reg_sp-356)>>2]=+23
/*+167:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+168:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-364);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+169:FLDC*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+170:FMUL*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-336);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+171:FADD*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+172:I2F*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+173:FADD*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-320)+GetFloat(reg_sp-312);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+174:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-304)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+175:NCALL*/SC_sin();
/*+176:MOV*//*8*/{let dst=(reg_sp-296)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+177:FLDC*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+178:FMUL*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=GetFloat(reg_sp-288)*GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:FLDC*/{let addr=(reg_sp-272)>>2;cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:FADD*/{let addr=(reg_sp-264)>>2;cvtflt64[0]=GetFloat(reg_sp-280)+GetFloat(reg_sp-272);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+181:FMUL*/{let addr=(reg_sp-256)>>2;cvtflt64[0]=GetFloat(reg_sp-408)*GetFloat(reg_sp-264);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+182:F2I*/memint32[(reg_sp-376)>>2]=GetFloat(reg_sp-256)
/*+183:ILDC*/memint32[(reg_sp-248)>>2]=+16
/*+184:SHL*/memint32[(reg_sp-244)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-248)>>2]
/*+185:OR*/memint32[(reg_sp-412)>>2]=memint32[(reg_sp-412)>>2]|memint32[(reg_sp-244)>>2]
/*+186:MOV*//*4*/memint32[(reg_sp-240)>>2]=memint32[(reg_sp-412)>>2];
/*+187:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:FMUL*/{let addr=(reg_sp-368)>>2;cvtflt64[0]=GetFloat(+64)*GetFloat(reg_sp-376);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+189:FLDC*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:FDIV*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)/GetFloat(reg_sp-360);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+192:FLDC*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+193:FMUL*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=GetFloat(reg_sp-344)*GetFloat(reg_sp-336);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+194:FLDC*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+195:FMUL*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=GetFloat(reg_sp-328)*GetFloat(reg_sp-320);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+196:FADD*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-368)+GetFloat(reg_sp-312);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+197:ILDC*/memint32[(reg_sp-296)>>2]=+12
/*+198:I2F*/{let addr=(reg_sp-292)>>2;cvtflt64[0]=memint32[(reg_sp-296)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+199:FMUL*/{let addr=(reg_sp-284)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-292);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+200:FLDC*/{let addr=(reg_sp-276)>>2;cvtflt64[0]=+1.710000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+201:I2F*/{let addr=(reg_sp-268)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+202:FMUL*/{let addr=(reg_sp-260)>>2;cvtflt64[0]=GetFloat(reg_sp-268)*GetFloat(reg_sp-276);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+203:FLDC*/{let addr=(reg_sp-252)>>2;cvtflt64[0]=+11.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+204:FADD*/{let addr=(reg_sp-244)>>2;cvtflt64[0]=GetFloat(reg_sp-252)+GetFloat(reg_sp-260);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+205:FMUL*/{let addr=(reg_sp-236)>>2;cvtflt64[0]=GetFloat(reg_sp-284)*GetFloat(reg_sp-244);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+206:FLDC*/{let addr=(reg_sp-228)>>2;cvtflt64[0]=+0.050000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+207:FMUL*/{let addr=(reg_sp-220)>>2;cvtflt64[0]=GetFloat(reg_sp-236)*GetFloat(reg_sp-228);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+208:FLDC*/{let addr=(reg_sp-212)>>2;cvtflt64[0]=+1.870000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+209:I2F*/{let addr=(reg_sp-204)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+210:FMUL*/{let addr=(reg_sp-196)>>2;cvtflt64[0]=GetFloat(reg_sp-204)*GetFloat(reg_sp-212);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+211:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=+26.299999;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+212:FADD*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=GetFloat(reg_sp-188)+GetFloat(reg_sp-196);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+213:FMUL*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=GetFloat(+64)*GetFloat(reg_sp-180);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+214:FLDC*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=+0.020000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+215:FMUL*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=GetFloat(reg_sp-172)*GetFloat(reg_sp-164);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+216:FSUB*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-220)-GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+217:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+3.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+218:I2F*/{let addr=(reg_sp-132)>>2;cvtflt64[0]=memint32[(reg_sp-424)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+219:FMUL*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=GetFloat(reg_sp-132)*GetFloat(reg_sp-140);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+220:FADD*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=GetFloat(reg_sp-148)+GetFloat(reg_sp-124);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+221:ILDC*/memint32[(reg_sp-108)>>2]=+117
/*+222:I2F*/{let addr=(reg_sp-104)>>2;cvtflt64[0]=memint32[(reg_sp-108)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+223:FADD*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_sp-116)+GetFloat(reg_sp-104);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+224:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+225:NCALL*/SC_sin();
/*+226:MOV*//*8*/{let dst=(reg_sp-88)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+227:FMUL*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_sp-88)*GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+228:ILDC*/memint32[(reg_sp-72)>>2]=+5
/*+229:I2F*/{let addr=(reg_sp-68)>>2;cvtflt64[0]=memint32[(reg_sp-72)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+230:FMUL*/{let addr=(reg_sp-60)>>2;cvtflt64[0]=GetFloat(reg_sp-80)*GetFloat(reg_sp-68);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+231:FADD*/{let addr=(reg_sp-400)>>2;cvtflt64[0]=GetFloat(reg_sp-304)+GetFloat(reg_sp-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+232:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-532
/*+233:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+234:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+235:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-400)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+236:NCALL*/SC_sin();
/*+237:MOV*//*8*/{let dst=(reg_sp-368)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+238:FLDC*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+239:FMUL*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=GetFloat(reg_sp-368)*GetFloat(reg_sp-360);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+240:FADD*/{let addr=(memint32[(reg_sp-376)>>2])>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-376)>>2])+GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+241:MOV*/{let addr=memint32[(reg_sp-376)>>2];mem8.copyWithin(reg_sp-344,addr,addr+8);}
/*+242:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-484
/*+243:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+244:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+245:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-400)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+246:NCALL*/SC_cos();
/*+247:MOV*//*8*/{let dst=(reg_sp-368)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+248:FLDC*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:FMUL*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=GetFloat(reg_sp-368)*GetFloat(reg_sp-360);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+250:FADD*/{let addr=(memint32[(reg_sp-376)>>2])>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-376)>>2])+GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+251:MOV*/{let addr=memint32[(reg_sp-376)>>2];mem8.copyWithin(reg_sp-344,addr,addr+8);}
/*+252:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-532
/*+253:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+254:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+255:MOV*/{let addr=memint32[(reg_sp-376)>>2];mem8.copyWithin(reg_sp-392,addr,addr+8);}
/*+256:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-484
/*+257:ILDC*/memint32[(reg_sp-372)>>2]=+8
/*+258:MADD*/memint32[(reg_sp-376)>>2]=(memint32[(reg_sp-376)>>2])+(memint32[(reg_sp-424)>>2])*(memint32[(reg_sp-372)>>2])
/*+259:MOV*/{let addr=memint32[(reg_sp-376)>>2];mem8.copyWithin(reg_sp-384,addr,addr+8);}
/*+260:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+261:FSUB*/{let addr=(reg_sp-368)>>2;cvtflt64[0]=GetFloat(reg_sp-376)-GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+262:FMUL*/{let addr=(reg_sp-360)>>2;cvtflt64[0]=GetFloat(reg_sp-408)*GetFloat(reg_sp-408);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+263:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+264:FMUL*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-360)*GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+265:FADD*/{let addr=(reg_sp-420)>>2;cvtflt64[0]=GetFloat(reg_sp-368)+GetFloat(reg_sp-344);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+266:ILDC*/memint32[(reg_sp-376)>>2]=+320
/*+267:I2F*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=memint32[(reg_sp-376)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+268:FADD*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(reg_sp-372)+GetFloat(reg_sp-392);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+269:ILDC*/memint32[(reg_sp-356)>>2]=+240
/*+270:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+271:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-384);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+272:ILDC*/memint32[(reg_sp-336)>>2]=+2
/*+273:I2F*/{let addr=(reg_sp-332)>>2;cvtflt64[0]=memint32[(reg_sp-336)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:FMUL*/{let addr=(reg_sp-324)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-332);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+275:FADD*/{let addr=(reg_sp-316)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-324);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+276:FLDC*/{let addr=(reg_sp-308)>>2;cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+277:FMUL*/{let addr=(reg_sp-300)>>2;cvtflt64[0]=GetFloat(reg_sp-308)*GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+278:ILDC*/memint32[(reg_sp-292)>>2]=+1
/*+279:I2F*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=memint32[(reg_sp-292)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+280:FADD*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=GetFloat(reg_sp-300)+GetFloat(reg_sp-288);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+281:FLDC*/{let addr=(reg_sp-268)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+282:FADD*/{let addr=(reg_sp-260)>>2;cvtflt64[0]=GetFloat(reg_sp-268)+GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+283:ILDC*/memint32[(reg_sp-252)>>2]=+80
/*+284:I2F*/{let addr=(reg_sp-248)>>2;cvtflt64[0]=memint32[(reg_sp-252)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+285:FMUL*/{let addr=(reg_sp-240)>>2;cvtflt64[0]=GetFloat(reg_sp-248)*GetFloat(reg_sp-260);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+286:F2I*/memint32[(reg_sp-272)>>2]=GetFloat(reg_sp-240)
/*+287:ILDC*/memint32[(reg_sp-232)>>2]=+24
/*+288:SHL*/memint32[(reg_sp-228)>>2]=memint32[(reg_sp-272)>>2]<<memint32[(reg_sp-232)>>2]
/*+289:MOV*//*4*/memint32[(reg_sp-44)>>2]=memint32[(reg_sp-228)>>2];
/*+290:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-280)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+291:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+292:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+293:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-316)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+294:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_sp-364)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+295:NCALL*/SC_Circle();
/*+296:ILDC*/memint32[(reg_sp-376)>>2]=+320
/*+297:I2F*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=memint32[(reg_sp-376)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+298:FADD*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(reg_sp-372)+GetFloat(reg_sp-392);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+299:ILDC*/memint32[(reg_sp-356)>>2]=+240
/*+300:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+301:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-384);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+302:ILDC*/memint32[(reg_sp-336)>>2]=+1
/*+303:I2F*/{let addr=(reg_sp-332)>>2;cvtflt64[0]=memint32[(reg_sp-336)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+304:FADD*/{let addr=(reg_sp-324)>>2;cvtflt64[0]=GetFloat(reg_sp-420)+GetFloat(reg_sp-332);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+305:FLDC*/{let addr=(reg_sp-316)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+306:FADD*/{let addr=(reg_sp-308)>>2;cvtflt64[0]=GetFloat(reg_sp-420)+GetFloat(reg_sp-316);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+307:ILDC*/memint32[(reg_sp-300)>>2]=+2
/*+308:I2F*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=memint32[(reg_sp-300)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+309:FMUL*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-296)*GetFloat(reg_sp-308);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+310:MOV*//*4*/memint32[(reg_sp-44)>>2]=memint32[(reg_sp-412)>>2];
/*+311:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-288)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+312:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-324)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+313:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-344)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+315:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_sp-364)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+316:NCALL*/SC_Circle();
/*+317:ILDC*/memint32[(reg_sp-376)>>2]=+320
/*+318:I2F*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=memint32[(reg_sp-376)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+319:FADD*/{let addr=(reg_sp-364)>>2;cvtflt64[0]=GetFloat(reg_sp-372)+GetFloat(reg_sp-392);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+320:ILDC*/memint32[(reg_sp-356)>>2]=+240
/*+321:I2F*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=memint32[(reg_sp-356)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+322:FADD*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=GetFloat(reg_sp-352)+GetFloat(reg_sp-384);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+323:FLDC*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+324:FMUL*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=GetFloat(reg_sp-420)*GetFloat(reg_sp-336);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+325:FSUB*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-344)-GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+326:FLDC*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+327:FMUL*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-312)*GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+328:FLDC*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+329:FADD*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-304)+GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+330:FLDC*/{let addr=(reg_sp-276)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+331:FADD*/{let addr=(reg_sp-268)>>2;cvtflt64[0]=GetFloat(reg_sp-276)+GetFloat(reg_sp-420);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+332:ILDC*/memint32[(reg_sp-260)>>2]=+128
/*+333:I2F*/{let addr=(reg_sp-256)>>2;cvtflt64[0]=memint32[(reg_sp-260)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:FMUL*/{let addr=(reg_sp-248)>>2;cvtflt64[0]=GetFloat(reg_sp-256)*GetFloat(reg_sp-268);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+335:F2I*/memint32[(reg_sp-280)>>2]=GetFloat(reg_sp-248)
/*+336:ILDC*/memint32[(reg_sp-240)>>2]=+24
/*+337:SHL*/memint32[(reg_sp-236)>>2]=memint32[(reg_sp-280)>>2]<<memint32[(reg_sp-240)>>2]
/*+338:ILDC*/memint32[(reg_sp-232)>>2]=+16777215
/*+339:OR*/memint32[(reg_sp-228)>>2]=memint32[(reg_sp-236)>>2]|memint32[(reg_sp-232)>>2]
/*+340:MOV*//*4*/memint32[(reg_sp-44)>>2]=memint32[(reg_sp-228)>>2];
/*+341:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+342:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-288)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+343:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+344:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-320)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+345:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_sp-364)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+346:NCALL*/SC_Circle();;reg_ip=347;
}
code[347]=function(){
/*+347:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-424)>>2];
/*+348:INC*/memint32[(reg_sp-424)>>2]=memint32[(reg_sp-424)>>2]+1
/*+349:JMP*/reg_ip=80;
}
code[350]=function(){
/*+350:FLDC*/{let addr=(reg_sp-376)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+351:FADD*/{let addr=(reg_sp-432)>>2;cvtflt64[0]=GetFloat(reg_sp-432)+GetFloat(reg_sp-376);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+352:MOV*//*8*/{let dst=(reg_sp-368)>>2;let src=(reg_sp-432)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+353:JMP*/reg_ip=76;
}
code[354]=function(){
/*+354:INT*/int_code=+10;interrupt=true;;reg_ip=355;
}
code[355]=function(){
/*+355:JMP*/reg_ip=50;
}
code[356]=function(){
/*+356:ILDC*/memint32[(reg_sp-592)>>2]=+0
/*+357:ADDSP*/reg_sp+=-588;
/*+358:RET*/reg_ip=regs.pop();
}
code[359]=function(){
/*+359:ADDSP*/reg_sp+=+4;
/*+360:ILDC*/memint32[(+72)>>2]=+374693645
/*+361:CALL*/regs.push(362);reg_ip=31;
}
code[362]=function(){
/*+362:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-4)>>2];
/*+363:ADDSP*/reg_sp+=-4;
/*+364:FIN*/interrupt=true;quit=true;
}
let start_addr=359
let start_rsp=84
