/* Native binds:
0: Time
1: malloc
2: printf
3: puts
4: sin
5: cos
6: sqrt
7: M
8: m
9: L
10: l
11: close
12: clear
13: c
14: fill1
15: stroke
16: fin
17: rgba32
18: rgb
19: Circle
20: gray
21: alpha
22: width
23: FillRT

*/
let natives=[
'Time','malloc','printf','puts','sin','cos','sqrt','M',
'm','L','l','close','clear','c','fill1','stroke',
'fin','rgba32','rgb','Circle','gray','alpha','width','FillRT'
]

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
 , F, o, n, t,  , c, o, m, m, a, n, d, s,  , o,
v, e, r, f, l, o, w, ,,  , >, =,  , %, i, \0,  ,
F, o, n, t,  , d, a, t, a,  , o, v, e, r, f, l,
o, w, ,,  , >, =,  , %, i, \0, G, l, y, p, h,  ,
n, o, t,  , c, l, o, s, e, d, !, \0, G, l, y, p,
h,  , n, o, t,  , s, t, a, r, t, e, d,  , f, o,
r,  , W, i, d, t, h, \0, G, l, y, p, h,  , d, o,
u, b, l, e,  , c, l, o, s, e, d, !, \0, *, -, -,
-, -, -, *, -, *, -, *, -, *, -, *, -, -, -, -,
-, -, *, \0, |,  , P, o, w, e, r, e, d,  , w, i,
t, h,  , S, C, I, N, C,  , |, \0, *, -, -, -, -,
-, -, *, -, *, -, *, -, *, -, -, -, -, -, -, -,
*, \0,  , N, P, =, %, i, \10, \0, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
32, 70, 111, 110, 116, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 111,
118, 101, 114, 102, 108, 111, 119, 44, 32, 62, 61, 32, 37, 105, 0, 32,
70, 111, 110, 116, 32, 100, 97, 116, 97, 32, 111, 118, 101, 114, 102, 108,
111, 119, 44, 32, 62, 61, 32, 37, 105, 0, 71, 108, 121, 112, 104, 32,
110, 111, 116, 32, 99, 108, 111, 115, 101, 100, 33, 0, 71, 108, 121, 112,
104, 32, 110, 111, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 102, 111,
114, 32, 87, 105, 100, 116, 104, 0, 71, 108, 121, 112, 104, 32, 100, 111,
117, 98, 108, 101, 32, 99, 108, 111, 115, 101, 100, 33, 0, 42, 45, 45,
45, 45, 45, 42, 45, 42, 45, 42, 45, 42, 45, 42, 45, 45, 45, 45,
45, 45, 42, 0, 124, 32, 80, 111, 119, 101, 114, 101, 100, 32, 119, 105,
116, 104, 32, 83, 67, 73, 78, 67, 32, 124, 0, 42, 45, 45, 45, 45,
45, 45, 42, 45, 42, 45, 42, 45, 42, 45, 45, 45, 45, 45, 45, 45,
42, 0, 32, 78, 80, 61, 37, 105, 10, 0, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
]
var code=[]
/*0*/
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
/*10*/
code[1]=function(){
/*+10:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+11:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-6)];
/*+12:MOV*//*4*/memint32[(reg_this4+3)]=memint32[(reg_sp4-4)];
/*+13:ILDC*/memint32[reg_sp4-5]=+0;reg_ip=2;
}
/*14*/
code[2]=function(){
/*+14:ILDC*/memint32[reg_sp4-4]=+256
/*+15:LS*/memint32[reg_sp4-3]=memint32[reg_sp4-5] <memint32[reg_sp4-4]
/*+16:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=4;}else{reg_ip=3;}
}
/*17*/
code[3]=function(){
/*+17:OFFS*/memint32[reg_sp4-4]=memint32[reg_sp4-6]+229376
/*+18:LEA*/memint32[reg_sp4-3]=memint32[(reg_sp4-4)]
/*+19:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-5]*20
/*+20:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+8
/*+21:ILDC*/PutInt(memint32[(reg_sp4-1)],+0)
/*+22:OFFS*/memint32[reg_sp4-4]=memint32[reg_sp4-6]+229376
/*+23:LEA*/memint32[reg_sp4-3]=memint32[(reg_sp4-4)]
/*+24:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-5]*20
/*+25:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+4
/*+26:MOV*/{let addr=reg_sp-28;mem8.copyWithin(memint32[(reg_sp4-1)],addr,addr+4);}
/*+27:OFFS*/memint32[reg_sp4-4]=memint32[reg_sp4-6]+229376
/*+28:LEA*/memint32[reg_sp4-3]=memint32[(reg_sp4-4)]
/*+29:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-5]*20
/*+30:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+0
/*+31:ILDC*/PutInt(memint32[(reg_sp4-1)],+0)
/*+32:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-5)];
/*+33:INC*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+1
/*+34:JMP*/reg_ip=2;
}
/*35*/
code[4]=function(){
/*+35:ILDC*/memint32[reg_this4+0]=+0
/*+36:ILDC*/memint32[reg_this4+1]=+0
/*+37:ILDC*/memint32[reg_this4+2]=-1
/*+38:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+39:RET*/reg_ip=regs.pop();
}
/*40*/
code[5]=function(){
/*+40:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+41:ILDC*/memint32[reg_sp4-6]=+4096
/*+42:GE*/memint32[reg_sp4-5]=memint32[reg_this4+0]>=memint32[reg_sp4-6]
/*+43:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=7;}else{reg_ip=6;}
}
/*44*/
code[6]=function(){
/*+44:ILDC*/memint32[reg_sp4-3]=+4096
/*+45:ILDC*/memint32[reg_sp4-2]=+64
/*+46:NCALL*/SC_printf();
/*+47:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+48:RET*/reg_ip=regs.pop();
}
/*49*/
code[7]=function(){
/*+49:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+0
/*+50:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+51:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_this4+0]*4
/*+52:MOV*/{let addr=reg_sp-28;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+4);}
/*+53:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+0)];
/*+54:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1
/*+55:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+56:RET*/reg_ip=regs.pop();
}
/*57*/
code[8]=function(){
/*+57:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+58:ILDC*/memint32[reg_sp4-6]=+26624
/*+59:GE*/memint32[reg_sp4-5]=memint32[reg_this4+1]>=memint32[reg_sp4-6]
/*+60:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=10;}else{reg_ip=9;}
}
/*61*/
code[9]=function(){
/*+61:ILDC*/memint32[reg_sp4-3]=+26624
/*+62:ILDC*/memint32[reg_sp4-2]=+95
/*+63:NCALL*/SC_printf();
/*+64:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+65:RET*/reg_ip=regs.pop();
}
/*66*/
code[10]=function(){
/*+66:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+16384
/*+67:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+68:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_this4+1]*8
/*+69:MOV*/{let addr=reg_sp-32;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+8);}
/*+70:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+1)];
/*+71:INC*/memint32[reg_this4+1]=memint32[reg_this4+1]+1
/*+72:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+73:RET*/reg_ip=regs.pop();
}
/*74*/
code[11]=function(){
/*+74:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+75:ILDC*/memint32[reg_sp4-6]=-1
/*+76:NE*/memint32[reg_sp4-5]=memint32[reg_this4+2]!=memint32[reg_sp4-6]
/*+77:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=13;}else{reg_ip=12;}
}
/*78*/
code[12]=function(){
/*+78:ILDC*/memint32[reg_sp4-2]=+122
/*+79:NCALL*/SC_puts();
/*+80:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+81:RET*/reg_ip=regs.pop();
}
/*82*/
code[13]=function(){
/*+82:MOV*//*4*/memint32[(reg_this4+2)]=memint32[(reg_sp4-7)];
/*+83:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+84:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+85:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-7]*20
/*+86:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+12
/*+87:MOV*/{let addr=reg_this+0;mem8.copyWithin(memint32[(reg_sp4-3)],addr,addr+4);}
/*+88:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+89:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+90:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-7]*20
/*+91:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+16
/*+92:MOV*/{let addr=reg_this+4;mem8.copyWithin(memint32[(reg_sp4-3)],addr,addr+4);}
/*+93:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+94:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+95:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-7]*20
/*+96:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+8
/*+97:ILDC*/PutInt(memint32[(reg_sp4-3)],+0)
/*+98:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+99:RET*/reg_ip=regs.pop();
}
/*100*/
code[14]=function(){
/*+100:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+101:ILDC*/memint32[reg_sp4-6]=-1
/*+102:EQ*/memint32[reg_sp4-5]=memint32[reg_this4+2]==memint32[reg_sp4-6]
/*+103:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=16;}else{reg_ip=15;}
}
/*104*/
code[15]=function(){
/*+104:ILDC*/memint32[reg_sp4-2]=+140
/*+105:NCALL*/SC_puts();
/*+106:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+107:RET*/reg_ip=regs.pop();
}
/*108*/
code[16]=function(){
/*+108:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+109:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+110:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_this4+2]*20
/*+111:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+4
/*+112:F2I*/PutInt(memint32[(reg_sp4-3)],GetFloat4(reg_sp4-8))
/*+113:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+114:RET*/reg_ip=regs.pop();
}
/*115*/
code[17]=function(){
/*+115:ADDSP*/reg_sp+=+44;reg_sp4=reg_sp>>2;
/*+116:ILDC*/memint32[reg_sp4-11]=-1
/*+117:EQ*/memint32[reg_sp4-10]=memint32[reg_this4+2]==memint32[reg_sp4-11]
/*+118:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=19;}else{reg_ip=18;}
}
/*119*/
code[18]=function(){
/*+119:ILDC*/memint32[reg_sp4-2]=+168
/*+120:NCALL*/SC_puts();
/*+121:ADDSP*/reg_sp+=-44;reg_sp4=reg_sp>>2;
/*+122:RET*/reg_ip=regs.pop();
}
/*123*/
code[19]=function(){
/*+123:OFFS*/memint32[reg_sp4-11]=memint32[reg_this4+3]+229376
/*+124:LEA*/memint32[reg_sp4-10]=memint32[(reg_sp4-11)]
/*+125:IDX*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+memint32[reg_this4+2]*20
/*+126:OFFS*/memint32[reg_sp4-8]=memint32[reg_sp4-10]+8
/*+127:OFFS*/memint32[reg_sp4-7]=memint32[reg_this4+3]+229376
/*+128:LEA*/memint32[reg_sp4-6]=memint32[(reg_sp4-7)]
/*+129:IDX*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+memint32[reg_this4+2]*20
/*+130:OFFS*/memint32[reg_sp4-4]=memint32[reg_sp4-6]+12
/*+131:SUB*/PutInt(memint32[(reg_sp4-8)],memint32[reg_this4+0]-GetInt(memint32[(reg_sp4-4)]))
/*+132:ILDC*/memint32[reg_this4+2]=-1
/*+133:ADDSP*/reg_sp+=-44;reg_sp4=reg_sp>>2;
/*+134:RET*/reg_ip=regs.pop();
}
/*135*/
code[20]=function(){
/*+135:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+136:ILDC*/memint32[reg_sp4-1]=+77
/*+137:CALL*/regs.push(21);reg_ip=5;
}
/*138*/
code[21]=function(){
/*+138:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+139:CALL*/regs.push(22);reg_ip=8;
}
/*140*/
code[22]=function(){
/*+140:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+141:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+142:CALL*/regs.push(23);reg_ip=8;
}
/*143*/
code[23]=function(){
/*+143:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+144:RET*/reg_ip=regs.pop();
}
/*145*/
code[24]=function(){
/*+145:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+146:ILDC*/memint32[reg_sp4-1]=+109
/*+147:CALL*/regs.push(25);reg_ip=5;
}
/*148*/
code[25]=function(){
/*+148:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+149:CALL*/regs.push(26);reg_ip=8;
}
/*150*/
code[26]=function(){
/*+150:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+152:CALL*/regs.push(27);reg_ip=8;
}
/*153*/
code[27]=function(){
/*+153:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+154:RET*/reg_ip=regs.pop();
}
/*155*/
code[28]=function(){
/*+155:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+156:ILDC*/memint32[reg_sp4-1]=+76
/*+157:CALL*/regs.push(29);reg_ip=5;
}
/*158*/
code[29]=function(){
/*+158:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+159:CALL*/regs.push(30);reg_ip=8;
}
/*160*/
code[30]=function(){
/*+160:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+161:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+162:CALL*/regs.push(31);reg_ip=8;
}
/*163*/
code[31]=function(){
/*+163:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+164:RET*/reg_ip=regs.pop();
}
/*165*/
code[32]=function(){
/*+165:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+166:ILDC*/memint32[reg_sp4-1]=+108
/*+167:CALL*/regs.push(33);reg_ip=5;
}
/*168*/
code[33]=function(){
/*+168:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+169:CALL*/regs.push(34);reg_ip=8;
}
/*170*/
code[34]=function(){
/*+170:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+171:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+172:CALL*/regs.push(35);reg_ip=8;
}
/*173*/
code[35]=function(){
/*+173:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+174:RET*/reg_ip=regs.pop();
}
/*175*/
code[36]=function(){
/*+175:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+176:ILDC*/memint32[reg_sp4-1]=+99
/*+177:CALL*/regs.push(37);reg_ip=5;
}
/*178*/
code[37]=function(){
/*+178:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+179:CALL*/regs.push(38);reg_ip=8;
}
/*180*/
code[38]=function(){
/*+180:FNEG*/{let addr=(reg_sp4-6);cvtflt64[0]=-GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+181:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+182:CALL*/regs.push(39);reg_ip=8;
}
/*183*/
code[39]=function(){
/*+183:FADD*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-16)+GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+185:CALL*/regs.push(40);reg_ip=8;
}
/*186*/
code[40]=function(){
/*+186:FNEG*/{let addr=(reg_sp4-6);cvtflt64[0]=-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+187:FSUB*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)-GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+189:CALL*/regs.push(41);reg_ip=8;
}
/*190*/
code[41]=function(){
/*+190:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+191:CALL*/regs.push(42);reg_ip=8;
}
/*192*/
code[42]=function(){
/*+192:FNEG*/{let addr=(reg_sp4-6);cvtflt64[0]=-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+193:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+194:CALL*/regs.push(43);reg_ip=8;
}
/*195*/
code[43]=function(){
/*+195:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+196:RET*/reg_ip=regs.pop();
}
/*197*/
code[44]=function(){
/*+197:ADDSP*/reg_sp+=+4;reg_sp4=reg_sp>>2;
/*+198:ILDC*/memint32[reg_sp4-1]=+122
/*+199:CALL*/regs.push(45);reg_ip=5;
}
/*200*/
code[45]=function(){
/*+200:ADDSP*/reg_sp+=-4;reg_sp4=reg_sp>>2;
/*+201:RET*/reg_ip=regs.pop();
}
/*202*/
code[46]=function(){
/*+202:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+203:OFFS*/memint32[reg_sp4-5]=memint32[reg_this4+3]+229376
/*+204:LEA*/memint32[reg_sp4-4]=memint32[(reg_sp4-5)]
/*+205:IDX*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+memint32[reg_this4+2]*20
/*+206:OFFS*/memint32[reg_sp4-2]=memint32[reg_sp4-4]+0
/*+207:ILDC*/PutInt(memint32[(reg_sp4-2)],+1)
/*+208:ILDC*/memint32[reg_sp4-1]=+48
/*+209:CALL*/regs.push(47);reg_ip=5;
}
/*210*/
code[47]=function(){
/*+210:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+211:RET*/reg_ip=regs.pop();
}
/*212*/
code[48]=function(){
/*+212:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+213:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+214:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+215:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_this4+2]*20
/*+216:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+0
/*+217:ILDC*/PutInt(memint32[(reg_sp4-3)],+1)
/*+218:ILDC*/memint32[reg_sp4-1]=+47
/*+219:CALL*/regs.push(49);reg_ip=5;
}
/*220*/
code[49]=function(){
/*+220:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+221:CALL*/regs.push(50);reg_ip=8;
}
/*222*/
code[50]=function(){
/*+222:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+223:CALL*/regs.push(51);reg_ip=8;
}
/*224*/
code[51]=function(){
/*+224:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+225:RET*/reg_ip=regs.pop();
}
/*226*/
code[52]=function(){
/*+226:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+227:OFFS*/memint32[reg_sp4-6]=memint32[reg_this4+3]+229376
/*+228:LEA*/memint32[reg_sp4-5]=memint32[(reg_sp4-6)]
/*+229:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_this4+2]*20
/*+230:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+0
/*+231:ILDC*/PutInt(memint32[(reg_sp4-3)],+1)
/*+232:ILDC*/memint32[reg_sp4-1]=+102
/*+233:CALL*/regs.push(53);reg_ip=5;
}
/*234*/
code[53]=function(){
/*+234:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-7];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+235:CALL*/regs.push(54);reg_ip=8;
}
/*236*/
code[54]=function(){
/*+236:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+237:RET*/reg_ip=regs.pop();
}
/*238*/
code[55]=function(){
/*+238:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+239:ILDC*/memint32[reg_sp4-1]=+32
/*+240:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+241:CALL*/regs.push(56);reg_ip=11;
}
/*242*/
code[56]=function(){
/*+242:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+243:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+244:CALL*/regs.push(57);reg_ip=17;
}
/*245*/
code[57]=function(){
/*+245:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+246:ILDC*/memint32[reg_sp4-1]=+33
/*+247:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+248:CALL*/regs.push(58);reg_ip=11;
}
/*249*/
code[58]=function(){
/*+249:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+250:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+251:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+252:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+253:CALL*/regs.push(59);reg_ip=20;
}
/*254*/
code[59]=function(){
/*+254:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+255:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+256:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+257:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+258:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+259:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+260:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+261:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+262:CALL*/regs.push(60);reg_ip=36;
}
/*263*/
code[60]=function(){
/*+263:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+264:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+265:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+266:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+267:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+268:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+269:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+270:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+271:CALL*/regs.push(61);reg_ip=36;
}
/*272*/
code[61]=function(){
/*+272:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+273:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+275:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+276:CALL*/regs.push(62);reg_ip=20;
}
/*277*/
code[62]=function(){
/*+277:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+278:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+279:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+280:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+281:CALL*/regs.push(63);reg_ip=32;
}
/*282*/
code[63]=function(){
/*+282:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+283:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+284:CALL*/regs.push(64);reg_ip=17;
}
/*285*/
code[64]=function(){
/*+285:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+286:ILDC*/memint32[reg_sp4-1]=+63
/*+287:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+288:CALL*/regs.push(65);reg_ip=11;
}
/*289*/
code[65]=function(){
/*+289:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+290:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+291:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+292:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+293:CALL*/regs.push(66);reg_ip=20;
}
/*294*/
code[66]=function(){
/*+294:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+295:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+296:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+297:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+298:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+299:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+300:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+301:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+302:CALL*/regs.push(67);reg_ip=36;
}
/*303*/
code[67]=function(){
/*+303:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+304:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+305:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+306:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+307:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+308:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+309:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+310:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+311:CALL*/regs.push(68);reg_ip=36;
}
/*312*/
code[68]=function(){
/*+312:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+313:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+315:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+316:CALL*/regs.push(69);reg_ip=20;
}
/*317*/
code[69]=function(){
/*+317:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+318:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+319:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+320:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+321:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+322:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+323:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+324:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+325:CALL*/regs.push(70);reg_ip=36;
}
/*326*/
code[70]=function(){
/*+326:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+327:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+328:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+329:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+330:CALL*/regs.push(71);reg_ip=20;
}
/*331*/
code[71]=function(){
/*+331:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+332:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+333:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+335:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+336:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+337:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+338:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+339:CALL*/regs.push(72);reg_ip=36;
}
/*340*/
code[72]=function(){
/*+340:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+341:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+342:CALL*/regs.push(73);reg_ip=17;
}
/*343*/
code[73]=function(){
/*+343:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+344:ILDC*/memint32[reg_sp4-1]=+34
/*+345:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+346:CALL*/regs.push(74);reg_ip=11;
}
/*347*/
code[74]=function(){
/*+347:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+348:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+349:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+350:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+351:CALL*/regs.push(75);reg_ip=20;
}
/*352*/
code[75]=function(){
/*+352:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+353:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+354:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+355:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+356:CALL*/regs.push(76);reg_ip=32;
}
/*357*/
code[76]=function(){
/*+357:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+358:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+359:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+360:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+361:CALL*/regs.push(77);reg_ip=32;
}
/*362*/
code[77]=function(){
/*+362:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+363:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+364:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+365:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+366:CALL*/regs.push(78);reg_ip=20;
}
/*367*/
code[78]=function(){
/*+367:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+368:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+369:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+370:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+371:CALL*/regs.push(79);reg_ip=32;
}
/*372*/
code[79]=function(){
/*+372:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+373:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+374:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+375:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+376:CALL*/regs.push(80);reg_ip=32;
}
/*377*/
code[80]=function(){
/*+377:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+378:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+379:CALL*/regs.push(81);reg_ip=17;
}
/*380*/
code[81]=function(){
/*+380:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+381:ILDC*/memint32[reg_sp4-1]=+35
/*+382:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+383:CALL*/regs.push(82);reg_ip=11;
}
/*384*/
code[82]=function(){
/*+384:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+385:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+386:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+387:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+388:CALL*/regs.push(83);reg_ip=20;
}
/*389*/
code[83]=function(){
/*+389:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+390:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+391:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+392:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+393:CALL*/regs.push(84);reg_ip=32;
}
/*394*/
code[84]=function(){
/*+394:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+395:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+396:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+397:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+398:CALL*/regs.push(85);reg_ip=20;
}
/*399*/
code[85]=function(){
/*+399:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+400:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+401:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+402:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+403:CALL*/regs.push(86);reg_ip=32;
}
/*404*/
code[86]=function(){
/*+404:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+405:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+406:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+407:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+408:CALL*/regs.push(87);reg_ip=20;
}
/*409*/
code[87]=function(){
/*+409:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+410:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+411:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+412:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+413:CALL*/regs.push(88);reg_ip=32;
}
/*414*/
code[88]=function(){
/*+414:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+415:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+416:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+417:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+418:CALL*/regs.push(89);reg_ip=20;
}
/*419*/
code[89]=function(){
/*+419:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+420:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+421:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+422:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+423:CALL*/regs.push(90);reg_ip=32;
}
/*424*/
code[90]=function(){
/*+424:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+425:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+426:CALL*/regs.push(91);reg_ip=17;
}
/*427*/
code[91]=function(){
/*+427:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+428:ILDC*/memint32[reg_sp4-1]=+36
/*+429:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+430:CALL*/regs.push(92);reg_ip=11;
}
/*431*/
code[92]=function(){
/*+431:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+432:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+433:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+434:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+435:CALL*/regs.push(93);reg_ip=20;
}
/*436*/
code[93]=function(){
/*+436:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+437:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+438:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+439:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+440:CALL*/regs.push(94);reg_ip=32;
}
/*441*/
code[94]=function(){
/*+441:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+442:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+443:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+444:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+445:CALL*/regs.push(95);reg_ip=20;
}
/*446*/
code[95]=function(){
/*+446:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+447:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+448:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+449:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+450:CALL*/regs.push(96);reg_ip=32;
}
/*451*/
code[96]=function(){
/*+451:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+452:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+453:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+454:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+455:CALL*/regs.push(97);reg_ip=20;
}
/*456*/
code[97]=function(){
/*+456:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+457:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+458:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+459:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+460:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+461:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+462:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+463:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+464:CALL*/regs.push(98);reg_ip=36;
}
/*465*/
code[98]=function(){
/*+465:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+466:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+467:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+468:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+469:CALL*/regs.push(99);reg_ip=20;
}
/*470*/
code[99]=function(){
/*+470:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+471:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+472:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+473:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+474:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+475:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+476:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+477:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+478:CALL*/regs.push(100);reg_ip=36;
}
/*479*/
code[100]=function(){
/*+479:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+480:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+481:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+482:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+483:CALL*/regs.push(101);reg_ip=20;
}
/*484*/
code[101]=function(){
/*+484:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+485:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+486:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+487:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+488:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+489:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+490:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+491:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+492:CALL*/regs.push(102);reg_ip=36;
}
/*493*/
code[102]=function(){
/*+493:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+494:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+495:CALL*/regs.push(103);reg_ip=17;
}
/*496*/
code[103]=function(){
/*+496:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+497:ILDC*/memint32[reg_sp4-1]=+37
/*+498:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+499:CALL*/regs.push(104);reg_ip=11;
}
/*500*/
code[104]=function(){
/*+500:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+501:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+502:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+504:CALL*/regs.push(105);reg_ip=20;
}
/*505*/
code[105]=function(){
/*+505:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+506:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+507:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+508:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+509:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+510:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+511:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+512:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+513:CALL*/regs.push(106);reg_ip=36;
}
/*514*/
code[106]=function(){
/*+514:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+515:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+517:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+518:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+519:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+520:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+521:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+522:CALL*/regs.push(107);reg_ip=36;
}
/*523*/
code[107]=function(){
/*+523:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+524:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+525:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+526:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+527:CALL*/regs.push(108);reg_ip=20;
}
/*528*/
code[108]=function(){
/*+528:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+529:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+530:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+531:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+532:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+533:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+534:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+535:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+536:CALL*/regs.push(109);reg_ip=36;
}
/*537*/
code[109]=function(){
/*+537:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+538:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+539:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+540:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+541:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+542:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+543:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+544:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+545:CALL*/regs.push(110);reg_ip=36;
}
/*546*/
code[110]=function(){
/*+546:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+547:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+548:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+549:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+550:CALL*/regs.push(111);reg_ip=20;
}
/*551*/
code[111]=function(){
/*+551:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+552:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+553:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+554:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+555:CALL*/regs.push(112);reg_ip=32;
}
/*556*/
code[112]=function(){
/*+556:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+557:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+558:CALL*/regs.push(113);reg_ip=17;
}
/*559*/
code[113]=function(){
/*+559:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+560:ILDC*/memint32[reg_sp4-1]=+38
/*+561:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+562:CALL*/regs.push(114);reg_ip=11;
}
/*563*/
code[114]=function(){
/*+563:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+564:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+565:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+566:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+567:CALL*/regs.push(115);reg_ip=20;
}
/*568*/
code[115]=function(){
/*+568:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+569:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+570:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+571:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+572:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+573:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+574:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+575:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+576:CALL*/regs.push(116);reg_ip=36;
}
/*577*/
code[116]=function(){
/*+577:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+578:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+579:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+580:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+581:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+582:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+583:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+584:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+585:CALL*/regs.push(117);reg_ip=36;
}
/*586*/
code[117]=function(){
/*+586:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+587:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+588:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+589:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+590:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+591:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+592:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+593:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+594:CALL*/regs.push(118);reg_ip=36;
}
/*595*/
code[118]=function(){
/*+595:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+596:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+597:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+598:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+599:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+600:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+601:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+602:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+603:CALL*/regs.push(119);reg_ip=36;
}
/*604*/
code[119]=function(){
/*+604:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+605:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+606:CALL*/regs.push(120);reg_ip=17;
}
/*607*/
code[120]=function(){
/*+607:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+608:ILDC*/memint32[reg_sp4-1]=+39
/*+609:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+610:CALL*/regs.push(121);reg_ip=11;
}
/*611*/
code[121]=function(){
/*+611:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+612:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+613:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+614:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+615:CALL*/regs.push(122);reg_ip=20;
}
/*616*/
code[122]=function(){
/*+616:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+617:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+618:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+619:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+620:CALL*/regs.push(123);reg_ip=32;
}
/*621*/
code[123]=function(){
/*+621:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+622:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+623:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+624:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+625:CALL*/regs.push(124);reg_ip=32;
}
/*626*/
code[124]=function(){
/*+626:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+627:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+628:CALL*/regs.push(125);reg_ip=17;
}
/*629*/
code[125]=function(){
/*+629:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+630:ILDC*/memint32[reg_sp4-1]=+40
/*+631:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+632:CALL*/regs.push(126);reg_ip=11;
}
/*633*/
code[126]=function(){
/*+633:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+634:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+635:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+636:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+637:CALL*/regs.push(127);reg_ip=20;
}
/*638*/
code[127]=function(){
/*+638:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+639:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+640:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+641:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+642:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+643:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+644:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+645:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+646:CALL*/regs.push(128);reg_ip=36;
}
/*647*/
code[128]=function(){
/*+647:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+648:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+649:CALL*/regs.push(129);reg_ip=17;
}
/*650*/
code[129]=function(){
/*+650:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+651:ILDC*/memint32[reg_sp4-1]=+41
/*+652:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+653:CALL*/regs.push(130);reg_ip=11;
}
/*654*/
code[130]=function(){
/*+654:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+655:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+656:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+657:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+658:CALL*/regs.push(131);reg_ip=20;
}
/*659*/
code[131]=function(){
/*+659:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+660:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+661:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+662:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+663:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+664:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+665:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+666:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+667:CALL*/regs.push(132);reg_ip=36;
}
/*668*/
code[132]=function(){
/*+668:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+669:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+670:CALL*/regs.push(133);reg_ip=17;
}
/*671*/
code[133]=function(){
/*+671:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+672:ILDC*/memint32[reg_sp4-1]=+42
/*+673:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+674:CALL*/regs.push(134);reg_ip=11;
}
/*675*/
code[134]=function(){
/*+675:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+676:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+677:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+678:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+679:CALL*/regs.push(135);reg_ip=20;
}
/*680*/
code[135]=function(){
/*+680:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+681:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+682:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+683:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+684:CALL*/regs.push(136);reg_ip=32;
}
/*685*/
code[136]=function(){
/*+685:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+686:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+687:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+688:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+689:CALL*/regs.push(137);reg_ip=20;
}
/*690*/
code[137]=function(){
/*+690:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+691:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+692:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+694:CALL*/regs.push(138);reg_ip=32;
}
/*695*/
code[138]=function(){
/*+695:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+696:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+697:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+698:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+699:CALL*/regs.push(139);reg_ip=20;
}
/*700*/
code[139]=function(){
/*+700:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+701:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+702:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+703:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+704:CALL*/regs.push(140);reg_ip=32;
}
/*705*/
code[140]=function(){
/*+705:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+706:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+707:CALL*/regs.push(141);reg_ip=17;
}
/*708*/
code[141]=function(){
/*+708:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+709:ILDC*/memint32[reg_sp4-1]=+43
/*+710:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+711:CALL*/regs.push(142);reg_ip=11;
}
/*712*/
code[142]=function(){
/*+712:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+713:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+714:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+715:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+716:CALL*/regs.push(143);reg_ip=20;
}
/*717*/
code[143]=function(){
/*+717:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+718:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+719:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+720:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+721:CALL*/regs.push(144);reg_ip=32;
}
/*722*/
code[144]=function(){
/*+722:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+723:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+724:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+725:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+726:CALL*/regs.push(145);reg_ip=20;
}
/*727*/
code[145]=function(){
/*+727:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+728:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+729:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+730:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+731:CALL*/regs.push(146);reg_ip=32;
}
/*732*/
code[146]=function(){
/*+732:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+733:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+734:CALL*/regs.push(147);reg_ip=17;
}
/*735*/
code[147]=function(){
/*+735:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+736:ILDC*/memint32[reg_sp4-1]=+44
/*+737:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+738:CALL*/regs.push(148);reg_ip=11;
}
/*739*/
code[148]=function(){
/*+739:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+740:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+741:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+742:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+743:CALL*/regs.push(149);reg_ip=20;
}
/*744*/
code[149]=function(){
/*+744:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+745:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+746:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+747:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+748:CALL*/regs.push(150);reg_ip=32;
}
/*749*/
code[150]=function(){
/*+749:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+750:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+751:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+752:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+753:CALL*/regs.push(151);reg_ip=32;
}
/*754*/
code[151]=function(){
/*+754:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+755:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+756:CALL*/regs.push(152);reg_ip=17;
}
/*757*/
code[152]=function(){
/*+757:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+758:ILDC*/memint32[reg_sp4-1]=+45
/*+759:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+760:CALL*/regs.push(153);reg_ip=11;
}
/*761*/
code[153]=function(){
/*+761:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+762:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+763:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+764:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+765:CALL*/regs.push(154);reg_ip=20;
}
/*766*/
code[154]=function(){
/*+766:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+767:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+768:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+769:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+770:CALL*/regs.push(155);reg_ip=32;
}
/*771*/
code[155]=function(){
/*+771:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+772:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+773:CALL*/regs.push(156);reg_ip=17;
}
/*774*/
code[156]=function(){
/*+774:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+775:ILDC*/memint32[reg_sp4-1]=+46
/*+776:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+777:CALL*/regs.push(157);reg_ip=11;
}
/*778*/
code[157]=function(){
/*+778:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+779:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+780:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+781:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+782:CALL*/regs.push(158);reg_ip=20;
}
/*783*/
code[158]=function(){
/*+783:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+784:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+785:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+786:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+787:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+788:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+789:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+790:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+791:CALL*/regs.push(159);reg_ip=36;
}
/*792*/
code[159]=function(){
/*+792:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+793:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+794:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+795:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+796:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+797:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+798:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+799:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+800:CALL*/regs.push(160);reg_ip=36;
}
/*801*/
code[160]=function(){
/*+801:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+802:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+803:CALL*/regs.push(161);reg_ip=17;
}
/*804*/
code[161]=function(){
/*+804:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+805:ILDC*/memint32[reg_sp4-1]=+47
/*+806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+807:CALL*/regs.push(162);reg_ip=11;
}
/*808*/
code[162]=function(){
/*+808:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+809:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+810:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+811:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+812:CALL*/regs.push(163);reg_ip=20;
}
/*813*/
code[163]=function(){
/*+813:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+814:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+815:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+816:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+817:CALL*/regs.push(164);reg_ip=32;
}
/*818*/
code[164]=function(){
/*+818:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+819:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+820:CALL*/regs.push(165);reg_ip=17;
}
/*821*/
code[165]=function(){
/*+821:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+822:ILDC*/memint32[reg_sp4-1]=+48
/*+823:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+824:CALL*/regs.push(166);reg_ip=11;
}
/*825*/
code[166]=function(){
/*+825:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+826:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+827:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+828:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+829:CALL*/regs.push(167);reg_ip=20;
}
/*830*/
code[167]=function(){
/*+830:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+831:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+832:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+833:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+834:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+835:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+836:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+837:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+838:CALL*/regs.push(168);reg_ip=36;
}
/*839*/
code[168]=function(){
/*+839:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+840:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+841:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+842:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+843:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+844:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+845:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+846:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+847:CALL*/regs.push(169);reg_ip=36;
}
/*848*/
code[169]=function(){
/*+848:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+849:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+850:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+851:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+852:CALL*/regs.push(170);reg_ip=20;
}
/*853*/
code[170]=function(){
/*+853:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+854:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+855:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+856:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+857:CALL*/regs.push(171);reg_ip=32;
}
/*858*/
code[171]=function(){
/*+858:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+859:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+860:CALL*/regs.push(172);reg_ip=17;
}
/*861*/
code[172]=function(){
/*+861:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+862:ILDC*/memint32[reg_sp4-1]=+49
/*+863:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+864:CALL*/regs.push(173);reg_ip=11;
}
/*865*/
code[173]=function(){
/*+865:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+866:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+867:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+868:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+869:CALL*/regs.push(174);reg_ip=20;
}
/*870*/
code[174]=function(){
/*+870:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+871:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+872:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+873:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+874:CALL*/regs.push(175);reg_ip=32;
}
/*875*/
code[175]=function(){
/*+875:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+876:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+877:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+878:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+879:CALL*/regs.push(176);reg_ip=20;
}
/*880*/
code[176]=function(){
/*+880:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+881:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+882:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+883:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+884:CALL*/regs.push(177);reg_ip=32;
}
/*885*/
code[177]=function(){
/*+885:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+886:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+887:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+888:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+889:CALL*/regs.push(178);reg_ip=20;
}
/*890*/
code[178]=function(){
/*+890:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+891:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+892:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+893:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+894:CALL*/regs.push(179);reg_ip=32;
}
/*895*/
code[179]=function(){
/*+895:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+896:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+897:CALL*/regs.push(180);reg_ip=17;
}
/*898*/
code[180]=function(){
/*+898:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+899:ILDC*/memint32[reg_sp4-1]=+50
/*+900:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+901:CALL*/regs.push(181);reg_ip=11;
}
/*902*/
code[181]=function(){
/*+902:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+903:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+904:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+905:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+906:CALL*/regs.push(182);reg_ip=20;
}
/*907*/
code[182]=function(){
/*+907:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+908:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+909:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+910:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+911:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+912:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+913:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+914:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+915:CALL*/regs.push(183);reg_ip=36;
}
/*916*/
code[183]=function(){
/*+916:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+917:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+918:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+919:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+920:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+921:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+922:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+923:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+924:CALL*/regs.push(184);reg_ip=36;
}
/*925*/
code[184]=function(){
/*+925:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+926:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+927:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+928:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+929:CALL*/regs.push(185);reg_ip=32;
}
/*930*/
code[185]=function(){
/*+930:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+931:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+932:CALL*/regs.push(186);reg_ip=17;
}
/*933*/
code[186]=function(){
/*+933:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+934:ILDC*/memint32[reg_sp4-1]=+51
/*+935:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+936:CALL*/regs.push(187);reg_ip=11;
}
/*937*/
code[187]=function(){
/*+937:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+938:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+939:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+940:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+941:CALL*/regs.push(188);reg_ip=20;
}
/*942*/
code[188]=function(){
/*+942:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+943:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+944:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+945:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+946:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+947:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+948:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+949:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+950:CALL*/regs.push(189);reg_ip=36;
}
/*951*/
code[189]=function(){
/*+951:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+952:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+953:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+954:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+955:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+956:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+957:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+958:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+959:CALL*/regs.push(190);reg_ip=36;
}
/*960*/
code[190]=function(){
/*+960:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+961:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+962:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+963:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+964:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+965:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+966:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+967:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+968:CALL*/regs.push(191);reg_ip=36;
}
/*969*/
code[191]=function(){
/*+969:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+970:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+971:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+972:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+973:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+974:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+975:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+976:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+977:CALL*/regs.push(192);reg_ip=36;
}
/*978*/
code[192]=function(){
/*+978:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+979:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+980:CALL*/regs.push(193);reg_ip=17;
}
/*981*/
code[193]=function(){
/*+981:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+982:ILDC*/memint32[reg_sp4-1]=+52
/*+983:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+984:CALL*/regs.push(194);reg_ip=11;
}
/*985*/
code[194]=function(){
/*+985:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+986:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+987:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+988:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+989:CALL*/regs.push(195);reg_ip=20;
}
/*990*/
code[195]=function(){
/*+990:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+991:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+992:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+993:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+994:CALL*/regs.push(196);reg_ip=32;
}
/*995*/
code[196]=function(){
/*+995:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+996:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+997:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+998:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+999:CALL*/regs.push(197);reg_ip=32;
}
/*1000*/
code[197]=function(){
/*+1000:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1001:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1002:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1003:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1004:CALL*/regs.push(198);reg_ip=32;
}
/*1005*/
code[198]=function(){
/*+1005:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1006:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1007:CALL*/regs.push(199);reg_ip=17;
}
/*1008*/
code[199]=function(){
/*+1008:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1009:ILDC*/memint32[reg_sp4-1]=+53
/*+1010:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1011:CALL*/regs.push(200);reg_ip=11;
}
/*1012*/
code[200]=function(){
/*+1012:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1013:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1014:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1015:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1016:CALL*/regs.push(201);reg_ip=20;
}
/*1017*/
code[201]=function(){
/*+1017:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1018:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1019:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1020:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1021:CALL*/regs.push(202);reg_ip=32;
}
/*1022*/
code[202]=function(){
/*+1022:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1023:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1024:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1025:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1026:CALL*/regs.push(203);reg_ip=32;
}
/*1027*/
code[203]=function(){
/*+1027:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1028:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1029:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1030:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1031:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1032:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1033:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1034:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1035:CALL*/regs.push(204);reg_ip=36;
}
/*1036*/
code[204]=function(){
/*+1036:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1037:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1038:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1039:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1040:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1041:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1042:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1043:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1044:CALL*/regs.push(205);reg_ip=36;
}
/*1045*/
code[205]=function(){
/*+1045:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1046:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1047:CALL*/regs.push(206);reg_ip=17;
}
/*1048*/
code[206]=function(){
/*+1048:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1049:ILDC*/memint32[reg_sp4-1]=+54
/*+1050:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1051:CALL*/regs.push(207);reg_ip=11;
}
/*1052*/
code[207]=function(){
/*+1052:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1053:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1054:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1055:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1056:CALL*/regs.push(208);reg_ip=20;
}
/*1057*/
code[208]=function(){
/*+1057:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1058:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1059:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1060:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1061:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1062:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1063:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1064:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1065:CALL*/regs.push(209);reg_ip=36;
}
/*1066*/
code[209]=function(){
/*+1066:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1067:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1068:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1069:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1070:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1071:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1072:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1073:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1074:CALL*/regs.push(210);reg_ip=36;
}
/*1075*/
code[210]=function(){
/*+1075:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1076:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1077:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1078:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1079:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1080:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1081:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1082:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1083:CALL*/regs.push(211);reg_ip=36;
}
/*1084*/
code[211]=function(){
/*+1084:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1085:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1086:CALL*/regs.push(212);reg_ip=17;
}
/*1087*/
code[212]=function(){
/*+1087:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1088:ILDC*/memint32[reg_sp4-1]=+55
/*+1089:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1090:CALL*/regs.push(213);reg_ip=11;
}
/*1091*/
code[213]=function(){
/*+1091:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1092:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1093:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1094:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1095:CALL*/regs.push(214);reg_ip=20;
}
/*1096*/
code[214]=function(){
/*+1096:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1097:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1098:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1099:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1100:CALL*/regs.push(215);reg_ip=32;
}
/*1101*/
code[215]=function(){
/*+1101:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1102:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1103:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1104:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1105:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1106:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1107:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1108:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1109:CALL*/regs.push(216);reg_ip=36;
}
/*1110*/
code[216]=function(){
/*+1110:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1111:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1112:CALL*/regs.push(217);reg_ip=17;
}
/*1113*/
code[217]=function(){
/*+1113:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1114:ILDC*/memint32[reg_sp4-1]=+56
/*+1115:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1116:CALL*/regs.push(218);reg_ip=11;
}
/*1117*/
code[218]=function(){
/*+1117:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1118:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1119:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1120:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1121:CALL*/regs.push(219);reg_ip=20;
}
/*1122*/
code[219]=function(){
/*+1122:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1123:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1124:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1125:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1126:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1127:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1128:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1129:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1130:CALL*/regs.push(220);reg_ip=36;
}
/*1131*/
code[220]=function(){
/*+1131:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1132:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1133:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1134:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1135:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1136:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1137:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1138:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1139:CALL*/regs.push(221);reg_ip=36;
}
/*1140*/
code[221]=function(){
/*+1140:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1141:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1142:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1143:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1144:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1145:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1146:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1147:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1148:CALL*/regs.push(222);reg_ip=36;
}
/*1149*/
code[222]=function(){
/*+1149:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1150:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1151:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1152:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1153:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1154:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1155:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1156:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1157:CALL*/regs.push(223);reg_ip=36;
}
/*1158*/
code[223]=function(){
/*+1158:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1159:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1160:CALL*/regs.push(224);reg_ip=17;
}
/*1161*/
code[224]=function(){
/*+1161:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1162:ILDC*/memint32[reg_sp4-1]=+57
/*+1163:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1164:CALL*/regs.push(225);reg_ip=11;
}
/*1165*/
code[225]=function(){
/*+1165:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1166:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1167:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1168:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1169:CALL*/regs.push(226);reg_ip=20;
}
/*1170*/
code[226]=function(){
/*+1170:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1171:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1172:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1173:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1174:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1175:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1176:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1177:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1178:CALL*/regs.push(227);reg_ip=36;
}
/*1179*/
code[227]=function(){
/*+1179:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1180:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1181:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1182:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1183:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1184:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1185:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1186:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1187:CALL*/regs.push(228);reg_ip=36;
}
/*1188*/
code[228]=function(){
/*+1188:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1189:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1190:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1191:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1192:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1193:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-7.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1194:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1195:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1196:CALL*/regs.push(229);reg_ip=36;
}
/*1197*/
code[229]=function(){
/*+1197:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1198:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1199:CALL*/regs.push(230);reg_ip=17;
}
/*1200*/
code[230]=function(){
/*+1200:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1201:ILDC*/memint32[reg_sp4-1]=+58
/*+1202:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1203:CALL*/regs.push(231);reg_ip=11;
}
/*1204*/
code[231]=function(){
/*+1204:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1205:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1206:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1207:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1208:CALL*/regs.push(232);reg_ip=20;
}
/*1209*/
code[232]=function(){
/*+1209:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1210:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1211:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1212:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1213:CALL*/regs.push(233);reg_ip=32;
}
/*1214*/
code[233]=function(){
/*+1214:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1215:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1216:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1217:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1218:CALL*/regs.push(234);reg_ip=20;
}
/*1219*/
code[234]=function(){
/*+1219:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1220:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1221:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1222:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1223:CALL*/regs.push(235);reg_ip=32;
}
/*1224*/
code[235]=function(){
/*+1224:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1225:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1226:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1227:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1228:CALL*/regs.push(236);reg_ip=20;
}
/*1229*/
code[236]=function(){
/*+1229:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1230:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1231:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1232:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1233:CALL*/regs.push(237);reg_ip=32;
}
/*1234*/
code[237]=function(){
/*+1234:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1235:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1236:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1237:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1238:CALL*/regs.push(238);reg_ip=20;
}
/*1239*/
code[238]=function(){
/*+1239:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1240:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1241:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1242:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1243:CALL*/regs.push(239);reg_ip=32;
}
/*1244*/
code[239]=function(){
/*+1244:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1245:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1246:CALL*/regs.push(240);reg_ip=17;
}
/*1247*/
code[240]=function(){
/*+1247:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1248:ILDC*/memint32[reg_sp4-1]=+59
/*+1249:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1250:CALL*/regs.push(241);reg_ip=11;
}
/*1251*/
code[241]=function(){
/*+1251:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1252:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1253:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1254:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1255:CALL*/regs.push(242);reg_ip=20;
}
/*1256*/
code[242]=function(){
/*+1256:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1257:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1258:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1259:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1260:CALL*/regs.push(243);reg_ip=32;
}
/*1261*/
code[243]=function(){
/*+1261:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1262:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1263:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1264:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1265:CALL*/regs.push(244);reg_ip=32;
}
/*1266*/
code[244]=function(){
/*+1266:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1267:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1268:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1269:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1270:CALL*/regs.push(245);reg_ip=20;
}
/*1271*/
code[245]=function(){
/*+1271:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1272:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1273:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1274:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1275:CALL*/regs.push(246);reg_ip=32;
}
/*1276*/
code[246]=function(){
/*+1276:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1277:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1278:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1279:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1280:CALL*/regs.push(247);reg_ip=20;
}
/*1281*/
code[247]=function(){
/*+1281:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1282:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1283:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1284:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1285:CALL*/regs.push(248);reg_ip=32;
}
/*1286*/
code[248]=function(){
/*+1286:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1287:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1288:CALL*/regs.push(249);reg_ip=17;
}
/*1289*/
code[249]=function(){
/*+1289:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1290:ILDC*/memint32[reg_sp4-1]=+60
/*+1291:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1292:CALL*/regs.push(250);reg_ip=11;
}
/*1293*/
code[250]=function(){
/*+1293:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1294:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1295:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1296:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1297:CALL*/regs.push(251);reg_ip=20;
}
/*1298*/
code[251]=function(){
/*+1298:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1299:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1300:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1301:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1302:CALL*/regs.push(252);reg_ip=32;
}
/*1303*/
code[252]=function(){
/*+1303:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1304:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1305:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1306:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1307:CALL*/regs.push(253);reg_ip=32;
}
/*1308*/
code[253]=function(){
/*+1308:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1309:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1310:CALL*/regs.push(254);reg_ip=17;
}
/*1311*/
code[254]=function(){
/*+1311:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1312:ILDC*/memint32[reg_sp4-1]=+61
/*+1313:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1314:CALL*/regs.push(255);reg_ip=11;
}
/*1315*/
code[255]=function(){
/*+1315:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1316:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1317:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1318:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1319:CALL*/regs.push(256);reg_ip=20;
}
/*1320*/
code[256]=function(){
/*+1320:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1321:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1322:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1323:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1324:CALL*/regs.push(257);reg_ip=32;
}
/*1325*/
code[257]=function(){
/*+1325:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1326:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1327:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1328:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1329:CALL*/regs.push(258);reg_ip=20;
}
/*1330*/
code[258]=function(){
/*+1330:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1331:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1332:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1333:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1334:CALL*/regs.push(259);reg_ip=32;
}
/*1335*/
code[259]=function(){
/*+1335:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1336:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1337:CALL*/regs.push(260);reg_ip=17;
}
/*1338*/
code[260]=function(){
/*+1338:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1339:ILDC*/memint32[reg_sp4-1]=+62
/*+1340:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1341:CALL*/regs.push(261);reg_ip=11;
}
/*1342*/
code[261]=function(){
/*+1342:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1343:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1344:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1345:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1346:CALL*/regs.push(262);reg_ip=20;
}
/*1347*/
code[262]=function(){
/*+1347:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1348:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1349:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1350:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1351:CALL*/regs.push(263);reg_ip=32;
}
/*1352*/
code[263]=function(){
/*+1352:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1353:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1354:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1355:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1356:CALL*/regs.push(264);reg_ip=32;
}
/*1357*/
code[264]=function(){
/*+1357:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1358:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1359:CALL*/regs.push(265);reg_ip=17;
}
/*1360*/
code[265]=function(){
/*+1360:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1361:ILDC*/memint32[reg_sp4-1]=+64
/*+1362:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1363:CALL*/regs.push(266);reg_ip=11;
}
/*1364*/
code[266]=function(){
/*+1364:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1365:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1366:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1367:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1368:CALL*/regs.push(267);reg_ip=20;
}
/*1369*/
code[267]=function(){
/*+1369:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1370:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1371:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1372:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1373:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1374:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1375:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1376:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1377:CALL*/regs.push(268);reg_ip=36;
}
/*1378*/
code[268]=function(){
/*+1378:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1379:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1380:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1381:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1382:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1383:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1384:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1385:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1386:CALL*/regs.push(269);reg_ip=36;
}
/*1387*/
code[269]=function(){
/*+1387:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1388:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1389:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1390:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1391:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1392:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1393:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1394:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1395:CALL*/regs.push(270);reg_ip=36;
}
/*1396*/
code[270]=function(){
/*+1396:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1397:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1398:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1399:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1400:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1401:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1402:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1403:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1404:CALL*/regs.push(271);reg_ip=36;
}
/*1405*/
code[271]=function(){
/*+1405:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1406:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1407:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1408:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1409:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1410:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1411:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1412:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1413:CALL*/regs.push(272);reg_ip=36;
}
/*1414*/
code[272]=function(){
/*+1414:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1415:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1416:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1417:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1418:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1419:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1420:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1421:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1422:CALL*/regs.push(273);reg_ip=36;
}
/*1423*/
code[273]=function(){
/*+1423:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1424:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1425:CALL*/regs.push(274);reg_ip=17;
}
/*1426*/
code[274]=function(){
/*+1426:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1427:ILDC*/memint32[reg_sp4-1]=+65
/*+1428:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1429:CALL*/regs.push(275);reg_ip=11;
}
/*1430*/
code[275]=function(){
/*+1430:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1431:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1432:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1433:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1434:CALL*/regs.push(276);reg_ip=20;
}
/*1435*/
code[276]=function(){
/*+1435:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1436:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1437:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1438:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1439:CALL*/regs.push(277);reg_ip=32;
}
/*1440*/
code[277]=function(){
/*+1440:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1441:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1442:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1443:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1444:CALL*/regs.push(278);reg_ip=32;
}
/*1445*/
code[278]=function(){
/*+1445:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1446:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1447:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1448:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1449:CALL*/regs.push(279);reg_ip=20;
}
/*1450*/
code[279]=function(){
/*+1450:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1451:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1452:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1453:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1454:CALL*/regs.push(280);reg_ip=32;
}
/*1455*/
code[280]=function(){
/*+1455:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1456:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1457:CALL*/regs.push(281);reg_ip=17;
}
/*1458*/
code[281]=function(){
/*+1458:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1459:ILDC*/memint32[reg_sp4-1]=+66
/*+1460:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1461:CALL*/regs.push(282);reg_ip=11;
}
/*1462*/
code[282]=function(){
/*+1462:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1463:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1464:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1465:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1466:CALL*/regs.push(283);reg_ip=20;
}
/*1467*/
code[283]=function(){
/*+1467:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1468:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1469:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1470:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1471:CALL*/regs.push(284);reg_ip=32;
}
/*1472*/
code[284]=function(){
/*+1472:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1473:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1474:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1475:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1476:CALL*/regs.push(285);reg_ip=20;
}
/*1477*/
code[285]=function(){
/*+1477:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1478:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1479:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1480:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1481:CALL*/regs.push(286);reg_ip=32;
}
/*1482*/
code[286]=function(){
/*+1482:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1483:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1484:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1485:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1486:CALL*/regs.push(287);reg_ip=32;
}
/*1487*/
code[287]=function(){
/*+1487:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1488:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1489:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1490:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1491:CALL*/regs.push(288);reg_ip=32;
}
/*1492*/
code[288]=function(){
/*+1492:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1493:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1494:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1495:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1496:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1497:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1498:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1499:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1500:CALL*/regs.push(289);reg_ip=36;
}
/*1501*/
code[289]=function(){
/*+1501:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1502:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1503:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1504:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1505:CALL*/regs.push(290);reg_ip=24;
}
/*1506*/
code[290]=function(){
/*+1506:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1507:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1508:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1509:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1510:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1511:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1512:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1513:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1514:CALL*/regs.push(291);reg_ip=36;
}
/*1515*/
code[291]=function(){
/*+1515:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1516:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1517:CALL*/regs.push(292);reg_ip=17;
}
/*1518*/
code[292]=function(){
/*+1518:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1519:ILDC*/memint32[reg_sp4-1]=+67
/*+1520:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1521:CALL*/regs.push(293);reg_ip=11;
}
/*1522*/
code[293]=function(){
/*+1522:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1523:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1524:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1525:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1526:CALL*/regs.push(294);reg_ip=20;
}
/*1527*/
code[294]=function(){
/*+1527:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1528:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1529:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1530:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1531:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1532:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1533:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1534:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1535:CALL*/regs.push(295);reg_ip=36;
}
/*1536*/
code[295]=function(){
/*+1536:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1537:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1538:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1539:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1540:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1541:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1542:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1543:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1544:CALL*/regs.push(296);reg_ip=36;
}
/*1545*/
code[296]=function(){
/*+1545:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1546:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1547:CALL*/regs.push(297);reg_ip=17;
}
/*1548*/
code[297]=function(){
/*+1548:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1549:ILDC*/memint32[reg_sp4-1]=+68
/*+1550:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1551:CALL*/regs.push(298);reg_ip=11;
}
/*1552*/
code[298]=function(){
/*+1552:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1553:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1554:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1555:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1556:CALL*/regs.push(299);reg_ip=20;
}
/*1557*/
code[299]=function(){
/*+1557:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1558:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1559:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1560:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1561:CALL*/regs.push(300);reg_ip=32;
}
/*1562*/
code[300]=function(){
/*+1562:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1563:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1564:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1565:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1566:CALL*/regs.push(301);reg_ip=32;
}
/*1567*/
code[301]=function(){
/*+1567:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1568:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1569:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1570:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1571:CALL*/regs.push(302);reg_ip=32;
}
/*1572*/
code[302]=function(){
/*+1572:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1573:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1574:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1575:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1576:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1577:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1578:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1579:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1580:CALL*/regs.push(303);reg_ip=36;
}
/*1581*/
code[303]=function(){
/*+1581:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1582:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1583:CALL*/regs.push(304);reg_ip=17;
}
/*1584*/
code[304]=function(){
/*+1584:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1585:ILDC*/memint32[reg_sp4-1]=+69
/*+1586:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1587:CALL*/regs.push(305);reg_ip=11;
}
/*1588*/
code[305]=function(){
/*+1588:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1589:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1590:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1591:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1592:CALL*/regs.push(306);reg_ip=20;
}
/*1593*/
code[306]=function(){
/*+1593:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1594:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1595:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1596:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1597:CALL*/regs.push(307);reg_ip=32;
}
/*1598*/
code[307]=function(){
/*+1598:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1599:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1600:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1601:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1602:CALL*/regs.push(308);reg_ip=32;
}
/*1603*/
code[308]=function(){
/*+1603:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1604:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1605:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1606:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1607:CALL*/regs.push(309);reg_ip=32;
}
/*1608*/
code[309]=function(){
/*+1608:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1609:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1610:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1611:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1612:CALL*/regs.push(310);reg_ip=20;
}
/*1613*/
code[310]=function(){
/*+1613:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1614:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1615:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1616:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1617:CALL*/regs.push(311);reg_ip=32;
}
/*1618*/
code[311]=function(){
/*+1618:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1619:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1620:CALL*/regs.push(312);reg_ip=17;
}
/*1621*/
code[312]=function(){
/*+1621:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1622:ILDC*/memint32[reg_sp4-1]=+70
/*+1623:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1624:CALL*/regs.push(313);reg_ip=11;
}
/*1625*/
code[313]=function(){
/*+1625:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1626:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1627:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1628:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1629:CALL*/regs.push(314);reg_ip=20;
}
/*1630*/
code[314]=function(){
/*+1630:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1631:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1632:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1633:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1634:CALL*/regs.push(315);reg_ip=32;
}
/*1635*/
code[315]=function(){
/*+1635:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1636:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1637:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1638:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1639:CALL*/regs.push(316);reg_ip=32;
}
/*1640*/
code[316]=function(){
/*+1640:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1641:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1642:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1643:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1644:CALL*/regs.push(317);reg_ip=20;
}
/*1645*/
code[317]=function(){
/*+1645:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1646:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1647:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1648:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1649:CALL*/regs.push(318);reg_ip=32;
}
/*1650*/
code[318]=function(){
/*+1650:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1651:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1652:CALL*/regs.push(319);reg_ip=17;
}
/*1653*/
code[319]=function(){
/*+1653:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1654:ILDC*/memint32[reg_sp4-1]=+71
/*+1655:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1656:CALL*/regs.push(320);reg_ip=11;
}
/*1657*/
code[320]=function(){
/*+1657:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1658:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1659:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1660:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1661:CALL*/regs.push(321);reg_ip=20;
}
/*1662*/
code[321]=function(){
/*+1662:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1663:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1664:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1665:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1666:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1667:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1668:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1669:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1670:CALL*/regs.push(322);reg_ip=36;
}
/*1671*/
code[322]=function(){
/*+1671:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1672:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1673:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1674:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1675:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1676:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1677:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1678:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1679:CALL*/regs.push(323);reg_ip=36;
}
/*1680*/
code[323]=function(){
/*+1680:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1681:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1682:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1683:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1684:CALL*/regs.push(324);reg_ip=20;
}
/*1685*/
code[324]=function(){
/*+1685:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1686:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1687:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1688:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1689:CALL*/regs.push(325);reg_ip=32;
}
/*1690*/
code[325]=function(){
/*+1690:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1691:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1692:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1693:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1694:CALL*/regs.push(326);reg_ip=32;
}
/*1695*/
code[326]=function(){
/*+1695:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1696:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1697:CALL*/regs.push(327);reg_ip=17;
}
/*1698*/
code[327]=function(){
/*+1698:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1699:ILDC*/memint32[reg_sp4-1]=+72
/*+1700:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1701:CALL*/regs.push(328);reg_ip=11;
}
/*1702*/
code[328]=function(){
/*+1702:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1703:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1704:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1705:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1706:CALL*/regs.push(329);reg_ip=20;
}
/*1707*/
code[329]=function(){
/*+1707:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1708:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1709:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1710:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1711:CALL*/regs.push(330);reg_ip=32;
}
/*1712*/
code[330]=function(){
/*+1712:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1713:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1714:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1715:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1716:CALL*/regs.push(331);reg_ip=20;
}
/*1717*/
code[331]=function(){
/*+1717:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1718:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1719:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1720:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1721:CALL*/regs.push(332);reg_ip=32;
}
/*1722*/
code[332]=function(){
/*+1722:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1723:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1724:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1725:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1726:CALL*/regs.push(333);reg_ip=20;
}
/*1727*/
code[333]=function(){
/*+1727:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1728:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1729:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1730:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1731:CALL*/regs.push(334);reg_ip=32;
}
/*1732*/
code[334]=function(){
/*+1732:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1733:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1734:CALL*/regs.push(335);reg_ip=17;
}
/*1735*/
code[335]=function(){
/*+1735:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1736:ILDC*/memint32[reg_sp4-1]=+73
/*+1737:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1738:CALL*/regs.push(336);reg_ip=11;
}
/*1739*/
code[336]=function(){
/*+1739:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1740:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1741:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1742:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1743:CALL*/regs.push(337);reg_ip=20;
}
/*1744*/
code[337]=function(){
/*+1744:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1745:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1746:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1747:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1748:CALL*/regs.push(338);reg_ip=32;
}
/*1749*/
code[338]=function(){
/*+1749:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1750:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1751:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1752:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1753:CALL*/regs.push(339);reg_ip=20;
}
/*1754*/
code[339]=function(){
/*+1754:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1755:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1756:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1757:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1758:CALL*/regs.push(340);reg_ip=32;
}
/*1759*/
code[340]=function(){
/*+1759:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1760:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1761:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1762:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1763:CALL*/regs.push(341);reg_ip=20;
}
/*1764*/
code[341]=function(){
/*+1764:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1765:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1766:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1767:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1768:CALL*/regs.push(342);reg_ip=32;
}
/*1769*/
code[342]=function(){
/*+1769:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1770:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1771:CALL*/regs.push(343);reg_ip=17;
}
/*1772*/
code[343]=function(){
/*+1772:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1773:ILDC*/memint32[reg_sp4-1]=+74
/*+1774:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1775:CALL*/regs.push(344);reg_ip=11;
}
/*1776*/
code[344]=function(){
/*+1776:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1777:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1778:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1779:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1780:CALL*/regs.push(345);reg_ip=20;
}
/*1781*/
code[345]=function(){
/*+1781:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1782:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1783:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1784:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1785:CALL*/regs.push(346);reg_ip=32;
}
/*1786*/
code[346]=function(){
/*+1786:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1787:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1788:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1789:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1790:CALL*/regs.push(347);reg_ip=20;
}
/*1791*/
code[347]=function(){
/*+1791:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1792:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1793:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1794:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1795:CALL*/regs.push(348);reg_ip=32;
}
/*1796*/
code[348]=function(){
/*+1796:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1797:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1798:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1799:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1800:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1801:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1802:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1803:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1804:CALL*/regs.push(349);reg_ip=36;
}
/*1805*/
code[349]=function(){
/*+1805:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1807:CALL*/regs.push(350);reg_ip=17;
}
/*1808*/
code[350]=function(){
/*+1808:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1809:ILDC*/memint32[reg_sp4-1]=+75
/*+1810:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1811:CALL*/regs.push(351);reg_ip=11;
}
/*1812*/
code[351]=function(){
/*+1812:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1813:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1814:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1815:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1816:CALL*/regs.push(352);reg_ip=20;
}
/*1817*/
code[352]=function(){
/*+1817:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1818:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1819:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1820:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1821:CALL*/regs.push(353);reg_ip=32;
}
/*1822*/
code[353]=function(){
/*+1822:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1823:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1824:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1825:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1826:CALL*/regs.push(354);reg_ip=20;
}
/*1827*/
code[354]=function(){
/*+1827:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1828:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1829:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1830:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1831:CALL*/regs.push(355);reg_ip=32;
}
/*1832*/
code[355]=function(){
/*+1832:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1833:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1834:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1835:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1836:CALL*/regs.push(356);reg_ip=20;
}
/*1837*/
code[356]=function(){
/*+1837:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1838:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1839:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1840:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1841:CALL*/regs.push(357);reg_ip=32;
}
/*1842*/
code[357]=function(){
/*+1842:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1843:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1844:CALL*/regs.push(358);reg_ip=17;
}
/*1845*/
code[358]=function(){
/*+1845:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1846:ILDC*/memint32[reg_sp4-1]=+76
/*+1847:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1848:CALL*/regs.push(359);reg_ip=11;
}
/*1849*/
code[359]=function(){
/*+1849:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1850:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1851:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1852:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1853:CALL*/regs.push(360);reg_ip=20;
}
/*1854*/
code[360]=function(){
/*+1854:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1855:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1856:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1857:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1858:CALL*/regs.push(361);reg_ip=32;
}
/*1859*/
code[361]=function(){
/*+1859:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1860:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1861:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1862:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1863:CALL*/regs.push(362);reg_ip=32;
}
/*1864*/
code[362]=function(){
/*+1864:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1865:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1866:CALL*/regs.push(363);reg_ip=17;
}
/*1867*/
code[363]=function(){
/*+1867:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1868:ILDC*/memint32[reg_sp4-1]=+77
/*+1869:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1870:CALL*/regs.push(364);reg_ip=11;
}
/*1871*/
code[364]=function(){
/*+1871:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1872:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1873:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1874:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1875:CALL*/regs.push(365);reg_ip=20;
}
/*1876*/
code[365]=function(){
/*+1876:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1877:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1878:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1879:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1880:CALL*/regs.push(366);reg_ip=32;
}
/*1881*/
code[366]=function(){
/*+1881:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1882:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1883:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1884:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1885:CALL*/regs.push(367);reg_ip=32;
}
/*1886*/
code[367]=function(){
/*+1886:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1887:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1888:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1889:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1890:CALL*/regs.push(368);reg_ip=32;
}
/*1891*/
code[368]=function(){
/*+1891:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1892:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1893:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1894:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1895:CALL*/regs.push(369);reg_ip=32;
}
/*1896*/
code[369]=function(){
/*+1896:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1897:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1898:CALL*/regs.push(370);reg_ip=17;
}
/*1899*/
code[370]=function(){
/*+1899:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1900:ILDC*/memint32[reg_sp4-1]=+78
/*+1901:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1902:CALL*/regs.push(371);reg_ip=11;
}
/*1903*/
code[371]=function(){
/*+1903:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1904:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1905:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1906:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1907:CALL*/regs.push(372);reg_ip=20;
}
/*1908*/
code[372]=function(){
/*+1908:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1909:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1910:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1911:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1912:CALL*/regs.push(373);reg_ip=32;
}
/*1913*/
code[373]=function(){
/*+1913:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1914:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1915:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1916:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1917:CALL*/regs.push(374);reg_ip=32;
}
/*1918*/
code[374]=function(){
/*+1918:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1919:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1920:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1921:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1922:CALL*/regs.push(375);reg_ip=32;
}
/*1923*/
code[375]=function(){
/*+1923:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1924:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1925:CALL*/regs.push(376);reg_ip=17;
}
/*1926*/
code[376]=function(){
/*+1926:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1927:ILDC*/memint32[reg_sp4-1]=+79
/*+1928:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1929:CALL*/regs.push(377);reg_ip=11;
}
/*1930*/
code[377]=function(){
/*+1930:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1931:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1932:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1933:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1934:CALL*/regs.push(378);reg_ip=20;
}
/*1935*/
code[378]=function(){
/*+1935:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1936:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1937:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1938:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1939:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1940:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1941:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1942:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1943:CALL*/regs.push(379);reg_ip=36;
}
/*1944*/
code[379]=function(){
/*+1944:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1945:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1946:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1947:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1948:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1949:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1950:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1951:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1952:CALL*/regs.push(380);reg_ip=36;
}
/*1953*/
code[380]=function(){
/*+1953:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1954:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1955:CALL*/regs.push(381);reg_ip=17;
}
/*1956*/
code[381]=function(){
/*+1956:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1957:ILDC*/memint32[reg_sp4-1]=+80
/*+1958:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1959:CALL*/regs.push(382);reg_ip=11;
}
/*1960*/
code[382]=function(){
/*+1960:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1961:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1962:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1963:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1964:CALL*/regs.push(383);reg_ip=20;
}
/*1965*/
code[383]=function(){
/*+1965:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1966:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1967:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1968:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1969:CALL*/regs.push(384);reg_ip=32;
}
/*1970*/
code[384]=function(){
/*+1970:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1971:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1972:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1973:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1974:CALL*/regs.push(385);reg_ip=20;
}
/*1975*/
code[385]=function(){
/*+1975:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1976:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1977:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1978:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1979:CALL*/regs.push(386);reg_ip=32;
}
/*1980*/
code[386]=function(){
/*+1980:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1981:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1982:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1983:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1984:CALL*/regs.push(387);reg_ip=32;
}
/*1985*/
code[387]=function(){
/*+1985:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1986:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1987:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1988:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1989:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1990:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1991:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1992:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1993:CALL*/regs.push(388);reg_ip=36;
}
/*1994*/
code[388]=function(){
/*+1994:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1995:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+1996:CALL*/regs.push(389);reg_ip=17;
}
/*1997*/
code[389]=function(){
/*+1997:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1998:ILDC*/memint32[reg_sp4-1]=+81
/*+1999:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2000:CALL*/regs.push(390);reg_ip=11;
}
/*2001*/
code[390]=function(){
/*+2001:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2002:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2003:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2004:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2005:CALL*/regs.push(391);reg_ip=20;
}
/*2006*/
code[391]=function(){
/*+2006:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2007:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2008:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2009:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2010:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2011:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2012:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2013:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2014:CALL*/regs.push(392);reg_ip=36;
}
/*2015*/
code[392]=function(){
/*+2015:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2016:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2017:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2018:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2019:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2020:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2021:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2022:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2023:CALL*/regs.push(393);reg_ip=36;
}
/*2024*/
code[393]=function(){
/*+2024:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2025:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2026:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2027:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2028:CALL*/regs.push(394);reg_ip=20;
}
/*2029*/
code[394]=function(){
/*+2029:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2030:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2031:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2032:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2033:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2034:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2035:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2036:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2037:CALL*/regs.push(395);reg_ip=36;
}
/*2038*/
code[395]=function(){
/*+2038:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2039:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2040:CALL*/regs.push(396);reg_ip=17;
}
/*2041*/
code[396]=function(){
/*+2041:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2042:ILDC*/memint32[reg_sp4-1]=+82
/*+2043:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2044:CALL*/regs.push(397);reg_ip=11;
}
/*2045*/
code[397]=function(){
/*+2045:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2046:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2047:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2048:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2049:CALL*/regs.push(398);reg_ip=20;
}
/*2050*/
code[398]=function(){
/*+2050:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2051:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2052:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2053:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2054:CALL*/regs.push(399);reg_ip=32;
}
/*2055*/
code[399]=function(){
/*+2055:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2056:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2057:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2058:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2059:CALL*/regs.push(400);reg_ip=20;
}
/*2060*/
code[400]=function(){
/*+2060:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2061:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2062:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2063:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2064:CALL*/regs.push(401);reg_ip=32;
}
/*2065*/
code[401]=function(){
/*+2065:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2066:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2067:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2068:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2069:CALL*/regs.push(402);reg_ip=32;
}
/*2070*/
code[402]=function(){
/*+2070:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2071:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2072:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2073:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2074:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2075:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2076:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2077:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2078:CALL*/regs.push(403);reg_ip=36;
}
/*2079*/
code[403]=function(){
/*+2079:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2080:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2081:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2082:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2083:CALL*/regs.push(404);reg_ip=20;
}
/*2084*/
code[404]=function(){
/*+2084:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2085:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2086:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2087:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2088:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2089:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2090:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2091:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2092:CALL*/regs.push(405);reg_ip=36;
}
/*2093*/
code[405]=function(){
/*+2093:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2094:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2095:CALL*/regs.push(406);reg_ip=17;
}
/*2096*/
code[406]=function(){
/*+2096:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2097:ILDC*/memint32[reg_sp4-1]=+83
/*+2098:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2099:CALL*/regs.push(407);reg_ip=11;
}
/*2100*/
code[407]=function(){
/*+2100:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2101:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2102:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2103:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2104:CALL*/regs.push(408);reg_ip=20;
}
/*2105*/
code[408]=function(){
/*+2105:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2106:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2107:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2108:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2109:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2110:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2111:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2112:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2113:CALL*/regs.push(409);reg_ip=36;
}
/*2114*/
code[409]=function(){
/*+2114:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2115:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2116:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2117:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2118:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2119:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2120:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2121:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2122:CALL*/regs.push(410);reg_ip=36;
}
/*2123*/
code[410]=function(){
/*+2123:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2124:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2125:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2126:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2127:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2128:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2129:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2130:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2131:CALL*/regs.push(411);reg_ip=36;
}
/*2132*/
code[411]=function(){
/*+2132:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2133:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2134:CALL*/regs.push(412);reg_ip=17;
}
/*2135*/
code[412]=function(){
/*+2135:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2136:ILDC*/memint32[reg_sp4-1]=+84
/*+2137:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2138:CALL*/regs.push(413);reg_ip=11;
}
/*2139*/
code[413]=function(){
/*+2139:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2140:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2141:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2142:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2143:CALL*/regs.push(414);reg_ip=20;
}
/*2144*/
code[414]=function(){
/*+2144:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2145:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2146:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2147:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2148:CALL*/regs.push(415);reg_ip=32;
}
/*2149*/
code[415]=function(){
/*+2149:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2150:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2151:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2152:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2153:CALL*/regs.push(416);reg_ip=20;
}
/*2154*/
code[416]=function(){
/*+2154:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2155:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2156:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2157:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2158:CALL*/regs.push(417);reg_ip=32;
}
/*2159*/
code[417]=function(){
/*+2159:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2160:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2161:CALL*/regs.push(418);reg_ip=17;
}
/*2162*/
code[418]=function(){
/*+2162:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2163:ILDC*/memint32[reg_sp4-1]=+85
/*+2164:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2165:CALL*/regs.push(419);reg_ip=11;
}
/*2166*/
code[419]=function(){
/*+2166:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2167:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2168:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2169:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2170:CALL*/regs.push(420);reg_ip=20;
}
/*2171*/
code[420]=function(){
/*+2171:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2172:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2173:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2174:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2175:CALL*/regs.push(421);reg_ip=32;
}
/*2176*/
code[421]=function(){
/*+2176:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2177:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2178:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2179:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2180:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2181:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2182:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2183:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2184:CALL*/regs.push(422);reg_ip=36;
}
/*2185*/
code[422]=function(){
/*+2185:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2186:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2187:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2188:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2189:CALL*/regs.push(423);reg_ip=32;
}
/*2190*/
code[423]=function(){
/*+2190:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2191:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2192:CALL*/regs.push(424);reg_ip=17;
}
/*2193*/
code[424]=function(){
/*+2193:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2194:ILDC*/memint32[reg_sp4-1]=+86
/*+2195:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2196:CALL*/regs.push(425);reg_ip=11;
}
/*2197*/
code[425]=function(){
/*+2197:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2198:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2199:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2200:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2201:CALL*/regs.push(426);reg_ip=20;
}
/*2202*/
code[426]=function(){
/*+2202:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2203:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2204:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2205:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2206:CALL*/regs.push(427);reg_ip=32;
}
/*2207*/
code[427]=function(){
/*+2207:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2208:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2209:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2210:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2211:CALL*/regs.push(428);reg_ip=32;
}
/*2212*/
code[428]=function(){
/*+2212:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2213:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2214:CALL*/regs.push(429);reg_ip=17;
}
/*2215*/
code[429]=function(){
/*+2215:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2216:ILDC*/memint32[reg_sp4-1]=+87
/*+2217:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2218:CALL*/regs.push(430);reg_ip=11;
}
/*2219*/
code[430]=function(){
/*+2219:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2220:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2221:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2222:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2223:CALL*/regs.push(431);reg_ip=20;
}
/*2224*/
code[431]=function(){
/*+2224:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2225:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2226:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2227:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2228:CALL*/regs.push(432);reg_ip=32;
}
/*2229*/
code[432]=function(){
/*+2229:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2230:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2231:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2232:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2233:CALL*/regs.push(433);reg_ip=32;
}
/*2234*/
code[433]=function(){
/*+2234:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2235:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2236:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2237:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2238:CALL*/regs.push(434);reg_ip=32;
}
/*2239*/
code[434]=function(){
/*+2239:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2240:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2241:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2242:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2243:CALL*/regs.push(435);reg_ip=32;
}
/*2244*/
code[435]=function(){
/*+2244:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2245:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2246:CALL*/regs.push(436);reg_ip=17;
}
/*2247*/
code[436]=function(){
/*+2247:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2248:ILDC*/memint32[reg_sp4-1]=+88
/*+2249:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2250:CALL*/regs.push(437);reg_ip=11;
}
/*2251*/
code[437]=function(){
/*+2251:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2252:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2253:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2254:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2255:CALL*/regs.push(438);reg_ip=20;
}
/*2256*/
code[438]=function(){
/*+2256:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2257:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2258:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2259:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2260:CALL*/regs.push(439);reg_ip=32;
}
/*2261*/
code[439]=function(){
/*+2261:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2262:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2263:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2264:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2265:CALL*/regs.push(440);reg_ip=20;
}
/*2266*/
code[440]=function(){
/*+2266:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2267:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2268:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2269:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2270:CALL*/regs.push(441);reg_ip=32;
}
/*2271*/
code[441]=function(){
/*+2271:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2272:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2273:CALL*/regs.push(442);reg_ip=17;
}
/*2274*/
code[442]=function(){
/*+2274:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2275:ILDC*/memint32[reg_sp4-1]=+89
/*+2276:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2277:CALL*/regs.push(443);reg_ip=11;
}
/*2278*/
code[443]=function(){
/*+2278:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2279:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2280:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2281:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2282:CALL*/regs.push(444);reg_ip=20;
}
/*2283*/
code[444]=function(){
/*+2283:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2284:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2285:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2286:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2287:CALL*/regs.push(445);reg_ip=32;
}
/*2288*/
code[445]=function(){
/*+2288:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2289:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2290:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2291:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2292:CALL*/regs.push(446);reg_ip=32;
}
/*2293*/
code[446]=function(){
/*+2293:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2294:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2295:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2296:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2297:CALL*/regs.push(447);reg_ip=20;
}
/*2298*/
code[447]=function(){
/*+2298:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2299:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2300:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2301:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2302:CALL*/regs.push(448);reg_ip=32;
}
/*2303*/
code[448]=function(){
/*+2303:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2304:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2305:CALL*/regs.push(449);reg_ip=17;
}
/*2306*/
code[449]=function(){
/*+2306:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2307:ILDC*/memint32[reg_sp4-1]=+90
/*+2308:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2309:CALL*/regs.push(450);reg_ip=11;
}
/*2310*/
code[450]=function(){
/*+2310:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2311:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2312:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2313:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2314:CALL*/regs.push(451);reg_ip=20;
}
/*2315*/
code[451]=function(){
/*+2315:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2316:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2317:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2318:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2319:CALL*/regs.push(452);reg_ip=32;
}
/*2320*/
code[452]=function(){
/*+2320:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2321:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2322:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2323:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2324:CALL*/regs.push(453);reg_ip=32;
}
/*2325*/
code[453]=function(){
/*+2325:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2326:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2327:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2328:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2329:CALL*/regs.push(454);reg_ip=32;
}
/*2330*/
code[454]=function(){
/*+2330:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2331:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2332:CALL*/regs.push(455);reg_ip=17;
}
/*2333*/
code[455]=function(){
/*+2333:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2334:ILDC*/memint32[reg_sp4-1]=+91
/*+2335:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2336:CALL*/regs.push(456);reg_ip=11;
}
/*2337*/
code[456]=function(){
/*+2337:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2338:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2339:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2340:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2341:CALL*/regs.push(457);reg_ip=20;
}
/*2342*/
code[457]=function(){
/*+2342:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2343:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2344:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2345:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2346:CALL*/regs.push(458);reg_ip=32;
}
/*2347*/
code[458]=function(){
/*+2347:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2348:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2349:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2350:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2351:CALL*/regs.push(459);reg_ip=32;
}
/*2352*/
code[459]=function(){
/*+2352:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2353:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2354:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2355:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2356:CALL*/regs.push(460);reg_ip=32;
}
/*2357*/
code[460]=function(){
/*+2357:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2358:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2359:CALL*/regs.push(461);reg_ip=17;
}
/*2360*/
code[461]=function(){
/*+2360:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2361:ILDC*/memint32[reg_sp4-1]=+92
/*+2362:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2363:CALL*/regs.push(462);reg_ip=11;
}
/*2364*/
code[462]=function(){
/*+2364:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2365:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2366:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2367:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2368:CALL*/regs.push(463);reg_ip=20;
}
/*2369*/
code[463]=function(){
/*+2369:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2370:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2371:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2372:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2373:CALL*/regs.push(464);reg_ip=32;
}
/*2374*/
code[464]=function(){
/*+2374:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2375:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2376:CALL*/regs.push(465);reg_ip=17;
}
/*2377*/
code[465]=function(){
/*+2377:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2378:ILDC*/memint32[reg_sp4-1]=+94
/*+2379:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2380:CALL*/regs.push(466);reg_ip=11;
}
/*2381*/
code[466]=function(){
/*+2381:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2382:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2383:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2384:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2385:CALL*/regs.push(467);reg_ip=20;
}
/*2386*/
code[467]=function(){
/*+2386:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2387:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2388:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2389:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2390:CALL*/regs.push(468);reg_ip=32;
}
/*2391*/
code[468]=function(){
/*+2391:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2392:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2393:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2394:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2395:CALL*/regs.push(469);reg_ip=32;
}
/*2396*/
code[469]=function(){
/*+2396:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2397:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2398:CALL*/regs.push(470);reg_ip=17;
}
/*2399*/
code[470]=function(){
/*+2399:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2400:ILDC*/memint32[reg_sp4-1]=+95
/*+2401:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2402:CALL*/regs.push(471);reg_ip=11;
}
/*2403*/
code[471]=function(){
/*+2403:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2404:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2405:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2406:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2407:CALL*/regs.push(472);reg_ip=20;
}
/*2408*/
code[472]=function(){
/*+2408:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2409:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2410:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2411:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2412:CALL*/regs.push(473);reg_ip=32;
}
/*2413*/
code[473]=function(){
/*+2413:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2414:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2415:CALL*/regs.push(474);reg_ip=17;
}
/*2416*/
code[474]=function(){
/*+2416:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2417:ILDC*/memint32[reg_sp4-1]=+93
/*+2418:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2419:CALL*/regs.push(475);reg_ip=11;
}
/*2420*/
code[475]=function(){
/*+2420:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2421:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2422:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2423:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2424:CALL*/regs.push(476);reg_ip=20;
}
/*2425*/
code[476]=function(){
/*+2425:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2426:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2427:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2428:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2429:CALL*/regs.push(477);reg_ip=32;
}
/*2430*/
code[477]=function(){
/*+2430:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2431:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+11.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2432:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2433:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2434:CALL*/regs.push(478);reg_ip=32;
}
/*2435*/
code[478]=function(){
/*+2435:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2436:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2437:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2438:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2439:CALL*/regs.push(479);reg_ip=32;
}
/*2440*/
code[479]=function(){
/*+2440:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2441:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2442:CALL*/regs.push(480);reg_ip=17;
}
/*2443*/
code[480]=function(){
/*+2443:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2444:ILDC*/memint32[reg_sp4-1]=+96
/*+2445:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2446:CALL*/regs.push(481);reg_ip=11;
}
/*2447*/
code[481]=function(){
/*+2447:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2448:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2449:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2450:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2451:CALL*/regs.push(482);reg_ip=20;
}
/*2452*/
code[482]=function(){
/*+2452:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2453:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2454:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2455:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2456:CALL*/regs.push(483);reg_ip=32;
}
/*2457*/
code[483]=function(){
/*+2457:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2458:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2459:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2460:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2461:CALL*/regs.push(484);reg_ip=32;
}
/*2462*/
code[484]=function(){
/*+2462:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2463:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2464:CALL*/regs.push(485);reg_ip=17;
}
/*2465*/
code[485]=function(){
/*+2465:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2466:ILDC*/memint32[reg_sp4-1]=+97
/*+2467:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2468:CALL*/regs.push(486);reg_ip=11;
}
/*2469*/
code[486]=function(){
/*+2469:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2470:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2471:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2472:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2473:CALL*/regs.push(487);reg_ip=20;
}
/*2474*/
code[487]=function(){
/*+2474:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2475:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2476:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2477:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2478:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2479:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2480:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2481:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2482:CALL*/regs.push(488);reg_ip=36;
}
/*2483*/
code[488]=function(){
/*+2483:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2484:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2485:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2486:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2487:CALL*/regs.push(489);reg_ip=32;
}
/*2488*/
code[489]=function(){
/*+2488:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2489:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2490:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2491:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2492:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2493:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2494:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2495:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2496:CALL*/regs.push(490);reg_ip=36;
}
/*2497*/
code[490]=function(){
/*+2497:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2498:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2499:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2500:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2501:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2502:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2503:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2504:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2505:CALL*/regs.push(491);reg_ip=36;
}
/*2506*/
code[491]=function(){
/*+2506:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2507:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2508:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2509:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2510:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2511:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2512:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2513:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2514:CALL*/regs.push(492);reg_ip=36;
}
/*2515*/
code[492]=function(){
/*+2515:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2516:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2517:CALL*/regs.push(493);reg_ip=17;
}
/*2518*/
code[493]=function(){
/*+2518:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2519:ILDC*/memint32[reg_sp4-1]=+98
/*+2520:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2521:CALL*/regs.push(494);reg_ip=11;
}
/*2522*/
code[494]=function(){
/*+2522:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2523:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2524:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2525:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2526:CALL*/regs.push(495);reg_ip=20;
}
/*2527*/
code[495]=function(){
/*+2527:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2528:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2529:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2530:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2531:CALL*/regs.push(496);reg_ip=32;
}
/*2532*/
code[496]=function(){
/*+2532:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2533:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2534:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2535:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2536:CALL*/regs.push(497);reg_ip=20;
}
/*2537*/
code[497]=function(){
/*+2537:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2538:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2539:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2540:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2541:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2542:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2543:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2544:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2545:CALL*/regs.push(498);reg_ip=36;
}
/*2546*/
code[498]=function(){
/*+2546:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2547:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2548:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2549:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2550:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2551:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2552:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2553:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2554:CALL*/regs.push(499);reg_ip=36;
}
/*2555*/
code[499]=function(){
/*+2555:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2556:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2557:CALL*/regs.push(500);reg_ip=17;
}
/*2558*/
code[500]=function(){
/*+2558:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2559:ILDC*/memint32[reg_sp4-1]=+99
/*+2560:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2561:CALL*/regs.push(501);reg_ip=11;
}
/*2562*/
code[501]=function(){
/*+2562:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2563:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2564:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2565:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2566:CALL*/regs.push(502);reg_ip=20;
}
/*2567*/
code[502]=function(){
/*+2567:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2568:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2569:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2570:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2571:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2572:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2573:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2574:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2575:CALL*/regs.push(503);reg_ip=36;
}
/*2576*/
code[503]=function(){
/*+2576:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2577:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2578:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2579:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2580:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2581:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2582:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2583:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2584:CALL*/regs.push(504);reg_ip=36;
}
/*2585*/
code[504]=function(){
/*+2585:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2586:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2587:CALL*/regs.push(505);reg_ip=17;
}
/*2588*/
code[505]=function(){
/*+2588:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2589:ILDC*/memint32[reg_sp4-1]=+100
/*+2590:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2591:CALL*/regs.push(506);reg_ip=11;
}
/*2592*/
code[506]=function(){
/*+2592:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2593:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2594:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2595:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2596:CALL*/regs.push(507);reg_ip=20;
}
/*2597*/
code[507]=function(){
/*+2597:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2598:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2599:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2600:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2601:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2602:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2603:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2604:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2605:CALL*/regs.push(508);reg_ip=36;
}
/*2606*/
code[508]=function(){
/*+2606:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2607:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2608:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2609:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2610:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2611:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2612:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2613:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2614:CALL*/regs.push(509);reg_ip=36;
}
/*2615*/
code[509]=function(){
/*+2615:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2616:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2617:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2618:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2619:CALL*/regs.push(510);reg_ip=20;
}
/*2620*/
code[510]=function(){
/*+2620:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2621:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2622:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2623:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2624:CALL*/regs.push(511);reg_ip=32;
}
/*2625*/
code[511]=function(){
/*+2625:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2626:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2627:CALL*/regs.push(512);reg_ip=17;
}
/*2628*/
code[512]=function(){
/*+2628:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2629:ILDC*/memint32[reg_sp4-1]=+101
/*+2630:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2631:CALL*/regs.push(513);reg_ip=11;
}
/*2632*/
code[513]=function(){
/*+2632:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2633:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2634:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2635:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2636:CALL*/regs.push(514);reg_ip=20;
}
/*2637*/
code[514]=function(){
/*+2637:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2638:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2639:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2640:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2641:CALL*/regs.push(515);reg_ip=32;
}
/*2642*/
code[515]=function(){
/*+2642:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2643:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2644:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2645:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2646:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2647:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2648:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2649:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2650:CALL*/regs.push(516);reg_ip=36;
}
/*2651*/
code[516]=function(){
/*+2651:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2652:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2653:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2654:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2655:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2656:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2657:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2658:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2659:CALL*/regs.push(517);reg_ip=36;
}
/*2660*/
code[517]=function(){
/*+2660:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2661:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2662:CALL*/regs.push(518);reg_ip=17;
}
/*2663*/
code[518]=function(){
/*+2663:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2664:ILDC*/memint32[reg_sp4-1]=+102
/*+2665:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2666:CALL*/regs.push(519);reg_ip=11;
}
/*2667*/
code[519]=function(){
/*+2667:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2668:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2669:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2670:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2671:CALL*/regs.push(520);reg_ip=20;
}
/*2672*/
code[520]=function(){
/*+2672:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2673:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2674:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2675:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2676:CALL*/regs.push(521);reg_ip=32;
}
/*2677*/
code[521]=function(){
/*+2677:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2678:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2679:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2680:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2681:CALL*/regs.push(522);reg_ip=20;
}
/*2682*/
code[522]=function(){
/*+2682:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2683:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2684:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2685:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2686:CALL*/regs.push(523);reg_ip=32;
}
/*2687*/
code[523]=function(){
/*+2687:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2688:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2689:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2690:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2691:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2692:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2693:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2694:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2695:CALL*/regs.push(524);reg_ip=36;
}
/*2696*/
code[524]=function(){
/*+2696:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2697:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2698:CALL*/regs.push(525);reg_ip=17;
}
/*2699*/
code[525]=function(){
/*+2699:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2700:ILDC*/memint32[reg_sp4-1]=+103
/*+2701:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2702:CALL*/regs.push(526);reg_ip=11;
}
/*2703*/
code[526]=function(){
/*+2703:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2704:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2705:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2706:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2707:CALL*/regs.push(527);reg_ip=20;
}
/*2708*/
code[527]=function(){
/*+2708:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2709:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2710:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2711:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2712:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2713:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2714:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2715:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2716:CALL*/regs.push(528);reg_ip=36;
}
/*2717*/
code[528]=function(){
/*+2717:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2718:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2719:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2720:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2721:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2722:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2723:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2724:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2725:CALL*/regs.push(529);reg_ip=36;
}
/*2726*/
code[529]=function(){
/*+2726:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2727:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2728:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2729:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2730:CALL*/regs.push(530);reg_ip=20;
}
/*2731*/
code[530]=function(){
/*+2731:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2732:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2733:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2734:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2735:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2736:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2737:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2738:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2739:CALL*/regs.push(531);reg_ip=36;
}
/*2740*/
code[531]=function(){
/*+2740:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2741:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2742:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2743:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2744:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2745:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2746:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2747:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2748:CALL*/regs.push(532);reg_ip=36;
}
/*2749*/
code[532]=function(){
/*+2749:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2750:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2751:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2752:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2753:CALL*/regs.push(533);reg_ip=20;
}
/*2754*/
code[533]=function(){
/*+2754:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2755:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2756:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2757:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2758:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2759:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2760:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2761:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2762:CALL*/regs.push(534);reg_ip=36;
}
/*2763*/
code[534]=function(){
/*+2763:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2764:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2765:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2766:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2767:CALL*/regs.push(535);reg_ip=20;
}
/*2768*/
code[535]=function(){
/*+2768:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2769:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2770:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2771:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2772:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2773:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2774:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2775:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2776:CALL*/regs.push(536);reg_ip=36;
}
/*2777*/
code[536]=function(){
/*+2777:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2778:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2779:CALL*/regs.push(537);reg_ip=17;
}
/*2780*/
code[537]=function(){
/*+2780:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2781:ILDC*/memint32[reg_sp4-1]=+104
/*+2782:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2783:CALL*/regs.push(538);reg_ip=11;
}
/*2784*/
code[538]=function(){
/*+2784:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2785:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2786:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2787:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2788:CALL*/regs.push(539);reg_ip=20;
}
/*2789*/
code[539]=function(){
/*+2789:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2790:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2791:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2792:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2793:CALL*/regs.push(540);reg_ip=32;
}
/*2794*/
code[540]=function(){
/*+2794:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2795:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2796:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2797:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2798:CALL*/regs.push(541);reg_ip=20;
}
/*2799*/
code[541]=function(){
/*+2799:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2800:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2801:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2802:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2803:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2804:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2805:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2807:CALL*/regs.push(542);reg_ip=36;
}
/*2808*/
code[542]=function(){
/*+2808:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2809:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2810:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2811:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2812:CALL*/regs.push(543);reg_ip=32;
}
/*2813*/
code[543]=function(){
/*+2813:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2814:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2815:CALL*/regs.push(544);reg_ip=17;
}
/*2816*/
code[544]=function(){
/*+2816:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2817:ILDC*/memint32[reg_sp4-1]=+105
/*+2818:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2819:CALL*/regs.push(545);reg_ip=11;
}
/*2820*/
code[545]=function(){
/*+2820:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2821:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2822:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2823:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2824:CALL*/regs.push(546);reg_ip=20;
}
/*2825*/
code[546]=function(){
/*+2825:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2826:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2827:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2828:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2829:CALL*/regs.push(547);reg_ip=32;
}
/*2830*/
code[547]=function(){
/*+2830:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2831:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2832:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2833:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2834:CALL*/regs.push(548);reg_ip=20;
}
/*2835*/
code[548]=function(){
/*+2835:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2836:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2837:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2838:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2839:CALL*/regs.push(549);reg_ip=32;
}
/*2840*/
code[549]=function(){
/*+2840:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2841:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2842:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2843:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2844:CALL*/regs.push(550);reg_ip=20;
}
/*2845*/
code[550]=function(){
/*+2845:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2846:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2847:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2848:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2849:CALL*/regs.push(551);reg_ip=32;
}
/*2850*/
code[551]=function(){
/*+2850:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2851:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2852:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2853:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2854:CALL*/regs.push(552);reg_ip=20;
}
/*2855*/
code[552]=function(){
/*+2855:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2856:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2857:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2858:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2859:CALL*/regs.push(553);reg_ip=32;
}
/*2860*/
code[553]=function(){
/*+2860:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2861:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2862:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2863:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2864:CALL*/regs.push(554);reg_ip=20;
}
/*2865*/
code[554]=function(){
/*+2865:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2866:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2867:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2868:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2869:CALL*/regs.push(555);reg_ip=32;
}
/*2870*/
code[555]=function(){
/*+2870:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2871:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2872:CALL*/regs.push(556);reg_ip=17;
}
/*2873*/
code[556]=function(){
/*+2873:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2874:ILDC*/memint32[reg_sp4-1]=+106
/*+2875:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2876:CALL*/regs.push(557);reg_ip=11;
}
/*2877*/
code[557]=function(){
/*+2877:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2878:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2879:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2880:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2881:CALL*/regs.push(558);reg_ip=20;
}
/*2882*/
code[558]=function(){
/*+2882:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2883:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2884:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2885:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2886:CALL*/regs.push(559);reg_ip=32;
}
/*2887*/
code[559]=function(){
/*+2887:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2888:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2889:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2890:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2891:CALL*/regs.push(560);reg_ip=32;
}
/*2892*/
code[560]=function(){
/*+2892:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2893:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2894:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2895:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2896:CALL*/regs.push(561);reg_ip=20;
}
/*2897*/
code[561]=function(){
/*+2897:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2898:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2899:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2900:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2901:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2902:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2903:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2904:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2905:CALL*/regs.push(562);reg_ip=36;
}
/*2906*/
code[562]=function(){
/*+2906:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2907:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2908:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2909:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2910:CALL*/regs.push(563);reg_ip=20;
}
/*2911*/
code[563]=function(){
/*+2911:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2912:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2913:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2914:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2915:CALL*/regs.push(564);reg_ip=32;
}
/*2916*/
code[564]=function(){
/*+2916:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2917:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2918:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2919:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2920:CALL*/regs.push(565);reg_ip=20;
}
/*2921*/
code[565]=function(){
/*+2921:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2922:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2923:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2924:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2925:CALL*/regs.push(566);reg_ip=32;
}
/*2926*/
code[566]=function(){
/*+2926:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2927:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2928:CALL*/regs.push(567);reg_ip=17;
}
/*2929*/
code[567]=function(){
/*+2929:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2930:ILDC*/memint32[reg_sp4-1]=+108
/*+2931:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2932:CALL*/regs.push(568);reg_ip=11;
}
/*2933*/
code[568]=function(){
/*+2933:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2934:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2935:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2936:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2937:CALL*/regs.push(569);reg_ip=20;
}
/*2938*/
code[569]=function(){
/*+2938:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2939:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2940:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2941:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2942:CALL*/regs.push(570);reg_ip=32;
}
/*2943*/
code[570]=function(){
/*+2943:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2944:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2945:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2946:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2947:CALL*/regs.push(571);reg_ip=20;
}
/*2948*/
code[571]=function(){
/*+2948:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2949:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2950:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2951:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2952:CALL*/regs.push(572);reg_ip=32;
}
/*2953*/
code[572]=function(){
/*+2953:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2954:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2955:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2956:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2957:CALL*/regs.push(573);reg_ip=20;
}
/*2958*/
code[573]=function(){
/*+2958:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2959:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2960:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2961:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2962:CALL*/regs.push(574);reg_ip=32;
}
/*2963*/
code[574]=function(){
/*+2963:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2964:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2965:CALL*/regs.push(575);reg_ip=17;
}
/*2966*/
code[575]=function(){
/*+2966:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2967:ILDC*/memint32[reg_sp4-1]=+107
/*+2968:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2969:CALL*/regs.push(576);reg_ip=11;
}
/*2970*/
code[576]=function(){
/*+2970:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2971:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2972:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2973:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2974:CALL*/regs.push(577);reg_ip=20;
}
/*2975*/
code[577]=function(){
/*+2975:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2976:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2977:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2978:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2979:CALL*/regs.push(578);reg_ip=32;
}
/*2980*/
code[578]=function(){
/*+2980:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2981:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2982:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2983:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2984:CALL*/regs.push(579);reg_ip=20;
}
/*2985*/
code[579]=function(){
/*+2985:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2986:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2987:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2988:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2989:CALL*/regs.push(580);reg_ip=28;
}
/*2990*/
code[580]=function(){
/*+2990:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2991:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2992:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2993:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2994:CALL*/regs.push(581);reg_ip=20;
}
/*2995*/
code[581]=function(){
/*+2995:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2996:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2997:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2998:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+2999:CALL*/regs.push(582);reg_ip=28;
}
/*3000*/
code[582]=function(){
/*+3000:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3001:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3002:CALL*/regs.push(583);reg_ip=17;
}
/*3003*/
code[583]=function(){
/*+3003:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3004:ILDC*/memint32[reg_sp4-1]=+109
/*+3005:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3006:CALL*/regs.push(584);reg_ip=11;
}
/*3007*/
code[584]=function(){
/*+3007:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3008:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3009:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3010:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3011:CALL*/regs.push(585);reg_ip=20;
}
/*3012*/
code[585]=function(){
/*+3012:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3013:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3014:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3015:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3016:CALL*/regs.push(586);reg_ip=32;
}
/*3017*/
code[586]=function(){
/*+3017:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3018:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3019:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3020:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3021:CALL*/regs.push(587);reg_ip=20;
}
/*3022*/
code[587]=function(){
/*+3022:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3023:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3024:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3025:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3026:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3027:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3028:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3029:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3030:CALL*/regs.push(588);reg_ip=36;
}
/*3031*/
code[588]=function(){
/*+3031:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3032:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3033:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3034:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3035:CALL*/regs.push(589);reg_ip=32;
}
/*3036*/
code[589]=function(){
/*+3036:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3037:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3038:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3039:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3040:CALL*/regs.push(590);reg_ip=20;
}
/*3041*/
code[590]=function(){
/*+3041:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3042:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3043:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3044:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3045:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3046:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3047:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3048:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3049:CALL*/regs.push(591);reg_ip=36;
}
/*3050*/
code[591]=function(){
/*+3050:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3051:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3052:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3053:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3054:CALL*/regs.push(592);reg_ip=32;
}
/*3055*/
code[592]=function(){
/*+3055:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3056:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3057:CALL*/regs.push(593);reg_ip=17;
}
/*3058*/
code[593]=function(){
/*+3058:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3059:ILDC*/memint32[reg_sp4-1]=+110
/*+3060:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3061:CALL*/regs.push(594);reg_ip=11;
}
/*3062*/
code[594]=function(){
/*+3062:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3063:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3064:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3065:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3066:CALL*/regs.push(595);reg_ip=20;
}
/*3067*/
code[595]=function(){
/*+3067:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3068:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3069:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3070:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3071:CALL*/regs.push(596);reg_ip=32;
}
/*3072*/
code[596]=function(){
/*+3072:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3073:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3074:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3075:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3076:CALL*/regs.push(597);reg_ip=20;
}
/*3077*/
code[597]=function(){
/*+3077:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3078:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3079:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3080:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3081:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3082:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3083:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3084:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3085:CALL*/regs.push(598);reg_ip=36;
}
/*3086*/
code[598]=function(){
/*+3086:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3087:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3088:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3089:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3090:CALL*/regs.push(599);reg_ip=32;
}
/*3091*/
code[599]=function(){
/*+3091:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3092:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3093:CALL*/regs.push(600);reg_ip=17;
}
/*3094*/
code[600]=function(){
/*+3094:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3095:ILDC*/memint32[reg_sp4-1]=+111
/*+3096:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3097:CALL*/regs.push(601);reg_ip=11;
}
/*3098*/
code[601]=function(){
/*+3098:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3099:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3100:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3101:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3102:CALL*/regs.push(602);reg_ip=20;
}
/*3103*/
code[602]=function(){
/*+3103:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3104:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3105:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3106:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3107:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3108:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3109:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3110:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3111:CALL*/regs.push(603);reg_ip=36;
}
/*3112*/
code[603]=function(){
/*+3112:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3113:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3114:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3115:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3116:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3117:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3118:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3119:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3120:CALL*/regs.push(604);reg_ip=36;
}
/*3121*/
code[604]=function(){
/*+3121:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3122:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3123:CALL*/regs.push(605);reg_ip=17;
}
/*3124*/
code[605]=function(){
/*+3124:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3125:ILDC*/memint32[reg_sp4-1]=+112
/*+3126:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3127:CALL*/regs.push(606);reg_ip=11;
}
/*3128*/
code[606]=function(){
/*+3128:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3129:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3130:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3131:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3132:CALL*/regs.push(607);reg_ip=20;
}
/*3133*/
code[607]=function(){
/*+3133:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3134:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3135:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3136:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3137:CALL*/regs.push(608);reg_ip=32;
}
/*3138*/
code[608]=function(){
/*+3138:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3139:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3140:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3141:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3142:CALL*/regs.push(609);reg_ip=20;
}
/*3143*/
code[609]=function(){
/*+3143:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3144:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3145:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3146:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3147:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3148:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3149:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3150:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3151:CALL*/regs.push(610);reg_ip=36;
}
/*3152*/
code[610]=function(){
/*+3152:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3153:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3154:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3155:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3156:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3157:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3158:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3159:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3160:CALL*/regs.push(611);reg_ip=36;
}
/*3161*/
code[611]=function(){
/*+3161:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3162:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3163:CALL*/regs.push(612);reg_ip=17;
}
/*3164*/
code[612]=function(){
/*+3164:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3165:ILDC*/memint32[reg_sp4-1]=+113
/*+3166:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3167:CALL*/regs.push(613);reg_ip=11;
}
/*3168*/
code[613]=function(){
/*+3168:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3169:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3170:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3171:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3172:CALL*/regs.push(614);reg_ip=20;
}
/*3173*/
code[614]=function(){
/*+3173:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3174:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3175:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3176:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3177:CALL*/regs.push(615);reg_ip=32;
}
/*3178*/
code[615]=function(){
/*+3178:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3179:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3180:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3181:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3182:CALL*/regs.push(616);reg_ip=20;
}
/*3183*/
code[616]=function(){
/*+3183:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3184:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3185:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3186:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3187:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3188:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3189:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3190:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3191:CALL*/regs.push(617);reg_ip=36;
}
/*3192*/
code[617]=function(){
/*+3192:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3193:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3194:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3195:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3196:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3197:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3198:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3199:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3200:CALL*/regs.push(618);reg_ip=36;
}
/*3201*/
code[618]=function(){
/*+3201:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3202:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3203:CALL*/regs.push(619);reg_ip=17;
}
/*3204*/
code[619]=function(){
/*+3204:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3205:ILDC*/memint32[reg_sp4-1]=+114
/*+3206:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3207:CALL*/regs.push(620);reg_ip=11;
}
/*3208*/
code[620]=function(){
/*+3208:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3209:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3210:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3211:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3212:CALL*/regs.push(621);reg_ip=20;
}
/*3213*/
code[621]=function(){
/*+3213:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3214:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3215:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3216:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3217:CALL*/regs.push(622);reg_ip=32;
}
/*3218*/
code[622]=function(){
/*+3218:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3219:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3220:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3221:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3222:CALL*/regs.push(623);reg_ip=20;
}
/*3223*/
code[623]=function(){
/*+3223:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3224:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3225:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3226:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3227:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3228:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3229:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3230:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3231:CALL*/regs.push(624);reg_ip=36;
}
/*3232*/
code[624]=function(){
/*+3232:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3233:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3234:CALL*/regs.push(625);reg_ip=17;
}
/*3235*/
code[625]=function(){
/*+3235:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3236:ILDC*/memint32[reg_sp4-1]=+115
/*+3237:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3238:CALL*/regs.push(626);reg_ip=11;
}
/*3239*/
code[626]=function(){
/*+3239:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3240:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3241:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3242:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3243:CALL*/regs.push(627);reg_ip=20;
}
/*3244*/
code[627]=function(){
/*+3244:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3245:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3246:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3247:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3248:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3249:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3250:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3251:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3252:CALL*/regs.push(628);reg_ip=36;
}
/*3253*/
code[628]=function(){
/*+3253:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3254:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3255:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3256:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3257:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3258:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3259:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3260:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3261:CALL*/regs.push(629);reg_ip=36;
}
/*3262*/
code[629]=function(){
/*+3262:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3263:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3264:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3265:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3266:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3267:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3268:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3269:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3270:CALL*/regs.push(630);reg_ip=36;
}
/*3271*/
code[630]=function(){
/*+3271:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3272:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3273:CALL*/regs.push(631);reg_ip=17;
}
/*3274*/
code[631]=function(){
/*+3274:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3275:ILDC*/memint32[reg_sp4-1]=+116
/*+3276:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3277:CALL*/regs.push(632);reg_ip=11;
}
/*3278*/
code[632]=function(){
/*+3278:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3279:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3280:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3281:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3282:CALL*/regs.push(633);reg_ip=20;
}
/*3283*/
code[633]=function(){
/*+3283:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3284:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3285:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3286:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3287:CALL*/regs.push(634);reg_ip=32;
}
/*3288*/
code[634]=function(){
/*+3288:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3289:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3290:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3291:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3292:CALL*/regs.push(635);reg_ip=20;
}
/*3293*/
code[635]=function(){
/*+3293:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3294:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3295:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3296:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3297:CALL*/regs.push(636);reg_ip=32;
}
/*3298*/
code[636]=function(){
/*+3298:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3299:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3300:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3301:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3302:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3303:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3304:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3305:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3306:CALL*/regs.push(637);reg_ip=36;
}
/*3307*/
code[637]=function(){
/*+3307:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3308:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3309:CALL*/regs.push(638);reg_ip=17;
}
/*3310*/
code[638]=function(){
/*+3310:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3311:ILDC*/memint32[reg_sp4-1]=+117
/*+3312:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3313:CALL*/regs.push(639);reg_ip=11;
}
/*3314*/
code[639]=function(){
/*+3314:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3315:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3316:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3317:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3318:CALL*/regs.push(640);reg_ip=20;
}
/*3319*/
code[640]=function(){
/*+3319:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3320:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3321:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3322:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3323:CALL*/regs.push(641);reg_ip=32;
}
/*3324*/
code[641]=function(){
/*+3324:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3325:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3326:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3327:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3328:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3329:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3330:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3331:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3332:CALL*/regs.push(642);reg_ip=36;
}
/*3333*/
code[642]=function(){
/*+3333:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3334:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3335:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3336:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3337:CALL*/regs.push(643);reg_ip=32;
}
/*3338*/
code[643]=function(){
/*+3338:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3339:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3340:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3341:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3342:CALL*/regs.push(644);reg_ip=20;
}
/*3343*/
code[644]=function(){
/*+3343:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3344:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3345:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3346:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3347:CALL*/regs.push(645);reg_ip=32;
}
/*3348*/
code[645]=function(){
/*+3348:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3349:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3350:CALL*/regs.push(646);reg_ip=17;
}
/*3351*/
code[646]=function(){
/*+3351:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3352:ILDC*/memint32[reg_sp4-1]=+118
/*+3353:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3354:CALL*/regs.push(647);reg_ip=11;
}
/*3355*/
code[647]=function(){
/*+3355:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3356:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3357:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3358:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3359:CALL*/regs.push(648);reg_ip=20;
}
/*3360*/
code[648]=function(){
/*+3360:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3361:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3362:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3363:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3364:CALL*/regs.push(649);reg_ip=32;
}
/*3365*/
code[649]=function(){
/*+3365:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3366:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3367:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3368:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3369:CALL*/regs.push(650);reg_ip=32;
}
/*3370*/
code[650]=function(){
/*+3370:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3371:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3372:CALL*/regs.push(651);reg_ip=17;
}
/*3373*/
code[651]=function(){
/*+3373:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3374:ILDC*/memint32[reg_sp4-1]=+119
/*+3375:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3376:CALL*/regs.push(652);reg_ip=11;
}
/*3377*/
code[652]=function(){
/*+3377:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3378:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3379:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3380:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3381:CALL*/regs.push(653);reg_ip=20;
}
/*3382*/
code[653]=function(){
/*+3382:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3383:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3384:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3385:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3386:CALL*/regs.push(654);reg_ip=32;
}
/*3387*/
code[654]=function(){
/*+3387:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3388:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3389:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3390:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3391:CALL*/regs.push(655);reg_ip=32;
}
/*3392*/
code[655]=function(){
/*+3392:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3393:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3394:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3395:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3396:CALL*/regs.push(656);reg_ip=32;
}
/*3397*/
code[656]=function(){
/*+3397:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3398:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3399:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3400:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3401:CALL*/regs.push(657);reg_ip=32;
}
/*3402*/
code[657]=function(){
/*+3402:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3403:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3404:CALL*/regs.push(658);reg_ip=17;
}
/*3405*/
code[658]=function(){
/*+3405:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3406:ILDC*/memint32[reg_sp4-1]=+120
/*+3407:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3408:CALL*/regs.push(659);reg_ip=11;
}
/*3409*/
code[659]=function(){
/*+3409:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3410:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3411:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3412:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3413:CALL*/regs.push(660);reg_ip=20;
}
/*3414*/
code[660]=function(){
/*+3414:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3415:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3416:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3417:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3418:CALL*/regs.push(661);reg_ip=32;
}
/*3419*/
code[661]=function(){
/*+3419:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3420:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3421:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3422:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3423:CALL*/regs.push(662);reg_ip=20;
}
/*3424*/
code[662]=function(){
/*+3424:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3425:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3426:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3427:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3428:CALL*/regs.push(663);reg_ip=32;
}
/*3429*/
code[663]=function(){
/*+3429:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3430:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3431:CALL*/regs.push(664);reg_ip=17;
}
/*3432*/
code[664]=function(){
/*+3432:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3433:ILDC*/memint32[reg_sp4-1]=+121
/*+3434:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3435:CALL*/regs.push(665);reg_ip=11;
}
/*3436*/
code[665]=function(){
/*+3436:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3437:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3438:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3439:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3440:CALL*/regs.push(666);reg_ip=20;
}
/*3441*/
code[666]=function(){
/*+3441:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3442:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3443:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3444:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3445:CALL*/regs.push(667);reg_ip=32;
}
/*3446*/
code[667]=function(){
/*+3446:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3447:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3448:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3449:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3450:CALL*/regs.push(668);reg_ip=20;
}
/*3451*/
code[668]=function(){
/*+3451:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3452:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3453:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3454:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3455:CALL*/regs.push(669);reg_ip=32;
}
/*3456*/
code[669]=function(){
/*+3456:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3457:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3458:CALL*/regs.push(670);reg_ip=17;
}
/*3459*/
code[670]=function(){
/*+3459:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3460:ILDC*/memint32[reg_sp4-1]=+122
/*+3461:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3462:CALL*/regs.push(671);reg_ip=11;
}
/*3463*/
code[671]=function(){
/*+3463:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3464:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3465:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3466:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3467:CALL*/regs.push(672);reg_ip=20;
}
/*3468*/
code[672]=function(){
/*+3468:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3469:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3470:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3471:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3472:CALL*/regs.push(673);reg_ip=32;
}
/*3473*/
code[673]=function(){
/*+3473:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3474:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3475:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3476:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3477:CALL*/regs.push(674);reg_ip=32;
}
/*3478*/
code[674]=function(){
/*+3478:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3479:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3480:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3481:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3482:CALL*/regs.push(675);reg_ip=32;
}
/*3483*/
code[675]=function(){
/*+3483:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3484:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3485:CALL*/regs.push(676);reg_ip=17;
}
/*3486*/
code[676]=function(){
/*+3486:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3487:ILDC*/memint32[reg_sp4-1]=+123
/*+3488:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3489:CALL*/regs.push(677);reg_ip=11;
}
/*3490*/
code[677]=function(){
/*+3490:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3491:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3492:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3493:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3494:CALL*/regs.push(678);reg_ip=20;
}
/*3495*/
code[678]=function(){
/*+3495:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3496:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3497:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3498:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3499:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3500:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3501:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3502:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3503:CALL*/regs.push(679);reg_ip=36;
}
/*3504*/
code[679]=function(){
/*+3504:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3505:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3506:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3507:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3508:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3509:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3510:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3511:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3512:CALL*/regs.push(680);reg_ip=36;
}
/*3513*/
code[680]=function(){
/*+3513:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3514:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3515:CALL*/regs.push(681);reg_ip=17;
}
/*3516*/
code[681]=function(){
/*+3516:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3517:ILDC*/memint32[reg_sp4-1]=+124
/*+3518:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3519:CALL*/regs.push(682);reg_ip=11;
}
/*3520*/
code[682]=function(){
/*+3520:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3521:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3522:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3523:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3524:CALL*/regs.push(683);reg_ip=20;
}
/*3525*/
code[683]=function(){
/*+3525:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3526:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3527:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3528:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3529:CALL*/regs.push(684);reg_ip=32;
}
/*3530*/
code[684]=function(){
/*+3530:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3531:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3532:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3533:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3534:CALL*/regs.push(685);reg_ip=20;
}
/*3535*/
code[685]=function(){
/*+3535:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3536:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3537:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3538:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3539:CALL*/regs.push(686);reg_ip=32;
}
/*3540*/
code[686]=function(){
/*+3540:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3541:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3542:CALL*/regs.push(687);reg_ip=17;
}
/*3543*/
code[687]=function(){
/*+3543:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3544:ILDC*/memint32[reg_sp4-1]=+125
/*+3545:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3546:CALL*/regs.push(688);reg_ip=11;
}
/*3547*/
code[688]=function(){
/*+3547:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3548:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3549:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3550:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3551:CALL*/regs.push(689);reg_ip=20;
}
/*3552*/
code[689]=function(){
/*+3552:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3553:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3554:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3555:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3556:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3557:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3558:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3559:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3560:CALL*/regs.push(690);reg_ip=36;
}
/*3561*/
code[690]=function(){
/*+3561:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3562:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3563:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3564:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3565:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3566:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3567:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3568:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3569:CALL*/regs.push(691);reg_ip=36;
}
/*3570*/
code[691]=function(){
/*+3570:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3571:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3572:CALL*/regs.push(692);reg_ip=17;
}
/*3573*/
code[692]=function(){
/*+3573:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3574:ILDC*/memint32[reg_sp4-1]=+126
/*+3575:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3576:CALL*/regs.push(693);reg_ip=11;
}
/*3577*/
code[693]=function(){
/*+3577:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3578:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3579:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3580:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3581:CALL*/regs.push(694);reg_ip=20;
}
/*3582*/
code[694]=function(){
/*+3582:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3583:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3584:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3585:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3586:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3587:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3588:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3589:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3590:CALL*/regs.push(695);reg_ip=36;
}
/*3591*/
code[695]=function(){
/*+3591:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3592:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-13)];reg_this4=reg_this>>2;
/*+3593:CALL*/regs.push(696);reg_ip=17;
}
/*3594*/
code[696]=function(){
/*+3594:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3595:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+3596:RET*/reg_ip=regs.pop();
}
/*3597*/
code[697]=function(){
/*+3597:ADDSP*/reg_sp+=+232;reg_sp4=reg_sp>>2;
/*+3598:OFFS*/memint32[reg_sp4-46]=memint32[reg_sp4-60]+229376
/*+3599:LEA*/memint32[reg_sp4-45]=memint32[(reg_sp4-46)]
/*+3600:IDX*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-61]*20
/*+3601:MOV*/{let addr=memint32[(reg_sp4-45)];mem8.copyWithin(reg_sp-232,addr,addr+20);}
/*+3602:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3603:MOV*//*4*/memint32[(reg_sp4-52)]=memint32[(reg_sp4-54)];
/*+3604:OFFS*/memint32[reg_sp4-46]=memint32[reg_sp4-60]+16384
/*+3605:ILDC*/memint32[reg_sp4-45]=+0
/*+3606:LEA*/memint32[reg_sp4-44]=memint32[(reg_sp4-46)]
/*+3607:IDX*/memint32[reg_sp4-44]=memint32[reg_sp4-44]+memint32[reg_sp4-45]*8
/*+3608:MOV*//*4*/memint32[(reg_sp4-42)]=memint32[(reg_sp4-44)];
/*+3609:MOV*//*4*/memint32[(reg_sp4-51)]=memint32[(reg_sp4-42)];
/*+3610:ILDC*/memint32[reg_sp4-50]=+0;reg_ip=698;
}
/*3611*/
code[698]=function(){
/*+3611:LS*/memint32[reg_sp4-46]=memint32[reg_sp4-50] <memint32[reg_sp4-56]
/*+3612:JMPZ*/if(memint32[reg_sp4-46]==0){reg_ip=718;}else{reg_ip=699;}
}
/*3613*/
code[699]=function(){
/*+3613:OFFS*/memint32[reg_sp4-46]=memint32[reg_sp4-60]+0
/*+3614:ADD*/memint32[reg_sp4-45]=memint32[reg_sp4-53]+memint32[reg_sp4-50]
/*+3615:LEA*/memint32[reg_sp4-44]=memint32[(reg_sp4-46)]
/*+3616:IDX*/memint32[reg_sp4-44]=memint32[reg_sp4-44]+memint32[reg_sp4-45]*4
/*+3617:MOV*/{let addr=memint32[(reg_sp4-44)];mem8.copyWithin(reg_sp-196,addr,addr+4);}
/*+3618:ILDC*/memint32[reg_sp4-46]=+77
/*+3619:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3620:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=701;}else{reg_ip=700;}
}
/*3621*/
code[700]=function(){
/*+3621:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3622:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3623:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3624:FADD*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3625:ILDC*/memint32[reg_sp4-40]=+1
/*+3626:ADD*/memint32[reg_sp4-39]=memint32[reg_sp4-52]+memint32[reg_sp4-40]
/*+3627:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-51)];
/*+3628:IDX*/memint32[reg_sp4-38]=memint32[reg_sp4-38]+memint32[reg_sp4-39]*8
/*+3629:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat(memint32[(reg_sp4-38)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3630:FADD*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-65)+GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3631:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3632:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3633:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3634:NCALL*/SC_M();
/*+3635:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3636:ILDC*/memint32[reg_sp4-46]=+2
/*+3637:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3638:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3639:JMP*/reg_ip=717;
}
/*3640*/
code[701]=function(){
/*+3640:ILDC*/memint32[reg_sp4-46]=+109
/*+3641:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3642:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=703;}else{reg_ip=702;}
}
/*3643*/
code[702]=function(){
/*+3643:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3644:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3645:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3646:ILDC*/memint32[reg_sp4-42]=+1
/*+3647:ADD*/memint32[reg_sp4-41]=memint32[reg_sp4-52]+memint32[reg_sp4-42]
/*+3648:MOV*//*4*/memint32[(reg_sp4-40)]=memint32[(reg_sp4-51)];
/*+3649:IDX*/memint32[reg_sp4-40]=memint32[reg_sp4-40]+memint32[reg_sp4-41]*8
/*+3650:FMUL*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat(memint32[(reg_sp4-40)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3651:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3652:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-44);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3653:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3654:NCALL*/SC_m();
/*+3655:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3656:ILDC*/memint32[reg_sp4-46]=+2
/*+3657:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3658:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3659:JMP*/reg_ip=717;
}
/*3660*/
code[703]=function(){
/*+3660:ILDC*/memint32[reg_sp4-46]=+76
/*+3661:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3662:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=705;}else{reg_ip=704;}
}
/*3663*/
code[704]=function(){
/*+3663:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3664:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3665:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3666:FADD*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3667:ILDC*/memint32[reg_sp4-40]=+1
/*+3668:ADD*/memint32[reg_sp4-39]=memint32[reg_sp4-52]+memint32[reg_sp4-40]
/*+3669:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-51)];
/*+3670:IDX*/memint32[reg_sp4-38]=memint32[reg_sp4-38]+memint32[reg_sp4-39]*8
/*+3671:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat(memint32[(reg_sp4-38)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3672:FADD*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-65)+GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3673:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3674:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3675:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3676:NCALL*/SC_L();
/*+3677:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3678:ILDC*/memint32[reg_sp4-46]=+2
/*+3679:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3680:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3681:JMP*/reg_ip=717;
}
/*3682*/
code[705]=function(){
/*+3682:ILDC*/memint32[reg_sp4-46]=+108
/*+3683:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3684:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=707;}else{reg_ip=706;}
}
/*3685*/
code[706]=function(){
/*+3685:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3686:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3687:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3688:ILDC*/memint32[reg_sp4-42]=+1
/*+3689:ADD*/memint32[reg_sp4-41]=memint32[reg_sp4-52]+memint32[reg_sp4-42]
/*+3690:MOV*//*4*/memint32[(reg_sp4-40)]=memint32[(reg_sp4-51)];
/*+3691:IDX*/memint32[reg_sp4-40]=memint32[reg_sp4-40]+memint32[reg_sp4-41]*8
/*+3692:FMUL*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat(memint32[(reg_sp4-40)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3693:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3694:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-44);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3695:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3696:NCALL*/SC_l();
/*+3697:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3698:ILDC*/memint32[reg_sp4-46]=+2
/*+3699:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3700:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3701:JMP*/reg_ip=717;
}
/*3702*/
code[707]=function(){
/*+3702:ILDC*/memint32[reg_sp4-46]=+99
/*+3703:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3704:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=709;}else{reg_ip=708;}
}
/*3705*/
code[708]=function(){
/*+3705:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3706:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3707:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3708:ILDC*/memint32[reg_sp4-42]=+1
/*+3709:ADD*/memint32[reg_sp4-41]=memint32[reg_sp4-52]+memint32[reg_sp4-42]
/*+3710:MOV*//*4*/memint32[(reg_sp4-40)]=memint32[(reg_sp4-51)];
/*+3711:IDX*/memint32[reg_sp4-40]=memint32[reg_sp4-40]+memint32[reg_sp4-41]*8
/*+3712:FMUL*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat(memint32[(reg_sp4-40)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3713:ILDC*/memint32[reg_sp4-36]=+2
/*+3714:ADD*/memint32[reg_sp4-35]=memint32[reg_sp4-52]+memint32[reg_sp4-36]
/*+3715:MOV*//*4*/memint32[(reg_sp4-34)]=memint32[(reg_sp4-51)];
/*+3716:IDX*/memint32[reg_sp4-34]=memint32[reg_sp4-34]+memint32[reg_sp4-35]*8
/*+3717:FMUL*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat(memint32[(reg_sp4-34)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3718:ILDC*/memint32[reg_sp4-30]=+3
/*+3719:ADD*/memint32[reg_sp4-29]=memint32[reg_sp4-52]+memint32[reg_sp4-30]
/*+3720:MOV*//*4*/memint32[(reg_sp4-28)]=memint32[(reg_sp4-51)];
/*+3721:IDX*/memint32[reg_sp4-28]=memint32[reg_sp4-28]+memint32[reg_sp4-29]*8
/*+3722:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat(memint32[(reg_sp4-28)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3723:ILDC*/memint32[reg_sp4-24]=+4
/*+3724:ADD*/memint32[reg_sp4-23]=memint32[reg_sp4-52]+memint32[reg_sp4-24]
/*+3725:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-51)];
/*+3726:IDX*/memint32[reg_sp4-22]=memint32[reg_sp4-22]+memint32[reg_sp4-23]*8
/*+3727:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat(memint32[(reg_sp4-22)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3728:ILDC*/memint32[reg_sp4-18]=+5
/*+3729:ADD*/memint32[reg_sp4-17]=memint32[reg_sp4-52]+memint32[reg_sp4-18]
/*+3730:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-51)];
/*+3731:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*8
/*+3732:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat(memint32[(reg_sp4-16)])*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3733:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3734:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3735:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3736:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3737:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3738:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-44);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3739:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3740:NCALL*/SC_c();
/*+3741:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3742:ILDC*/memint32[reg_sp4-46]=+6
/*+3743:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3744:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3745:JMP*/reg_ip=717;
}
/*3746*/
code[709]=function(){
/*+3746:ILDC*/memint32[reg_sp4-46]=+122
/*+3747:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3748:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=711;}else{reg_ip=710;}
}
/*3749*/
code[710]=function(){
/*+3749:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3750:NCALL*/SC_close();
/*+3751:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3752:JMP*/reg_ip=717;
}
/*3753*/
code[711]=function(){
/*+3753:ILDC*/memint32[reg_sp4-46]=+48
/*+3754:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3755:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=713;}else{reg_ip=712;}
}
/*3756*/
code[712]=function(){
/*+3756:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3757:NCALL*/SC_clear();
/*+3758:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3759:JMP*/reg_ip=717;
}
/*3760*/
code[713]=function(){
/*+3760:ILDC*/memint32[reg_sp4-46]=+47
/*+3761:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3762:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=715;}else{reg_ip=714;}
}
/*3763*/
code[714]=function(){
/*+3763:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-51)];
/*+3764:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-52]*8
/*+3765:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-67)*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3766:FMUL*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-69)*GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3767:FADD*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-44)+GetFloat4(reg_sp4-42);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3768:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3769:NCALL*/SC_sqrt();
/*+3770:MOV*//*8*/{let dst=(reg_sp4-38);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3771:FMUL*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3772:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3773:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3774:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3775:NCALL*/SC_width();
/*+3776:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3777:ILDC*/memint32[reg_sp4-45]=+1
/*+3778:ADD*/memint32[reg_sp4-44]=memint32[reg_sp4-52]+memint32[reg_sp4-45]
/*+3779:MOV*//*4*/memint32[(reg_sp4-43)]=memint32[(reg_sp4-51)];
/*+3780:IDX*/memint32[reg_sp4-43]=memint32[reg_sp4-43]+memint32[reg_sp4-44]*8
/*+3781:F2I*/memint32[reg_sp4-46]=GetFloat(memint32[(reg_sp4-43)])
/*+3782:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-46)];
/*+3783:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3784:NCALL*/SC_rgba32();
/*+3785:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3786:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3787:NCALL*/SC_fin();
/*+3788:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3789:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3790:NCALL*/SC_stroke();
/*+3791:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3792:ILDC*/memint32[reg_sp4-46]=+2
/*+3793:ADD*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-46]
/*+3794:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-52)];
/*+3795:JMP*/reg_ip=717;
}
/*3796*/
code[715]=function(){
/*+3796:ILDC*/memint32[reg_sp4-46]=+102
/*+3797:EQ*/memint32[reg_sp4-45]=memint32[reg_sp4-49]==memint32[reg_sp4-46]
/*+3798:JMPZ*/if(memint32[reg_sp4-45]==0){reg_ip=717;}else{reg_ip=716;}
}
/*3799*/
code[716]=function(){
/*+3799:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-51)];
/*+3800:IDX*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-52]*8
/*+3801:F2I*/memint32[reg_sp4-46]=GetFloat(memint32[(reg_sp4-45)])
/*+3802:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-46)];
/*+3803:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3804:NCALL*/SC_rgba32();
/*+3805:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3807:NCALL*/SC_fin();
/*+3808:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3809:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+3810:NCALL*/SC_fill1();
/*+3811:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3812:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-52)];
/*+3813:INC*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+1;reg_ip=717;
}
/*3814*/
code[717]=function(){
/*+3814:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-50)];
/*+3815:INC*/memint32[reg_sp4-50]=memint32[reg_sp4-50]+1
/*+3816:JMP*/reg_ip=698;
}
/*3817*/
code[718]=function(){
/*+3817:ADDSP*/reg_sp+=-232;reg_sp4=reg_sp>>2;
/*+3818:RET*/reg_ip=regs.pop();
}
/*3819*/
code[719]=function(){
/*+3819:ADDSP*/reg_sp+=+112;reg_sp4=reg_sp>>2;
/*+3820:ILDC*/memint32[reg_sp4-28]=+0
/*+3821:MOV*//*8*/{let dst=(reg_sp4-27);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=720;
}
/*3822*/
code[720]=function(){
/*+3822:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-31)];
/*+3823:IDX*/memint32[reg_sp4-24]=memint32[reg_sp4-24]+memint32[reg_sp4-28]*1
/*+3824:C2I*/memint32[reg_sp4-25]=GetChar(memint32[(reg_sp4-24)])
/*+3825:ILDC*/memint32[reg_sp4-24]=+0
/*+3826:EQ*/memint32[reg_sp4-23]=memint32[reg_sp4-25]==memint32[reg_sp4-24]
/*+3827:JMPZ*/if(memint32[reg_sp4-23]==0){reg_ip=722;}else{reg_ip=721;}
}
/*3828*/
code[721]=function(){
/*+3828:JMP*/reg_ip=725;
}
/*3829*/
code[722]=function(){
/*+3829:LNOT*/memint32[reg_sp4-24]=!memint32[reg_sp4-32]
/*+3830:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-30]+229376
/*+3831:LEA*/memint32[reg_sp4-22]=memint32[(reg_sp4-23)]
/*+3832:IDX*/memint32[reg_sp4-22]=memint32[reg_sp4-22]+memint32[reg_sp4-25]*20
/*+3833:OFFS*/memint32[reg_sp4-20]=memint32[reg_sp4-22]+0
/*+3834:LNOT*/memint32[reg_sp4-19]=!GetInt(memint32[(reg_sp4-20)])
/*+3835:LAND*/memint32[reg_sp4-18]=memint32[reg_sp4-24]&&memint32[reg_sp4-19]
/*+3836:OFFS*/memint32[reg_sp4-17]=memint32[reg_sp4-30]+229376
/*+3837:LEA*/memint32[reg_sp4-16]=memint32[(reg_sp4-17)]
/*+3838:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-25]*20
/*+3839:OFFS*/memint32[reg_sp4-14]=memint32[reg_sp4-16]+0
/*+3840:LAND*/memint32[reg_sp4-13]=memint32[reg_sp4-32]&&GetInt(memint32[(reg_sp4-14)])
/*+3841:LOR*/memint32[reg_sp4-12]=memint32[reg_sp4-18]||memint32[reg_sp4-13]
/*+3842:JMPZ*/if(memint32[reg_sp4-12]==0){reg_ip=724;}else{reg_ip=723;}
}
/*3843*/
code[723]=function(){
/*+3843:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3844:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3845:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3846:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3847:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-25)];
/*+3848:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-30)];
/*+3849:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-29)];
/*+3850:CALL*/regs.push(724);reg_ip=697;
}
/*3851*/
code[724]=function(){
/*+3851:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-30]+229376
/*+3852:LEA*/memint32[reg_sp4-23]=memint32[(reg_sp4-24)]
/*+3853:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-25]*20
/*+3854:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+4
/*+3855:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=GetInt(memint32[(reg_sp4-21)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3856:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3857:FADD*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-27)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3858:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3859:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-28)];
/*+3860:INC*/memint32[reg_sp4-28]=memint32[reg_sp4-28]+1
/*+3861:JMP*/reg_ip=720;
}
/*3862*/
code[725]=function(){
/*+3862:ADDSP*/reg_sp+=-112;reg_sp4=reg_sp>>2;
/*+3863:RET*/reg_ip=regs.pop();
}
/*3864*/
code[726]=function(){
/*+3864:ADDSP*/reg_sp+=+64;reg_sp4=reg_sp>>2;
/*+3865:MOV*//*8*/{let dst=(reg_this4+0);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3866:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3867:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3868:MOV*//*8*/{let dst=(reg_this4+6);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3869:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3870:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3871:FMUL*/{let addr=(reg_this4+18);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3872:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3873:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3874:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3875:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-16)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3876:FADD*/{let addr=(reg_this4+14);cvtflt64[0]=GetFloat4(reg_sp4-14)+GetFloat4(reg_this4+6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3877:FNEG*/{let addr=(reg_sp4-14);cvtflt64[0]=-GetFloat4(reg_this4+18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3878:FSUB*/{let addr=(reg_this4+16);cvtflt64[0]=GetFloat4(reg_sp4-14)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3879:MOV*//*8*/{let dst=(reg_this4+20);let src=(reg_this4+0);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3880:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3881:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3882:FMUL*/{let addr=(reg_this4+22);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3883:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3884:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_this4+2);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3885:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_this4+0)-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3886:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3887:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3888:FMUL*/{let addr=(reg_this4+24);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3889:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3890:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3891:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3892:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_this4+6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3893:FSUB*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-8)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3894:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3895:FMUL*/{let addr=(reg_this4+26);cvtflt64[0]=GetFloat4(reg_sp4-4)*GetFloat4(reg_sp4-6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3896:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3897:FMUL*/{let addr=(reg_this4+28);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_this4+26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3898:ADDSP*/reg_sp+=-64;reg_sp4=reg_sp>>2;
/*+3899:RET*/reg_ip=regs.pop();
}
/*3900*/
code[727]=function(){
/*+3900:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+3901:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_this4+14)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3902:FADD*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_this4+16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3903:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3904:FADD*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-8)+GetFloat4(reg_this4+18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3905:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3906:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-4)+GetFloat4(reg_this4+20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3907:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3908:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+3909:RET*/reg_ip=regs.pop();
}
/*3910*/
code[728]=function(){
/*+3910:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+3911:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_this4+26)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3912:FADD*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_this4+24)+GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3913:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3914:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_this4+22)+GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3915:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3916:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+3917:RET*/reg_ip=regs.pop();
}
/*3918*/
code[729]=function(){
/*+3918:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+3919:ILDC*/memint32[reg_sp4-6]=+2
/*+3920:MUL*/memint32[reg_sp4-5]=Math.imul(GetInt(memint32[(+69)]),memint32[reg_sp4-6]);
/*+3921:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(+68)];
/*+3922:IDX*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+memint32[reg_sp4-5]*8
/*+3923:MOV*/{let addr=reg_sp-32;mem8.copyWithin(memint32[(reg_sp4-4)],addr,addr+8);}
/*+3924:ILDC*/memint32[reg_sp4-6]=+2
/*+3925:MUL*/memint32[reg_sp4-5]=Math.imul(GetInt(memint32[(+69)]),memint32[reg_sp4-6]);
/*+3926:ILDC*/memint32[reg_sp4-4]=+1
/*+3927:ADD*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+memint32[reg_sp4-4]
/*+3928:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(+68)];
/*+3929:IDX*/memint32[reg_sp4-2]=memint32[reg_sp4-2]+memint32[reg_sp4-3]*8
/*+3930:MOV*/{let addr=reg_sp-40;mem8.copyWithin(memint32[(reg_sp4-2)],addr,addr+8);}
/*+3931:MOV*/{let addr=memint32[(+69)];mem8.copyWithin(reg_sp-24,addr,addr+4);}
/*+3932:INC*/PutInt(memint32[(+69)],GetInt(memint32[(+69)])+1)
/*+3933:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+3934:RET*/reg_ip=regs.pop();
}
/*3935*/
code[730]=function(){
/*+3935:ADDSP*/reg_sp+=+64;reg_sp4=reg_sp>>2;
/*+3936:MOV*//*8*/{let dst=(reg_this4+0);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3937:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3938:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3939:MOV*//*8*/{let dst=(reg_this4+6);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3940:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3941:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3942:FMUL*/{let addr=(reg_this4+18);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3943:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3944:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3945:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3946:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-16)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3947:FADD*/{let addr=(reg_this4+14);cvtflt64[0]=GetFloat4(reg_sp4-14)+GetFloat4(reg_this4+6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3948:FNEG*/{let addr=(reg_sp4-14);cvtflt64[0]=-GetFloat4(reg_this4+18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3949:FSUB*/{let addr=(reg_this4+16);cvtflt64[0]=GetFloat4(reg_sp4-14)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3950:MOV*//*8*/{let dst=(reg_this4+20);let src=(reg_this4+0);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3951:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3952:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3953:FMUL*/{let addr=(reg_this4+22);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3954:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3955:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_this4+2);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3956:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_this4+0)-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3957:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3958:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3959:FMUL*/{let addr=(reg_this4+24);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3960:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat4(reg_this4+4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3961:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3962:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3963:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_this4+6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3964:FSUB*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-8)-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3965:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3966:FMUL*/{let addr=(reg_this4+26);cvtflt64[0]=GetFloat4(reg_sp4-4)*GetFloat4(reg_sp4-6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3967:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3968:FMUL*/{let addr=(reg_this4+28);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_this4+26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3969:ADDSP*/reg_sp+=-64;reg_sp4=reg_sp>>2;
/*+3970:RET*/reg_ip=regs.pop();
}
/*3971*/
code[731]=function(){
/*+3971:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+3972:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_this4+14)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3973:FADD*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_this4+16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3974:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3975:FADD*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-8)+GetFloat4(reg_this4+18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3976:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3977:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-4)+GetFloat4(reg_this4+20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3978:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3979:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+3980:RET*/reg_ip=regs.pop();
}
/*3981*/
code[732]=function(){
/*+3981:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+3982:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_this4+26)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3983:FADD*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_this4+24)+GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3984:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-6)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3985:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_this4+22)+GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3986:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3987:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+3988:RET*/reg_ip=regs.pop();
}
/*3989*/
code[733]=function(){
/*+3989:ADDSP*/reg_sp+=+584;reg_sp4=reg_sp>>2;
/*+3990:OFFS*/memint32[reg_sp4-33]=memint32[reg_sp4-147]+229376
/*+3991:LEA*/memint32[reg_sp4-32]=memint32[(reg_sp4-33)]
/*+3992:IDX*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+memint32[reg_sp4-148]*20
/*+3993:OFFS*/memint32[reg_sp4-30]=memint32[reg_sp4-32]+12
/*+3994:MOV*/{let addr=memint32[(reg_sp4-30)];mem8.copyWithin(reg_sp-568,addr,addr+4);}
/*+3995:OFFS*/memint32[reg_sp4-33]=memint32[reg_sp4-147]+229376
/*+3996:LEA*/memint32[reg_sp4-32]=memint32[(reg_sp4-33)]
/*+3997:IDX*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+memint32[reg_sp4-148]*20
/*+3998:OFFS*/memint32[reg_sp4-30]=memint32[reg_sp4-32]+16
/*+3999:MOV*/{let addr=memint32[(reg_sp4-30)];mem8.copyWithin(reg_sp-564,addr,addr+4);}
/*+4000:OFFS*/memint32[reg_sp4-33]=memint32[reg_sp4-147]+16384
/*+4001:ILDC*/memint32[reg_sp4-32]=+0
/*+4002:LEA*/memint32[reg_sp4-31]=memint32[(reg_sp4-33)]
/*+4003:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4004:MOV*//*4*/memint32[(reg_sp4-29)]=memint32[(reg_sp4-31)];
/*+4005:MOV*//*4*/memint32[(reg_sp4-140)]=memint32[(reg_sp4-29)];
/*+4006:ILDC*/memint32[reg_sp4-139]=+0;reg_ip=734;
}
/*4007*/
code[734]=function(){
/*+4007:OFFS*/memint32[reg_sp4-33]=memint32[reg_sp4-147]+229376
/*+4008:LEA*/memint32[reg_sp4-32]=memint32[(reg_sp4-33)]
/*+4009:IDX*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+memint32[reg_sp4-148]*20
/*+4010:OFFS*/memint32[reg_sp4-30]=memint32[reg_sp4-32]+8
/*+4011:LS*/memint32[reg_sp4-29]=memint32[reg_sp4-139] <GetInt(memint32[(reg_sp4-30)])
/*+4012:JMPZ*/if(memint32[reg_sp4-29]==0){reg_ip=773;}else{reg_ip=735;}
}
/*4013*/
code[735]=function(){
/*+4013:OFFS*/memint32[reg_sp4-33]=memint32[reg_sp4-147]+0
/*+4014:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-142]+memint32[reg_sp4-139]
/*+4015:LEA*/memint32[reg_sp4-31]=memint32[(reg_sp4-33)]
/*+4016:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*4
/*+4017:MOV*/{let addr=memint32[(reg_sp4-31)];mem8.copyWithin(reg_sp-552,addr,addr+4);}
/*+4018:ILDC*/memint32[reg_sp4-33]=+77
/*+4019:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4020:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=738;}else{reg_ip=736;}
}
/*4021*/
code[736]=function(){
/*+4021:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-140)];
/*+4022:IDX*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+memint32[reg_sp4-141]*8
/*+4023:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat(memint32[(reg_sp4-33)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4024:FADD*/{let addr=(reg_sp4-146);cvtflt64[0]=GetFloat4(reg_sp4-150)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4025:ILDC*/memint32[reg_sp4-33]=+1
/*+4026:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4027:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4028:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4029:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4030:FADD*/{let addr=(reg_sp4-144);cvtflt64[0]=GetFloat4(reg_sp4-152)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4031:ILDC*/memint32[reg_sp4-9]=-1
/*+4032:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4033:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4034:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-144);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4035:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-146);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4036:CALL*/regs.push(737);reg_ip=729;
}
/*4037*/
code[737]=function(){
/*+4037:ILDC*/memint32[reg_sp4-33]=+2
/*+4038:ADD*/memint32[reg_sp4-141]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4039:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-141)];
/*+4040:JMP*/reg_ip=772;
}
/*4041*/
code[738]=function(){
/*+4041:ILDC*/memint32[reg_sp4-33]=+109
/*+4042:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4043:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=741;}else{reg_ip=739;}
}
/*4044*/
code[739]=function(){
/*+4044:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-140)];
/*+4045:IDX*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+memint32[reg_sp4-141]*8
/*+4046:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat(memint32[(reg_sp4-33)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4047:FADD*/{let addr=(reg_sp4-146);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4048:ILDC*/memint32[reg_sp4-33]=+1
/*+4049:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4050:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4051:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4052:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4053:FADD*/{let addr=(reg_sp4-144);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4054:ILDC*/memint32[reg_sp4-9]=-1
/*+4055:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4056:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4057:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-144);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4058:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-146);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4059:CALL*/regs.push(740);reg_ip=729;
}
/*4060*/
code[740]=function(){
/*+4060:ILDC*/memint32[reg_sp4-33]=+2
/*+4061:ADD*/memint32[reg_sp4-141]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4062:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-141)];
/*+4063:JMP*/reg_ip=772;
}
/*4064*/
code[741]=function(){
/*+4064:ILDC*/memint32[reg_sp4-33]=+76
/*+4065:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4066:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=749;}else{reg_ip=742;}
}
/*4067*/
code[742]=function(){
/*+4067:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-140)];
/*+4068:IDX*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+memint32[reg_sp4-141]*8
/*+4069:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat(memint32[(reg_sp4-33)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4070:FADD*/{let addr=(reg_sp4-137);cvtflt64[0]=GetFloat4(reg_sp4-150)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4071:ILDC*/memint32[reg_sp4-33]=+1
/*+4072:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4073:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4074:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4075:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4076:FADD*/{let addr=(reg_sp4-135);cvtflt64[0]=GetFloat4(reg_sp4-152)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4077:FSUB*/{let addr=(reg_sp4-133);cvtflt64[0]=GetFloat4(reg_sp4-137)-GetFloat4(reg_sp4-146);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4078:FSUB*/{let addr=(reg_sp4-131);cvtflt64[0]=GetFloat4(reg_sp4-135)-GetFloat4(reg_sp4-144);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4079:FMUL*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-133)*GetFloat4(reg_sp4-133);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4080:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-131)*GetFloat4(reg_sp4-131);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4081:FADD*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4082:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-29);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4083:NCALL*/SC_sqrt();
/*+4084:MOV*//*8*/{let dst=(reg_sp4-27);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4085:MOV*//*8*/{let dst=(reg_sp4-129);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4086:FDIV*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-129)/GetFloat4(reg_sp4-158);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4087:F2I*/memint32[reg_sp4-127]=GetFloat4(reg_sp4-33)
/*+4088:ILDC*/memint32[reg_sp4-33]=+150
/*+4089:GR*/memint32[reg_sp4-32]=memint32[reg_sp4-127] >memint32[reg_sp4-33]
/*+4090:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=744;}else{reg_ip=743;}
}
/*4091*/
code[743]=function(){
/*+4091:ILDC*/memint32[reg_sp4-127]=+150;reg_ip=744;
}
/*4092*/
code[744]=function(){
/*+4092:ILDC*/memint32[reg_sp4-126]=+0;reg_ip=745;
}
/*4093*/
code[745]=function(){
/*+4093:LE*/memint32[reg_sp4-33]=memint32[reg_sp4-126]<=memint32[reg_sp4-127]
/*+4094:JMPZ*/if(memint32[reg_sp4-33]==0){reg_ip=748;}else{reg_ip=746;}
}
/*4095*/
code[746]=function(){
/*+4095:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-127];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4096:FDIV*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-133)/GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4097:I2F*/{let addr=(reg_sp4-29);cvtflt64[0]=memint32[reg_sp4-126];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4098:FMUL*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-31)*GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4099:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4100:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-127];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4101:FDIV*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-131)/GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4102:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-126];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4103:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4104:FADD*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4105:FDIV*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-133)/GetFloat4(reg_sp4-129);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4106:FDIV*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-131)/GetFloat4(reg_sp4-129);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4107:ILDC*/memint32[reg_sp4-9]=-1
/*+4108:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4109:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4110:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4111:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4112:CALL*/regs.push(747);reg_ip=729;
}
/*4113*/
code[747]=function(){
/*+4113:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-126)];
/*+4114:INC*/memint32[reg_sp4-126]=memint32[reg_sp4-126]+1
/*+4115:JMP*/reg_ip=745;
}
/*4116*/
code[748]=function(){
/*+4116:MOV*//*8*/{let dst=(reg_sp4-146);let src=(reg_sp4-137);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4117:MOV*//*8*/{let dst=(reg_sp4-144);let src=(reg_sp4-135);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4118:ILDC*/memint32[reg_sp4-33]=+2
/*+4119:ADD*/memint32[reg_sp4-141]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4120:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-141)];
/*+4121:JMP*/reg_ip=772;
}
/*4122*/
code[749]=function(){
/*+4122:ILDC*/memint32[reg_sp4-33]=+108
/*+4123:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4124:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=757;}else{reg_ip=750;}
}
/*4125*/
code[750]=function(){
/*+4125:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-140)];
/*+4126:IDX*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+memint32[reg_sp4-141]*8
/*+4127:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat(memint32[(reg_sp4-33)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4128:FADD*/{let addr=(reg_sp4-125);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4129:ILDC*/memint32[reg_sp4-33]=+1
/*+4130:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4131:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4132:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4133:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4134:FADD*/{let addr=(reg_sp4-123);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4135:FSUB*/{let addr=(reg_sp4-121);cvtflt64[0]=GetFloat4(reg_sp4-125)-GetFloat4(reg_sp4-146);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4136:FSUB*/{let addr=(reg_sp4-119);cvtflt64[0]=GetFloat4(reg_sp4-123)-GetFloat4(reg_sp4-144);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4137:FMUL*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-121)*GetFloat4(reg_sp4-121);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4138:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-119)*GetFloat4(reg_sp4-119);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4139:FADD*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4140:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-29);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4141:NCALL*/SC_sqrt();
/*+4142:MOV*//*8*/{let dst=(reg_sp4-27);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4143:MOV*//*8*/{let dst=(reg_sp4-117);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4144:FDIV*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-117)/GetFloat4(reg_sp4-158);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4145:F2I*/memint32[reg_sp4-115]=GetFloat4(reg_sp4-33)
/*+4146:ILDC*/memint32[reg_sp4-33]=+150
/*+4147:GR*/memint32[reg_sp4-32]=memint32[reg_sp4-115] >memint32[reg_sp4-33]
/*+4148:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=752;}else{reg_ip=751;}
}
/*4149*/
code[751]=function(){
/*+4149:ILDC*/memint32[reg_sp4-115]=+150;reg_ip=752;
}
/*4150*/
code[752]=function(){
/*+4150:ILDC*/memint32[reg_sp4-114]=+0;reg_ip=753;
}
/*4151*/
code[753]=function(){
/*+4151:LE*/memint32[reg_sp4-33]=memint32[reg_sp4-114]<=memint32[reg_sp4-115]
/*+4152:JMPZ*/if(memint32[reg_sp4-33]==0){reg_ip=756;}else{reg_ip=754;}
}
/*4153*/
code[754]=function(){
/*+4153:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-115];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4154:FDIV*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-121)/GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4155:I2F*/{let addr=(reg_sp4-29);cvtflt64[0]=memint32[reg_sp4-114];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4156:FMUL*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-31)*GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4157:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4158:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-115];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4159:FDIV*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-119)/GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4160:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-114];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4161:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4162:FADD*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4163:FDIV*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-121)/GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4164:FDIV*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-119)/GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4165:ILDC*/memint32[reg_sp4-9]=-1
/*+4166:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4167:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-13);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4168:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4169:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4170:CALL*/regs.push(755);reg_ip=729;
}
/*4171*/
code[755]=function(){
/*+4171:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-114)];
/*+4172:INC*/memint32[reg_sp4-114]=memint32[reg_sp4-114]+1
/*+4173:JMP*/reg_ip=753;
}
/*4174*/
code[756]=function(){
/*+4174:MOV*//*8*/{let dst=(reg_sp4-146);let src=(reg_sp4-125);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4175:MOV*//*8*/{let dst=(reg_sp4-144);let src=(reg_sp4-123);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4176:ILDC*/memint32[reg_sp4-33]=+2
/*+4177:ADD*/memint32[reg_sp4-141]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4178:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-141)];
/*+4179:JMP*/reg_ip=772;
}
/*4180*/
code[757]=function(){
/*+4180:ILDC*/memint32[reg_sp4-33]=+99
/*+4181:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4182:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=771;}else{reg_ip=758;}
}
/*4183*/
code[758]=function(){
/*+4183:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-140)];
/*+4184:IDX*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+memint32[reg_sp4-141]*8
/*+4185:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat(memint32[(reg_sp4-33)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4186:FADD*/{let addr=(reg_sp4-113);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4187:ILDC*/memint32[reg_sp4-33]=+1
/*+4188:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4189:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4190:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4191:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4192:FADD*/{let addr=(reg_sp4-111);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4193:ILDC*/memint32[reg_sp4-33]=+2
/*+4194:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4195:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4196:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4197:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4198:FADD*/{let addr=(reg_sp4-109);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4199:ILDC*/memint32[reg_sp4-33]=+3
/*+4200:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4201:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4202:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4203:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4204:FADD*/{let addr=(reg_sp4-107);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4205:ILDC*/memint32[reg_sp4-33]=+4
/*+4206:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4207:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4208:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4209:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-154);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4210:FADD*/{let addr=(reg_sp4-105);cvtflt64[0]=GetFloat4(reg_sp4-146)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4211:ILDC*/memint32[reg_sp4-33]=+5
/*+4212:ADD*/memint32[reg_sp4-32]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4213:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-140)];
/*+4214:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-32]*8
/*+4215:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat(memint32[(reg_sp4-31)])*GetFloat4(reg_sp4-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4216:FADD*/{let addr=(reg_sp4-103);cvtflt64[0]=GetFloat4(reg_sp4-144)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4217:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-105);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4218:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-109);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4219:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-113);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4220:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-146);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4221:IAM*/regs.push(reg_this);reg_this=reg_sp-404;reg_this4=reg_this>>2;
/*+4222:CALL*/regs.push(759);reg_ip=730;
}
/*4223*/
code[759]=function(){
/*+4223:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4224:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-103);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4225:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-107);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4226:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-111);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4227:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-144);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4228:IAM*/regs.push(reg_this);reg_this=reg_sp-284;reg_this4=reg_this>>2;
/*+4229:CALL*/regs.push(760);reg_ip=730;
}
/*4230*/
code[760]=function(){
/*+4230:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4231:FLDC*/{let addr=(reg_sp4-41);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=761;
}
/*4232*/
code[761]=function(){
/*+4232:FLDC*/{let addr=(reg_sp4-33);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4233:FLE*/memint32[reg_sp4-31]=GetFloat4(reg_sp4-41)<=GetFloat4(reg_sp4-33)
/*+4234:JMPZ*/if(memint32[reg_sp4-31]==0){reg_ip=770;}else{reg_ip=762;}
}
/*4235*/
code[762]=function(){
/*+4235:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-41);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4236:IAM*/regs.push(reg_this);reg_this=reg_sp-404;reg_this4=reg_this>>2;
/*+4237:CALL*/regs.push(763);reg_ip=732;
}
/*4238*/
code[763]=function(){
/*+4238:MOV*//*8*/{let dst=(reg_sp4-33);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4239:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4240:MOV*//*8*/{let dst=(reg_sp4-39);let src=(reg_sp4-33);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4241:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-41);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4242:IAM*/regs.push(reg_this);reg_this=reg_sp-284;reg_this4=reg_this>>2;
/*+4243:CALL*/regs.push(764);reg_ip=732;
}
/*4244*/
code[764]=function(){
/*+4244:MOV*//*8*/{let dst=(reg_sp4-33);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4245:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4246:MOV*//*8*/{let dst=(reg_sp4-37);let src=(reg_sp4-33);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4247:FMUL*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-39)*GetFloat4(reg_sp4-39);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4248:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4249:FADD*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4250:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-29);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4251:NCALL*/SC_sqrt();
/*+4252:MOV*//*8*/{let dst=(reg_sp4-27);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4253:MOV*//*8*/{let dst=(reg_sp4-35);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4254:FLDC*/{let addr=(reg_sp4-33);cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4255:FLS*/memint32[reg_sp4-31]=GetFloat4(reg_sp4-35) <GetFloat4(reg_sp4-33)
/*+4256:JMPZ*/if(memint32[reg_sp4-31]==0){reg_ip=766;}else{reg_ip=765;}
}
/*4257*/
code[765]=function(){
/*+4257:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=766;
}
/*4258*/
code[766]=function(){
/*+4258:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-41);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4259:IAM*/regs.push(reg_this);reg_this=reg_sp-404;reg_this4=reg_this>>2;
/*+4260:CALL*/regs.push(767);reg_ip=731;
}
/*4261*/
code[767]=function(){
/*+4261:MOV*//*8*/{let dst=(reg_sp4-33);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4262:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4263:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-41);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4264:IAM*/regs.push(reg_this);reg_this=reg_sp-284;reg_this4=reg_this>>2;
/*+4265:CALL*/regs.push(768);reg_ip=731;
}
/*4266*/
code[768]=function(){
/*+4266:MOV*//*8*/{let dst=(reg_sp4-31);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4267:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4268:FDIV*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-39)/GetFloat4(reg_sp4-35);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4269:FDIV*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-37)/GetFloat4(reg_sp4-35);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4270:ILDC*/memint32[reg_sp4-9]=-1
/*+4271:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4272:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-29);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4273:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4274:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-33);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4275:CALL*/regs.push(769);reg_ip=729;
}
/*4276*/
code[769]=function(){
/*+4276:FDIV*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-158)/GetFloat4(reg_sp4-35);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4277:FADD*/{let addr=(reg_sp4-41);cvtflt64[0]=GetFloat4(reg_sp4-41)+GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4278:MOV*//*8*/{let dst=(reg_sp4-31);let src=(reg_sp4-41);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4279:JMP*/reg_ip=761;
}
/*4280*/
code[770]=function(){
/*+4280:MOV*//*8*/{let dst=(reg_sp4-146);let src=(reg_sp4-105);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4281:MOV*//*8*/{let dst=(reg_sp4-144);let src=(reg_sp4-103);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4282:ILDC*/memint32[reg_sp4-33]=+6
/*+4283:ADD*/memint32[reg_sp4-141]=memint32[reg_sp4-141]+memint32[reg_sp4-33]
/*+4284:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-141)];
/*+4285:JMP*/reg_ip=772;
}
/*4286*/
code[771]=function(){
/*+4286:ILDC*/memint32[reg_sp4-33]=+122
/*+4287:EQ*/memint32[reg_sp4-32]=memint32[reg_sp4-138]==memint32[reg_sp4-33]
/*+4288:JMPZ*/if(memint32[reg_sp4-32]==0){reg_ip=772;}else{reg_ip=772;}
}
/*4289*/
code[772]=function(){
/*+4289:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-139)];
/*+4290:INC*/memint32[reg_sp4-139]=memint32[reg_sp4-139]+1
/*+4291:JMP*/reg_ip=734;
}
/*4292*/
code[773]=function(){
/*+4292:ADDSP*/reg_sp+=-584;reg_sp4=reg_sp>>2;
/*+4293:RET*/reg_ip=regs.pop();
}
/*4294*/
code[774]=function(){
/*+4294:ADDSP*/reg_sp+=+112;reg_sp4=reg_sp>>2;
/*+4295:MOV*//*8*/{let dst=(reg_sp4-28);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4296:ILDC*/memint32[reg_sp4-26]=+0;reg_ip=775;
}
/*4297*/
code[775]=function(){
/*+4297:ILDC*/memint32[reg_sp4-25]=+1024
/*+4298:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-26] <memint32[reg_sp4-25]
/*+4299:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=780;}else{reg_ip=776;}
}
/*4300*/
code[776]=function(){
/*+4300:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-30)];
/*+4301:IDX*/memint32[reg_sp4-24]=memint32[reg_sp4-24]+memint32[reg_sp4-26]*1
/*+4302:C2I*/memint32[reg_sp4-25]=GetChar(memint32[(reg_sp4-24)])
/*+4303:ILDC*/memint32[reg_sp4-22]=+0
/*+4304:EQ*/memint32[reg_sp4-21]=memint32[reg_sp4-25]==memint32[reg_sp4-22]
/*+4305:JMPZ*/if(memint32[reg_sp4-21]==0){reg_ip=778;}else{reg_ip=777;}
}
/*4306*/
code[777]=function(){
/*+4306:JMP*/reg_ip=780;
}
/*4307*/
code[778]=function(){
/*+4307:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-30)];
/*+4308:IDX*/memint32[reg_sp4-24]=memint32[reg_sp4-24]+memint32[reg_sp4-26]*1
/*+4309:C2I*/memint32[reg_sp4-25]=GetChar(memint32[(reg_sp4-24)])
/*+4310:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4311:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4312:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-36);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4313:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4314:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4315:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-25)];
/*+4316:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-29)];
/*+4317:CALL*/regs.push(779);reg_ip=733;
}
/*4318*/
code[779]=function(){
/*+4318:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-29]+229376
/*+4319:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-30)];
/*+4320:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-26]*1
/*+4321:C2I*/memint32[reg_sp4-24]=GetChar(memint32[(reg_sp4-23)])
/*+4322:LEA*/memint32[reg_sp4-21]=memint32[(reg_sp4-25)]
/*+4323:IDX*/memint32[reg_sp4-21]=memint32[reg_sp4-21]+memint32[reg_sp4-24]*20
/*+4324:OFFS*/memint32[reg_sp4-19]=memint32[reg_sp4-21]+4
/*+4325:I2F*/{let addr=(reg_sp4-18);cvtflt64[0]=GetInt(memint32[(reg_sp4-19)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4326:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4327:FADD*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-28)+GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4328:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4329:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-26)];
/*+4330:INC*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+1
/*+4331:JMP*/reg_ip=775;
}
/*4332*/
code[780]=function(){
/*+4332:ADDSP*/reg_sp+=-112;reg_sp4=reg_sp>>2;
/*+4333:RET*/reg_ip=regs.pop();
}
/*4334*/
code[781]=function(){
/*+4334:ADDSP*/reg_sp+=+52;reg_sp4=reg_sp>>2;
/*+4335:NCALL*/SC_clear();
/*+4336:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4337:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4338:NCALL*/SC_M();
/*+4339:ILDC*/memint32[reg_sp4-13]=+2
/*+4340:I2F*/{let addr=(reg_sp4-12);cvtflt64[0]=memint32[reg_sp4-13];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4341:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4342:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4343:FMUL*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4344:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4345:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4346:NCALL*/SC_width();
/*+4347:NCALL*/SC_fin();
/*+4348:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-24)];
/*+4349:NCALL*/SC_rgba32();
/*+4350:NCALL*/SC_stroke();
/*+4351:ADDSP*/reg_sp+=-52;reg_sp4=reg_sp>>2;
/*+4352:RET*/reg_ip=regs.pop();
}
/*4353*/
code[782]=function(){
/*+4353:ADDSP*/reg_sp+=+48308;reg_sp4=reg_sp>>2;
/*+4354:LEA*/memint32[reg_sp4-46]=reg_sp-48308
/*+4355:MOV*//*4*/memint32[(+68)]=memint32[(reg_sp4-46)];
/*+4356:ILDC*/memint32[reg_sp4-77]=+0
/*+4357:LEA*/memint32[reg_sp4-46]=reg_sp-308
/*+4358:MOV*//*4*/memint32[(+69)]=memint32[(reg_sp4-46)];
/*+4359:ILDC*/memint32[reg_sp4-2]=+234496
/*+4360:NCALL*/SC_malloc();
/*+4361:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-1)];
/*+4362:MOV*//*4*/memint32[(reg_sp4-76)]=memint32[(reg_sp4-46)];
/*+4363:ILDC*/memint32[reg_sp4-2]=+6
/*+4364:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-76)];
/*+4365:IAM*/regs.push(reg_this);reg_this=reg_sp-296;reg_this4=reg_this>>2;
/*+4366:CALL*/regs.push(783);reg_ip=1;
}
/*4367*/
code[783]=function(){
/*+4367:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+4368:LEA*/memint32[reg_sp4-46]=reg_sp-296
/*+4369:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-46)];
/*+4370:CALL*/regs.push(784);reg_ip=55;
}
/*4371*/
code[784]=function(){
/*+4371:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4372:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4373:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4374:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4375:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4376:ILDC*/memint32[reg_sp4-2]=+189
/*+4377:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-76)];
/*+4378:CALL*/regs.push(785);reg_ip=774;
}
/*4379*/
code[785]=function(){
/*+4379:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4380:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4381:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4382:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4383:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4384:ILDC*/memint32[reg_sp4-2]=+212
/*+4385:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-76)];
/*+4386:CALL*/regs.push(786);reg_ip=774;
}
/*4387*/
code[786]=function(){
/*+4387:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4388:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4389:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4390:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+150.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4391:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4392:ILDC*/memint32[reg_sp4-2]=+235
/*+4393:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-76)];
/*+4394:CALL*/regs.push(787);reg_ip=774;
}
/*4395*/
code[787]=function(){
/*+4395:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-77)];
/*+4396:ILDC*/memint32[reg_sp4-2]=+258
/*+4397:NCALL*/SC_printf();
/*+4398:ILDC*/memint32[reg_sp4-70]=+800;reg_ip=788;
}
/*4399*/
code[788]=function(){
/*+4399:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4400:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4401:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4402:NCALL*/SC_rgb();
/*+4403:NCALL*/SC_FillRT();
/*+4404:NCALL*/SC_Time();
/*+4405:MOV*//*8*/{let dst=(reg_sp4-46);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4406:MOV*//*8*/{let dst=(reg_sp4-69);let src=(reg_sp4-46);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4407:FLDC*/{let addr=(reg_sp4-46);cvtflt64[0]=+0.025000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4408:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-69)*GetFloat4(reg_sp4-46);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4409:FLDC*/{let addr=(reg_sp4-41);cvtflt64[0]=+0.025000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4410:FMUL*/{let addr=(reg_sp4-39);cvtflt64[0]=GetFloat4(reg_sp4-69)*GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4411:F2I*/memint32[reg_sp4-42]=GetFloat4(reg_sp4-39)
/*+4412:I2F*/{let addr=(reg_sp4-37);cvtflt64[0]=memint32[reg_sp4-42];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4413:FSUB*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-44)-GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4414:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-70];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4415:I2F*/{let addr=(reg_sp4-31);cvtflt64[0]=memint32[reg_sp4-77];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4416:FDIV*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-33)/GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4417:ILDC*/memint32[reg_sp4-27]=+1
/*+4418:I2F*/{let addr=(reg_sp4-26);cvtflt64[0]=memint32[reg_sp4-27];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4419:FADD*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4420:FMUL*/{let addr=(reg_sp4-67);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4421:NCALL*/SC_clear();
/*+4422:I2F*/{let addr=(reg_sp4-46);cvtflt64[0]=memint32[reg_sp4-77];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4423:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4424:F2I*/memint32[reg_sp4-65]=GetFloat4(reg_sp4-44)
/*+4425:ILDC*/memint32[reg_sp4-64]=+0;reg_ip=789;
}
/*4426*/
code[789]=function(){
/*+4426:LS*/memint32[reg_sp4-46]=memint32[reg_sp4-64] <memint32[reg_sp4-65]
/*+4427:JMPZ*/if(memint32[reg_sp4-46]==0){reg_ip=794;}else{reg_ip=790;}
}
/*4428*/
code[790]=function(){
/*+4428:LS*/memint32[reg_sp4-46]=memint32[reg_sp4-64] <memint32[reg_sp4-77]
/*+4429:JMPZ*/if(memint32[reg_sp4-46]==0){reg_ip=793;}else{reg_ip=791;}
}
/*4430*/
code[791]=function(){
/*+4430:NCALL*/SC_clear();
/*+4431:SUB*/memint32[reg_sp4-46]=memint32[reg_sp4-65]-memint32[reg_sp4-64]
/*+4432:I2F*/{let addr=(reg_sp4-45);cvtflt64[0]=memint32[reg_sp4-70];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4433:I2F*/{let addr=(reg_sp4-43);cvtflt64[0]=memint32[reg_sp4-46];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4434:FDIV*/{let addr=(reg_sp4-63);cvtflt64[0]=GetFloat4(reg_sp4-43)/GetFloat4(reg_sp4-45);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4435:ILDC*/memint32[reg_sp4-46]=+0
/*+4436:I2F*/{let addr=(reg_sp4-45);cvtflt64[0]=memint32[reg_sp4-46];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4437:FGR*/memint32[reg_sp4-43]=GetFloat4(reg_sp4-63) >GetFloat4(reg_sp4-45)
/*+4438:FLDC*/{let addr=(reg_sp4-42);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4439:FLS*/memint32[reg_sp4-40]=GetFloat4(reg_sp4-63) <GetFloat4(reg_sp4-42)
/*+4440:LAND*/memint32[reg_sp4-39]=memint32[reg_sp4-43]&&memint32[reg_sp4-40]
/*+4441:JMPZ*/if(memint32[reg_sp4-39]==0){reg_ip=793;}else{reg_ip=792;}
}
/*4442*/
code[792]=function(){
/*+4442:FLDC*/{let addr=(reg_sp4-46);cvtflt64[0]=+131.710007;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4443:I2F*/{let addr=(reg_sp4-44);cvtflt64[0]=memint32[reg_sp4-64];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4444:FMUL*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-44)*GetFloat4(reg_sp4-46);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4445:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4446:NCALL*/SC_sin();
/*+4447:MOV*//*8*/{let dst=(reg_sp4-40);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4448:ILDC*/memint32[reg_sp4-38]=+1
/*+4449:I2F*/{let addr=(reg_sp4-37);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4450:FADD*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-40)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4451:FMUL*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4452:FLDC*/{let addr=(reg_sp4-31);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4453:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-33)*GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4454:FLDC*/{let addr=(reg_sp4-27);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4455:FSUB*/{let addr=(reg_sp4-61);cvtflt64[0]=GetFloat4(reg_sp4-27)-GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4456:ILDC*/memint32[reg_sp4-46]=+2
/*+4457:MUL*/memint32[reg_sp4-45]=Math.imul(memint32[reg_sp4-64],memint32[reg_sp4-46]);
/*+4458:LEA*/memint32[reg_sp4-44]=reg_sp-48308
/*+4459:IDX*/memint32[reg_sp4-44]=memint32[reg_sp4-44]+memint32[reg_sp4-45]*8
/*+4460:FLDC*/{let addr=(reg_sp4-42);cvtflt64[0]=+131.154999;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4461:I2F*/{let addr=(reg_sp4-40);cvtflt64[0]=memint32[reg_sp4-64];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4462:FMUL*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat4(reg_sp4-40)*GetFloat4(reg_sp4-42);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4463:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4464:NCALL*/SC_sin();
/*+4465:MOV*//*8*/{let dst=(reg_sp4-36);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4466:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4467:FMUL*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4468:ILDC*/memint32[reg_sp4-30]=+30
/*+4469:I2F*/{let addr=(reg_sp4-29);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4470:FMUL*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4471:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat(memint32[(reg_sp4-44)])+GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4472:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-63)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4473:ILDC*/memint32[reg_sp4-21]=+40
/*+4474:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4475:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4476:FADD*/{let addr=(reg_sp4-59);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4477:ILDC*/memint32[reg_sp4-46]=+2
/*+4478:MUL*/memint32[reg_sp4-45]=Math.imul(memint32[reg_sp4-64],memint32[reg_sp4-46]);
/*+4479:ILDC*/memint32[reg_sp4-44]=+1
/*+4480:ADD*/memint32[reg_sp4-43]=memint32[reg_sp4-45]+memint32[reg_sp4-44]
/*+4481:LEA*/memint32[reg_sp4-42]=reg_sp-48308
/*+4482:IDX*/memint32[reg_sp4-42]=memint32[reg_sp4-42]+memint32[reg_sp4-43]*8
/*+4483:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-63)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4484:ILDC*/memint32[reg_sp4-38]=+18
/*+4485:I2F*/{let addr=(reg_sp4-37);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4486:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-40)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4487:FADD*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat(memint32[(reg_sp4-42)])+GetFloat4(reg_sp4-35);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4488:FLDC*/{let addr=(reg_sp4-31);cvtflt64[0]=+131.731003;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4489:I2F*/{let addr=(reg_sp4-29);cvtflt64[0]=memint32[reg_sp4-64];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4490:FMUL*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-29)*GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4491:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-27);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4492:NCALL*/SC_cos();
/*+4493:MOV*//*8*/{let dst=(reg_sp4-25);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4494:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4495:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4496:ILDC*/memint32[reg_sp4-19]=+30
/*+4497:I2F*/{let addr=(reg_sp4-18);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4498:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4499:FADD*/{let addr=(reg_sp4-57);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4500:FMUL*/{let addr=(reg_sp4-46);cvtflt64[0]=GetFloat4(reg_sp4-63)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4501:ILDC*/memint32[reg_sp4-44]=+35
/*+4502:I2F*/{let addr=(reg_sp4-43);cvtflt64[0]=memint32[reg_sp4-44];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4503:FMUL*/{let addr=(reg_sp4-41);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4504:ILDC*/memint32[reg_sp4-39]=+2
/*+4505:I2F*/{let addr=(reg_sp4-38);cvtflt64[0]=memint32[reg_sp4-39];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4506:FADD*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-38)+GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4507:FLDC*/{let addr=(reg_sp4-34);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4508:FMUL*/{let addr=(reg_sp4-55);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4509:FLDC*/{let addr=(reg_sp4-46);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4510:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-61);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4511:FLDC*/{let addr=(reg_sp4-42);cvtflt64[0]=+255.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4512:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-44)*GetFloat4(reg_sp4-42);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4513:F2I*/memint32[reg_sp4-53]=GetFloat4(reg_sp4-40)
/*+4514:FLDC*/{let addr=(reg_sp4-46);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4515:FSUB*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)-GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4516:FMUL*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-44)*GetFloat4(reg_sp4-61);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4517:FLDC*/{let addr=(reg_sp4-40);cvtflt64[0]=+255.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4518:FMUL*/{let addr=(reg_sp4-38);cvtflt64[0]=GetFloat4(reg_sp4-42)*GetFloat4(reg_sp4-40);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4519:F2I*/memint32[reg_sp4-52]=GetFloat4(reg_sp4-38)
/*+4520:FMUL*/{let addr=(reg_sp4-46);cvtflt64[0]=GetFloat4(reg_sp4-63)*GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4521:FLDC*/{let addr=(reg_sp4-44);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4522:FSUB*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-44)-GetFloat4(reg_sp4-46);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4523:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-42)*GetFloat4(reg_sp4-61);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4524:FLDC*/{let addr=(reg_sp4-38);cvtflt64[0]=+255.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4525:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-40)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4526:F2I*/memint32[reg_sp4-51]=GetFloat4(reg_sp4-36)
/*+4527:ILDC*/memint32[reg_sp4-46]=+16
/*+4528:SHL*/memint32[reg_sp4-45]=memint32[reg_sp4-51]<<memint32[reg_sp4-46]
/*+4529:ILDC*/memint32[reg_sp4-44]=+8
/*+4530:SHL*/memint32[reg_sp4-43]=memint32[reg_sp4-52]<<memint32[reg_sp4-44]
/*+4531:OR*/memint32[reg_sp4-42]=memint32[reg_sp4-45]|memint32[reg_sp4-43]
/*+4532:OR*/memint32[reg_sp4-41]=memint32[reg_sp4-42]|memint32[reg_sp4-53]
/*+4533:FLDC*/{let addr=(reg_sp4-39);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4534:FSUB*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-39)-GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4535:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4536:FSUB*/{let addr=(reg_sp4-33);cvtflt64[0]=GetFloat4(reg_sp4-35)-GetFloat4(reg_sp4-63);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4537:FMUL*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat4(reg_sp4-33);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4538:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-31)*GetFloat4(reg_sp4-61);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4539:ILDC*/memint32[reg_sp4-27]=+255
/*+4540:I2F*/{let addr=(reg_sp4-26);cvtflt64[0]=memint32[reg_sp4-27];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4541:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-29)*GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4542:F2I*/memint32[reg_sp4-40]=GetFloat4(reg_sp4-24)
/*+4543:ILDC*/memint32[reg_sp4-22]=+24
/*+4544:SHL*/memint32[reg_sp4-21]=memint32[reg_sp4-40]<<memint32[reg_sp4-22]
/*+4545:OR*/memint32[reg_sp4-20]=memint32[reg_sp4-41]|memint32[reg_sp4-21]
/*+4546:MOV*//*4*/memint32[(reg_sp4-11)]=memint32[(reg_sp4-20)];
/*+4547:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-55);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4548:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4549:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4550:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-57);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4551:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-59);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4552:NCALL*/SC_Circle();;reg_ip=793;
}
/*4553*/
code[793]=function(){
/*+4553:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-64)];
/*+4554:INC*/memint32[reg_sp4-64]=memint32[reg_sp4-64]+1
/*+4555:JMP*/reg_ip=789;
}
/*4556*/
code[794]=function(){
/*+4556:LS*/memint32[reg_sp4-46]=memint32[reg_sp4-65] <memint32[reg_sp4-77]
/*+4557:JMPZ*/if(memint32[reg_sp4-46]==0){reg_ip=796;}else{reg_ip=795;}
}
/*4558*/
code[795]=function(){
/*+4558:ILDC*/memint32[reg_sp4-46]=+2
/*+4559:MUL*/memint32[reg_sp4-45]=Math.imul(memint32[reg_sp4-65],memint32[reg_sp4-46]);
/*+4560:LEA*/memint32[reg_sp4-44]=reg_sp-48308
/*+4561:IDX*/memint32[reg_sp4-44]=memint32[reg_sp4-44]+memint32[reg_sp4-45]*8
/*+4562:MOV*/{let addr=memint32[(reg_sp4-44)];mem8.copyWithin(reg_sp-200,addr,addr+8);}
/*+4563:ILDC*/memint32[reg_sp4-46]=+2
/*+4564:MUL*/memint32[reg_sp4-45]=Math.imul(memint32[reg_sp4-65],memint32[reg_sp4-46]);
/*+4565:ILDC*/memint32[reg_sp4-44]=+1
/*+4566:ADD*/memint32[reg_sp4-43]=memint32[reg_sp4-45]+memint32[reg_sp4-44]
/*+4567:LEA*/memint32[reg_sp4-42]=reg_sp-48308
/*+4568:IDX*/memint32[reg_sp4-42]=memint32[reg_sp4-42]+memint32[reg_sp4-43]*8
/*+4569:MOV*/{let addr=memint32[(reg_sp4-42)];mem8.copyWithin(reg_sp-192,addr,addr+8);}
/*+4570:NCALL*/SC_clear();
/*+4571:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4572:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-50);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4573:NCALL*/SC_M();
/*+4574:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+25.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4575:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4576:NCALL*/SC_l();
/*+4577:NCALL*/SC_fin();
/*+4578:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4579:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4580:NCALL*/SC_width();
/*+4581:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4582:NCALL*/SC_gray();
/*+4583:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4584:NCALL*/SC_alpha();
/*+4585:NCALL*/SC_stroke();
/*+4586:NCALL*/SC_clear();
/*+4587:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4588:NCALL*/SC_alpha();
/*+4589:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4590:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-50);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4591:NCALL*/SC_M();
/*+4592:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4593:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4594:NCALL*/SC_l();
/*+4595:NCALL*/SC_fin();
/*+4596:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4597:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4598:NCALL*/SC_width();
/*+4599:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4600:NCALL*/SC_gray();
/*+4601:NCALL*/SC_stroke();
/*+4602:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4603:NCALL*/SC_gray();
/*+4604:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4605:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4606:NCALL*/SC_width();
/*+4607:NCALL*/SC_stroke();;reg_ip=796;
}
/*4608*/
code[796]=function(){
/*+4608:INT*/int_code=+10;interrupt=true;;reg_ip=797;
}
/*4609*/
code[797]=function(){
/*+4609:JMP*/reg_ip=788;
}
/*4610*/
code[798]=function(){
/*+4610:ILDC*/memint32[reg_sp4-12078]=+0
/*+4611:ADDSP*/reg_sp+=-48308;reg_sp4=reg_sp>>2;
/*+4612:RET*/reg_ip=regs.pop();
}
let start_addr=782
let start_rsp=288
let graphics=1
