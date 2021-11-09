/* Native binds:
0: Time
1: snprintf
2: GetMouseState
3: glyph
4: gtext
5: M
6: l
7: close
8: clear
9: fill1
10: stroke
11: fin
12: rgb
13: alpha
14: width
15: t_0
16: t_x
17: t_y

*/
let natives=[
'Time','snprintf','GetMouseState','glyph','gtext','M','l','close',
'clear','fill1','stroke','fin','rgb','alpha','width','t_0',
't_x','t_y'
]

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
T, i, m, e,  , %, f, \0, &, $, %,  , +, -, ., 0,
1, 2, 3, 4, 5, 6, 7, 8, 9, \0, a, b, c, d, e, f,
g, h, i, j, k, l, m, n, o, p, q, r, t, y, u, v,
w, x, y, z, \0, A, B, C, D, E, F, G, H, I, J, K,
L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, \0,
%, i,  , %, i,  , c, o, d, e,  , %, i,  , 0, x,
%, 0, 2, x, \0, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
84, 105, 109, 101, 32, 37, 102, 0, 38, 36, 37, 32, 43, 45, 46, 48,
49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 98, 99, 100, 101, 102,
103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 116, 121, 117, 118,
119, 120, 121, 122, 0, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 0,
37, 105, 32, 37, 105, 32, 99, 111, 100, 101, 32, 37, 105, 32, 48, 120,
37, 48, 50, 120, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
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
/*+10:ADDSP*/reg_sp+=+172;reg_sp4=reg_sp>>2;;reg_ip=2;
}
/*11*/
code[2]=function(){
/*+11:NCALL*/SC_Time();
/*+12:MOV*//*8*/{let dst=(reg_sp4-19);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+13:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+14:ILDC*/memint32[reg_sp4-4]=+64
/*+15:ILDC*/memint32[reg_sp4-3]=+32
/*+16:LEA*/memint32[reg_sp4-16]=reg_sp-172
/*+17:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+18:NCALL*/SC_snprintf();
/*+19:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+20:NCALL*/SC_alpha();
/*+21:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+22:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+23:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+24:NCALL*/SC_rgb();
/*+25:NCALL*/SC_clear();
/*+26:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+27:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+28:NCALL*/SC_t_0();
/*+29:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+30:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+31:NCALL*/SC_t_x();
/*+32:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+33:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+34:NCALL*/SC_t_y();
/*+35:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+36:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+37:NCALL*/SC_M();
/*+38:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+39:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:NCALL*/SC_l();
/*+41:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+480.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+42:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+43:NCALL*/SC_l();
/*+44:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+45:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:NCALL*/SC_l();
/*+47:NCALL*/SC_close();
/*+48:NCALL*/SC_fin();
/*+49:NCALL*/SC_fill1();
/*+50:NCALL*/SC_clear();
/*+51:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+30.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+52:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+53:NCALL*/SC_t_0();
/*+54:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+55:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+56:NCALL*/SC_t_x();
/*+57:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+58:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+59:NCALL*/SC_t_y();
/*+60:LEA*/memint32[reg_sp4-18]=reg_sp-172
/*+61:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-18)];
/*+62:NCALL*/SC_gtext();
/*+63:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+65:NCALL*/SC_t_0();
/*+66:ILDC*/memint32[reg_sp4-2]=+72
/*+67:NCALL*/SC_gtext();
/*+68:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+90.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+69:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+70:NCALL*/SC_t_0();
/*+71:ILDC*/memint32[reg_sp4-2]=+90
/*+72:NCALL*/SC_gtext();
/*+73:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+74:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+75:NCALL*/SC_t_0();
/*+76:ILDC*/memint32[reg_sp4-2]=+117
/*+77:NCALL*/SC_gtext();
/*+78:ILDC*/memint32[reg_sp4-35]=+0;reg_ip=3;
}
/*79*/
code[3]=function(){
/*+79:ILDC*/memint32[reg_sp4-19]=+16
/*+80:LS*/memint32[reg_sp4-18]=memint32[reg_sp4-35] <memint32[reg_sp4-19]
/*+81:JMPZ*/if(memint32[reg_sp4-18]==0){reg_ip=8;}else{reg_ip=4;}
}
/*82*/
code[4]=function(){
/*+82:ILDC*/memint32[reg_sp4-34]=+0;reg_ip=5;
}
/*83*/
code[5]=function(){
/*+83:ILDC*/memint32[reg_sp4-19]=+16
/*+84:LS*/memint32[reg_sp4-18]=memint32[reg_sp4-34] <memint32[reg_sp4-19]
/*+85:JMPZ*/if(memint32[reg_sp4-18]==0){reg_ip=7;}else{reg_ip=6;}
}
/*86*/
code[6]=function(){
/*+86:ILDC*/memint32[reg_sp4-19]=+20
/*+87:MUL*/memint32[reg_sp4-18]=Math.imul(memint32[reg_sp4-35],memint32[reg_sp4-19]);
/*+88:ILDC*/memint32[reg_sp4-17]=+10
/*+89:ADD*/memint32[reg_sp4-16]=memint32[reg_sp4-17]+memint32[reg_sp4-18]
/*+90:ILDC*/memint32[reg_sp4-15]=+20
/*+91:MUL*/memint32[reg_sp4-14]=Math.imul(memint32[reg_sp4-34],memint32[reg_sp4-15]);
/*+92:ILDC*/memint32[reg_sp4-13]=+150
/*+93:ADD*/memint32[reg_sp4-12]=memint32[reg_sp4-13]+memint32[reg_sp4-14]
/*+94:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-12];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+95:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+96:NCALL*/SC_t_0();
/*+97:ILDC*/memint32[reg_sp4-19]=+16
/*+98:MUL*/memint32[reg_sp4-18]=Math.imul(memint32[reg_sp4-34],memint32[reg_sp4-19]);
/*+99:ADD*/memint32[reg_sp4-17]=memint32[reg_sp4-35]+memint32[reg_sp4-18]
/*+100:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-17)];
/*+101:NCALL*/SC_glyph();
/*+102:MOV*//*4*/memint32[(reg_sp4-19)]=memint32[(reg_sp4-34)];
/*+103:INC*/memint32[reg_sp4-34]=memint32[reg_sp4-34]+1
/*+104:JMP*/reg_ip=5;
}
/*105*/
code[7]=function(){
/*+105:MOV*//*4*/memint32[(reg_sp4-19)]=memint32[(reg_sp4-35)];
/*+106:INC*/memint32[reg_sp4-35]=memint32[reg_sp4-35]+1
/*+107:JMP*/reg_ip=3;
}
/*108*/
code[8]=function(){
/*+108:NCALL*/SC_fin();
/*+109:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+110:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+111:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+112:NCALL*/SC_rgb();
/*+113:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+114:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:NCALL*/SC_width();
/*+116:NCALL*/SC_stroke();
/*+117:LEA*/memint32[reg_sp4-19]=reg_sp-124
/*+118:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-19)];
/*+119:LEA*/memint32[reg_sp4-18]=reg_sp-128
/*+120:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-18)];
/*+121:LEA*/memint32[reg_sp4-17]=reg_sp-132
/*+122:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-17)];
/*+123:NCALL*/SC_GetMouseState();
/*+124:ILDC*/memint32[reg_sp4-19]=+10
/*+125:SUB*/memint32[reg_sp4-18]=memint32[reg_sp4-33]-memint32[reg_sp4-19]
/*+126:ILDC*/memint32[reg_sp4-17]=+20
/*+127:DIV*/memint32[reg_sp4-30]=memint32[reg_sp4-18]/memint32[reg_sp4-17]
/*+128:ILDC*/memint32[reg_sp4-19]=+130
/*+129:SUB*/memint32[reg_sp4-18]=memint32[reg_sp4-32]-memint32[reg_sp4-19]
/*+130:ILDC*/memint32[reg_sp4-17]=+20
/*+131:DIV*/memint32[reg_sp4-29]=memint32[reg_sp4-18]/memint32[reg_sp4-17]
/*+132:ILDC*/memint32[reg_sp4-19]=+0
/*+133:GE*/memint32[reg_sp4-18]=memint32[reg_sp4-30]>=memint32[reg_sp4-19]
/*+134:ILDC*/memint32[reg_sp4-17]=+16
/*+135:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-30] <memint32[reg_sp4-17]
/*+136:LAND*/memint32[reg_sp4-15]=memint32[reg_sp4-18]&&memint32[reg_sp4-16]
/*+137:ILDC*/memint32[reg_sp4-14]=+0
/*+138:GE*/memint32[reg_sp4-13]=memint32[reg_sp4-29]>=memint32[reg_sp4-14]
/*+139:LAND*/memint32[reg_sp4-12]=memint32[reg_sp4-15]&&memint32[reg_sp4-13]
/*+140:ILDC*/memint32[reg_sp4-11]=+16
/*+141:LS*/memint32[reg_sp4-10]=memint32[reg_sp4-29] <memint32[reg_sp4-11]
/*+142:LAND*/memint32[reg_sp4-9]=memint32[reg_sp4-12]&&memint32[reg_sp4-10]
/*+143:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=10;}else{reg_ip=9;}
}
/*144*/
code[9]=function(){
/*+144:NCALL*/SC_clear();
/*+145:ILDC*/memint32[reg_sp4-19]=+16
/*+146:MUL*/memint32[reg_sp4-18]=Math.imul(memint32[reg_sp4-29],memint32[reg_sp4-19]);
/*+147:ADD*/memint32[reg_sp4-20]=memint32[reg_sp4-30]+memint32[reg_sp4-18]
/*+148:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-20)];
/*+149:MOV*//*4*/memint32[(reg_sp4-7)]=memint32[(reg_sp4-20)];
/*+150:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-29)];
/*+151:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-30)];
/*+152:ILDC*/memint32[reg_sp4-4]=+144
/*+153:ILDC*/memint32[reg_sp4-3]=+32
/*+154:LEA*/memint32[reg_sp4-18]=reg_sp-112
/*+155:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-18)];
/*+156:NCALL*/SC_snprintf();
/*+157:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+180.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+158:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+350.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:NCALL*/SC_t_0();
/*+160:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+161:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+162:NCALL*/SC_t_x();
/*+163:LEA*/memint32[reg_sp4-18]=reg_sp-112
/*+164:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-18)];
/*+165:NCALL*/SC_gtext();
/*+166:NCALL*/SC_fin();
/*+167:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+168:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+169:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+170:NCALL*/SC_rgb();
/*+171:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+172:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+173:NCALL*/SC_width();
/*+174:NCALL*/SC_stroke();
/*+175:NCALL*/SC_clear();
/*+176:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+177:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+400.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+178:NCALL*/SC_t_0();
/*+179:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+181:NCALL*/SC_t_x();
/*+182:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+183:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:NCALL*/SC_t_y();
/*+185:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-20)];
/*+186:NCALL*/SC_glyph();
/*+187:NCALL*/SC_fin();
/*+188:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+189:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:NCALL*/SC_rgb();
/*+192:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+193:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+7.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+194:NCALL*/SC_width();
/*+195:NCALL*/SC_stroke();;reg_ip=10;
}
/*196*/
code[10]=function(){
/*+196:INT*/int_code=+10;interrupt=true;;reg_ip=11;
}
/*197*/
code[11]=function(){
/*+197:JMP*/reg_ip=2;
}
/*198*/
code[12]=function(){
/*+198:ILDC*/memint32[reg_sp4-44]=+0
/*+199:ADDSP*/reg_sp+=-172;reg_sp4=reg_sp>>2;
/*+200:RET*/reg_ip=regs.pop();
}
let start_addr=1
let start_rsp=188
let graphics=1
let G_SCREEN_SCALE=1
