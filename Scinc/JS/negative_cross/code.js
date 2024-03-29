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
/*+45:ADDSP*/reg_sp+=+188;reg_sp4=reg_sp>>2;
/*+46:ILDC*/memint32[reg_sp4-47]=+0;reg_ip=3;
}
/*47*/
code[3]=function(){
/*+47:NCALL*/SC_Time();
/*+48:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+49:MOV*//*8*/{let dst=(reg_sp4-46);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
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
/*+64:FLDC*/{let addr=(reg_sp4-44);cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+65:FLDC*/{let addr=(reg_sp4-42);cvtflt64[0]=+90.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+66:ILDC*/memint32[reg_sp4-26]=+256
/*+67:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:FSUB*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+69:ILDC*/memint32[reg_sp4-21]=+256
/*+70:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FSUB*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+73:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+74:NCALL*/SC_M();
/*+75:ILDC*/memint32[reg_sp4-26]=+256
/*+76:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+77:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+78:ILDC*/memint32[reg_sp4-21]=+256
/*+79:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+80:FSUB*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+82:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+83:NCALL*/SC_M();
/*+84:ILDC*/memint32[reg_sp4-26]=+256
/*+85:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+86:FSUB*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:ILDC*/memint32[reg_sp4-21]=+256
/*+88:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+89:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+90:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+91:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+92:NCALL*/SC_M();
/*+93:ILDC*/memint32[reg_sp4-26]=+256
/*+94:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+95:FADD*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+96:ILDC*/memint32[reg_sp4-21]=+256
/*+97:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+99:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+100:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+101:NCALL*/SC_M();
/*+102:NCALL*/SC_fin();
/*+103:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+104:NCALL*/SC_gray();
/*+105:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+106:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+107:NCALL*/SC_width();
/*+108:NCALL*/SC_stroke();
/*+109:NCALL*/SC_clear();
/*+110:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+111:NCALL*/SC_gray();
/*+112:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+113:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+114:NCALL*/SC_t_0();
/*+115:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-46);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+116:NCALL*/SC_sin();
/*+117:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+118:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+119:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+120:FLDC*/{let addr=(reg_sp4-20);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+122:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+123:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+124:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+125:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+126:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+127:NCALL*/SC_cos();
/*+128:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+129:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+130:NCALL*/SC_sin();
/*+131:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+132:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+134:NCALL*/SC_t_x();
/*+135:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+136:NCALL*/SC_sin();
/*+137:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+138:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+139:NCALL*/SC_cos();
/*+140:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+141:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+142:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+143:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+144:NCALL*/SC_t_y();
/*+145:FLDC*/{let addr=(reg_sp4-38);cvtflt64[0]=+75.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+146:FLDC*/{let addr=(reg_sp4-36);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+147:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-46);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+148:NCALL*/SC_sin();
/*+149:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+150:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.125000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+152:FLDC*/{let addr=(reg_sp4-20);cvtflt64[0]=+0.125000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+155:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-18)+GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+156:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+157:FMUL*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+158:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+1.570796;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:FSUB*/{let addr=(reg_sp4-32);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+160:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+4.712389;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+161:FSUB*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+162:FLDC*/{let addr=(reg_sp4-26);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+163:FSUB*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+164:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+165:FNEG*/{let addr=(reg_sp4-24);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+166:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+167:NCALL*/SC_sin();
/*+168:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+169:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+170:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+171:NCALL*/SC_cos();
/*+172:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+173:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+174:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+175:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+176:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+177:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+178:CALL*/regs.push(4);reg_ip=1;
}
/*179*/
code[4]=function(){
/*+179:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+181:NCALL*/SC_sin();
/*+182:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+183:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+185:NCALL*/SC_cos();
/*+186:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+187:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+189:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+190:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+191:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+192:CALL*/regs.push(5);reg_ip=1;
}
/*193*/
code[5]=function(){
/*+193:FNEG*/{let addr=(reg_sp4-26);cvtflt64[0]=-GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+194:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+195:NCALL*/SC_sin();
/*+196:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+197:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+198:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+199:NCALL*/SC_cos();
/*+200:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+201:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+202:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+203:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+204:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+205:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+206:CALL*/regs.push(6);reg_ip=1;
}
/*207*/
code[6]=function(){
/*+207:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+208:NCALL*/SC_sin();
/*+209:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+210:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+211:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+212:NCALL*/SC_cos();
/*+213:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+214:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+215:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+216:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+217:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+218:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-38);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+219:CALL*/regs.push(7);reg_ip=1;
}
/*220*/
code[7]=function(){
/*+220:NCALL*/SC_fin();
/*+221:NCALL*/SC_fill1();
/*+222:INT*/int_code=+10;interrupt=true;;reg_ip=8;
}
/*223*/
code[8]=function(){
/*+223:JMP*/reg_ip=3;
}
/*224*/
code[9]=function(){
/*+224:ILDC*/memint32[reg_sp4-48]=+0
/*+225:ADDSP*/reg_sp+=-188;reg_sp4=reg_sp>>2;
/*+226:RET*/reg_ip=regs.pop();
}
let start_addr=2
let start_rsp=88
let graphics=1
let G_SCREEN_WIDTH=512
let G_SCREEN_HEIGHT=512
let G_SCREEN_SCALE=1
