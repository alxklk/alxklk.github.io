/* Native binds:
0: Time
1: sin
2: cos
3: M
4: l
5: close
6: clear
7: fill1
8: stroke
9: fin
10: gray
11: width
12: t_0
13: t_x
14: t_y
15: FillRT

*/
let natives=[
'Time','sin','cos','M','l','close','clear','fill1',
'stroke','fin','gray','width','t_0','t_x','t_y','FillRT'
]

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
/*+10:ADDSP*/reg_sp+=+128;reg_sp4=reg_sp>>2;
/*+11:ILDC*/memint32[reg_sp4-32]=+2
/*+12:I2F*/{let addr=(reg_sp4-31);cvtflt64[0]=memint32[reg_sp4-32];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+13:FDIV*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-38)/GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+14:FSUB*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+15:ILDC*/memint32[reg_sp4-25]=+2
/*+16:I2F*/{let addr=(reg_sp4-24);cvtflt64[0]=memint32[reg_sp4-25];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+17:FDIV*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-40)/GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+18:FADD*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-27)+GetFloat4(reg_sp4-22);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+19:ILDC*/memint32[reg_sp4-18]=+2
/*+20:I2F*/{let addr=(reg_sp4-17);cvtflt64[0]=memint32[reg_sp4-18];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+21:FDIV*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-40)/GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+22:FSUB*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-36)-GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+23:ILDC*/memint32[reg_sp4-11]=+2
/*+24:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+25:FDIV*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-38)/GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+26:FSUB*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-13)-GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+27:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+28:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+29:NCALL*/SC_M();
/*+30:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+31:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+32:NCALL*/SC_l();
/*+33:FNEG*/{let addr=(reg_sp4-32);cvtflt64[0]=-GetFloat4(reg_sp4-40);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+34:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+36:NCALL*/SC_l();
/*+37:FNEG*/{let addr=(reg_sp4-32);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:FNEG*/{let addr=(reg_sp4-30);cvtflt64[0]=-GetFloat4(reg_sp4-40);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+39:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+40:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:NCALL*/SC_l();
/*+42:NCALL*/SC_close();
/*+43:ADDSP*/reg_sp+=-128;reg_sp4=reg_sp>>2;
/*+44:RET*/reg_ip=regs.pop();
}
/*45*/
code[2]=function(){
/*+45:ADDSP*/reg_sp+=+172;reg_sp4=reg_sp>>2;
/*+46:ILDC*/memint32[reg_sp4-43]=+0;reg_ip=3;
}
/*47*/
code[3]=function(){
/*+47:NCALL*/SC_Time();
/*+48:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+49:MOV*//*8*/{let dst=(reg_sp4-42);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+50:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+51:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+52:NCALL*/SC_t_0();
/*+53:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+54:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+55:NCALL*/SC_t_x();
/*+56:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+57:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+58:NCALL*/SC_t_y();
/*+59:NCALL*/SC_clear();
/*+60:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+61:NCALL*/SC_gray();
/*+62:NCALL*/SC_FillRT();
/*+63:NCALL*/SC_clear();
/*+64:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+156.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+65:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+156.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+66:NCALL*/SC_M();
/*+67:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+156.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+356.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+69:NCALL*/SC_M();
/*+70:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+356.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+156.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:NCALL*/SC_M();
/*+73:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+356.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+74:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+356.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+75:NCALL*/SC_M();
/*+76:NCALL*/SC_fin();
/*+77:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+78:NCALL*/SC_gray();
/*+79:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+80:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:NCALL*/SC_width();
/*+82:NCALL*/SC_stroke();
/*+83:NCALL*/SC_clear();
/*+84:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+85:NCALL*/SC_gray();
/*+86:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+88:NCALL*/SC_t_0();
/*+89:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+90:NCALL*/SC_sin();
/*+91:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+92:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+93:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+94:FLDC*/{let addr=(reg_sp4-20);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+95:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+96:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+97:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+99:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+100:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+101:NCALL*/SC_cos();
/*+102:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+103:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+104:NCALL*/SC_sin();
/*+105:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+106:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+107:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+108:NCALL*/SC_t_x();
/*+109:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+110:NCALL*/SC_sin();
/*+111:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+112:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+113:NCALL*/SC_cos();
/*+114:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+115:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+116:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+117:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+118:NCALL*/SC_t_y();
/*+119:FLDC*/{let addr=(reg_sp4-38);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+120:FLDC*/{let addr=(reg_sp4-36);cvtflt64[0]=+102.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+122:NCALL*/SC_sin();
/*+123:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+124:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.125000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+125:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+126:FLDC*/{let addr=(reg_sp4-20);cvtflt64[0]=+0.125000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+127:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+128:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+129:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)+GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+130:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+131:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+132:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+1.570796;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+133:FSUB*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+134:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+4.712389;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+135:FSUB*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:FSUB*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+139:FNEG*/{let addr=(reg_sp4-24);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+140:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+141:NCALL*/SC_sin();
/*+142:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+143:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+144:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+145:NCALL*/SC_cos();
/*+146:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+147:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+148:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+149:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+150:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+151:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+152:CALL*/regs.push(4);reg_ip=1;
}
/*153*/
code[4]=function(){
/*+153:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+155:NCALL*/SC_sin();
/*+156:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+157:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+158:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+159:NCALL*/SC_cos();
/*+160:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+161:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+162:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+163:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+164:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+165:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+166:CALL*/regs.push(5);reg_ip=1;
}
/*167*/
code[5]=function(){
/*+167:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+168:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+169:NCALL*/SC_sin();
/*+170:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+171:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+172:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+173:NCALL*/SC_cos();
/*+174:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+175:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+176:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+177:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+178:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+179:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+180:CALL*/regs.push(6);reg_ip=1;
}
/*181*/
code[6]=function(){
/*+181:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+182:NCALL*/SC_sin();
/*+183:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+184:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+185:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+186:NCALL*/SC_cos();
/*+187:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+188:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+189:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+190:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+191:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+192:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+193:CALL*/regs.push(7);reg_ip=1;
}
/*194*/
code[7]=function(){
/*+194:NCALL*/SC_fin();
/*+195:NCALL*/SC_fill1();
/*+196:INT*/int_code=+10;interrupt=true;;reg_ip=8;
}
/*197*/
code[8]=function(){
/*+197:JMP*/reg_ip=3;
}
/*198*/
code[9]=function(){
/*+198:ILDC*/memint32[reg_sp4-44]=+0
/*+199:ADDSP*/reg_sp+=-172;reg_sp4=reg_sp>>2;
/*+200:RET*/reg_ip=regs.pop();
}
let start_addr=2
let start_rsp=88
let graphics=1
let G_SCREEN_WIDTH=512
let G_SCREEN_HEIGHT=512
let G_SCREEN_SCALE=1
