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
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \0, \0, \-16, \-65, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, \-65,
\0, \0, \0, \0, \0, \0, \-16, ?, \0, \0, \0, \0, \0, \0, \-16, ?,
\0, \0, \0, \0, \1, \0, \0, \0, \2, \0, \0, \0, \4, \0, \0, \0,
\5, \0, \0, \0, \6, \0, \0, \0, \0, \0, \0, \0, \1, \0, \0, \0,
\5, \0, \0, \0, \1, \0, \0, \0, \2, \0, \0, \0, \6, \0, \0, \0,
\2, \0, \0, \0, \3, \0, \0, \0, \7, \0, \0, \0, \3, \0, \0, \0,
\0, \0, \0, \0, \4, \0, \0, \0, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
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
\-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 0, 0, 240, 191, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 191,
0, 0, 0, 0, 0, 0, 240, 63, 0, 0, 0, 0, 0, 0, 240, 63,
0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0,
5, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
5, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 6, 0, 0, 0,
2, 0, 0, 0, 3, 0, 0, 0, 7, 0, 0, 0, 3, 0, 0, 0,
0, 0, 0, 0, 4, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255,
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
255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255
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
/*+11:MOV*//*8*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-56)>>2];memint32[((reg_sp-24)>>2)+1]=memint32[((reg_sp-56)>>2)+1];
/*+12:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-64)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-64)>>2)+1];
/*+13:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-72)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_sp-72)>>2)+1];
/*+14:MOV*/Memcpy(reg_sp-48,reg_sp-24,+24);
/*+15:ADDSP*/reg_sp+=-24;
/*+16:RET*/reg_ip=regs.pop();
}
code[17]=function(){
/*+17:ADDSP*/reg_sp+=+28;
/*+18:THAT*/memint32[(reg_sp-4)>>2]=reg_this
/*+19:MOV*/Memcpy(reg_sp-28,GetInt(reg_sp-4),+24);
/*+20:IAM*/regs.push(reg_this);reg_this=reg_sp-28;
/*+21:CALL*/regs.push(22);reg_ip=26;
}
code[22]=function(){
/*+22:NOTME*/reg_this=regs.pop();
/*+23:MOV*/Memcpy(reg_sp-52,reg_sp-28,+24);
/*+24:ADDSP*/reg_sp+=-28;
/*+25:RET*/reg_ip=regs.pop();
}
code[26]=function(){
/*+26:ADDSP*/reg_sp+=+88;
/*+27:FMUL*/PutFloat(reg_sp-80, GetFloat(reg_this+0)*GetFloat(reg_this+0));
/*+28:FMUL*/PutFloat(reg_sp-72, GetFloat(reg_this+8)*GetFloat(reg_this+8));
/*+29:FADD*/PutFloat(reg_sp-64, GetFloat(reg_sp-80)+GetFloat(reg_sp-72));
/*+30:FMUL*/PutFloat(reg_sp-56, GetFloat(reg_this+16)*GetFloat(reg_this+16));
/*+31:FADD*/PutFloat(reg_sp-48, GetFloat(reg_sp-64)+GetFloat(reg_sp-56));
/*+32:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-48)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-48)>>2)+1];
/*+33:NCALL*/SC_sqrt();
/*+34:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+35:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+36:FDIV*/PutFloat(reg_sp-88, GetFloat(reg_sp-32)/GetFloat(reg_sp-40));
/*+37:FMUL*/PutFloat(reg_this+0, GetFloat(reg_this+0)*GetFloat(reg_sp-88));
/*+38:MOV*//*8*/memint32[(reg_sp-80)>>2]=memint32[(reg_this+0)>>2];memint32[((reg_sp-80)>>2)+1]=memint32[((reg_this+0)>>2)+1];
/*+39:FMUL*/PutFloat(reg_this+8, GetFloat(reg_this+8)*GetFloat(reg_sp-88));
/*+40:MOV*//*8*/memint32[(reg_sp-80)>>2]=memint32[(reg_this+8)>>2];memint32[((reg_sp-80)>>2)+1]=memint32[((reg_this+8)>>2)+1];
/*+41:FMUL*/PutFloat(reg_this+16, GetFloat(reg_this+16)*GetFloat(reg_sp-88));
/*+42:MOV*//*8*/memint32[(reg_sp-80)>>2]=memint32[(reg_this+16)>>2];memint32[((reg_sp-80)>>2)+1]=memint32[((reg_this+16)>>2)+1];
/*+43:ADDSP*/reg_sp+=-88;
/*+44:RET*/reg_ip=regs.pop();
}
code[45]=function(){
/*+45:ADDSP*/reg_sp+=+96;
/*+46:FSUB*/PutFloat(reg_sp-96, GetFloat(reg_this+0)-GetFloat(reg_sp-128));
/*+47:FSUB*/PutFloat(reg_sp-88, GetFloat(reg_this+8)-GetFloat(reg_sp-128));
/*+48:FSUB*/PutFloat(reg_sp-80, GetFloat(reg_this+16)-GetFloat(reg_sp-128));
/*+49:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+50:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-88)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-88)>>2)+1];
/*+51:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+52:CALL*/regs.push(53);reg_ip=10;
}
code[53]=function(){
/*+53:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+54:MOV*/Memcpy(reg_sp-120,reg_sp-72,+24);
/*+55:ADDSP*/reg_sp+=-96;
/*+56:RET*/reg_ip=regs.pop();
}
code[57]=function(){
/*+57:ADDSP*/reg_sp+=+120;
/*+58:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+59:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-116)>>2]
/*+60:FSUB*/PutFloat(reg_sp-112, GetFloat(reg_this+0)-GetFloat(GetInt(reg_sp-120)));
/*+61:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+62:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-100)>>2]
/*+63:FSUB*/PutFloat(reg_sp-96, GetFloat(reg_this+8)-GetFloat(GetInt(reg_sp-104)));
/*+64:ILDC*/memint32[(reg_sp-84)>>2]=+16
/*+65:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-84)>>2]
/*+66:FSUB*/PutFloat(reg_sp-80, GetFloat(reg_this+16)-GetFloat(GetInt(reg_sp-88)));
/*+67:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+68:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+69:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-112)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-112)>>2)+1];
/*+70:CALL*/regs.push(71);reg_ip=10;
}
code[71]=function(){
/*+71:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+72:MOV*/Memcpy(reg_sp-144,reg_sp-72,+24);
/*+73:ADDSP*/reg_sp+=-120;
/*+74:RET*/reg_ip=regs.pop();
}
code[75]=function(){
/*+75:ADDSP*/reg_sp+=+16;
/*+76:ILDC*/memint32[(reg_sp-12)>>2]=+0
/*+77:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+78:FSUB*/PutFloat(reg_this+0, GetFloat(reg_this+0)-GetFloat(GetInt(reg_sp-16)));
/*+79:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+0)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+0)>>2)+1];
/*+80:ILDC*/memint32[(reg_sp-12)>>2]=+8
/*+81:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+82:FSUB*/PutFloat(reg_this+8, GetFloat(reg_this+8)-GetFloat(GetInt(reg_sp-16)));
/*+83:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+8)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+8)>>2)+1];
/*+84:ILDC*/memint32[(reg_sp-12)>>2]=+16
/*+85:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+86:FSUB*/PutFloat(reg_this+16, GetFloat(reg_this+16)-GetFloat(GetInt(reg_sp-16)));
/*+87:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+16)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+16)>>2)+1];
/*+88:ADDSP*/reg_sp+=-16;
/*+89:RET*/reg_ip=regs.pop();
}
code[90]=function(){
/*+90:ADDSP*/reg_sp+=+96;
/*+91:FNEG*/PutFloat(reg_sp-96,-GetFloat(reg_this+0));
/*+92:FNEG*/PutFloat(reg_sp-88,-GetFloat(reg_this+8));
/*+93:FNEG*/PutFloat(reg_sp-80,-GetFloat(reg_this+16));
/*+94:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+95:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-88)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-88)>>2)+1];
/*+96:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+97:CALL*/regs.push(98);reg_ip=10;
}
code[98]=function(){
/*+98:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+99:MOV*/Memcpy(reg_sp-120,reg_sp-72,+24);
/*+100:ADDSP*/reg_sp+=-96;
/*+101:RET*/reg_ip=regs.pop();
}
code[102]=function(){
/*+102:ADDSP*/reg_sp+=+120;
/*+103:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+104:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-116)>>2]
/*+105:FADD*/PutFloat(reg_sp-112, GetFloat(reg_this+0)+GetFloat(GetInt(reg_sp-120)));
/*+106:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+107:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-100)>>2]
/*+108:FADD*/PutFloat(reg_sp-96, GetFloat(reg_this+8)+GetFloat(GetInt(reg_sp-104)));
/*+109:ILDC*/memint32[(reg_sp-84)>>2]=+16
/*+110:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-84)>>2]
/*+111:FADD*/PutFloat(reg_sp-80, GetFloat(reg_this+16)+GetFloat(GetInt(reg_sp-88)));
/*+112:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+113:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+114:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-112)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-112)>>2)+1];
/*+115:CALL*/regs.push(116);reg_ip=10;
}
code[116]=function(){
/*+116:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+117:MOV*/Memcpy(reg_sp-144,reg_sp-72,+24);
/*+118:ADDSP*/reg_sp+=-120;
/*+119:RET*/reg_ip=regs.pop();
}
code[120]=function(){
/*+120:ADDSP*/reg_sp+=+16;
/*+121:ILDC*/memint32[(reg_sp-12)>>2]=+0
/*+122:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+123:FADD*/PutFloat(reg_this+0, GetFloat(reg_this+0)+GetFloat(GetInt(reg_sp-16)));
/*+124:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+0)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+0)>>2)+1];
/*+125:ILDC*/memint32[(reg_sp-12)>>2]=+8
/*+126:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+127:FADD*/PutFloat(reg_this+8, GetFloat(reg_this+8)+GetFloat(GetInt(reg_sp-16)));
/*+128:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+8)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+8)>>2)+1];
/*+129:ILDC*/memint32[(reg_sp-12)>>2]=+16
/*+130:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+131:FADD*/PutFloat(reg_this+16, GetFloat(reg_this+16)+GetFloat(GetInt(reg_sp-16)));
/*+132:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+16)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+16)>>2)+1];
/*+133:ADDSP*/reg_sp+=-16;
/*+134:RET*/reg_ip=regs.pop();
}
code[135]=function(){
/*+135:ADDSP*/reg_sp+=+96;
/*+136:FMUL*/PutFloat(reg_sp-96, GetFloat(reg_this+0)*GetFloat(reg_sp-128));
/*+137:FMUL*/PutFloat(reg_sp-88, GetFloat(reg_this+8)*GetFloat(reg_sp-128));
/*+138:FMUL*/PutFloat(reg_sp-80, GetFloat(reg_this+16)*GetFloat(reg_sp-128));
/*+139:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+140:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-88)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-88)>>2)+1];
/*+141:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+142:CALL*/regs.push(143);reg_ip=10;
}
code[143]=function(){
/*+143:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+144:MOV*/Memcpy(reg_sp-120,reg_sp-72,+24);
/*+145:ADDSP*/reg_sp+=-96;
/*+146:RET*/reg_ip=regs.pop();
}
code[147]=function(){
/*+147:ADDSP*/reg_sp+=+8;
/*+148:FMUL*/PutFloat(reg_this+0, GetFloat(reg_this+0)*GetFloat(reg_sp-16));
/*+149:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+0)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+0)>>2)+1];
/*+150:FMUL*/PutFloat(reg_this+8, GetFloat(reg_this+8)*GetFloat(reg_sp-16));
/*+151:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+8)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+8)>>2)+1];
/*+152:FMUL*/PutFloat(reg_this+16, GetFloat(reg_this+16)*GetFloat(reg_sp-16));
/*+153:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_this+16)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_this+16)>>2)+1];
/*+154:ADDSP*/reg_sp+=-8;
/*+155:RET*/reg_ip=regs.pop();
}
code[156]=function(){
/*+156:ADDSP*/reg_sp+=+96;
/*+157:FDIV*/PutFloat(reg_sp-96, GetFloat(reg_this+0)/GetFloat(reg_sp-128));
/*+158:FDIV*/PutFloat(reg_sp-88, GetFloat(reg_this+8)/GetFloat(reg_sp-128));
/*+159:FDIV*/PutFloat(reg_sp-80, GetFloat(reg_this+16)/GetFloat(reg_sp-128));
/*+160:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+161:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-88)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-88)>>2)+1];
/*+162:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-96)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-96)>>2)+1];
/*+163:CALL*/regs.push(164);reg_ip=10;
}
code[164]=function(){
/*+164:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+165:MOV*/Memcpy(reg_sp-120,reg_sp-72,+24);
/*+166:ADDSP*/reg_sp+=-96;
/*+167:RET*/reg_ip=regs.pop();
}
code[168]=function(){
/*+168:ADDSP*/reg_sp+=+240;
/*+169:ILDC*/memint32[(reg_sp-236)>>2]=+8
/*+170:ADD*/memint32[(reg_sp-240)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-236)>>2]
/*+171:ILDC*/memint32[(reg_sp-228)>>2]=+16
/*+172:ADD*/memint32[(reg_sp-232)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-228)>>2]
/*+173:FMUL*/PutFloat(reg_sp-224, GetFloat(GetInt(reg_sp-240))*GetFloat(GetInt(reg_sp-232)));
/*+174:ILDC*/memint32[(reg_sp-212)>>2]=+16
/*+175:ADD*/memint32[(reg_sp-216)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-212)>>2]
/*+176:ILDC*/memint32[(reg_sp-204)>>2]=+8
/*+177:ADD*/memint32[(reg_sp-208)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-204)>>2]
/*+178:FMUL*/PutFloat(reg_sp-200, GetFloat(GetInt(reg_sp-216))*GetFloat(GetInt(reg_sp-208)));
/*+179:FSUB*/PutFloat(reg_sp-192, GetFloat(reg_sp-224)-GetFloat(reg_sp-200));
/*+180:ILDC*/memint32[(reg_sp-180)>>2]=+16
/*+181:ADD*/memint32[(reg_sp-184)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-180)>>2]
/*+182:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+183:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-172)>>2]
/*+184:FMUL*/PutFloat(reg_sp-168, GetFloat(GetInt(reg_sp-184))*GetFloat(GetInt(reg_sp-176)));
/*+185:ILDC*/memint32[(reg_sp-156)>>2]=+0
/*+186:ADD*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-156)>>2]
/*+187:ILDC*/memint32[(reg_sp-148)>>2]=+16
/*+188:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-148)>>2]
/*+189:FMUL*/PutFloat(reg_sp-144, GetFloat(GetInt(reg_sp-160))*GetFloat(GetInt(reg_sp-152)));
/*+190:FSUB*/PutFloat(reg_sp-136, GetFloat(reg_sp-168)-GetFloat(reg_sp-144));
/*+191:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+192:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-124)>>2]
/*+193:ILDC*/memint32[(reg_sp-116)>>2]=+8
/*+194:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-116)>>2]
/*+195:FMUL*/PutFloat(reg_sp-112, GetFloat(GetInt(reg_sp-128))*GetFloat(GetInt(reg_sp-120)));
/*+196:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+197:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-100)>>2]
/*+198:ILDC*/memint32[(reg_sp-92)>>2]=+0
/*+199:ADD*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-92)>>2]
/*+200:FMUL*/PutFloat(reg_sp-88, GetFloat(GetInt(reg_sp-104))*GetFloat(GetInt(reg_sp-96)));
/*+201:FSUB*/PutFloat(reg_sp-80, GetFloat(reg_sp-112)-GetFloat(reg_sp-88));
/*+202:MOV*//*8*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-80)>>2];memint32[((reg_sp-48)>>2)+1]=memint32[((reg_sp-80)>>2)+1];
/*+203:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-136)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-136)>>2)+1];
/*+204:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-192)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-192)>>2)+1];
/*+205:CALL*/regs.push(206);reg_ip=10;
}
code[206]=function(){
/*+206:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+207:MOV*/Memcpy(reg_sp-264,reg_sp-72,+24);
/*+208:ADDSP*/reg_sp+=-240;
/*+209:RET*/reg_ip=regs.pop();
}
code[210]=function(){
/*+210:ADDSP*/reg_sp+=+88;
/*+211:ILDC*/memint32[(reg_sp-84)>>2]=+0
/*+212:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-84)>>2]
/*+213:ILDC*/memint32[(reg_sp-76)>>2]=+0
/*+214:ADD*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-76)>>2]
/*+215:FMUL*/PutFloat(reg_sp-72, GetFloat(GetInt(reg_sp-88))*GetFloat(GetInt(reg_sp-80)));
/*+216:ILDC*/memint32[(reg_sp-60)>>2]=+8
/*+217:ADD*/memint32[(reg_sp-64)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-60)>>2]
/*+218:ILDC*/memint32[(reg_sp-52)>>2]=+8
/*+219:ADD*/memint32[(reg_sp-56)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-52)>>2]
/*+220:FMUL*/PutFloat(reg_sp-48, GetFloat(GetInt(reg_sp-64))*GetFloat(GetInt(reg_sp-56)));
/*+221:FADD*/PutFloat(reg_sp-40, GetFloat(reg_sp-72)+GetFloat(reg_sp-48));
/*+222:ILDC*/memint32[(reg_sp-28)>>2]=+16
/*+223:ADD*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-28)>>2]
/*+224:ILDC*/memint32[(reg_sp-20)>>2]=+16
/*+225:ADD*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-20)>>2]
/*+226:FMUL*/PutFloat(reg_sp-16, GetFloat(GetInt(reg_sp-32))*GetFloat(GetInt(reg_sp-24)));
/*+227:FADD*/PutFloat(reg_sp-8, GetFloat(reg_sp-40)+GetFloat(reg_sp-16));
/*+228:MOV*//*8*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-96)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+229:ADDSP*/reg_sp+=-88;
/*+230:RET*/reg_ip=regs.pop();
}
code[231]=function(){
/*+231:ADDSP*/reg_sp+=+4;
/*+232:FLS*/memint32[(reg_sp-4)>>2]=GetFloat(reg_sp-20) <GetFloat(reg_sp-28)
/*+233:JMPZ*/if(memint32[(reg_sp-4)>>2]==0){reg_ip=238;}else{reg_ip=234;}
}
code[234]=function(){
/*+234:MOV*//*8*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-28)>>2];memint32[((reg_sp-12)>>2)+1]=memint32[((reg_sp-28)>>2)+1];
/*+235:ADDSP*/reg_sp+=-4;
/*+236:RET*/reg_ip=regs.pop();
}
code[237]=function(){
/*+237:JMP*/reg_ip=243;
}
code[238]=function(){
/*+238:FGR*/memint32[(reg_sp-4)>>2]=GetFloat(reg_sp-20) >GetFloat(reg_sp-36)
/*+239:JMPZ*/if(memint32[(reg_sp-4)>>2]==0){reg_ip=243;}else{reg_ip=240;}
}
code[240]=function(){
/*+240:MOV*//*8*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-36)>>2];memint32[((reg_sp-12)>>2)+1]=memint32[((reg_sp-36)>>2)+1];
/*+241:ADDSP*/reg_sp+=-4;
/*+242:RET*/reg_ip=regs.pop();
}
code[243]=function(){
/*+243:MOV*//*8*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-20)>>2];memint32[((reg_sp-12)>>2)+1]=memint32[((reg_sp-20)>>2)+1];
/*+244:ADDSP*/reg_sp+=-4;
/*+245:RET*/reg_ip=regs.pop();
}
code[246]=function(){
/*+246:ADDSP*/reg_sp+=+452;
/*+247:ILDC*/memint32[(reg_sp-148)>>2]=+52
/*+248:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+249:ILDC*/memint32[(reg_sp-140)>>2]=+52
/*+250:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+251:FMUL*/PutFloat(reg_sp-452, GetFloat(GetInt(reg_sp-152))*GetFloat(GetInt(reg_sp-144)));
/*+252:ILDC*/memint32[(reg_sp-148)>>2]=+28
/*+253:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+254:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+255:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+256:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-144)>>2];
/*+257:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-152);
/*+258:CALL*/regs.push(259);reg_ip=57;
}
code[259]=function(){
/*+259:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+260:NOTME*/reg_this=regs.pop();
/*+261:MOV*/Memcpy(reg_sp-444,reg_sp-136,+24);
/*+262:LEA*/PutInt(reg_sp-144,reg_sp-444);
/*+263:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+264:LEA*/PutInt(reg_sp-140,reg_sp-444);
/*+265:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+266:CALL*/regs.push(267);reg_ip=210;
}
code[267]=function(){
/*+267:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+268:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+269:IAM*/regs.push(reg_this);reg_this=reg_sp-444;
/*+270:CALL*/regs.push(271);reg_ip=156;
}
code[271]=function(){
/*+271:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+272:NOTME*/reg_this=regs.pop();
/*+273:MOV*/Memcpy(reg_sp-420,reg_sp-136,+24);
/*+274:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+275:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+276:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+277:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+278:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-144)>>2];
/*+279:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-152);
/*+280:CALL*/regs.push(281);reg_ip=57;
}
code[281]=function(){
/*+281:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+282:NOTME*/reg_this=regs.pop();
/*+283:MOV*/Memcpy(reg_sp-396,reg_sp-136,+24);
/*+284:LEA*/PutInt(reg_sp-128,reg_sp-420);
/*+285:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-128)>>2];
/*+286:LEA*/PutInt(reg_sp-124,reg_sp-396);
/*+287:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-124)>>2];
/*+288:CALL*/regs.push(289);reg_ip=168;
}
code[289]=function(){
/*+289:MOV*/Memcpy(reg_sp-152,reg_sp-24,+24);
/*+290:MOV*/Memcpy(reg_sp-372,reg_sp-152,+24);
/*+291:ILDC*/memint32[(reg_sp-148)>>2]=+24
/*+292:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+293:LEA*/PutInt(reg_sp-120,reg_sp-420);
/*+294:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-120)>>2];
/*+295:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+296:CALL*/regs.push(297);reg_ip=168;
}
code[297]=function(){
/*+297:MOV*/Memcpy(reg_sp-144,reg_sp-24,+24);
/*+298:MOV*/Memcpy(reg_sp-348,reg_sp-144,+24);
/*+299:LEA*/PutInt(reg_sp-144,reg_sp-420);
/*+300:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+301:LEA*/PutInt(reg_sp-140,reg_sp-420);
/*+302:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+303:CALL*/regs.push(304);reg_ip=210;
}
code[304]=function(){
/*+304:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+305:MOV*//*8*/memint32[(reg_sp-324)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-324)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+306:LEA*/PutInt(reg_sp-144,reg_sp-348);
/*+307:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+308:LEA*/PutInt(reg_sp-140,reg_sp-348);
/*+309:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+310:CALL*/regs.push(311);reg_ip=210;
}
code[311]=function(){
/*+311:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+312:FLDC*/PutFloat(reg_sp-136,+2.000000);
/*+313:FMUL*/PutFloat(reg_sp-316, GetFloat(reg_sp-136)*GetFloat(reg_sp-152));
/*+314:LEA*/PutInt(reg_sp-144,reg_sp-372);
/*+315:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+316:LEA*/PutInt(reg_sp-140,reg_sp-348);
/*+317:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+318:CALL*/regs.push(319);reg_ip=210;
}
code[319]=function(){
/*+319:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+320:FLDC*/PutFloat(reg_sp-136,+2.000000);
/*+321:FMUL*/PutFloat(reg_sp-308, GetFloat(reg_sp-136)*GetFloat(reg_sp-152));
/*+322:LEA*/PutInt(reg_sp-144,reg_sp-372);
/*+323:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+324:LEA*/PutInt(reg_sp-140,reg_sp-372);
/*+325:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+326:CALL*/regs.push(327);reg_ip=210;
}
code[327]=function(){
/*+327:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+328:FMUL*/PutFloat(reg_sp-136, GetFloat(reg_sp-452)*GetFloat(reg_sp-324));
/*+329:FSUB*/PutFloat(reg_sp-300, GetFloat(reg_sp-152)-GetFloat(reg_sp-136));
/*+330:FMUL*/PutFloat(reg_sp-152, GetFloat(reg_sp-308)*GetFloat(reg_sp-308));
/*+331:FLDC*/PutFloat(reg_sp-144,+2.000000);
/*+332:FMUL*/PutFloat(reg_sp-136, GetFloat(reg_sp-144)*GetFloat(reg_sp-316));
/*+333:FMUL*/PutFloat(reg_sp-128, GetFloat(reg_sp-136)*GetFloat(reg_sp-300));
/*+334:FSUB*/PutFloat(reg_sp-292, GetFloat(reg_sp-152)-GetFloat(reg_sp-128));
/*+335:FLDC*/PutFloat(reg_sp-152,+0.000000);
/*+336:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-292) <GetFloat(reg_sp-152)
/*+337:JMPZ*/if(memint32[(reg_sp-144)>>2]==0){reg_ip=340;}else{reg_ip=338;}
}
code[338]=function(){
/*+338:ADDSP*/reg_sp+=-452;
/*+339:RET*/reg_ip=regs.pop();
}
code[340]=function(){
/*+340:FLDC*/PutFloat(reg_sp-152,+1.000000);
/*+341:FDIV*/PutFloat(reg_sp-284, GetFloat(reg_sp-152)/GetFloat(reg_sp-316));
/*+342:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-292)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-292)>>2)+1];
/*+343:NCALL*/SC_sqrt();
/*+344:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+345:MOV*//*8*/memint32[(reg_sp-292)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-292)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+346:FNEG*/PutFloat(reg_sp-152,-GetFloat(reg_sp-308));
/*+347:FADD*/PutFloat(reg_sp-144, GetFloat(reg_sp-152)+GetFloat(reg_sp-292));
/*+348:FMUL*/PutFloat(reg_sp-276, GetFloat(reg_sp-144)*GetFloat(reg_sp-284));
/*+349:FNEG*/PutFloat(reg_sp-152,-GetFloat(reg_sp-308));
/*+350:FSUB*/PutFloat(reg_sp-144, GetFloat(reg_sp-152)-GetFloat(reg_sp-292));
/*+351:FMUL*/PutFloat(reg_sp-268, GetFloat(reg_sp-144)*GetFloat(reg_sp-284));
/*+352:ILDC*/memint32[(reg_sp-260)>>2]=+0
/*+353:FGR*/memint32[(reg_sp-152)>>2]=GetFloat(reg_sp-276) >GetFloat(reg_sp-268)
/*+354:JMPZ*/if(memint32[(reg_sp-152)>>2]==0){reg_ip=358;}else{reg_ip=355;}
}
code[355]=function(){
/*+355:MOV*//*8*/memint32[(reg_sp-256)>>2]=memint32[(reg_sp-268)>>2];memint32[((reg_sp-256)>>2)+1]=memint32[((reg_sp-268)>>2)+1];
/*+356:MOV*//*8*/memint32[(reg_sp-268)>>2]=memint32[(reg_sp-276)>>2];memint32[((reg_sp-268)>>2)+1]=memint32[((reg_sp-276)>>2)+1];
/*+357:MOV*//*8*/memint32[(reg_sp-276)>>2]=memint32[(reg_sp-256)>>2];memint32[((reg_sp-276)>>2)+1]=memint32[((reg_sp-256)>>2)+1];;reg_ip=358;
}
code[358]=function(){
/*+358:MOV*//*8*/memint32[(reg_sp-248)>>2]=memint32[(reg_sp-276)>>2];memint32[((reg_sp-248)>>2)+1]=memint32[((reg_sp-276)>>2)+1];
/*+359:FLDC*/PutFloat(reg_sp-152,+0.000000);
/*+360:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-248) <GetFloat(reg_sp-152)
/*+361:JMPZ*/if(memint32[(reg_sp-144)>>2]==0){reg_ip=364;}else{reg_ip=362;}
}
code[362]=function(){
/*+362:ADDSP*/reg_sp+=-452;
/*+363:RET*/reg_ip=regs.pop();
}
code[364]=function(){
/*+364:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+365:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+366:ILDC*/memint32[(reg_sp-140)>>2]=+24
/*+367:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-140)>>2]
/*+368:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-248)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-248)>>2)+1];
/*+369:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-144);
/*+370:CALL*/regs.push(371);reg_ip=135;
}
code[371]=function(){
/*+371:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+372:NOTME*/reg_this=regs.pop();
/*+373:LEA*/PutInt(reg_sp-88,reg_sp-136);
/*+374:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+375:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-152);
/*+376:CALL*/regs.push(377);reg_ip=102;
}
code[377]=function(){
/*+377:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+378:NOTME*/reg_this=regs.pop();
/*+379:MOV*/Memcpy(reg_sp-240,reg_sp-112,+24);
/*+380:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+381:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+382:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+383:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+384:CALL*/regs.push(385);reg_ip=57;
}
code[385]=function(){
/*+385:MOV*/Memcpy(reg_sp-144,reg_sp-24,+24);
/*+386:NOTME*/reg_this=regs.pop();
/*+387:MOV*/Memcpy(reg_sp-216,reg_sp-144,+24);
/*+388:LEA*/PutInt(reg_sp-144,reg_sp-420);
/*+389:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+390:LEA*/PutInt(reg_sp-140,reg_sp-216);
/*+391:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+392:CALL*/regs.push(393);reg_ip=210;
}
code[393]=function(){
/*+393:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+394:MOV*//*8*/memint32[(reg_sp-192)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-192)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+395:FLDC*/PutFloat(reg_sp-152,+0.000000);
/*+396:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-192) <GetFloat(reg_sp-152)
/*+397:FLDC*/PutFloat(reg_sp-140,+1.000000);
/*+398:FGR*/memint32[(reg_sp-132)>>2]=GetFloat(reg_sp-192) >GetFloat(reg_sp-140)
/*+399:LOR*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-144)>>2]||memint32[(reg_sp-132)>>2]
/*+400:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=447;}else{reg_ip=401;}
}
code[401]=function(){
/*+401:MOV*//*8*/memint32[(reg_sp-248)>>2]=memint32[(reg_sp-268)>>2];memint32[((reg_sp-248)>>2)+1]=memint32[((reg_sp-268)>>2)+1];
/*+402:FLDC*/PutFloat(reg_sp-152,+0.000000);
/*+403:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-248) <GetFloat(reg_sp-152)
/*+404:JMPZ*/if(memint32[(reg_sp-144)>>2]==0){reg_ip=407;}else{reg_ip=405;}
}
code[405]=function(){
/*+405:ADDSP*/reg_sp+=-452;
/*+406:RET*/reg_ip=regs.pop();
}
code[407]=function(){
/*+407:ILDC*/memint32[(reg_sp-260)>>2]=+1
/*+408:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+409:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+410:ILDC*/memint32[(reg_sp-140)>>2]=+24
/*+411:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-140)>>2]
/*+412:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-248)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-248)>>2)+1];
/*+413:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-144);
/*+414:CALL*/regs.push(415);reg_ip=135;
}
code[415]=function(){
/*+415:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+416:NOTME*/reg_this=regs.pop();
/*+417:LEA*/PutInt(reg_sp-88,reg_sp-136);
/*+418:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+419:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-152);
/*+420:CALL*/regs.push(421);reg_ip=102;
}
code[421]=function(){
/*+421:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+422:NOTME*/reg_this=regs.pop();
/*+423:MOV*/Memcpy(reg_sp-240,reg_sp-112,+24);
/*+424:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+425:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+426:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+427:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+428:CALL*/regs.push(429);reg_ip=57;
}
code[429]=function(){
/*+429:MOV*/Memcpy(reg_sp-144,reg_sp-24,+24);
/*+430:NOTME*/reg_this=regs.pop();
/*+431:MOV*/Memcpy(reg_sp-184,reg_sp-144,+24);
/*+432:LEA*/PutInt(reg_sp-144,reg_sp-420);
/*+433:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+434:LEA*/PutInt(reg_sp-140,reg_sp-184);
/*+435:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+436:CALL*/regs.push(437);reg_ip=210;
}
code[437]=function(){
/*+437:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+438:MOV*//*8*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-160)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+439:FLDC*/PutFloat(reg_sp-152,+0.000000);
/*+440:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-160) <GetFloat(reg_sp-152)
/*+441:FLDC*/PutFloat(reg_sp-140,+1.000000);
/*+442:FGR*/memint32[(reg_sp-132)>>2]=GetFloat(reg_sp-160) >GetFloat(reg_sp-140)
/*+443:LOR*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-144)>>2]||memint32[(reg_sp-132)>>2]
/*+444:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=447;}else{reg_ip=445;}
}
code[445]=function(){
/*+445:ADDSP*/reg_sp+=-452;
/*+446:RET*/reg_ip=regs.pop();
}
code[447]=function(){
/*+447:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+448:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+449:ILDC*/memint32[(reg_sp-144)>>2]=+0
/*+450:NE*/memint32[(reg_sp-140)>>2]=memint32[(GetInt(reg_sp-152))>>2]!=memint32[(reg_sp-144)>>2]
/*+451:ILDC*/memint32[(reg_sp-132)>>2]=+4
/*+452:ADD*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-132)>>2]
/*+453:FLS*/memint32[(reg_sp-128)>>2]=GetFloat(GetInt(reg_sp-136)) <GetFloat(reg_sp-248)
/*+454:LAND*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-140)>>2]&&memint32[(reg_sp-128)>>2]
/*+455:JMPZ*/if(memint32[(reg_sp-124)>>2]==0){reg_ip=458;}else{reg_ip=456;}
}
code[456]=function(){
/*+456:ADDSP*/reg_sp+=-452;
/*+457:RET*/reg_ip=regs.pop();
}
code[458]=function(){
/*+458:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+459:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+460:ILDC*/memint32[(reg_sp-140)>>2]=+0
/*+461:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+462:MOV*/Memcpy(GetInt(reg_sp-152),GetInt(reg_sp-144),+4);
/*+463:ILDC*/memint32[(reg_sp-148)>>2]=+12
/*+464:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+465:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-240,+24);
/*+466:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+467:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+468:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-248,+8);
/*+469:ILDC*/memint32[(reg_sp-148)>>2]=+36
/*+470:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+471:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+472:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+473:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-192)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-192)>>2)+1];
/*+474:IAM*/regs.push(reg_this);reg_this=reg_sp-444;
/*+475:CALL*/regs.push(476);reg_ip=135;
}
code[476]=function(){
/*+476:MOV*/Memcpy(reg_sp-136,reg_sp-24,+24);
/*+477:NOTME*/reg_this=regs.pop();
/*+478:LEA*/PutInt(reg_sp-88,reg_sp-136);
/*+479:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+480:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-144);
/*+481:CALL*/regs.push(482);reg_ip=102;
}
code[482]=function(){
/*+482:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+483:NOTME*/reg_this=regs.pop();
/*+484:LEA*/PutInt(reg_sp-60,reg_sp-112);
/*+485:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-60)>>2];
/*+486:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+487:CALL*/regs.push(488);reg_ip=57;
}
code[488]=function(){
/*+488:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+489:NOTME*/reg_this=regs.pop();
/*+490:IAM*/regs.push(reg_this);reg_this=reg_sp-84;
/*+491:CALL*/regs.push(492);reg_ip=17;
}
code[492]=function(){
/*+492:MOV*/Memcpy(reg_sp-56,reg_sp-24,+24);
/*+493:NOTME*/reg_this=regs.pop();
/*+494:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-56,+24);
/*+495:JMPZ*/if(memint32[(reg_sp-260)>>2]==0){reg_ip=505;}else{reg_ip=496;}
}
code[496]=function(){
/*+496:ILDC*/memint32[(reg_sp-148)>>2]=+36
/*+497:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+498:ILDC*/memint32[(reg_sp-140)>>2]=+36
/*+499:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-140)>>2]
/*+500:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-144);
/*+501:CALL*/regs.push(502);reg_ip=90;
}
code[502]=function(){
/*+502:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+503:NOTME*/reg_this=regs.pop();
/*+504:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-112,+24);;reg_ip=505;
}
code[505]=function(){
/*+505:ILDC*/memint32[(reg_sp-148)>>2]=+60
/*+506:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+507:ILDC*/memint32[(reg_sp-140)>>2]=+8
/*+508:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-152)>>2]+memint32[(reg_sp-140)>>2]
/*+509:MOV*/Memcpy(GetInt(reg_sp-144),reg_sp-192,+8);
/*+510:ILDC*/memint32[(reg_sp-148)>>2]=+60
/*+511:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+512:ILDC*/memint32[(reg_sp-140)>>2]=+0
/*+513:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-152)>>2]+memint32[(reg_sp-140)>>2]
/*+514:ILDC*/memint32[(reg_sp-132)>>2]=+36
/*+515:ADD*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-132)>>2]
/*+516:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+517:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-136)>>2]+memint32[(reg_sp-124)>>2]
/*+518:ILDC*/memint32[(reg_sp-116)>>2]=+36
/*+519:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-116)>>2]
/*+520:ILDC*/memint32[(reg_sp-108)>>2]=+8
/*+521:ADD*/memint32[(reg_sp-112)>>2]=memint32[(reg_sp-120)>>2]+memint32[(reg_sp-108)>>2]
/*+522:MOV*/Memcpy(reg_sp-24,GetInt(reg_sp-112),+8);
/*+523:MOV*/Memcpy(reg_sp-16,GetInt(reg_sp-128),+8);
/*+524:NCALL*/SC_atan2();
/*+525:MOV*//*8*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-104)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+526:MOV*/Memcpy(GetInt(reg_sp-144),reg_sp-104,+8);
/*+527:ILDC*/memint32[(reg_sp-148)>>2]=+60
/*+528:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+529:ILDC*/memint32[(reg_sp-140)>>2]=+16
/*+530:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-152)>>2]+memint32[(reg_sp-140)>>2]
/*+531:FLDC*/PutFloat(GetInt(reg_sp-144),+0.000000);
/*+532:ADDSP*/reg_sp+=-452;
/*+533:RET*/reg_ip=regs.pop();
}
code[534]=function(){
/*+534:ADDSP*/reg_sp+=+232;
/*+535:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+536:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-124)>>2]
/*+537:ILDC*/memint32[(reg_sp-116)>>2]=+4
/*+538:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-116)>>2]
/*+539:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-120)>>2];
/*+540:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-128);
/*+541:CALL*/regs.push(542);reg_ip=57;
}
code[542]=function(){
/*+542:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+543:NOTME*/reg_this=regs.pop();
/*+544:MOV*/Memcpy(reg_sp-232,reg_sp-112,+24);
/*+545:ILDC*/memint32[(reg_sp-124)>>2]=+28
/*+546:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-124)>>2]
/*+547:ILDC*/memint32[(reg_sp-116)>>2]=+52
/*+548:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-116)>>2]
/*+549:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-120)>>2];
/*+550:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-128)>>2];
/*+551:CALL*/regs.push(552);reg_ip=168;
}
code[552]=function(){
/*+552:MOV*/Memcpy(reg_sp-112,reg_sp-24,+24);
/*+553:MOV*/Memcpy(reg_sp-208,reg_sp-112,+24);
/*+554:ILDC*/memint32[(reg_sp-124)>>2]=+24
/*+555:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-124)>>2]
/*+556:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-128)>>2];
/*+557:LEA*/PutInt(reg_sp-96,reg_sp-232);
/*+558:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-96)>>2];
/*+559:CALL*/regs.push(560);reg_ip=168;
}
code[560]=function(){
/*+560:MOV*/Memcpy(reg_sp-120,reg_sp-24,+24);
/*+561:MOV*/Memcpy(reg_sp-184,reg_sp-120,+24);
/*+562:ILDC*/memint32[(reg_sp-124)>>2]=+24
/*+563:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-124)>>2]
/*+564:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-128)>>2];
/*+565:LEA*/PutInt(reg_sp-112,reg_sp-208);
/*+566:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+567:CALL*/regs.push(568);reg_ip=210;
}
code[568]=function(){
/*+568:MOV*//*8*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-120)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+569:FLDC*/PutFloat(reg_sp-108,-1.000000);
/*+570:FDIV*/PutFloat(reg_sp-160, GetFloat(reg_sp-108)/GetFloat(reg_sp-120));
/*+571:LEA*/PutInt(reg_sp-120,reg_sp-232);
/*+572:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-120)>>2];
/*+573:LEA*/PutInt(reg_sp-116,reg_sp-208);
/*+574:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-116)>>2];
/*+575:CALL*/regs.push(576);reg_ip=210;
}
code[576]=function(){
/*+576:MOV*//*8*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-128)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+577:FMUL*/PutFloat(reg_sp-152, GetFloat(reg_sp-128)*GetFloat(reg_sp-160));
/*+578:FLDC*/PutFloat(reg_sp-128,+0.000000);
/*+579:FGR*/memint32[(reg_sp-120)>>2]=GetFloat(reg_sp-152) >GetFloat(reg_sp-128)
/*+580:JMPZ*/if(memint32[(reg_sp-120)>>2]==0){reg_ip=653;}else{reg_ip=581;}
}
code[581]=function(){
/*+581:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+582:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+583:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+584:NE*/memint32[(reg_sp-116)>>2]=memint32[(GetInt(reg_sp-128))>>2]!=memint32[(reg_sp-120)>>2]
/*+585:ILDC*/memint32[(reg_sp-108)>>2]=+4
/*+586:ADD*/memint32[(reg_sp-112)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-108)>>2]
/*+587:FLS*/memint32[(reg_sp-104)>>2]=GetFloat(GetInt(reg_sp-112)) <GetFloat(reg_sp-152)
/*+588:LAND*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-116)>>2]&&memint32[(reg_sp-104)>>2]
/*+589:JMPZ*/if(memint32[(reg_sp-100)>>2]==0){reg_ip=592;}else{reg_ip=590;}
}
code[590]=function(){
/*+590:ADDSP*/reg_sp+=-232;
/*+591:RET*/reg_ip=regs.pop();
}
code[592]=function(){
/*+592:ILDC*/memint32[(reg_sp-124)>>2]=+52
/*+593:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-124)>>2]
/*+594:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-128)>>2];
/*+595:LEA*/PutInt(reg_sp-112,reg_sp-184);
/*+596:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+597:CALL*/regs.push(598);reg_ip=210;
}
code[598]=function(){
/*+598:MOV*//*8*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-120)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+599:FMUL*/PutFloat(reg_sp-144, GetFloat(reg_sp-120)*GetFloat(reg_sp-160));
/*+600:ILDC*/memint32[(reg_sp-124)>>2]=+28
/*+601:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-124)>>2]
/*+602:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-128)>>2];
/*+603:LEA*/PutInt(reg_sp-112,reg_sp-184);
/*+604:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+605:CALL*/regs.push(606);reg_ip=210;
}
code[606]=function(){
/*+606:MOV*//*8*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-120)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+607:FMUL*/PutFloat(reg_sp-136, GetFloat(reg_sp-120)*GetFloat(reg_sp-160));
/*+608:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+609:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+610:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+611:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-116)>>2]
/*+612:MOV*/Memcpy(GetInt(reg_sp-128),GetInt(reg_sp-120),+4);
/*+613:ILDC*/memint32[(reg_sp-124)>>2]=+4
/*+614:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+615:MOV*/Memcpy(GetInt(reg_sp-128),reg_sp-152,+8);
/*+616:ILDC*/memint32[(reg_sp-124)>>2]=+60
/*+617:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+618:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+619:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-136)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-136)>>2)+1];
/*+620:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-144)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-144)>>2)+1];
/*+621:CALL*/regs.push(622);reg_ip=10;
}
code[622]=function(){
/*+622:MOV*/Memcpy(reg_sp-120,reg_sp-24,+24);
/*+623:MOV*/Memcpy(GetInt(reg_sp-128),reg_sp-120,+24);
/*+624:ILDC*/memint32[(reg_sp-124)>>2]=+12
/*+625:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+626:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+627:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-116)>>2]
/*+628:ILDC*/memint32[(reg_sp-108)>>2]=+24
/*+629:ADD*/memint32[(reg_sp-112)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-108)>>2]
/*+630:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+631:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-112);
/*+632:CALL*/regs.push(633);reg_ip=135;
}
code[633]=function(){
/*+633:MOV*/Memcpy(reg_sp-104,reg_sp-24,+24);
/*+634:NOTME*/reg_this=regs.pop();
/*+635:LEA*/PutInt(reg_sp-56,reg_sp-104);
/*+636:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-56)>>2];
/*+637:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-120);
/*+638:CALL*/regs.push(639);reg_ip=102;
}
code[639]=function(){
/*+639:MOV*/Memcpy(reg_sp-80,reg_sp-24,+24);
/*+640:NOTME*/reg_this=regs.pop();
/*+641:MOV*/Memcpy(GetInt(reg_sp-128),reg_sp-80,+24);
/*+642:ILDC*/memint32[(reg_sp-124)>>2]=+36
/*+643:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+644:IAM*/regs.push(reg_this);reg_this=reg_sp-208;
/*+645:CALL*/regs.push(646);reg_ip=17;
}
code[646]=function(){
/*+646:MOV*/Memcpy(reg_sp-120,reg_sp-24,+24);
/*+647:NOTME*/reg_this=regs.pop();
/*+648:IAM*/regs.push(reg_this);reg_this=reg_sp-120;
/*+649:CALL*/regs.push(650);reg_ip=90;
}
code[650]=function(){
/*+650:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+651:NOTME*/reg_this=regs.pop();
/*+652:MOV*/Memcpy(GetInt(reg_sp-128),reg_sp-72,+24);;reg_ip=653;
}
code[653]=function(){
/*+653:ADDSP*/reg_sp+=-232;
/*+654:RET*/reg_ip=regs.pop();
}
code[655]=function(){
/*+655:ADDSP*/reg_sp+=+172;
/*+656:ILDC*/memint32[(reg_sp-112)>>2]=+4
/*+657:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-112)>>2]
/*+658:ILDC*/memint32[(reg_sp-104)>>2]=+0
/*+659:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-104)>>2]
/*+660:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-108)>>2];
/*+661:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-116);
/*+662:CALL*/regs.push(663);reg_ip=57;
}
code[663]=function(){
/*+663:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+664:NOTME*/reg_this=regs.pop();
/*+665:MOV*/Memcpy(reg_sp-172,reg_sp-100,+24);
/*+666:ILDC*/memint32[(reg_sp-112)>>2]=+24
/*+667:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-112)>>2]
/*+668:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+669:LEA*/PutInt(reg_sp-100,reg_sp-172);
/*+670:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-100)>>2];
/*+671:CALL*/regs.push(672);reg_ip=210;
}
code[672]=function(){
/*+672:MOV*//*8*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-108)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+673:MOV*//*8*/memint32[(reg_sp-148)>>2]=memint32[(reg_sp-108)>>2];memint32[((reg_sp-148)>>2)+1]=memint32[((reg_sp-108)>>2)+1];
/*+674:FLDC*/PutFloat(reg_sp-116,+0.000000);
/*+675:FLS*/memint32[(reg_sp-108)>>2]=GetFloat(reg_sp-148) <GetFloat(reg_sp-116)
/*+676:JMPZ*/if(memint32[(reg_sp-108)>>2]==0){reg_ip=679;}else{reg_ip=677;}
}
code[677]=function(){
/*+677:ADDSP*/reg_sp+=-172;
/*+678:RET*/reg_ip=regs.pop();
}
code[679]=function(){
/*+679:ILDC*/memint32[(reg_sp-112)>>2]=+28
/*+680:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-112)>>2]
/*+681:ILDC*/memint32[(reg_sp-104)>>2]=+28
/*+682:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-104)>>2]
/*+683:FMUL*/PutFloat(reg_sp-100, GetFloat(GetInt(reg_sp-116))*GetFloat(GetInt(reg_sp-108)));
/*+684:FMUL*/PutFloat(reg_sp-92, GetFloat(reg_sp-148)*GetFloat(reg_sp-148));
/*+685:FADD*/PutFloat(reg_sp-84, GetFloat(reg_sp-100)+GetFloat(reg_sp-92));
/*+686:LEA*/PutInt(reg_sp-68,reg_sp-172);
/*+687:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-68)>>2];
/*+688:LEA*/PutInt(reg_sp-64,reg_sp-172);
/*+689:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-64)>>2];
/*+690:CALL*/regs.push(691);reg_ip=210;
}
code[691]=function(){
/*+691:MOV*//*8*/memint32[(reg_sp-76)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-76)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+692:FSUB*/PutFloat(reg_sp-140, GetFloat(reg_sp-84)-GetFloat(reg_sp-76));
/*+693:FLDC*/PutFloat(reg_sp-116,+0.000000);
/*+694:FLS*/memint32[(reg_sp-108)>>2]=GetFloat(reg_sp-140) <GetFloat(reg_sp-116)
/*+695:JMPZ*/if(memint32[(reg_sp-108)>>2]==0){reg_ip=698;}else{reg_ip=696;}
}
code[696]=function(){
/*+696:ADDSP*/reg_sp+=-172;
/*+697:RET*/reg_ip=regs.pop();
}
code[698]=function(){
/*+698:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-140)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-140)>>2)+1];
/*+699:NCALL*/SC_sqrt();
/*+700:MOV*//*8*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-116)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+701:MOV*//*8*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-116)>>2];memint32[((reg_sp-132)>>2)+1]=memint32[((reg_sp-116)>>2)+1];
/*+702:FSUB*/PutFloat(reg_sp-124, GetFloat(reg_sp-148)-GetFloat(reg_sp-132));
/*+703:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+704:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+705:ILDC*/memint32[(reg_sp-108)>>2]=+0
/*+706:NE*/memint32[(reg_sp-104)>>2]=memint32[(GetInt(reg_sp-116))>>2]!=memint32[(reg_sp-108)>>2]
/*+707:ILDC*/memint32[(reg_sp-96)>>2]=+4
/*+708:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-96)>>2]
/*+709:FLS*/memint32[(reg_sp-92)>>2]=GetFloat(GetInt(reg_sp-100)) <GetFloat(reg_sp-124)
/*+710:LAND*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-104)>>2]&&memint32[(reg_sp-92)>>2]
/*+711:JMPZ*/if(memint32[(reg_sp-88)>>2]==0){reg_ip=714;}else{reg_ip=712;}
}
code[712]=function(){
/*+712:ADDSP*/reg_sp+=-172;
/*+713:RET*/reg_ip=regs.pop();
}
code[714]=function(){
/*+714:ILDC*/memint32[(reg_sp-112)>>2]=+4
/*+715:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+716:FSUB*/PutFloat(GetInt(reg_sp-116), GetFloat(reg_sp-148)-GetFloat(reg_sp-132));
/*+717:ILDC*/memint32[(reg_sp-112)>>2]=+12
/*+718:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+719:ILDC*/memint32[(reg_sp-104)>>2]=+0
/*+720:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-104)>>2]
/*+721:ILDC*/memint32[(reg_sp-96)>>2]=+24
/*+722:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-96)>>2]
/*+723:ILDC*/memint32[(reg_sp-88)>>2]=+4
/*+724:ADD*/memint32[(reg_sp-92)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-88)>>2]
/*+725:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-92),+8);
/*+726:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-100);
/*+727:CALL*/regs.push(728);reg_ip=135;
}
code[728]=function(){
/*+728:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+729:NOTME*/reg_this=regs.pop();
/*+730:LEA*/PutInt(reg_sp-36,reg_sp-84);
/*+731:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-36)>>2];
/*+732:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-108);
/*+733:CALL*/regs.push(734);reg_ip=102;
}
code[734]=function(){
/*+734:MOV*/Memcpy(reg_sp-60,reg_sp-24,+24);
/*+735:NOTME*/reg_this=regs.pop();
/*+736:MOV*/Memcpy(GetInt(reg_sp-116),reg_sp-60,+24);
/*+737:ILDC*/memint32[(reg_sp-112)>>2]=+36
/*+738:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+739:ILDC*/memint32[(reg_sp-104)>>2]=+12
/*+740:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-104)>>2]
/*+741:ILDC*/memint32[(reg_sp-96)>>2]=+4
/*+742:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-96)>>2]
/*+743:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-100)>>2];
/*+744:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-108);
/*+745:CALL*/regs.push(746);reg_ip=57;
}
code[746]=function(){
/*+746:MOV*/Memcpy(reg_sp-92,reg_sp-24,+24);
/*+747:NOTME*/reg_this=regs.pop();
/*+748:IAM*/regs.push(reg_this);reg_this=reg_sp-92;
/*+749:CALL*/regs.push(750);reg_ip=17;
}
code[750]=function(){
/*+750:MOV*/Memcpy(reg_sp-68,reg_sp-24,+24);
/*+751:NOTME*/reg_this=regs.pop();
/*+752:MOV*/Memcpy(GetInt(reg_sp-116),reg_sp-68,+24);
/*+753:ILDC*/memint32[(reg_sp-112)>>2]=+60
/*+754:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+755:ILDC*/memint32[(reg_sp-104)>>2]=+12
/*+756:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-104)>>2]
/*+757:MOV*/Memcpy(GetInt(reg_sp-116),GetInt(reg_sp-108),+24);
/*+758:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+759:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+760:ILDC*/memint32[(reg_sp-104)>>2]=+0
/*+761:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-104)>>2]
/*+762:MOV*/Memcpy(GetInt(reg_sp-116),GetInt(reg_sp-108),+4);
/*+763:ADDSP*/reg_sp+=-172;
/*+764:RET*/reg_ip=regs.pop();
}
code[765]=function(){
/*+765:ADDSP*/reg_sp+=+84;
/*+766:ILDC*/memint32[(reg_sp-84)>>2]=+0
/*+767:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+768:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+769:MADD*/PutInt(reg_sp-80,memint32[(reg_sp-80)>>2]+memint32[(reg_sp-84)>>2]*memint32[(reg_sp-76)>>2]);
/*+770:ILDC*/memint32[(reg_sp-64)>>2]=+16
/*+771:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+772:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+773:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+774:MOV*/Memcpy(reg_sp-16,GetInt(reg_sp-68),+8);
/*+775:CALL*/regs.push(776);reg_ip=231;
}
code[776]=function(){
/*+776:MOV*//*8*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-60)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+777:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+778:I2F*/PutFloat(reg_sp-48,memint32[(reg_sp-52)>>2]);
/*+779:FMUL*/PutFloat(reg_sp-40, GetFloat(reg_sp-60)*GetFloat(reg_sp-48));
/*+780:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+781:I2C*/PutChar(GetInt(reg_sp-80),memint32[(reg_sp-72)>>2]);
/*+782:ILDC*/memint32[(reg_sp-84)>>2]=+1
/*+783:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+784:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+785:MADD*/PutInt(reg_sp-80,memint32[(reg_sp-80)>>2]+memint32[(reg_sp-84)>>2]*memint32[(reg_sp-76)>>2]);
/*+786:ILDC*/memint32[(reg_sp-64)>>2]=+8
/*+787:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+788:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+789:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+790:MOV*/Memcpy(reg_sp-16,GetInt(reg_sp-68),+8);
/*+791:CALL*/regs.push(792);reg_ip=231;
}
code[792]=function(){
/*+792:MOV*//*8*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-60)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+793:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+794:I2F*/PutFloat(reg_sp-48,memint32[(reg_sp-52)>>2]);
/*+795:FMUL*/PutFloat(reg_sp-40, GetFloat(reg_sp-60)*GetFloat(reg_sp-48));
/*+796:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+797:I2C*/PutChar(GetInt(reg_sp-80),memint32[(reg_sp-72)>>2]);
/*+798:ILDC*/memint32[(reg_sp-84)>>2]=+2
/*+799:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+800:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+801:MADD*/PutInt(reg_sp-80,memint32[(reg_sp-80)>>2]+memint32[(reg_sp-84)>>2]*memint32[(reg_sp-76)>>2]);
/*+802:ILDC*/memint32[(reg_sp-64)>>2]=+0
/*+803:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+804:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+805:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+806:MOV*/Memcpy(reg_sp-16,GetInt(reg_sp-68),+8);
/*+807:CALL*/regs.push(808);reg_ip=231;
}
code[808]=function(){
/*+808:MOV*//*8*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-60)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+809:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+810:I2F*/PutFloat(reg_sp-48,memint32[(reg_sp-52)>>2]);
/*+811:FMUL*/PutFloat(reg_sp-40, GetFloat(reg_sp-60)*GetFloat(reg_sp-48));
/*+812:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+813:I2C*/PutChar(GetInt(reg_sp-80),memint32[(reg_sp-72)>>2]);
/*+814:ADDSP*/reg_sp+=-84;
/*+815:RET*/reg_ip=regs.pop();
}
code[816]=function(){
/*+816:ADDSP*/reg_sp+=+276;
/*+817:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+818:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-120)>>2]
/*+819:ILDC*/memint32[(reg_sp-112)>>2]=+4
/*+820:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+821:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+822:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-124);
/*+823:CALL*/regs.push(824);reg_ip=57;
}
code[824]=function(){
/*+824:MOV*/Memcpy(reg_sp-108,reg_sp-24,+24);
/*+825:NOTME*/reg_this=regs.pop();
/*+826:MOV*/Memcpy(reg_sp-276,reg_sp-108,+24);
/*+827:ILDC*/memint32[(reg_sp-120)>>2]=+28
/*+828:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-120)>>2]
/*+829:ILDC*/memint32[(reg_sp-112)>>2]=+4
/*+830:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+831:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+832:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-124);
/*+833:CALL*/regs.push(834);reg_ip=57;
}
code[834]=function(){
/*+834:MOV*/Memcpy(reg_sp-108,reg_sp-24,+24);
/*+835:NOTME*/reg_this=regs.pop();
/*+836:MOV*/Memcpy(reg_sp-252,reg_sp-108,+24);
/*+837:ILDC*/memint32[(reg_sp-120)>>2]=+4
/*+838:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-120)>>2]
/*+839:ILDC*/memint32[(reg_sp-112)>>2]=+52
/*+840:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+841:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+842:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-124);
/*+843:CALL*/regs.push(844);reg_ip=57;
}
code[844]=function(){
/*+844:MOV*/Memcpy(reg_sp-108,reg_sp-24,+24);
/*+845:NOTME*/reg_this=regs.pop();
/*+846:MOV*/Memcpy(reg_sp-228,reg_sp-108,+24);
/*+847:LEA*/PutInt(reg_sp-100,reg_sp-228);
/*+848:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-100)>>2];
/*+849:LEA*/PutInt(reg_sp-96,reg_sp-252);
/*+850:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-96)>>2];
/*+851:CALL*/regs.push(852);reg_ip=168;
}
code[852]=function(){
/*+852:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+853:MOV*/Memcpy(reg_sp-204,reg_sp-124,+24);
/*+854:ILDC*/memint32[(reg_sp-120)>>2]=+24
/*+855:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-120)>>2]
/*+856:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-124)>>2];
/*+857:LEA*/PutInt(reg_sp-92,reg_sp-276);
/*+858:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+859:CALL*/regs.push(860);reg_ip=168;
}
code[860]=function(){
/*+860:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+861:MOV*/Memcpy(reg_sp-180,reg_sp-116,+24);
/*+862:ILDC*/memint32[(reg_sp-120)>>2]=+24
/*+863:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-120)>>2]
/*+864:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-124)>>2];
/*+865:LEA*/PutInt(reg_sp-108,reg_sp-204);
/*+866:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-108)>>2];
/*+867:CALL*/regs.push(868);reg_ip=210;
}
code[868]=function(){
/*+868:MOV*//*8*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-116)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+869:FLDC*/PutFloat(reg_sp-104,-1.000000);
/*+870:FDIV*/PutFloat(reg_sp-156, GetFloat(reg_sp-104)/GetFloat(reg_sp-116));
/*+871:LEA*/PutInt(reg_sp-116,reg_sp-276);
/*+872:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+873:LEA*/PutInt(reg_sp-112,reg_sp-204);
/*+874:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+875:CALL*/regs.push(876);reg_ip=210;
}
code[876]=function(){
/*+876:MOV*//*8*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-124)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+877:FMUL*/PutFloat(reg_sp-148, GetFloat(reg_sp-124)*GetFloat(reg_sp-156));
/*+878:FLDC*/PutFloat(reg_sp-124,+0.000000);
/*+879:FGR*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-148) >GetFloat(reg_sp-124)
/*+880:JMPZ*/if(memint32[(reg_sp-116)>>2]==0){reg_ip=963;}else{reg_ip=881;}
}
code[881]=function(){
/*+881:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+882:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+883:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+884:NE*/memint32[(reg_sp-112)>>2]=memint32[(GetInt(reg_sp-124))>>2]!=memint32[(reg_sp-116)>>2]
/*+885:ILDC*/memint32[(reg_sp-104)>>2]=+4
/*+886:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-104)>>2]
/*+887:FLS*/memint32[(reg_sp-100)>>2]=GetFloat(GetInt(reg_sp-108)) <GetFloat(reg_sp-148)
/*+888:LAND*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-112)>>2]&&memint32[(reg_sp-100)>>2]
/*+889:JMPZ*/if(memint32[(reg_sp-96)>>2]==0){reg_ip=892;}else{reg_ip=890;}
}
code[890]=function(){
/*+890:ADDSP*/reg_sp+=-276;
/*+891:RET*/reg_ip=regs.pop();
}
code[892]=function(){
/*+892:LEA*/PutInt(reg_sp-116,reg_sp-228);
/*+893:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+894:LEA*/PutInt(reg_sp-112,reg_sp-180);
/*+895:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+896:CALL*/regs.push(897);reg_ip=210;
}
code[897]=function(){
/*+897:MOV*//*8*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-124)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+898:FMUL*/PutFloat(reg_sp-140, GetFloat(reg_sp-124)*GetFloat(reg_sp-156));
/*+899:FLDC*/PutFloat(reg_sp-124,+0.000000);
/*+900:FLS*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-140) <GetFloat(reg_sp-124)
/*+901:FLDC*/PutFloat(reg_sp-112,+1.000000);
/*+902:FGR*/memint32[(reg_sp-104)>>2]=GetFloat(reg_sp-140) >GetFloat(reg_sp-112)
/*+903:LOR*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-116)>>2]||memint32[(reg_sp-104)>>2]
/*+904:JMPZ*/if(memint32[(reg_sp-100)>>2]==0){reg_ip=907;}else{reg_ip=905;}
}
code[905]=function(){
/*+905:ADDSP*/reg_sp+=-276;
/*+906:RET*/reg_ip=regs.pop();
}
code[907]=function(){
/*+907:LEA*/PutInt(reg_sp-116,reg_sp-252);
/*+908:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+909:LEA*/PutInt(reg_sp-112,reg_sp-180);
/*+910:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+911:CALL*/regs.push(912);reg_ip=210;
}
code[912]=function(){
/*+912:MOV*//*8*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-124)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+913:FMUL*/PutFloat(reg_sp-132, GetFloat(reg_sp-124)*GetFloat(reg_sp-156));
/*+914:FLDC*/PutFloat(reg_sp-124,+0.000000);
/*+915:FLS*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-132) <GetFloat(reg_sp-124)
/*+916:FLDC*/PutFloat(reg_sp-112,+1.000000);
/*+917:FGR*/memint32[(reg_sp-104)>>2]=GetFloat(reg_sp-132) >GetFloat(reg_sp-112)
/*+918:LOR*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-116)>>2]||memint32[(reg_sp-104)>>2]
/*+919:JMPZ*/if(memint32[(reg_sp-100)>>2]==0){reg_ip=922;}else{reg_ip=920;}
}
code[920]=function(){
/*+920:ADDSP*/reg_sp+=-276;
/*+921:RET*/reg_ip=regs.pop();
}
code[922]=function(){
/*+922:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+923:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+924:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+925:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+926:MOV*/Memcpy(GetInt(reg_sp-124),GetInt(reg_sp-116),+4);
/*+927:ILDC*/memint32[(reg_sp-120)>>2]=+4
/*+928:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+929:MOV*/Memcpy(GetInt(reg_sp-124),reg_sp-148,+8);
/*+930:ILDC*/memint32[(reg_sp-120)>>2]=+60
/*+931:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+932:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+933:MOV*//*8*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-132)>>2];memint32[((reg_sp-40)>>2)+1]=memint32[((reg_sp-132)>>2)+1];
/*+934:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-140)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-140)>>2)+1];
/*+935:CALL*/regs.push(936);reg_ip=10;
}
code[936]=function(){
/*+936:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+937:MOV*/Memcpy(GetInt(reg_sp-124),reg_sp-116,+24);
/*+938:ILDC*/memint32[(reg_sp-120)>>2]=+12
/*+939:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+940:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+941:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-112)>>2]
/*+942:ILDC*/memint32[(reg_sp-104)>>2]=+24
/*+943:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-104)>>2]
/*+944:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-148)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-148)>>2)+1];
/*+945:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-108);
/*+946:CALL*/regs.push(947);reg_ip=135;
}
code[947]=function(){
/*+947:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+948:NOTME*/reg_this=regs.pop();
/*+949:LEA*/PutInt(reg_sp-52,reg_sp-100);
/*+950:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+951:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-116);
/*+952:CALL*/regs.push(953);reg_ip=102;
}
code[953]=function(){
/*+953:MOV*/Memcpy(reg_sp-76,reg_sp-24,+24);
/*+954:NOTME*/reg_this=regs.pop();
/*+955:MOV*/Memcpy(GetInt(reg_sp-124),reg_sp-76,+24);
/*+956:ILDC*/memint32[(reg_sp-120)>>2]=+36
/*+957:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+958:IAM*/regs.push(reg_this);reg_this=reg_sp-204;
/*+959:CALL*/regs.push(960);reg_ip=17;
}
code[960]=function(){
/*+960:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+961:NOTME*/reg_this=regs.pop();
/*+962:MOV*/Memcpy(GetInt(reg_sp-124),reg_sp-116,+24);;reg_ip=963;
}
code[963]=function(){
/*+963:ADDSP*/reg_sp+=-276;
/*+964:RET*/reg_ip=regs.pop();
}
code[965]=function(){
/*+965:ADDSP*/reg_sp+=+16;
/*+966:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+967:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+968:LEA*/PutInt(reg_sp-16,+0);
/*+969:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+970:CALL*/regs.push(971);reg_ip=655;
}
code[971]=function(){
/*+971:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+972:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+973:LEA*/PutInt(reg_sp-16,+36);
/*+974:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+975:CALL*/regs.push(976);reg_ip=655;
}
code[976]=function(){
/*+976:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+977:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+978:LEA*/PutInt(reg_sp-16,+72);
/*+979:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+980:CALL*/regs.push(981);reg_ip=655;
}
code[981]=function(){
/*+981:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+982:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+983:LEA*/PutInt(reg_sp-16,+108);
/*+984:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+985:CALL*/regs.push(986);reg_ip=534;
}
code[986]=function(){
/*+986:ADDSP*/reg_sp+=-16;
/*+987:RET*/reg_ip=regs.pop();
}
code[988]=function(){
/*+988:ADDSP*/reg_sp+=+188;
/*+989:FLDC*/PutFloat(reg_sp-188,+0.000000);
/*+990:FLS*/memint32[(reg_sp-180)>>2]=GetFloat(reg_sp-220) <GetFloat(reg_sp-188)
/*+991:JMPZ*/if(memint32[(reg_sp-180)>>2]==0){reg_ip=995;}else{reg_ip=992;}
}
code[992]=function(){
/*+992:FLDC*/PutFloat(reg_sp-188,-0.200000);
/*+993:FMUL*/PutFloat(reg_sp-220, GetFloat(reg_sp-220)*GetFloat(reg_sp-188));
/*+994:MOV*//*8*/memint32[(reg_sp-180)>>2]=memint32[(reg_sp-220)>>2];memint32[((reg_sp-180)>>2)+1]=memint32[((reg_sp-220)>>2)+1];;reg_ip=995;
}
code[995]=function(){
/*+995:FLDC*/PutFloat(reg_sp-188,+1.000000);
/*+996:FSUB*/PutFloat(reg_sp-180, GetFloat(reg_sp-188)-GetFloat(reg_sp-220));
/*+997:FLDC*/PutFloat(reg_sp-24,+6.000000);
/*+998:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-180)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-180)>>2)+1];
/*+999:NCALL*/SC_pow();
/*+1000:MOV*//*8*/memint32[(reg_sp-172)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-172)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1001:MOV*//*8*/memint32[(reg_sp-220)>>2]=memint32[(reg_sp-172)>>2];memint32[((reg_sp-220)>>2)+1]=memint32[((reg_sp-172)>>2)+1];
/*+1002:FLDC*/PutFloat(reg_sp-48,+0.700000);
/*+1003:FLDC*/PutFloat(reg_sp-40,+0.750000);
/*+1004:FLDC*/PutFloat(reg_sp-32,+0.900000);
/*+1005:CALL*/regs.push(1006);reg_ip=10;
}
code[1006]=function(){
/*+1006:MOV*/Memcpy(reg_sp-188,reg_sp-24,+24);
/*+1007:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-220)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-220)>>2)+1];
/*+1008:IAM*/regs.push(reg_this);reg_this=reg_sp-188;
/*+1009:CALL*/regs.push(1010);reg_ip=135;
}
code[1010]=function(){
/*+1010:MOV*/Memcpy(reg_sp-164,reg_sp-24,+24);
/*+1011:NOTME*/reg_this=regs.pop();
/*+1012:FLDC*/PutFloat(reg_sp-48,+0.900000);
/*+1013:FLDC*/PutFloat(reg_sp-40,+0.600000);
/*+1014:FLDC*/PutFloat(reg_sp-32,+0.400000);
/*+1015:CALL*/regs.push(1016);reg_ip=10;
}
code[1016]=function(){
/*+1016:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1017:FLDC*/PutFloat(reg_sp-116,+1.000000);
/*+1018:FSUB*/PutFloat(reg_sp-108, GetFloat(reg_sp-116)-GetFloat(reg_sp-220));
/*+1019:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-108)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-108)>>2)+1];
/*+1020:IAM*/regs.push(reg_this);reg_this=reg_sp-140;
/*+1021:CALL*/regs.push(1022);reg_ip=135;
}
code[1022]=function(){
/*+1022:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+1023:NOTME*/reg_this=regs.pop();
/*+1024:LEA*/PutInt(reg_sp-52,reg_sp-100);
/*+1025:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+1026:IAM*/regs.push(reg_this);reg_this=reg_sp-164;
/*+1027:CALL*/regs.push(1028);reg_ip=102;
}
code[1028]=function(){
/*+1028:MOV*/Memcpy(reg_sp-76,reg_sp-24,+24);
/*+1029:NOTME*/reg_this=regs.pop();
/*+1030:MOV*/Memcpy(reg_sp-212,reg_sp-76,+24);
/*+1031:ADDSP*/reg_sp+=-188;
/*+1032:RET*/reg_ip=regs.pop();
}
code[1033]=function(){
/*+1033:ADDSP*/reg_sp+=+200;
/*+1034:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-228);
/*+1035:CALL*/regs.push(1036);reg_ip=90;
}
code[1036]=function(){
/*+1036:MOV*/Memcpy(reg_sp-176,reg_sp-24,+24);
/*+1037:NOTME*/reg_this=regs.pop();
/*+1038:LEA*/PutInt(reg_sp-144,reg_sp-176);
/*+1039:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+1040:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-232)>>2];
/*+1041:CALL*/regs.push(1042);reg_ip=210;
}
code[1042]=function(){
/*+1042:MOV*//*8*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-152)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1043:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-152)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-152)>>2)+1];
/*+1044:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-232);
/*+1045:CALL*/regs.push(1046);reg_ip=135;
}
code[1046]=function(){
/*+1046:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1047:NOTME*/reg_this=regs.pop();
/*+1048:FLDC*/PutFloat(reg_sp-116,+2.000000);
/*+1049:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1050:IAM*/regs.push(reg_this);reg_this=reg_sp-140;
/*+1051:CALL*/regs.push(1052);reg_ip=135;
}
code[1052]=function(){
/*+1052:MOV*/Memcpy(reg_sp-108,reg_sp-24,+24);
/*+1053:NOTME*/reg_this=regs.pop();
/*+1054:LEA*/PutInt(reg_sp-60,reg_sp-108);
/*+1055:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-60)>>2];
/*+1056:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-228);
/*+1057:CALL*/regs.push(1058);reg_ip=102;
}
code[1058]=function(){
/*+1058:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+1059:NOTME*/reg_this=regs.pop();
/*+1060:IAM*/regs.push(reg_this);reg_this=reg_sp-84;
/*+1061:CALL*/regs.push(1062);reg_ip=17;
}
code[1062]=function(){
/*+1062:MOV*/Memcpy(reg_sp-56,reg_sp-24,+24);
/*+1063:NOTME*/reg_this=regs.pop();
/*+1064:MOV*/Memcpy(reg_sp-224,reg_sp-56,+24);
/*+1065:ADDSP*/reg_sp+=-200;
/*+1066:RET*/reg_ip=regs.pop();
}
code[1067]=function(){
/*+1067:ADDSP*/reg_sp+=+144;
/*+1068:FLDC*/PutFloat(reg_sp-48,+0.500000);
/*+1069:FLDC*/PutFloat(reg_sp-40,+0.500000);
/*+1070:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1071:CALL*/regs.push(1072);reg_ip=10;
}
code[1072]=function(){
/*+1072:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1073:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-140,+24);
/*+1074:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1075:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1076:ILDC*/memint32[(reg_sp-132)>>2]=+1
/*+1077:EQ*/memint32[(reg_sp-128)>>2]=memint32[(GetInt(reg_sp-140))>>2]==memint32[(reg_sp-132)>>2]
/*+1078:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1105;}else{reg_ip=1079;}
}
code[1079]=function(){
/*+1079:ILDC*/memint32[(reg_sp-132)>>2]=+60
/*+1080:ADD*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-132)>>2]
/*+1081:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+1082:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-136)>>2]+memint32[(reg_sp-124)>>2]
/*+1083:ILDC*/memint32[(reg_sp-120)>>2]=+1000
/*+1084:I2F*/PutFloat(reg_sp-116,memint32[(reg_sp-120)>>2]);
/*+1085:FADD*/PutFloat(reg_sp-108, GetFloat(GetInt(reg_sp-128))+GetFloat(reg_sp-116));
/*+1086:F2I*/memint32[(reg_sp-140)>>2]=GetFloat(reg_sp-108)
/*+1087:ILDC*/memint32[(reg_sp-92)>>2]=+60
/*+1088:ADD*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-92)>>2]
/*+1089:ILDC*/memint32[(reg_sp-84)>>2]=+8
/*+1090:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-96)>>2]+memint32[(reg_sp-84)>>2]
/*+1091:ILDC*/memint32[(reg_sp-80)>>2]=+1000
/*+1092:I2F*/PutFloat(reg_sp-76,memint32[(reg_sp-80)>>2]);
/*+1093:FSUB*/PutFloat(reg_sp-68, GetFloat(GetInt(reg_sp-88))-GetFloat(reg_sp-76));
/*+1094:F2I*/memint32[(reg_sp-100)>>2]=GetFloat(reg_sp-68)
/*+1095:XOR*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-140)>>2]^memint32[(reg_sp-100)>>2]
/*+1096:ILDC*/memint32[(reg_sp-56)>>2]=+1
/*+1097:AND*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-60)>>2]&memint32[(reg_sp-56)>>2]
/*+1098:I2F*/PutFloat(reg_sp-48,memint32[(reg_sp-144)>>2]);
/*+1099:I2F*/PutFloat(reg_sp-40,memint32[(reg_sp-144)>>2]);
/*+1100:I2F*/PutFloat(reg_sp-32,memint32[(reg_sp-144)>>2]);
/*+1101:CALL*/regs.push(1102);reg_ip=10;
}
code[1102]=function(){
/*+1102:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1103:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-140,+24);
/*+1104:JMP*/reg_ip=1160;
}
code[1105]=function(){
/*+1105:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1106:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1107:ILDC*/memint32[(reg_sp-132)>>2]=+2
/*+1108:EQ*/memint32[(reg_sp-128)>>2]=memint32[(GetInt(reg_sp-140))>>2]==memint32[(reg_sp-132)>>2]
/*+1109:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1117;}else{reg_ip=1110;}
}
code[1110]=function(){
/*+1110:FLDC*/PutFloat(reg_sp-48,+0.100000);
/*+1111:FLDC*/PutFloat(reg_sp-40,+0.200000);
/*+1112:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1113:CALL*/regs.push(1114);reg_ip=10;
}
code[1114]=function(){
/*+1114:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1115:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-140,+24);
/*+1116:JMP*/reg_ip=1160;
}
code[1117]=function(){
/*+1117:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1118:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1119:ILDC*/memint32[(reg_sp-132)>>2]=+3
/*+1120:EQ*/memint32[(reg_sp-128)>>2]=memint32[(GetInt(reg_sp-140))>>2]==memint32[(reg_sp-132)>>2]
/*+1121:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1129;}else{reg_ip=1122;}
}
code[1122]=function(){
/*+1122:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1123:FLDC*/PutFloat(reg_sp-40,+0.500000);
/*+1124:FLDC*/PutFloat(reg_sp-32,+0.200000);
/*+1125:CALL*/regs.push(1126);reg_ip=10;
}
code[1126]=function(){
/*+1126:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1127:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-140,+24);
/*+1128:JMP*/reg_ip=1160;
}
code[1129]=function(){
/*+1129:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1130:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1131:ILDC*/memint32[(reg_sp-132)>>2]=+4
/*+1132:EQ*/memint32[(reg_sp-128)>>2]=memint32[(GetInt(reg_sp-140))>>2]==memint32[(reg_sp-132)>>2]
/*+1133:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1141;}else{reg_ip=1134;}
}
code[1134]=function(){
/*+1134:FLDC*/PutFloat(reg_sp-48,+0.200000);
/*+1135:FLDC*/PutFloat(reg_sp-40,+0.800000);
/*+1136:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1137:CALL*/regs.push(1138);reg_ip=10;
}
code[1138]=function(){
/*+1138:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1139:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-140,+24);
/*+1140:JMP*/reg_ip=1160;
}
code[1141]=function(){
/*+1141:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1142:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1143:ILDC*/memint32[(reg_sp-132)>>2]=+5
/*+1144:EQ*/memint32[(reg_sp-128)>>2]=memint32[(GetInt(reg_sp-140))>>2]==memint32[(reg_sp-132)>>2]
/*+1145:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1160;}else{reg_ip=1146;}
}
code[1146]=function(){
/*+1146:ILDC*/memint32[(reg_sp-136)>>2]=+60
/*+1147:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1148:ILDC*/memint32[(reg_sp-128)>>2]=+0
/*+1149:ADD*/memint32[(reg_sp-132)>>2]=memint32[(reg_sp-140)>>2]+memint32[(reg_sp-128)>>2]
/*+1150:ILDC*/memint32[(reg_sp-120)>>2]=+60
/*+1151:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-120)>>2]
/*+1152:ILDC*/memint32[(reg_sp-112)>>2]=+8
/*+1153:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-124)>>2]+memint32[(reg_sp-112)>>2]
/*+1154:FLDC*/PutFloat(reg_sp-48,+0.500000);
/*+1155:MOV*/Memcpy(reg_sp-40,GetInt(reg_sp-116),+8);
/*+1156:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-132),+8);
/*+1157:CALL*/regs.push(1158);reg_ip=10;
}
code[1158]=function(){
/*+1158:MOV*/Memcpy(reg_sp-108,reg_sp-24,+24);
/*+1159:MOV*/Memcpy(GetInt(reg_sp-152),reg_sp-108,+24);;reg_ip=1160;
}
code[1160]=function(){
/*+1160:FLDC*/PutFloat(GetInt(reg_sp-156),+1.000000);
/*+1161:ADDSP*/reg_sp+=-144;
/*+1162:RET*/reg_ip=regs.pop();
}
code[1163]=function(){
/*+1163:ADDSP*/reg_sp+=+392;
/*+1164:ILDC*/memint32[(reg_sp-160)>>2]=+36
/*+1165:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1166:LEA*/PutInt(reg_sp-148,+244);
/*+1167:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-148)>>2];
/*+1168:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1169:CALL*/regs.push(1170);reg_ip=210;
}
code[1170]=function(){
/*+1170:MOV*//*8*/memint32[(reg_sp-156)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-156)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1171:FLDC*/PutFloat(reg_sp-144,+1.500000);
/*+1172:FMUL*/PutFloat(reg_sp-392, GetFloat(reg_sp-156)*GetFloat(reg_sp-144));
/*+1173:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1174:I2F*/PutFloat(reg_sp-160,memint32[(reg_sp-164)>>2]);
/*+1175:FLS*/memint32[(reg_sp-152)>>2]=GetFloat(reg_sp-392) <GetFloat(reg_sp-160)
/*+1176:JMPZ*/if(memint32[(reg_sp-152)>>2]==0){reg_ip=1178;}else{reg_ip=1177;}
}
code[1177]=function(){
/*+1177:FLDC*/PutFloat(reg_sp-392,+0.000000);;reg_ip=1178;
}
code[1178]=function(){
/*+1178:ILDC*/memint32[(reg_sp-160)>>2]=+24
/*+1179:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-404)>>2]+memint32[(reg_sp-160)>>2]
/*+1180:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-164)>>2];
/*+1181:IAM*/regs.push(reg_this);reg_this=+244;
/*+1182:CALL*/regs.push(1183);reg_ip=57;
}
code[1183]=function(){
/*+1183:MOV*/Memcpy(reg_sp-156,reg_sp-24,+24);
/*+1184:NOTME*/reg_this=regs.pop();
/*+1185:IAM*/regs.push(reg_this);reg_this=reg_sp-156;
/*+1186:CALL*/regs.push(1187);reg_ip=17;
}
code[1187]=function(){
/*+1187:MOV*/Memcpy(reg_sp-132,reg_sp-24,+24);
/*+1188:NOTME*/reg_this=regs.pop();
/*+1189:IAM*/regs.push(reg_this);reg_this=reg_sp-132;
/*+1190:CALL*/regs.push(1191);reg_ip=90;
}
code[1191]=function(){
/*+1191:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+1192:NOTME*/reg_this=regs.pop();
/*+1193:MOV*/Memcpy(reg_sp-384,reg_sp-84,+24);
/*+1194:ILDC*/memint32[(reg_sp-160)>>2]=+4
/*+1195:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-408)>>2]+memint32[(reg_sp-160)>>2]
/*+1196:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-164)>>2];
/*+1197:LEA*/PutInt(reg_sp-148,+244);
/*+1198:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-148)>>2];
/*+1199:CALL*/regs.push(1200);reg_ip=210;
}
code[1200]=function(){
/*+1200:MOV*//*8*/memint32[(reg_sp-156)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-156)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1201:MOV*//*8*/memint32[(reg_sp-360)>>2]=memint32[(reg_sp-156)>>2];memint32[((reg_sp-360)>>2)+1]=memint32[((reg_sp-156)>>2)+1];
/*+1202:MOV*//*8*/memint32[(reg_sp-352)>>2]=memint32[(reg_sp-392)>>2];memint32[((reg_sp-352)>>2)+1]=memint32[((reg_sp-392)>>2)+1];
/*+1203:FLDC*/PutFloat(reg_sp-344,+1.000000);
/*+1204:ILDC*/memint32[(reg_sp-336)>>2]=+0
/*+1205:MOV*/Memcpy(reg_sp-252,GetInt(reg_sp-400),+24);
/*+1206:ILDC*/memint32[(reg_sp-160)>>2]=+12
/*+1207:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1208:FLDC*/PutFloat(reg_sp-156,+0.002000);
/*+1209:FLDC*/PutFloat(reg_sp-32,+0.002000);
/*+1210:IAM*/regs.push(reg_this);reg_this=reg_sp-252;
/*+1211:CALL*/regs.push(1212);reg_ip=135;
}
code[1212]=function(){
/*+1212:MOV*/Memcpy(reg_sp-148,reg_sp-24,+24);
/*+1213:NOTME*/reg_this=regs.pop();
/*+1214:LEA*/PutInt(reg_sp-100,reg_sp-148);
/*+1215:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-100)>>2];
/*+1216:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-164);
/*+1217:CALL*/regs.push(1218);reg_ip=102;
}
code[1218]=function(){
/*+1218:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+1219:NOTME*/reg_this=regs.pop();
/*+1220:MOV*/Memcpy(reg_sp-228,reg_sp-124,+24);
/*+1221:MOV*/Memcpy(reg_sp-204,reg_sp-252,+24);
/*+1222:LEA*/PutInt(reg_sp-164,reg_sp-336);
/*+1223:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-164)>>2];
/*+1224:LEA*/PutInt(reg_sp-160,reg_sp-228);
/*+1225:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-160)>>2];
/*+1226:CALL*/regs.push(1227);reg_ip=965;
}
code[1227]=function(){
/*+1227:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1228:NE*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-336)>>2]!=memint32[(reg_sp-164)>>2]
/*+1229:JMPZ*/if(memint32[(reg_sp-160)>>2]==0){reg_ip=1231;}else{reg_ip=1230;}
}
code[1230]=function(){
/*+1230:FLDC*/PutFloat(reg_sp-344,+0.000000);;reg_ip=1231;
}
code[1231]=function(){
/*+1231:ILDC*/memint32[(reg_sp-160)>>2]=+36
/*+1232:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1233:ILDC*/memint32[(reg_sp-152)>>2]=+8
/*+1234:ADD*/memint32[(reg_sp-156)>>2]=memint32[(reg_sp-164)>>2]+memint32[(reg_sp-152)>>2]
/*+1235:FLDC*/PutFloat(reg_sp-148,+0.125000);
/*+1236:FMUL*/PutFloat(reg_sp-140, GetFloat(reg_sp-148)*GetFloat(GetInt(reg_sp-156)));
/*+1237:FLDC*/PutFloat(reg_sp-132,+0.375000);
/*+1238:FADD*/PutFloat(reg_sp-124, GetFloat(reg_sp-132)+GetFloat(reg_sp-140));
/*+1239:FMUL*/PutFloat(reg_sp-116, GetFloat(reg_sp-352)*GetFloat(reg_sp-344));
/*+1240:FLDC*/PutFloat(reg_sp-108,+0.500000);
/*+1241:FMUL*/PutFloat(reg_sp-100, GetFloat(reg_sp-116)*GetFloat(reg_sp-108));
/*+1242:FADD*/PutFloat(reg_sp-92, GetFloat(reg_sp-124)+GetFloat(reg_sp-100));
/*+1243:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-92)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-92)>>2)+1];
/*+1244:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-412);
/*+1245:CALL*/regs.push(1246);reg_ip=135;
}
code[1246]=function(){
/*+1246:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+1247:NOTME*/reg_this=regs.pop();
/*+1248:MOV*/Memcpy(GetInt(reg_sp-412),reg_sp-84,+24);
/*+1249:ILDC*/memint32[(reg_sp-160)>>2]=+28
/*+1250:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-408)>>2]+memint32[(reg_sp-160)>>2]
/*+1251:MOV*/Memcpy(reg_sp-180,GetInt(reg_sp-164),+8);
/*+1252:FLDC*/PutFloat(reg_sp-24,+120.000000);
/*+1253:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-360)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-360)>>2)+1];
/*+1254:NCALL*/SC_pow();
/*+1255:MOV*//*8*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-164)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1256:FMUL*/PutFloat(reg_sp-156, GetFloat(reg_sp-164)*GetFloat(reg_sp-344));
/*+1257:FMUL*/PutFloat(reg_sp-148, GetFloat(reg_sp-156)*GetFloat(reg_sp-180));
/*+1258:FLDC*/PutFloat(reg_sp-140,+2.000000);
/*+1259:FMUL*/PutFloat(reg_sp-172, GetFloat(reg_sp-148)*GetFloat(reg_sp-140));
/*+1260:FLDC*/PutFloat(reg_sp-164,+1.000000);
/*+1261:FSUB*/PutFloat(reg_sp-156, GetFloat(reg_sp-164)-GetFloat(reg_sp-172));
/*+1262:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-156)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-156)>>2)+1];
/*+1263:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-412);
/*+1264:CALL*/regs.push(1265);reg_ip=135;
}
code[1265]=function(){
/*+1265:MOV*/Memcpy(reg_sp-148,reg_sp-24,+24);
/*+1266:NOTME*/reg_this=regs.pop();
/*+1267:FLDC*/PutFloat(reg_sp-48,+2.000000);
/*+1268:FLDC*/PutFloat(reg_sp-40,+4.000000);
/*+1269:FLDC*/PutFloat(reg_sp-32,+5.000000);
/*+1270:CALL*/regs.push(1271);reg_ip=10;
}
code[1271]=function(){
/*+1271:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+1272:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-172)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-172)>>2)+1];
/*+1273:IAM*/regs.push(reg_this);reg_this=reg_sp-124;
/*+1274:CALL*/regs.push(1275);reg_ip=135;
}
code[1275]=function(){
/*+1275:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+1276:NOTME*/reg_this=regs.pop();
/*+1277:LEA*/PutInt(reg_sp-52,reg_sp-100);
/*+1278:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+1279:IAM*/regs.push(reg_this);reg_this=reg_sp-148;
/*+1280:CALL*/regs.push(1281);reg_ip=102;
}
code[1281]=function(){
/*+1281:MOV*/Memcpy(reg_sp-76,reg_sp-24,+24);
/*+1282:NOTME*/reg_this=regs.pop();
/*+1283:MOV*/Memcpy(GetInt(reg_sp-412),reg_sp-76,+24);
/*+1284:ADDSP*/reg_sp+=-392;
/*+1285:RET*/reg_ip=regs.pop();
}
code[1286]=function(){
/*+1286:ADDSP*/reg_sp+=+176;
/*+1287:ILDC*/memint32[(reg_sp-172)>>2]=+24
/*+1288:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-172)>>2]
/*+1289:ILDC*/memint32[(reg_sp-164)>>2]=+16
/*+1290:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-164)>>2]
/*+1291:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-168),+8);
/*+1292:CALL*/regs.push(1293);reg_ip=988;
}
code[1293]=function(){
/*+1293:MOV*/Memcpy(reg_sp-160,reg_sp-24,+24);
/*+1294:MOV*/Memcpy(GetInt(reg_sp-184),reg_sp-160,+24);
/*+1295:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1296:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-172)>>2]
/*+1297:ILDC*/PutInt(GetInt(reg_sp-176),+0)
/*+1298:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1299:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1300:ILDC*/PutInt(GetInt(reg_sp-176),+0)
/*+1301:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-188)>>2];
/*+1302:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-180)>>2];
/*+1303:CALL*/regs.push(1304);reg_ip=965;
}
code[1304]=function(){
/*+1304:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1305:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-172)>>2]
/*+1306:ILDC*/memint32[(reg_sp-168)>>2]=+0
/*+1307:NE*/memint32[(reg_sp-164)>>2]=memint32[(GetInt(reg_sp-176))>>2]!=memint32[(reg_sp-168)>>2]
/*+1308:JMPZ*/if(memint32[(reg_sp-164)>>2]==0){reg_ip=1369;}else{reg_ip=1309;}
}
code[1309]=function(){
/*+1309:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1310:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1311:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1312:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-164)>>2]
/*+1313:MOV*/Memcpy(GetInt(reg_sp-176),GetInt(reg_sp-168),+4);
/*+1314:ILDC*/memint32[(reg_sp-172)>>2]=+4
/*+1315:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1316:ILDC*/memint32[(reg_sp-164)>>2]=+24
/*+1317:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-164)>>2]
/*+1318:ILDC*/memint32[(reg_sp-156)>>2]=+36
/*+1319:ADD*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-156)>>2]
/*+1320:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-160)>>2];
/*+1321:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-168)>>2];
/*+1322:CALL*/regs.push(1323);reg_ip=1033;
}
code[1323]=function(){
/*+1323:MOV*/Memcpy(reg_sp-152,reg_sp-24,+24);
/*+1324:MOV*/Memcpy(GetInt(reg_sp-176),reg_sp-152,+24);
/*+1325:ILDC*/memint32[(reg_sp-172)>>2]=+28
/*+1326:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1327:ILDC*/memint32[(reg_sp-164)>>2]=+24
/*+1328:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-164)>>2]
/*+1329:ILDC*/memint32[(reg_sp-156)>>2]=+36
/*+1330:ADD*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-156)>>2]
/*+1331:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-160);
/*+1332:CALL*/regs.push(1333);reg_ip=90;
}
code[1333]=function(){
/*+1333:MOV*/Memcpy(reg_sp-128,reg_sp-24,+24);
/*+1334:NOTME*/reg_this=regs.pop();
/*+1335:LEA*/PutInt(reg_sp-96,reg_sp-128);
/*+1336:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-96)>>2];
/*+1337:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-168)>>2];
/*+1338:CALL*/regs.push(1339);reg_ip=210;
}
code[1339]=function(){
/*+1339:MOV*//*8*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-104)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1340:FLDC*/PutFloat(reg_sp-92,+1.000000);
/*+1341:FSUB*/PutFloat(reg_sp-84, GetFloat(reg_sp-92)-GetFloat(reg_sp-104));
/*+1342:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1343:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+1344:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+1345:CALL*/regs.push(1346);reg_ip=231;
}
code[1346]=function(){
/*+1346:MOV*//*8*/memint32[(reg_sp-76)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-76)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1347:FLDC*/PutFloat(reg_sp-24,+2.000000);
/*+1348:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-76)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-76)>>2)+1];
/*+1349:NCALL*/SC_pow();
/*+1350:MOV*//*8*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-68)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1351:FLDC*/PutFloat(reg_sp-60,+0.700000);
/*+1352:FMUL*/PutFloat(reg_sp-52, GetFloat(reg_sp-60)*GetFloat(reg_sp-68));
/*+1353:FLDC*/PutFloat(reg_sp-44,+0.300000);
/*+1354:FADD*/PutFloat(GetInt(reg_sp-176), GetFloat(reg_sp-44)+GetFloat(reg_sp-52));
/*+1355:FLDC*/PutFloat(GetInt(reg_sp-196),+0.000000);
/*+1356:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-196)>>2];
/*+1357:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-184)>>2];
/*+1358:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-188)>>2];
/*+1359:CALL*/regs.push(1360);reg_ip=1067;
}
code[1360]=function(){
/*+1360:MOV*//*4*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-196)>>2];
/*+1361:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-184)>>2];
/*+1362:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-192)>>2];
/*+1363:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-180)>>2];
/*+1364:LEA*/PutInt(reg_sp-176,+244);
/*+1365:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-176)>>2];
/*+1366:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-188)>>2];
/*+1367:CALL*/regs.push(1368);reg_ip=1163;
}
code[1368]=function(){
/*+1368:JMP*/reg_ip=1372;
}
code[1369]=function(){
/*+1369:ILDC*/memint32[(reg_sp-172)>>2]=+28
/*+1370:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1371:FLDC*/PutFloat(GetInt(reg_sp-176),+1.000000);;reg_ip=1372;
}
code[1372]=function(){
/*+1372:ADDSP*/reg_sp+=-176;
/*+1373:RET*/reg_ip=regs.pop();
}
code[1374]=function(){
/*+1374:ADDSP*/reg_sp+=+68;
/*+1375:MOV*/Memcpy(reg_sp-68,GetInt(reg_sp-72),+8);
/*+1376:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+1377:NCALL*/SC_cos();
/*+1378:MOV*//*8*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-60)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1379:FMUL*/PutFloat(reg_sp-52, GetFloat(GetInt(reg_sp-72))*GetFloat(reg_sp-60));
/*+1380:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+1381:NCALL*/SC_sin();
/*+1382:MOV*//*8*/memint32[(reg_sp-44)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-44)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1383:FMUL*/PutFloat(reg_sp-36, GetFloat(GetInt(reg_sp-76))*GetFloat(reg_sp-44));
/*+1384:FADD*/PutFloat(GetInt(reg_sp-72), GetFloat(reg_sp-52)+GetFloat(reg_sp-36));
/*+1385:FNEG*/PutFloat(reg_sp-60,-GetFloat(reg_sp-68));
/*+1386:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+1387:NCALL*/SC_sin();
/*+1388:MOV*//*8*/memint32[(reg_sp-52)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-52)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1389:FMUL*/PutFloat(reg_sp-44, GetFloat(reg_sp-60)*GetFloat(reg_sp-52));
/*+1390:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-84)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-84)>>2)+1];
/*+1391:NCALL*/SC_cos();
/*+1392:MOV*//*8*/memint32[(reg_sp-36)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-36)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1393:FMUL*/PutFloat(reg_sp-28, GetFloat(GetInt(reg_sp-76))*GetFloat(reg_sp-36));
/*+1394:FADD*/PutFloat(GetInt(reg_sp-76), GetFloat(reg_sp-44)+GetFloat(reg_sp-28));
/*+1395:ADDSP*/reg_sp+=-68;
/*+1396:RET*/reg_ip=regs.pop();
}
code[1397]=function(){
/*+1397:ADDSP*/reg_sp+=+48;
/*+1398:ILDC*/memint32[(reg_sp-44)>>2]=+0
/*+1399:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1400:ILDC*/memint32[(reg_sp-36)>>2]=+8
/*+1401:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1402:FLDC*/PutFloat(reg_sp-32,+0.300000);
/*+1403:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-32)*GetFloat(reg_sp-60));
/*+1404:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-24)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-24)>>2)+1];
/*+1405:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-40)>>2];
/*+1406:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-48)>>2];
/*+1407:CALL*/regs.push(1408);reg_ip=1374;
}
code[1408]=function(){
/*+1408:ILDC*/memint32[(reg_sp-44)>>2]=+8
/*+1409:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1410:ILDC*/memint32[(reg_sp-36)>>2]=+16
/*+1411:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1412:FLDC*/PutFloat(reg_sp-32,+0.600000);
/*+1413:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-32)*GetFloat(reg_sp-60));
/*+1414:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-24)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-24)>>2)+1];
/*+1415:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-40)>>2];
/*+1416:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-48)>>2];
/*+1417:CALL*/regs.push(1418);reg_ip=1374;
}
code[1418]=function(){
/*+1418:ILDC*/memint32[(reg_sp-44)>>2]=+16
/*+1419:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1420:ILDC*/memint32[(reg_sp-36)>>2]=+0
/*+1421:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1422:FLDC*/PutFloat(reg_sp-32,+0.200000);
/*+1423:FMUL*/PutFloat(reg_sp-24, GetFloat(reg_sp-32)*GetFloat(reg_sp-60));
/*+1424:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-24)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-24)>>2)+1];
/*+1425:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-40)>>2];
/*+1426:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-48)>>2];
/*+1427:CALL*/regs.push(1428);reg_ip=1374;
}
code[1428]=function(){
/*+1428:ADDSP*/reg_sp+=-48;
/*+1429:RET*/reg_ip=regs.pop();
}
code[1430]=function(){
/*+1430:ADDSP*/reg_sp+=+1020;
/*+1431:ILDC*/memint32[(reg_sp-984)>>2]=+0
/*+1432:LEA*/PutInt(reg_sp-172,reg_sp-876);
/*+1433:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-172)>>2];
/*+1434:LEA*/PutInt(reg_sp-168,reg_sp-1020);
/*+1435:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-168)>>2];
/*+1436:LEA*/PutInt(reg_sp-164,reg_sp-984);
/*+1437:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1438:LEA*/PutInt(reg_sp-160,reg_sp-900);
/*+1439:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-160)>>2];
/*+1440:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-1048)>>2];
/*+1441:CALL*/regs.push(1442);reg_ip=1286;
}
code[1442]=function(){
/*+1442:MOV*//*8*/memint32[(reg_sp-868)>>2]=memint32[(reg_sp-992)>>2];memint32[((reg_sp-868)>>2)+1]=memint32[((reg_sp-992)>>2)+1];
/*+1443:MOV*/Memcpy(reg_sp-860,reg_sp-900,+24);
/*+1444:FMUL*/PutFloat(reg_sp-836, GetFloat(reg_sp-992)*GetFloat(reg_sp-876));
/*+1445:ILDC*/memint32[(reg_sp-348)>>2]=+0
/*+1446:ILDC*/memint32[(reg_sp-344)>>2]=+1;reg_ip=1447;
}
code[1447]=function(){
/*+1447:LS*/memint32[(reg_sp-172)>>2]=memint32[(reg_sp-344)>>2] <memint32[(reg_sp-1052)>>2]
/*+1448:JMPZ*/if(memint32[(reg_sp-172)>>2]==0){reg_ip=1498;}else{reg_ip=1449;}
}
code[1449]=function(){
/*+1449:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1450:NE*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-1020)>>2]!=memint32[(reg_sp-172)>>2]
/*+1451:JMPZ*/if(memint32[(reg_sp-168)>>2]==0){reg_ip=1494;}else{reg_ip=1452;}
}
code[1452]=function(){
/*+1452:ILDC*/memint32[(reg_sp-292)>>2]=+0
/*+1453:ILDC*/memint32[(reg_sp-1020)>>2]=+0
/*+1454:FLDC*/PutFloat(reg_sp-172,+0.001000);
/*+1455:FLDC*/PutFloat(reg_sp-32,+0.001000);
/*+1456:IAM*/regs.push(reg_this);reg_this=reg_sp-1016;
/*+1457:CALL*/regs.push(1458);reg_ip=135;
}
code[1458]=function(){
/*+1458:MOV*/Memcpy(reg_sp-164,reg_sp-24,+24);
/*+1459:NOTME*/reg_this=regs.pop();
/*+1460:LEA*/PutInt(reg_sp-116,reg_sp-164);
/*+1461:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+1462:IAM*/regs.push(reg_this);reg_this=reg_sp-972;
/*+1463:CALL*/regs.push(1464);reg_ip=102;
}
code[1464]=function(){
/*+1464:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1465:NOTME*/reg_this=regs.pop();
/*+1466:MOV*/Memcpy(reg_sp-340,reg_sp-140,+24);
/*+1467:MOV*/Memcpy(reg_sp-316,reg_sp-1016,+24);
/*+1468:LEA*/PutInt(reg_sp-172,reg_sp-184);
/*+1469:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-172)>>2];
/*+1470:LEA*/PutInt(reg_sp-168,reg_sp-1020);
/*+1471:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-168)>>2];
/*+1472:LEA*/PutInt(reg_sp-164,reg_sp-292);
/*+1473:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1474:LEA*/PutInt(reg_sp-160,reg_sp-208);
/*+1475:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-160)>>2];
/*+1476:LEA*/PutInt(reg_sp-156,reg_sp-340);
/*+1477:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-156)>>2];
/*+1478:CALL*/regs.push(1479);reg_ip=1286;
}
code[1479]=function(){
/*+1479:LEA*/PutInt(reg_sp-172,reg_sp-860);
/*+1480:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1481:MADD*/PutInt(reg_sp-172,memint32[(reg_sp-172)>>2]+memint32[(reg_sp-344)>>2]*memint32[(reg_sp-168)>>2]);
/*+1482:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1483:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1484:MOV*/Memcpy(GetInt(reg_sp-164),reg_sp-208,+24);
/*+1485:LEA*/PutInt(reg_sp-172,reg_sp-860);
/*+1486:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1487:MADD*/PutInt(reg_sp-172,memint32[(reg_sp-172)>>2]+memint32[(reg_sp-344)>>2]*memint32[(reg_sp-168)>>2]);
/*+1488:ILDC*/memint32[(reg_sp-160)>>2]=+24
/*+1489:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1490:MOV*/Memcpy(GetInt(reg_sp-164),reg_sp-992,+8);
/*+1491:MOV*//*4*/memint32[(reg_sp-348)>>2]=memint32[(reg_sp-344)>>2];
/*+1492:MOV*/Memcpy(reg_sp-984,reg_sp-292,+84);
/*+1493:JMP*/reg_ip=1495;
}
code[1494]=function(){
/*+1494:JMP*/reg_ip=1498;
}
code[1495]=function(){
/*+1495:MOV*//*4*/memint32[(reg_sp-172)>>2]=memint32[(reg_sp-344)>>2];
/*+1496:INC*/memint32[(reg_sp-344)>>2]=memint32[(reg_sp-344)>>2]+1
/*+1497:JMP*/reg_ip=1447;
}
code[1498]=function(){
/*+1498:LEA*/PutInt(reg_sp-172,reg_sp-860);
/*+1499:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1500:MADD*/PutInt(reg_sp-172,memint32[(reg_sp-172)>>2]+memint32[(reg_sp-348)>>2]*memint32[(reg_sp-168)>>2]);
/*+1501:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1502:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1503:MOV*/Memcpy(reg_sp-900,GetInt(reg_sp-164),+24);
/*+1504:ILDC*/memint32[(reg_sp-172)>>2]=+1
/*+1505:SUB*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-348)>>2]-memint32[(reg_sp-172)>>2];reg_ip=1506;
}
code[1506]=function(){
/*+1506:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1507:GE*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-176)>>2]>=memint32[(reg_sp-172)>>2]
/*+1508:JMPZ*/if(memint32[(reg_sp-168)>>2]==0){reg_ip=1546;}else{reg_ip=1509;}
}
code[1509]=function(){
/*+1509:LEA*/PutInt(reg_sp-172,reg_sp-860);
/*+1510:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1511:MADD*/PutInt(reg_sp-172,memint32[(reg_sp-172)>>2]+memint32[(reg_sp-176)>>2]*memint32[(reg_sp-168)>>2]);
/*+1512:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1513:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1514:LEA*/PutInt(reg_sp-156,reg_sp-860);
/*+1515:ILDC*/memint32[(reg_sp-152)>>2]=+32
/*+1516:MADD*/PutInt(reg_sp-156,memint32[(reg_sp-156)>>2]+memint32[(reg_sp-176)>>2]*memint32[(reg_sp-152)>>2]);
/*+1517:ILDC*/memint32[(reg_sp-144)>>2]=+24
/*+1518:ADD*/memint32[(reg_sp-148)>>2]=memint32[(reg_sp-156)>>2]+memint32[(reg_sp-144)>>2]
/*+1519:FLDC*/PutFloat(reg_sp-140,+1.000000);
/*+1520:FSUB*/PutFloat(reg_sp-132, GetFloat(reg_sp-140)-GetFloat(GetInt(reg_sp-148)));
/*+1521:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-132)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-132)>>2)+1];
/*+1522:IAM*/regs.push(reg_this);reg_this=GetInt(reg_sp-164);
/*+1523:CALL*/regs.push(1524);reg_ip=135;
}
code[1524]=function(){
/*+1524:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+1525:NOTME*/reg_this=regs.pop();
/*+1526:LEA*/PutInt(reg_sp-100,reg_sp-860);
/*+1527:ILDC*/memint32[(reg_sp-96)>>2]=+32
/*+1528:MADD*/PutInt(reg_sp-100,memint32[(reg_sp-100)>>2]+memint32[(reg_sp-176)>>2]*memint32[(reg_sp-96)>>2]);
/*+1529:ILDC*/memint32[(reg_sp-88)>>2]=+24
/*+1530:ADD*/memint32[(reg_sp-92)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-88)>>2]
/*+1531:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-92),+8);
/*+1532:IAM*/regs.push(reg_this);reg_this=reg_sp-900;
/*+1533:CALL*/regs.push(1534);reg_ip=135;
}
code[1534]=function(){
/*+1534:MOV*/Memcpy(reg_sp-84,reg_sp-24,+24);
/*+1535:NOTME*/reg_this=regs.pop();
/*+1536:LEA*/PutInt(reg_sp-36,reg_sp-84);
/*+1537:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-36)>>2];
/*+1538:IAM*/regs.push(reg_this);reg_this=reg_sp-124;
/*+1539:CALL*/regs.push(1540);reg_ip=102;
}
code[1540]=function(){
/*+1540:MOV*/Memcpy(reg_sp-60,reg_sp-24,+24);
/*+1541:NOTME*/reg_this=regs.pop();
/*+1542:MOV*/Memcpy(reg_sp-900,reg_sp-60,+24);
/*+1543:MOV*//*4*/memint32[(reg_sp-172)>>2]=memint32[(reg_sp-176)>>2];
/*+1544:DEC*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-176)>>2]-1
/*+1545:JMP*/reg_ip=1506;
}
code[1546]=function(){
/*+1546:MOV*/Memcpy(reg_sp-1044,reg_sp-900,+24);
/*+1547:ADDSP*/reg_sp+=-1020;
/*+1548:RET*/reg_ip=regs.pop();
}
code[1549]=function(){
/*+1549:ADDSP*/reg_sp+=+748;
/*+1550:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1551:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1552:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1553:CALL*/regs.push(1554);reg_ip=10;
}
code[1554]=function(){
/*+1554:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1555:MOV*/Memcpy(reg_sp-740,reg_sp-380,+24);
/*+1556:ILDC*/memint32[(reg_sp-716)>>2]=+0
/*+1557:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1558:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1559:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1560:CALL*/regs.push(1561);reg_ip=10;
}
code[1561]=function(){
/*+1561:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1562:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1563:CALL*/regs.push(1564);reg_ip=17;
}
code[1564]=function(){
/*+1564:MOV*/Memcpy(reg_sp-356,reg_sp-24,+24);
/*+1565:NOTME*/reg_this=regs.pop();
/*+1566:MOV*/Memcpy(+244,reg_sp-356,+24);
/*+1567:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1568:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1569:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1570:CALL*/regs.push(1571);reg_ip=10;
}
code[1571]=function(){
/*+1571:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1572:MOV*/Memcpy(+4,reg_sp-380,+24);
/*+1573:FLDC*/PutFloat(+28,+0.600000);
/*+1574:ILDC*/memint32[(+0)>>2]=+3
/*+1575:FLDC*/PutFloat(reg_sp-48,+0.500000);
/*+1576:FLDC*/PutFloat(reg_sp-40,+0.800000);
/*+1577:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1578:CALL*/regs.push(1579);reg_ip=10;
}
code[1579]=function(){
/*+1579:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1580:MOV*/Memcpy(+40,reg_sp-380,+24);
/*+1581:FLDC*/PutFloat(+64,+0.500000);
/*+1582:ILDC*/memint32[(+36)>>2]=+2
/*+1583:FLDC*/PutFloat(reg_sp-48,+0.400000);
/*+1584:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1585:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1586:CALL*/regs.push(1587);reg_ip=10;
}
code[1587]=function(){
/*+1587:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1588:MOV*/Memcpy(+76,reg_sp-380,+24);
/*+1589:FLDC*/PutFloat(+100,+0.400000);
/*+1590:ILDC*/memint32[(+72)>>2]=+4
/*+1591:ILDC*/memint32[(+108)>>2]=+1
/*+1592:FLDC*/PutFloat(reg_sp-48,-0.700000);
/*+1593:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1594:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1595:CALL*/regs.push(1596);reg_ip=10;
}
code[1596]=function(){
/*+1596:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1597:MOV*/Memcpy(+112,reg_sp-380,+24);
/*+1598:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1599:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1600:FLDC*/PutFloat(reg_sp-32,-1.000000);
/*+1601:CALL*/regs.push(1602);reg_ip=10;
}
code[1602]=function(){
/*+1602:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1603:MOV*/Memcpy(+136,reg_sp-380,+24);
/*+1604:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1605:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1606:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1607:CALL*/regs.push(1608);reg_ip=10;
}
code[1608]=function(){
/*+1608:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1609:MOV*/Memcpy(+160,reg_sp-380,+24);
/*+1610:ILDC*/memint32[(reg_sp-712)>>2]=+0;reg_ip=1611;
}
code[1611]=function(){
/*+1611:ILDC*/memint32[(reg_sp-380)>>2]=+6
/*+1612:LS*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-712)>>2] <memint32[(reg_sp-380)>>2]
/*+1613:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=1779;}else{reg_ip=1614;}
}
code[1614]=function(){
/*+1614:LEA*/PutInt(reg_sp-380,+268);
/*+1615:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1616:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1617:ILDC*/memint32[(reg_sp-368)>>2]=+0
/*+1618:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1619:ILDC*/PutInt(GetInt(reg_sp-372),+4)
/*+1620:ILDC*/memint32[(reg_sp-380)>>2]=+3
/*+1621:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-712)>>2]*memint32[(reg_sp-380)>>2]
/*+1622:ILDC*/memint32[(reg_sp-372)>>2]=+1
/*+1623:ADD*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2]+memint32[(reg_sp-372)>>2]
/*+1624:LEA*/PutInt(reg_sp-364,+916);
/*+1625:ILDC*/memint32[(reg_sp-360)>>2]=+4
/*+1626:MADD*/PutInt(reg_sp-364,memint32[(reg_sp-364)>>2]+memint32[(reg_sp-368)>>2]*memint32[(reg_sp-360)>>2]);
/*+1627:MOV*/Memcpy(reg_sp-708,GetInt(reg_sp-364),+4);
/*+1628:ILDC*/memint32[(reg_sp-380)>>2]=+3
/*+1629:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-712)>>2]*memint32[(reg_sp-380)>>2]
/*+1630:ILDC*/memint32[(reg_sp-372)>>2]=+0
/*+1631:ADD*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2]+memint32[(reg_sp-372)>>2]
/*+1632:LEA*/PutInt(reg_sp-364,+916);
/*+1633:ILDC*/memint32[(reg_sp-360)>>2]=+4
/*+1634:MADD*/PutInt(reg_sp-364,memint32[(reg_sp-364)>>2]+memint32[(reg_sp-368)>>2]*memint32[(reg_sp-360)>>2]);
/*+1635:MOV*/Memcpy(reg_sp-704,GetInt(reg_sp-364),+4);
/*+1636:ILDC*/memint32[(reg_sp-380)>>2]=+3
/*+1637:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-712)>>2]*memint32[(reg_sp-380)>>2]
/*+1638:ILDC*/memint32[(reg_sp-372)>>2]=+2
/*+1639:ADD*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2]+memint32[(reg_sp-372)>>2]
/*+1640:LEA*/PutInt(reg_sp-364,+916);
/*+1641:ILDC*/memint32[(reg_sp-360)>>2]=+4
/*+1642:MADD*/PutInt(reg_sp-364,memint32[(reg_sp-364)>>2]+memint32[(reg_sp-368)>>2]*memint32[(reg_sp-360)>>2]);
/*+1643:MOV*/Memcpy(reg_sp-700,GetInt(reg_sp-364),+4);
/*+1644:LEA*/PutInt(reg_sp-380,+268);
/*+1645:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1646:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1647:ILDC*/memint32[(reg_sp-368)>>2]=+4
/*+1648:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1649:ILDC*/memint32[(reg_sp-364)>>2]=+3
/*+1650:MUL*/memint32[(reg_sp-360)>>2]=memint32[(reg_sp-708)>>2]*memint32[(reg_sp-364)>>2]
/*+1651:LEA*/PutInt(reg_sp-356,+724);
/*+1652:ILDC*/memint32[(reg_sp-352)>>2]=+8
/*+1653:MADD*/PutInt(reg_sp-356,memint32[(reg_sp-356)>>2]+memint32[(reg_sp-360)>>2]*memint32[(reg_sp-352)>>2]);
/*+1654:ILDC*/memint32[(reg_sp-348)>>2]=+3
/*+1655:MUL*/memint32[(reg_sp-344)>>2]=memint32[(reg_sp-708)>>2]*memint32[(reg_sp-348)>>2]
/*+1656:ILDC*/memint32[(reg_sp-340)>>2]=+1
/*+1657:ADD*/memint32[(reg_sp-336)>>2]=memint32[(reg_sp-344)>>2]+memint32[(reg_sp-340)>>2]
/*+1658:LEA*/PutInt(reg_sp-332,+724);
/*+1659:ILDC*/memint32[(reg_sp-328)>>2]=+8
/*+1660:MADD*/PutInt(reg_sp-332,memint32[(reg_sp-332)>>2]+memint32[(reg_sp-336)>>2]*memint32[(reg_sp-328)>>2]);
/*+1661:ILDC*/memint32[(reg_sp-324)>>2]=+3
/*+1662:MUL*/memint32[(reg_sp-320)>>2]=memint32[(reg_sp-708)>>2]*memint32[(reg_sp-324)>>2]
/*+1663:ILDC*/memint32[(reg_sp-316)>>2]=+2
/*+1664:ADD*/memint32[(reg_sp-312)>>2]=memint32[(reg_sp-320)>>2]+memint32[(reg_sp-316)>>2]
/*+1665:LEA*/PutInt(reg_sp-308,+724);
/*+1666:ILDC*/memint32[(reg_sp-304)>>2]=+8
/*+1667:MADD*/PutInt(reg_sp-308,memint32[(reg_sp-308)>>2]+memint32[(reg_sp-312)>>2]*memint32[(reg_sp-304)>>2]);
/*+1668:MOV*/Memcpy(reg_sp-48,GetInt(reg_sp-308),+8);
/*+1669:MOV*/Memcpy(reg_sp-40,GetInt(reg_sp-332),+8);
/*+1670:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-356),+8);
/*+1671:CALL*/regs.push(1672);reg_ip=10;
}
code[1672]=function(){
/*+1672:MOV*/Memcpy(reg_sp-300,reg_sp-24,+24);
/*+1673:FLDC*/PutFloat(reg_sp-276,+0.500000);
/*+1674:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1675:IAM*/regs.push(reg_this);reg_this=reg_sp-300;
/*+1676:CALL*/regs.push(1677);reg_ip=135;
}
code[1677]=function(){
/*+1677:MOV*/Memcpy(reg_sp-268,reg_sp-24,+24);
/*+1678:NOTME*/reg_this=regs.pop();
/*+1679:MOV*/Memcpy(GetInt(reg_sp-372),reg_sp-268,+24);
/*+1680:LEA*/PutInt(reg_sp-380,+268);
/*+1681:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1682:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1683:ILDC*/memint32[(reg_sp-368)>>2]=+28
/*+1684:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1685:ILDC*/memint32[(reg_sp-364)>>2]=+3
/*+1686:MUL*/memint32[(reg_sp-360)>>2]=memint32[(reg_sp-704)>>2]*memint32[(reg_sp-364)>>2]
/*+1687:LEA*/PutInt(reg_sp-356,+724);
/*+1688:ILDC*/memint32[(reg_sp-352)>>2]=+8
/*+1689:MADD*/PutInt(reg_sp-356,memint32[(reg_sp-356)>>2]+memint32[(reg_sp-360)>>2]*memint32[(reg_sp-352)>>2]);
/*+1690:ILDC*/memint32[(reg_sp-348)>>2]=+3
/*+1691:MUL*/memint32[(reg_sp-344)>>2]=memint32[(reg_sp-704)>>2]*memint32[(reg_sp-348)>>2]
/*+1692:ILDC*/memint32[(reg_sp-340)>>2]=+1
/*+1693:ADD*/memint32[(reg_sp-336)>>2]=memint32[(reg_sp-344)>>2]+memint32[(reg_sp-340)>>2]
/*+1694:LEA*/PutInt(reg_sp-332,+724);
/*+1695:ILDC*/memint32[(reg_sp-328)>>2]=+8
/*+1696:MADD*/PutInt(reg_sp-332,memint32[(reg_sp-332)>>2]+memint32[(reg_sp-336)>>2]*memint32[(reg_sp-328)>>2]);
/*+1697:ILDC*/memint32[(reg_sp-324)>>2]=+3
/*+1698:MUL*/memint32[(reg_sp-320)>>2]=memint32[(reg_sp-704)>>2]*memint32[(reg_sp-324)>>2]
/*+1699:ILDC*/memint32[(reg_sp-316)>>2]=+2
/*+1700:ADD*/memint32[(reg_sp-312)>>2]=memint32[(reg_sp-320)>>2]+memint32[(reg_sp-316)>>2]
/*+1701:LEA*/PutInt(reg_sp-308,+724);
/*+1702:ILDC*/memint32[(reg_sp-304)>>2]=+8
/*+1703:MADD*/PutInt(reg_sp-308,memint32[(reg_sp-308)>>2]+memint32[(reg_sp-312)>>2]*memint32[(reg_sp-304)>>2]);
/*+1704:MOV*/Memcpy(reg_sp-48,GetInt(reg_sp-308),+8);
/*+1705:MOV*/Memcpy(reg_sp-40,GetInt(reg_sp-332),+8);
/*+1706:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-356),+8);
/*+1707:CALL*/regs.push(1708);reg_ip=10;
}
code[1708]=function(){
/*+1708:MOV*/Memcpy(reg_sp-300,reg_sp-24,+24);
/*+1709:FLDC*/PutFloat(reg_sp-276,+0.500000);
/*+1710:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1711:IAM*/regs.push(reg_this);reg_this=reg_sp-300;
/*+1712:CALL*/regs.push(1713);reg_ip=135;
}
code[1713]=function(){
/*+1713:MOV*/Memcpy(reg_sp-268,reg_sp-24,+24);
/*+1714:NOTME*/reg_this=regs.pop();
/*+1715:MOV*/Memcpy(GetInt(reg_sp-372),reg_sp-268,+24);
/*+1716:LEA*/PutInt(reg_sp-380,+268);
/*+1717:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1718:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1719:ILDC*/memint32[(reg_sp-368)>>2]=+52
/*+1720:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1721:ILDC*/memint32[(reg_sp-364)>>2]=+3
/*+1722:MUL*/memint32[(reg_sp-360)>>2]=memint32[(reg_sp-700)>>2]*memint32[(reg_sp-364)>>2]
/*+1723:LEA*/PutInt(reg_sp-356,+724);
/*+1724:ILDC*/memint32[(reg_sp-352)>>2]=+8
/*+1725:MADD*/PutInt(reg_sp-356,memint32[(reg_sp-356)>>2]+memint32[(reg_sp-360)>>2]*memint32[(reg_sp-352)>>2]);
/*+1726:ILDC*/memint32[(reg_sp-348)>>2]=+3
/*+1727:MUL*/memint32[(reg_sp-344)>>2]=memint32[(reg_sp-700)>>2]*memint32[(reg_sp-348)>>2]
/*+1728:ILDC*/memint32[(reg_sp-340)>>2]=+1
/*+1729:ADD*/memint32[(reg_sp-336)>>2]=memint32[(reg_sp-344)>>2]+memint32[(reg_sp-340)>>2]
/*+1730:LEA*/PutInt(reg_sp-332,+724);
/*+1731:ILDC*/memint32[(reg_sp-328)>>2]=+8
/*+1732:MADD*/PutInt(reg_sp-332,memint32[(reg_sp-332)>>2]+memint32[(reg_sp-336)>>2]*memint32[(reg_sp-328)>>2]);
/*+1733:ILDC*/memint32[(reg_sp-324)>>2]=+3
/*+1734:MUL*/memint32[(reg_sp-320)>>2]=memint32[(reg_sp-700)>>2]*memint32[(reg_sp-324)>>2]
/*+1735:ILDC*/memint32[(reg_sp-316)>>2]=+2
/*+1736:ADD*/memint32[(reg_sp-312)>>2]=memint32[(reg_sp-320)>>2]+memint32[(reg_sp-316)>>2]
/*+1737:LEA*/PutInt(reg_sp-308,+724);
/*+1738:ILDC*/memint32[(reg_sp-304)>>2]=+8
/*+1739:MADD*/PutInt(reg_sp-308,memint32[(reg_sp-308)>>2]+memint32[(reg_sp-312)>>2]*memint32[(reg_sp-304)>>2]);
/*+1740:MOV*/Memcpy(reg_sp-48,GetInt(reg_sp-308),+8);
/*+1741:MOV*/Memcpy(reg_sp-40,GetInt(reg_sp-332),+8);
/*+1742:MOV*/Memcpy(reg_sp-32,GetInt(reg_sp-356),+8);
/*+1743:CALL*/regs.push(1744);reg_ip=10;
}
code[1744]=function(){
/*+1744:MOV*/Memcpy(reg_sp-300,reg_sp-24,+24);
/*+1745:FLDC*/PutFloat(reg_sp-276,+0.500000);
/*+1746:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1747:IAM*/regs.push(reg_this);reg_this=reg_sp-300;
/*+1748:CALL*/regs.push(1749);reg_ip=135;
}
code[1749]=function(){
/*+1749:MOV*/Memcpy(reg_sp-268,reg_sp-24,+24);
/*+1750:NOTME*/reg_this=regs.pop();
/*+1751:MOV*/Memcpy(GetInt(reg_sp-372),reg_sp-268,+24);
/*+1752:LEA*/PutInt(reg_sp-380,+268);
/*+1753:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1754:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1755:ILDC*/memint32[(reg_sp-368)>>2]=+4
/*+1756:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1757:FLDC*/PutFloat(reg_sp-12,+3.700000);
/*+1758:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1759:CALL*/regs.push(1760);reg_ip=1397;
}
code[1760]=function(){
/*+1760:LEA*/PutInt(reg_sp-380,+268);
/*+1761:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1762:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1763:ILDC*/memint32[(reg_sp-368)>>2]=+28
/*+1764:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1765:FLDC*/PutFloat(reg_sp-12,+3.700000);
/*+1766:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1767:CALL*/regs.push(1768);reg_ip=1397;
}
code[1768]=function(){
/*+1768:LEA*/PutInt(reg_sp-380,+268);
/*+1769:ILDC*/memint32[(reg_sp-376)>>2]=+76
/*+1770:MADD*/PutInt(reg_sp-380,memint32[(reg_sp-380)>>2]+memint32[(reg_sp-712)>>2]*memint32[(reg_sp-376)>>2]);
/*+1771:ILDC*/memint32[(reg_sp-368)>>2]=+52
/*+1772:ADD*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-380)>>2]+memint32[(reg_sp-368)>>2]
/*+1773:FLDC*/PutFloat(reg_sp-12,+3.700000);
/*+1774:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1775:CALL*/regs.push(1776);reg_ip=1397;
}
code[1776]=function(){
/*+1776:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-712)>>2];
/*+1777:INC*/memint32[(reg_sp-712)>>2]=memint32[(reg_sp-712)>>2]+1
/*+1778:JMP*/reg_ip=1611;
}
code[1779]=function(){
/*+1779:ILDC*/memint32[(+184)>>2]=+4
/*+1780:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1781:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1782:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1783:CALL*/regs.push(1784);reg_ip=10;
}
code[1784]=function(){
/*+1784:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1785:MOV*/Memcpy(+188,reg_sp-380,+24);
/*+1786:FLDC*/PutFloat(reg_sp-48,+0.400000);
/*+1787:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1788:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1789:CALL*/regs.push(1790);reg_ip=10;
}
code[1790]=function(){
/*+1790:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1791:MOV*/Memcpy(+212,reg_sp-380,+24);
/*+1792:FLDC*/PutFloat(+236,+0.400000);
/*+1793:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1794:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1795:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1796:CALL*/regs.push(1797);reg_ip=10;
}
code[1797]=function(){
/*+1797:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1798:MOV*/Memcpy(reg_sp-696,reg_sp-380,+24);
/*+1799:ILDC*/memint32[(reg_sp-672)>>2]=+0
/*+1800:NCALL*/SC_Time();
/*+1801:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1802:MOV*//*8*/memint32[(reg_sp-668)>>2]=memint32[(reg_sp-380)>>2];memint32[((reg_sp-668)>>2)+1]=memint32[((reg_sp-380)>>2)+1];
/*+1803:ILDC*/memint32[(reg_sp-660)>>2]=+0
/*+1804:LEA*/PutInt(reg_sp-380,reg_sp-648);
/*+1805:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1806:LEA*/PutInt(reg_sp-376,reg_sp-652);
/*+1807:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1808:LEA*/PutInt(reg_sp-372,reg_sp-656);
/*+1809:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1810:NCALL*/SC_GetMouseState();
/*+1811:MOV*//*4*/memint32[(reg_sp-636)>>2]=memint32[(reg_sp-648)>>2];
/*+1812:MOV*//*4*/memint32[(reg_sp-644)>>2]=memint32[(reg_sp-656)>>2];
/*+1813:MOV*//*4*/memint32[(reg_sp-640)>>2]=memint32[(reg_sp-652)>>2];
/*+1814:ILDC*/memint32[(reg_sp-632)>>2]=+0
/*+1815:ILDC*/memint32[(reg_sp-628)>>2]=+0
/*+1816:ILDC*/memint32[(reg_sp-624)>>2]=+0
/*+1817:ILDC*/memint32[(reg_sp-620)>>2]=+0
/*+1818:ILDC*/memint32[(reg_sp-616)>>2]=+0
/*+1819:ILDC*/memint32[(reg_sp-612)>>2]=+0
/*+1820:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1821:FLDC*/PutFloat(reg_sp-40,+2.000000);
/*+1822:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1823:CALL*/regs.push(1824);reg_ip=10;
}
code[1824]=function(){
/*+1824:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1825:MOV*/Memcpy(reg_sp-608,reg_sp-380,+24);
/*+1826:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1827:FLDC*/PutFloat(reg_sp-40,+2.000000);
/*+1828:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1829:CALL*/regs.push(1830);reg_ip=10;
}
code[1830]=function(){
/*+1830:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1831:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1832:CALL*/regs.push(1833);reg_ip=17;
}
code[1833]=function(){
/*+1833:MOV*/Memcpy(reg_sp-356,reg_sp-24,+24);
/*+1834:NOTME*/reg_this=regs.pop();
/*+1835:IAM*/regs.push(reg_this);reg_this=reg_sp-356;
/*+1836:CALL*/regs.push(1837);reg_ip=90;
}
code[1837]=function(){
/*+1837:MOV*/Memcpy(reg_sp-308,reg_sp-24,+24);
/*+1838:NOTME*/reg_this=regs.pop();
/*+1839:MOV*/Memcpy(reg_sp-584,reg_sp-308,+24);;reg_ip=1840;
}
code[1840]=function(){
/*+1840:MOV*//*4*/memint32[(reg_sp-636)>>2]=memint32[(reg_sp-648)>>2];
/*+1841:MOV*//*4*/memint32[(reg_sp-644)>>2]=memint32[(reg_sp-656)>>2];
/*+1842:MOV*//*4*/memint32[(reg_sp-640)>>2]=memint32[(reg_sp-652)>>2];
/*+1843:LEA*/PutInt(reg_sp-380,reg_sp-648);
/*+1844:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1845:LEA*/PutInt(reg_sp-376,reg_sp-652);
/*+1846:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1847:LEA*/PutInt(reg_sp-372,reg_sp-656);
/*+1848:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1849:NCALL*/SC_GetMouseState();
/*+1850:ILDC*/memint32[(reg_sp-8)>>2]=+119
/*+1851:NCALL*/SC_KeyPressed();
/*+1852:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1853:MOV*//*4*/memint32[(reg_sp-616)>>2]=memint32[(reg_sp-380)>>2];
/*+1854:ILDC*/memint32[(reg_sp-8)>>2]=+115
/*+1855:NCALL*/SC_KeyPressed();
/*+1856:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1857:MOV*//*4*/memint32[(reg_sp-612)>>2]=memint32[(reg_sp-380)>>2];
/*+1858:ILDC*/memint32[(reg_sp-8)>>2]=+97
/*+1859:NCALL*/SC_KeyPressed();
/*+1860:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1861:MOV*//*4*/memint32[(reg_sp-624)>>2]=memint32[(reg_sp-380)>>2];
/*+1862:ILDC*/memint32[(reg_sp-8)>>2]=+100
/*+1863:NCALL*/SC_KeyPressed();
/*+1864:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1865:MOV*//*4*/memint32[(reg_sp-620)>>2]=memint32[(reg_sp-380)>>2];
/*+1866:ILDC*/memint32[(reg_sp-8)>>2]=+113
/*+1867:NCALL*/SC_KeyPressed();
/*+1868:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1869:MOV*//*4*/memint32[(reg_sp-628)>>2]=memint32[(reg_sp-380)>>2];
/*+1870:ILDC*/memint32[(reg_sp-8)>>2]=+101
/*+1871:NCALL*/SC_KeyPressed();
/*+1872:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1873:MOV*//*4*/memint32[(reg_sp-632)>>2]=memint32[(reg_sp-380)>>2];
/*+1874:LEA*/PutInt(reg_sp-356,reg_sp-696);
/*+1875:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1876:LEA*/PutInt(reg_sp-352,reg_sp-584);
/*+1877:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1878:CALL*/regs.push(1879);reg_ip=168;
}
code[1879]=function(){
/*+1879:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1880:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1881:CALL*/regs.push(1882);reg_ip=17;
}
code[1882]=function(){
/*+1882:MOV*/Memcpy(reg_sp-348,reg_sp-24,+24);
/*+1883:NOTME*/reg_this=regs.pop();
/*+1884:MOV*/Memcpy(reg_sp-560,reg_sp-348,+24);
/*+1885:LEA*/PutInt(reg_sp-356,reg_sp-560);
/*+1886:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1887:LEA*/PutInt(reg_sp-352,reg_sp-584);
/*+1888:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1889:CALL*/regs.push(1890);reg_ip=168;
}
code[1890]=function(){
/*+1890:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1891:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1892:CALL*/regs.push(1893);reg_ip=17;
}
code[1893]=function(){
/*+1893:MOV*/Memcpy(reg_sp-348,reg_sp-24,+24);
/*+1894:NOTME*/reg_this=regs.pop();
/*+1895:MOV*/Memcpy(reg_sp-536,reg_sp-348,+24);
/*+1896:MOV*/Memcpy(reg_sp-512,reg_sp-608,+24);
/*+1897:JMPZ*/if(memint32[(reg_sp-660)>>2]==0){reg_ip=2207;}else{reg_ip=1898;}
}
code[1898]=function(){
/*+1898:ILDC*/memint32[(reg_sp-464)>>2]=+53
/*+1899:ILDC*/memint32[(reg_sp-460)>>2]=+40
/*+1900:ILDC*/memint32[(reg_sp-456)>>2]=+0;reg_ip=1901;
}
code[1901]=function(){
/*+1901:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2] <memint32[(reg_sp-460)>>2]
/*+1902:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2203;}else{reg_ip=1903;}
}
code[1903]=function(){
/*+1903:ILDC*/memint32[(reg_sp-452)>>2]=+0;reg_ip=1904;
}
code[1904]=function(){
/*+1904:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2] <memint32[(reg_sp-464)>>2]
/*+1905:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2200;}else{reg_ip=1906;}
}
code[1906]=function(){
/*+1906:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1907:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1908:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1909:CALL*/regs.push(1910);reg_ip=10;
}
code[1910]=function(){
/*+1910:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1911:MOV*/Memcpy(reg_sp-448,reg_sp-380,+24);
/*+1912:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1913:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1914:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1915:CALL*/regs.push(1916);reg_ip=135;
}
code[1916]=function(){
/*+1916:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1917:NOTME*/reg_this=regs.pop();
/*+1918:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1919:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-460)>>2]);
/*+1920:FSUB*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)-GetFloat(reg_sp-352));
/*+1921:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1922:FMUL*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)*GetFloat(reg_sp-328));
/*+1923:I2F*/PutFloat(reg_sp-312,memint32[(reg_sp-456)>>2]);
/*+1924:FDIV*/PutFloat(reg_sp-304, GetFloat(reg_sp-312)/GetFloat(reg_sp-320));
/*+1925:FLDC*/PutFloat(reg_sp-296,+1.000000);
/*+1926:FSUB*/PutFloat(reg_sp-288, GetFloat(reg_sp-304)-GetFloat(reg_sp-296));
/*+1927:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-288)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-288)>>2)+1];
/*+1928:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1929:CALL*/regs.push(1930);reg_ip=135;
}
code[1930]=function(){
/*+1930:MOV*/Memcpy(reg_sp-280,reg_sp-24,+24);
/*+1931:NOTME*/reg_this=regs.pop();
/*+1932:LEA*/PutInt(reg_sp-232,reg_sp-280);
/*+1933:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+1934:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1935:CALL*/regs.push(1936);reg_ip=102;
}
code[1936]=function(){
/*+1936:MOV*/Memcpy(reg_sp-256,reg_sp-24,+24);
/*+1937:NOTME*/reg_this=regs.pop();
/*+1938:FLDC*/PutFloat(reg_sp-228,+0.500000);
/*+1939:I2F*/PutFloat(reg_sp-220,memint32[(reg_sp-460)>>2]);
/*+1940:FSUB*/PutFloat(reg_sp-212, GetFloat(reg_sp-220)-GetFloat(reg_sp-228));
/*+1941:FLDC*/PutFloat(reg_sp-204,+0.500000);
/*+1942:FMUL*/PutFloat(reg_sp-196, GetFloat(reg_sp-212)*GetFloat(reg_sp-204));
/*+1943:I2F*/PutFloat(reg_sp-188,memint32[(reg_sp-452)>>2]);
/*+1944:FDIV*/PutFloat(reg_sp-180, GetFloat(reg_sp-188)/GetFloat(reg_sp-196));
/*+1945:FLDC*/PutFloat(reg_sp-172,+1.333000);
/*+1946:FSUB*/PutFloat(reg_sp-164, GetFloat(reg_sp-180)-GetFloat(reg_sp-172));
/*+1947:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-164)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-164)>>2)+1];
/*+1948:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1949:CALL*/regs.push(1950);reg_ip=135;
}
code[1950]=function(){
/*+1950:MOV*/Memcpy(reg_sp-156,reg_sp-24,+24);
/*+1951:NOTME*/reg_this=regs.pop();
/*+1952:LEA*/PutInt(reg_sp-108,reg_sp-156);
/*+1953:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-108)>>2];
/*+1954:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+1955:CALL*/regs.push(1956);reg_ip=102;
}
code[1956]=function(){
/*+1956:MOV*/Memcpy(reg_sp-132,reg_sp-24,+24);
/*+1957:NOTME*/reg_this=regs.pop();
/*+1958:IAM*/regs.push(reg_this);reg_this=reg_sp-132;
/*+1959:CALL*/regs.push(1960);reg_ip=17;
}
code[1960]=function(){
/*+1960:MOV*/Memcpy(reg_sp-104,reg_sp-24,+24);
/*+1961:NOTME*/reg_this=regs.pop();
/*+1962:MOV*/Memcpy(reg_sp-488,reg_sp-104,+24);
/*+1963:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+1964:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+1965:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+1966:CALL*/regs.push(1967);reg_ip=1430;
}
code[1967]=function(){
/*+1967:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1968:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+1969:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+1970:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+1971:CALL*/regs.push(1972);reg_ip=120;
}
code[1972]=function(){
/*+1972:NOTME*/reg_this=regs.pop();
/*+1973:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1974:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1975:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1976:CALL*/regs.push(1977);reg_ip=135;
}
code[1977]=function(){
/*+1977:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1978:NOTME*/reg_this=regs.pop();
/*+1979:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1980:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-456)>>2]);
/*+1981:FADD*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)+GetFloat(reg_sp-352));
/*+1982:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1983:I2F*/PutFloat(reg_sp-320,memint32[(reg_sp-460)>>2]);
/*+1984:FSUB*/PutFloat(reg_sp-312, GetFloat(reg_sp-320)-GetFloat(reg_sp-328));
/*+1985:FLDC*/PutFloat(reg_sp-304,+0.500000);
/*+1986:FMUL*/PutFloat(reg_sp-296, GetFloat(reg_sp-312)*GetFloat(reg_sp-304));
/*+1987:FDIV*/PutFloat(reg_sp-288, GetFloat(reg_sp-336)/GetFloat(reg_sp-296));
/*+1988:FLDC*/PutFloat(reg_sp-280,+1.000000);
/*+1989:FSUB*/PutFloat(reg_sp-272, GetFloat(reg_sp-288)-GetFloat(reg_sp-280));
/*+1990:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-272)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-272)>>2)+1];
/*+1991:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1992:CALL*/regs.push(1993);reg_ip=135;
}
code[1993]=function(){
/*+1993:MOV*/Memcpy(reg_sp-264,reg_sp-24,+24);
/*+1994:NOTME*/reg_this=regs.pop();
/*+1995:LEA*/PutInt(reg_sp-216,reg_sp-264);
/*+1996:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+1997:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1998:CALL*/regs.push(1999);reg_ip=102;
}
code[1999]=function(){
/*+1999:MOV*/Memcpy(reg_sp-240,reg_sp-24,+24);
/*+2000:NOTME*/reg_this=regs.pop();
/*+2001:FLDC*/PutFloat(reg_sp-212,+0.500000);
/*+2002:I2F*/PutFloat(reg_sp-204,memint32[(reg_sp-460)>>2]);
/*+2003:FSUB*/PutFloat(reg_sp-196, GetFloat(reg_sp-204)-GetFloat(reg_sp-212));
/*+2004:FLDC*/PutFloat(reg_sp-188,+0.500000);
/*+2005:FMUL*/PutFloat(reg_sp-180, GetFloat(reg_sp-196)*GetFloat(reg_sp-188));
/*+2006:I2F*/PutFloat(reg_sp-172,memint32[(reg_sp-452)>>2]);
/*+2007:FDIV*/PutFloat(reg_sp-164, GetFloat(reg_sp-172)/GetFloat(reg_sp-180));
/*+2008:FLDC*/PutFloat(reg_sp-156,+1.333000);
/*+2009:FSUB*/PutFloat(reg_sp-148, GetFloat(reg_sp-164)-GetFloat(reg_sp-156));
/*+2010:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-148)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-148)>>2)+1];
/*+2011:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2012:CALL*/regs.push(2013);reg_ip=135;
}
code[2013]=function(){
/*+2013:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+2014:NOTME*/reg_this=regs.pop();
/*+2015:LEA*/PutInt(reg_sp-92,reg_sp-140);
/*+2016:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+2017:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+2018:CALL*/regs.push(2019);reg_ip=102;
}
code[2019]=function(){
/*+2019:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+2020:NOTME*/reg_this=regs.pop();
/*+2021:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+2022:CALL*/regs.push(2023);reg_ip=17;
}
code[2023]=function(){
/*+2023:MOV*/Memcpy(reg_sp-88,reg_sp-24,+24);
/*+2024:NOTME*/reg_this=regs.pop();
/*+2025:MOV*/Memcpy(reg_sp-488,reg_sp-88,+24);
/*+2026:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2027:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+2028:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2029:CALL*/regs.push(2030);reg_ip=1430;
}
code[2030]=function(){
/*+2030:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2031:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+2032:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2033:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2034:CALL*/regs.push(2035);reg_ip=120;
}
code[2035]=function(){
/*+2035:NOTME*/reg_this=regs.pop();
/*+2036:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2037:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+2038:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+2039:CALL*/regs.push(2040);reg_ip=135;
}
code[2040]=function(){
/*+2040:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+2041:NOTME*/reg_this=regs.pop();
/*+2042:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+2043:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-460)>>2]);
/*+2044:FSUB*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)-GetFloat(reg_sp-352));
/*+2045:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+2046:FMUL*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)*GetFloat(reg_sp-328));
/*+2047:I2F*/PutFloat(reg_sp-312,memint32[(reg_sp-456)>>2]);
/*+2048:FDIV*/PutFloat(reg_sp-304, GetFloat(reg_sp-312)/GetFloat(reg_sp-320));
/*+2049:FLDC*/PutFloat(reg_sp-296,+1.000000);
/*+2050:FSUB*/PutFloat(reg_sp-288, GetFloat(reg_sp-304)-GetFloat(reg_sp-296));
/*+2051:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-288)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-288)>>2)+1];
/*+2052:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2053:CALL*/regs.push(2054);reg_ip=135;
}
code[2054]=function(){
/*+2054:MOV*/Memcpy(reg_sp-280,reg_sp-24,+24);
/*+2055:NOTME*/reg_this=regs.pop();
/*+2056:LEA*/PutInt(reg_sp-232,reg_sp-280);
/*+2057:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+2058:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2059:CALL*/regs.push(2060);reg_ip=102;
}
code[2060]=function(){
/*+2060:MOV*/Memcpy(reg_sp-256,reg_sp-24,+24);
/*+2061:NOTME*/reg_this=regs.pop();
/*+2062:FLDC*/PutFloat(reg_sp-228,+0.500000);
/*+2063:I2F*/PutFloat(reg_sp-220,memint32[(reg_sp-452)>>2]);
/*+2064:FADD*/PutFloat(reg_sp-212, GetFloat(reg_sp-220)+GetFloat(reg_sp-228));
/*+2065:FLDC*/PutFloat(reg_sp-204,+0.500000);
/*+2066:I2F*/PutFloat(reg_sp-196,memint32[(reg_sp-460)>>2]);
/*+2067:FSUB*/PutFloat(reg_sp-188, GetFloat(reg_sp-196)-GetFloat(reg_sp-204));
/*+2068:FLDC*/PutFloat(reg_sp-180,+0.500000);
/*+2069:FMUL*/PutFloat(reg_sp-172, GetFloat(reg_sp-188)*GetFloat(reg_sp-180));
/*+2070:FDIV*/PutFloat(reg_sp-164, GetFloat(reg_sp-212)/GetFloat(reg_sp-172));
/*+2071:FLDC*/PutFloat(reg_sp-156,+1.333000);
/*+2072:FSUB*/PutFloat(reg_sp-148, GetFloat(reg_sp-164)-GetFloat(reg_sp-156));
/*+2073:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-148)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-148)>>2)+1];
/*+2074:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2075:CALL*/regs.push(2076);reg_ip=135;
}
code[2076]=function(){
/*+2076:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+2077:NOTME*/reg_this=regs.pop();
/*+2078:LEA*/PutInt(reg_sp-92,reg_sp-140);
/*+2079:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+2080:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+2081:CALL*/regs.push(2082);reg_ip=102;
}
code[2082]=function(){
/*+2082:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+2083:NOTME*/reg_this=regs.pop();
/*+2084:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+2085:CALL*/regs.push(2086);reg_ip=17;
}
code[2086]=function(){
/*+2086:MOV*/Memcpy(reg_sp-88,reg_sp-24,+24);
/*+2087:NOTME*/reg_this=regs.pop();
/*+2088:MOV*/Memcpy(reg_sp-488,reg_sp-88,+24);
/*+2089:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2090:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+2091:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2092:CALL*/regs.push(2093);reg_ip=1430;
}
code[2093]=function(){
/*+2093:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2094:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+2095:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2096:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2097:CALL*/regs.push(2098);reg_ip=120;
}
code[2098]=function(){
/*+2098:NOTME*/reg_this=regs.pop();
/*+2099:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2100:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+2101:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+2102:CALL*/regs.push(2103);reg_ip=135;
}
code[2103]=function(){
/*+2103:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+2104:NOTME*/reg_this=regs.pop();
/*+2105:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+2106:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-456)>>2]);
/*+2107:FADD*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)+GetFloat(reg_sp-352));
/*+2108:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+2109:I2F*/PutFloat(reg_sp-320,memint32[(reg_sp-460)>>2]);
/*+2110:FSUB*/PutFloat(reg_sp-312, GetFloat(reg_sp-320)-GetFloat(reg_sp-328));
/*+2111:FLDC*/PutFloat(reg_sp-304,+0.500000);
/*+2112:FMUL*/PutFloat(reg_sp-296, GetFloat(reg_sp-312)*GetFloat(reg_sp-304));
/*+2113:FDIV*/PutFloat(reg_sp-288, GetFloat(reg_sp-336)/GetFloat(reg_sp-296));
/*+2114:FLDC*/PutFloat(reg_sp-280,+1.000000);
/*+2115:FSUB*/PutFloat(reg_sp-272, GetFloat(reg_sp-288)-GetFloat(reg_sp-280));
/*+2116:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-272)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-272)>>2)+1];
/*+2117:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2118:CALL*/regs.push(2119);reg_ip=135;
}
code[2119]=function(){
/*+2119:MOV*/Memcpy(reg_sp-264,reg_sp-24,+24);
/*+2120:NOTME*/reg_this=regs.pop();
/*+2121:LEA*/PutInt(reg_sp-216,reg_sp-264);
/*+2122:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+2123:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2124:CALL*/regs.push(2125);reg_ip=102;
}
code[2125]=function(){
/*+2125:MOV*/Memcpy(reg_sp-240,reg_sp-24,+24);
/*+2126:NOTME*/reg_this=regs.pop();
/*+2127:FLDC*/PutFloat(reg_sp-212,+0.500000);
/*+2128:I2F*/PutFloat(reg_sp-204,memint32[(reg_sp-452)>>2]);
/*+2129:FADD*/PutFloat(reg_sp-196, GetFloat(reg_sp-204)+GetFloat(reg_sp-212));
/*+2130:FLDC*/PutFloat(reg_sp-188,+0.500000);
/*+2131:I2F*/PutFloat(reg_sp-180,memint32[(reg_sp-460)>>2]);
/*+2132:FSUB*/PutFloat(reg_sp-172, GetFloat(reg_sp-180)-GetFloat(reg_sp-188));
/*+2133:FLDC*/PutFloat(reg_sp-164,+0.500000);
/*+2134:FMUL*/PutFloat(reg_sp-156, GetFloat(reg_sp-172)*GetFloat(reg_sp-164));
/*+2135:FDIV*/PutFloat(reg_sp-148, GetFloat(reg_sp-196)/GetFloat(reg_sp-156));
/*+2136:FLDC*/PutFloat(reg_sp-140,+1.333000);
/*+2137:FSUB*/PutFloat(reg_sp-132, GetFloat(reg_sp-148)-GetFloat(reg_sp-140));
/*+2138:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-132)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-132)>>2)+1];
/*+2139:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2140:CALL*/regs.push(2141);reg_ip=135;
}
code[2141]=function(){
/*+2141:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+2142:NOTME*/reg_this=regs.pop();
/*+2143:LEA*/PutInt(reg_sp-76,reg_sp-124);
/*+2144:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-76)>>2];
/*+2145:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+2146:CALL*/regs.push(2147);reg_ip=102;
}
code[2147]=function(){
/*+2147:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+2148:NOTME*/reg_this=regs.pop();
/*+2149:IAM*/regs.push(reg_this);reg_this=reg_sp-100;
/*+2150:CALL*/regs.push(2151);reg_ip=17;
}
code[2151]=function(){
/*+2151:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+2152:NOTME*/reg_this=regs.pop();
/*+2153:MOV*/Memcpy(reg_sp-488,reg_sp-72,+24);
/*+2154:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2155:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+2156:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2157:CALL*/regs.push(2158);reg_ip=1430;
}
code[2158]=function(){
/*+2158:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2159:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+2160:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2161:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2162:CALL*/regs.push(2163);reg_ip=120;
}
code[2163]=function(){
/*+2163:NOTME*/reg_this=regs.pop();
/*+2164:FLDC*/PutFloat(reg_sp-380,+0.250000);
/*+2165:FLDC*/PutFloat(reg_sp-8,+0.250000);
/*+2166:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2167:CALL*/regs.push(2168);reg_ip=147;
}
code[2168]=function(){
/*+2168:NOTME*/reg_this=regs.pop();
/*+2169:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2170:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2171:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-432)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-432)>>2)+1];
/*+2172:CALL*/regs.push(2173);reg_ip=231;
}
code[2173]=function(){
/*+2173:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2174:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2175:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2176:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-440)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-440)>>2)+1];
/*+2177:CALL*/regs.push(2178);reg_ip=231;
}
code[2178]=function(){
/*+2178:MOV*//*8*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-372)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2179:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2180:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2181:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-448)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-448)>>2)+1];
/*+2182:CALL*/regs.push(2183);reg_ip=231;
}
code[2183]=function(){
/*+2183:MOV*//*8*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-364)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2184:MOV*//*8*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-364)>>2];memint32[((reg_sp-24)>>2)+1]=memint32[((reg_sp-364)>>2)+1];
/*+2185:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-372)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-372)>>2)+1];
/*+2186:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-380)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_sp-380)>>2)+1];
/*+2187:NCALL*/SC_rgb();
/*+2188:ILDC*/memint32[(reg_sp-380)>>2]=+12
/*+2189:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-452)>>2]*memint32[(reg_sp-380)>>2]
/*+2190:ILDC*/memint32[(reg_sp-372)>>2]=+12
/*+2191:MUL*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-456)>>2]*memint32[(reg_sp-372)>>2]
/*+2192:ILDC*/memint32[(reg_sp-16)>>2]=+12
/*+2193:ILDC*/memint32[(reg_sp-12)>>2]=+12
/*+2194:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-368)>>2];
/*+2195:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2196:NCALL*/SC_fillrect();
/*+2197:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2];
/*+2198:INC*/memint32[(reg_sp-452)>>2]=memint32[(reg_sp-452)>>2]+1
/*+2199:JMP*/reg_ip=1904;
}
code[2200]=function(){
/*+2200:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2];
/*+2201:INC*/memint32[(reg_sp-456)>>2]=memint32[(reg_sp-456)>>2]+1
/*+2202:JMP*/reg_ip=1901;
}
code[2203]=function(){
/*+2203:INT*/int_code=+10;interrupt=true;;reg_ip=2204;
}
code[2204]=function(){
/*+2204:ILDC*/memint32[(reg_sp-660)>>2]=+0
/*+2205:ILDC*/memint32[(reg_sp-672)>>2]=+0
/*+2206:JMP*/reg_ip=2332;
}
code[2207]=function(){
/*+2207:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2208:ADD*/memint32[(reg_sp-424)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2209:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2210:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-424)>>2] >memint32[(reg_sp-380)>>2]
/*+2211:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2213;}else{reg_ip=2212;}
}
code[2212]=function(){
/*+2212:ILDC*/memint32[(reg_sp-424)>>2]=+480;reg_ip=2213;
}
code[2213]=function(){
/*+2213:MOV*//*4*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-672)>>2];;reg_ip=2214;
}
code[2214]=function(){
/*+2214:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2] <memint32[(reg_sp-424)>>2]
/*+2215:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2307;}else{reg_ip=2216;}
}
code[2216]=function(){
/*+2216:ILDC*/memint32[(reg_sp-416)>>2]=+0;reg_ip=2217;
}
code[2217]=function(){
/*+2217:ILDC*/memint32[(reg_sp-380)>>2]=+640
/*+2218:LS*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-416)>>2] <memint32[(reg_sp-380)>>2]
/*+2219:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2304;}else{reg_ip=2220;}
}
code[2220]=function(){
/*+2220:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+2221:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+2222:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+2223:CALL*/regs.push(2224);reg_ip=10;
}
code[2224]=function(){
/*+2224:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2225:MOV*/Memcpy(reg_sp-412,reg_sp-380,+24);
/*+2226:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2227:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+2228:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+2229:CALL*/regs.push(2230);reg_ip=135;
}
code[2230]=function(){
/*+2230:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+2231:NOTME*/reg_this=regs.pop();
/*+2232:FLDC*/PutFloat(reg_sp-352,+240.000000);
/*+2233:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-420)>>2]);
/*+2234:FDIV*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)/GetFloat(reg_sp-352));
/*+2235:FLDC*/PutFloat(reg_sp-328,+1.000000);
/*+2236:FSUB*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)-GetFloat(reg_sp-328));
/*+2237:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-320)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-320)>>2)+1];
/*+2238:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2239:CALL*/regs.push(2240);reg_ip=135;
}
code[2240]=function(){
/*+2240:MOV*/Memcpy(reg_sp-312,reg_sp-24,+24);
/*+2241:NOTME*/reg_this=regs.pop();
/*+2242:LEA*/PutInt(reg_sp-264,reg_sp-312);
/*+2243:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-264)>>2];
/*+2244:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2245:CALL*/regs.push(2246);reg_ip=102;
}
code[2246]=function(){
/*+2246:MOV*/Memcpy(reg_sp-288,reg_sp-24,+24);
/*+2247:NOTME*/reg_this=regs.pop();
/*+2248:FLDC*/PutFloat(reg_sp-260,+240.000000);
/*+2249:I2F*/PutFloat(reg_sp-252,memint32[(reg_sp-416)>>2]);
/*+2250:FDIV*/PutFloat(reg_sp-244, GetFloat(reg_sp-252)/GetFloat(reg_sp-260));
/*+2251:FLDC*/PutFloat(reg_sp-236,+1.333000);
/*+2252:FSUB*/PutFloat(reg_sp-228, GetFloat(reg_sp-244)-GetFloat(reg_sp-236));
/*+2253:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-228)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-228)>>2)+1];
/*+2254:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2255:CALL*/regs.push(2256);reg_ip=135;
}
code[2256]=function(){
/*+2256:MOV*/Memcpy(reg_sp-220,reg_sp-24,+24);
/*+2257:NOTME*/reg_this=regs.pop();
/*+2258:LEA*/PutInt(reg_sp-172,reg_sp-220);
/*+2259:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-172)>>2];
/*+2260:IAM*/regs.push(reg_this);reg_this=reg_sp-288;
/*+2261:CALL*/regs.push(2262);reg_ip=102;
}
code[2262]=function(){
/*+2262:MOV*/Memcpy(reg_sp-196,reg_sp-24,+24);
/*+2263:NOTME*/reg_this=regs.pop();
/*+2264:IAM*/regs.push(reg_this);reg_this=reg_sp-196;
/*+2265:CALL*/regs.push(2266);reg_ip=17;
}
code[2266]=function(){
/*+2266:MOV*/Memcpy(reg_sp-168,reg_sp-24,+24);
/*+2267:NOTME*/reg_this=regs.pop();
/*+2268:MOV*/Memcpy(reg_sp-488,reg_sp-168,+24);
/*+2269:ILDC*/memint32[(reg_sp-32)>>2]=+8
/*+2270:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+2271:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2272:CALL*/regs.push(2273);reg_ip=1430;
}
code[2273]=function(){
/*+2273:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2274:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+2275:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2276:IAM*/regs.push(reg_this);reg_this=reg_sp-412;
/*+2277:CALL*/regs.push(2278);reg_ip=120;
}
code[2278]=function(){
/*+2278:NOTME*/reg_this=regs.pop();
/*+2279:LEA*/PutInt(reg_sp-380,reg_sp-388);
/*+2280:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-380)>>2];
/*+2281:LEA*/PutInt(reg_sp-376,reg_sp-412);
/*+2282:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2283:CALL*/regs.push(2284);reg_ip=765;
}
code[2284]=function(){
/*+2284:CLDC*/PutChar(reg_sp-385, +255);
/*+2285:ILDC*/memint32[(reg_sp-380)>>2]=+16
/*+2286:C2I*/memint32[(reg_sp-376)>>2]=GetChar(reg_sp-386)
/*+2287:SHL*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-380)>>2]
/*+2288:ILDC*/memint32[(reg_sp-368)>>2]=-16777216
/*+2289:OR*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-368)>>2]|memint32[(reg_sp-372)>>2]
/*+2290:ILDC*/memint32[(reg_sp-360)>>2]=+8
/*+2291:C2I*/memint32[(reg_sp-356)>>2]=GetChar(reg_sp-387)
/*+2292:SHL*/memint32[(reg_sp-352)>>2]=memint32[(reg_sp-356)>>2]<<memint32[(reg_sp-360)>>2]
/*+2293:OR*/memint32[(reg_sp-348)>>2]=memint32[(reg_sp-364)>>2]|memint32[(reg_sp-352)>>2]
/*+2294:C2I*/memint32[(reg_sp-344)>>2]=GetChar(reg_sp-388)
/*+2295:OR*/memint32[(reg_sp-340)>>2]=memint32[(reg_sp-348)>>2]|memint32[(reg_sp-344)>>2]
/*+2296:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-340)>>2];
/*+2297:ILDC*/memint32[(reg_sp-12)>>2]=+1
/*+2298:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-420)>>2];
/*+2299:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-416)>>2];
/*+2300:NCALL*/SC_lineH();
/*+2301:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-416)>>2];
/*+2302:INC*/memint32[(reg_sp-416)>>2]=memint32[(reg_sp-416)>>2]+1
/*+2303:JMP*/reg_ip=2217;
}
code[2304]=function(){
/*+2304:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2];
/*+2305:INC*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-420)>>2]+1
/*+2306:JMP*/reg_ip=2214;
}
code[2307]=function(){
/*+2307:ILDC*/memint32[(reg_sp-384)>>2]=+5
/*+2308:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2309:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2310:ILDC*/memint32[(reg_sp-372)>>2]=+480
/*+2311:GR*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2] >memint32[(reg_sp-372)>>2]
/*+2312:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=2315;}else{reg_ip=2313;}
}
code[2313]=function(){
/*+2313:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2314:SUB*/memint32[(reg_sp-384)>>2]=memint32[(reg_sp-380)>>2]-memint32[(reg_sp-672)>>2];reg_ip=2315;
}
code[2315]=function(){
/*+2315:ILDC*/memint32[(reg_sp-4)>>2]=-1
/*+2316:NCALL*/SC_rgba32();
/*+2317:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2318:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2319:ILDC*/memint32[(reg_sp-12)>>2]=+640
/*+2320:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+2321:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2322:NCALL*/SC_lineH();
/*+2323:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2324:NCALL*/SC_SetPresentWait();
/*+2325:INT*/int_code=+10;interrupt=true;;reg_ip=2326;
}
code[2326]=function(){
/*+2326:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2327:ADD*/memint32[(reg_sp-672)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2328:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2];
/*+2329:ILDC*/memint32[(reg_sp-380)>>2]=+479
/*+2330:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2] >memint32[(reg_sp-380)>>2]
/*+2331:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2332;}else{reg_ip=2332;}
}
code[2332]=function(){
/*+2332:JMP*/reg_ip=1840;
}
code[2333]=function(){
/*+2333:ILDC*/memint32[(reg_sp-752)>>2]=+0
/*+2334:ADDSP*/reg_sp+=-748;
/*+2335:RET*/reg_ip=regs.pop();
}
code[2336]=function(){
/*+2336:ADDSP*/reg_sp+=+4;
/*+2337:MOV*/Memcpy(+724,+64,+192);
/*+2338:MOV*/Memcpy(+916,+256,+72);
/*+2339:CALL*/regs.push(2340);reg_ip=1549;
}
code[2340]=function(){
/*+2340:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-4)>>2];
/*+2341:ADDSP*/reg_sp+=-4;
/*+2342:FIN*/interrupt=true;quit=true;
}
let start_addr=2336
let start_rsp=1324
