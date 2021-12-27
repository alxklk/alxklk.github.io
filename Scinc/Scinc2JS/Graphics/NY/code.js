/* Native binds:
0: Time
1: sin
2: cos
3: M
4: clear
5: stroke
6: fin
7: rgb
8: alpha
9: width
10: FillRT

*/
let natives=[
'Time','sin','cos','M','clear','stroke','fin','rgb',
'alpha','width','FillRT'
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
/*+10:ADDSP*/reg_sp+=+284;reg_sp4=reg_sp>>2;;reg_ip=2;
}
/*11*/
code[2]=function(){
/*+11:NCALL*/SC_Time();
/*+12:MOV*//*8*/{let dst=(reg_sp4-60);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+13:MOV*//*8*/{let dst=(+20);let src=(reg_sp4-60);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+14:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+15:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+16:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+17:NCALL*/SC_rgb();
/*+18:NCALL*/SC_FillRT();
/*+19:ILDC*/memint32[reg_sp4-71]=+0;reg_ip=3;
}
/*20*/
code[3]=function(){
/*+20:ILDC*/memint32[reg_sp4-60]=+200
/*+21:LS*/memint32[reg_sp4-59]=memint32[reg_sp4-71] <memint32[reg_sp4-60]
/*+22:JMPZ*/if(memint32[reg_sp4-59]==0){reg_ip=5;}else{reg_ip=4;}
}
/*23*/
code[4]=function(){
/*+23:NCALL*/SC_clear();
/*+24:I2F*/{let addr=(reg_sp4-60);cvtflt64[0]=memint32[reg_sp4-71];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+25:FADD*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(+20)+GetFloat4(reg_sp4-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+26:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+27:NCALL*/SC_cos();
/*+28:MOV*//*8*/{let dst=(reg_sp4-56);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+29:MOV*//*8*/{let dst=(reg_sp4-70);let src=(reg_sp4-56);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+30:I2F*/{let addr=(reg_sp4-60);cvtflt64[0]=memint32[reg_sp4-71];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+31:FADD*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(+20)+GetFloat4(reg_sp4-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+32:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+33:NCALL*/SC_sin();
/*+34:MOV*//*8*/{let dst=(reg_sp4-56);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:I2F*/{let addr=(reg_sp4-54);cvtflt64[0]=memint32[reg_sp4-71];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+36:FMUL*/{let addr=(reg_sp4-52);cvtflt64[0]=GetFloat4(reg_sp4-56)*GetFloat4(reg_sp4-54);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+37:FLDC*/{let addr=(reg_sp4-50);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:FMUL*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat4(reg_sp4-52)*GetFloat4(reg_sp4-50);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+39:FLDC*/{let addr=(reg_sp4-46);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:I2F*/{let addr=(reg_sp4-44);cvtflt64[0]=memint32[reg_sp4-71];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+41:FMUL*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-44)*GetFloat4(reg_sp4-46);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+42:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+43:NCALL*/SC_sin();
/*+44:MOV*//*8*/{let dst=(reg_sp4-40);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+45:FLDC*/{let addr=(reg_sp4-38);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:FMUL*/{let addr=(reg_sp4-36);cvtflt64[0]=GetFloat4(reg_sp4-40)*GetFloat4(reg_sp4-38);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+47:ILDC*/memint32[reg_sp4-34]=+1
/*+48:I2F*/{let addr=(reg_sp4-33);cvtflt64[0]=memint32[reg_sp4-34];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+49:FADD*/{let addr=(reg_sp4-31);cvtflt64[0]=GetFloat4(reg_sp4-33)+GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+50:FMUL*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-48)*GetFloat4(reg_sp4-31);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+51:ILDC*/memint32[reg_sp4-27]=+320
/*+52:I2F*/{let addr=(reg_sp4-26);cvtflt64[0]=memint32[reg_sp4-27];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+53:FADD*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-29);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+54:ILDC*/memint32[reg_sp4-22]=+2
/*+55:MUL*/memint32[reg_sp4-21]=Math.imul(memint32[reg_sp4-71],memint32[reg_sp4-22]);
/*+56:ILDC*/memint32[reg_sp4-20]=+50
/*+57:ADD*/memint32[reg_sp4-19]=memint32[reg_sp4-20]+memint32[reg_sp4-21]
/*+58:I2F*/{let addr=(reg_sp4-18);cvtflt64[0]=memint32[reg_sp4-71];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+59:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-70)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+60:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+61:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+62:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+63:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)+GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+65:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+66:NCALL*/SC_M();
/*+67:ILDC*/memint32[reg_sp4-60]=+4
/*+68:MUL*/memint32[reg_sp4-59]=Math.imul(memint32[reg_sp4-71],memint32[reg_sp4-60]);
/*+69:ILDC*/memint32[reg_sp4-58]=+3
/*+70:I2F*/{let addr=(reg_sp4-57);cvtflt64[0]=memint32[reg_sp4-58];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FMUL*/{let addr=(reg_sp4-55);cvtflt64[0]=GetFloat4(+20)*GetFloat4(reg_sp4-57);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:I2F*/{let addr=(reg_sp4-53);cvtflt64[0]=memint32[reg_sp4-59];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+73:FADD*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat4(reg_sp4-53)+GetFloat4(reg_sp4-55);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+74:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-51);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+75:NCALL*/SC_sin();
/*+76:MOV*//*8*/{let dst=(reg_sp4-49);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+77:FLDC*/{let addr=(reg_sp4-47);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+78:FMUL*/{let addr=(reg_sp4-45);cvtflt64[0]=GetFloat4(reg_sp4-49)*GetFloat4(reg_sp4-47);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+79:FLDC*/{let addr=(reg_sp4-43);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+80:FADD*/{let addr=(reg_sp4-68);cvtflt64[0]=GetFloat4(reg_sp4-43)+GetFloat4(reg_sp4-45);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:ILDC*/memint32[reg_sp4-60]=+7
/*+82:MUL*/memint32[reg_sp4-59]=Math.imul(memint32[reg_sp4-71],memint32[reg_sp4-60]);
/*+83:ILDC*/memint32[reg_sp4-58]=+2
/*+84:I2F*/{let addr=(reg_sp4-57);cvtflt64[0]=memint32[reg_sp4-58];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+85:FMUL*/{let addr=(reg_sp4-55);cvtflt64[0]=GetFloat4(+20)*GetFloat4(reg_sp4-57);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+86:I2F*/{let addr=(reg_sp4-53);cvtflt64[0]=memint32[reg_sp4-59];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:FADD*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat4(reg_sp4-53)+GetFloat4(reg_sp4-55);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+88:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-51);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+89:NCALL*/SC_sin();
/*+90:MOV*//*8*/{let dst=(reg_sp4-49);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+91:FLDC*/{let addr=(reg_sp4-47);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+92:FMUL*/{let addr=(reg_sp4-45);cvtflt64[0]=GetFloat4(reg_sp4-49)*GetFloat4(reg_sp4-47);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+93:FLDC*/{let addr=(reg_sp4-43);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+94:FADD*/{let addr=(reg_sp4-66);cvtflt64[0]=GetFloat4(reg_sp4-43)+GetFloat4(reg_sp4-45);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+95:ILDC*/memint32[reg_sp4-60]=+9
/*+96:MUL*/memint32[reg_sp4-59]=Math.imul(memint32[reg_sp4-71],memint32[reg_sp4-60]);
/*+97:FLDC*/{let addr=(reg_sp4-58);cvtflt64[0]=+2.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:FMUL*/{let addr=(reg_sp4-56);cvtflt64[0]=GetFloat4(+20)*GetFloat4(reg_sp4-58);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+99:I2F*/{let addr=(reg_sp4-54);cvtflt64[0]=memint32[reg_sp4-59];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+100:FADD*/{let addr=(reg_sp4-52);cvtflt64[0]=GetFloat4(reg_sp4-54)+GetFloat4(reg_sp4-56);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+101:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-52);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+102:NCALL*/SC_sin();
/*+103:MOV*//*8*/{let dst=(reg_sp4-50);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+104:FLDC*/{let addr=(reg_sp4-48);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+105:FMUL*/{let addr=(reg_sp4-46);cvtflt64[0]=GetFloat4(reg_sp4-50)*GetFloat4(reg_sp4-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+106:FLDC*/{let addr=(reg_sp4-44);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+107:FADD*/{let addr=(reg_sp4-64);cvtflt64[0]=GetFloat4(reg_sp4-44)+GetFloat4(reg_sp4-46);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+108:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-64);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+109:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-66);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+110:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-68);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+111:NCALL*/SC_rgb();
/*+112:NCALL*/SC_fin();
/*+113:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+114:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+12.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:NCALL*/SC_width();
/*+116:FLDC*/{let addr=(reg_sp4-60);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+117:FMUL*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(reg_sp4-60)*GetFloat4(reg_sp4-70);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+118:FLDC*/{let addr=(reg_sp4-56);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+119:FADD*/{let addr=(reg_sp4-62);cvtflt64[0]=GetFloat4(reg_sp4-56)+GetFloat4(reg_sp4-58);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+120:FLDC*/{let addr=(reg_sp4-60);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:FMUL*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(reg_sp4-62)*GetFloat4(reg_sp4-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+122:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+123:NCALL*/SC_alpha();
/*+124:NCALL*/SC_stroke();
/*+125:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-62);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+126:NCALL*/SC_alpha();
/*+127:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+128:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+129:NCALL*/SC_width();
/*+130:NCALL*/SC_stroke();
/*+131:MOV*//*4*/memint32[(reg_sp4-60)]=memint32[(reg_sp4-71)];
/*+132:INC*/memint32[reg_sp4-71]=memint32[reg_sp4-71]+1
/*+133:JMP*/reg_ip=3;
}
/*134*/
code[5]=function(){
/*+134:INT*/int_code=+10;interrupt=true;;reg_ip=6;
}
/*135*/
code[6]=function(){
/*+135:JMP*/reg_ip=2;
}
/*136*/
code[7]=function(){
/*+136:ILDC*/memint32[reg_sp4-72]=+0
/*+137:ADDSP*/reg_sp+=-284;reg_sp4=reg_sp>>2;
/*+138:RET*/reg_ip=regs.pop();
}
let start_addr=1
let start_rsp=88
let graphics=1
let G_SCREEN_SCALE=2
