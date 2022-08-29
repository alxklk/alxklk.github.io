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
29: int snd_add(int);// #29
30: void snd_data(int,int,float,float);// #30
31: void snd_out(float,float);// #31
32: void snd_out_buf(float*,int);// #32
33: int snd_bufhealth();// #33
34: void snd_play(int);// #34
35: void SetPresentWait(int);// #35
36: void SetPersistentFloat(char*,float);// #36
37: void SetPersistentInt(char*,int);// #37
38: float GetPersistentFloat(char*,float);// #38
39: int GetPersistentInt(char*,int);// #39
40: void GetMouseState(int&,int&,int&);// #40
41: int GetKeyEvent(int&,int&);// #41
42: int CountKeyEvents();// #42
43: int KeyPressed(int);// #43
44: int glyph(int);// #44
45: int gtext(char*);// #45
46: int stext(char*,int,int,int);// #46
47: void Graph::M(float,float);// #47
48: void Graph::m(float,float);// #48
49: void Graph::L(float,float);// #49
50: void Graph::l(float,float);// #50
51: void Graph::pl(float,float);// #51
52: void Graph::pm(float,float);// #52
53: void Graph::close();// #53
54: void Graph::clear();// #54
55: void Graph::C(float,float,float,float,float,float);// #55
56: void Graph::c(float,float,float,float,float,float);// #56
57: void Graph::Q(float,float,float,float);// #57
58: void Graph::q(float,float,float,float);// #58
59: void Graph::A(float,float,float,int,int,float,float);// #59
60: void Graph::a(float,float,float,int,int,float,float);// #60
61: void Graph::fill1();// #61
62: void Graph::fill2();// #62
63: int Graph::getpos(float,float&,float&);// #63
64: void Graph::getshapepos(float,int,float&,float&);// #64
65: float Graph::getlen();// #65
66: float Graph::getshapelen(int);// #66
67: int Graph::getnshapes();// #67
68: void Graph::calclen();// #68
69: void Graph::cut(float,int);// #69
70: void Graph::stroke();// #70
71: void Graph::miterlim(float);// #71
72: void Graph::fin();// #72
73: void Graph::rgba(float,float,float,float);// #73
74: void Graph::rgba32(int);// #74
75: void Graph::rgb(float,float,float);// #75
76: void Graph::Circle(float,float,float,float,float,int);// #76
77: void Graph::Rect(int,int,int,int,int);// #77
78: void Graph::hairline(float,float,float,float);// #78
79: void Graph::lineH(int,int,int);// #79
80: void Graph::lineH(int,int,int,int);// #80
81: void Graph::lineV(int,int,int);// #81
82: void Graph::lineV(int,int,int,int);// #82
83: void Graph::fillrect(int,int,int,int);// #83
84: void Graph::fillrect(int,int,int,int,int);// #84
85: void Graph::gray(float);// #85
86: void Graph::alpha(float);// #86
87: void Graph::width(float,float);// #87
88: void Graph::graddef(int);// #88
89: void Graph::gradend();// #89
90: void Graph::gradstop(float,float,float,float,float);// #90
91: void Graph::graduse(int);// #91
92: void Graph::gradtype(int);// #92
93: void Graph::gradmethod(int);// #93
94: void Graph::g_t(float,float,float,float,float,float);// #94
95: void Graph::g_0(float,float);// #95
96: void Graph::g_x(float,float);// #96
97: void Graph::g_y(float,float);// #97
98: void Graph::t_t(float,float,float,float,float,float);// #98
99: void Graph::t_0(float,float);// #99
100: void Graph::t_x(float,float);// #100
101: void Graph::t_y(float,float);// #101
102: void Graph::next();// #102
103: int Graph::GetActiveRT();// #103
104: void Graph::SetActiveRT(int);// #104
105: int Graph::CreateRT(int,int);// #105
106: void Graph::DeleteRT(int);// #106
107: void Graph::BitBlt(int,int,int);// #107
108: void Graph::BitBlt(void*,int,int,int,int);// #108
109: void Graph::FillRT();// #109
110: int Graph::LoadTTFont(char*);// #110
111: void Graph::VSetFont(int);// #111
112: void Graph::VChar(int);// #112
113: void Graph::VText(char*);// #113
114: void Graph::WriteImage(char*,char*,char*);// #114
115: int Graph::MpegCreate(char*);// #115
116: void Graph::MpegWriteFrame(int,int);// #116
117: void Graph::MpegDone(int);// #117
118: void PutPixel(int,int,int);// #118
119: int GetPixel(int,int);// #119

*/

