/* Native binds:
0: Time
1: malloc
2: snprintf
3: SetPersistentInt
4: GetPersistentInt
5: GetMouseState
6: stext
7: M
8: m
9: L
10: l
11: close
12: clear
13: C
14: fill1
15: stroke
16: fin
17: rgba
18: rgb
19: alpha
20: width
21: t_t
22: t_0
23: t_x
24: t_y

*/
let natives=[
'Time','malloc','snprintf','SetPersistentInt','GetPersistentInt','GetMouseState','stext','M',
'm','L','l','close','clear','C','fill1','stroke',
'fin','rgba','rgb','alpha','width','t_t','t_0','t_x',
't_y'
]

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
c, x, \0, c, y, \0, T, i, m, e,  , %, f, \0, !, ",
#, $, %, &, ', (, ), *, +, ,, -, ., /, :, ;, <,
=, >, ?, [, \, ], ^, _, {, |, }, ~, 0, 1, 2, 3,
4, 5, 6, 7, 8, 9, \0, a, b, c, d, e, f, g, h, i,
j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y,
z, \0, A, B, C, D, E, F, G, H, I, J, K, L, M, N,
O, P, Q, R, S, T, U, V, W, X, Y, Z, \0, %, i,  ,
%, i,  , c, o, d, e,  , %, i,  , 0, x, %, 0, 2,
x, \0, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
99, 120, 0, 99, 121, 0, 84, 105, 109, 101, 32, 37, 102, 0, 33, 34,
35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60,
61, 62, 63, 91, 92, 93, 94, 95, 123, 124, 125, 126, 48, 49, 50, 51,
52, 53, 54, 55, 56, 57, 0, 97, 98, 99, 100, 101, 102, 103, 104, 105,
106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121,
122, 0, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 0, 37, 105, 32,
37, 105, 32, 99, 111, 100, 101, 32, 37, 105, 32, 48, 120, 37, 48, 50,
120, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255
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
/*+10:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+11:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+12:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+13:RET*/reg_ip=regs.pop();
}
/*14*/
code[2]=function(){
/*+14:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+15:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+16:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+17:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+18:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+19:RET*/reg_ip=regs.pop();
}
/*20*/
code[3]=function(){
/*+20:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+21:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+22:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+23:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+24:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+25:RET*/reg_ip=regs.pop();
}
/*26*/
code[4]=function(){
/*+26:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+27:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+28:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+29:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+30:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+31:RET*/reg_ip=regs.pop();
}
/*32*/
code[5]=function(){
/*+32:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+33:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+34:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+36:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+37:RET*/reg_ip=regs.pop();
}
/*38*/
code[6]=function(){
/*+38:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+39:FLDC*/{let addr=(reg_this4+0);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+42:MOV*//*8*/{let dst=(reg_this4+6);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+43:MOV*//*8*/{let dst=(reg_this4+8);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+44:MOV*//*8*/{let dst=(reg_this4+10);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+45:MOV*//*8*/{let dst=(reg_this4+12);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+46:MOV*//*8*/{let dst=(reg_this4+14);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+47:MOV*//*8*/{let dst=(reg_this4+16);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+48:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+49:RET*/reg_ip=regs.pop();
}
/*50*/
code[7]=function(){
/*+50:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+51:ILDC*/memint32[reg_this4+0]=+0
/*+52:ILDC*/memint32[reg_sp4-3]=+0;reg_ip=8;
}
/*53*/
code[8]=function(){
/*+53:ILDC*/memint32[reg_sp4-2]=+16
/*+54:LS*/memint32[reg_sp4-1]=memint32[reg_sp4-3] <memint32[reg_sp4-2]
/*+55:JMPZ*/if(memint32[reg_sp4-1]==0){reg_ip=11;}else{reg_ip=9;}
}
/*56*/
code[9]=function(){
/*+56:LEA*/memint32[reg_sp4-2]=reg_this+4
/*+57:IDX*/memint32[reg_sp4-2]=memint32[reg_sp4-2]+memint32[reg_sp4-3]*72
/*+58:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-2)];reg_this4=reg_this>>2;
/*+59:CALL*/regs.push(10);reg_ip=1;
}
/*60*/
code[10]=function(){
/*+60:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+61:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-3)];
/*+62:INC*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+1
/*+63:JMP*/reg_ip=8;
}
/*64*/
code[11]=function(){
/*+64:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+65:RET*/reg_ip=regs.pop();
}
/*66*/
code[12]=function(){
/*+66:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+67:ILDC*/memint32[reg_sp4-6]=+15
/*+68:LS*/memint32[reg_sp4-5]=memint32[reg_this4+0] <memint32[reg_sp4-6]
/*+69:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=15;}else{reg_ip=13;}
}
/*70*/
code[13]=function(){
/*+70:LEA*/memint32[reg_sp4-6]=reg_this+4
/*+71:IDX*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+memint32[reg_this4+0]*72
/*+72:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+73:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+74:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-6)];reg_this4=reg_this>>2;
/*+75:CALL*/regs.push(14);reg_ip=2;
}
/*76*/
code[14]=function(){
/*+76:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+77:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+0)];
/*+78:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1;reg_ip=15;
}
/*79*/
code[15]=function(){
/*+79:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+80:RET*/reg_ip=regs.pop();
}
/*81*/
code[16]=function(){
/*+81:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+82:ILDC*/memint32[reg_sp4-6]=+15
/*+83:LS*/memint32[reg_sp4-5]=memint32[reg_this4+0] <memint32[reg_sp4-6]
/*+84:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=19;}else{reg_ip=17;}
}
/*85*/
code[17]=function(){
/*+85:LEA*/memint32[reg_sp4-6]=reg_this+4
/*+86:IDX*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+memint32[reg_this4+0]*72
/*+87:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+88:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+89:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-6)];reg_this4=reg_this>>2;
/*+90:CALL*/regs.push(18);reg_ip=3;
}
/*91*/
code[18]=function(){
/*+91:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+92:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+0)];
/*+93:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1;reg_ip=19;
}
/*94*/
code[19]=function(){
/*+94:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+95:RET*/reg_ip=regs.pop();
}
/*96*/
code[20]=function(){
/*+96:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+97:ILDC*/memint32[reg_sp4-6]=+15
/*+98:LS*/memint32[reg_sp4-5]=memint32[reg_this4+0] <memint32[reg_sp4-6]
/*+99:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=23;}else{reg_ip=21;}
}
/*100*/
code[21]=function(){
/*+100:LEA*/memint32[reg_sp4-6]=reg_this+4
/*+101:IDX*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+memint32[reg_this4+0]*72
/*+102:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+103:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+104:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-6)];reg_this4=reg_this>>2;
/*+105:CALL*/regs.push(22);reg_ip=4;
}
/*106*/
code[22]=function(){
/*+106:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+107:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+0)];
/*+108:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1;reg_ip=23;
}
/*109*/
code[23]=function(){
/*+109:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+110:RET*/reg_ip=regs.pop();
}
/*111*/
code[24]=function(){
/*+111:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+112:ILDC*/memint32[reg_sp4-6]=+15
/*+113:LS*/memint32[reg_sp4-5]=memint32[reg_this4+0] <memint32[reg_sp4-6]
/*+114:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=27;}else{reg_ip=25;}
}
/*115*/
code[25]=function(){
/*+115:LEA*/memint32[reg_sp4-6]=reg_this+4
/*+116:IDX*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+memint32[reg_this4+0]*72
/*+117:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+118:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+119:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-6)];reg_this4=reg_this>>2;
/*+120:CALL*/regs.push(26);reg_ip=5;
}
/*121*/
code[26]=function(){
/*+121:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+122:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_this4+0)];
/*+123:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1;reg_ip=27;
}
/*124*/
code[27]=function(){
/*+124:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+125:RET*/reg_ip=regs.pop();
}
/*126*/
code[28]=function(){
/*+126:ADDSP*/reg_sp+=+72;reg_sp4=reg_sp>>2;
/*+127:ILDC*/memint32[reg_sp4-18]=+15
/*+128:LS*/memint32[reg_sp4-17]=memint32[reg_this4+0] <memint32[reg_sp4-18]
/*+129:JMPZ*/if(memint32[reg_sp4-17]==0){reg_ip=31;}else{reg_ip=29;}
}
/*130*/
code[29]=function(){
/*+130:LEA*/memint32[reg_sp4-18]=reg_this+4
/*+131:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_this4+0]*72
/*+132:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+134:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+135:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+136:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+137:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+138:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+139:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+140:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-18)];reg_this4=reg_this>>2;
/*+141:CALL*/regs.push(30);reg_ip=6;
}
/*142*/
code[30]=function(){
/*+142:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+143:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+0)];
/*+144:INC*/memint32[reg_this4+0]=memint32[reg_this4+0]+1;reg_ip=31;
}
/*145*/
code[31]=function(){
/*+145:ADDSP*/reg_sp+=-72;reg_sp4=reg_sp>>2;
/*+146:RET*/reg_ip=regs.pop();
}
/*147*/
code[32]=function(){
/*+147:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+148:ILDC*/memint32[reg_sp4-3]=+0;reg_ip=33;
}
/*149*/
code[33]=function(){
/*+149:ILDC*/memint32[reg_sp4-2]=+256
/*+150:LS*/memint32[reg_sp4-1]=memint32[reg_sp4-3] <memint32[reg_sp4-2]
/*+151:JMPZ*/if(memint32[reg_sp4-1]==0){reg_ip=36;}else{reg_ip=34;}
}
/*152*/
code[34]=function(){
/*+152:LEA*/memint32[reg_sp4-2]=reg_this+0
/*+153:IDX*/memint32[reg_sp4-2]=memint32[reg_sp4-2]+memint32[reg_sp4-3]*1156
/*+154:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-2)];reg_this4=reg_this>>2;
/*+155:CALL*/regs.push(35);reg_ip=7;
}
/*156*/
code[35]=function(){
/*+156:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+157:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-3)];
/*+158:INC*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+1
/*+159:JMP*/reg_ip=33;
}
/*160*/
code[36]=function(){
/*+160:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+161:RET*/reg_ip=regs.pop();
}
/*162*/
code[37]=function(){
/*+162:ADDSP*/reg_sp+=+468;reg_sp4=reg_sp>>2;
/*+163:ILDC*/memint32[reg_sp4-116]=+0;reg_ip=38;
}
/*164*/
code[38]=function(){
/*+164:ILDC*/memint32[reg_sp4-20]=+256
/*+165:LS*/memint32[reg_sp4-19]=memint32[reg_sp4-116] <memint32[reg_sp4-20]
/*+166:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=45;}else{reg_ip=39;}
}
/*167*/
code[39]=function(){
/*+167:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+168:LEA*/memint32[reg_sp4-19]=memint32[(reg_sp4-20)]
/*+169:IDX*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-116]*1156
/*+170:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+171:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+172:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-19)];reg_this4=reg_this>>2;
/*+173:CALL*/regs.push(40);reg_ip=12;
}
/*174*/
code[40]=function(){
/*+174:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+175:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+176:LEA*/memint32[reg_sp4-19]=memint32[(reg_sp4-20)]
/*+177:IDX*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-116]*1156
/*+178:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-19)];reg_this4=reg_this>>2;
/*+181:CALL*/regs.push(41);reg_ip=24;
}
/*182*/
code[41]=function(){
/*+182:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+183:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+184:LEA*/memint32[reg_sp4-19]=memint32[(reg_sp4-20)]
/*+185:IDX*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-116]*1156
/*+186:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+187:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-19)];reg_this4=reg_this>>2;
/*+189:CALL*/regs.push(42);reg_ip=24;
}
/*190*/
code[42]=function(){
/*+190:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+191:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+192:LEA*/memint32[reg_sp4-19]=memint32[(reg_sp4-20)]
/*+193:IDX*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-116]*1156
/*+194:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+195:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+196:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-19)];reg_this4=reg_this>>2;
/*+197:CALL*/regs.push(43);reg_ip=24;
}
/*198*/
code[43]=function(){
/*+198:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+199:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+200:LEA*/memint32[reg_sp4-19]=memint32[(reg_sp4-20)]
/*+201:IDX*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-116]*1156
/*+202:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+203:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+204:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-19)];reg_this4=reg_this>>2;
/*+205:CALL*/regs.push(44);reg_ip=24;
}
/*206*/
code[44]=function(){
/*+206:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+207:MOV*//*4*/memint32[(reg_sp4-20)]=memint32[(reg_sp4-116)];
/*+208:INC*/memint32[reg_sp4-116]=memint32[reg_sp4-116]+1
/*+209:JMP*/reg_ip=38;
}
/*210*/
code[45]=function(){
/*+210:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+211:ILDC*/memint32[reg_sp4-19]=+32
/*+212:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+213:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+214:MOV*//*4*/memint32[(reg_sp4-115)]=memint32[(reg_sp4-18)];
/*+215:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-115)];reg_this4=reg_this>>2;
/*+216:CALL*/regs.push(46);reg_ip=7;
}
/*217*/
code[46]=function(){
/*+217:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+218:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+219:ILDC*/memint32[reg_sp4-19]=+33
/*+220:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+221:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+222:MOV*//*4*/memint32[(reg_sp4-114)]=memint32[(reg_sp4-18)];
/*+223:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-114)];reg_this4=reg_this>>2;
/*+224:CALL*/regs.push(47);reg_ip=7;
}
/*225*/
code[47]=function(){
/*+225:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+226:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+227:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+228:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+229:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+230:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+231:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+232:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+233:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+234:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-114)];reg_this4=reg_this>>2;
/*+235:CALL*/regs.push(48);reg_ip=28;
}
/*236*/
code[48]=function(){
/*+236:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+237:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+238:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+239:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+240:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+241:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+242:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+243:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+244:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+245:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-114)];reg_this4=reg_this>>2;
/*+246:CALL*/regs.push(49);reg_ip=28;
}
/*247*/
code[49]=function(){
/*+247:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+248:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+250:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-114)];reg_this4=reg_this>>2;
/*+251:CALL*/regs.push(50);reg_ip=12;
}
/*252*/
code[50]=function(){
/*+252:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+253:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+254:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+255:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-114)];reg_this4=reg_this>>2;
/*+256:CALL*/regs.push(51);reg_ip=24;
}
/*257*/
code[51]=function(){
/*+257:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+258:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+259:ILDC*/memint32[reg_sp4-19]=+63
/*+260:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+261:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+262:MOV*//*4*/memint32[(reg_sp4-113)]=memint32[(reg_sp4-18)];
/*+263:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+264:CALL*/regs.push(52);reg_ip=7;
}
/*265*/
code[52]=function(){
/*+265:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+266:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+267:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+268:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+269:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+270:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+271:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+272:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+273:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+275:CALL*/regs.push(53);reg_ip=28;
}
/*276*/
code[53]=function(){
/*+276:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+277:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+278:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+279:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+280:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+281:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+282:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+283:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+284:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+285:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+286:CALL*/regs.push(54);reg_ip=28;
}
/*287*/
code[54]=function(){
/*+287:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+288:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+289:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+290:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+291:CALL*/regs.push(55);reg_ip=12;
}
/*292*/
code[55]=function(){
/*+292:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+293:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+294:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+295:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+296:CALL*/regs.push(56);reg_ip=24;
}
/*297*/
code[56]=function(){
/*+297:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+298:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+299:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+300:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+301:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+302:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+303:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+304:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+305:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+306:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+307:CALL*/regs.push(57);reg_ip=28;
}
/*308*/
code[57]=function(){
/*+308:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+309:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+310:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+311:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+312:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+313:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+315:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+316:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+317:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-113)];reg_this4=reg_this>>2;
/*+318:CALL*/regs.push(58);reg_ip=28;
}
/*319*/
code[58]=function(){
/*+319:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+320:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+321:ILDC*/memint32[reg_sp4-19]=+34
/*+322:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+323:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+324:MOV*//*4*/memint32[(reg_sp4-112)]=memint32[(reg_sp4-18)];
/*+325:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+326:CALL*/regs.push(59);reg_ip=7;
}
/*327*/
code[59]=function(){
/*+327:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+328:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+329:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+330:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+331:CALL*/regs.push(60);reg_ip=12;
}
/*332*/
code[60]=function(){
/*+332:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+333:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+335:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+336:CALL*/regs.push(61);reg_ip=24;
}
/*337*/
code[61]=function(){
/*+337:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+338:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+339:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+340:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+341:CALL*/regs.push(62);reg_ip=24;
}
/*342*/
code[62]=function(){
/*+342:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+343:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+344:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+345:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+346:CALL*/regs.push(63);reg_ip=12;
}
/*347*/
code[63]=function(){
/*+347:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+348:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+349:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+350:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+351:CALL*/regs.push(64);reg_ip=24;
}
/*352*/
code[64]=function(){
/*+352:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+353:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+354:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+355:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-112)];reg_this4=reg_this>>2;
/*+356:CALL*/regs.push(65);reg_ip=24;
}
/*357*/
code[65]=function(){
/*+357:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+358:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+359:ILDC*/memint32[reg_sp4-19]=+35
/*+360:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+361:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+362:MOV*//*4*/memint32[(reg_sp4-111)]=memint32[(reg_sp4-18)];
/*+363:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+364:CALL*/regs.push(66);reg_ip=7;
}
/*365*/
code[66]=function(){
/*+365:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+366:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+367:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+368:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+369:CALL*/regs.push(67);reg_ip=12;
}
/*370*/
code[67]=function(){
/*+370:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+371:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+372:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+373:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+374:CALL*/regs.push(68);reg_ip=24;
}
/*375*/
code[68]=function(){
/*+375:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+376:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+377:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+378:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+379:CALL*/regs.push(69);reg_ip=12;
}
/*380*/
code[69]=function(){
/*+380:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+381:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+382:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+383:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+384:CALL*/regs.push(70);reg_ip=24;
}
/*385*/
code[70]=function(){
/*+385:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+386:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+387:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+388:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+389:CALL*/regs.push(71);reg_ip=12;
}
/*390*/
code[71]=function(){
/*+390:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+391:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+392:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+393:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+394:CALL*/regs.push(72);reg_ip=24;
}
/*395*/
code[72]=function(){
/*+395:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+396:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+397:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+398:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+399:CALL*/regs.push(73);reg_ip=12;
}
/*400*/
code[73]=function(){
/*+400:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+401:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+402:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+403:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-111)];reg_this4=reg_this>>2;
/*+404:CALL*/regs.push(74);reg_ip=24;
}
/*405*/
code[74]=function(){
/*+405:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+406:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+407:ILDC*/memint32[reg_sp4-19]=+36
/*+408:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+409:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+410:MOV*//*4*/memint32[(reg_sp4-110)]=memint32[(reg_sp4-18)];
/*+411:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+412:CALL*/regs.push(75);reg_ip=7;
}
/*413*/
code[75]=function(){
/*+413:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+414:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+415:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+416:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+417:CALL*/regs.push(76);reg_ip=12;
}
/*418*/
code[76]=function(){
/*+418:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+419:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+420:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+421:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+422:CALL*/regs.push(77);reg_ip=24;
}
/*423*/
code[77]=function(){
/*+423:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+424:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+425:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+426:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+427:CALL*/regs.push(78);reg_ip=12;
}
/*428*/
code[78]=function(){
/*+428:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+429:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+430:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+431:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+432:CALL*/regs.push(79);reg_ip=24;
}
/*433*/
code[79]=function(){
/*+433:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+434:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+435:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+436:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+8.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+437:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+438:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+8.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+439:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+440:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+441:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+442:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+443:CALL*/regs.push(80);reg_ip=28;
}
/*444*/
code[80]=function(){
/*+444:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+445:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+446:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+447:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+448:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+449:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+450:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+451:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+452:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+453:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+454:CALL*/regs.push(81);reg_ip=28;
}
/*455*/
code[81]=function(){
/*+455:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+456:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+457:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+458:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+459:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+460:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+461:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+462:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+463:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+464:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-110)];reg_this4=reg_this>>2;
/*+465:CALL*/regs.push(82);reg_ip=28;
}
/*466*/
code[82]=function(){
/*+466:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+467:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+468:ILDC*/memint32[reg_sp4-19]=+37
/*+469:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+470:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+471:MOV*//*4*/memint32[(reg_sp4-109)]=memint32[(reg_sp4-18)];
/*+472:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+473:CALL*/regs.push(83);reg_ip=7;
}
/*474*/
code[83]=function(){
/*+474:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+475:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+476:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+477:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+478:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+479:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+480:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+481:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+482:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+483:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+484:CALL*/regs.push(84);reg_ip=28;
}
/*485*/
code[84]=function(){
/*+485:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+486:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+487:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+488:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+489:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+490:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+491:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+492:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+493:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+494:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+495:CALL*/regs.push(85);reg_ip=28;
}
/*496*/
code[85]=function(){
/*+496:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+497:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+498:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+499:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+500:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+501:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+502:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+504:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+505:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+506:CALL*/regs.push(86);reg_ip=28;
}
/*507*/
code[86]=function(){
/*+507:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+508:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+509:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+510:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+511:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+512:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+513:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+514:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+515:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+517:CALL*/regs.push(87);reg_ip=28;
}
/*518*/
code[87]=function(){
/*+518:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+519:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+520:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+521:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+522:CALL*/regs.push(88);reg_ip=12;
}
/*523*/
code[88]=function(){
/*+523:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+524:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+525:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+526:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-109)];reg_this4=reg_this>>2;
/*+527:CALL*/regs.push(89);reg_ip=24;
}
/*528*/
code[89]=function(){
/*+528:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+529:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+530:ILDC*/memint32[reg_sp4-19]=+38
/*+531:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+532:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+533:MOV*//*4*/memint32[(reg_sp4-108)]=memint32[(reg_sp4-18)];
/*+534:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-108)];reg_this4=reg_this>>2;
/*+535:CALL*/regs.push(90);reg_ip=7;
}
/*536*/
code[90]=function(){
/*+536:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+537:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+538:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+539:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+540:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+541:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+542:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+543:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+544:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+545:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-108)];reg_this4=reg_this>>2;
/*+546:CALL*/regs.push(91);reg_ip=28;
}
/*547*/
code[91]=function(){
/*+547:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+548:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+549:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+550:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+551:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+552:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+553:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+554:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+555:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+556:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-108)];reg_this4=reg_this>>2;
/*+557:CALL*/regs.push(92);reg_ip=28;
}
/*558*/
code[92]=function(){
/*+558:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+559:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+560:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+561:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+562:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+563:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+564:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+565:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+566:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+567:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-108)];reg_this4=reg_this>>2;
/*+568:CALL*/regs.push(93);reg_ip=28;
}
/*569*/
code[93]=function(){
/*+569:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+570:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+571:ILDC*/memint32[reg_sp4-19]=+39
/*+572:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+573:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+574:MOV*//*4*/memint32[(reg_sp4-107)]=memint32[(reg_sp4-18)];
/*+575:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+576:CALL*/regs.push(94);reg_ip=7;
}
/*577*/
code[94]=function(){
/*+577:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+578:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+579:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+580:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+581:CALL*/regs.push(95);reg_ip=12;
}
/*582*/
code[95]=function(){
/*+582:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+583:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+584:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+585:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+586:CALL*/regs.push(96);reg_ip=24;
}
/*587*/
code[96]=function(){
/*+587:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+588:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+589:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+590:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+591:CALL*/regs.push(97);reg_ip=24;
}
/*592*/
code[97]=function(){
/*+592:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+593:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+594:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+595:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+596:CALL*/regs.push(98);reg_ip=24;
}
/*597*/
code[98]=function(){
/*+597:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+598:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+599:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+600:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-107)];reg_this4=reg_this>>2;
/*+601:CALL*/regs.push(99);reg_ip=24;
}
/*602*/
code[99]=function(){
/*+602:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+603:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+604:ILDC*/memint32[reg_sp4-19]=+40
/*+605:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+606:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+607:MOV*//*4*/memint32[(reg_sp4-106)]=memint32[(reg_sp4-18)];
/*+608:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-106)];reg_this4=reg_this>>2;
/*+609:CALL*/regs.push(100);reg_ip=7;
}
/*610*/
code[100]=function(){
/*+610:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+611:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+612:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+613:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+614:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+615:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+616:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+617:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+618:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+619:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-106)];reg_this4=reg_this>>2;
/*+620:CALL*/regs.push(101);reg_ip=28;
}
/*621*/
code[101]=function(){
/*+621:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+622:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+623:ILDC*/memint32[reg_sp4-19]=+41
/*+624:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+625:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+626:MOV*//*4*/memint32[(reg_sp4-105)]=memint32[(reg_sp4-18)];
/*+627:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-105)];reg_this4=reg_this>>2;
/*+628:CALL*/regs.push(102);reg_ip=7;
}
/*629*/
code[102]=function(){
/*+629:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+630:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+631:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+632:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+633:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+634:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+635:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+636:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+637:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+638:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-105)];reg_this4=reg_this>>2;
/*+639:CALL*/regs.push(103);reg_ip=28;
}
/*640*/
code[103]=function(){
/*+640:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+641:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+642:ILDC*/memint32[reg_sp4-19]=+42
/*+643:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+644:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+645:MOV*//*4*/memint32[(reg_sp4-104)]=memint32[(reg_sp4-18)];
/*+646:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+647:CALL*/regs.push(104);reg_ip=7;
}
/*648*/
code[104]=function(){
/*+648:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+649:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+650:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+651:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+652:CALL*/regs.push(105);reg_ip=12;
}
/*653*/
code[105]=function(){
/*+653:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+654:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+655:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+656:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+657:CALL*/regs.push(106);reg_ip=24;
}
/*658*/
code[106]=function(){
/*+658:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+659:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+660:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+661:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+662:CALL*/regs.push(107);reg_ip=12;
}
/*663*/
code[107]=function(){
/*+663:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+664:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+665:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+666:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+667:CALL*/regs.push(108);reg_ip=24;
}
/*668*/
code[108]=function(){
/*+668:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+669:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+670:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+671:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+672:CALL*/regs.push(109);reg_ip=12;
}
/*673*/
code[109]=function(){
/*+673:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+674:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+675:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+676:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-104)];reg_this4=reg_this>>2;
/*+677:CALL*/regs.push(110);reg_ip=24;
}
/*678*/
code[110]=function(){
/*+678:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+679:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+680:ILDC*/memint32[reg_sp4-19]=+43
/*+681:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+682:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+683:MOV*//*4*/memint32[(reg_sp4-103)]=memint32[(reg_sp4-18)];
/*+684:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-103)];reg_this4=reg_this>>2;
/*+685:CALL*/regs.push(111);reg_ip=7;
}
/*686*/
code[111]=function(){
/*+686:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+687:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+688:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+689:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-103)];reg_this4=reg_this>>2;
/*+690:CALL*/regs.push(112);reg_ip=12;
}
/*691*/
code[112]=function(){
/*+691:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+692:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+694:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-103)];reg_this4=reg_this>>2;
/*+695:CALL*/regs.push(113);reg_ip=24;
}
/*696*/
code[113]=function(){
/*+696:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+697:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+698:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+699:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-103)];reg_this4=reg_this>>2;
/*+700:CALL*/regs.push(114);reg_ip=12;
}
/*701*/
code[114]=function(){
/*+701:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+702:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+703:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+704:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-103)];reg_this4=reg_this>>2;
/*+705:CALL*/regs.push(115);reg_ip=24;
}
/*706*/
code[115]=function(){
/*+706:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+707:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+708:ILDC*/memint32[reg_sp4-19]=+44
/*+709:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+710:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+711:MOV*//*4*/memint32[(reg_sp4-102)]=memint32[(reg_sp4-18)];
/*+712:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-102)];reg_this4=reg_this>>2;
/*+713:CALL*/regs.push(116);reg_ip=7;
}
/*714*/
code[116]=function(){
/*+714:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+715:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+716:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+717:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+718:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+719:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+720:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+721:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+722:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+723:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-102)];reg_this4=reg_this>>2;
/*+724:CALL*/regs.push(117);reg_ip=28;
}
/*725*/
code[117]=function(){
/*+725:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+726:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+727:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+728:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+729:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+730:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+731:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+732:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+733:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+734:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-102)];reg_this4=reg_this>>2;
/*+735:CALL*/regs.push(118);reg_ip=28;
}
/*736*/
code[118]=function(){
/*+736:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+737:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+738:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+739:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+740:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+741:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+742:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+743:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+744:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+745:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-102)];reg_this4=reg_this>>2;
/*+746:CALL*/regs.push(119);reg_ip=28;
}
/*747*/
code[119]=function(){
/*+747:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+748:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+749:ILDC*/memint32[reg_sp4-19]=+45
/*+750:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+751:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+752:MOV*//*4*/memint32[(reg_sp4-101)]=memint32[(reg_sp4-18)];
/*+753:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-101)];reg_this4=reg_this>>2;
/*+754:CALL*/regs.push(120);reg_ip=7;
}
/*755*/
code[120]=function(){
/*+755:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+756:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+757:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+758:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-101)];reg_this4=reg_this>>2;
/*+759:CALL*/regs.push(121);reg_ip=12;
}
/*760*/
code[121]=function(){
/*+760:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+761:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+762:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+763:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-101)];reg_this4=reg_this>>2;
/*+764:CALL*/regs.push(122);reg_ip=24;
}
/*765*/
code[122]=function(){
/*+765:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+766:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+767:ILDC*/memint32[reg_sp4-19]=+46
/*+768:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+769:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+770:MOV*//*4*/memint32[(reg_sp4-100)]=memint32[(reg_sp4-18)];
/*+771:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-100)];reg_this4=reg_this>>2;
/*+772:CALL*/regs.push(123);reg_ip=7;
}
/*773*/
code[123]=function(){
/*+773:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+774:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+775:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+776:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+777:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+778:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+779:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+780:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+781:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+782:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-100)];reg_this4=reg_this>>2;
/*+783:CALL*/regs.push(124);reg_ip=28;
}
/*784*/
code[124]=function(){
/*+784:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+785:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+786:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+787:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+788:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+789:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+790:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+791:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+792:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+793:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-100)];reg_this4=reg_this>>2;
/*+794:CALL*/regs.push(125);reg_ip=28;
}
/*795*/
code[125]=function(){
/*+795:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+796:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+797:ILDC*/memint32[reg_sp4-19]=+47
/*+798:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+799:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+800:MOV*//*4*/memint32[(reg_sp4-99)]=memint32[(reg_sp4-18)];
/*+801:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-99)];reg_this4=reg_this>>2;
/*+802:CALL*/regs.push(126);reg_ip=7;
}
/*803*/
code[126]=function(){
/*+803:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+804:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+805:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-99)];reg_this4=reg_this>>2;
/*+807:CALL*/regs.push(127);reg_ip=12;
}
/*808*/
code[127]=function(){
/*+808:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+809:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+810:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+811:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-99)];reg_this4=reg_this>>2;
/*+812:CALL*/regs.push(128);reg_ip=24;
}
/*813*/
code[128]=function(){
/*+813:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+814:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+815:ILDC*/memint32[reg_sp4-19]=+48
/*+816:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+817:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+818:MOV*//*4*/memint32[(reg_sp4-98)]=memint32[(reg_sp4-18)];
/*+819:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-98)];reg_this4=reg_this>>2;
/*+820:CALL*/regs.push(129);reg_ip=7;
}
/*821*/
code[129]=function(){
/*+821:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+822:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+823:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+824:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+825:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+826:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+827:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+828:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+829:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+830:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-98)];reg_this4=reg_this>>2;
/*+831:CALL*/regs.push(130);reg_ip=28;
}
/*832*/
code[130]=function(){
/*+832:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+833:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+834:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+835:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+836:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+837:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+838:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+839:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+840:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+841:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-98)];reg_this4=reg_this>>2;
/*+842:CALL*/regs.push(131);reg_ip=28;
}
/*843*/
code[131]=function(){
/*+843:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+844:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+845:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+846:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-98)];reg_this4=reg_this>>2;
/*+847:CALL*/regs.push(132);reg_ip=12;
}
/*848*/
code[132]=function(){
/*+848:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+849:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+850:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+851:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-98)];reg_this4=reg_this>>2;
/*+852:CALL*/regs.push(133);reg_ip=24;
}
/*853*/
code[133]=function(){
/*+853:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+854:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+855:ILDC*/memint32[reg_sp4-19]=+49
/*+856:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+857:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+858:MOV*//*4*/memint32[(reg_sp4-97)]=memint32[(reg_sp4-18)];
/*+859:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+860:CALL*/regs.push(134);reg_ip=7;
}
/*861*/
code[134]=function(){
/*+861:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+862:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+863:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+864:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+865:CALL*/regs.push(135);reg_ip=12;
}
/*866*/
code[135]=function(){
/*+866:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+867:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+868:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+869:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+870:CALL*/regs.push(136);reg_ip=24;
}
/*871*/
code[136]=function(){
/*+871:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+872:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+873:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+874:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+875:CALL*/regs.push(137);reg_ip=12;
}
/*876*/
code[137]=function(){
/*+876:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+877:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+878:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+879:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+880:CALL*/regs.push(138);reg_ip=24;
}
/*881*/
code[138]=function(){
/*+881:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+882:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+883:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+884:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+885:CALL*/regs.push(139);reg_ip=12;
}
/*886*/
code[139]=function(){
/*+886:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+887:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+888:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+889:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-97)];reg_this4=reg_this>>2;
/*+890:CALL*/regs.push(140);reg_ip=24;
}
/*891*/
code[140]=function(){
/*+891:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+892:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+893:ILDC*/memint32[reg_sp4-19]=+50
/*+894:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+895:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+896:MOV*//*4*/memint32[(reg_sp4-96)]=memint32[(reg_sp4-18)];
/*+897:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-96)];reg_this4=reg_this>>2;
/*+898:CALL*/regs.push(141);reg_ip=7;
}
/*899*/
code[141]=function(){
/*+899:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+900:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+901:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+902:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+903:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+904:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+905:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+906:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+907:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+908:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-96)];reg_this4=reg_this>>2;
/*+909:CALL*/regs.push(142);reg_ip=28;
}
/*910*/
code[142]=function(){
/*+910:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+911:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+912:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+913:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+914:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+915:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+916:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+917:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+918:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+919:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-96)];reg_this4=reg_this>>2;
/*+920:CALL*/regs.push(143);reg_ip=28;
}
/*921*/
code[143]=function(){
/*+921:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+922:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+923:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+924:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-96)];reg_this4=reg_this>>2;
/*+925:CALL*/regs.push(144);reg_ip=12;
}
/*926*/
code[144]=function(){
/*+926:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+927:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+928:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+929:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-96)];reg_this4=reg_this>>2;
/*+930:CALL*/regs.push(145);reg_ip=24;
}
/*931*/
code[145]=function(){
/*+931:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+932:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+933:ILDC*/memint32[reg_sp4-19]=+51
/*+934:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+935:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+936:MOV*//*4*/memint32[(reg_sp4-95)]=memint32[(reg_sp4-18)];
/*+937:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-95)];reg_this4=reg_this>>2;
/*+938:CALL*/regs.push(146);reg_ip=7;
}
/*939*/
code[146]=function(){
/*+939:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+940:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+941:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+942:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+943:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+944:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+945:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+946:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+947:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+948:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-95)];reg_this4=reg_this>>2;
/*+949:CALL*/regs.push(147);reg_ip=28;
}
/*950*/
code[147]=function(){
/*+950:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+951:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+952:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+953:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+954:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+955:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+956:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+957:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+958:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+959:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-95)];reg_this4=reg_this>>2;
/*+960:CALL*/regs.push(148);reg_ip=28;
}
/*961*/
code[148]=function(){
/*+961:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+962:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+963:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+964:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+965:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+966:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+967:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+968:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+969:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+970:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-95)];reg_this4=reg_this>>2;
/*+971:CALL*/regs.push(149);reg_ip=28;
}
/*972*/
code[149]=function(){
/*+972:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+973:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+974:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+975:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+976:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+977:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+978:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+979:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+980:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+981:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-95)];reg_this4=reg_this>>2;
/*+982:CALL*/regs.push(150);reg_ip=28;
}
/*983*/
code[150]=function(){
/*+983:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+984:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+985:ILDC*/memint32[reg_sp4-19]=+52
/*+986:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+987:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+988:MOV*//*4*/memint32[(reg_sp4-94)]=memint32[(reg_sp4-18)];
/*+989:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-94)];reg_this4=reg_this>>2;
/*+990:CALL*/regs.push(151);reg_ip=7;
}
/*991*/
code[151]=function(){
/*+991:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+992:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+993:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+994:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-94)];reg_this4=reg_this>>2;
/*+995:CALL*/regs.push(152);reg_ip=12;
}
/*996*/
code[152]=function(){
/*+996:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+997:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+998:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+999:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-94)];reg_this4=reg_this>>2;
/*+1000:CALL*/regs.push(153);reg_ip=24;
}
/*1001*/
code[153]=function(){
/*+1001:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1002:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1003:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1004:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-94)];reg_this4=reg_this>>2;
/*+1005:CALL*/regs.push(154);reg_ip=24;
}
/*1006*/
code[154]=function(){
/*+1006:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1007:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1008:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1009:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-94)];reg_this4=reg_this>>2;
/*+1010:CALL*/regs.push(155);reg_ip=24;
}
/*1011*/
code[155]=function(){
/*+1011:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1012:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1013:ILDC*/memint32[reg_sp4-19]=+53
/*+1014:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1015:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1016:MOV*//*4*/memint32[(reg_sp4-93)]=memint32[(reg_sp4-18)];
/*+1017:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1018:CALL*/regs.push(156);reg_ip=7;
}
/*1019*/
code[156]=function(){
/*+1019:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1020:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1021:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1022:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1023:CALL*/regs.push(157);reg_ip=12;
}
/*1024*/
code[157]=function(){
/*+1024:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1025:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1026:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1027:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1028:CALL*/regs.push(158);reg_ip=24;
}
/*1029*/
code[158]=function(){
/*+1029:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1030:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1031:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1032:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1033:CALL*/regs.push(159);reg_ip=24;
}
/*1034*/
code[159]=function(){
/*+1034:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1035:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1036:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1037:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1038:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1039:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1040:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1041:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1042:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1043:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1044:CALL*/regs.push(160);reg_ip=28;
}
/*1045*/
code[160]=function(){
/*+1045:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1046:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1047:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1048:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1049:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1050:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1051:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1052:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1053:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1054:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-93)];reg_this4=reg_this>>2;
/*+1055:CALL*/regs.push(161);reg_ip=28;
}
/*1056*/
code[161]=function(){
/*+1056:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1057:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1058:ILDC*/memint32[reg_sp4-19]=+54
/*+1059:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1060:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1061:MOV*//*4*/memint32[(reg_sp4-92)]=memint32[(reg_sp4-18)];
/*+1062:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-92)];reg_this4=reg_this>>2;
/*+1063:CALL*/regs.push(162);reg_ip=7;
}
/*1064*/
code[162]=function(){
/*+1064:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1065:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+8.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1066:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1067:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1068:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1069:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1070:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1071:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1072:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1073:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-92)];reg_this4=reg_this>>2;
/*+1074:CALL*/regs.push(163);reg_ip=28;
}
/*1075*/
code[163]=function(){
/*+1075:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1076:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1077:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1078:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1079:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1080:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1081:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1082:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1083:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1084:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-92)];reg_this4=reg_this>>2;
/*+1085:CALL*/regs.push(164);reg_ip=28;
}
/*1086*/
code[164]=function(){
/*+1086:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1087:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1088:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1089:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1090:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1091:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1092:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1093:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1094:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1095:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-92)];reg_this4=reg_this>>2;
/*+1096:CALL*/regs.push(165);reg_ip=28;
}
/*1097*/
code[165]=function(){
/*+1097:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1098:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1099:ILDC*/memint32[reg_sp4-19]=+55
/*+1100:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1101:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1102:MOV*//*4*/memint32[(reg_sp4-91)]=memint32[(reg_sp4-18)];
/*+1103:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-91)];reg_this4=reg_this>>2;
/*+1104:CALL*/regs.push(166);reg_ip=7;
}
/*1105*/
code[166]=function(){
/*+1105:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1106:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1107:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1108:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1109:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1110:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1111:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1112:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1113:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1114:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-91)];reg_this4=reg_this>>2;
/*+1115:CALL*/regs.push(167);reg_ip=28;
}
/*1116*/
code[167]=function(){
/*+1116:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1117:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1118:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1119:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-91)];reg_this4=reg_this>>2;
/*+1120:CALL*/regs.push(168);reg_ip=24;
}
/*1121*/
code[168]=function(){
/*+1121:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1122:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1123:ILDC*/memint32[reg_sp4-19]=+56
/*+1124:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1125:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1126:MOV*//*4*/memint32[(reg_sp4-90)]=memint32[(reg_sp4-18)];
/*+1127:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-90)];reg_this4=reg_this>>2;
/*+1128:CALL*/regs.push(169);reg_ip=7;
}
/*1129*/
code[169]=function(){
/*+1129:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1130:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1131:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1132:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1133:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1134:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1135:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1136:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1137:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1138:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-90)];reg_this4=reg_this>>2;
/*+1139:CALL*/regs.push(170);reg_ip=28;
}
/*1140*/
code[170]=function(){
/*+1140:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1141:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1142:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1143:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1144:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1145:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1146:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1147:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1148:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1149:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-90)];reg_this4=reg_this>>2;
/*+1150:CALL*/regs.push(171);reg_ip=28;
}
/*1151*/
code[171]=function(){
/*+1151:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1152:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1153:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1154:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1155:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1156:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1157:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1158:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1159:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1160:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-90)];reg_this4=reg_this>>2;
/*+1161:CALL*/regs.push(172);reg_ip=28;
}
/*1162*/
code[172]=function(){
/*+1162:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1163:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1164:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1165:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1166:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1167:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1168:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1169:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1170:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1171:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-90)];reg_this4=reg_this>>2;
/*+1172:CALL*/regs.push(173);reg_ip=28;
}
/*1173*/
code[173]=function(){
/*+1173:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1174:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1175:ILDC*/memint32[reg_sp4-19]=+57
/*+1176:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1177:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1178:MOV*//*4*/memint32[(reg_sp4-89)]=memint32[(reg_sp4-18)];
/*+1179:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-89)];reg_this4=reg_this>>2;
/*+1180:CALL*/regs.push(174);reg_ip=7;
}
/*1181*/
code[174]=function(){
/*+1181:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1182:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1183:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1184:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1185:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1186:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1187:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1188:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1189:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1190:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-89)];reg_this4=reg_this>>2;
/*+1191:CALL*/regs.push(175);reg_ip=28;
}
/*1192*/
code[175]=function(){
/*+1192:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1193:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1194:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1195:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1196:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1197:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1198:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1199:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1200:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1201:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-89)];reg_this4=reg_this>>2;
/*+1202:CALL*/regs.push(176);reg_ip=28;
}
/*1203*/
code[176]=function(){
/*+1203:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1204:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1205:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1206:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1207:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1208:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1209:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1210:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1211:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1212:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-89)];reg_this4=reg_this>>2;
/*+1213:CALL*/regs.push(177);reg_ip=28;
}
/*1214*/
code[177]=function(){
/*+1214:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1215:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1216:ILDC*/memint32[reg_sp4-19]=+58
/*+1217:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1218:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1219:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-18)];
/*+1220:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-88)];reg_this4=reg_this>>2;
/*+1221:CALL*/regs.push(178);reg_ip=7;
}
/*1222*/
code[178]=function(){
/*+1222:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1223:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1224:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1225:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-88)];reg_this4=reg_this>>2;
/*+1226:CALL*/regs.push(179);reg_ip=12;
}
/*1227*/
code[179]=function(){
/*+1227:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1228:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1229:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1230:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-88)];reg_this4=reg_this>>2;
/*+1231:CALL*/regs.push(180);reg_ip=24;
}
/*1232*/
code[180]=function(){
/*+1232:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1233:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1234:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1235:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-88)];reg_this4=reg_this>>2;
/*+1236:CALL*/regs.push(181);reg_ip=12;
}
/*1237*/
code[181]=function(){
/*+1237:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1238:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1239:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1240:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-88)];reg_this4=reg_this>>2;
/*+1241:CALL*/regs.push(182);reg_ip=24;
}
/*1242*/
code[182]=function(){
/*+1242:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1243:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1244:ILDC*/memint32[reg_sp4-19]=+59
/*+1245:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1246:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1247:MOV*//*4*/memint32[(reg_sp4-87)]=memint32[(reg_sp4-18)];
/*+1248:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1249:CALL*/regs.push(183);reg_ip=7;
}
/*1250*/
code[183]=function(){
/*+1250:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1251:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1252:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1253:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1254:CALL*/regs.push(184);reg_ip=12;
}
/*1255*/
code[184]=function(){
/*+1255:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1256:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1257:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1258:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1259:CALL*/regs.push(185);reg_ip=24;
}
/*1260*/
code[185]=function(){
/*+1260:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1261:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1262:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1263:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1264:CALL*/regs.push(186);reg_ip=24;
}
/*1265*/
code[186]=function(){
/*+1265:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1266:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1267:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1268:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1269:CALL*/regs.push(187);reg_ip=24;
}
/*1270*/
code[187]=function(){
/*+1270:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1271:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1272:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1273:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1274:CALL*/regs.push(188);reg_ip=24;
}
/*1275*/
code[188]=function(){
/*+1275:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1276:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1277:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1278:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1279:CALL*/regs.push(189);reg_ip=12;
}
/*1280*/
code[189]=function(){
/*+1280:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1281:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1282:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1283:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-87)];reg_this4=reg_this>>2;
/*+1284:CALL*/regs.push(190);reg_ip=24;
}
/*1285*/
code[190]=function(){
/*+1285:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1286:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1287:ILDC*/memint32[reg_sp4-19]=+60
/*+1288:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1289:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1290:MOV*//*4*/memint32[(reg_sp4-86)]=memint32[(reg_sp4-18)];
/*+1291:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-86)];reg_this4=reg_this>>2;
/*+1292:CALL*/regs.push(191);reg_ip=7;
}
/*1293*/
code[191]=function(){
/*+1293:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1294:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1295:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1296:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-86)];reg_this4=reg_this>>2;
/*+1297:CALL*/regs.push(192);reg_ip=12;
}
/*1298*/
code[192]=function(){
/*+1298:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1299:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1300:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1301:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-86)];reg_this4=reg_this>>2;
/*+1302:CALL*/regs.push(193);reg_ip=24;
}
/*1303*/
code[193]=function(){
/*+1303:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1304:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1305:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1306:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-86)];reg_this4=reg_this>>2;
/*+1307:CALL*/regs.push(194);reg_ip=24;
}
/*1308*/
code[194]=function(){
/*+1308:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1309:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1310:ILDC*/memint32[reg_sp4-19]=+61
/*+1311:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1312:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1313:MOV*//*4*/memint32[(reg_sp4-85)]=memint32[(reg_sp4-18)];
/*+1314:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-85)];reg_this4=reg_this>>2;
/*+1315:CALL*/regs.push(195);reg_ip=7;
}
/*1316*/
code[195]=function(){
/*+1316:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1317:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1318:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1319:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-85)];reg_this4=reg_this>>2;
/*+1320:CALL*/regs.push(196);reg_ip=12;
}
/*1321*/
code[196]=function(){
/*+1321:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1322:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1323:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1324:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-85)];reg_this4=reg_this>>2;
/*+1325:CALL*/regs.push(197);reg_ip=24;
}
/*1326*/
code[197]=function(){
/*+1326:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1327:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1328:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1329:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-85)];reg_this4=reg_this>>2;
/*+1330:CALL*/regs.push(198);reg_ip=12;
}
/*1331*/
code[198]=function(){
/*+1331:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1332:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1333:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1334:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-85)];reg_this4=reg_this>>2;
/*+1335:CALL*/regs.push(199);reg_ip=24;
}
/*1336*/
code[199]=function(){
/*+1336:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1337:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1338:ILDC*/memint32[reg_sp4-19]=+62
/*+1339:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1340:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1341:MOV*//*4*/memint32[(reg_sp4-84)]=memint32[(reg_sp4-18)];
/*+1342:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-84)];reg_this4=reg_this>>2;
/*+1343:CALL*/regs.push(200);reg_ip=7;
}
/*1344*/
code[200]=function(){
/*+1344:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1345:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1346:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1347:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-84)];reg_this4=reg_this>>2;
/*+1348:CALL*/regs.push(201);reg_ip=12;
}
/*1349*/
code[201]=function(){
/*+1349:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1350:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1351:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1352:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-84)];reg_this4=reg_this>>2;
/*+1353:CALL*/regs.push(202);reg_ip=24;
}
/*1354*/
code[202]=function(){
/*+1354:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1355:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1356:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1357:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-84)];reg_this4=reg_this>>2;
/*+1358:CALL*/regs.push(203);reg_ip=24;
}
/*1359*/
code[203]=function(){
/*+1359:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1360:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1361:ILDC*/memint32[reg_sp4-19]=+64
/*+1362:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1363:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1364:MOV*//*4*/memint32[(reg_sp4-83)]=memint32[(reg_sp4-18)];
/*+1365:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1366:CALL*/regs.push(204);reg_ip=7;
}
/*1367*/
code[204]=function(){
/*+1367:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1368:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1369:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1370:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1371:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1372:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1373:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1374:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1375:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1376:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1377:CALL*/regs.push(205);reg_ip=28;
}
/*1378*/
code[205]=function(){
/*+1378:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1379:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1380:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1381:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1382:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1383:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1384:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1385:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1386:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1387:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1388:CALL*/regs.push(206);reg_ip=28;
}
/*1389*/
code[206]=function(){
/*+1389:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1390:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1391:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1392:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1393:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1394:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1395:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1396:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1397:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1398:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1399:CALL*/regs.push(207);reg_ip=28;
}
/*1400*/
code[207]=function(){
/*+1400:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1401:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1402:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1403:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1404:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1405:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1406:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1407:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1408:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1409:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1410:CALL*/regs.push(208);reg_ip=28;
}
/*1411*/
code[208]=function(){
/*+1411:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1412:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1413:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1414:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1415:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1416:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1417:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1418:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1419:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1420:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1421:CALL*/regs.push(209);reg_ip=28;
}
/*1422*/
code[209]=function(){
/*+1422:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1423:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1424:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1425:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1426:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1427:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1428:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1429:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1430:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1431:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-83)];reg_this4=reg_this>>2;
/*+1432:CALL*/regs.push(210);reg_ip=28;
}
/*1433*/
code[210]=function(){
/*+1433:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1434:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1435:ILDC*/memint32[reg_sp4-19]=+65
/*+1436:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1437:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1438:MOV*//*4*/memint32[(reg_sp4-82)]=memint32[(reg_sp4-18)];
/*+1439:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1440:CALL*/regs.push(211);reg_ip=7;
}
/*1441*/
code[211]=function(){
/*+1441:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1442:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1443:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1444:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1445:CALL*/regs.push(212);reg_ip=12;
}
/*1446*/
code[212]=function(){
/*+1446:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1447:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1448:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1449:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1450:CALL*/regs.push(213);reg_ip=24;
}
/*1451*/
code[213]=function(){
/*+1451:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1452:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1453:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1454:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1455:CALL*/regs.push(214);reg_ip=24;
}
/*1456*/
code[214]=function(){
/*+1456:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1457:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1458:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1459:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1460:CALL*/regs.push(215);reg_ip=12;
}
/*1461*/
code[215]=function(){
/*+1461:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1462:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1463:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1464:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-82)];reg_this4=reg_this>>2;
/*+1465:CALL*/regs.push(216);reg_ip=24;
}
/*1466*/
code[216]=function(){
/*+1466:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1467:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1468:ILDC*/memint32[reg_sp4-19]=+66
/*+1469:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1470:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1471:MOV*//*4*/memint32[(reg_sp4-81)]=memint32[(reg_sp4-18)];
/*+1472:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1473:CALL*/regs.push(217);reg_ip=7;
}
/*1474*/
code[217]=function(){
/*+1474:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1475:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1476:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1477:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1478:CALL*/regs.push(218);reg_ip=12;
}
/*1479*/
code[218]=function(){
/*+1479:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1480:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1481:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1482:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1483:CALL*/regs.push(219);reg_ip=24;
}
/*1484*/
code[219]=function(){
/*+1484:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1485:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1486:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1487:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1488:CALL*/regs.push(220);reg_ip=24;
}
/*1489*/
code[220]=function(){
/*+1489:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1490:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1491:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1492:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1493:CALL*/regs.push(221);reg_ip=24;
}
/*1494*/
code[221]=function(){
/*+1494:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1495:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1496:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1497:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1498:CALL*/regs.push(222);reg_ip=12;
}
/*1499*/
code[222]=function(){
/*+1499:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1500:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1501:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1502:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1503:CALL*/regs.push(223);reg_ip=24;
}
/*1504*/
code[223]=function(){
/*+1504:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1505:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1506:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1507:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1508:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1509:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1510:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1511:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1512:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1513:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1514:CALL*/regs.push(224);reg_ip=28;
}
/*1515*/
code[224]=function(){
/*+1515:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1516:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1517:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1518:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1519:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1520:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1521:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1522:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1523:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1524:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-81)];reg_this4=reg_this>>2;
/*+1525:CALL*/regs.push(225);reg_ip=28;
}
/*1526*/
code[225]=function(){
/*+1526:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1527:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1528:ILDC*/memint32[reg_sp4-19]=+67
/*+1529:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1530:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1531:MOV*//*4*/memint32[(reg_sp4-80)]=memint32[(reg_sp4-18)];
/*+1532:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-80)];reg_this4=reg_this>>2;
/*+1533:CALL*/regs.push(226);reg_ip=7;
}
/*1534*/
code[226]=function(){
/*+1534:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1535:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1536:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1537:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1538:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1539:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1540:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1541:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1542:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1543:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-80)];reg_this4=reg_this>>2;
/*+1544:CALL*/regs.push(227);reg_ip=28;
}
/*1545*/
code[227]=function(){
/*+1545:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1546:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1547:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1548:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1549:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1550:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1551:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1552:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1553:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1554:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-80)];reg_this4=reg_this>>2;
/*+1555:CALL*/regs.push(228);reg_ip=28;
}
/*1556*/
code[228]=function(){
/*+1556:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1557:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1558:ILDC*/memint32[reg_sp4-19]=+68
/*+1559:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1560:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1561:MOV*//*4*/memint32[(reg_sp4-79)]=memint32[(reg_sp4-18)];
/*+1562:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1563:CALL*/regs.push(229);reg_ip=7;
}
/*1564*/
code[229]=function(){
/*+1564:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1565:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1566:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1567:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1568:CALL*/regs.push(230);reg_ip=12;
}
/*1569*/
code[230]=function(){
/*+1569:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1570:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1571:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1572:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1573:CALL*/regs.push(231);reg_ip=24;
}
/*1574*/
code[231]=function(){
/*+1574:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1575:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1576:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1577:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1578:CALL*/regs.push(232);reg_ip=24;
}
/*1579*/
code[232]=function(){
/*+1579:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1580:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1581:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1582:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1583:CALL*/regs.push(233);reg_ip=24;
}
/*1584*/
code[233]=function(){
/*+1584:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1585:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1586:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1587:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1588:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1589:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1590:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1591:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1592:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1593:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-79)];reg_this4=reg_this>>2;
/*+1594:CALL*/regs.push(234);reg_ip=28;
}
/*1595*/
code[234]=function(){
/*+1595:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1596:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1597:ILDC*/memint32[reg_sp4-19]=+69
/*+1598:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1599:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1600:MOV*//*4*/memint32[(reg_sp4-78)]=memint32[(reg_sp4-18)];
/*+1601:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1602:CALL*/regs.push(235);reg_ip=7;
}
/*1603*/
code[235]=function(){
/*+1603:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1604:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1605:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1606:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1607:CALL*/regs.push(236);reg_ip=12;
}
/*1608*/
code[236]=function(){
/*+1608:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1609:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1610:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1611:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1612:CALL*/regs.push(237);reg_ip=24;
}
/*1613*/
code[237]=function(){
/*+1613:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1614:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1615:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1616:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1617:CALL*/regs.push(238);reg_ip=24;
}
/*1618*/
code[238]=function(){
/*+1618:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1619:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1620:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1621:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1622:CALL*/regs.push(239);reg_ip=24;
}
/*1623*/
code[239]=function(){
/*+1623:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1624:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1625:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1626:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1627:CALL*/regs.push(240);reg_ip=12;
}
/*1628*/
code[240]=function(){
/*+1628:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1629:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1630:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1631:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-78)];reg_this4=reg_this>>2;
/*+1632:CALL*/regs.push(241);reg_ip=24;
}
/*1633*/
code[241]=function(){
/*+1633:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1634:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1635:ILDC*/memint32[reg_sp4-19]=+70
/*+1636:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1637:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1638:MOV*//*4*/memint32[(reg_sp4-77)]=memint32[(reg_sp4-18)];
/*+1639:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1640:CALL*/regs.push(242);reg_ip=7;
}
/*1641*/
code[242]=function(){
/*+1641:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1642:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1643:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1644:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1645:CALL*/regs.push(243);reg_ip=12;
}
/*1646*/
code[243]=function(){
/*+1646:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1647:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1648:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1649:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1650:CALL*/regs.push(244);reg_ip=24;
}
/*1651*/
code[244]=function(){
/*+1651:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1652:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1653:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1654:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1655:CALL*/regs.push(245);reg_ip=24;
}
/*1656*/
code[245]=function(){
/*+1656:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1657:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1658:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1659:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1660:CALL*/regs.push(246);reg_ip=12;
}
/*1661*/
code[246]=function(){
/*+1661:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1662:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1663:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1664:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-77)];reg_this4=reg_this>>2;
/*+1665:CALL*/regs.push(247);reg_ip=24;
}
/*1666*/
code[247]=function(){
/*+1666:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1667:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1668:ILDC*/memint32[reg_sp4-19]=+71
/*+1669:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1670:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1671:MOV*//*4*/memint32[(reg_sp4-76)]=memint32[(reg_sp4-18)];
/*+1672:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1673:CALL*/regs.push(248);reg_ip=7;
}
/*1674*/
code[248]=function(){
/*+1674:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1675:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1676:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1677:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1678:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1679:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1680:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1681:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1682:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1683:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1684:CALL*/regs.push(249);reg_ip=28;
}
/*1685*/
code[249]=function(){
/*+1685:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1686:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1687:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1688:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1689:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1690:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1691:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1692:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1693:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1694:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1695:CALL*/regs.push(250);reg_ip=28;
}
/*1696*/
code[250]=function(){
/*+1696:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1697:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1698:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1699:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1700:CALL*/regs.push(251);reg_ip=12;
}
/*1701*/
code[251]=function(){
/*+1701:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1702:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1703:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1704:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1705:CALL*/regs.push(252);reg_ip=24;
}
/*1706*/
code[252]=function(){
/*+1706:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1707:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1708:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1709:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-76)];reg_this4=reg_this>>2;
/*+1710:CALL*/regs.push(253);reg_ip=24;
}
/*1711*/
code[253]=function(){
/*+1711:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1712:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1713:ILDC*/memint32[reg_sp4-19]=+72
/*+1714:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1715:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1716:MOV*//*4*/memint32[(reg_sp4-75)]=memint32[(reg_sp4-18)];
/*+1717:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1718:CALL*/regs.push(254);reg_ip=7;
}
/*1719*/
code[254]=function(){
/*+1719:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1720:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1721:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1722:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1723:CALL*/regs.push(255);reg_ip=12;
}
/*1724*/
code[255]=function(){
/*+1724:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1725:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1726:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1727:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1728:CALL*/regs.push(256);reg_ip=24;
}
/*1729*/
code[256]=function(){
/*+1729:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1730:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1731:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1732:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1733:CALL*/regs.push(257);reg_ip=12;
}
/*1734*/
code[257]=function(){
/*+1734:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1735:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1736:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1737:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1738:CALL*/regs.push(258);reg_ip=24;
}
/*1739*/
code[258]=function(){
/*+1739:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1740:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1741:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1742:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1743:CALL*/regs.push(259);reg_ip=12;
}
/*1744*/
code[259]=function(){
/*+1744:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1745:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1746:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1747:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-75)];reg_this4=reg_this>>2;
/*+1748:CALL*/regs.push(260);reg_ip=24;
}
/*1749*/
code[260]=function(){
/*+1749:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1750:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1751:ILDC*/memint32[reg_sp4-19]=+73
/*+1752:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1753:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1754:MOV*//*4*/memint32[(reg_sp4-74)]=memint32[(reg_sp4-18)];
/*+1755:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1756:CALL*/regs.push(261);reg_ip=7;
}
/*1757*/
code[261]=function(){
/*+1757:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1758:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1759:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1760:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1761:CALL*/regs.push(262);reg_ip=12;
}
/*1762*/
code[262]=function(){
/*+1762:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1763:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1764:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1765:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1766:CALL*/regs.push(263);reg_ip=24;
}
/*1767*/
code[263]=function(){
/*+1767:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1768:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1769:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1770:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1771:CALL*/regs.push(264);reg_ip=12;
}
/*1772*/
code[264]=function(){
/*+1772:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1773:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1774:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1775:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1776:CALL*/regs.push(265);reg_ip=24;
}
/*1777*/
code[265]=function(){
/*+1777:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1778:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1779:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1780:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1781:CALL*/regs.push(266);reg_ip=12;
}
/*1782*/
code[266]=function(){
/*+1782:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1783:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1784:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1785:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-74)];reg_this4=reg_this>>2;
/*+1786:CALL*/regs.push(267);reg_ip=24;
}
/*1787*/
code[267]=function(){
/*+1787:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1788:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1789:ILDC*/memint32[reg_sp4-19]=+74
/*+1790:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1791:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1792:MOV*//*4*/memint32[(reg_sp4-73)]=memint32[(reg_sp4-18)];
/*+1793:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1794:CALL*/regs.push(268);reg_ip=7;
}
/*1795*/
code[268]=function(){
/*+1795:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1796:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1797:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1798:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1799:CALL*/regs.push(269);reg_ip=12;
}
/*1800*/
code[269]=function(){
/*+1800:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1801:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1802:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1803:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1804:CALL*/regs.push(270);reg_ip=24;
}
/*1805*/
code[270]=function(){
/*+1805:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1806:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1807:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1808:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1809:CALL*/regs.push(271);reg_ip=12;
}
/*1810*/
code[271]=function(){
/*+1810:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1811:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1812:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1813:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1814:CALL*/regs.push(272);reg_ip=24;
}
/*1815*/
code[272]=function(){
/*+1815:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1816:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1817:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1818:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1819:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1820:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1821:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1822:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1823:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1824:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-73)];reg_this4=reg_this>>2;
/*+1825:CALL*/regs.push(273);reg_ip=28;
}
/*1826*/
code[273]=function(){
/*+1826:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1827:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1828:ILDC*/memint32[reg_sp4-19]=+75
/*+1829:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1830:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1831:MOV*//*4*/memint32[(reg_sp4-72)]=memint32[(reg_sp4-18)];
/*+1832:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1833:CALL*/regs.push(274);reg_ip=7;
}
/*1834*/
code[274]=function(){
/*+1834:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1835:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1836:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1837:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1838:CALL*/regs.push(275);reg_ip=12;
}
/*1839*/
code[275]=function(){
/*+1839:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1840:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1841:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1842:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1843:CALL*/regs.push(276);reg_ip=24;
}
/*1844*/
code[276]=function(){
/*+1844:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1845:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1846:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1847:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1848:CALL*/regs.push(277);reg_ip=12;
}
/*1849*/
code[277]=function(){
/*+1849:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1850:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1851:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1852:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1853:CALL*/regs.push(278);reg_ip=24;
}
/*1854*/
code[278]=function(){
/*+1854:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1855:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1856:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1857:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1858:CALL*/regs.push(279);reg_ip=12;
}
/*1859*/
code[279]=function(){
/*+1859:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1860:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1861:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1862:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-72)];reg_this4=reg_this>>2;
/*+1863:CALL*/regs.push(280);reg_ip=24;
}
/*1864*/
code[280]=function(){
/*+1864:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1865:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1866:ILDC*/memint32[reg_sp4-19]=+76
/*+1867:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1868:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1869:MOV*//*4*/memint32[(reg_sp4-71)]=memint32[(reg_sp4-18)];
/*+1870:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-71)];reg_this4=reg_this>>2;
/*+1871:CALL*/regs.push(281);reg_ip=7;
}
/*1872*/
code[281]=function(){
/*+1872:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1873:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1874:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1875:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-71)];reg_this4=reg_this>>2;
/*+1876:CALL*/regs.push(282);reg_ip=12;
}
/*1877*/
code[282]=function(){
/*+1877:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1878:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1879:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1880:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-71)];reg_this4=reg_this>>2;
/*+1881:CALL*/regs.push(283);reg_ip=24;
}
/*1882*/
code[283]=function(){
/*+1882:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1883:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1884:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1885:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-71)];reg_this4=reg_this>>2;
/*+1886:CALL*/regs.push(284);reg_ip=24;
}
/*1887*/
code[284]=function(){
/*+1887:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1888:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1889:ILDC*/memint32[reg_sp4-19]=+77
/*+1890:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1891:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1892:MOV*//*4*/memint32[(reg_sp4-70)]=memint32[(reg_sp4-18)];
/*+1893:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1894:CALL*/regs.push(285);reg_ip=7;
}
/*1895*/
code[285]=function(){
/*+1895:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1896:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1897:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1898:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1899:CALL*/regs.push(286);reg_ip=12;
}
/*1900*/
code[286]=function(){
/*+1900:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1901:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1902:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1903:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1904:CALL*/regs.push(287);reg_ip=24;
}
/*1905*/
code[287]=function(){
/*+1905:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1906:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1907:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1908:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1909:CALL*/regs.push(288);reg_ip=24;
}
/*1910*/
code[288]=function(){
/*+1910:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1911:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1912:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1913:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1914:CALL*/regs.push(289);reg_ip=24;
}
/*1915*/
code[289]=function(){
/*+1915:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1916:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1917:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1918:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-70)];reg_this4=reg_this>>2;
/*+1919:CALL*/regs.push(290);reg_ip=24;
}
/*1920*/
code[290]=function(){
/*+1920:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1921:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1922:ILDC*/memint32[reg_sp4-19]=+78
/*+1923:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1924:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1925:MOV*//*4*/memint32[(reg_sp4-69)]=memint32[(reg_sp4-18)];
/*+1926:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-69)];reg_this4=reg_this>>2;
/*+1927:CALL*/regs.push(291);reg_ip=7;
}
/*1928*/
code[291]=function(){
/*+1928:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1929:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1930:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1931:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-69)];reg_this4=reg_this>>2;
/*+1932:CALL*/regs.push(292);reg_ip=12;
}
/*1933*/
code[292]=function(){
/*+1933:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1934:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1935:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1936:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-69)];reg_this4=reg_this>>2;
/*+1937:CALL*/regs.push(293);reg_ip=24;
}
/*1938*/
code[293]=function(){
/*+1938:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1939:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1940:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1941:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-69)];reg_this4=reg_this>>2;
/*+1942:CALL*/regs.push(294);reg_ip=24;
}
/*1943*/
code[294]=function(){
/*+1943:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1944:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1945:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1946:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-69)];reg_this4=reg_this>>2;
/*+1947:CALL*/regs.push(295);reg_ip=24;
}
/*1948*/
code[295]=function(){
/*+1948:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1949:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1950:ILDC*/memint32[reg_sp4-19]=+79
/*+1951:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1952:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1953:MOV*//*4*/memint32[(reg_sp4-68)]=memint32[(reg_sp4-18)];
/*+1954:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-68)];reg_this4=reg_this>>2;
/*+1955:CALL*/regs.push(296);reg_ip=7;
}
/*1956*/
code[296]=function(){
/*+1956:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1957:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1958:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1959:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1960:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1961:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1962:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1963:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1964:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1965:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-68)];reg_this4=reg_this>>2;
/*+1966:CALL*/regs.push(297);reg_ip=28;
}
/*1967*/
code[297]=function(){
/*+1967:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1968:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1969:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1970:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1971:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1972:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1973:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1974:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1975:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1976:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-68)];reg_this4=reg_this>>2;
/*+1977:CALL*/regs.push(298);reg_ip=28;
}
/*1978*/
code[298]=function(){
/*+1978:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1979:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+1980:ILDC*/memint32[reg_sp4-19]=+80
/*+1981:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+1982:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+1983:MOV*//*4*/memint32[(reg_sp4-67)]=memint32[(reg_sp4-18)];
/*+1984:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+1985:CALL*/regs.push(299);reg_ip=7;
}
/*1986*/
code[299]=function(){
/*+1986:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1987:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1988:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1989:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+1990:CALL*/regs.push(300);reg_ip=12;
}
/*1991*/
code[300]=function(){
/*+1991:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1992:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1993:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1994:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+1995:CALL*/regs.push(301);reg_ip=24;
}
/*1996*/
code[301]=function(){
/*+1996:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1997:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1998:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1999:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+2000:CALL*/regs.push(302);reg_ip=24;
}
/*2001*/
code[302]=function(){
/*+2001:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2002:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2003:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2004:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+2005:CALL*/regs.push(303);reg_ip=12;
}
/*2006*/
code[303]=function(){
/*+2006:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2007:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2008:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2009:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+2010:CALL*/regs.push(304);reg_ip=24;
}
/*2011*/
code[304]=function(){
/*+2011:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2012:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2013:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2014:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2015:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2016:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2017:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2018:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2019:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2020:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-67)];reg_this4=reg_this>>2;
/*+2021:CALL*/regs.push(305);reg_ip=28;
}
/*2022*/
code[305]=function(){
/*+2022:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2023:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2024:ILDC*/memint32[reg_sp4-19]=+81
/*+2025:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2026:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2027:MOV*//*4*/memint32[(reg_sp4-66)]=memint32[(reg_sp4-18)];
/*+2028:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-66)];reg_this4=reg_this>>2;
/*+2029:CALL*/regs.push(306);reg_ip=7;
}
/*2030*/
code[306]=function(){
/*+2030:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2031:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2032:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2033:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2034:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2035:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2036:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=-0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2037:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2038:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2039:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-66)];reg_this4=reg_this>>2;
/*+2040:CALL*/regs.push(307);reg_ip=28;
}
/*2041*/
code[307]=function(){
/*+2041:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2042:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2043:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2044:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2045:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2046:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2047:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2048:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2049:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2050:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-66)];reg_this4=reg_this>>2;
/*+2051:CALL*/regs.push(308);reg_ip=28;
}
/*2052*/
code[308]=function(){
/*+2052:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2053:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2054:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2055:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2056:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2057:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2058:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2059:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2060:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2061:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-66)];reg_this4=reg_this>>2;
/*+2062:CALL*/regs.push(309);reg_ip=28;
}
/*2063*/
code[309]=function(){
/*+2063:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2064:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2065:ILDC*/memint32[reg_sp4-19]=+82
/*+2066:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2067:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2068:MOV*//*4*/memint32[(reg_sp4-65)]=memint32[(reg_sp4-18)];
/*+2069:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2070:CALL*/regs.push(310);reg_ip=7;
}
/*2071*/
code[310]=function(){
/*+2071:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2072:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2073:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2074:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2075:CALL*/regs.push(311);reg_ip=12;
}
/*2076*/
code[311]=function(){
/*+2076:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2077:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2078:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2079:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2080:CALL*/regs.push(312);reg_ip=24;
}
/*2081*/
code[312]=function(){
/*+2081:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2082:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2083:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2084:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2085:CALL*/regs.push(313);reg_ip=24;
}
/*2086*/
code[313]=function(){
/*+2086:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2087:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2088:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2089:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2090:CALL*/regs.push(314);reg_ip=12;
}
/*2091*/
code[314]=function(){
/*+2091:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2092:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2093:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2094:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2095:CALL*/regs.push(315);reg_ip=24;
}
/*2096*/
code[315]=function(){
/*+2096:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2097:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2098:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2099:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2100:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2101:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2102:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2103:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2104:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2105:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2106:CALL*/regs.push(316);reg_ip=28;
}
/*2107*/
code[316]=function(){
/*+2107:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2108:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2109:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2110:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2111:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2112:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2113:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2114:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2115:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2116:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-65)];reg_this4=reg_this>>2;
/*+2117:CALL*/regs.push(317);reg_ip=28;
}
/*2118*/
code[317]=function(){
/*+2118:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2119:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2120:ILDC*/memint32[reg_sp4-19]=+83
/*+2121:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2122:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2123:MOV*//*4*/memint32[(reg_sp4-64)]=memint32[(reg_sp4-18)];
/*+2124:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-64)];reg_this4=reg_this>>2;
/*+2125:CALL*/regs.push(318);reg_ip=7;
}
/*2126*/
code[318]=function(){
/*+2126:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2127:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+7.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2128:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2129:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2130:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2131:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2132:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2133:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2134:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2135:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-64)];reg_this4=reg_this>>2;
/*+2136:CALL*/regs.push(319);reg_ip=28;
}
/*2137*/
code[319]=function(){
/*+2137:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2138:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2139:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2140:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2141:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2142:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2143:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2144:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2145:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2146:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-64)];reg_this4=reg_this>>2;
/*+2147:CALL*/regs.push(320);reg_ip=28;
}
/*2148*/
code[320]=function(){
/*+2148:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2149:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2150:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2151:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2152:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2153:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2154:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2155:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2156:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2157:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-64)];reg_this4=reg_this>>2;
/*+2158:CALL*/regs.push(321);reg_ip=28;
}
/*2159*/
code[321]=function(){
/*+2159:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2160:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2161:ILDC*/memint32[reg_sp4-19]=+84
/*+2162:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2163:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2164:MOV*//*4*/memint32[(reg_sp4-63)]=memint32[(reg_sp4-18)];
/*+2165:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-63)];reg_this4=reg_this>>2;
/*+2166:CALL*/regs.push(322);reg_ip=7;
}
/*2167*/
code[322]=function(){
/*+2167:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2168:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2169:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2170:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-63)];reg_this4=reg_this>>2;
/*+2171:CALL*/regs.push(323);reg_ip=12;
}
/*2172*/
code[323]=function(){
/*+2172:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2173:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2174:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2175:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-63)];reg_this4=reg_this>>2;
/*+2176:CALL*/regs.push(324);reg_ip=24;
}
/*2177*/
code[324]=function(){
/*+2177:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2178:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2179:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2180:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-63)];reg_this4=reg_this>>2;
/*+2181:CALL*/regs.push(325);reg_ip=12;
}
/*2182*/
code[325]=function(){
/*+2182:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2183:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2184:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2185:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-63)];reg_this4=reg_this>>2;
/*+2186:CALL*/regs.push(326);reg_ip=24;
}
/*2187*/
code[326]=function(){
/*+2187:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2188:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2189:ILDC*/memint32[reg_sp4-19]=+85
/*+2190:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2191:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2192:MOV*//*4*/memint32[(reg_sp4-62)]=memint32[(reg_sp4-18)];
/*+2193:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2194:CALL*/regs.push(327);reg_ip=7;
}
/*2195*/
code[327]=function(){
/*+2195:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2196:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2197:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2198:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2199:CALL*/regs.push(328);reg_ip=12;
}
/*2200*/
code[328]=function(){
/*+2200:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2201:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2202:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2203:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2204:CALL*/regs.push(329);reg_ip=24;
}
/*2205*/
code[329]=function(){
/*+2205:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2206:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2207:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2208:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2209:CALL*/regs.push(330);reg_ip=12;
}
/*2210*/
code[330]=function(){
/*+2210:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2211:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2212:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2213:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2214:CALL*/regs.push(331);reg_ip=24;
}
/*2215*/
code[331]=function(){
/*+2215:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2216:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2217:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2218:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2219:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2220:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2221:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2222:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2223:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2224:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-62)];reg_this4=reg_this>>2;
/*+2225:CALL*/regs.push(332);reg_ip=28;
}
/*2226*/
code[332]=function(){
/*+2226:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2227:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2228:ILDC*/memint32[reg_sp4-19]=+86
/*+2229:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2230:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2231:MOV*//*4*/memint32[(reg_sp4-61)]=memint32[(reg_sp4-18)];
/*+2232:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-61)];reg_this4=reg_this>>2;
/*+2233:CALL*/regs.push(333);reg_ip=7;
}
/*2234*/
code[333]=function(){
/*+2234:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2235:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2236:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2237:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-61)];reg_this4=reg_this>>2;
/*+2238:CALL*/regs.push(334);reg_ip=12;
}
/*2239*/
code[334]=function(){
/*+2239:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2240:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2241:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2242:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-61)];reg_this4=reg_this>>2;
/*+2243:CALL*/regs.push(335);reg_ip=24;
}
/*2244*/
code[335]=function(){
/*+2244:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2245:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2246:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2247:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-61)];reg_this4=reg_this>>2;
/*+2248:CALL*/regs.push(336);reg_ip=24;
}
/*2249*/
code[336]=function(){
/*+2249:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2250:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2251:ILDC*/memint32[reg_sp4-19]=+87
/*+2252:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2253:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2254:MOV*//*4*/memint32[(reg_sp4-60)]=memint32[(reg_sp4-18)];
/*+2255:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2256:CALL*/regs.push(337);reg_ip=7;
}
/*2257*/
code[337]=function(){
/*+2257:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2258:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2259:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2260:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2261:CALL*/regs.push(338);reg_ip=12;
}
/*2262*/
code[338]=function(){
/*+2262:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2263:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2264:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2265:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2266:CALL*/regs.push(339);reg_ip=24;
}
/*2267*/
code[339]=function(){
/*+2267:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2268:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2269:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2270:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2271:CALL*/regs.push(340);reg_ip=24;
}
/*2272*/
code[340]=function(){
/*+2272:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2273:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2274:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2275:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2276:CALL*/regs.push(341);reg_ip=24;
}
/*2277*/
code[341]=function(){
/*+2277:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2278:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2279:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2280:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-60)];reg_this4=reg_this>>2;
/*+2281:CALL*/regs.push(342);reg_ip=24;
}
/*2282*/
code[342]=function(){
/*+2282:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2283:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2284:ILDC*/memint32[reg_sp4-19]=+88
/*+2285:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2286:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2287:MOV*//*4*/memint32[(reg_sp4-59)]=memint32[(reg_sp4-18)];
/*+2288:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+2289:CALL*/regs.push(343);reg_ip=7;
}
/*2290*/
code[343]=function(){
/*+2290:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2291:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2292:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2293:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+2294:CALL*/regs.push(344);reg_ip=12;
}
/*2295*/
code[344]=function(){
/*+2295:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2296:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2297:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2298:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+2299:CALL*/regs.push(345);reg_ip=24;
}
/*2300*/
code[345]=function(){
/*+2300:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2301:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2302:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2303:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+2304:CALL*/regs.push(346);reg_ip=12;
}
/*2305*/
code[346]=function(){
/*+2305:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2306:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2307:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2308:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-59)];reg_this4=reg_this>>2;
/*+2309:CALL*/regs.push(347);reg_ip=24;
}
/*2310*/
code[347]=function(){
/*+2310:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2311:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2312:ILDC*/memint32[reg_sp4-19]=+89
/*+2313:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2314:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2315:MOV*//*4*/memint32[(reg_sp4-58)]=memint32[(reg_sp4-18)];
/*+2316:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2317:CALL*/regs.push(348);reg_ip=7;
}
/*2318*/
code[348]=function(){
/*+2318:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2319:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2320:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2321:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2322:CALL*/regs.push(349);reg_ip=12;
}
/*2323*/
code[349]=function(){
/*+2323:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2324:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2325:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2326:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2327:CALL*/regs.push(350);reg_ip=24;
}
/*2328*/
code[350]=function(){
/*+2328:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2329:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2330:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2331:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2332:CALL*/regs.push(351);reg_ip=24;
}
/*2333*/
code[351]=function(){
/*+2333:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2334:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2335:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2336:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2337:CALL*/regs.push(352);reg_ip=12;
}
/*2338*/
code[352]=function(){
/*+2338:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2339:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2340:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2341:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-58)];reg_this4=reg_this>>2;
/*+2342:CALL*/regs.push(353);reg_ip=24;
}
/*2343*/
code[353]=function(){
/*+2343:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2344:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2345:ILDC*/memint32[reg_sp4-19]=+90
/*+2346:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2347:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2348:MOV*//*4*/memint32[(reg_sp4-57)]=memint32[(reg_sp4-18)];
/*+2349:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-57)];reg_this4=reg_this>>2;
/*+2350:CALL*/regs.push(354);reg_ip=7;
}
/*2351*/
code[354]=function(){
/*+2351:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2352:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2353:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2354:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-57)];reg_this4=reg_this>>2;
/*+2355:CALL*/regs.push(355);reg_ip=12;
}
/*2356*/
code[355]=function(){
/*+2356:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2357:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2358:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2359:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-57)];reg_this4=reg_this>>2;
/*+2360:CALL*/regs.push(356);reg_ip=24;
}
/*2361*/
code[356]=function(){
/*+2361:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2362:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2363:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2364:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-57)];reg_this4=reg_this>>2;
/*+2365:CALL*/regs.push(357);reg_ip=24;
}
/*2366*/
code[357]=function(){
/*+2366:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2367:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2368:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2369:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-57)];reg_this4=reg_this>>2;
/*+2370:CALL*/regs.push(358);reg_ip=24;
}
/*2371*/
code[358]=function(){
/*+2371:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2372:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2373:ILDC*/memint32[reg_sp4-19]=+91
/*+2374:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2375:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2376:MOV*//*4*/memint32[(reg_sp4-56)]=memint32[(reg_sp4-18)];
/*+2377:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-56)];reg_this4=reg_this>>2;
/*+2378:CALL*/regs.push(359);reg_ip=7;
}
/*2379*/
code[359]=function(){
/*+2379:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2380:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2381:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2382:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-56)];reg_this4=reg_this>>2;
/*+2383:CALL*/regs.push(360);reg_ip=12;
}
/*2384*/
code[360]=function(){
/*+2384:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2385:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2386:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2387:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-56)];reg_this4=reg_this>>2;
/*+2388:CALL*/regs.push(361);reg_ip=24;
}
/*2389*/
code[361]=function(){
/*+2389:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2390:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2391:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2392:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-56)];reg_this4=reg_this>>2;
/*+2393:CALL*/regs.push(362);reg_ip=24;
}
/*2394*/
code[362]=function(){
/*+2394:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2395:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2396:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2397:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-56)];reg_this4=reg_this>>2;
/*+2398:CALL*/regs.push(363);reg_ip=24;
}
/*2399*/
code[363]=function(){
/*+2399:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2400:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2401:ILDC*/memint32[reg_sp4-19]=+92
/*+2402:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2403:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2404:MOV*//*4*/memint32[(reg_sp4-55)]=memint32[(reg_sp4-18)];
/*+2405:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-55)];reg_this4=reg_this>>2;
/*+2406:CALL*/regs.push(364);reg_ip=7;
}
/*2407*/
code[364]=function(){
/*+2407:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2408:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2409:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2410:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-55)];reg_this4=reg_this>>2;
/*+2411:CALL*/regs.push(365);reg_ip=12;
}
/*2412*/
code[365]=function(){
/*+2412:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2413:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2414:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2415:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-55)];reg_this4=reg_this>>2;
/*+2416:CALL*/regs.push(366);reg_ip=24;
}
/*2417*/
code[366]=function(){
/*+2417:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2418:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2419:ILDC*/memint32[reg_sp4-19]=+94
/*+2420:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2421:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2422:MOV*//*4*/memint32[(reg_sp4-54)]=memint32[(reg_sp4-18)];
/*+2423:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-54)];reg_this4=reg_this>>2;
/*+2424:CALL*/regs.push(367);reg_ip=7;
}
/*2425*/
code[367]=function(){
/*+2425:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2426:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2427:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2428:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-54)];reg_this4=reg_this>>2;
/*+2429:CALL*/regs.push(368);reg_ip=12;
}
/*2430*/
code[368]=function(){
/*+2430:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2431:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2432:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2433:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-54)];reg_this4=reg_this>>2;
/*+2434:CALL*/regs.push(369);reg_ip=24;
}
/*2435*/
code[369]=function(){
/*+2435:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2436:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2437:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2438:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-54)];reg_this4=reg_this>>2;
/*+2439:CALL*/regs.push(370);reg_ip=24;
}
/*2440*/
code[370]=function(){
/*+2440:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2441:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2442:ILDC*/memint32[reg_sp4-19]=+95
/*+2443:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2444:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2445:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-18)];
/*+2446:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-53)];reg_this4=reg_this>>2;
/*+2447:CALL*/regs.push(371);reg_ip=7;
}
/*2448*/
code[371]=function(){
/*+2448:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2449:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2450:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2451:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-53)];reg_this4=reg_this>>2;
/*+2452:CALL*/regs.push(372);reg_ip=12;
}
/*2453*/
code[372]=function(){
/*+2453:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2454:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2455:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2456:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-53)];reg_this4=reg_this>>2;
/*+2457:CALL*/regs.push(373);reg_ip=24;
}
/*2458*/
code[373]=function(){
/*+2458:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2459:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2460:ILDC*/memint32[reg_sp4-19]=+93
/*+2461:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2462:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2463:MOV*//*4*/memint32[(reg_sp4-52)]=memint32[(reg_sp4-18)];
/*+2464:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-52)];reg_this4=reg_this>>2;
/*+2465:CALL*/regs.push(374);reg_ip=7;
}
/*2466*/
code[374]=function(){
/*+2466:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2467:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2468:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2469:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-52)];reg_this4=reg_this>>2;
/*+2470:CALL*/regs.push(375);reg_ip=12;
}
/*2471*/
code[375]=function(){
/*+2471:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2472:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2473:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2474:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-52)];reg_this4=reg_this>>2;
/*+2475:CALL*/regs.push(376);reg_ip=24;
}
/*2476*/
code[376]=function(){
/*+2476:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2477:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2478:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2479:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-52)];reg_this4=reg_this>>2;
/*+2480:CALL*/regs.push(377);reg_ip=24;
}
/*2481*/
code[377]=function(){
/*+2481:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2482:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2483:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2484:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-52)];reg_this4=reg_this>>2;
/*+2485:CALL*/regs.push(378);reg_ip=24;
}
/*2486*/
code[378]=function(){
/*+2486:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2487:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2488:ILDC*/memint32[reg_sp4-19]=+96
/*+2489:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2490:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2491:MOV*//*4*/memint32[(reg_sp4-51)]=memint32[(reg_sp4-18)];
/*+2492:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-51)];reg_this4=reg_this>>2;
/*+2493:CALL*/regs.push(379);reg_ip=7;
}
/*2494*/
code[379]=function(){
/*+2494:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2495:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2496:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2497:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-51)];reg_this4=reg_this>>2;
/*+2498:CALL*/regs.push(380);reg_ip=12;
}
/*2499*/
code[380]=function(){
/*+2499:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2500:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2501:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2502:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-51)];reg_this4=reg_this>>2;
/*+2503:CALL*/regs.push(381);reg_ip=24;
}
/*2504*/
code[381]=function(){
/*+2504:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2505:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2506:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2507:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-51)];reg_this4=reg_this>>2;
/*+2508:CALL*/regs.push(382);reg_ip=24;
}
/*2509*/
code[382]=function(){
/*+2509:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2510:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2511:ILDC*/memint32[reg_sp4-19]=+97
/*+2512:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2513:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2514:MOV*//*4*/memint32[(reg_sp4-50)]=memint32[(reg_sp4-18)];
/*+2515:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2516:CALL*/regs.push(383);reg_ip=7;
}
/*2517*/
code[383]=function(){
/*+2517:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2518:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2519:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2520:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2521:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2522:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2523:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2524:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2525:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2526:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2527:CALL*/regs.push(384);reg_ip=28;
}
/*2528*/
code[384]=function(){
/*+2528:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2529:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2530:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2531:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2532:CALL*/regs.push(385);reg_ip=24;
}
/*2533*/
code[385]=function(){
/*+2533:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2534:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2535:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2536:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2537:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2538:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2539:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2540:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2541:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2542:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2543:CALL*/regs.push(386);reg_ip=28;
}
/*2544*/
code[386]=function(){
/*+2544:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2545:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2546:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2547:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2548:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2549:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2550:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2551:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2552:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2553:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2554:CALL*/regs.push(387);reg_ip=28;
}
/*2555*/
code[387]=function(){
/*+2555:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2556:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2557:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2558:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2559:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2560:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2561:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2562:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2563:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2564:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-50)];reg_this4=reg_this>>2;
/*+2565:CALL*/regs.push(388);reg_ip=28;
}
/*2566*/
code[388]=function(){
/*+2566:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2567:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2568:ILDC*/memint32[reg_sp4-19]=+98
/*+2569:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2570:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2571:MOV*//*4*/memint32[(reg_sp4-49)]=memint32[(reg_sp4-18)];
/*+2572:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+2573:CALL*/regs.push(389);reg_ip=7;
}
/*2574*/
code[389]=function(){
/*+2574:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2575:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2576:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2577:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+2578:CALL*/regs.push(390);reg_ip=12;
}
/*2579*/
code[390]=function(){
/*+2579:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2580:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2581:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2582:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+2583:CALL*/regs.push(391);reg_ip=24;
}
/*2584*/
code[391]=function(){
/*+2584:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2585:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2586:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2587:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2588:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2589:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2590:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2591:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2592:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2593:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+2594:CALL*/regs.push(392);reg_ip=28;
}
/*2595*/
code[392]=function(){
/*+2595:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2596:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2597:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2598:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2599:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2600:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2601:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2602:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2603:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2604:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+2605:CALL*/regs.push(393);reg_ip=28;
}
/*2606*/
code[393]=function(){
/*+2606:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2607:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2608:ILDC*/memint32[reg_sp4-19]=+99
/*+2609:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2610:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2611:MOV*//*4*/memint32[(reg_sp4-48)]=memint32[(reg_sp4-18)];
/*+2612:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-48)];reg_this4=reg_this>>2;
/*+2613:CALL*/regs.push(394);reg_ip=7;
}
/*2614*/
code[394]=function(){
/*+2614:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2615:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2616:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2617:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2618:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2619:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2620:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2621:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2622:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2623:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-48)];reg_this4=reg_this>>2;
/*+2624:CALL*/regs.push(395);reg_ip=28;
}
/*2625*/
code[395]=function(){
/*+2625:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2626:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2627:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2628:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2629:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2630:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2631:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2632:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2633:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2634:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-48)];reg_this4=reg_this>>2;
/*+2635:CALL*/regs.push(396);reg_ip=28;
}
/*2636*/
code[396]=function(){
/*+2636:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2637:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2638:ILDC*/memint32[reg_sp4-19]=+100
/*+2639:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2640:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2641:MOV*//*4*/memint32[(reg_sp4-47)]=memint32[(reg_sp4-18)];
/*+2642:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-47)];reg_this4=reg_this>>2;
/*+2643:CALL*/regs.push(397);reg_ip=7;
}
/*2644*/
code[397]=function(){
/*+2644:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2645:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2646:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2647:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2648:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2649:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2650:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2651:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2652:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2653:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-47)];reg_this4=reg_this>>2;
/*+2654:CALL*/regs.push(398);reg_ip=28;
}
/*2655*/
code[398]=function(){
/*+2655:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2656:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2657:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2658:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2659:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2660:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2661:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2662:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2663:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2664:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-47)];reg_this4=reg_this>>2;
/*+2665:CALL*/regs.push(399);reg_ip=28;
}
/*2666*/
code[399]=function(){
/*+2666:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2667:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2668:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2669:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-47)];reg_this4=reg_this>>2;
/*+2670:CALL*/regs.push(400);reg_ip=12;
}
/*2671*/
code[400]=function(){
/*+2671:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2672:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2673:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2674:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-47)];reg_this4=reg_this>>2;
/*+2675:CALL*/regs.push(401);reg_ip=24;
}
/*2676*/
code[401]=function(){
/*+2676:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2677:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2678:ILDC*/memint32[reg_sp4-19]=+101
/*+2679:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2680:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2681:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-18)];
/*+2682:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-46)];reg_this4=reg_this>>2;
/*+2683:CALL*/regs.push(402);reg_ip=7;
}
/*2684*/
code[402]=function(){
/*+2684:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2685:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2686:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2687:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2688:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2689:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2690:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2691:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2692:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2693:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-46)];reg_this4=reg_this>>2;
/*+2694:CALL*/regs.push(403);reg_ip=28;
}
/*2695*/
code[403]=function(){
/*+2695:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2696:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2697:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2698:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2699:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2700:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2701:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2702:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2703:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2704:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-46)];reg_this4=reg_this>>2;
/*+2705:CALL*/regs.push(404);reg_ip=28;
}
/*2706*/
code[404]=function(){
/*+2706:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2707:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2708:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2709:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-46)];reg_this4=reg_this>>2;
/*+2710:CALL*/regs.push(405);reg_ip=12;
}
/*2711*/
code[405]=function(){
/*+2711:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2712:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2713:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2714:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-46)];reg_this4=reg_this>>2;
/*+2715:CALL*/regs.push(406);reg_ip=24;
}
/*2716*/
code[406]=function(){
/*+2716:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2717:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2718:ILDC*/memint32[reg_sp4-19]=+102
/*+2719:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2720:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2721:MOV*//*4*/memint32[(reg_sp4-45)]=memint32[(reg_sp4-18)];
/*+2722:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2723:CALL*/regs.push(407);reg_ip=7;
}
/*2724*/
code[407]=function(){
/*+2724:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2725:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2726:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2727:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2728:CALL*/regs.push(408);reg_ip=12;
}
/*2729*/
code[408]=function(){
/*+2729:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2730:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2731:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2732:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2733:CALL*/regs.push(409);reg_ip=24;
}
/*2734*/
code[409]=function(){
/*+2734:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2735:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2736:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2737:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+9.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2738:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2739:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2740:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2741:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2742:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2743:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2744:CALL*/regs.push(410);reg_ip=28;
}
/*2745*/
code[410]=function(){
/*+2745:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2746:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2747:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2748:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2749:CALL*/regs.push(411);reg_ip=12;
}
/*2750*/
code[411]=function(){
/*+2750:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2751:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2752:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2753:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-45)];reg_this4=reg_this>>2;
/*+2754:CALL*/regs.push(412);reg_ip=24;
}
/*2755*/
code[412]=function(){
/*+2755:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2756:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2757:ILDC*/memint32[reg_sp4-19]=+103
/*+2758:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2759:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2760:MOV*//*4*/memint32[(reg_sp4-44)]=memint32[(reg_sp4-18)];
/*+2761:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2762:CALL*/regs.push(413);reg_ip=7;
}
/*2763*/
code[413]=function(){
/*+2763:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2764:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2765:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2766:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2767:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2768:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2769:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2770:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2771:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2772:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2773:CALL*/regs.push(414);reg_ip=28;
}
/*2774*/
code[414]=function(){
/*+2774:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2775:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2776:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2777:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2778:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2779:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2780:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2781:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2782:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2783:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2784:CALL*/regs.push(415);reg_ip=28;
}
/*2785*/
code[415]=function(){
/*+2785:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2786:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2787:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2788:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2789:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2790:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2791:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2792:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2793:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2794:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2795:CALL*/regs.push(416);reg_ip=28;
}
/*2796*/
code[416]=function(){
/*+2796:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2797:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2798:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2799:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2800:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2801:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2802:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2803:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2804:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2805:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2806:CALL*/regs.push(417);reg_ip=28;
}
/*2807*/
code[417]=function(){
/*+2807:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2808:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2809:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2810:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2811:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2812:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2813:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2814:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2815:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2816:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2817:CALL*/regs.push(418);reg_ip=28;
}
/*2818*/
code[418]=function(){
/*+2818:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2819:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2820:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2821:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2822:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2823:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2824:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2825:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2826:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2827:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-44)];reg_this4=reg_this>>2;
/*+2828:CALL*/regs.push(419);reg_ip=28;
}
/*2829*/
code[419]=function(){
/*+2829:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2830:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2831:ILDC*/memint32[reg_sp4-19]=+104
/*+2832:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2833:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2834:MOV*//*4*/memint32[(reg_sp4-43)]=memint32[(reg_sp4-18)];
/*+2835:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-43)];reg_this4=reg_this>>2;
/*+2836:CALL*/regs.push(420);reg_ip=7;
}
/*2837*/
code[420]=function(){
/*+2837:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2838:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2839:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2840:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-43)];reg_this4=reg_this>>2;
/*+2841:CALL*/regs.push(421);reg_ip=12;
}
/*2842*/
code[421]=function(){
/*+2842:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2843:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2844:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2845:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-43)];reg_this4=reg_this>>2;
/*+2846:CALL*/regs.push(422);reg_ip=24;
}
/*2847*/
code[422]=function(){
/*+2847:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2848:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2849:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2850:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2851:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2852:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2853:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2854:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2855:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2856:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-43)];reg_this4=reg_this>>2;
/*+2857:CALL*/regs.push(423);reg_ip=28;
}
/*2858*/
code[423]=function(){
/*+2858:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2859:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2860:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2861:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-43)];reg_this4=reg_this>>2;
/*+2862:CALL*/regs.push(424);reg_ip=24;
}
/*2863*/
code[424]=function(){
/*+2863:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2864:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2865:ILDC*/memint32[reg_sp4-19]=+105
/*+2866:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2867:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2868:MOV*//*4*/memint32[(reg_sp4-42)]=memint32[(reg_sp4-18)];
/*+2869:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2870:CALL*/regs.push(425);reg_ip=7;
}
/*2871*/
code[425]=function(){
/*+2871:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2872:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2873:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2874:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2875:CALL*/regs.push(426);reg_ip=12;
}
/*2876*/
code[426]=function(){
/*+2876:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2877:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2878:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2879:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2880:CALL*/regs.push(427);reg_ip=24;
}
/*2881*/
code[427]=function(){
/*+2881:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2882:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2883:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2884:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2885:CALL*/regs.push(428);reg_ip=12;
}
/*2886*/
code[428]=function(){
/*+2886:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2887:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2888:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2889:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2890:CALL*/regs.push(429);reg_ip=24;
}
/*2891*/
code[429]=function(){
/*+2891:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2892:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2893:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2894:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2895:CALL*/regs.push(430);reg_ip=12;
}
/*2896*/
code[430]=function(){
/*+2896:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2897:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2898:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2899:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2900:CALL*/regs.push(431);reg_ip=24;
}
/*2901*/
code[431]=function(){
/*+2901:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2902:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2903:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2904:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2905:CALL*/regs.push(432);reg_ip=12;
}
/*2906*/
code[432]=function(){
/*+2906:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2907:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2908:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2909:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-42)];reg_this4=reg_this>>2;
/*+2910:CALL*/regs.push(433);reg_ip=24;
}
/*2911*/
code[433]=function(){
/*+2911:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2912:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2913:ILDC*/memint32[reg_sp4-19]=+106
/*+2914:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2915:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2916:MOV*//*4*/memint32[(reg_sp4-41)]=memint32[(reg_sp4-18)];
/*+2917:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2918:CALL*/regs.push(434);reg_ip=7;
}
/*2919*/
code[434]=function(){
/*+2919:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2920:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2921:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2922:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2923:CALL*/regs.push(435);reg_ip=12;
}
/*2924*/
code[435]=function(){
/*+2924:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2925:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2926:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2927:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2928:CALL*/regs.push(436);reg_ip=24;
}
/*2929*/
code[436]=function(){
/*+2929:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2930:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2931:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2932:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2933:CALL*/regs.push(437);reg_ip=12;
}
/*2934*/
code[437]=function(){
/*+2934:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2935:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2936:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2937:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2938:CALL*/regs.push(438);reg_ip=24;
}
/*2939*/
code[438]=function(){
/*+2939:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2940:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2941:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2942:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2943:CALL*/regs.push(439);reg_ip=12;
}
/*2944*/
code[439]=function(){
/*+2944:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2945:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2946:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2947:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2948:CALL*/regs.push(440);reg_ip=24;
}
/*2949*/
code[440]=function(){
/*+2949:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2950:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2951:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2952:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2953:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2954:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2955:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2956:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2957:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2958:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-41)];reg_this4=reg_this>>2;
/*+2959:CALL*/regs.push(441);reg_ip=28;
}
/*2960*/
code[441]=function(){
/*+2960:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2961:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+2962:ILDC*/memint32[reg_sp4-19]=+108
/*+2963:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+2964:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+2965:MOV*//*4*/memint32[(reg_sp4-40)]=memint32[(reg_sp4-18)];
/*+2966:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2967:CALL*/regs.push(442);reg_ip=7;
}
/*2968*/
code[442]=function(){
/*+2968:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2969:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2970:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2971:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2972:CALL*/regs.push(443);reg_ip=12;
}
/*2973*/
code[443]=function(){
/*+2973:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2974:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2975:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2976:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2977:CALL*/regs.push(444);reg_ip=24;
}
/*2978*/
code[444]=function(){
/*+2978:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2979:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2980:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2981:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2982:CALL*/regs.push(445);reg_ip=12;
}
/*2983*/
code[445]=function(){
/*+2983:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2984:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2985:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2986:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2987:CALL*/regs.push(446);reg_ip=24;
}
/*2988*/
code[446]=function(){
/*+2988:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2989:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2990:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2991:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2992:CALL*/regs.push(447);reg_ip=12;
}
/*2993*/
code[447]=function(){
/*+2993:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2994:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2995:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2996:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-40)];reg_this4=reg_this>>2;
/*+2997:CALL*/regs.push(448);reg_ip=24;
}
/*2998*/
code[448]=function(){
/*+2998:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+2999:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3000:ILDC*/memint32[reg_sp4-19]=+107
/*+3001:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3002:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3003:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_sp4-18)];
/*+3004:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3005:CALL*/regs.push(449);reg_ip=7;
}
/*3006*/
code[449]=function(){
/*+3006:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3007:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3008:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3009:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3010:CALL*/regs.push(450);reg_ip=12;
}
/*3011*/
code[450]=function(){
/*+3011:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3012:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3013:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3014:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3015:CALL*/regs.push(451);reg_ip=24;
}
/*3016*/
code[451]=function(){
/*+3016:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3017:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3018:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3019:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3020:CALL*/regs.push(452);reg_ip=12;
}
/*3021*/
code[452]=function(){
/*+3021:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3022:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3023:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3024:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3025:CALL*/regs.push(453);reg_ip=20;
}
/*3026*/
code[453]=function(){
/*+3026:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3027:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3028:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3029:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3030:CALL*/regs.push(454);reg_ip=12;
}
/*3031*/
code[454]=function(){
/*+3031:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3032:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3033:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3034:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-39)];reg_this4=reg_this>>2;
/*+3035:CALL*/regs.push(455);reg_ip=20;
}
/*3036*/
code[455]=function(){
/*+3036:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3037:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3038:ILDC*/memint32[reg_sp4-19]=+109
/*+3039:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3040:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3041:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-18)];
/*+3042:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3043:CALL*/regs.push(456);reg_ip=7;
}
/*3044*/
code[456]=function(){
/*+3044:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3045:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3046:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3047:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3048:CALL*/regs.push(457);reg_ip=12;
}
/*3049*/
code[457]=function(){
/*+3049:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3050:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3051:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3052:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3053:CALL*/regs.push(458);reg_ip=24;
}
/*3054*/
code[458]=function(){
/*+3054:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3055:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3056:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3057:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3058:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3059:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3060:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3061:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3062:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3063:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3064:CALL*/regs.push(459);reg_ip=28;
}
/*3065*/
code[459]=function(){
/*+3065:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3066:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3067:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3068:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3069:CALL*/regs.push(460);reg_ip=24;
}
/*3070*/
code[460]=function(){
/*+3070:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3071:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3072:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3073:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3074:CALL*/regs.push(461);reg_ip=12;
}
/*3075*/
code[461]=function(){
/*+3075:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3076:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3077:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3078:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3079:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3080:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3081:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3082:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3083:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3084:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3085:CALL*/regs.push(462);reg_ip=28;
}
/*3086*/
code[462]=function(){
/*+3086:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3087:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3088:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3089:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-38)];reg_this4=reg_this>>2;
/*+3090:CALL*/regs.push(463);reg_ip=24;
}
/*3091*/
code[463]=function(){
/*+3091:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3092:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3093:ILDC*/memint32[reg_sp4-19]=+110
/*+3094:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3095:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3096:MOV*//*4*/memint32[(reg_sp4-37)]=memint32[(reg_sp4-18)];
/*+3097:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-37)];reg_this4=reg_this>>2;
/*+3098:CALL*/regs.push(464);reg_ip=7;
}
/*3099*/
code[464]=function(){
/*+3099:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3100:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3101:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3102:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-37)];reg_this4=reg_this>>2;
/*+3103:CALL*/regs.push(465);reg_ip=12;
}
/*3104*/
code[465]=function(){
/*+3104:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3105:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3106:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3107:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-37)];reg_this4=reg_this>>2;
/*+3108:CALL*/regs.push(466);reg_ip=24;
}
/*3109*/
code[466]=function(){
/*+3109:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3110:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3111:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3112:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3113:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3114:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3115:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3116:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3117:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3118:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-37)];reg_this4=reg_this>>2;
/*+3119:CALL*/regs.push(467);reg_ip=28;
}
/*3120*/
code[467]=function(){
/*+3120:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3121:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3122:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3123:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-37)];reg_this4=reg_this>>2;
/*+3124:CALL*/regs.push(468);reg_ip=24;
}
/*3125*/
code[468]=function(){
/*+3125:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3126:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3127:ILDC*/memint32[reg_sp4-19]=+111
/*+3128:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3129:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3130:MOV*//*4*/memint32[(reg_sp4-36)]=memint32[(reg_sp4-18)];
/*+3131:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-36)];reg_this4=reg_this>>2;
/*+3132:CALL*/regs.push(469);reg_ip=7;
}
/*3133*/
code[469]=function(){
/*+3133:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3134:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3135:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3136:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3137:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3138:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3139:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3140:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3141:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3142:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-36)];reg_this4=reg_this>>2;
/*+3143:CALL*/regs.push(470);reg_ip=28;
}
/*3144*/
code[470]=function(){
/*+3144:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3145:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3146:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3147:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3148:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3149:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3150:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3151:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3152:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3153:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-36)];reg_this4=reg_this>>2;
/*+3154:CALL*/regs.push(471);reg_ip=28;
}
/*3155*/
code[471]=function(){
/*+3155:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3156:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3157:ILDC*/memint32[reg_sp4-19]=+112
/*+3158:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3159:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3160:MOV*//*4*/memint32[(reg_sp4-35)]=memint32[(reg_sp4-18)];
/*+3161:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-35)];reg_this4=reg_this>>2;
/*+3162:CALL*/regs.push(472);reg_ip=7;
}
/*3163*/
code[472]=function(){
/*+3163:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3164:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3165:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3166:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-35)];reg_this4=reg_this>>2;
/*+3167:CALL*/regs.push(473);reg_ip=12;
}
/*3168*/
code[473]=function(){
/*+3168:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3169:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3170:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3171:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-35)];reg_this4=reg_this>>2;
/*+3172:CALL*/regs.push(474);reg_ip=24;
}
/*3173*/
code[474]=function(){
/*+3173:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3174:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3175:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3176:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3177:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3178:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3179:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3180:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3181:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3182:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-35)];reg_this4=reg_this>>2;
/*+3183:CALL*/regs.push(475);reg_ip=28;
}
/*3184*/
code[475]=function(){
/*+3184:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3185:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3186:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3187:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3188:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3189:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3190:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3191:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3192:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3193:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-35)];reg_this4=reg_this>>2;
/*+3194:CALL*/regs.push(476);reg_ip=28;
}
/*3195*/
code[476]=function(){
/*+3195:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3196:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3197:ILDC*/memint32[reg_sp4-19]=+113
/*+3198:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3199:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3200:MOV*//*4*/memint32[(reg_sp4-34)]=memint32[(reg_sp4-18)];
/*+3201:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-34)];reg_this4=reg_this>>2;
/*+3202:CALL*/regs.push(477);reg_ip=7;
}
/*3203*/
code[477]=function(){
/*+3203:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3204:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3205:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3206:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-34)];reg_this4=reg_this>>2;
/*+3207:CALL*/regs.push(478);reg_ip=12;
}
/*3208*/
code[478]=function(){
/*+3208:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3209:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3210:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3211:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-34)];reg_this4=reg_this>>2;
/*+3212:CALL*/regs.push(479);reg_ip=24;
}
/*3213*/
code[479]=function(){
/*+3213:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3214:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3215:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3216:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3217:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3218:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3219:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3220:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3221:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3222:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-34)];reg_this4=reg_this>>2;
/*+3223:CALL*/regs.push(480);reg_ip=28;
}
/*3224*/
code[480]=function(){
/*+3224:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3225:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3226:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3227:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3228:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3229:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3230:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3231:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3232:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3233:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-34)];reg_this4=reg_this>>2;
/*+3234:CALL*/regs.push(481);reg_ip=28;
}
/*3235*/
code[481]=function(){
/*+3235:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3236:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3237:ILDC*/memint32[reg_sp4-19]=+114
/*+3238:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3239:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3240:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-18)];
/*+3241:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-33)];reg_this4=reg_this>>2;
/*+3242:CALL*/regs.push(482);reg_ip=7;
}
/*3243*/
code[482]=function(){
/*+3243:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3244:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3245:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3246:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-33)];reg_this4=reg_this>>2;
/*+3247:CALL*/regs.push(483);reg_ip=12;
}
/*3248*/
code[483]=function(){
/*+3248:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3249:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3250:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3251:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-33)];reg_this4=reg_this>>2;
/*+3252:CALL*/regs.push(484);reg_ip=24;
}
/*3253*/
code[484]=function(){
/*+3253:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3254:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3255:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3256:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3257:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3258:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3259:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3260:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3261:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3262:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-33)];reg_this4=reg_this>>2;
/*+3263:CALL*/regs.push(485);reg_ip=28;
}
/*3264*/
code[485]=function(){
/*+3264:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3265:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3266:ILDC*/memint32[reg_sp4-19]=+115
/*+3267:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3268:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3269:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-18)];
/*+3270:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-32)];reg_this4=reg_this>>2;
/*+3271:CALL*/regs.push(486);reg_ip=7;
}
/*3272*/
code[486]=function(){
/*+3272:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3273:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3274:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3275:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3276:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3277:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+6.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3278:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3279:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3280:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3281:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-32)];reg_this4=reg_this>>2;
/*+3282:CALL*/regs.push(487);reg_ip=28;
}
/*3283*/
code[487]=function(){
/*+3283:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3284:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3285:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3286:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3287:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3288:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3289:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3290:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3291:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3292:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-32)];reg_this4=reg_this>>2;
/*+3293:CALL*/regs.push(488);reg_ip=28;
}
/*3294*/
code[488]=function(){
/*+3294:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3295:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3296:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3297:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3298:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3299:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3300:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3301:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3302:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3303:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-32)];reg_this4=reg_this>>2;
/*+3304:CALL*/regs.push(489);reg_ip=28;
}
/*3305*/
code[489]=function(){
/*+3305:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3306:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3307:ILDC*/memint32[reg_sp4-19]=+116
/*+3308:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3309:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3310:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-18)];
/*+3311:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3312:CALL*/regs.push(490);reg_ip=7;
}
/*3313*/
code[490]=function(){
/*+3313:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3314:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3315:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3316:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3317:CALL*/regs.push(491);reg_ip=12;
}
/*3318*/
code[491]=function(){
/*+3318:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3319:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3320:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3321:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3322:CALL*/regs.push(492);reg_ip=24;
}
/*3323*/
code[492]=function(){
/*+3323:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3324:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3325:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3326:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3327:CALL*/regs.push(493);reg_ip=12;
}
/*3328*/
code[493]=function(){
/*+3328:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3329:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3330:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3331:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3332:CALL*/regs.push(494);reg_ip=24;
}
/*3333*/
code[494]=function(){
/*+3333:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3334:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3335:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3336:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3337:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+3.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3338:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=-0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3339:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3340:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3341:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3342:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-31)];reg_this4=reg_this>>2;
/*+3343:CALL*/regs.push(495);reg_ip=28;
}
/*3344*/
code[495]=function(){
/*+3344:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3345:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3346:ILDC*/memint32[reg_sp4-19]=+117
/*+3347:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3348:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3349:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-18)];
/*+3350:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-30)];reg_this4=reg_this>>2;
/*+3351:CALL*/regs.push(496);reg_ip=7;
}
/*3352*/
code[496]=function(){
/*+3352:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3353:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3354:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3355:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-30)];reg_this4=reg_this>>2;
/*+3356:CALL*/regs.push(497);reg_ip=12;
}
/*3357*/
code[497]=function(){
/*+3357:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3358:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3359:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3360:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-30)];reg_this4=reg_this>>2;
/*+3361:CALL*/regs.push(498);reg_ip=24;
}
/*3362*/
code[498]=function(){
/*+3362:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3363:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3364:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3365:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3366:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3367:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3368:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3369:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3370:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3371:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-30)];reg_this4=reg_this>>2;
/*+3372:CALL*/regs.push(499);reg_ip=28;
}
/*3373*/
code[499]=function(){
/*+3373:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3374:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3375:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3376:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-30)];reg_this4=reg_this>>2;
/*+3377:CALL*/regs.push(500);reg_ip=24;
}
/*3378*/
code[500]=function(){
/*+3378:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3379:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3380:ILDC*/memint32[reg_sp4-19]=+118
/*+3381:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3382:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3383:MOV*//*4*/memint32[(reg_sp4-29)]=memint32[(reg_sp4-18)];
/*+3384:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-29)];reg_this4=reg_this>>2;
/*+3385:CALL*/regs.push(501);reg_ip=7;
}
/*3386*/
code[501]=function(){
/*+3386:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3387:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3388:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3389:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-29)];reg_this4=reg_this>>2;
/*+3390:CALL*/regs.push(502);reg_ip=12;
}
/*3391*/
code[502]=function(){
/*+3391:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3392:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3393:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3394:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-29)];reg_this4=reg_this>>2;
/*+3395:CALL*/regs.push(503);reg_ip=24;
}
/*3396*/
code[503]=function(){
/*+3396:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3397:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3398:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3399:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-29)];reg_this4=reg_this>>2;
/*+3400:CALL*/regs.push(504);reg_ip=24;
}
/*3401*/
code[504]=function(){
/*+3401:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3402:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3403:ILDC*/memint32[reg_sp4-19]=+119
/*+3404:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3405:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3406:MOV*//*4*/memint32[(reg_sp4-28)]=memint32[(reg_sp4-18)];
/*+3407:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3408:CALL*/regs.push(505);reg_ip=7;
}
/*3409*/
code[505]=function(){
/*+3409:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3410:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3411:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3412:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3413:CALL*/regs.push(506);reg_ip=12;
}
/*3414*/
code[506]=function(){
/*+3414:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3415:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3416:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3417:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3418:CALL*/regs.push(507);reg_ip=24;
}
/*3419*/
code[507]=function(){
/*+3419:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3420:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3421:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3422:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3423:CALL*/regs.push(508);reg_ip=24;
}
/*3424*/
code[508]=function(){
/*+3424:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3425:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3426:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3427:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3428:CALL*/regs.push(509);reg_ip=24;
}
/*3429*/
code[509]=function(){
/*+3429:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3430:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3431:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3432:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+3433:CALL*/regs.push(510);reg_ip=24;
}
/*3434*/
code[510]=function(){
/*+3434:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3435:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3436:ILDC*/memint32[reg_sp4-19]=+120
/*+3437:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3438:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3439:MOV*//*4*/memint32[(reg_sp4-27)]=memint32[(reg_sp4-18)];
/*+3440:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-27)];reg_this4=reg_this>>2;
/*+3441:CALL*/regs.push(511);reg_ip=7;
}
/*3442*/
code[511]=function(){
/*+3442:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3443:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3444:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3445:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-27)];reg_this4=reg_this>>2;
/*+3446:CALL*/regs.push(512);reg_ip=12;
}
/*3447*/
code[512]=function(){
/*+3447:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3448:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3449:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3450:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-27)];reg_this4=reg_this>>2;
/*+3451:CALL*/regs.push(513);reg_ip=24;
}
/*3452*/
code[513]=function(){
/*+3452:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3453:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3454:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3455:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-27)];reg_this4=reg_this>>2;
/*+3456:CALL*/regs.push(514);reg_ip=12;
}
/*3457*/
code[514]=function(){
/*+3457:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3458:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3459:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3460:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-27)];reg_this4=reg_this>>2;
/*+3461:CALL*/regs.push(515);reg_ip=24;
}
/*3462*/
code[515]=function(){
/*+3462:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3463:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3464:ILDC*/memint32[reg_sp4-19]=+121
/*+3465:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3466:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3467:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-18)];
/*+3468:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+3469:CALL*/regs.push(516);reg_ip=7;
}
/*3470*/
code[516]=function(){
/*+3470:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3471:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3472:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3473:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+3474:CALL*/regs.push(517);reg_ip=12;
}
/*3475*/
code[517]=function(){
/*+3475:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3476:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3477:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3478:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+3479:CALL*/regs.push(518);reg_ip=24;
}
/*3480*/
code[518]=function(){
/*+3480:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3481:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3482:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3483:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+3484:CALL*/regs.push(519);reg_ip=12;
}
/*3485*/
code[519]=function(){
/*+3485:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3486:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3487:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3488:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+3489:CALL*/regs.push(520);reg_ip=24;
}
/*3490*/
code[520]=function(){
/*+3490:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3491:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3492:ILDC*/memint32[reg_sp4-19]=+122
/*+3493:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3494:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3495:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-18)];
/*+3496:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+3497:CALL*/regs.push(521);reg_ip=7;
}
/*3498*/
code[521]=function(){
/*+3498:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3499:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3500:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3501:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+3502:CALL*/regs.push(522);reg_ip=12;
}
/*3503*/
code[522]=function(){
/*+3503:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3504:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3505:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3506:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+3507:CALL*/regs.push(523);reg_ip=24;
}
/*3508*/
code[523]=function(){
/*+3508:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3509:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3510:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3511:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+3512:CALL*/regs.push(524);reg_ip=24;
}
/*3513*/
code[524]=function(){
/*+3513:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3514:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3515:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3516:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+3517:CALL*/regs.push(525);reg_ip=24;
}
/*3518*/
code[525]=function(){
/*+3518:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3519:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3520:ILDC*/memint32[reg_sp4-19]=+123
/*+3521:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3522:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3523:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-18)];
/*+3524:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-24)];reg_this4=reg_this>>2;
/*+3525:CALL*/regs.push(526);reg_ip=7;
}
/*3526*/
code[526]=function(){
/*+3526:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3527:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3528:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3529:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3530:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3531:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3532:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3533:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3534:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3535:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-24)];reg_this4=reg_this>>2;
/*+3536:CALL*/regs.push(527);reg_ip=28;
}
/*3537*/
code[527]=function(){
/*+3537:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3538:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3539:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3540:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3541:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3542:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3543:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3544:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3545:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3546:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-24)];reg_this4=reg_this>>2;
/*+3547:CALL*/regs.push(528);reg_ip=28;
}
/*3548*/
code[528]=function(){
/*+3548:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3549:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3550:ILDC*/memint32[reg_sp4-19]=+124
/*+3551:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3552:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3553:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-18)];
/*+3554:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-23)];reg_this4=reg_this>>2;
/*+3555:CALL*/regs.push(529);reg_ip=7;
}
/*3556*/
code[529]=function(){
/*+3556:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3557:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3558:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3559:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-23)];reg_this4=reg_this>>2;
/*+3560:CALL*/regs.push(530);reg_ip=12;
}
/*3561*/
code[530]=function(){
/*+3561:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3562:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3563:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3564:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-23)];reg_this4=reg_this>>2;
/*+3565:CALL*/regs.push(531);reg_ip=24;
}
/*3566*/
code[531]=function(){
/*+3566:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3567:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3568:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3569:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-23)];reg_this4=reg_this>>2;
/*+3570:CALL*/regs.push(532);reg_ip=12;
}
/*3571*/
code[532]=function(){
/*+3571:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3572:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3573:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3574:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-23)];reg_this4=reg_this>>2;
/*+3575:CALL*/regs.push(533);reg_ip=24;
}
/*3576*/
code[533]=function(){
/*+3576:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3577:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3578:ILDC*/memint32[reg_sp4-19]=+125
/*+3579:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3580:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3581:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-18)];
/*+3582:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-22)];reg_this4=reg_this>>2;
/*+3583:CALL*/regs.push(534);reg_ip=7;
}
/*3584*/
code[534]=function(){
/*+3584:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3585:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3586:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3587:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3588:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3589:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3590:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3591:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3592:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3593:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-22)];reg_this4=reg_this>>2;
/*+3594:CALL*/regs.push(535);reg_ip=28;
}
/*3595*/
code[535]=function(){
/*+3595:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3596:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3597:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3598:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3599:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3600:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3601:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3602:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+9.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3603:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3604:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-22)];reg_this4=reg_this>>2;
/*+3605:CALL*/regs.push(536);reg_ip=28;
}
/*3606*/
code[536]=function(){
/*+3606:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3607:OFFS*/memint32[reg_sp4-20]=memint32[+52]+0
/*+3608:ILDC*/memint32[reg_sp4-19]=+126
/*+3609:LEA*/memint32[reg_sp4-18]=memint32[(reg_sp4-20)]
/*+3610:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*1156
/*+3611:MOV*//*4*/memint32[(reg_sp4-21)]=memint32[(reg_sp4-18)];
/*+3612:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-21)];reg_this4=reg_this>>2;
/*+3613:CALL*/regs.push(537);reg_ip=7;
}
/*3614*/
code[537]=function(){
/*+3614:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3615:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3616:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3617:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3618:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3619:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3620:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3621:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3622:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3623:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-21)];reg_this4=reg_this>>2;
/*+3624:CALL*/regs.push(538);reg_ip=28;
}
/*3625*/
code[538]=function(){
/*+3625:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3626:ADDSP*/reg_sp+=-468;reg_sp4=reg_sp>>2;
/*+3627:RET*/reg_ip=regs.pop();
}
/*3628*/
code[539]=function(){
/*+3628:ADDSP*/reg_sp+=+232;reg_sp4=reg_sp>>2;
/*+3629:OFFS*/memint32[reg_sp4-54]=memint32[+52]+0
/*+3630:LEA*/memint32[reg_sp4-53]=memint32[(reg_sp4-54)]
/*+3631:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-59]*1156
/*+3632:MOV*//*4*/memint32[(reg_sp4-57)]=memint32[(reg_sp4-53)];
/*+3633:ILDC*/memint32[reg_sp4-56]=+0;reg_ip=540;
}
/*3634*/
code[540]=function(){
/*+3634:ILDC*/memint32[reg_sp4-54]=+16
/*+3635:LS*/memint32[reg_sp4-53]=memint32[reg_sp4-56] <memint32[reg_sp4-54]
/*+3636:JMPZ*/if(memint32[reg_sp4-53]==0){reg_ip=554;}else{reg_ip=541;}
}
/*3637*/
code[541]=function(){
/*+3637:OFFS*/memint32[reg_sp4-54]=memint32[reg_sp4-57]+4
/*+3638:LEA*/memint32[reg_sp4-53]=memint32[(reg_sp4-54)]
/*+3639:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-56]*72
/*+3640:OFFS*/memint32[reg_sp4-51]=memint32[reg_sp4-53]+0
/*+3641:ILDC*/memint32[reg_sp4-50]=+0
/*+3642:LEA*/memint32[reg_sp4-49]=memint32[(reg_sp4-51)]
/*+3643:IDX*/memint32[reg_sp4-49]=memint32[reg_sp4-49]+memint32[reg_sp4-50]*8
/*+3644:MOV*//*4*/memint32[(reg_sp4-47)]=memint32[(reg_sp4-49)];
/*+3645:MOV*//*4*/memint32[(reg_sp4-55)]=memint32[(reg_sp4-47)];
/*+3646:ILDC*/memint32[reg_sp4-54]=+0
/*+3647:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3648:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3649:ILDC*/memint32[reg_sp4-51]=+0
/*+3650:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3651:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3652:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=543;}else{reg_ip=542;}
}
/*3653*/
code[542]=function(){
/*+3653:JMP*/reg_ip=554;
}
/*3654*/
code[543]=function(){
/*+3654:ILDC*/memint32[reg_sp4-54]=+0
/*+3655:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3656:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3657:ILDC*/memint32[reg_sp4-51]=+1
/*+3658:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3659:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3660:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=545;}else{reg_ip=544;}
}
/*3661*/
code[544]=function(){
/*+3661:ILDC*/memint32[reg_sp4-54]=+1
/*+3662:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3663:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3664:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3665:FADD*/{let addr=(reg_sp4-49);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-51);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3666:ILDC*/memint32[reg_sp4-47]=+2
/*+3667:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-55)];
/*+3668:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-47]*8
/*+3669:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3670:FSUB*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3671:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3672:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-49);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3673:NCALL*/SC_M();
/*+3674:JMP*/reg_ip=553;
}
/*3675*/
code[545]=function(){
/*+3675:ILDC*/memint32[reg_sp4-54]=+0
/*+3676:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3677:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3678:ILDC*/memint32[reg_sp4-51]=+2
/*+3679:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3680:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3681:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=547;}else{reg_ip=546;}
}
/*3682*/
code[546]=function(){
/*+3682:ILDC*/memint32[reg_sp4-54]=+1
/*+3683:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3684:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3685:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3686:ILDC*/memint32[reg_sp4-49]=+2
/*+3687:MOV*//*4*/memint32[(reg_sp4-48)]=memint32[(reg_sp4-55)];
/*+3688:IDX*/memint32[reg_sp4-48]=memint32[reg_sp4-48]+memint32[reg_sp4-49]*8
/*+3689:FNEG*/{let addr=(reg_sp4-46);cvtflt64[0]=-GetFloat(memint32[(reg_sp4-48)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3690:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3691:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-44);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3692:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-51);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3693:NCALL*/SC_m();
/*+3694:JMP*/reg_ip=553;
}
/*3695*/
code[547]=function(){
/*+3695:ILDC*/memint32[reg_sp4-54]=+0
/*+3696:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3697:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3698:ILDC*/memint32[reg_sp4-51]=+3
/*+3699:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3700:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3701:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=549;}else{reg_ip=548;}
}
/*3702*/
code[548]=function(){
/*+3702:ILDC*/memint32[reg_sp4-54]=+1
/*+3703:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3704:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3705:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3706:FADD*/{let addr=(reg_sp4-49);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-51);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3707:ILDC*/memint32[reg_sp4-47]=+2
/*+3708:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-55)];
/*+3709:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-47]*8
/*+3710:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3711:FSUB*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3712:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3713:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-49);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3714:NCALL*/SC_L();
/*+3715:JMP*/reg_ip=553;
}
/*3716*/
code[549]=function(){
/*+3716:ILDC*/memint32[reg_sp4-54]=+0
/*+3717:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3718:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3719:ILDC*/memint32[reg_sp4-51]=+4
/*+3720:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3721:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3722:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=551;}else{reg_ip=550;}
}
/*3723*/
code[550]=function(){
/*+3723:ILDC*/memint32[reg_sp4-54]=+1
/*+3724:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3725:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3726:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3727:ILDC*/memint32[reg_sp4-49]=+2
/*+3728:MOV*//*4*/memint32[(reg_sp4-48)]=memint32[(reg_sp4-55)];
/*+3729:IDX*/memint32[reg_sp4-48]=memint32[reg_sp4-48]+memint32[reg_sp4-49]*8
/*+3730:FNEG*/{let addr=(reg_sp4-46);cvtflt64[0]=-GetFloat(memint32[(reg_sp4-48)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3731:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3732:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-44);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3733:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-51);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3734:NCALL*/SC_l();
/*+3735:JMP*/reg_ip=553;
}
/*3736*/
code[551]=function(){
/*+3736:ILDC*/memint32[reg_sp4-54]=+0
/*+3737:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3738:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3739:ILDC*/memint32[reg_sp4-51]=+5
/*+3740:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3741:FEQ*/memint32[reg_sp4-48]=GetFloat(memint32[(reg_sp4-53)])==GetFloat4(reg_sp4-50)
/*+3742:JMPZ*/if(memint32[reg_sp4-48]==0){reg_ip=553;}else{reg_ip=552;}
}
/*3743*/
code[552]=function(){
/*+3743:ILDC*/memint32[reg_sp4-54]=+1
/*+3744:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3745:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3746:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3747:FADD*/{let addr=(reg_sp4-49);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-51);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3748:ILDC*/memint32[reg_sp4-47]=+2
/*+3749:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-55)];
/*+3750:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-47]*8
/*+3751:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3752:FSUB*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3753:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3754:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-49);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3755:NCALL*/SC_M();
/*+3756:ILDC*/memint32[reg_sp4-54]=+3
/*+3757:MOV*//*4*/memint32[(reg_sp4-53)]=memint32[(reg_sp4-55)];
/*+3758:IDX*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+memint32[reg_sp4-54]*8
/*+3759:FMUL*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat(memint32[(reg_sp4-53)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3760:FADD*/{let addr=(reg_sp4-49);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-51);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3761:ILDC*/memint32[reg_sp4-47]=+4
/*+3762:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-55)];
/*+3763:IDX*/memint32[reg_sp4-46]=memint32[reg_sp4-46]+memint32[reg_sp4-47]*8
/*+3764:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat(memint32[(reg_sp4-46)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3765:FSUB*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3766:ILDC*/memint32[reg_sp4-40]=+5
/*+3767:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_sp4-55)];
/*+3768:IDX*/memint32[reg_sp4-39]=memint32[reg_sp4-39]+memint32[reg_sp4-40]*8
/*+3769:FMUL*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat(memint32[(reg_sp4-39)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3770:FADD*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3771:ILDC*/memint32[reg_sp4-33]=+6
/*+3772:MOV*//*4*/memint32[(reg_sp4-32)]=memint32[(reg_sp4-55)];
/*+3773:IDX*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+memint32[reg_sp4-33]*8
/*+3774:FMUL*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat(memint32[(reg_sp4-32)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3775:FSUB*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3776:ILDC*/memint32[reg_sp4-26]=+7
/*+3777:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-55)];
/*+3778:IDX*/memint32[reg_sp4-25]=memint32[reg_sp4-25]+memint32[reg_sp4-26]*8
/*+3779:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat(memint32[(reg_sp4-25)])*GetFloat4(reg_sp4-65);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3780:FADD*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-61)+GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3781:ILDC*/memint32[reg_sp4-19]=+8
/*+3782:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_sp4-55)];
/*+3783:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-19]*8
/*+3784:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat(memint32[(reg_sp4-18)])*GetFloat4(reg_sp4-67);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3785:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-63)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3786:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3787:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3788:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3789:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-35);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3790:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3791:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-49);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3792:NCALL*/SC_C();;reg_ip=553;
}
/*3793*/
code[553]=function(){
/*+3793:MOV*//*4*/memint32[(reg_sp4-54)]=memint32[(reg_sp4-56)];
/*+3794:INC*/memint32[reg_sp4-56]=memint32[reg_sp4-56]+1
/*+3795:JMP*/reg_ip=540;
}
/*3796*/
code[554]=function(){
/*+3796:ADDSP*/reg_sp+=-232;reg_sp4=reg_sp>>2;
/*+3797:RET*/reg_ip=regs.pop();
}
/*3798*/
code[555]=function(){
/*+3798:ADDSP*/reg_sp+=+76;reg_sp4=reg_sp>>2;
/*+3799:ILDC*/memint32[reg_sp4-19]=+0;reg_ip=556;
}
/*3800*/
code[556]=function(){
/*+3800:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-20)];
/*+3801:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-19]*1
/*+3802:C2I*/memint32[reg_sp4-18]=GetChar(memint32[(reg_sp4-17)])
/*+3803:ILDC*/memint32[reg_sp4-17]=+0
/*+3804:EQ*/memint32[reg_sp4-16]=memint32[reg_sp4-18]==memint32[reg_sp4-17]
/*+3805:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=558;}else{reg_ip=557;}
}
/*3806*/
code[557]=function(){
/*+3806:JMP*/reg_ip=560;
}
/*3807*/
code[558]=function(){
/*+3807:ILDC*/memint32[reg_sp4-17]=+6
/*+3808:MUL*/memint32[reg_sp4-16]=Math.imul(memint32[reg_sp4-19],memint32[reg_sp4-17]);
/*+3809:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3810:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-15)*GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3811:FADD*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3812:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3813:MOV*//*8*/{let dst=(reg_sp4-7);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3814:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3815:MOV*//*8*/{let dst=(reg_sp4-3);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3816:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-18)];
/*+3817:CALL*/regs.push(559);reg_ip=539;
}
/*3818*/
code[559]=function(){
/*+3818:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-19)];
/*+3819:INC*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+1
/*+3820:JMP*/reg_ip=556;
}
/*3821*/
code[560]=function(){
/*+3821:ADDSP*/reg_sp+=-76;reg_sp4=reg_sp>>2;
/*+3822:RET*/reg_ip=regs.pop();
}
/*3823*/
code[561]=function(){
/*+3823:ADDSP*/reg_sp+=+292;reg_sp4=reg_sp>>2;
/*+3824:ILDC*/memint32[reg_sp4-2]=+295936
/*+3825:NCALL*/SC_malloc();
/*+3826:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-1)];
/*+3827:MOV*//*4*/memint32[(+52)]=memint32[(reg_sp4-31)];
/*+3828:IAM*/regs.push(reg_this);reg_this=memint32[(+52)];reg_this4=reg_this>>2;
/*+3829:CALL*/regs.push(562);reg_ip=32;
}
/*3830*/
code[562]=function(){
/*+3830:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+3831:CALL*/regs.push(563);reg_ip=37;
}
/*3832*/
code[563]=function(){
/*+3832:ILDC*/memint32[reg_sp4-64]=-1
/*+3833:ILDC*/memint32[reg_sp4-63]=-1
/*+3834:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-64)];
/*+3835:ILDC*/memint32[reg_sp4-2]=+64
/*+3836:NCALL*/SC_GetPersistentInt();
/*+3837:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-1)];
/*+3838:MOV*//*4*/memint32[(reg_sp4-64)]=memint32[(reg_sp4-31)];
/*+3839:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-63)];
/*+3840:ILDC*/memint32[reg_sp4-2]=+67
/*+3841:NCALL*/SC_GetPersistentInt();
/*+3842:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-1)];
/*+3843:MOV*//*4*/memint32[(reg_sp4-63)]=memint32[(reg_sp4-31)];;reg_ip=564;
}
/*3844*/
code[564]=function(){
/*+3844:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3845:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3846:NCALL*/SC_t_0();
/*+3847:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3848:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3849:NCALL*/SC_t_x();
/*+3850:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3851:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3852:NCALL*/SC_t_y();
/*+3853:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3854:NCALL*/SC_alpha();
/*+3855:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3856:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3857:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3858:NCALL*/SC_rgb();
/*+3859:NCALL*/SC_clear();
/*+3860:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3861:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3862:NCALL*/SC_M();
/*+3863:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3864:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3865:NCALL*/SC_l();
/*+3866:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+480.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3867:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3868:NCALL*/SC_l();
/*+3869:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3870:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3871:NCALL*/SC_l();
/*+3872:NCALL*/SC_close();
/*+3873:NCALL*/SC_fin();
/*+3874:NCALL*/SC_fill1();
/*+3875:NCALL*/SC_clear();
/*+3876:NCALL*/SC_clear();
/*+3877:ILDC*/memint32[reg_sp4-62]=+0;reg_ip=565;
}
/*3878*/
code[565]=function(){
/*+3878:ILDC*/memint32[reg_sp4-31]=+16
/*+3879:LE*/memint32[reg_sp4-30]=memint32[reg_sp4-62]<=memint32[reg_sp4-31]
/*+3880:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=567;}else{reg_ip=566;}
}
/*3881*/
code[566]=function(){
/*+3881:ILDC*/memint32[reg_sp4-31]=+20
/*+3882:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-62],memint32[reg_sp4-31]);
/*+3883:FLDC*/{let addr=(reg_sp4-29);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3884:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3885:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-27)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3886:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+130.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3887:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3888:NCALL*/SC_M();
/*+3889:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+320.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3890:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3891:NCALL*/SC_l();
/*+3892:ILDC*/memint32[reg_sp4-31]=+20
/*+3893:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-62],memint32[reg_sp4-31]);
/*+3894:FLDC*/{let addr=(reg_sp4-29);cvtflt64[0]=+130.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3895:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3896:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-29)+GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3897:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3898:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3899:NCALL*/SC_M();
/*+3900:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3901:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+320.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3902:NCALL*/SC_l();
/*+3903:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-62)];
/*+3904:INC*/memint32[reg_sp4-62]=memint32[reg_sp4-62]+1
/*+3905:JMP*/reg_ip=565;
}
/*3906*/
code[567]=function(){
/*+3906:ILDC*/memint32[reg_sp4-61]=+0;reg_ip=568;
}
/*3907*/
code[568]=function(){
/*+3907:ILDC*/memint32[reg_sp4-31]=+32
/*+3908:LE*/memint32[reg_sp4-30]=memint32[reg_sp4-61]<=memint32[reg_sp4-31]
/*+3909:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=570;}else{reg_ip=569;}
}
/*3910*/
code[569]=function(){
/*+3910:ILDC*/memint32[reg_sp4-31]=+7
/*+3911:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-61],memint32[reg_sp4-31]);
/*+3912:FLDC*/{let addr=(reg_sp4-29);cvtflt64[0]=+400.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3913:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3914:FADD*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-27)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3915:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+400.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3916:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3917:NCALL*/SC_M();
/*+3918:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-192.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3919:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3920:NCALL*/SC_l();
/*+3921:ILDC*/memint32[reg_sp4-31]=+7
/*+3922:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-61],memint32[reg_sp4-31]);
/*+3923:FLDC*/{let addr=(reg_sp4-29);cvtflt64[0]=+400.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3924:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-30];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3925:FSUB*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-29)-GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3926:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-25);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3927:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+400.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3928:NCALL*/SC_M();
/*+3929:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3930:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+192.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3931:NCALL*/SC_l();
/*+3932:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-61)];
/*+3933:INC*/memint32[reg_sp4-61]=memint32[reg_sp4-61]+1
/*+3934:JMP*/reg_ip=568;
}
/*3935*/
code[570]=function(){
/*+3935:NCALL*/SC_fin();
/*+3936:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3937:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3938:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3939:NCALL*/SC_rgb();
/*+3940:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3941:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3942:NCALL*/SC_width();
/*+3943:NCALL*/SC_stroke();
/*+3944:NCALL*/SC_clear();
/*+3945:LEA*/memint32[reg_sp4-31]=reg_sp-232
/*+3946:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-31)];
/*+3947:LEA*/memint32[reg_sp4-30]=reg_sp-236
/*+3948:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-30)];
/*+3949:LEA*/memint32[reg_sp4-29]=reg_sp-240
/*+3950:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-29)];
/*+3951:NCALL*/SC_GetMouseState();
/*+3952:NCALL*/SC_Time();
/*+3953:MOV*//*8*/{let dst=(reg_sp4-31);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3954:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-31);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+3955:ILDC*/memint32[reg_sp4-4]=+70
/*+3956:ILDC*/memint32[reg_sp4-3]=+32
/*+3957:LEA*/memint32[reg_sp4-28]=reg_sp-288
/*+3958:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-28)];
/*+3959:NCALL*/SC_snprintf();
/*+3960:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3961:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3962:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+30.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3963:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3964:LEA*/memint32[reg_sp4-31]=reg_sp-288
/*+3965:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-31)];
/*+3966:CALL*/regs.push(571);reg_ip=555;
}
/*3967*/
code[571]=function(){
/*+3967:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3968:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3969:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+60.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3970:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3971:ILDC*/memint32[reg_sp4-1]=+78
/*+3972:CALL*/regs.push(572);reg_ip=555;
}
/*3973*/
code[572]=function(){
/*+3973:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3974:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3975:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+90.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3976:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3977:ILDC*/memint32[reg_sp4-1]=+119
/*+3978:CALL*/regs.push(573);reg_ip=555;
}
/*3979*/
code[573]=function(){
/*+3979:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3980:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3981:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+120.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3982:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3983:ILDC*/memint32[reg_sp4-1]=+146
/*+3984:CALL*/regs.push(574);reg_ip=555;
}
/*3985*/
code[574]=function(){
/*+3985:NCALL*/SC_fin();
/*+3986:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3987:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3988:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3989:NCALL*/SC_rgb();
/*+3990:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3991:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+3992:NCALL*/SC_width();
/*+3993:NCALL*/SC_stroke();
/*+3994:JMPZ*/if(memint32[reg_sp4-58]==0){reg_ip=576;}else{reg_ip=575;}
}
/*3995*/
code[575]=function(){
/*+3995:ILDC*/memint32[reg_sp4-31]=+10
/*+3996:SUB*/memint32[reg_sp4-30]=memint32[reg_sp4-60]-memint32[reg_sp4-31]
/*+3997:ILDC*/memint32[reg_sp4-29]=+20
/*+3998:DIV*/memint32[reg_sp4-64]=memint32[reg_sp4-30]/memint32[reg_sp4-29]
/*+3999:ILDC*/memint32[reg_sp4-31]=+130
/*+4000:SUB*/memint32[reg_sp4-30]=memint32[reg_sp4-59]-memint32[reg_sp4-31]
/*+4001:ILDC*/memint32[reg_sp4-29]=+20
/*+4002:DIV*/memint32[reg_sp4-63]=memint32[reg_sp4-30]/memint32[reg_sp4-29]
/*+4003:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-64)];
/*+4004:ILDC*/memint32[reg_sp4-1]=+64
/*+4005:NCALL*/SC_SetPersistentInt();
/*+4006:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-63)];
/*+4007:ILDC*/memint32[reg_sp4-1]=+67
/*+4008:NCALL*/SC_SetPersistentInt();;reg_ip=576;
}
/*4009*/
code[576]=function(){
/*+4009:ILDC*/memint32[reg_sp4-31]=+0
/*+4010:GE*/memint32[reg_sp4-30]=memint32[reg_sp4-64]>=memint32[reg_sp4-31]
/*+4011:ILDC*/memint32[reg_sp4-29]=+16
/*+4012:LS*/memint32[reg_sp4-28]=memint32[reg_sp4-64] <memint32[reg_sp4-29]
/*+4013:LAND*/memint32[reg_sp4-27]=memint32[reg_sp4-30]&&memint32[reg_sp4-28]
/*+4014:ILDC*/memint32[reg_sp4-26]=+0
/*+4015:GE*/memint32[reg_sp4-25]=memint32[reg_sp4-63]>=memint32[reg_sp4-26]
/*+4016:LAND*/memint32[reg_sp4-24]=memint32[reg_sp4-27]&&memint32[reg_sp4-25]
/*+4017:ILDC*/memint32[reg_sp4-23]=+16
/*+4018:LS*/memint32[reg_sp4-22]=memint32[reg_sp4-63] <memint32[reg_sp4-23]
/*+4019:LAND*/memint32[reg_sp4-21]=memint32[reg_sp4-24]&&memint32[reg_sp4-22]
/*+4020:JMPZ*/if(memint32[reg_sp4-21]==0){reg_ip=591;}else{reg_ip=577;}
}
/*4021*/
code[577]=function(){
/*+4021:NCALL*/SC_clear();
/*+4022:ILDC*/memint32[reg_sp4-31]=+16
/*+4023:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-63],memint32[reg_sp4-31]);
/*+4024:ADD*/memint32[reg_sp4-49]=memint32[reg_sp4-64]+memint32[reg_sp4-30]
/*+4025:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-49)];
/*+4026:MOV*//*4*/memint32[(reg_sp4-7)]=memint32[(reg_sp4-49)];
/*+4027:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-63)];
/*+4028:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-64)];
/*+4029:ILDC*/memint32[reg_sp4-4]=+173
/*+4030:ILDC*/memint32[reg_sp4-3]=+32
/*+4031:LEA*/memint32[reg_sp4-30]=reg_sp-228
/*+4032:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-30)];
/*+4033:NCALL*/SC_snprintf();
/*+4034:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4035:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4036:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+160.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4037:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+400.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4038:LEA*/memint32[reg_sp4-31]=reg_sp-228
/*+4039:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-31)];
/*+4040:CALL*/regs.push(578);reg_ip=555;
}
/*4041*/
code[578]=function(){
/*+4041:NCALL*/SC_fin();
/*+4042:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4043:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4044:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4045:NCALL*/SC_rgb();
/*+4046:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4047:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4048:NCALL*/SC_width();
/*+4049:NCALL*/SC_stroke();
/*+4050:NCALL*/SC_clear();
/*+4051:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4052:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4053:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4054:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4055:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4056:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4057:NCALL*/SC_t_t();
/*+4058:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4059:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4060:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4061:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4062:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-49)];
/*+4063:CALL*/regs.push(579);reg_ip=539;
}
/*4064*/
code[579]=function(){
/*+4064:NCALL*/SC_fin();
/*+4065:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4066:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4067:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4068:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4069:NCALL*/SC_rgba();
/*+4070:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4071:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4072:NCALL*/SC_width();
/*+4073:NCALL*/SC_stroke();
/*+4074:ILDC*/memint32[reg_sp4-48]=+0;reg_ip=580;
}
/*4075*/
code[580]=function(){
/*+4075:ILDC*/memint32[reg_sp4-31]=+10
/*+4076:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-48] <memint32[reg_sp4-31]
/*+4077:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=582;}else{reg_ip=581;}
}
/*4078*/
code[581]=function(){
/*+4078:LEA*/memint32[reg_sp4-31]=reg_sp-228
/*+4079:IDX*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+memint32[reg_sp4-48]*1
/*+4080:I2C*/PutChar(memint32[(reg_sp4-31)],memint32[reg_sp4-49]);
/*+4081:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-48)];
/*+4082:INC*/memint32[reg_sp4-48]=memint32[reg_sp4-48]+1
/*+4083:JMP*/reg_ip=580;
}
/*4084*/
code[582]=function(){
/*+4084:CLDC*/PutChar(reg_sp-218, +0);
/*+4085:CLDC*/PutChar(reg_sp-228, +50);
/*+4086:CLDC*/PutChar(reg_sp-224, +97);
/*+4087:CLDC*/PutChar(reg_sp-222, +100);
/*+4088:NCALL*/SC_clear();
/*+4089:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4090:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4091:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+130.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4092:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+420.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4093:LEA*/memint32[reg_sp4-31]=reg_sp-228
/*+4094:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-31)];
/*+4095:CALL*/regs.push(583);reg_ip=555;
}
/*4096*/
code[583]=function(){
/*+4096:NCALL*/SC_fin();
/*+4097:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4098:NCALL*/SC_alpha();
/*+4099:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4100:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4101:NCALL*/SC_width();
/*+4102:NCALL*/SC_stroke();
/*+4103:NCALL*/SC_clear();
/*+4104:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4105:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4106:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+100.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4107:FLDC*/{let addr=(reg_sp4-3);cvtflt64[0]=+440.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4108:LEA*/memint32[reg_sp4-31]=reg_sp-228
/*+4109:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-31)];
/*+4110:CALL*/regs.push(584);reg_ip=555;
}
/*4111*/
code[584]=function(){
/*+4111:NCALL*/SC_fin();
/*+4112:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4113:NCALL*/SC_alpha();
/*+4114:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4115:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4116:NCALL*/SC_width();
/*+4117:NCALL*/SC_stroke();
/*+4118:FLDC*/{let addr=(reg_sp4-47);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4119:FLDC*/{let addr=(reg_sp4-45);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4120:FLDC*/{let addr=(reg_sp4-43);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4121:FLDC*/{let addr=(reg_sp4-41);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4122:OFFS*/memint32[reg_sp4-31]=memint32[+52]+0
/*+4123:LEA*/memint32[reg_sp4-30]=memint32[(reg_sp4-31)]
/*+4124:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-49]*1156
/*+4125:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_sp4-30)];
/*+4126:ILDC*/memint32[reg_sp4-38]=+0;reg_ip=585;
}
/*4127*/
code[585]=function(){
/*+4127:ILDC*/memint32[reg_sp4-31]=+16
/*+4128:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-38] <memint32[reg_sp4-31]
/*+4129:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=591;}else{reg_ip=586;}
}
/*4130*/
code[586]=function(){
/*+4130:OFFS*/memint32[reg_sp4-31]=memint32[reg_sp4-39]+4
/*+4131:LEA*/memint32[reg_sp4-30]=memint32[(reg_sp4-31)]
/*+4132:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-38]*72
/*+4133:OFFS*/memint32[reg_sp4-28]=memint32[reg_sp4-30]+0
/*+4134:ILDC*/memint32[reg_sp4-27]=+0
/*+4135:LEA*/memint32[reg_sp4-26]=memint32[(reg_sp4-28)]
/*+4136:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-27]*8
/*+4137:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-26)];
/*+4138:MOV*//*4*/memint32[(reg_sp4-37)]=memint32[(reg_sp4-24)];
/*+4139:ILDC*/memint32[reg_sp4-31]=+0
/*+4140:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4141:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4142:ILDC*/memint32[reg_sp4-28]=+0
/*+4143:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-28];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4144:FEQ*/memint32[reg_sp4-25]=GetFloat(memint32[(reg_sp4-30)])==GetFloat4(reg_sp4-27)
/*+4145:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=588;}else{reg_ip=587;}
}
/*4146*/
code[587]=function(){
/*+4146:JMP*/reg_ip=591;
}
/*4147*/
code[588]=function(){
/*+4147:ILDC*/memint32[reg_sp4-31]=+0
/*+4148:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4149:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4150:ILDC*/memint32[reg_sp4-28]=+5
/*+4151:I2F*/{let addr=(reg_sp4-27);cvtflt64[0]=memint32[reg_sp4-28];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4152:FEQ*/memint32[reg_sp4-25]=GetFloat(memint32[(reg_sp4-30)])==GetFloat4(reg_sp4-27)
/*+4153:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=590;}else{reg_ip=589;}
}
/*4154*/
code[589]=function(){
/*+4154:NCALL*/SC_clear();
/*+4155:ILDC*/memint32[reg_sp4-31]=+1
/*+4156:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4157:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4158:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat(memint32[(reg_sp4-30)])*GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4159:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-47)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4160:ILDC*/memint32[reg_sp4-24]=+2
/*+4161:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-37)];
/*+4162:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*8
/*+4163:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat(memint32[(reg_sp4-23)])*GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4164:FSUB*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-45)-GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4165:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4166:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4167:NCALL*/SC_M();
/*+4168:ILDC*/memint32[reg_sp4-31]=+3
/*+4169:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4170:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4171:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat(memint32[(reg_sp4-30)])*GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4172:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-47)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4173:ILDC*/memint32[reg_sp4-24]=+4
/*+4174:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-37)];
/*+4175:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*8
/*+4176:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat(memint32[(reg_sp4-23)])*GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4177:FSUB*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-45)-GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4178:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4179:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4180:NCALL*/SC_L();
/*+4181:NCALL*/SC_fin();
/*+4182:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4183:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4184:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4185:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4186:NCALL*/SC_rgba();
/*+4187:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4188:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4189:NCALL*/SC_width();
/*+4190:NCALL*/SC_stroke();
/*+4191:NCALL*/SC_clear();
/*+4192:ILDC*/memint32[reg_sp4-31]=+7
/*+4193:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4194:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4195:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat(memint32[(reg_sp4-30)])*GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4196:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-47)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4197:ILDC*/memint32[reg_sp4-24]=+8
/*+4198:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-37)];
/*+4199:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*8
/*+4200:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat(memint32[(reg_sp4-23)])*GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4201:FSUB*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-45)-GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4202:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4203:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4204:NCALL*/SC_M();
/*+4205:ILDC*/memint32[reg_sp4-31]=+5
/*+4206:MOV*//*4*/memint32[(reg_sp4-30)]=memint32[(reg_sp4-37)];
/*+4207:IDX*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+memint32[reg_sp4-31]*8
/*+4208:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat(memint32[(reg_sp4-30)])*GetFloat4(reg_sp4-43);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4209:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-47)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4210:ILDC*/memint32[reg_sp4-24]=+6
/*+4211:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-37)];
/*+4212:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*8
/*+4213:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat(memint32[(reg_sp4-23)])*GetFloat4(reg_sp4-41);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4214:FSUB*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-45)-GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4215:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4216:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4217:NCALL*/SC_L();
/*+4218:NCALL*/SC_fin();
/*+4219:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4220:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4221:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4222:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4223:NCALL*/SC_rgba();
/*+4224:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4225:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4226:NCALL*/SC_width();
/*+4227:NCALL*/SC_stroke();;reg_ip=590;
}
/*4228*/
code[590]=function(){
/*+4228:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-38)];
/*+4229:INC*/memint32[reg_sp4-38]=memint32[reg_sp4-38]+1
/*+4230:JMP*/reg_ip=585;
}
/*4231*/
code[591]=function(){
/*+4231:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4232:NCALL*/SC_alpha();
/*+4233:ILDC*/memint32[reg_sp4-36]=+0;reg_ip=592;
}
/*4234*/
code[592]=function(){
/*+4234:ILDC*/memint32[reg_sp4-31]=+16
/*+4235:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-36] <memint32[reg_sp4-31]
/*+4236:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=599;}else{reg_ip=593;}
}
/*4237*/
code[593]=function(){
/*+4237:ILDC*/memint32[reg_sp4-35]=+0;reg_ip=594;
}
/*4238*/
code[594]=function(){
/*+4238:ILDC*/memint32[reg_sp4-31]=+16
/*+4239:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-35] <memint32[reg_sp4-31]
/*+4240:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=598;}else{reg_ip=595;}
}
/*4241*/
code[595]=function(){
/*+4241:CLDC*/PutChar(reg_sp-135, +0);
/*+4242:ILDC*/memint32[reg_sp4-31]=+16
/*+4243:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-35],memint32[reg_sp4-31]);
/*+4244:ADD*/memint32[reg_sp4-29]=memint32[reg_sp4-36]+memint32[reg_sp4-30]
/*+4245:I2C*/PutChar(reg_sp-136,memint32[reg_sp4-29]);
/*+4246:ILDC*/memint32[reg_sp4-31]=+127
/*+4247:C2I*/memint32[reg_sp4-30]=GetChar(reg_sp-136)
/*+4248:LS*/memint32[reg_sp4-29]=memint32[reg_sp4-30] <memint32[reg_sp4-31]
/*+4249:ILDC*/memint32[reg_sp4-28]=+32
/*+4250:C2I*/memint32[reg_sp4-27]=GetChar(reg_sp-136)
/*+4251:GR*/memint32[reg_sp4-26]=memint32[reg_sp4-27] >memint32[reg_sp4-28]
/*+4252:LAND*/memint32[reg_sp4-25]=memint32[reg_sp4-29]&&memint32[reg_sp4-26]
/*+4253:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=597;}else{reg_ip=596;}
}
/*4254*/
code[596]=function(){
/*+4254:ILDC*/memint32[reg_sp4-31]=+20
/*+4255:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-36],memint32[reg_sp4-31]);
/*+4256:ILDC*/memint32[reg_sp4-29]=+20
/*+4257:ADD*/memint32[reg_sp4-28]=memint32[reg_sp4-29]+memint32[reg_sp4-30]
/*+4258:ILDC*/memint32[reg_sp4-27]=+20
/*+4259:MUL*/memint32[reg_sp4-26]=Math.imul(memint32[reg_sp4-35],memint32[reg_sp4-27]);
/*+4260:ILDC*/memint32[reg_sp4-25]=+141
/*+4261:ADD*/memint32[reg_sp4-24]=memint32[reg_sp4-25]+memint32[reg_sp4-26]
/*+4262:ILDC*/memint32[reg_sp4-5]=-1
/*+4263:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-24)];
/*+4264:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-28)];
/*+4265:LEA*/memint32[reg_sp4-22]=reg_sp-136
/*+4266:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-22)];
/*+4267:NCALL*/SC_stext();;reg_ip=597;
}
/*4268*/
code[597]=function(){
/*+4268:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-35)];
/*+4269:INC*/memint32[reg_sp4-35]=memint32[reg_sp4-35]+1
/*+4270:JMP*/reg_ip=594;
}
/*4271*/
code[598]=function(){
/*+4271:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-36)];
/*+4272:INC*/memint32[reg_sp4-36]=memint32[reg_sp4-36]+1
/*+4273:JMP*/reg_ip=592;
}
/*4274*/
code[599]=function(){
/*+4274:NCALL*/SC_clear();
/*+4275:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4276:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4277:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4278:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4279:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4280:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4281:NCALL*/SC_t_t();
/*+4282:ILDC*/memint32[reg_sp4-33]=+0;reg_ip=600;
}
/*4283*/
code[600]=function(){
/*+4283:ILDC*/memint32[reg_sp4-31]=+16
/*+4284:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-33] <memint32[reg_sp4-31]
/*+4285:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=606;}else{reg_ip=601;}
}
/*4286*/
code[601]=function(){
/*+4286:ILDC*/memint32[reg_sp4-32]=+0;reg_ip=602;
}
/*4287*/
code[602]=function(){
/*+4287:ILDC*/memint32[reg_sp4-31]=+16
/*+4288:LS*/memint32[reg_sp4-30]=memint32[reg_sp4-32] <memint32[reg_sp4-31]
/*+4289:JMPZ*/if(memint32[reg_sp4-30]==0){reg_ip=605;}else{reg_ip=603;}
}
/*4290*/
code[603]=function(){
/*+4290:ILDC*/memint32[reg_sp4-31]=+16
/*+4291:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-32],memint32[reg_sp4-31]);
/*+4292:ADD*/memint32[reg_sp4-29]=memint32[reg_sp4-33]+memint32[reg_sp4-30]
/*+4293:ILDC*/memint32[reg_sp4-28]=+20
/*+4294:MUL*/memint32[reg_sp4-27]=Math.imul(memint32[reg_sp4-33],memint32[reg_sp4-28]);
/*+4295:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+10.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4296:I2F*/{let addr=(reg_sp4-24);cvtflt64[0]=memint32[reg_sp4-27];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4297:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4298:ILDC*/memint32[reg_sp4-20]=+20
/*+4299:MUL*/memint32[reg_sp4-19]=Math.imul(memint32[reg_sp4-32],memint32[reg_sp4-20]);
/*+4300:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+150.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4301:I2F*/{let addr=(reg_sp4-16);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4302:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)+GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4303:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4304:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4305:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4306:MOV*//*8*/{let dst=(reg_sp4-3);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+4307:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-29)];
/*+4308:CALL*/regs.push(604);reg_ip=539;
}
/*4309*/
code[604]=function(){
/*+4309:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-32)];
/*+4310:INC*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+1
/*+4311:JMP*/reg_ip=602;
}
/*4312*/
code[605]=function(){
/*+4312:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-33)];
/*+4313:INC*/memint32[reg_sp4-33]=memint32[reg_sp4-33]+1
/*+4314:JMP*/reg_ip=600;
}
/*4315*/
code[606]=function(){
/*+4315:NCALL*/SC_fin();
/*+4316:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4317:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4318:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4319:NCALL*/SC_rgb();
/*+4320:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4321:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+4322:NCALL*/SC_width();
/*+4323:NCALL*/SC_stroke();
/*+4324:INT*/int_code=+10;interrupt=true;;reg_ip=607;
}
/*4325*/
code[607]=function(){
/*+4325:JMP*/reg_ip=564;
}
/*4326*/
code[608]=function(){
/*+4326:ILDC*/memint32[reg_sp4-74]=+0
/*+4327:ADDSP*/reg_sp+=-292;reg_sp4=reg_sp>>2;
/*+4328:RET*/reg_ip=regs.pop();
}
let start_addr=561
let start_rsp=216
let graphics=1
let G_SCREEN_SCALE=2
