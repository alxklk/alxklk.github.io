/* Native binds:
0: Time
1: snprintf
2: GetMouseState
3: GetKeyEvent
4: CountKeyEvents
5: gtext
6: M
7: l
8: close
9: clear
10: c
11: fill1
12: stroke
13: fin
14: rgb
15: alpha
16: width
17: t_0
18: t_x
19: t_y

*/
let natives=[
'Time','snprintf','GetMouseState','GetKeyEvent','CountKeyEvents','gtext','M','l',
'close','clear','c','fill1','stroke','fin','rgb','alpha',
'width','t_0','t_x','t_y'
]

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
%, i, \0, 2, 0, 4, 8, \0, J, o, i, n,  , t, h, e,
 , t, i, l, e, s, \0, S, c, o, r, e, s, \0, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
\-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
37, 105, 0, 50, 48, 52, 56, 0, 74, 111, 105, 110, 32, 116, 104, 101,
32, 116, 105, 108, 101, 115, 0, 83, 99, 111, 114, 101, 115, 0, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
255, 255, 255, 255
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
/*+10:ADDSP*/reg_sp+=+88;reg_sp4=reg_sp>>2;
/*+11:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-26)+GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+12:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+13:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+14:NCALL*/SC_M();
/*+15:ILDC*/memint32[reg_sp4-22]=+0
/*+16:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+17:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+18:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=3;}else{reg_ip=2;}
}
/*19*/
code[2]=function(){
/*+19:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+20:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+21:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+22:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+23:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+24:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+25:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+26:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+27:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+28:NCALL*/SC_c();;reg_ip=3;
}
/*29*/
code[3]=function(){
/*+29:ILDC*/memint32[reg_sp4-22]=+2
/*+30:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+31:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+32:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-28)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+33:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+34:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:NCALL*/SC_l();
/*+36:ILDC*/memint32[reg_sp4-22]=+0
/*+37:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+39:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=5;}else{reg_ip=4;}
}
/*40*/
code[4]=function(){
/*+40:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+42:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+43:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+44:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+45:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+46:NCALL*/SC_c();;reg_ip=5;
}
/*47*/
code[5]=function(){
/*+47:ILDC*/memint32[reg_sp4-22]=+2
/*+48:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+49:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+50:FSUB*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+51:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+52:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+53:NCALL*/SC_l();
/*+54:ILDC*/memint32[reg_sp4-22]=+0
/*+55:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+56:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+57:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=7;}else{reg_ip=6;}
}
/*58*/
code[6]=function(){
/*+58:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+59:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+60:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+61:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+62:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+63:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+64:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+65:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+66:NCALL*/SC_c();;reg_ip=7;
}
/*67*/
code[7]=function(){
/*+67:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:ILDC*/memint32[reg_sp4-20]=+2
/*+69:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-20];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+70:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FADD*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat4(reg_sp4-22)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+73:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-15);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+74:NCALL*/SC_l();
/*+75:ILDC*/memint32[reg_sp4-22]=+0
/*+76:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+77:FGR*/memint32[reg_sp4-19]=GetFloat4(reg_sp4-32) >GetFloat4(reg_sp4-21)
/*+78:JMPZ*/if(memint32[reg_sp4-19]==0){reg_ip=9;}else{reg_ip=8;}
}
/*79*/
code[8]=function(){
/*+79:FNEG*/{let addr=(reg_sp4-22);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+80:FNEG*/{let addr=(reg_sp4-20);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+82:FNEG*/{let addr=(reg_sp4-16);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+83:FNEG*/{let addr=(reg_sp4-14);cvtflt64[0]=-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+84:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+85:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+86:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+87:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+88:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+89:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+90:NCALL*/SC_c();;reg_ip=9;
}
/*91*/
code[9]=function(){
/*+91:NCALL*/SC_close();
/*+92:ADDSP*/reg_sp+=-88;reg_sp4=reg_sp>>2;
/*+93:RET*/reg_ip=regs.pop();
}
/*94*/
code[10]=function(){
/*+94:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+95:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+96:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+97:NCALL*/SC_M();
/*+98:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+99:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+100:NCALL*/SC_l();
/*+101:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+102:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+103:NCALL*/SC_l();
/*+104:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+105:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-4000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+106:NCALL*/SC_l();
/*+107:NCALL*/SC_close();
/*+108:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+109:RET*/reg_ip=regs.pop();
}
/*110*/
code[11]=function(){
/*+110:ADDSP*/reg_sp+=+496;reg_sp4=reg_sp>>2;
/*+111:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+112:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+113:NCALL*/SC_t_0();
/*+114:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+116:NCALL*/SC_t_x();
/*+117:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+118:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+119:NCALL*/SC_t_y();
/*+120:NCALL*/SC_Time();
/*+121:MOV*//*8*/{let dst=(reg_sp4-88);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+122:MOV*//*8*/{let dst=(reg_sp4-124);let src=(reg_sp4-88);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+123:NCALL*/SC_clear();
/*+124:CALL*/regs.push(12);reg_ip=10;
}
/*125*/
code[12]=function(){
/*+125:NCALL*/SC_fin();
/*+126:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.970000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+127:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+128:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+129:NCALL*/SC_rgb();
/*+130:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+131:NCALL*/SC_alpha();
/*+132:NCALL*/SC_fill1();
/*+133:NCALL*/SC_clear();
/*+134:ILDC*/memint32[reg_sp4-88]=+5
/*+135:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:FMUL*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:FLDC*/{let addr=(reg_sp4-83);cvtflt64[0]=+12.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:FADD*/{let addr=(reg_sp4-81);cvtflt64[0]=GetFloat4(reg_sp4-85)+GetFloat4(reg_sp4-83);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+139:ILDC*/memint32[reg_sp4-79]=+5
/*+140:I2F*/{let addr=(reg_sp4-78);cvtflt64[0]=memint32[reg_sp4-79];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+141:FMUL*/{let addr=(reg_sp4-76);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-78);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+142:FLDC*/{let addr=(reg_sp4-74);cvtflt64[0]=+12.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+143:FADD*/{let addr=(reg_sp4-72);cvtflt64[0]=GetFloat4(reg_sp4-76)+GetFloat4(reg_sp4-74);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+144:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+145:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-72);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+146:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-81);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+147:MOV*//*8*/{let dst=(reg_sp4-4);let src=(+28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+148:MOV*//*8*/{let dst=(reg_sp4-2);let src=(+26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+149:CALL*/regs.push(13);reg_ip=1;
}
/*150*/
code[13]=function(){
/*+150:NCALL*/SC_fin();
/*+151:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+152:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.450000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:NCALL*/SC_rgb();
/*+155:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+156:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+157:NCALL*/SC_width();
/*+158:NCALL*/SC_stroke();
/*+159:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+160:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+161:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+162:NCALL*/SC_rgb();
/*+163:NCALL*/SC_fill1();
/*+164:NCALL*/SC_clear();
/*+165:ILDC*/memint32[reg_sp4-122]=+0;reg_ip=14;
}
/*166*/
code[14]=function(){
/*+166:ILDC*/memint32[reg_sp4-88]=+5
/*+167:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-122] <memint32[reg_sp4-88]
/*+168:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=20;}else{reg_ip=15;}
}
/*169*/
code[15]=function(){
/*+169:ILDC*/memint32[reg_sp4-121]=+0;reg_ip=16;
}
/*170*/
code[16]=function(){
/*+170:ILDC*/memint32[reg_sp4-88]=+5
/*+171:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-121] <memint32[reg_sp4-88]
/*+172:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=19;}else{reg_ip=17;}
}
/*173*/
code[17]=function(){
/*+173:ILDC*/memint32[reg_sp4-88]=+6
/*+174:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+175:FADD*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+26)+GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+176:ILDC*/memint32[reg_sp4-83]=+3
/*+177:I2F*/{let addr=(reg_sp4-82);cvtflt64[0]=memint32[reg_sp4-83];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+178:FADD*/{let addr=(reg_sp4-80);cvtflt64[0]=GetFloat4(reg_sp4-85)+GetFloat4(reg_sp4-82);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:I2F*/{let addr=(reg_sp4-78);cvtflt64[0]=memint32[reg_sp4-121];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:FMUL*/{let addr=(reg_sp4-76);cvtflt64[0]=GetFloat4(reg_sp4-78)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+181:FADD*/{let addr=(reg_sp4-74);cvtflt64[0]=GetFloat4(reg_sp4-80)+GetFloat4(reg_sp4-76);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+182:ILDC*/memint32[reg_sp4-72]=+6
/*+183:I2F*/{let addr=(reg_sp4-71);cvtflt64[0]=memint32[reg_sp4-72];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:FADD*/{let addr=(reg_sp4-69);cvtflt64[0]=GetFloat4(+28)+GetFloat4(reg_sp4-71);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+185:ILDC*/memint32[reg_sp4-67]=+3
/*+186:I2F*/{let addr=(reg_sp4-66);cvtflt64[0]=memint32[reg_sp4-67];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+187:FADD*/{let addr=(reg_sp4-64);cvtflt64[0]=GetFloat4(reg_sp4-69)+GetFloat4(reg_sp4-66);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+188:I2F*/{let addr=(reg_sp4-62);cvtflt64[0]=memint32[reg_sp4-122];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+189:FMUL*/{let addr=(reg_sp4-60);cvtflt64[0]=GetFloat4(reg_sp4-62)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:FADD*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(reg_sp4-64)+GetFloat4(reg_sp4-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:ILDC*/memint32[reg_sp4-56]=+6
/*+192:I2F*/{let addr=(reg_sp4-55);cvtflt64[0]=memint32[reg_sp4-56];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+193:FSUB*/{let addr=(reg_sp4-53);cvtflt64[0]=GetFloat4(+24)-GetFloat4(reg_sp4-55);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+194:ILDC*/memint32[reg_sp4-51]=+6
/*+195:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+196:FSUB*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat4(+24)-GetFloat4(reg_sp4-50);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+197:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+198:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+199:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-53);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+200:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+201:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-74);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+202:CALL*/regs.push(18);reg_ip=1;
}
/*203*/
code[18]=function(){
/*+203:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-121)];
/*+204:INC*/memint32[reg_sp4-121]=memint32[reg_sp4-121]+1
/*+205:JMP*/reg_ip=16;
}
/*206*/
code[19]=function(){
/*+206:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-122)];
/*+207:INC*/memint32[reg_sp4-122]=memint32[reg_sp4-122]+1
/*+208:JMP*/reg_ip=14;
}
/*209*/
code[20]=function(){
/*+209:NCALL*/SC_fin();
/*+210:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+211:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.450000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+212:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+213:NCALL*/SC_rgb();
/*+214:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+215:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+216:NCALL*/SC_width();
/*+217:NCALL*/SC_stroke();
/*+218:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.780000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+219:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.740000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+220:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+221:NCALL*/SC_rgb();
/*+222:NCALL*/SC_fill1();
/*+223:ILDC*/memint32[reg_sp4-120]=+0;reg_ip=21;
}
/*224*/
code[21]=function(){
/*+224:ILDC*/memint32[reg_sp4-88]=+5
/*+225:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-120] <memint32[reg_sp4-88]
/*+226:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=58;}else{reg_ip=22;}
}
/*227*/
code[22]=function(){
/*+227:ILDC*/memint32[reg_sp4-119]=+0;reg_ip=23;
}
/*228*/
code[23]=function(){
/*+228:ILDC*/memint32[reg_sp4-88]=+5
/*+229:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-119] <memint32[reg_sp4-88]
/*+230:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=57;}else{reg_ip=24;}
}
/*231*/
code[24]=function(){
/*+231:ILDC*/memint32[reg_sp4-88]=+5
/*+232:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-120],memint32[reg_sp4-88]);
/*+233:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-119]+memint32[reg_sp4-87]
/*+234:LEA*/memint32[reg_sp4-85]=+120
/*+235:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*4
/*+236:ILDC*/memint32[reg_sp4-83]=+1
/*+237:SHL*/memint32[reg_sp4-118]=memint32[reg_sp4-83]<<GetInt(memint32[(reg_sp4-85)])
/*+238:ILDC*/memint32[reg_sp4-88]=+1
/*+239:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-118] >memint32[reg_sp4-88]
/*+240:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=56;}else{reg_ip=25;}
}
/*241*/
code[25]=function(){
/*+241:NCALL*/SC_clear();
/*+242:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+243:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+244:NCALL*/SC_t_0();
/*+245:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+246:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+247:NCALL*/SC_t_x();
/*+248:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+250:NCALL*/SC_t_y();
/*+251:ILDC*/memint32[reg_sp4-88]=+5
/*+252:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-120],memint32[reg_sp4-88]);
/*+253:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-119]+memint32[reg_sp4-87]
/*+254:LEA*/memint32[reg_sp4-85]=+220
/*+255:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+256:MOV*/{let addr=memint32[(reg_sp4-85)];mem8.copyWithin(reg_sp-468,addr,addr+8);}
/*+257:ILDC*/memint32[reg_sp4-88]=+5
/*+258:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-120],memint32[reg_sp4-88]);
/*+259:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-119]+memint32[reg_sp4-87]
/*+260:LEA*/memint32[reg_sp4-85]=+420
/*+261:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+262:FMUL*/{let addr=(reg_sp4-115);cvtflt64[0]=GetFloat(memint32[(reg_sp4-85)])*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+263:ILDC*/memint32[reg_sp4-88]=+5
/*+264:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-120],memint32[reg_sp4-88]);
/*+265:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-119]+memint32[reg_sp4-87]
/*+266:LEA*/memint32[reg_sp4-85]=+620
/*+267:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+268:FMUL*/{let addr=(reg_sp4-113);cvtflt64[0]=GetFloat(memint32[(reg_sp4-85)])*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+269:ILDC*/memint32[reg_sp4-88]=+6
/*+270:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+271:FADD*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+26)+GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+272:ILDC*/memint32[reg_sp4-83]=+3
/*+273:I2F*/{let addr=(reg_sp4-82);cvtflt64[0]=memint32[reg_sp4-83];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:FADD*/{let addr=(reg_sp4-80);cvtflt64[0]=GetFloat4(reg_sp4-85)+GetFloat4(reg_sp4-82);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+275:I2F*/{let addr=(reg_sp4-78);cvtflt64[0]=memint32[reg_sp4-119];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+276:FMUL*/{let addr=(reg_sp4-76);cvtflt64[0]=GetFloat4(reg_sp4-78)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+277:FADD*/{let addr=(reg_sp4-74);cvtflt64[0]=GetFloat4(reg_sp4-80)+GetFloat4(reg_sp4-76);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+278:FADD*/{let addr=(reg_sp4-72);cvtflt64[0]=GetFloat4(reg_sp4-74)+GetFloat4(reg_sp4-115);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+279:ILDC*/memint32[reg_sp4-70]=+2
/*+280:I2F*/{let addr=(reg_sp4-69);cvtflt64[0]=memint32[reg_sp4-70];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+281:FDIV*/{let addr=(reg_sp4-67);cvtflt64[0]=GetFloat4(+24)/GetFloat4(reg_sp4-69);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+282:ILDC*/memint32[reg_sp4-65]=+1
/*+283:I2F*/{let addr=(reg_sp4-64);cvtflt64[0]=memint32[reg_sp4-65];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+284:FSUB*/{let addr=(reg_sp4-62);cvtflt64[0]=GetFloat4(reg_sp4-64)-GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+285:FMUL*/{let addr=(reg_sp4-60);cvtflt64[0]=GetFloat4(reg_sp4-67)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+286:FADD*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(reg_sp4-72)+GetFloat4(reg_sp4-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+287:ILDC*/memint32[reg_sp4-56]=+6
/*+288:I2F*/{let addr=(reg_sp4-55);cvtflt64[0]=memint32[reg_sp4-56];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+289:FADD*/{let addr=(reg_sp4-53);cvtflt64[0]=GetFloat4(+28)+GetFloat4(reg_sp4-55);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+290:ILDC*/memint32[reg_sp4-51]=+3
/*+291:I2F*/{let addr=(reg_sp4-50);cvtflt64[0]=memint32[reg_sp4-51];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+292:FADD*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat4(reg_sp4-53)+GetFloat4(reg_sp4-50);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+293:I2F*/{let addr=(reg_sp4-46);cvtflt64[0]=memint32[reg_sp4-120];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+294:FMUL*/{let addr=(reg_sp4-44);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+295:FADD*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-48)+GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+296:FADD*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-42)+GetFloat4(reg_sp4-113);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+297:ILDC*/memint32[reg_sp4-38]=+2
/*+298:I2F*/{let addr=(reg_sp4-37);cvtflt64[0]=memint32[reg_sp4-38];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+299:FDIV*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(+24)/GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+300:ILDC*/memint32[reg_sp4-33]=+1
/*+301:I2F*/{let addr=(reg_sp4-32);cvtflt64[0]=memint32[reg_sp4-33];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+302:FSUB*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+303:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+304:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-40)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+305:ILDC*/memint32[reg_sp4-24]=+6
/*+306:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+307:FSUB*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(+24)-GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+308:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+309:ILDC*/memint32[reg_sp4-17]=+6
/*+310:I2F*/{let addr=(reg_sp4-16);cvtflt64[0]=memint32[reg_sp4-17];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+311:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(+24)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+312:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)*GetFloat4(reg_sp4-117);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+313:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+315:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+316:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+317:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+318:CALL*/regs.push(26);reg_ip=1;
}
/*319*/
code[26]=function(){
/*+319:NCALL*/SC_fin();
/*+320:ILDC*/memint32[reg_sp4-88]=+1
/*+321:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+322:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=28;}else{reg_ip=27;}
}
/*323*/
code[27]=function(){
/*+323:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+324:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+325:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+326:NCALL*/SC_rgb();
/*+327:JMP*/reg_ip=51;
}
/*328*/
code[28]=function(){
/*+328:ILDC*/memint32[reg_sp4-88]=+2
/*+329:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+330:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=30;}else{reg_ip=29;}
}
/*331*/
code[29]=function(){
/*+331:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+332:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.970000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+333:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:NCALL*/SC_rgb();
/*+335:JMP*/reg_ip=51;
}
/*336*/
code[30]=function(){
/*+336:ILDC*/memint32[reg_sp4-88]=+4
/*+337:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+338:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=32;}else{reg_ip=31;}
}
/*339*/
code[31]=function(){
/*+339:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+340:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+341:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+342:NCALL*/SC_rgb();
/*+343:JMP*/reg_ip=51;
}
/*344*/
code[32]=function(){
/*+344:ILDC*/memint32[reg_sp4-88]=+8
/*+345:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+346:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=34;}else{reg_ip=33;}
}
/*347*/
code[33]=function(){
/*+347:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+348:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+349:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+350:NCALL*/SC_rgb();
/*+351:JMP*/reg_ip=51;
}
/*352*/
code[34]=function(){
/*+352:ILDC*/memint32[reg_sp4-88]=+16
/*+353:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+354:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=36;}else{reg_ip=35;}
}
/*355*/
code[35]=function(){
/*+355:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+356:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+357:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+358:NCALL*/SC_rgb();
/*+359:JMP*/reg_ip=51;
}
/*360*/
code[36]=function(){
/*+360:ILDC*/memint32[reg_sp4-88]=+32
/*+361:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+362:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=38;}else{reg_ip=37;}
}
/*363*/
code[37]=function(){
/*+363:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+364:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+365:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+366:NCALL*/SC_rgb();
/*+367:JMP*/reg_ip=51;
}
/*368*/
code[38]=function(){
/*+368:ILDC*/memint32[reg_sp4-88]=+64
/*+369:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+370:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=40;}else{reg_ip=39;}
}
/*371*/
code[39]=function(){
/*+371:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+372:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+373:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+374:NCALL*/SC_rgb();
/*+375:JMP*/reg_ip=51;
}
/*376*/
code[40]=function(){
/*+376:ILDC*/memint32[reg_sp4-88]=+128
/*+377:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+378:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=42;}else{reg_ip=41;}
}
/*379*/
code[41]=function(){
/*+379:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+380:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+381:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+382:NCALL*/SC_rgb();
/*+383:JMP*/reg_ip=51;
}
/*384*/
code[42]=function(){
/*+384:ILDC*/memint32[reg_sp4-88]=+256
/*+385:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+386:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=44;}else{reg_ip=43;}
}
/*387*/
code[43]=function(){
/*+387:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+388:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+389:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+390:NCALL*/SC_rgb();
/*+391:JMP*/reg_ip=51;
}
/*392*/
code[44]=function(){
/*+392:ILDC*/memint32[reg_sp4-88]=+512
/*+393:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+394:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=46;}else{reg_ip=45;}
}
/*395*/
code[45]=function(){
/*+395:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+396:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+397:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+398:NCALL*/SC_rgb();
/*+399:JMP*/reg_ip=51;
}
/*400*/
code[46]=function(){
/*+400:ILDC*/memint32[reg_sp4-88]=+1024
/*+401:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+402:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=48;}else{reg_ip=47;}
}
/*403*/
code[47]=function(){
/*+403:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+404:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.950000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+405:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+406:NCALL*/SC_rgb();
/*+407:JMP*/reg_ip=51;
}
/*408*/
code[48]=function(){
/*+408:ILDC*/memint32[reg_sp4-88]=+2048
/*+409:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+410:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=50;}else{reg_ip=49;}
}
/*411*/
code[49]=function(){
/*+411:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+412:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+413:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+414:NCALL*/SC_rgb();
/*+415:JMP*/reg_ip=51;
}
/*416*/
code[50]=function(){
/*+416:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+417:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+418:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+419:NCALL*/SC_rgb();;reg_ip=51;
}
/*420*/
code[51]=function(){
/*+420:NCALL*/SC_fill1();
/*+421:ILDC*/memint32[reg_sp4-88]=+2048
/*+422:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+423:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=53;}else{reg_ip=52;}
}
/*424*/
code[52]=function(){
/*+424:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+425:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+426:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+427:NCALL*/SC_rgb();
/*+428:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+429:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+430:NCALL*/SC_width();
/*+431:NCALL*/SC_stroke();
/*+432:JMP*/reg_ip=55;
}
/*433*/
code[53]=function(){
/*+433:ILDC*/memint32[reg_sp4-88]=+1024
/*+434:EQ*/memint32[reg_sp4-87]=memint32[reg_sp4-118]==memint32[reg_sp4-88]
/*+435:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=55;}else{reg_ip=54;}
}
/*436*/
code[54]=function(){
/*+436:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+437:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+438:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+439:NCALL*/SC_rgb();
/*+440:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+441:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+442:NCALL*/SC_width();
/*+443:NCALL*/SC_stroke();;reg_ip=55;
}
/*444*/
code[55]=function(){
/*+444:NCALL*/SC_clear();;reg_ip=56;
}
/*445*/
code[56]=function(){
/*+445:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-119)];
/*+446:INC*/memint32[reg_sp4-119]=memint32[reg_sp4-119]+1
/*+447:JMP*/reg_ip=23;
}
/*448*/
code[57]=function(){
/*+448:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-120)];
/*+449:INC*/memint32[reg_sp4-120]=memint32[reg_sp4-120]+1
/*+450:JMP*/reg_ip=21;
}
/*451*/
code[58]=function(){
/*+451:ILDC*/memint32[reg_sp4-111]=+0;reg_ip=59;
}
/*452*/
code[59]=function(){
/*+452:ILDC*/memint32[reg_sp4-88]=+5
/*+453:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-111] <memint32[reg_sp4-88]
/*+454:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=74;}else{reg_ip=60;}
}
/*455*/
code[60]=function(){
/*+455:ILDC*/memint32[reg_sp4-110]=+0;reg_ip=61;
}
/*456*/
code[61]=function(){
/*+456:ILDC*/memint32[reg_sp4-88]=+5
/*+457:LS*/memint32[reg_sp4-87]=memint32[reg_sp4-110] <memint32[reg_sp4-88]
/*+458:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=73;}else{reg_ip=62;}
}
/*459*/
code[62]=function(){
/*+459:ILDC*/memint32[reg_sp4-88]=+5
/*+460:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-111],memint32[reg_sp4-88]);
/*+461:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-110]+memint32[reg_sp4-87]
/*+462:LEA*/memint32[reg_sp4-85]=+120
/*+463:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*4
/*+464:ILDC*/memint32[reg_sp4-83]=+1
/*+465:SHL*/memint32[reg_sp4-109]=memint32[reg_sp4-83]<<GetInt(memint32[(reg_sp4-85)])
/*+466:ILDC*/memint32[reg_sp4-88]=+1
/*+467:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-109] >memint32[reg_sp4-88]
/*+468:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=72;}else{reg_ip=63;}
}
/*469*/
code[63]=function(){
/*+469:FLDC*/{let addr=(reg_sp4-108);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+470:FLDC*/{let addr=(reg_sp4-106);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+471:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+472:FMUL*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+473:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+474:FMUL*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+475:FLDC*/{let addr=(reg_sp4-100);cvtflt64[0]=+1.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+476:ILDC*/memint32[reg_sp4-88]=+10000
/*+477:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-109] >memint32[reg_sp4-88]
/*+478:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=65;}else{reg_ip=64;}
}
/*479*/
code[64]=function(){
/*+479:FLDC*/{let addr=(reg_sp4-108);cvtflt64[0]=+0.330000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+480:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+481:FMUL*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+482:FLDC*/{let addr=(reg_sp4-106);cvtflt64[0]=+0.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+483:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.570000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+484:FMUL*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+485:FLDC*/{let addr=(reg_sp4-100);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+486:JMP*/reg_ip=71;
}
/*487*/
code[65]=function(){
/*+487:ILDC*/memint32[reg_sp4-88]=+1000
/*+488:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-109] >memint32[reg_sp4-88]
/*+489:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=67;}else{reg_ip=66;}
}
/*490*/
code[66]=function(){
/*+490:FLDC*/{let addr=(reg_sp4-108);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+491:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.110000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+492:FMUL*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+493:FLDC*/{let addr=(reg_sp4-106);cvtflt64[0]=+0.450000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+494:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+495:FMUL*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+496:FLDC*/{let addr=(reg_sp4-100);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+497:JMP*/reg_ip=71;
}
/*498*/
code[67]=function(){
/*+498:ILDC*/memint32[reg_sp4-88]=+100
/*+499:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-109] >memint32[reg_sp4-88]
/*+500:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=69;}else{reg_ip=68;}
}
/*501*/
code[68]=function(){
/*+501:FLDC*/{let addr=(reg_sp4-108);cvtflt64[0]=+0.550000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+502:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.120000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:FMUL*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+504:FLDC*/{let addr=(reg_sp4-106);cvtflt64[0]=+0.650000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+505:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.650000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+506:FMUL*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+507:FLDC*/{let addr=(reg_sp4-100);cvtflt64[0]=+1.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+508:JMP*/reg_ip=71;
}
/*509*/
code[69]=function(){
/*+509:ILDC*/memint32[reg_sp4-88]=+10
/*+510:GR*/memint32[reg_sp4-87]=memint32[reg_sp4-109] >memint32[reg_sp4-88]
/*+511:JMPZ*/if(memint32[reg_sp4-87]==0){reg_ip=71;}else{reg_ip=70;}
}
/*512*/
code[70]=function(){
/*+512:FLDC*/{let addr=(reg_sp4-108);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+513:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.180000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+514:FMUL*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+515:FLDC*/{let addr=(reg_sp4-106);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:FLDC*/{let addr=(reg_sp4-88);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+517:FMUL*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(+24)*GetFloat4(reg_sp4-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+518:FLDC*/{let addr=(reg_sp4-100);cvtflt64[0]=+1.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=71;
}
/*519*/
code[71]=function(){
/*+519:NCALL*/SC_fill1();
/*+520:NCALL*/SC_clear();
/*+521:ILDC*/memint32[reg_sp4-88]=+5
/*+522:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-111],memint32[reg_sp4-88]);
/*+523:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-110]+memint32[reg_sp4-87]
/*+524:LEA*/memint32[reg_sp4-85]=+220
/*+525:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+526:MOV*/{let addr=memint32[(reg_sp4-85)];mem8.copyWithin(reg_sp-392,addr,addr+8);}
/*+527:FMUL*/{let addr=(reg_sp4-88);cvtflt64[0]=GetFloat4(reg_sp4-98)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+528:ILDC*/memint32[reg_sp4-86]=+51
/*+529:I2F*/{let addr=(reg_sp4-85);cvtflt64[0]=memint32[reg_sp4-86];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+530:FDIV*/{let addr=(reg_sp4-83);cvtflt64[0]=GetFloat4(reg_sp4-88)/GetFloat4(reg_sp4-85);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+531:FMUL*/{let addr=(reg_sp4-108);cvtflt64[0]=GetFloat4(reg_sp4-108)*GetFloat4(reg_sp4-83);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+532:MOV*//*8*/{let dst=(reg_sp4-81);let src=(reg_sp4-108);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+533:FMUL*/{let addr=(reg_sp4-88);cvtflt64[0]=GetFloat4(reg_sp4-98)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+534:ILDC*/memint32[reg_sp4-86]=+51
/*+535:I2F*/{let addr=(reg_sp4-85);cvtflt64[0]=memint32[reg_sp4-86];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+536:FDIV*/{let addr=(reg_sp4-83);cvtflt64[0]=GetFloat4(reg_sp4-88)/GetFloat4(reg_sp4-85);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+537:FMUL*/{let addr=(reg_sp4-106);cvtflt64[0]=GetFloat4(reg_sp4-106)*GetFloat4(reg_sp4-83);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+538:MOV*//*8*/{let dst=(reg_sp4-81);let src=(reg_sp4-106);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+539:ILDC*/memint32[reg_sp4-88]=+5
/*+540:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-111],memint32[reg_sp4-88]);
/*+541:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-110]+memint32[reg_sp4-87]
/*+542:LEA*/memint32[reg_sp4-85]=+420
/*+543:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+544:FMUL*/{let addr=(reg_sp4-83);cvtflt64[0]=GetFloat(memint32[(reg_sp4-85)])*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+545:FADD*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(reg_sp4-104)+GetFloat4(reg_sp4-83);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+546:MOV*//*8*/{let dst=(reg_sp4-81);let src=(reg_sp4-104);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+547:ILDC*/memint32[reg_sp4-88]=+5
/*+548:MUL*/memint32[reg_sp4-87]=Math.imul(memint32[reg_sp4-111],memint32[reg_sp4-88]);
/*+549:ADD*/memint32[reg_sp4-86]=memint32[reg_sp4-110]+memint32[reg_sp4-87]
/*+550:LEA*/memint32[reg_sp4-85]=+620
/*+551:IDX*/memint32[reg_sp4-85]=memint32[reg_sp4-85]+memint32[reg_sp4-86]*8
/*+552:FMUL*/{let addr=(reg_sp4-83);cvtflt64[0]=GetFloat(memint32[(reg_sp4-85)])*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+553:FADD*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(reg_sp4-102)+GetFloat4(reg_sp4-83);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+554:MOV*//*8*/{let dst=(reg_sp4-81);let src=(reg_sp4-102);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+555:ILDC*/memint32[reg_sp4-88]=+4
/*+556:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+557:FDIV*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+24)/GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+558:FLDC*/{let addr=(reg_sp4-83);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+559:FSUB*/{let addr=(reg_sp4-81);cvtflt64[0]=GetFloat4(reg_sp4-83)-GetFloat4(reg_sp4-98);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+560:FMUL*/{let addr=(reg_sp4-79);cvtflt64[0]=GetFloat4(reg_sp4-85)*GetFloat4(reg_sp4-81);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+561:FADD*/{let addr=(reg_sp4-104);cvtflt64[0]=GetFloat4(reg_sp4-104)+GetFloat4(reg_sp4-79);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+562:MOV*//*8*/{let dst=(reg_sp4-77);let src=(reg_sp4-104);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+563:ILDC*/memint32[reg_sp4-88]=+4
/*+564:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+565:FDIV*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+24)/GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+566:FLDC*/{let addr=(reg_sp4-83);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+567:FSUB*/{let addr=(reg_sp4-81);cvtflt64[0]=GetFloat4(reg_sp4-83)-GetFloat4(reg_sp4-98);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+568:FMUL*/{let addr=(reg_sp4-79);cvtflt64[0]=GetFloat4(reg_sp4-85)*GetFloat4(reg_sp4-81);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+569:FSUB*/{let addr=(reg_sp4-102);cvtflt64[0]=GetFloat4(reg_sp4-102)-GetFloat4(reg_sp4-79);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+570:MOV*//*8*/{let dst=(reg_sp4-77);let src=(reg_sp4-102);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+571:ILDC*/memint32[reg_sp4-88]=+6
/*+572:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+573:FADD*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(+26)+GetFloat4(reg_sp4-87);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+574:I2F*/{let addr=(reg_sp4-83);cvtflt64[0]=memint32[reg_sp4-110];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+575:FMUL*/{let addr=(reg_sp4-81);cvtflt64[0]=GetFloat4(reg_sp4-83)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+576:FADD*/{let addr=(reg_sp4-79);cvtflt64[0]=GetFloat4(reg_sp4-85)+GetFloat4(reg_sp4-81);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+577:FADD*/{let addr=(reg_sp4-77);cvtflt64[0]=GetFloat4(reg_sp4-79)+GetFloat4(reg_sp4-104);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+578:ILDC*/memint32[reg_sp4-75]=+6
/*+579:I2F*/{let addr=(reg_sp4-74);cvtflt64[0]=memint32[reg_sp4-75];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+580:FADD*/{let addr=(reg_sp4-72);cvtflt64[0]=GetFloat4(+28)+GetFloat4(reg_sp4-74);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+581:I2F*/{let addr=(reg_sp4-70);cvtflt64[0]=memint32[reg_sp4-111];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+582:FMUL*/{let addr=(reg_sp4-68);cvtflt64[0]=GetFloat4(reg_sp4-70)*GetFloat4(+24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+583:FADD*/{let addr=(reg_sp4-66);cvtflt64[0]=GetFloat4(reg_sp4-72)+GetFloat4(reg_sp4-68);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+584:FADD*/{let addr=(reg_sp4-64);cvtflt64[0]=GetFloat4(reg_sp4-66)+GetFloat4(reg_sp4-102);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+585:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-64);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+586:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-77);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+587:NCALL*/SC_t_0();
/*+588:ILDC*/memint32[reg_sp4-88]=+10
/*+589:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+590:FMUL*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(reg_sp4-87)*GetFloat4(reg_sp4-108);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+591:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+592:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-85);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+593:NCALL*/SC_t_x();
/*+594:ILDC*/memint32[reg_sp4-88]=-13
/*+595:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+596:FMUL*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(reg_sp4-87)*GetFloat4(reg_sp4-106);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+597:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-85);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+598:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+599:NCALL*/SC_t_y();
/*+600:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-109)];
/*+601:ILDC*/memint32[reg_sp4-4]=+64
/*+602:ILDC*/memint32[reg_sp4-3]=+15
/*+603:LEA*/memint32[reg_sp4-87]=reg_sp-384
/*+604:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-87)];
/*+605:NCALL*/SC_snprintf();
/*+606:LEA*/memint32[reg_sp4-87]=reg_sp-384
/*+607:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-87)];
/*+608:NCALL*/SC_gtext();
/*+609:NCALL*/SC_fin();
/*+610:ILDC*/memint32[reg_sp4-88]=+2
/*+611:I2F*/{let addr=(reg_sp4-87);cvtflt64[0]=memint32[reg_sp4-88];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+612:FMUL*/{let addr=(reg_sp4-85);cvtflt64[0]=GetFloat4(reg_sp4-87)*GetFloat4(reg_sp4-100);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+613:ILDC*/memint32[reg_sp4-83]=+2
/*+614:I2F*/{let addr=(reg_sp4-82);cvtflt64[0]=memint32[reg_sp4-83];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+615:FMUL*/{let addr=(reg_sp4-80);cvtflt64[0]=GetFloat4(reg_sp4-82)*GetFloat4(reg_sp4-100);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+616:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-80);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+617:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-85);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+618:NCALL*/SC_width();
/*+619:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+620:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+621:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+622:NCALL*/SC_rgb();
/*+623:NCALL*/SC_stroke();
/*+624:NCALL*/SC_clear();;reg_ip=72;
}
/*625*/
code[72]=function(){
/*+625:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-110)];
/*+626:INC*/memint32[reg_sp4-110]=memint32[reg_sp4-110]+1
/*+627:JMP*/reg_ip=61;
}
/*628*/
code[73]=function(){
/*+628:MOV*//*4*/memint32[(reg_sp4-88)]=memint32[(reg_sp4-111)];
/*+629:INC*/memint32[reg_sp4-111]=memint32[reg_sp4-111]+1
/*+630:JMP*/reg_ip=59;
}
/*631*/
code[74]=function(){
/*+631:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+632:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+633:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+634:NCALL*/SC_rgb();
/*+635:NCALL*/SC_clear();
/*+636:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+90.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+637:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+638:NCALL*/SC_t_0();
/*+639:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+640:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+16.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+641:NCALL*/SC_t_x();
/*+642:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-20.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+643:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+644:NCALL*/SC_t_y();
/*+645:ILDC*/memint32[reg_sp4-2]=+67
/*+646:NCALL*/SC_gtext();
/*+647:NCALL*/SC_fin();
/*+648:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+649:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+650:NCALL*/SC_width();
/*+651:NCALL*/SC_stroke();
/*+652:NCALL*/SC_clear();
/*+653:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+140.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+654:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+655:NCALL*/SC_t_0();
/*+656:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+657:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+658:NCALL*/SC_t_x();
/*+659:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-12.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+660:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+661:NCALL*/SC_t_y();
/*+662:ILDC*/memint32[reg_sp4-2]=+72
/*+663:NCALL*/SC_gtext();
/*+664:NCALL*/SC_fin();
/*+665:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+666:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+667:NCALL*/SC_width();
/*+668:NCALL*/SC_stroke();
/*+669:NCALL*/SC_clear();
/*+670:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+671:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+290.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+672:NCALL*/SC_t_0();
/*+673:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+674:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+675:NCALL*/SC_t_x();
/*+676:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=-8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+677:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+678:NCALL*/SC_t_y();
/*+679:ILDC*/memint32[reg_sp4-2]=+87
/*+680:NCALL*/SC_gtext();
/*+681:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(+207)];
/*+682:ILDC*/memint32[reg_sp4-4]=+64
/*+683:ILDC*/memint32[reg_sp4-3]=+15
/*+684:LEA*/memint32[reg_sp4-87]=reg_sp-368
/*+685:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-87)];
/*+686:NCALL*/SC_snprintf();
/*+687:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+90.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+688:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+290.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+689:NCALL*/SC_t_0();
/*+690:LEA*/memint32[reg_sp4-87]=reg_sp-368
/*+691:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-87)];
/*+692:NCALL*/SC_gtext();
/*+693:NCALL*/SC_fin();
/*+694:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+695:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+696:NCALL*/SC_width();
/*+697:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+698:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+699:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+700:NCALL*/SC_rgb();
/*+701:NCALL*/SC_stroke();
/*+702:ADDSP*/reg_sp+=-496;reg_sp4=reg_sp>>2;
/*+703:RET*/reg_ip=regs.pop();
}
/*704*/
code[75]=function(){
/*+704:ADDSP*/reg_sp+=+60;reg_sp4=reg_sp>>2;
/*+705:ILDC*/memint32[reg_sp4-15]=+0
/*+706:ILDC*/memint32[reg_sp4-14]=+0;reg_ip=76;
}
/*707*/
code[76]=function(){
/*+707:ILDC*/memint32[reg_sp4-8]=+5
/*+708:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-14] <memint32[reg_sp4-8]
/*+709:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=87;}else{reg_ip=77;}
}
/*710*/
code[77]=function(){
/*+710:ILDC*/memint32[reg_sp4-13]=-1
/*+711:ILDC*/memint32[reg_sp4-12]=-1
/*+712:ILDC*/memint32[reg_sp4-11]=+0
/*+713:ILDC*/memint32[reg_sp4-10]=+0;reg_ip=78;
}
/*714*/
code[78]=function(){
/*+714:ILDC*/memint32[reg_sp4-8]=+5
/*+715:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-10] <memint32[reg_sp4-8]
/*+716:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=86;}else{reg_ip=79;}
}
/*717*/
code[79]=function(){
/*+717:ILDC*/memint32[reg_sp4-8]=+5
/*+718:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+719:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-10]+memint32[reg_sp4-7]
/*+720:LEA*/memint32[reg_sp4-5]=+120
/*+721:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+722:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-36,addr,addr+4);}
/*+723:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=85;}else{reg_ip=80;}
}
/*724*/
code[80]=function(){
/*+724:ILDC*/memint32[reg_sp4-8]=+5
/*+725:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+726:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-10]+memint32[reg_sp4-7]
/*+727:LEA*/memint32[reg_sp4-5]=+120
/*+728:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+729:ILDC*/PutInt(memint32[(reg_sp4-5)],+0)
/*+730:EQ*/memint32[reg_sp4-8]=memint32[reg_sp4-9]==memint32[reg_sp4-13]
/*+731:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=82;}else{reg_ip=81;}
}
/*732*/
code[81]=function(){
/*+732:ILDC*/memint32[reg_sp4-8]=+5
/*+733:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+734:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+735:LEA*/memint32[reg_sp4-5]=+120
/*+736:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+737:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-12,addr,addr+4);}
/*+738:INC*/PutInt(memint32[(reg_sp4-5)],GetInt(memint32[(reg_sp4-5)])+1)
/*+739:ILDC*/memint32[reg_sp4-8]=+5
/*+740:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+741:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+742:LEA*/memint32[reg_sp4-5]=+120
/*+743:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+744:ILDC*/memint32[reg_sp4-3]=+1
/*+745:SHL*/memint32[reg_sp4-2]=memint32[reg_sp4-3]<<GetInt(memint32[(reg_sp4-5)])
/*+746:ADD*/memint32[+207]=memint32[+207]+memint32[reg_sp4-2]
/*+747:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(+207)];
/*+748:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+749:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1
/*+750:ILDC*/memint32[reg_sp4-8]=+5
/*+751:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+752:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+753:LEA*/memint32[reg_sp4-5]=+420
/*+754:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+755:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-12]
/*+756:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+757:ILDC*/memint32[reg_sp4-12]=-1
/*+758:ILDC*/memint32[reg_sp4-13]=-1
/*+759:JMP*/reg_ip=85;
}
/*760*/
code[82]=function(){
/*+760:NE*/memint32[reg_sp4-8]=memint32[reg_sp4-11]!=memint32[reg_sp4-10]
/*+761:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=84;}else{reg_ip=83;}
}
/*762*/
code[83]=function(){
/*+762:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+763:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1;reg_ip=84;
}
/*764*/
code[84]=function(){
/*+764:ILDC*/memint32[reg_sp4-8]=+5
/*+765:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+766:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-11]+memint32[reg_sp4-7]
/*+767:LEA*/memint32[reg_sp4-5]=+120
/*+768:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+769:MOV*/{let addr=reg_sp-36;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+4);}
/*+770:ILDC*/memint32[reg_sp4-8]=+5
/*+771:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+772:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-11]+memint32[reg_sp4-7]
/*+773:LEA*/memint32[reg_sp4-5]=+420
/*+774:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+775:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-11]
/*+776:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+777:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-11)];
/*+778:MOV*//*4*/memint32[(reg_sp4-13)]=memint32[(reg_sp4-9)];
/*+779:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-11)];
/*+780:INC*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+1;reg_ip=85;
}
/*781*/
code[85]=function(){
/*+781:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-10)];
/*+782:INC*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+1
/*+783:JMP*/reg_ip=78;
}
/*784*/
code[86]=function(){
/*+784:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-14)];
/*+785:INC*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+1
/*+786:JMP*/reg_ip=76;
}
/*787*/
code[87]=function(){
/*+787:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-15)];
/*+788:ADDSP*/reg_sp+=-60;reg_sp4=reg_sp>>2;
/*+789:RET*/reg_ip=regs.pop();
}
/*790*/
code[88]=function(){
/*+790:ADDSP*/reg_sp+=+60;reg_sp4=reg_sp>>2;
/*+791:ILDC*/memint32[reg_sp4-15]=+0
/*+792:ILDC*/memint32[reg_sp4-14]=+0;reg_ip=89;
}
/*793*/
code[89]=function(){
/*+793:ILDC*/memint32[reg_sp4-8]=+5
/*+794:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-14] <memint32[reg_sp4-8]
/*+795:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=100;}else{reg_ip=90;}
}
/*796*/
code[90]=function(){
/*+796:ILDC*/memint32[reg_sp4-13]=-1
/*+797:ILDC*/memint32[reg_sp4-12]=-1
/*+798:ILDC*/memint32[reg_sp4-11]=+4
/*+799:ILDC*/memint32[reg_sp4-10]=+4;reg_ip=91;
}
/*800*/
code[91]=function(){
/*+800:ILDC*/memint32[reg_sp4-8]=+0
/*+801:GE*/memint32[reg_sp4-7]=memint32[reg_sp4-10]>=memint32[reg_sp4-8]
/*+802:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=99;}else{reg_ip=92;}
}
/*803*/
code[92]=function(){
/*+803:ILDC*/memint32[reg_sp4-8]=+5
/*+804:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+805:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-10]+memint32[reg_sp4-7]
/*+806:LEA*/memint32[reg_sp4-5]=+120
/*+807:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+808:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-36,addr,addr+4);}
/*+809:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=98;}else{reg_ip=93;}
}
/*810*/
code[93]=function(){
/*+810:ILDC*/memint32[reg_sp4-8]=+5
/*+811:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+812:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-10]+memint32[reg_sp4-7]
/*+813:LEA*/memint32[reg_sp4-5]=+120
/*+814:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+815:ILDC*/PutInt(memint32[(reg_sp4-5)],+0)
/*+816:EQ*/memint32[reg_sp4-8]=memint32[reg_sp4-9]==memint32[reg_sp4-13]
/*+817:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=95;}else{reg_ip=94;}
}
/*818*/
code[94]=function(){
/*+818:ILDC*/memint32[reg_sp4-8]=+5
/*+819:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+820:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+821:LEA*/memint32[reg_sp4-5]=+120
/*+822:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+823:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-12,addr,addr+4);}
/*+824:INC*/PutInt(memint32[(reg_sp4-5)],GetInt(memint32[(reg_sp4-5)])+1)
/*+825:ILDC*/memint32[reg_sp4-8]=+5
/*+826:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+827:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+828:LEA*/memint32[reg_sp4-5]=+120
/*+829:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+830:ILDC*/memint32[reg_sp4-3]=+1
/*+831:SHL*/memint32[reg_sp4-2]=memint32[reg_sp4-3]<<GetInt(memint32[(reg_sp4-5)])
/*+832:ADD*/memint32[+207]=memint32[+207]+memint32[reg_sp4-2]
/*+833:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(+207)];
/*+834:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+835:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1
/*+836:ILDC*/memint32[reg_sp4-8]=+5
/*+837:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+838:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-12]+memint32[reg_sp4-7]
/*+839:LEA*/memint32[reg_sp4-5]=+420
/*+840:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+841:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-12]
/*+842:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+843:ILDC*/memint32[reg_sp4-12]=-1
/*+844:ILDC*/memint32[reg_sp4-13]=-1
/*+845:JMP*/reg_ip=98;
}
/*846*/
code[95]=function(){
/*+846:NE*/memint32[reg_sp4-8]=memint32[reg_sp4-11]!=memint32[reg_sp4-10]
/*+847:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=97;}else{reg_ip=96;}
}
/*848*/
code[96]=function(){
/*+848:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+849:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1;reg_ip=97;
}
/*850*/
code[97]=function(){
/*+850:ILDC*/memint32[reg_sp4-8]=+5
/*+851:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+852:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-11]+memint32[reg_sp4-7]
/*+853:LEA*/memint32[reg_sp4-5]=+120
/*+854:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+855:MOV*/{let addr=reg_sp-36;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+4);}
/*+856:ILDC*/memint32[reg_sp4-8]=+5
/*+857:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-14],memint32[reg_sp4-8]);
/*+858:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-11]+memint32[reg_sp4-7]
/*+859:LEA*/memint32[reg_sp4-5]=+420
/*+860:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+861:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-11]
/*+862:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+863:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-11)];
/*+864:MOV*//*4*/memint32[(reg_sp4-13)]=memint32[(reg_sp4-9)];
/*+865:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-11)];
/*+866:DEC*/memint32[reg_sp4-11]=memint32[reg_sp4-11]-1;reg_ip=98;
}
/*867*/
code[98]=function(){
/*+867:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-10)];
/*+868:DEC*/memint32[reg_sp4-10]=memint32[reg_sp4-10]-1
/*+869:JMP*/reg_ip=91;
}
/*870*/
code[99]=function(){
/*+870:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-14)];
/*+871:INC*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+1
/*+872:JMP*/reg_ip=89;
}
/*873*/
code[100]=function(){
/*+873:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-15)];
/*+874:ADDSP*/reg_sp+=-60;reg_sp4=reg_sp>>2;
/*+875:RET*/reg_ip=regs.pop();
}
/*876*/
code[101]=function(){
/*+876:ADDSP*/reg_sp+=+60;reg_sp4=reg_sp>>2;
/*+877:ILDC*/memint32[reg_sp4-15]=+0
/*+878:ILDC*/memint32[reg_sp4-14]=+0;reg_ip=102;
}
/*879*/
code[102]=function(){
/*+879:ILDC*/memint32[reg_sp4-8]=+5
/*+880:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-14] <memint32[reg_sp4-8]
/*+881:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=113;}else{reg_ip=103;}
}
/*882*/
code[103]=function(){
/*+882:ILDC*/memint32[reg_sp4-13]=-1
/*+883:ILDC*/memint32[reg_sp4-12]=-1
/*+884:ILDC*/memint32[reg_sp4-11]=+0
/*+885:ILDC*/memint32[reg_sp4-10]=+0;reg_ip=104;
}
/*886*/
code[104]=function(){
/*+886:ILDC*/memint32[reg_sp4-8]=+5
/*+887:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-10] <memint32[reg_sp4-8]
/*+888:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=112;}else{reg_ip=105;}
}
/*889*/
code[105]=function(){
/*+889:ILDC*/memint32[reg_sp4-8]=+5
/*+890:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-10],memint32[reg_sp4-8]);
/*+891:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+892:LEA*/memint32[reg_sp4-5]=+120
/*+893:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+894:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-36,addr,addr+4);}
/*+895:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=111;}else{reg_ip=106;}
}
/*896*/
code[106]=function(){
/*+896:ILDC*/memint32[reg_sp4-8]=+5
/*+897:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-10],memint32[reg_sp4-8]);
/*+898:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+899:LEA*/memint32[reg_sp4-5]=+120
/*+900:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+901:ILDC*/PutInt(memint32[(reg_sp4-5)],+0)
/*+902:EQ*/memint32[reg_sp4-8]=memint32[reg_sp4-9]==memint32[reg_sp4-13]
/*+903:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=108;}else{reg_ip=107;}
}
/*904*/
code[107]=function(){
/*+904:ILDC*/memint32[reg_sp4-8]=+5
/*+905:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+906:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+907:LEA*/memint32[reg_sp4-5]=+120
/*+908:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+909:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-12,addr,addr+4);}
/*+910:INC*/PutInt(memint32[(reg_sp4-5)],GetInt(memint32[(reg_sp4-5)])+1)
/*+911:ILDC*/memint32[reg_sp4-8]=+5
/*+912:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+913:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+914:LEA*/memint32[reg_sp4-5]=+120
/*+915:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+916:ILDC*/memint32[reg_sp4-3]=+1
/*+917:SHL*/memint32[reg_sp4-2]=memint32[reg_sp4-3]<<GetInt(memint32[(reg_sp4-5)])
/*+918:ADD*/memint32[+207]=memint32[+207]+memint32[reg_sp4-2]
/*+919:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(+207)];
/*+920:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+921:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1
/*+922:ILDC*/memint32[reg_sp4-8]=+5
/*+923:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+924:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+925:LEA*/memint32[reg_sp4-5]=+620
/*+926:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+927:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-12]
/*+928:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+929:ILDC*/memint32[reg_sp4-12]=-1
/*+930:ILDC*/memint32[reg_sp4-13]=-1
/*+931:JMP*/reg_ip=111;
}
/*932*/
code[108]=function(){
/*+932:NE*/memint32[reg_sp4-8]=memint32[reg_sp4-11]!=memint32[reg_sp4-10]
/*+933:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=110;}else{reg_ip=109;}
}
/*934*/
code[109]=function(){
/*+934:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+935:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1;reg_ip=110;
}
/*936*/
code[110]=function(){
/*+936:ILDC*/memint32[reg_sp4-8]=+5
/*+937:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-11],memint32[reg_sp4-8]);
/*+938:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+939:LEA*/memint32[reg_sp4-5]=+120
/*+940:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+941:MOV*/{let addr=reg_sp-36;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+4);}
/*+942:ILDC*/memint32[reg_sp4-8]=+5
/*+943:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-11],memint32[reg_sp4-8]);
/*+944:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+945:LEA*/memint32[reg_sp4-5]=+620
/*+946:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+947:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-11]
/*+948:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+949:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-11)];
/*+950:MOV*//*4*/memint32[(reg_sp4-13)]=memint32[(reg_sp4-9)];
/*+951:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-11)];
/*+952:INC*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+1;reg_ip=111;
}
/*953*/
code[111]=function(){
/*+953:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-10)];
/*+954:INC*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+1
/*+955:JMP*/reg_ip=104;
}
/*956*/
code[112]=function(){
/*+956:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-14)];
/*+957:INC*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+1
/*+958:JMP*/reg_ip=102;
}
/*959*/
code[113]=function(){
/*+959:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-15)];
/*+960:ADDSP*/reg_sp+=-60;reg_sp4=reg_sp>>2;
/*+961:RET*/reg_ip=regs.pop();
}
/*962*/
code[114]=function(){
/*+962:ADDSP*/reg_sp+=+60;reg_sp4=reg_sp>>2;
/*+963:ILDC*/memint32[reg_sp4-15]=+0
/*+964:ILDC*/memint32[reg_sp4-14]=+0;reg_ip=115;
}
/*965*/
code[115]=function(){
/*+965:ILDC*/memint32[reg_sp4-8]=+5
/*+966:LS*/memint32[reg_sp4-7]=memint32[reg_sp4-14] <memint32[reg_sp4-8]
/*+967:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=126;}else{reg_ip=116;}
}
/*968*/
code[116]=function(){
/*+968:ILDC*/memint32[reg_sp4-13]=-1
/*+969:ILDC*/memint32[reg_sp4-12]=-1
/*+970:ILDC*/memint32[reg_sp4-11]=+4
/*+971:ILDC*/memint32[reg_sp4-10]=+4;reg_ip=117;
}
/*972*/
code[117]=function(){
/*+972:ILDC*/memint32[reg_sp4-8]=+0
/*+973:GE*/memint32[reg_sp4-7]=memint32[reg_sp4-10]>=memint32[reg_sp4-8]
/*+974:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=125;}else{reg_ip=118;}
}
/*975*/
code[118]=function(){
/*+975:ILDC*/memint32[reg_sp4-8]=+5
/*+976:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-10],memint32[reg_sp4-8]);
/*+977:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+978:LEA*/memint32[reg_sp4-5]=+120
/*+979:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+980:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-36,addr,addr+4);}
/*+981:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=124;}else{reg_ip=119;}
}
/*982*/
code[119]=function(){
/*+982:ILDC*/memint32[reg_sp4-8]=+5
/*+983:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-10],memint32[reg_sp4-8]);
/*+984:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+985:LEA*/memint32[reg_sp4-5]=+120
/*+986:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+987:ILDC*/PutInt(memint32[(reg_sp4-5)],+0)
/*+988:EQ*/memint32[reg_sp4-8]=memint32[reg_sp4-9]==memint32[reg_sp4-13]
/*+989:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=121;}else{reg_ip=120;}
}
/*990*/
code[120]=function(){
/*+990:ILDC*/memint32[reg_sp4-8]=+5
/*+991:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+992:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+993:LEA*/memint32[reg_sp4-5]=+120
/*+994:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+995:MOV*/{let addr=memint32[(reg_sp4-5)];mem8.copyWithin(reg_sp-12,addr,addr+4);}
/*+996:INC*/PutInt(memint32[(reg_sp4-5)],GetInt(memint32[(reg_sp4-5)])+1)
/*+997:ILDC*/memint32[reg_sp4-8]=+5
/*+998:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+999:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+1000:LEA*/memint32[reg_sp4-5]=+120
/*+1001:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+1002:ILDC*/memint32[reg_sp4-3]=+1
/*+1003:SHL*/memint32[reg_sp4-2]=memint32[reg_sp4-3]<<GetInt(memint32[(reg_sp4-5)])
/*+1004:ADD*/memint32[+207]=memint32[+207]+memint32[reg_sp4-2]
/*+1005:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(+207)];
/*+1006:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+1007:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1
/*+1008:ILDC*/memint32[reg_sp4-8]=+5
/*+1009:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-8]);
/*+1010:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+1011:LEA*/memint32[reg_sp4-5]=+620
/*+1012:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+1013:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-12]
/*+1014:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+1015:ILDC*/memint32[reg_sp4-12]=-1
/*+1016:ILDC*/memint32[reg_sp4-13]=-1
/*+1017:JMP*/reg_ip=124;
}
/*1018*/
code[121]=function(){
/*+1018:NE*/memint32[reg_sp4-8]=memint32[reg_sp4-11]!=memint32[reg_sp4-10]
/*+1019:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=123;}else{reg_ip=122;}
}
/*1020*/
code[122]=function(){
/*+1020:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-15)];
/*+1021:INC*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+1;reg_ip=123;
}
/*1022*/
code[123]=function(){
/*+1022:ILDC*/memint32[reg_sp4-8]=+5
/*+1023:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-11],memint32[reg_sp4-8]);
/*+1024:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+1025:LEA*/memint32[reg_sp4-5]=+120
/*+1026:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*4
/*+1027:MOV*/{let addr=reg_sp-36;mem8.copyWithin(memint32[(reg_sp4-5)],addr,addr+4);}
/*+1028:ILDC*/memint32[reg_sp4-8]=+5
/*+1029:MUL*/memint32[reg_sp4-7]=Math.imul(memint32[reg_sp4-11],memint32[reg_sp4-8]);
/*+1030:ADD*/memint32[reg_sp4-6]=memint32[reg_sp4-14]+memint32[reg_sp4-7]
/*+1031:LEA*/memint32[reg_sp4-5]=+620
/*+1032:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-6]*8
/*+1033:SUB*/memint32[reg_sp4-3]=memint32[reg_sp4-10]-memint32[reg_sp4-11]
/*+1034:I2F*/PutFloat(memint32[(reg_sp4-5)],memint32[reg_sp4-3])
/*+1035:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-11)];
/*+1036:MOV*//*4*/memint32[(reg_sp4-13)]=memint32[(reg_sp4-9)];
/*+1037:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-11)];
/*+1038:DEC*/memint32[reg_sp4-11]=memint32[reg_sp4-11]-1;reg_ip=124;
}
/*1039*/
code[124]=function(){
/*+1039:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-10)];
/*+1040:DEC*/memint32[reg_sp4-10]=memint32[reg_sp4-10]-1
/*+1041:JMP*/reg_ip=117;
}
/*1042*/
code[125]=function(){
/*+1042:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(reg_sp4-14)];
/*+1043:INC*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+1
/*+1044:JMP*/reg_ip=115;
}
/*1045*/
code[126]=function(){
/*+1045:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_sp4-15)];
/*+1046:ADDSP*/reg_sp+=-60;reg_sp4=reg_sp>>2;
/*+1047:RET*/reg_ip=regs.pop();
}
/*1048*/
code[127]=function(){
/*+1048:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+1049:ILDC*/memint32[reg_sp4-6]=+1103515245
/*+1050:MUL*/memint32[reg_sp4-5]=Math.imul(GetInt(memint32[(reg_sp4-8)]),memint32[reg_sp4-6]);
/*+1051:ILDC*/memint32[reg_sp4-4]=+12345
/*+1052:ADD*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+memint32[reg_sp4-4]
/*+1053:ILDC*/memint32[reg_sp4-2]=+134217727
/*+1054:AND*/PutInt(memint32[(reg_sp4-8)],memint32[reg_sp4-3]&memint32[reg_sp4-2])
/*+1055:MOV*/{let addr=memint32[(reg_sp4-8)];mem8.copyWithin(reg_sp-28,addr,addr+4);}
/*+1056:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+1057:RET*/reg_ip=regs.pop();
}
/*1058*/
code[128]=function(){
/*+1058:ADDSP*/reg_sp+=+196;reg_sp4=reg_sp>>2;
/*+1059:ILDC*/memint32[reg_sp4-49]=+0
/*+1060:LEA*/memint32[reg_sp4-11]=+832
/*+1061:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-11)];
/*+1062:CALL*/regs.push(129);reg_ip=127;
}
/*1063*/
code[129]=function(){
/*+1063:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-1)];
/*+1064:ILDC*/memint32[reg_sp4-10]=+13
/*+1065:DIV*/memint32[reg_sp4-9]=memint32[reg_sp4-12]/memint32[reg_sp4-10]
/*+1066:ILDC*/memint32[reg_sp4-8]=+2
/*+1067:MOD*/memint32[reg_sp4-7]=memint32[reg_sp4-9] %memint32[reg_sp4-8]
/*+1068:ILDC*/memint32[reg_sp4-6]=+1
/*+1069:ADD*/memint32[reg_sp4-48]=memint32[reg_sp4-7]+memint32[reg_sp4-6]
/*+1070:ILDC*/memint32[reg_sp4-47]=+0;reg_ip=130;
}
/*1071*/
code[130]=function(){
/*+1071:LS*/memint32[reg_sp4-12]=memint32[reg_sp4-47] <memint32[reg_sp4-48]
/*+1072:JMPZ*/if(memint32[reg_sp4-12]==0){reg_ip=148;}else{reg_ip=131;}
}
/*1073*/
code[131]=function(){
/*+1073:ILDC*/memint32[reg_sp4-21]=+0
/*+1074:ILDC*/memint32[reg_sp4-20]=+0;reg_ip=132;
}
/*1075*/
code[132]=function(){
/*+1075:ILDC*/memint32[reg_sp4-12]=+25
/*+1076:LS*/memint32[reg_sp4-11]=memint32[reg_sp4-20] <memint32[reg_sp4-12]
/*+1077:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=136;}else{reg_ip=133;}
}
/*1078*/
code[133]=function(){
/*+1078:LEA*/memint32[reg_sp4-12]=+120
/*+1079:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-20]*4
/*+1080:ILDC*/memint32[reg_sp4-10]=+0
/*+1081:EQ*/memint32[reg_sp4-9]=GetInt(memint32[(reg_sp4-12)])==memint32[reg_sp4-10]
/*+1082:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=135;}else{reg_ip=134;}
}
/*1083*/
code[134]=function(){
/*+1083:LEA*/memint32[reg_sp4-12]=reg_sp-184
/*+1084:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-21]*4
/*+1085:MOV*/{let addr=reg_sp-80;mem8.copyWithin(memint32[(reg_sp4-12)],addr,addr+4);}
/*+1086:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-21)];
/*+1087:INC*/memint32[reg_sp4-21]=memint32[reg_sp4-21]+1;reg_ip=135;
}
/*1088*/
code[135]=function(){
/*+1088:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-20)];
/*+1089:INC*/memint32[reg_sp4-20]=memint32[reg_sp4-20]+1
/*+1090:JMP*/reg_ip=132;
}
/*1091*/
code[136]=function(){
/*+1091:ILDC*/memint32[reg_sp4-12]=+0
/*+1092:GR*/memint32[reg_sp4-11]=memint32[reg_sp4-21] >memint32[reg_sp4-12]
/*+1093:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=147;}else{reg_ip=137;}
}
/*1094*/
code[137]=function(){
/*+1094:LEA*/memint32[reg_sp4-11]=+832
/*+1095:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-11)];
/*+1096:CALL*/regs.push(138);reg_ip=127;
}
/*1097*/
code[138]=function(){
/*+1097:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-1)];
/*+1098:ILDC*/memint32[reg_sp4-10]=+17
/*+1099:DIV*/memint32[reg_sp4-9]=memint32[reg_sp4-12]/memint32[reg_sp4-10]
/*+1100:MOD*/memint32[reg_sp4-8]=memint32[reg_sp4-9] %memint32[reg_sp4-21]
/*+1101:LEA*/memint32[reg_sp4-7]=reg_sp-184
/*+1102:IDX*/memint32[reg_sp4-7]=memint32[reg_sp4-7]+memint32[reg_sp4-8]*4
/*+1103:MOV*/{let addr=memint32[(reg_sp4-7)];mem8.copyWithin(reg_sp-76,addr,addr+4);}
/*+1104:LEA*/memint32[reg_sp4-12]=+120
/*+1105:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-19]*4
/*+1106:LEA*/memint32[reg_sp4-9]=+832
/*+1107:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-9)];
/*+1108:CALL*/regs.push(139);reg_ip=127;
}
/*1109*/
code[139]=function(){
/*+1109:MOV*//*4*/memint32[(reg_sp4-10)]=memint32[(reg_sp4-1)];
/*+1110:ILDC*/memint32[reg_sp4-8]=+13
/*+1111:DIV*/memint32[reg_sp4-7]=memint32[reg_sp4-10]/memint32[reg_sp4-8]
/*+1112:ILDC*/memint32[reg_sp4-6]=+2
/*+1113:MOD*/memint32[reg_sp4-5]=memint32[reg_sp4-7] %memint32[reg_sp4-6]
/*+1114:ILDC*/memint32[reg_sp4-4]=+1
/*+1115:ADD*/PutInt(memint32[(reg_sp4-12)],memint32[reg_sp4-5]+memint32[reg_sp4-4])
/*+1116:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-49)];
/*+1117:INC*/memint32[reg_sp4-49]=memint32[reg_sp4-49]+1
/*+1118:NCALL*/SC_Time();
/*+1119:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1120:MOV*//*8*/{let dst=(reg_sp4-18);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=140;
}
/*1121*/
code[140]=function(){
/*+1121:NCALL*/SC_Time();
/*+1122:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1123:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1124:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-16)-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1125:NCALL*/SC_CountKeyEvents();
/*+1126:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-1)];
/*+1127:ILDC*/memint32[reg_sp4-11]=+1
/*+1128:GR*/memint32[reg_sp4-10]=memint32[reg_sp4-12] >memint32[reg_sp4-11]
/*+1129:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=142;}else{reg_ip=141;}
}
/*1130*/
code[141]=function(){
/*+1130:LEA*/memint32[reg_sp4-12]=+220
/*+1131:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-19]*8
/*+1132:FLDC*/PutFloat(memint32[(reg_sp4-12)],+1.000000)
/*+1133:JMP*/reg_ip=147;
}
/*1134*/
code[142]=function(){
/*+1134:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1135:FGR*/memint32[reg_sp4-10]=GetFloat4(reg_sp4-14) >GetFloat4(reg_sp4-12)
/*+1136:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=144;}else{reg_ip=143;}
}
/*1137*/
code[143]=function(){
/*+1137:LEA*/memint32[reg_sp4-12]=+220
/*+1138:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-19]*8
/*+1139:FLDC*/PutFloat(memint32[(reg_sp4-12)],+1.000000)
/*+1140:JMP*/reg_ip=147;
}
/*1141*/
code[144]=function(){
/*+1141:LEA*/memint32[reg_sp4-12]=+220
/*+1142:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-19]*8
/*+1143:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.150000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1144:FDIV*/PutFloat(memint32[(reg_sp4-12)],GetFloat4(reg_sp4-14)/GetFloat4(reg_sp4-10))
/*+1145:CALL*/regs.push(145);reg_ip=11;
}
/*1146*/
code[145]=function(){
/*+1146:INT*/int_code=+10;interrupt=true;;reg_ip=146;
}
/*1147*/
code[146]=function(){
/*+1147:JMP*/reg_ip=140;
}
/*1148*/
code[147]=function(){
/*+1148:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-47)];
/*+1149:INC*/memint32[reg_sp4-47]=memint32[reg_sp4-47]+1
/*+1150:JMP*/reg_ip=130;
}
/*1151*/
code[148]=function(){
/*+1151:MOV*//*4*/memint32[(reg_sp4-50)]=memint32[(reg_sp4-49)];
/*+1152:ADDSP*/reg_sp+=-196;reg_sp4=reg_sp>>2;
/*+1153:RET*/reg_ip=regs.pop();
}
/*1154*/
code[149]=function(){
/*+1154:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+1155:ILDC*/memint32[reg_sp4-8]=+0
/*+1156:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-8];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1157:FLS*/memint32[reg_sp4-5]=GetFloat4(reg_sp4-12) <GetFloat4(reg_sp4-7)
/*+1158:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=151;}else{reg_ip=150;}
}
/*1159*/
code[150]=function(){
/*+1159:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1160:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1161:JMP*/reg_ip=152;
}
/*1162*/
code[151]=function(){
/*+1162:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=152;
}
/*1163*/
code[152]=function(){
/*+1163:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1164:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+1165:RET*/reg_ip=regs.pop();
}
/*1166*/
code[153]=function(){
/*+1166:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+1167:ILDC*/memint32[reg_sp4-5]=+0
/*+1168:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-5];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1169:FLS*/memint32[reg_sp4-2]=GetFloat4(reg_sp4-9) <GetFloat4(reg_sp4-4)
/*+1170:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=155;}else{reg_ip=154;}
}
/*1171*/
code[154]=function(){
/*+1171:ILDC*/memint32[reg_sp4-1]=-1
/*+1172:JMP*/reg_ip=156;
}
/*1173*/
code[155]=function(){
/*+1173:ILDC*/memint32[reg_sp4-1]=+1;reg_ip=156;
}
/*1174*/
code[156]=function(){
/*+1174:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-1];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1175:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+1176:RET*/reg_ip=regs.pop();
}
/*1177*/
code[157]=function(){
/*+1177:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+1178:FLS*/memint32[reg_sp4-3]=GetFloat4(reg_sp4-7) <GetFloat4(reg_sp4-9)
/*+1179:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=159;}else{reg_ip=158;}
}
/*1180*/
code[158]=function(){
/*+1180:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-7);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1181:JMP*/reg_ip=160;
}
/*1182*/
code[159]=function(){
/*+1182:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=160;
}
/*1183*/
code[160]=function(){
/*+1183:MOV*//*8*/{let dst=(reg_sp4-5);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1184:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+1185:RET*/reg_ip=regs.pop();
}
/*1186*/
code[161]=function(){
/*+1186:ADDSP*/reg_sp+=+80;reg_sp4=reg_sp>>2;
/*+1187:NCALL*/SC_Time();
/*+1188:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1189:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-11);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=162;
}
/*1190*/
code[162]=function(){
/*+1190:NCALL*/SC_Time();
/*+1191:MOV*//*8*/{let dst=(reg_sp4-11);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1192:FSUB*/{let addr=(reg_sp4-9);cvtflt64[0]=GetFloat4(reg_sp4-11)-GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1193:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1194:FGR*/memint32[reg_sp4-5]=GetFloat4(reg_sp4-9) >GetFloat4(reg_sp4-7)
/*+1195:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=164;}else{reg_ip=163;}
}
/*1196*/
code[163]=function(){
/*+1196:JMP*/reg_ip=188;
}
/*1197*/
code[164]=function(){
/*+1197:ILDC*/memint32[reg_sp4-18]=+0
/*+1198:ILDC*/memint32[reg_sp4-17]=+0;reg_ip=165;
}
/*1199*/
code[165]=function(){
/*+1199:ILDC*/memint32[reg_sp4-11]=+25
/*+1200:LS*/memint32[reg_sp4-10]=memint32[reg_sp4-17] <memint32[reg_sp4-11]
/*+1201:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=181;}else{reg_ip=166;}
}
/*1202*/
code[166]=function(){
/*+1202:LEA*/memint32[reg_sp4-11]=+420
/*+1203:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1204:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+1205:CALL*/regs.push(167);reg_ip=149;
}
/*1206*/
code[167]=function(){
/*+1206:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1207:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1208:FLDC*/{let addr=(reg_sp4-11);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1209:FGE*/memint32[reg_sp4-9]=GetFloat4(reg_sp4-16)>=GetFloat4(reg_sp4-11)
/*+1210:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=172;}else{reg_ip=168;}
}
/*1211*/
code[168]=function(){
/*+1211:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1212:LEA*/memint32[reg_sp4-11]=+420
/*+1213:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1214:ILDC*/memint32[reg_sp4-9]=+0
/*+1215:I2F*/{let addr=(reg_sp4-8);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1216:FGR*/memint32[reg_sp4-6]=GetFloat(memint32[(reg_sp4-11)]) >GetFloat4(reg_sp4-8)
/*+1217:JMPZ*/if(memint32[reg_sp4-6]==0){reg_ip=170;}else{reg_ip=169;}
}
/*1218*/
code[169]=function(){
/*+1218:LEA*/memint32[reg_sp4-11]=+420
/*+1219:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1220:FSUB*/PutFloat(memint32[(reg_sp4-11)],GetFloat(memint32[(reg_sp4-11)])-GetFloat4(reg_sp4-16))
/*+1221:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-36,addr,addr+8);}
/*+1222:JMP*/reg_ip=171;
}
/*1223*/
code[170]=function(){
/*+1223:LEA*/memint32[reg_sp4-11]=+420
/*+1224:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1225:FADD*/PutFloat(memint32[(reg_sp4-11)],GetFloat(memint32[(reg_sp4-11)])+GetFloat4(reg_sp4-16))
/*+1226:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-36,addr,addr+8);};reg_ip=171;
}
/*1227*/
code[171]=function(){
/*+1227:ILDC*/memint32[reg_sp4-18]=+1
/*+1228:JMP*/reg_ip=173;
}
/*1229*/
code[172]=function(){
/*+1229:LEA*/memint32[reg_sp4-11]=+420
/*+1230:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1231:FLDC*/PutFloat(memint32[(reg_sp4-11)],+0.000000);reg_ip=173;
}
/*1232*/
code[173]=function(){
/*+1232:LEA*/memint32[reg_sp4-11]=+620
/*+1233:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1234:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+1235:CALL*/regs.push(174);reg_ip=149;
}
/*1236*/
code[174]=function(){
/*+1236:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1237:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1238:FLDC*/{let addr=(reg_sp4-11);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1239:FGE*/memint32[reg_sp4-9]=GetFloat4(reg_sp4-14)>=GetFloat4(reg_sp4-11)
/*+1240:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=179;}else{reg_ip=175;}
}
/*1241*/
code[175]=function(){
/*+1241:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1242:LEA*/memint32[reg_sp4-11]=+620
/*+1243:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1244:ILDC*/memint32[reg_sp4-9]=+0
/*+1245:I2F*/{let addr=(reg_sp4-8);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1246:FGR*/memint32[reg_sp4-6]=GetFloat(memint32[(reg_sp4-11)]) >GetFloat4(reg_sp4-8)
/*+1247:JMPZ*/if(memint32[reg_sp4-6]==0){reg_ip=177;}else{reg_ip=176;}
}
/*1248*/
code[176]=function(){
/*+1248:LEA*/memint32[reg_sp4-11]=+620
/*+1249:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1250:FSUB*/PutFloat(memint32[(reg_sp4-11)],GetFloat(memint32[(reg_sp4-11)])-GetFloat4(reg_sp4-14))
/*+1251:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-36,addr,addr+8);}
/*+1252:JMP*/reg_ip=178;
}
/*1253*/
code[177]=function(){
/*+1253:LEA*/memint32[reg_sp4-11]=+620
/*+1254:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1255:FADD*/PutFloat(memint32[(reg_sp4-11)],GetFloat(memint32[(reg_sp4-11)])+GetFloat4(reg_sp4-14))
/*+1256:MOV*/{let addr=memint32[(reg_sp4-11)];mem8.copyWithin(reg_sp-36,addr,addr+8);};reg_ip=178;
}
/*1257*/
code[178]=function(){
/*+1257:ILDC*/memint32[reg_sp4-18]=+1
/*+1258:JMP*/reg_ip=180;
}
/*1259*/
code[179]=function(){
/*+1259:LEA*/memint32[reg_sp4-11]=+620
/*+1260:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-17]*8
/*+1261:FLDC*/PutFloat(memint32[(reg_sp4-11)],+0.000000);reg_ip=180;
}
/*1262*/
code[180]=function(){
/*+1262:MOV*//*4*/memint32[(reg_sp4-11)]=memint32[(reg_sp4-17)];
/*+1263:INC*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+1
/*+1264:JMP*/reg_ip=165;
}
/*1265*/
code[181]=function(){
/*+1265:CALL*/regs.push(182);reg_ip=11;
}
/*1266*/
code[182]=function(){
/*+1266:INT*/int_code=+10;interrupt=true;;reg_ip=183;
}
/*1267*/
code[183]=function(){
/*+1267:LNOT*/memint32[reg_sp4-11]=!memint32[reg_sp4-18]
/*+1268:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=185;}else{reg_ip=184;}
}
/*1269*/
code[184]=function(){
/*+1269:JMP*/reg_ip=188;
}
/*1270*/
code[185]=function(){
/*+1270:NCALL*/SC_CountKeyEvents();
/*+1271:MOV*//*4*/memint32[(reg_sp4-11)]=memint32[(reg_sp4-1)];
/*+1272:ILDC*/memint32[reg_sp4-10]=+1
/*+1273:GR*/memint32[reg_sp4-9]=memint32[reg_sp4-11] >memint32[reg_sp4-10]
/*+1274:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=187;}else{reg_ip=186;}
}
/*1275*/
code[186]=function(){
/*+1275:JMP*/reg_ip=188;
}
/*1276*/
code[187]=function(){
/*+1276:JMP*/reg_ip=162;
}
/*1277*/
code[188]=function(){
/*+1277:ILDC*/memint32[reg_sp4-12]=+0;reg_ip=189;
}
/*1278*/
code[189]=function(){
/*+1278:ILDC*/memint32[reg_sp4-11]=+25
/*+1279:LS*/memint32[reg_sp4-10]=memint32[reg_sp4-12] <memint32[reg_sp4-11]
/*+1280:JMPZ*/if(memint32[reg_sp4-10]==0){reg_ip=191;}else{reg_ip=190;}
}
/*1281*/
code[190]=function(){
/*+1281:LEA*/memint32[reg_sp4-11]=+420
/*+1282:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-12]*8
/*+1283:FLDC*/PutFloat(memint32[(reg_sp4-11)],+0.000000)
/*+1284:LEA*/memint32[reg_sp4-11]=+620
/*+1285:IDX*/memint32[reg_sp4-11]=memint32[reg_sp4-11]+memint32[reg_sp4-12]*8
/*+1286:FLDC*/PutFloat(memint32[(reg_sp4-11)],+0.000000)
/*+1287:MOV*//*4*/memint32[(reg_sp4-11)]=memint32[(reg_sp4-12)];
/*+1288:INC*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+1
/*+1289:JMP*/reg_ip=189;
}
/*1290*/
code[191]=function(){
/*+1290:ADDSP*/reg_sp+=-80;reg_sp4=reg_sp>>2;
/*+1291:RET*/reg_ip=regs.pop();
}
/*1292*/
code[192]=function(){
/*+1292:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+1293:ILDC*/memint32[reg_sp4-5]=+0
/*+1294:ILDC*/memint32[reg_sp4-3]=+4001
/*+1295:EQ*/memint32[reg_sp4-2]=memint32[reg_sp4-7]==memint32[reg_sp4-3]
/*+1296:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=196;}else{reg_ip=193;}
}
/*1297*/
code[193]=function(){
/*+1297:CALL*/regs.push(194);reg_ip=114;
}
/*1298*/
code[194]=function(){
/*+1298:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-1)];
/*+1299:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-3)];
/*+1300:CALL*/regs.push(195);reg_ip=161;
}
/*1301*/
code[195]=function(){
/*+1301:JMP*/reg_ip=212;
}
/*1302*/
code[196]=function(){
/*+1302:ILDC*/memint32[reg_sp4-3]=+4002
/*+1303:EQ*/memint32[reg_sp4-2]=memint32[reg_sp4-7]==memint32[reg_sp4-3]
/*+1304:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=200;}else{reg_ip=197;}
}
/*1305*/
code[197]=function(){
/*+1305:CALL*/regs.push(198);reg_ip=75;
}
/*1306*/
code[198]=function(){
/*+1306:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-1)];
/*+1307:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-3)];
/*+1308:CALL*/regs.push(199);reg_ip=161;
}
/*1309*/
code[199]=function(){
/*+1309:JMP*/reg_ip=212;
}
/*1310*/
code[200]=function(){
/*+1310:ILDC*/memint32[reg_sp4-3]=+4003
/*+1311:EQ*/memint32[reg_sp4-2]=memint32[reg_sp4-7]==memint32[reg_sp4-3]
/*+1312:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=204;}else{reg_ip=201;}
}
/*1313*/
code[201]=function(){
/*+1313:CALL*/regs.push(202);reg_ip=88;
}
/*1314*/
code[202]=function(){
/*+1314:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-1)];
/*+1315:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-3)];
/*+1316:CALL*/regs.push(203);reg_ip=161;
}
/*1317*/
code[203]=function(){
/*+1317:JMP*/reg_ip=212;
}
/*1318*/
code[204]=function(){
/*+1318:ILDC*/memint32[reg_sp4-3]=+4000
/*+1319:EQ*/memint32[reg_sp4-2]=memint32[reg_sp4-7]==memint32[reg_sp4-3]
/*+1320:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=208;}else{reg_ip=205;}
}
/*1321*/
code[205]=function(){
/*+1321:CALL*/regs.push(206);reg_ip=101;
}
/*1322*/
code[206]=function(){
/*+1322:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-1)];
/*+1323:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-3)];
/*+1324:CALL*/regs.push(207);reg_ip=161;
}
/*1325*/
code[207]=function(){
/*+1325:JMP*/reg_ip=212;
}
/*1326*/
code[208]=function(){
/*+1326:ILDC*/memint32[reg_sp4-3]=+4008
/*+1327:EQ*/memint32[reg_sp4-2]=memint32[reg_sp4-7]==memint32[reg_sp4-3]
/*+1328:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=212;}else{reg_ip=209;}
}
/*1329*/
code[209]=function(){
/*+1329:ILDC*/memint32[reg_sp4-4]=+0;reg_ip=210;
}
/*1330*/
code[210]=function(){
/*+1330:ILDC*/memint32[reg_sp4-3]=+25
/*+1331:LS*/memint32[reg_sp4-2]=memint32[reg_sp4-4] <memint32[reg_sp4-3]
/*+1332:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=212;}else{reg_ip=211;}
}
/*1333*/
code[211]=function(){
/*+1333:LEA*/memint32[reg_sp4-3]=+120
/*+1334:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*4
/*+1335:ILDC*/PutInt(memint32[(reg_sp4-3)],+0)
/*+1336:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-4)];
/*+1337:INC*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+1
/*+1338:JMP*/reg_ip=210;
}
/*1339*/
code[212]=function(){
/*+1339:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=214;}else{reg_ip=213;}
}
/*1340*/
code[213]=function(){
/*+1340:CALL*/regs.push(214);reg_ip=128;
}
/*1341*/
code[214]=function(){
/*+1341:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-5)];
/*+1342:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+1343:RET*/reg_ip=regs.pop();
}
/*1344*/
code[215]=function(){
/*+1344:ADDSP*/reg_sp+=+68;reg_sp4=reg_sp>>2;
/*+1345:NCALL*/SC_Time();
/*+1346:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1347:FLDC*/{let addr=(reg_sp4-7);cvtflt64[0]=+1000000000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1348:FMUL*/{let addr=(reg_sp4-5);cvtflt64[0]=GetFloat4(reg_sp4-9)*GetFloat4(reg_sp4-7);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1349:F2I*/memint32[reg_sp4-17]=GetFloat4(reg_sp4-5)
/*+1350:ADD*/memint32[+208]=memint32[+208]+memint32[reg_sp4-17]
/*+1351:MOV*//*4*/memint32[(reg_sp4-9)]=memint32[(+208)];
/*+1352:ILDC*/memint32[reg_sp4-16]=+0;reg_ip=216;
}
/*1353*/
code[216]=function(){
/*+1353:ILDC*/memint32[reg_sp4-9]=+25
/*+1354:LS*/memint32[reg_sp4-8]=memint32[reg_sp4-16] <memint32[reg_sp4-9]
/*+1355:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=218;}else{reg_ip=217;}
}
/*1356*/
code[217]=function(){
/*+1356:LEA*/memint32[reg_sp4-9]=+120
/*+1357:IDX*/memint32[reg_sp4-9]=memint32[reg_sp4-9]+memint32[reg_sp4-16]*4
/*+1358:ILDC*/PutInt(memint32[(reg_sp4-9)],+0)
/*+1359:LEA*/memint32[reg_sp4-9]=+220
/*+1360:IDX*/memint32[reg_sp4-9]=memint32[reg_sp4-9]+memint32[reg_sp4-16]*8
/*+1361:FLDC*/PutFloat(memint32[(reg_sp4-9)],+1.000000)
/*+1362:LEA*/memint32[reg_sp4-9]=+420
/*+1363:IDX*/memint32[reg_sp4-9]=memint32[reg_sp4-9]+memint32[reg_sp4-16]*8
/*+1364:FLDC*/PutFloat(memint32[(reg_sp4-9)],+0.000000)
/*+1365:LEA*/memint32[reg_sp4-9]=+620
/*+1366:IDX*/memint32[reg_sp4-9]=memint32[reg_sp4-9]+memint32[reg_sp4-16]*8
/*+1367:FLDC*/PutFloat(memint32[(reg_sp4-9)],+0.000000)
/*+1368:MOV*//*4*/memint32[(reg_sp4-9)]=memint32[(reg_sp4-16)];
/*+1369:INC*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+1
/*+1370:JMP*/reg_ip=216;
}
/*1371*/
code[218]=function(){
/*+1371:ILDC*/memint32[reg_sp4-15]=+0
/*+1372:CALL*/regs.push(219);reg_ip=128;
}
/*1373*/
code[219]=function(){
/*+1373:LEA*/memint32[reg_sp4-9]=reg_sp-56
/*+1374:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-9)];
/*+1375:LEA*/memint32[reg_sp4-8]=reg_sp-48
/*+1376:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-8)];
/*+1377:LEA*/memint32[reg_sp4-7]=reg_sp-52
/*+1378:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-7)];
/*+1379:NCALL*/SC_GetMouseState();;reg_ip=220;
}
/*1380*/
code[220]=function(){
/*+1380:LEA*/memint32[reg_sp4-8]=reg_sp-40
/*+1381:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-8)];
/*+1382:LEA*/memint32[reg_sp4-7]=reg_sp-44
/*+1383:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-7)];
/*+1384:NCALL*/SC_GetKeyEvent();
/*+1385:MOV*//*4*/memint32[(reg_sp4-9)]=memint32[(reg_sp4-1)];
/*+1386:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=224;}else{reg_ip=221;}
}
/*1387*/
code[221]=function(){
/*+1387:ILDC*/memint32[reg_sp4-9]=+0
/*+1388:GR*/memint32[reg_sp4-8]=memint32[reg_sp4-10] >memint32[reg_sp4-9]
/*+1389:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=223;}else{reg_ip=222;}
}
/*1390*/
code[222]=function(){
/*+1390:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-11)];
/*+1391:CALL*/regs.push(223);reg_ip=192;
}
/*1392*/
code[223]=function(){
/*+1392:JMP*/reg_ip=220;
}
/*1393*/
code[224]=function(){
/*+1393:CALL*/regs.push(225);reg_ip=11;
}
/*1394*/
code[225]=function(){
/*+1394:INT*/int_code=+10;interrupt=true;;reg_ip=226;
}
/*1395*/
code[226]=function(){
/*+1395:JMP*/reg_ip=219;
}
/*1396*/
code[227]=function(){
/*+1396:ILDC*/memint32[reg_sp4-18]=+0
/*+1397:ADDSP*/reg_sp+=-68;reg_sp4=reg_sp>>2;
/*+1398:RET*/reg_ip=regs.pop();
}
/*1399*/
code[228]=function(){
/*+1399:ADDSP*/reg_sp+=+4;reg_sp4=reg_sp>>2;
/*+1400:FLDC*/{let addr=(+24);cvtflt64[0]=+84.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1401:FLDC*/{let addr=(+26);cvtflt64[0]=+25.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1402:FLDC*/{let addr=(+28);cvtflt64[0]=+180.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1403:ILDC*/memint32[+205]=-1
/*+1404:ILDC*/memint32[+206]=-1
/*+1405:ILDC*/memint32[+207]=+0
/*+1406:ILDC*/memint32[+208]=+2342345
/*+1407:CALL*/regs.push(229);reg_ip=215;
}
/*1408*/
code[229]=function(){
/*+1408:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-1)];
/*+1409:ADDSP*/reg_sp+=-4;reg_sp4=reg_sp>>2;
/*+1410:FIN*/interrupt=true;quit=true;
}
let start_addr=228
let start_rsp=852
let graphics=1
let G_SCREEN_WIDTH=480
let G_SCREEN_HEIGHT=640
let G_SCREEN_SCALE=1