/* Constants:
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
\0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0, \0,
%, i,  , s, o, u, n, d, s, \0, %, f,  , %, f, \10,
\0, I, n, i, t,  , e, c, h, o, \10, \0, \-1, \-1, \-1, \-1,
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
\-1, \-1, \-1, \-1*/
let consts=[
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
37, 105, 32, 115, 111, 117, 110, 100, 115, 0, 37, 102, 32, 37, 102, 10,
0, 73, 110, 105, 116, 32, 101, 99, 104, 111, 10, 0, 255, 255, 255, 255,
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
/*+10:ADDSP*/reg_sp+=+12;reg_sp4=reg_sp>>2;
/*+11:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-8]+0
/*+12:FADD*/{let addr=(reg_this4+0);cvtflt64[0]=GetFloat4(reg_this4+0)+GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+13:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_this4+0);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+14:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-8]+8
/*+15:FADD*/{let addr=(reg_this4+2);cvtflt64[0]=GetFloat4(reg_this4+2)+GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+16:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_this4+2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+17:THAT*/memint32[reg_sp4-3]=reg_this
/*+18:MOV*/{let addr=memint32[(reg_sp4-3)];mem8.copyWithin(reg_sp-28,addr,addr+16);}
/*+19:ADDSP*/reg_sp+=-12;reg_sp4=reg_sp>>2;
/*+20:RET*/reg_ip=regs.pop();
}
/*21*/
code[2]=function(){
/*+21:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+22:FMUL*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_this4+0)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+23:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_this4+2)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+24:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-40,addr,addr+16);}
/*+25:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+26:RET*/reg_ip=regs.pop();
}
/*27*/
code[3]=function(){
/*+27:ADDSP*/reg_sp+=+28;reg_sp4=reg_sp>>2;
/*+28:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-12]+0
/*+29:FSUB*/{let addr=(reg_sp4-7);cvtflt64[0]=GetFloat4(reg_this4+0)-GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+30:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-12]+8
/*+31:FSUB*/{let addr=(reg_sp4-5);cvtflt64[0]=GetFloat4(reg_this4+2)-GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+32:MOV*/{let addr=reg_sp-28;mem8.copyWithin(reg_sp-44,addr,addr+16);}
/*+33:ADDSP*/reg_sp+=-28;reg_sp4=reg_sp>>2;
/*+34:RET*/reg_ip=regs.pop();
}
/*35*/
code[4]=function(){
/*+35:ADDSP*/reg_sp+=+28;reg_sp4=reg_sp>>2;
/*+36:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-12]+0
/*+37:FADD*/{let addr=(reg_sp4-7);cvtflt64[0]=GetFloat4(reg_this4+0)+GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:OFFS*/memint32[reg_sp4-3]=memint32[reg_sp4-12]+8
/*+39:FADD*/{let addr=(reg_sp4-5);cvtflt64[0]=GetFloat4(reg_this4+2)+GetFloat(memint32[(reg_sp4-3)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:MOV*/{let addr=reg_sp-28;mem8.copyWithin(reg_sp-44,addr,addr+16);}
/*+41:ADDSP*/reg_sp+=-28;reg_sp4=reg_sp>>2;
/*+42:RET*/reg_ip=regs.pop();
}
/*43*/
code[5]=function(){
/*+43:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+44:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_this4+2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+45:FNEG*/{let addr=(reg_sp4-2);cvtflt64[0]=-GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+46:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+47:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-40,addr,addr+16);}
/*+48:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+49:RET*/reg_ip=regs.pop();
}
/*50*/
code[6]=function(){
/*+50:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+51:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_this4+0)*GetFloat4(reg_this4+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+52:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_this4+2)*GetFloat4(reg_this4+2);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+53:FADD*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+54:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+55:NCALL*/SC_sqrt();
/*+56:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+57:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+58:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+59:RET*/reg_ip=regs.pop();
}
/*60*/
code[7]=function(){
/*+60:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+61:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+62:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+63:CALL*/regs.push(8);reg_ip=6;
}
/*64*/
code[8]=function(){
/*+64:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+65:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+66:ILDC*/memint32[reg_sp4-6]=+0
/*+67:I2F*/{let addr=(reg_sp4-5);cvtflt64[0]=memint32[reg_sp4-6];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+68:FNE*/memint32[reg_sp4-3]=GetFloat4(reg_sp4-8)!=GetFloat4(reg_sp4-5)
/*+69:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=10;}else{reg_ip=9;}
}
/*70*/
code[9]=function(){
/*+70:FDIV*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_this4+0)/GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FDIV*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_this4+2)/GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=10;
}
/*72*/
code[10]=function(){
/*+72:MOV*/{let addr=reg_sp-48;mem8.copyWithin(reg_sp-64,addr,addr+16);}
/*+73:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+74:RET*/reg_ip=regs.pop();
}
/*75*/
code[11]=function(){
/*+75:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+76:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+77:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+78:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-32,addr,addr+16);}
/*+79:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+80:RET*/reg_ip=regs.pop();
}
/*81*/
code[12]=function(){
/*+81:ADDSP*/reg_sp+=+40;reg_sp4=reg_sp>>2;
/*+82:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-13]+0
/*+83:OFFS*/memint32[reg_sp4-9]=memint32[reg_sp4-14]+0
/*+84:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat(memint32[(reg_sp4-10)])*GetFloat(memint32[(reg_sp4-9)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+85:OFFS*/memint32[reg_sp4-6]=memint32[reg_sp4-13]+8
/*+86:OFFS*/memint32[reg_sp4-5]=memint32[reg_sp4-14]+8
/*+87:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat(memint32[(reg_sp4-6)])*GetFloat(memint32[(reg_sp4-5)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+88:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-8)+GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+89:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+90:ADDSP*/reg_sp+=-40;reg_sp4=reg_sp>>2;
/*+91:RET*/reg_ip=regs.pop();
}
/*92*/
code[13]=function(){
/*+92:ADDSP*/reg_sp+=+88;reg_sp4=reg_sp>>2;
/*+93:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-27)];
/*+94:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-28)];
/*+95:CALL*/regs.push(14);reg_ip=12;
}
/*96*/
code[14]=function(){
/*+96:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+97:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+98:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-28)];reg_this4=reg_this>>2;
/*+99:CALL*/regs.push(15);reg_ip=2;
}
/*100*/
code[15]=function(){
/*+100:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-80,addr,addr+16);}
/*+101:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+102:FLDC*/{let addr=(reg_sp4-16);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+103:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+104:IAM*/regs.push(reg_this);reg_this=reg_sp-80;reg_this4=reg_this>>2;
/*+105:CALL*/regs.push(16);reg_ip=2;
}
/*106*/
code[16]=function(){
/*+106:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-56,addr,addr+16);}
/*+107:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+108:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-27)];
/*+109:IAM*/regs.push(reg_this);reg_this=reg_sp-56;reg_this4=reg_this>>2;
/*+110:CALL*/regs.push(17);reg_ip=3;
}
/*111*/
code[17]=function(){
/*+111:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-40,addr,addr+16);}
/*+112:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+113:MOV*/{let addr=reg_sp-40;mem8.copyWithin(reg_sp-104,addr,addr+16);}
/*+114:ADDSP*/reg_sp+=-88;reg_sp4=reg_sp>>2;
/*+115:RET*/reg_ip=regs.pop();
}
/*116*/
code[18]=function(){
/*+116:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+117:MOV*//*8*/{let dst=(reg_this4+0);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+118:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+119:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+120:MOV*//*8*/{let dst=(reg_this4+6);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+121:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+122:RET*/reg_ip=regs.pop();
}
/*123*/
code[19]=function(){
/*+123:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+124:MOV*//*8*/{let dst=(reg_this4+0);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+125:MOV*//*8*/{let dst=(reg_this4+2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+126:MOV*//*8*/{let dst=(reg_this4+4);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+127:MOV*//*8*/{let dst=(reg_this4+6);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+128:ADDSP*/reg_sp+=+0;reg_sp4=reg_sp>>2;
/*+129:RET*/reg_ip=regs.pop();
}
/*130*/
code[20]=function(){
/*+130:ADDSP*/reg_sp+=+112;reg_sp4=reg_sp>>2;
/*+131:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+132:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+134:NCALL*/SC_M();
/*+135:FLDC*/{let addr=(reg_sp4-28);cvtflt64[0]=+0.550000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+139:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+140:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+141:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+142:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+143:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+144:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+145:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+146:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+147:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+148:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+149:NCALL*/SC_C();
/*+150:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:FSUB*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+152:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:FSUB*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+155:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+156:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+157:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+158:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+159:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+160:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+161:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+162:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+163:NCALL*/SC_C();
/*+164:FSUB*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+165:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+166:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+167:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+168:FSUB*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+169:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+170:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+171:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+172:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+173:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+174:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+175:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+176:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+177:NCALL*/SC_C();
/*+178:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:FADD*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+181:FADD*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+182:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+183:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+185:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+186:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+187:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+188:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+189:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+190:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+191:NCALL*/SC_C();
/*+192:ADDSP*/reg_sp+=-112;reg_sp4=reg_sp>>2;
/*+193:RET*/reg_ip=regs.pop();
}
/*194*/
code[21]=function(){
/*+194:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+195:ILDC*/memint32[reg_this4+140]=+0
/*+196:ILDC*/memint32[reg_sp4-4]=+0;reg_ip=22;
}
/*197*/
code[22]=function(){
/*+197:ILDC*/memint32[reg_sp4-3]=+20
/*+198:LS*/memint32[reg_sp4-2]=memint32[reg_sp4-4] <memint32[reg_sp4-3]
/*+199:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=24;}else{reg_ip=23;}
}
/*200*/
code[23]=function(){
/*+200:LEA*/memint32[reg_sp4-3]=reg_this+0
/*+201:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*28
/*+202:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+0
/*+203:FLDC*/PutFloat(memint32[(reg_sp4-1)],+0.000000)
/*+204:LEA*/memint32[reg_sp4-3]=reg_this+0
/*+205:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*28
/*+206:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+8
/*+207:FLDC*/PutFloat(memint32[(reg_sp4-1)],+0.000000)
/*+208:LEA*/memint32[reg_sp4-3]=reg_this+0
/*+209:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*28
/*+210:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+24
/*+211:ILDC*/PutInt(memint32[(reg_sp4-1)],-100000)
/*+212:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-4)];
/*+213:INC*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+1
/*+214:JMP*/reg_ip=22;
}
/*215*/
code[24]=function(){
/*+215:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+216:RET*/reg_ip=regs.pop();
}
/*217*/
code[25]=function(){
/*+217:ADDSP*/reg_sp+=+96;reg_sp4=reg_sp>>2;
/*+218:ILDC*/memint32[reg_sp4-24]=+0;reg_ip=26;
}
/*219*/
code[26]=function(){
/*+219:ILDC*/memint32[reg_sp4-23]=+20
/*+220:LS*/memint32[reg_sp4-22]=memint32[reg_sp4-24] <memint32[reg_sp4-23]
/*+221:JMPZ*/if(memint32[reg_sp4-22]==0){reg_ip=30;}else{reg_ip=27;}
}
/*222*/
code[27]=function(){
/*+222:LEA*/memint32[reg_sp4-23]=reg_this+0
/*+223:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*28
/*+224:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+24
/*+225:SUB*/memint32[reg_sp4-20]=memint32[reg_this4+141]-GetInt(memint32[(reg_sp4-21)])
/*+226:ILDC*/memint32[reg_sp4-19]=+48000
/*+227:GR*/memint32[reg_sp4-18]=memint32[reg_sp4-20] >memint32[reg_sp4-19]
/*+228:JMPZ*/if(memint32[reg_sp4-18]==0){reg_ip=29;}else{reg_ip=28;}
}
/*229*/
code[28]=function(){
/*+229:LEA*/memint32[reg_sp4-23]=reg_this+0
/*+230:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*28
/*+231:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+0
/*+232:MOV*/{let addr=reg_sp-104;mem8.copyWithin(memint32[(reg_sp4-21)],addr,addr+8);}
/*+233:LEA*/memint32[reg_sp4-23]=reg_this+0
/*+234:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*28
/*+235:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+8
/*+236:MOV*/{let addr=reg_sp-112;mem8.copyWithin(memint32[(reg_sp4-21)],addr,addr+8);}
/*+237:LEA*/memint32[reg_sp4-23]=reg_this+0
/*+238:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*28
/*+239:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+24
/*+240:MOV*/{let addr=reg_this+564;mem8.copyWithin(memint32[(reg_sp4-21)],addr,addr+4);}
/*+241:LEA*/memint32[reg_sp4-23]=reg_this+0
/*+242:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*28
/*+243:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-23]+16
/*+244:ILDC*/memint32[reg_sp4-20]=+4
/*+245:I2F*/{let addr=(reg_sp4-19);cvtflt64[0]=memint32[reg_sp4-20];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+246:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+247:ILDC*/memint32[reg_sp4-15]=+40
/*+248:I2F*/{let addr=(reg_sp4-14);cvtflt64[0]=memint32[reg_sp4-15];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)+GetFloat4(reg_sp4-17);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+250:ILDC*/memint32[reg_sp4-10]=+5
/*+251:I2F*/{let addr=(reg_sp4-9);cvtflt64[0]=memint32[reg_sp4-10];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+252:FMUL*/{let addr=(reg_sp4-7);cvtflt64[0]=GetFloat4(reg_sp4-28)*GetFloat4(reg_sp4-9);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+253:FADD*/{let addr=(reg_sp4-5);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-7);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+254:ILDC*/memint32[reg_sp4-3]=+4
/*+255:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-3];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+256:FMUL*/PutFloat(memint32[(reg_sp4-21)],GetFloat4(reg_sp4-5)*GetFloat4(reg_sp4-2))
/*+257:JMP*/reg_ip=30;
}
/*258*/
code[29]=function(){
/*+258:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-24)];
/*+259:INC*/memint32[reg_sp4-24]=memint32[reg_sp4-24]+1
/*+260:JMP*/reg_ip=26;
}
/*261*/
code[30]=function(){
/*+261:ADDSP*/reg_sp+=-96;reg_sp4=reg_sp>>2;
/*+262:RET*/reg_ip=regs.pop();
}
/*263*/
code[31]=function(){
/*+263:ADDSP*/reg_sp+=+212;reg_sp4=reg_sp>>2;
/*+264:ILDC*/memint32[reg_sp4-53]=+0
/*+265:ILDC*/memint32[reg_sp4-52]=+0;reg_ip=32;
}
/*266*/
code[32]=function(){
/*+266:ILDC*/memint32[reg_sp4-17]=+20
/*+267:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-52] <memint32[reg_sp4-17]
/*+268:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=37;}else{reg_ip=33;}
}
/*269*/
code[33]=function(){
/*+269:LEA*/memint32[reg_sp4-17]=reg_this+0
/*+270:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-52]*28
/*+271:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-17]+24
/*+272:SUB*/memint32[reg_sp4-14]=memint32[reg_this4+141]-GetInt(memint32[(reg_sp4-15)])
/*+273:FLDC*/{let addr=(reg_sp4-13);cvtflt64[0]=+48000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+274:I2F*/{let addr=(reg_sp4-11);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+275:FDIV*/{let addr=(reg_sp4-51);cvtflt64[0]=GetFloat4(reg_sp4-11)/GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+276:FLDC*/{let addr=(reg_sp4-17);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+277:FGR*/memint32[reg_sp4-15]=GetFloat4(reg_sp4-51) >GetFloat4(reg_sp4-17)
/*+278:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+279:FLS*/memint32[reg_sp4-12]=GetFloat4(reg_sp4-51) <GetFloat4(reg_sp4-14)
/*+280:LAND*/memint32[reg_sp4-11]=memint32[reg_sp4-15]&&memint32[reg_sp4-12]
/*+281:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=36;}else{reg_ip=34;}
}
/*282*/
code[34]=function(){
/*+282:NCALL*/SC_clear();
/*+283:LEA*/memint32[reg_sp4-17]=reg_this+0
/*+284:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-52]*28
/*+285:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-17]+0
/*+286:LEA*/memint32[reg_sp4-14]=reg_this+0
/*+287:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-52]*28
/*+288:OFFS*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+8
/*+289:ILDC*/memint32[reg_sp4-11]=+20
/*+290:I2F*/{let addr=(reg_sp4-10);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+291:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-51)*GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+292:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+293:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+294:MOV*/{let addr=memint32[(reg_sp4-15)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+295:CALL*/regs.push(35);reg_ip=20;
}
/*296*/
code[35]=function(){
/*+296:NCALL*/SC_fin();
/*+297:ILDC*/memint32[reg_sp4-17]=+1
/*+298:I2F*/{let addr=(reg_sp4-16);cvtflt64[0]=memint32[reg_sp4-17];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+299:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-16)-GetFloat4(reg_sp4-51);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+300:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+301:NCALL*/SC_alpha();
/*+302:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+303:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+8.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+304:NCALL*/SC_width();
/*+305:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+306:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+307:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+308:NCALL*/SC_rgb();
/*+309:NCALL*/SC_stroke();
/*+310:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+311:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+312:NCALL*/SC_width();
/*+313:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+315:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+316:NCALL*/SC_rgb();
/*+317:NCALL*/SC_stroke();
/*+318:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-53)];
/*+319:INC*/memint32[reg_sp4-53]=memint32[reg_sp4-53]+1;reg_ip=36;
}
/*320*/
code[36]=function(){
/*+320:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-52)];
/*+321:INC*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+1
/*+322:JMP*/reg_ip=32;
}
/*323*/
code[37]=function(){
/*+323:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+324:NCALL*/SC_alpha();
/*+325:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-53)];
/*+326:ILDC*/memint32[reg_sp4-4]=+64
/*+327:ILDC*/memint32[reg_sp4-3]=+128
/*+328:LEA*/memint32[reg_sp4-16]=reg_sp-196
/*+329:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+330:NCALL*/SC_snprintf();
/*+331:ILDC*/memint32[reg_sp4-5]=-1
/*+332:ILDC*/memint32[reg_sp4-4]=+10
/*+333:ILDC*/memint32[reg_sp4-3]=+320
/*+334:LEA*/memint32[reg_sp4-16]=reg_sp-196
/*+335:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+336:NCALL*/SC_stext();
/*+337:ADDSP*/reg_sp+=-212;reg_sp4=reg_sp>>2;
/*+338:RET*/reg_ip=regs.pop();
}
/*339*/
code[38]=function(){
/*+339:ADDSP*/reg_sp+=+184;reg_sp4=reg_sp>>2;
/*+340:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-48)];
/*+341:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-49)];reg_this4=reg_this>>2;
/*+342:CALL*/regs.push(39);reg_ip=3;
}
/*343*/
code[39]=function(){
/*+343:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-72,addr,addr+16);}
/*+344:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+345:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-184,addr,addr+16);}
/*+346:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-50)];
/*+347:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-51)];reg_this4=reg_this>>2;
/*+348:CALL*/regs.push(40);reg_ip=3;
}
/*349*/
code[40]=function(){
/*+349:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-72,addr,addr+16);}
/*+350:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+351:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-168,addr,addr+16);}
/*+352:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+353:MOV*//*8*/{let dst=(reg_sp4-38);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+354:MOV*//*8*/{let dst=(reg_sp4-36);let src=(reg_sp4-46);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+355:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-48]+0
/*+356:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-38)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+357:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-48]+8
/*+358:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+359:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+360:FNEG*/{let addr=(reg_sp4-10);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+361:MOV*//*8*/{let dst=(reg_sp4-34);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+362:FNEG*/{let addr=(reg_sp4-18);cvtflt64[0]=-GetFloat4(reg_sp4-40);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+363:MOV*//*8*/{let dst=(reg_sp4-32);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+364:MOV*//*8*/{let dst=(reg_sp4-30);let src=(reg_sp4-42);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+365:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-50]+0
/*+366:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+367:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-50]+8
/*+368:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+369:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+370:FNEG*/{let addr=(reg_sp4-10);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+371:MOV*//*8*/{let dst=(reg_sp4-28);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+372:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-48]+0
/*+373:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+374:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-48]+8
/*+375:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+376:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+377:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+378:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-49]+0
/*+379:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+380:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-49]+8
/*+381:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+382:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+383:FADD*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+384:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-50]+0
/*+385:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-38)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+386:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-50]+8
/*+387:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+388:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+389:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+390:OFFS*/memint32[reg_sp4-18]=memint32[reg_sp4-51]+0
/*+391:FMUL*/{let addr=(reg_sp4-17);cvtflt64[0]=GetFloat4(reg_sp4-38)*GetFloat(memint32[(reg_sp4-18)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+392:OFFS*/memint32[reg_sp4-15]=memint32[reg_sp4-51]+8
/*+393:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat(memint32[(reg_sp4-15)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+394:FADD*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-17)+GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+395:FADD*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-12)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+396:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-26)*GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+397:ILDC*/memint32[reg_sp4-16]=+0
/*+398:I2F*/{let addr=(reg_sp4-15);cvtflt64[0]=memint32[reg_sp4-16];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+399:FGE*/memint32[reg_sp4-13]=GetFloat4(reg_sp4-18)>=GetFloat4(reg_sp4-15)
/*+400:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+401:ILDC*/memint32[reg_sp4-10]=+0
/*+402:I2F*/{let addr=(reg_sp4-9);cvtflt64[0]=memint32[reg_sp4-10];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+403:FGE*/memint32[reg_sp4-7]=GetFloat4(reg_sp4-12)>=GetFloat4(reg_sp4-9)
/*+404:LOR*/memint32[reg_sp4-6]=memint32[reg_sp4-13]||memint32[reg_sp4-7]
/*+405:JMPZ*/if(memint32[reg_sp4-6]==0){reg_ip=42;}else{reg_ip=41;}
}
/*406*/
code[41]=function(){
/*+406:ILDC*/memint32[reg_sp4-47]=+0
/*+407:ADDSP*/reg_sp+=-184;reg_sp4=reg_sp>>2;
/*+408:RET*/reg_ip=regs.pop();
}
/*409*/
code[42]=function(){
/*+409:FSUB*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-26)-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+410:FDIV*/PutFloat(memint32[(reg_sp4-52)],GetFloat4(reg_sp4-26)/GetFloat4(reg_sp4-18))
/*+411:ILDC*/memint32[reg_sp4-47]=+1
/*+412:ADDSP*/reg_sp+=-184;reg_sp4=reg_sp>>2;
/*+413:RET*/reg_ip=regs.pop();
}
/*414*/
code[43]=function(){
/*+414:ADDSP*/reg_sp+=+36;reg_sp4=reg_sp>>2;
/*+415:OFFS*/memint32[reg_sp4-9]=memint32[reg_sp4-10]+0
/*+416:OFFS*/memint32[reg_sp4-8]=memint32[reg_sp4-10]+8
/*+417:MOV*/{let addr=memint32[(reg_sp4-8)];mem8.copyWithin(reg_sp-24,addr,addr+8);}
/*+418:MOV*/{let addr=memint32[(reg_sp4-9)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+419:ILDC*/memint32[reg_sp4-2]=+74
/*+420:NCALL*/SC_printf();
/*+421:ADDSP*/reg_sp+=-36;reg_sp4=reg_sp>>2;
/*+422:RET*/reg_ip=regs.pop();
}
/*423*/
code[44]=function(){
/*+423:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+424:ILDC*/memint32[reg_sp4-2]=+81
/*+425:NCALL*/SC_printf();
/*+426:ILDC*/memint32[reg_this4+0]=+0
/*+427:ILDC*/memint32[reg_this4+1]=+0
/*+428:ILDC*/memint32[reg_sp4-2]=+192000
/*+429:NCALL*/SC_malloc();
/*+430:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-1)];
/*+431:MOV*//*4*/memint32[(reg_this4+2)]=memint32[(reg_sp4-4)];
/*+432:ILDC*/memint32[reg_sp4-5]=+0;reg_ip=45;
}
/*433*/
code[45]=function(){
/*+433:ILDC*/memint32[reg_sp4-4]=+24000
/*+434:LS*/memint32[reg_sp4-3]=memint32[reg_sp4-5] <memint32[reg_sp4-4]
/*+435:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=47;}else{reg_ip=46;}
}
/*436*/
code[46]=function(){
/*+436:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_this4+2)];
/*+437:IDX*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+memint32[reg_sp4-5]*8
/*+438:FLDC*/PutFloat(memint32[(reg_sp4-4)],+0.000000)
/*+439:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-5)];
/*+440:INC*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+1
/*+441:JMP*/reg_ip=45;
}
/*442*/
code[47]=function(){
/*+442:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+443:RET*/reg_ip=regs.pop();
}
/*444*/
code[48]=function(){
/*+444:ADDSP*/reg_sp+=+164;reg_sp4=reg_sp>>2;
/*+445:ILDC*/memint32[reg_sp4-41]=+0;reg_ip=49;
}
/*446*/
code[49]=function(){
/*+446:LS*/memint32[reg_sp4-14]=memint32[reg_sp4-41] <memint32[reg_sp4-42]
/*+447:JMPZ*/if(memint32[reg_sp4-14]==0){reg_ip=51;}else{reg_ip=50;}
}
/*448*/
code[50]=function(){
/*+448:ADD*/memint32[reg_sp4-14]=memint32[reg_this4+1]+memint32[reg_sp4-41]
/*+449:ILDC*/memint32[reg_sp4-13]=+12000
/*+450:MOD*/memint32[reg_sp4-12]=memint32[reg_sp4-14] %memint32[reg_sp4-13]
/*+451:ILDC*/memint32[reg_sp4-11]=+2
/*+452:MUL*/memint32[reg_sp4-40]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-11]);
/*+453:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+2)];
/*+454:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-40]*8
/*+455:MOV*/{let addr=memint32[(reg_sp4-14)];mem8.copyWithin(reg_sp-156,addr,addr+8);}
/*+456:ILDC*/memint32[reg_sp4-14]=+1
/*+457:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-40]+memint32[reg_sp4-14]
/*+458:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_this4+2)];
/*+459:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*8
/*+460:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-148,addr,addr+8);}
/*+461:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+2)];
/*+462:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-40]*8
/*+463:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+0.650000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+464:FMUL*/PutFloat(memint32[(reg_sp4-14)],GetFloat4(reg_sp4-37)*GetFloat4(reg_sp4-12))
/*+465:ILDC*/memint32[reg_sp4-14]=+1
/*+466:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-40]+memint32[reg_sp4-14]
/*+467:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_this4+2)];
/*+468:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*8
/*+469:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+0.650000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+470:FMUL*/PutFloat(memint32[(reg_sp4-12)],GetFloat4(reg_sp4-39)*GetFloat4(reg_sp4-10))
/*+471:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_sp4-41)];
/*+472:INC*/memint32[reg_sp4-41]=memint32[reg_sp4-41]+1
/*+473:JMP*/reg_ip=49;
}
/*474*/
code[51]=function(){
/*+474:ILDC*/memint32[reg_sp4-35]=+0;reg_ip=52;
}
/*475*/
code[52]=function(){
/*+475:ILDC*/memint32[reg_sp4-14]=+20
/*+476:LS*/memint32[reg_sp4-13]=memint32[reg_sp4-35] <memint32[reg_sp4-14]
/*+477:JMPZ*/if(memint32[reg_sp4-13]==0){reg_ip=63;}else{reg_ip=53;}
}
/*478*/
code[53]=function(){
/*+478:LEA*/memint32[reg_sp4-14]=+476
/*+479:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-35]*28
/*+480:OFFS*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+0
/*+481:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-136,addr,addr+8);}
/*+482:LEA*/memint32[reg_sp4-14]=+476
/*+483:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-35]*28
/*+484:OFFS*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+8
/*+485:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-128,addr,addr+8);}
/*+486:LEA*/memint32[reg_sp4-14]=+476
/*+487:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-35]*28
/*+488:OFFS*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+24
/*+489:SUB*/memint32[reg_sp4-11]=memint32[reg_this4+0]-GetInt(memint32[(reg_sp4-12)])
/*+490:I2F*/{let addr=(reg_sp4-30);cvtflt64[0]=memint32[reg_sp4-11];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+491:ILDC*/memint32[reg_sp4-14]=+48000
/*+492:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+493:FGR*/memint32[reg_sp4-11]=GetFloat4(reg_sp4-30) >GetFloat4(reg_sp4-13)
/*+494:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=55;}else{reg_ip=54;}
}
/*495*/
code[54]=function(){
/*+495:JMP*/reg_ip=62;
}
/*496*/
code[55]=function(){
/*+496:LEA*/memint32[reg_sp4-14]=+476
/*+497:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-35]*28
/*+498:OFFS*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+16
/*+499:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-112,addr,addr+8);}
/*+500:ILDC*/memint32[reg_sp4-26]=+0
/*+501:ILDC*/memint32[reg_sp4-14]=+0
/*+502:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:FLS*/memint32[reg_sp4-11]=GetFloat4(reg_sp4-30) <GetFloat4(reg_sp4-13)
/*+504:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=57;}else{reg_ip=56;}
}
/*505*/
code[56]=function(){
/*+505:FNEG*/{let addr=(reg_sp4-14);cvtflt64[0]=-GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+506:F2I*/memint32[reg_sp4-26]=GetFloat4(reg_sp4-14);reg_ip=57;
}
/*507*/
code[57]=function(){
/*+507:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-42)];
/*+508:ILDC*/memint32[reg_sp4-14]=+48000
/*+509:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+510:FADD*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+511:I2F*/{let addr=(reg_sp4-9);cvtflt64[0]=memint32[reg_sp4-25];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+512:FLS*/memint32[reg_sp4-7]=GetFloat4(reg_sp4-11) <GetFloat4(reg_sp4-9)
/*+513:JMPZ*/if(memint32[reg_sp4-7]==0){reg_ip=59;}else{reg_ip=58;}
}
/*514*/
code[58]=function(){
/*+514:ILDC*/memint32[reg_sp4-14]=+48000
/*+515:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:FADD*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+517:F2I*/memint32[reg_sp4-25]=GetFloat4(reg_sp4-11);reg_ip=59;
}
/*518*/
code[59]=function(){
/*+518:MOV*//*4*/memint32[(reg_sp4-24)]=memint32[(reg_sp4-26)];;reg_ip=60;
}
/*519*/
code[60]=function(){
/*+519:LS*/memint32[reg_sp4-14]=memint32[reg_sp4-24] <memint32[reg_sp4-25]
/*+520:JMPZ*/if(memint32[reg_sp4-14]==0){reg_ip=62;}else{reg_ip=61;}
}
/*521*/
code[61]=function(){
/*+521:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+48000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+522:FDIV*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-30)/GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+523:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+524:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+525:NCALL*/SC_sin();
/*+526:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+527:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+528:FSUB*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)-GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+529:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+530:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+531:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+532:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-21);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+533:ILDC*/memint32[reg_sp4-14]=+30
/*+534:I2F*/{let addr=(reg_sp4-13);cvtflt64[0]=memint32[reg_sp4-14];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+535:FSUB*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-34)-GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+536:FLDC*/{let addr=(reg_sp4-9);cvtflt64[0]=+300.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+537:FDIV*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-11)/GetFloat4(reg_sp4-9);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+538:ADD*/memint32[reg_sp4-14]=memint32[reg_this4+1]+memint32[reg_sp4-24]
/*+539:ILDC*/memint32[reg_sp4-13]=+12000
/*+540:MOD*/memint32[reg_sp4-12]=memint32[reg_sp4-14] %memint32[reg_sp4-13]
/*+541:ILDC*/memint32[reg_sp4-11]=+2
/*+542:MUL*/memint32[reg_sp4-17]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-11]);
/*+543:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+2)];
/*+544:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-17]*8
/*+545:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+546:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)-GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+547:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+548:FADD*/PutFloat(memint32[(reg_sp4-14)],GetFloat(memint32[(reg_sp4-14)])+GetFloat4(reg_sp4-8))
/*+549:MOV*/{let addr=memint32[(reg_sp4-14)];mem8.copyWithin(reg_sp-24,addr,addr+8);}
/*+550:ILDC*/memint32[reg_sp4-14]=+1
/*+551:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-17]+memint32[reg_sp4-14]
/*+552:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_this4+2)];
/*+553:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*8
/*+554:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-21)*GetFloat4(reg_sp4-19);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+555:FADD*/PutFloat(memint32[(reg_sp4-12)],GetFloat(memint32[(reg_sp4-12)])+GetFloat4(reg_sp4-10))
/*+556:MOV*/{let addr=memint32[(reg_sp4-12)];mem8.copyWithin(reg_sp-32,addr,addr+8);}
/*+557:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+558:FLDC*/{let addr=(reg_sp4-12);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+559:FADD*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+560:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_sp4-24)];
/*+561:INC*/memint32[reg_sp4-24]=memint32[reg_sp4-24]+1
/*+562:JMP*/reg_ip=60;
}
/*563*/
code[62]=function(){
/*+563:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_sp4-35)];
/*+564:INC*/memint32[reg_sp4-35]=memint32[reg_sp4-35]+1
/*+565:JMP*/reg_ip=52;
}
/*566*/
code[63]=function(){
/*+566:ILDC*/memint32[reg_sp4-16]=+0;reg_ip=64;
}
/*567*/
code[64]=function(){
/*+567:LS*/memint32[reg_sp4-14]=memint32[reg_sp4-16] <memint32[reg_sp4-42]
/*+568:JMPZ*/if(memint32[reg_sp4-14]==0){reg_ip=66;}else{reg_ip=65;}
}
/*569*/
code[65]=function(){
/*+569:ADD*/memint32[reg_sp4-14]=memint32[reg_this4+1]+memint32[reg_sp4-16]
/*+570:ILDC*/memint32[reg_sp4-13]=+12000
/*+571:MOD*/memint32[reg_sp4-12]=memint32[reg_sp4-14] %memint32[reg_sp4-13]
/*+572:ILDC*/memint32[reg_sp4-11]=+2
/*+573:MUL*/memint32[reg_sp4-15]=Math.imul(memint32[reg_sp4-12],memint32[reg_sp4-11]);
/*+574:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+2)];
/*+575:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-15]*8
/*+576:ILDC*/memint32[reg_sp4-12]=+1
/*+577:ADD*/memint32[reg_sp4-11]=memint32[reg_sp4-15]+memint32[reg_sp4-12]
/*+578:MOV*//*4*/memint32[(reg_sp4-10)]=memint32[(reg_this4+2)];
/*+579:IDX*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+memint32[reg_sp4-11]*8
/*+580:MOV*/{let addr=memint32[(reg_sp4-10)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+581:MOV*/{let addr=memint32[(reg_sp4-14)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+582:NCALL*/SC_snd_out();
/*+583:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_sp4-16)];
/*+584:INC*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+1
/*+585:JMP*/reg_ip=64;
}
/*586*/
code[66]=function(){
/*+586:ADD*/memint32[reg_sp4-14]=memint32[reg_this4+1]+memint32[reg_sp4-42]
/*+587:ILDC*/memint32[reg_sp4-13]=+12000
/*+588:MOD*/memint32[reg_this4+1]=memint32[reg_sp4-14] %memint32[reg_sp4-13]
/*+589:ADD*/memint32[reg_this4+0]=memint32[reg_this4+0]+memint32[reg_sp4-42]
/*+590:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+0)];
/*+591:ADDSP*/reg_sp+=-164;reg_sp4=reg_sp>>2;
/*+592:RET*/reg_ip=regs.pop();
}
/*593*/
code[67]=function(){
/*+593:ADDSP*/reg_sp+=+264;reg_sp4=reg_sp>>2;
/*+594:FLDC*/{let addr=(reg_sp4-66);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+595:ILDC*/memint32[+118]=+0
/*+596:ILDC*/memint32[+115]=+0
/*+597:NCALL*/SC_Time();
/*+598:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+599:MOV*//*8*/{let dst=(reg_sp4-64);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+600:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+601:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+250.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+602:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+603:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+604:IAM*/regs.push(reg_this);reg_this=+96;reg_this4=reg_this>>2;
/*+605:CALL*/regs.push(68);reg_ip=18;
}
/*606*/
code[68]=function(){
/*+606:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+607:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+280.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+608:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+260.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+609:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+610:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+250.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+611:IAM*/regs.push(reg_this);reg_this=+128;reg_this4=reg_this>>2;
/*+612:CALL*/regs.push(69);reg_ip=18;
}
/*613*/
code[69]=function(){
/*+613:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+614:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+250.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+615:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+616:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+280.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+617:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+260.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+618:IAM*/regs.push(reg_this);reg_this=+160;reg_this4=reg_this>>2;
/*+619:CALL*/regs.push(70);reg_ip=18;
}
/*620*/
code[70]=function(){
/*+620:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+621:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+622:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+623:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+250.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+624:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+50.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+625:IAM*/regs.push(reg_this);reg_this=+192;reg_this4=reg_this>>2;
/*+626:CALL*/regs.push(71);reg_ip=18;
}
/*627*/
code[71]=function(){
/*+627:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+628:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+629:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+630:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+105.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+631:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+632:IAM*/regs.push(reg_this);reg_this=+224;reg_this4=reg_this>>2;
/*+633:CALL*/regs.push(72);reg_ip=18;
}
/*634*/
code[72]=function(){
/*+634:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+635:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+636:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+637:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+105.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+638:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+639:IAM*/regs.push(reg_this);reg_this=+256;reg_this4=reg_this>>2;
/*+640:CALL*/regs.push(73);reg_ip=18;
}
/*641*/
code[73]=function(){
/*+641:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+642:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+265.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+643:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+245.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+644:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+645:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+646:IAM*/regs.push(reg_this);reg_this=+288;reg_this4=reg_this>>2;
/*+647:CALL*/regs.push(74);reg_ip=18;
}
/*648*/
code[74]=function(){
/*+648:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+649:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+200.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+650:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+80.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+651:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+265.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+652:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+245.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+653:IAM*/regs.push(reg_this);reg_this=+320;reg_this4=reg_this>>2;
/*+654:CALL*/regs.push(75);reg_ip=18;
}
/*655*/
code[75]=function(){
/*+655:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+656:FLDC*/{let addr=(reg_sp4-62);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+657:ILDC*/memint32[reg_sp4-26]=+55
/*+658:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+659:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+660:ILDC*/memint32[reg_sp4-21]=+21
/*+661:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+662:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+663:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+664:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+665:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+666:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+170.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+667:IAM*/regs.push(reg_this);reg_this=+352;reg_this4=reg_this>>2;
/*+668:CALL*/regs.push(76);reg_ip=19;
}
/*669*/
code[76]=function(){
/*+669:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+670:ILDC*/memint32[reg_sp4-26]=+36
/*+671:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+672:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+673:ILDC*/memint32[reg_sp4-21]=+38
/*+674:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+675:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+676:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+677:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+678:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+679:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+680:IAM*/regs.push(reg_this);reg_this=+384;reg_this4=reg_this>>2;
/*+681:CALL*/regs.push(77);reg_ip=19;
}
/*682*/
code[77]=function(){
/*+682:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+683:ILDC*/memint32[reg_sp4-26]=+21
/*+684:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+685:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+686:ILDC*/memint32[reg_sp4-21]=+56
/*+687:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+688:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-62);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+689:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+690:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-23);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+691:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+692:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+60.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:IAM*/regs.push(reg_this);reg_this=+416;reg_this4=reg_this>>2;
/*+694:CALL*/regs.push(78);reg_ip=19;
}
/*695*/
code[78]=function(){
/*+695:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+696:IAM*/regs.push(reg_this);reg_this=+476;reg_this4=reg_this>>2;
/*+697:CALL*/regs.push(79);reg_ip=21;
}
/*698*/
code[79]=function(){
/*+698:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+699:IAM*/regs.push(reg_this);reg_this=reg_sp-240;reg_this4=reg_this>>2;
/*+700:CALL*/regs.push(80);reg_ip=44;
}
/*701*/
code[80]=function(){
/*+701:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+702:NCALL*/SC_Time();
/*+703:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+704:MOV*//*8*/{let dst=(reg_sp4-57);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=81;
}
/*705*/
code[81]=function(){
/*+705:NCALL*/SC_Time();
/*+706:MOV*//*8*/{let dst=(reg_sp4-26);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+707:MOV*//*8*/{let dst=(reg_sp4-55);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+708:FSUB*/{let addr=(reg_sp4-53);cvtflt64[0]=GetFloat4(reg_sp4-55)-GetFloat4(reg_sp4-64);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+709:MOV*//*4*/memint32[(+260)]=memint32[(reg_sp4-60)];
/*+710:NCALL*/SC_clear();
/*+711:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+712:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+713:NCALL*/SC_M();
/*+714:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+715:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+716:NCALL*/SC_l();
/*+717:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+480.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+718:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+719:NCALL*/SC_l();
/*+720:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+721:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+722:NCALL*/SC_l();
/*+723:NCALL*/SC_close();
/*+724:NCALL*/SC_fin();
/*+725:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+726:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+727:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+728:NCALL*/SC_rgb();
/*+729:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+730:NCALL*/SC_alpha();
/*+731:NCALL*/SC_fill1();
/*+732:NCALL*/SC_clear();
/*+733:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+734:NCALL*/SC_alpha();
/*+735:ILDC*/memint32[reg_sp4-51]=+0;reg_ip=82;
}
/*736*/
code[82]=function(){
/*+736:ILDC*/memint32[reg_sp4-26]=+3
/*+737:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-51] <memint32[reg_sp4-26]
/*+738:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=109;}else{reg_ip=83;}
}
/*739*/
code[83]=function(){
/*+739:MOV*//*8*/{let dst=(reg_sp4-50);let src=(reg_sp4-64);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+740:MOV*//*8*/{let dst=(reg_sp4-48);let src=(reg_sp4-53);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+741:LEA*/memint32[reg_sp4-26]=+352
/*+742:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-51]*32
/*+743:MOV*//*4*/memint32[(reg_sp4-46)]=memint32[(reg_sp4-26)];;reg_ip=84;
}
/*744*/
code[84]=function(){
/*+744:FLDC*/{let addr=(reg_sp4-45);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+745:ILDC*/memint32[reg_sp4-43]=-1
/*+746:ILDC*/memint32[reg_sp4-42]=+0;reg_ip=85;
}
/*747*/
code[85]=function(){
/*+747:ILDC*/memint32[reg_sp4-26]=+8
/*+748:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-42] <memint32[reg_sp4-26]
/*+749:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=93;}else{reg_ip=86;}
}
/*750*/
code[86]=function(){
/*+750:LEA*/memint32[reg_sp4-26]=+96
/*+751:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-42]*32
/*+752:MOV*//*4*/memint32[(reg_sp4-41)]=memint32[(reg_sp4-26)];
/*+753:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+0
/*+754:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-46]+0
/*+755:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-46]+16
/*+756:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+757:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-24)];reg_this4=reg_this>>2;
/*+758:CALL*/regs.push(87);reg_ip=2;
}
/*759*/
code[87]=function(){
/*+759:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-92,addr,addr+16);}
/*+760:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+761:LEA*/memint32[reg_sp4-15]=reg_sp-92
/*+762:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-15)];
/*+763:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+764:CALL*/regs.push(88);reg_ip=4;
}
/*765*/
code[88]=function(){
/*+765:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-76,addr,addr+16);}
/*+766:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+767:OFFS*/memint32[reg_sp4-14]=memint32[reg_sp4-41]+0
/*+768:OFFS*/memint32[reg_sp4-13]=memint32[reg_sp4-41]+16
/*+769:LEA*/memint32[reg_sp4-11]=reg_sp-160
/*+770:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-11)];
/*+771:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-13)];
/*+772:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-14)];
/*+773:LEA*/memint32[reg_sp4-10]=reg_sp-76
/*+774:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-10)];
/*+775:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-26)];
/*+776:CALL*/regs.push(89);reg_ip=38;
}
/*777*/
code[89]=function(){
/*+777:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-1)];
/*+778:JMPZ*/if(memint32[reg_sp4-12]==0){reg_ip=92;}else{reg_ip=90;}
}
/*779*/
code[90]=function(){
/*+779:FLS*/memint32[reg_sp4-26]=GetFloat4(reg_sp4-40) <GetFloat4(reg_sp4-45)
/*+780:JMPZ*/if(memint32[reg_sp4-26]==0){reg_ip=92;}else{reg_ip=91;}
}
/*781*/
code[91]=function(){
/*+781:MOV*//*8*/{let dst=(reg_sp4-45);let src=(reg_sp4-40);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+782:MOV*//*4*/memint32[(reg_sp4-43)]=memint32[(reg_sp4-42)];;reg_ip=92;
}
/*783*/
code[92]=function(){
/*+783:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-42)];
/*+784:INC*/memint32[reg_sp4-42]=memint32[reg_sp4-42]+1
/*+785:JMP*/reg_ip=85;
}
/*786*/
code[93]=function(){
/*+786:ILDC*/memint32[reg_sp4-26]=+0
/*+787:GE*/memint32[reg_sp4-25]=memint32[reg_sp4-43]>=memint32[reg_sp4-26]
/*+788:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=104;}else{reg_ip=94;}
}
/*789*/
code[94]=function(){
/*+789:LEA*/memint32[reg_sp4-26]=+96
/*+790:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-43]*32
/*+791:MOV*//*4*/memint32[(reg_sp4-38)]=memint32[(reg_sp4-26)];
/*+792:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+0
/*+793:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-46]+16
/*+794:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+795:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+796:CALL*/regs.push(95);reg_ip=2;
}
/*797*/
code[95]=function(){
/*+797:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-96,addr,addr+16);}
/*+798:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+799:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-45);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+800:IAM*/regs.push(reg_this);reg_this=reg_sp-96;reg_this4=reg_this>>2;
/*+801:CALL*/regs.push(96);reg_ip=2;
}
/*802*/
code[96]=function(){
/*+802:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-80,addr,addr+16);}
/*+803:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+804:LEA*/memint32[reg_sp4-12]=reg_sp-80
/*+805:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-12)];
/*+806:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+807:CALL*/regs.push(97);reg_ip=1;
}
/*808*/
code[97]=function(){
/*+808:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-64,addr,addr+16);}
/*+809:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+810:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-45)*GetFloat4(reg_sp4-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+811:FADD*/{let addr=(reg_sp4-50);cvtflt64[0]=GetFloat4(reg_sp4-50)+GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+812:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-50);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+813:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-45)*GetFloat4(reg_sp4-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+814:FSUB*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat4(reg_sp4-48)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+815:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+816:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+16
/*+817:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-46]+16
/*+818:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-38]+0
/*+819:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-38]+16
/*+820:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-23)];
/*+821:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-24)];reg_this4=reg_this>>2;
/*+822:CALL*/regs.push(98);reg_ip=3;
}
/*823*/
code[98]=function(){
/*+823:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-88,addr,addr+16);}
/*+824:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+825:IAM*/regs.push(reg_this);reg_this=reg_sp-88;reg_this4=reg_this>>2;
/*+826:CALL*/regs.push(99);reg_ip=7;
}
/*827*/
code[99]=function(){
/*+827:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-72,addr,addr+16);}
/*+828:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+829:LEA*/memint32[reg_sp4-10]=reg_sp-72
/*+830:MOV*//*4*/memint32[(reg_sp4-6)]=memint32[(reg_sp4-10)];
/*+831:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-25)];
/*+832:CALL*/regs.push(100);reg_ip=13;
}
/*833*/
code[100]=function(){
/*+833:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-56,addr,addr+16);}
/*+834:MOV*/{let addr=reg_sp-56;mem8.copyWithin(memint32[(reg_sp4-26)],addr,addr+16);}
/*+835:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+0
/*+836:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-46]+16
/*+837:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.000010;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+838:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000010;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+839:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+840:CALL*/regs.push(101);reg_ip=2;
}
/*841*/
code[101]=function(){
/*+841:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-88,addr,addr+16);}
/*+842:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+843:LEA*/memint32[reg_sp4-14]=reg_sp-88
/*+844:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-14)];
/*+845:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+846:CALL*/regs.push(102);reg_ip=1;
}
/*847*/
code[102]=function(){
/*+847:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-72,addr,addr+16);}
/*+848:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+849:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+0
/*+850:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+851:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-46]+0
/*+852:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+8
/*+853:MOV*/{let addr=memint32[(reg_sp4-23)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+854:MOV*/{let addr=memint32[(reg_sp4-25)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+855:IAM*/regs.push(reg_this);reg_this=+476;reg_this4=reg_this>>2;
/*+856:CALL*/regs.push(103);reg_ip=25;
}
/*857*/
code[103]=function(){
/*+857:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+858:JMP*/reg_ip=107;
}
/*859*/
code[104]=function(){
/*+859:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-46]+0
/*+860:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-46]+16
/*+861:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+862:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-25)];reg_this4=reg_this>>2;
/*+863:CALL*/regs.push(105);reg_ip=2;
}
/*864*/
code[105]=function(){
/*+864:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-96,addr,addr+16);}
/*+865:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+866:LEA*/memint32[reg_sp4-16]=reg_sp-96
/*+867:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-16)];
/*+868:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+869:CALL*/regs.push(106);reg_ip=1;
}
/*870*/
code[106]=function(){
/*+870:MOV*/{let addr=reg_sp-16;mem8.copyWithin(reg_sp-80,addr,addr+16);}
/*+871:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+872:JMP*/reg_ip=108;
}
/*873*/
code[107]=function(){
/*+873:JMP*/reg_ip=84;
}
/*874*/
code[108]=function(){
/*+874:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-51)];
/*+875:INC*/memint32[reg_sp4-51]=memint32[reg_sp4-51]+1
/*+876:JMP*/reg_ip=82;
}
/*877*/
code[109]=function(){
/*+877:MOV*//*8*/{let dst=(reg_sp4-64);let src=(reg_sp4-55);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=110;
}
/*878*/
code[110]=function(){
/*+878:NCALL*/SC_snd_bufhealth();
/*+879:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-1)];
/*+880:ILDC*/memint32[reg_sp4-25]=+3000
/*+881:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-26] <memint32[reg_sp4-25]
/*+882:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=113;}else{reg_ip=111;}
}
/*883*/
code[111]=function(){
/*+883:ILDC*/memint32[reg_sp4-1]=+512
/*+884:IAM*/regs.push(reg_this);reg_this=reg_sp-240;reg_this4=reg_this>>2;
/*+885:CALL*/regs.push(112);reg_ip=48;
}
/*886*/
code[112]=function(){
/*+886:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+887:JMP*/reg_ip=110;
}
/*888*/
code[113]=function(){
/*+888:NCALL*/SC_clear();
/*+889:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+890:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+891:NCALL*/SC_M();
/*+892:ILDC*/memint32[reg_sp4-37]=+0;reg_ip=114;
}
/*893*/
code[114]=function(){
/*+893:ILDC*/memint32[reg_sp4-26]=+640
/*+894:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-37] <memint32[reg_sp4-26]
/*+895:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=116;}else{reg_ip=115;}
}
/*896*/
code[115]=function(){
/*+896:ILDC*/memint32[reg_sp4-26]=+640
/*+897:SUB*/memint32[reg_sp4-25]=memint32[reg_sp4-37]-memint32[reg_sp4-26]
/*+898:ILDC*/memint32[reg_sp4-24]=+2
/*+899:MUL*/memint32[reg_sp4-23]=Math.imul(memint32[reg_sp4-25],memint32[reg_sp4-24]);
/*+900:ADD*/memint32[reg_sp4-22]=memint32[reg_sp4-59]+memint32[reg_sp4-23]
/*+901:ILDC*/memint32[reg_sp4-21]=+12000
/*+902:ADD*/memint32[reg_sp4-20]=memint32[reg_sp4-22]+memint32[reg_sp4-21]
/*+903:ILDC*/memint32[reg_sp4-19]=+12000
/*+904:MOD*/memint32[reg_sp4-18]=memint32[reg_sp4-20] %memint32[reg_sp4-19]
/*+905:ILDC*/memint32[reg_sp4-17]=+2
/*+906:MUL*/memint32[reg_sp4-16]=Math.imul(memint32[reg_sp4-18],memint32[reg_sp4-17]);
/*+907:MOV*//*4*/memint32[(reg_sp4-15)]=memint32[(reg_sp4-58)];
/*+908:IDX*/memint32[reg_sp4-15]=memint32[reg_sp4-15]+memint32[reg_sp4-16]*8
/*+909:MOV*/{let addr=memint32[(reg_sp4-15)];mem8.copyWithin(reg_sp-144,addr,addr+8);}
/*+910:ILDC*/memint32[reg_sp4-26]=+120
/*+911:I2F*/{let addr=(reg_sp4-25);cvtflt64[0]=memint32[reg_sp4-26];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+912:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-36)*GetFloat4(reg_sp4-25);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+913:ILDC*/memint32[reg_sp4-21]=+240
/*+914:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+915:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-23)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+916:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+917:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-37];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+918:NCALL*/SC_L();
/*+919:ILDC*/memint32[reg_sp4-26]=+2
/*+920:ADD*/memint32[reg_sp4-37]=memint32[reg_sp4-37]+memint32[reg_sp4-26]
/*+921:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-37)];
/*+922:JMP*/reg_ip=114;
}
/*923*/
code[116]=function(){
/*+923:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+924:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+641.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+925:NCALL*/SC_L();
/*+926:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+927:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-641.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+928:NCALL*/SC_l();
/*+929:NCALL*/SC_fin();
/*+930:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+931:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+932:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+933:NCALL*/SC_rgb();
/*+934:NCALL*/SC_fill1();
/*+935:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+936:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+937:NCALL*/SC_width();
/*+938:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+939:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+940:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+941:NCALL*/SC_rgb();
/*+942:NCALL*/SC_stroke();
/*+943:NCALL*/SC_clear();
/*+944:ILDC*/memint32[reg_sp4-34]=+0;reg_ip=117;
}
/*945*/
code[117]=function(){
/*+945:ILDC*/memint32[reg_sp4-26]=+8
/*+946:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-34] <memint32[reg_sp4-26]
/*+947:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=119;}else{reg_ip=118;}
}
/*948*/
code[118]=function(){
/*+948:LEA*/memint32[reg_sp4-26]=+96
/*+949:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-34]*32
/*+950:MOV*//*4*/memint32[(reg_sp4-33)]=memint32[(reg_sp4-26)];
/*+951:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-33]+0
/*+952:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+953:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-33]+0
/*+954:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+8
/*+955:MOV*/{let addr=memint32[(reg_sp4-23)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+956:MOV*/{let addr=memint32[(reg_sp4-25)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+957:NCALL*/SC_M();
/*+958:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-33]+16
/*+959:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+960:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-33]+16
/*+961:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+8
/*+962:MOV*/{let addr=memint32[(reg_sp4-23)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+963:MOV*/{let addr=memint32[(reg_sp4-25)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+964:NCALL*/SC_L();
/*+965:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-34)];
/*+966:INC*/memint32[reg_sp4-34]=memint32[reg_sp4-34]+1
/*+967:JMP*/reg_ip=117;
}
/*968*/
code[119]=function(){
/*+968:NCALL*/SC_fin();
/*+969:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+970:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+971:NCALL*/SC_width();
/*+972:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+973:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+974:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+975:NCALL*/SC_rgb();
/*+976:NCALL*/SC_stroke();
/*+977:IAM*/regs.push(reg_this);reg_this=+476;reg_this4=reg_this>>2;
/*+978:CALL*/regs.push(120);reg_ip=31;
}
/*979*/
code[120]=function(){
/*+979:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+980:NCALL*/SC_clear();
/*+981:ILDC*/memint32[reg_sp4-32]=+0;reg_ip=121;
}
/*982*/
code[121]=function(){
/*+982:ILDC*/memint32[reg_sp4-26]=+3
/*+983:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-32] <memint32[reg_sp4-26]
/*+984:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=124;}else{reg_ip=122;}
}
/*985*/
code[122]=function(){
/*+985:LEA*/memint32[reg_sp4-26]=+352
/*+986:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-32]*32
/*+987:MOV*//*4*/memint32[(reg_sp4-31)]=memint32[(reg_sp4-26)];
/*+988:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-31]+0
/*+989:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+990:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-31]+0
/*+991:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+8
/*+992:MOV*/{let addr=memint32[(reg_sp4-23)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+993:MOV*/{let addr=memint32[(reg_sp4-25)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+994:NCALL*/SC_M();
/*+995:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-31]+16
/*+996:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp4-26)];reg_this4=reg_this>>2;
/*+997:CALL*/regs.push(123);reg_ip=6;
}
/*998*/
code[123]=function(){
/*+998:MOV*//*8*/{let dst=(reg_sp4-25);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+999:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1000:FLDC*/{let addr=(reg_sp4-23);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1001:FDIV*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-25)/GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1002:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-31]+16
/*+1003:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+1004:FDIV*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat(memint32[(reg_sp4-25)])/GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1005:ILDC*/memint32[reg_sp4-22]=+0
/*+1006:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-22];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1007:FSUB*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-21)-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1008:OFFS*/memint32[reg_sp4-17]=memint32[reg_sp4-31]+16
/*+1009:OFFS*/memint32[reg_sp4-16]=memint32[reg_sp4-17]+8
/*+1010:FDIV*/{let addr=(reg_sp4-15);cvtflt64[0]=GetFloat(memint32[(reg_sp4-16)])/GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1011:ILDC*/memint32[reg_sp4-13]=+0
/*+1012:I2F*/{let addr=(reg_sp4-12);cvtflt64[0]=memint32[reg_sp4-13];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1013:FSUB*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)-GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1014:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1015:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1016:NCALL*/SC_l();
/*+1017:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-32)];
/*+1018:INC*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+1
/*+1019:JMP*/reg_ip=121;
}
/*1020*/
code[124]=function(){
/*+1020:NCALL*/SC_fin();
/*+1021:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1022:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1023:NCALL*/SC_width();
/*+1024:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1025:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1026:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1027:NCALL*/SC_rgb();
/*+1028:NCALL*/SC_stroke();
/*+1029:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1030:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1031:NCALL*/SC_width();
/*+1032:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1033:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1034:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1035:NCALL*/SC_rgb();
/*+1036:NCALL*/SC_stroke();
/*+1037:NCALL*/SC_clear();
/*+1038:ILDC*/memint32[reg_sp4-28]=+0;reg_ip=125;
}
/*1039*/
code[125]=function(){
/*+1039:ILDC*/memint32[reg_sp4-26]=+3
/*+1040:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-28] <memint32[reg_sp4-26]
/*+1041:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=127;}else{reg_ip=126;}
}
/*1042*/
code[126]=function(){
/*+1042:LEA*/memint32[reg_sp4-26]=+352
/*+1043:IDX*/memint32[reg_sp4-26]=memint32[reg_sp4-26]+memint32[reg_sp4-28]*32
/*+1044:MOV*//*4*/memint32[(reg_sp4-27)]=memint32[(reg_sp4-26)];
/*+1045:OFFS*/memint32[reg_sp4-26]=memint32[reg_sp4-27]+0
/*+1046:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-26]+0
/*+1047:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-27]+0
/*+1048:OFFS*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+8
/*+1049:MOV*/{let addr=memint32[(reg_sp4-23)];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+1050:MOV*/{let addr=memint32[(reg_sp4-25)];mem8.copyWithin(reg_sp-8,addr,addr+8);}
/*+1051:NCALL*/SC_M();
/*+1052:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1053:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1054:NCALL*/SC_l();
/*+1055:MOV*//*4*/memint32[(reg_sp4-26)]=memint32[(reg_sp4-28)];
/*+1056:INC*/memint32[reg_sp4-28]=memint32[reg_sp4-28]+1
/*+1057:JMP*/reg_ip=125;
}
/*1058*/
code[127]=function(){
/*+1058:NCALL*/SC_fin();
/*+1059:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1060:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1061:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1062:NCALL*/SC_rgb();
/*+1063:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1064:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+10.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1065:NCALL*/SC_width();
/*+1066:NCALL*/SC_stroke();
/*+1067:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1068:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1069:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1070:NCALL*/SC_rgb();
/*+1071:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1072:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1073:NCALL*/SC_width();
/*+1074:NCALL*/SC_stroke();
/*+1075:INT*/int_code=+10;interrupt=true;;reg_ip=128;
}
/*1076*/
code[128]=function(){
/*+1076:JMP*/reg_ip=81;
}
/*1077*/
code[129]=function(){
/*+1077:ILDC*/memint32[reg_sp4-67]=+0
/*+1078:ADDSP*/reg_sp+=-264;reg_sp4=reg_sp>>2;
/*+1079:RET*/reg_ip=regs.pop();
}
let start_addr=67
let start_rsp=1060
let graphics=1
let sound=1
