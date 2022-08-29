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
\0, \0, \0, \0, \4, \0, \0, \0, R, e, n, d, e, r,  , t,
i, m, e, :,  , %, f, \10, \0, \-1, \-1, \-1, \-1, \-1, \-1, \-1,
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
0, 0, 0, 0, 4, 0, 0, 0, 82, 101, 110, 100, 101, 114, 32, 116,
105, 109, 101, 58, 32, 37, 102, 10, 0, 255, 255, 255, 255, 255, 255, 255,
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
/*+11:MOV*//*8*/{let dst=(reg_sp-24)>>2;let src=(reg_sp-56)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+12:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-64)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+13:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_sp-72)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+14:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-48,addr,addr+24);}
/*+15:ADDSP*/reg_sp+=-24;
/*+16:RET*/reg_ip=regs.pop();
}
code[17]=function(){
/*+17:ADDSP*/reg_sp+=+28;
/*+18:THAT*/memint32[(reg_sp-4)>>2]=reg_this
/*+19:MOV*/{let addr=memint32[(reg_sp-4)>>2];mem8.copyWithin(reg_sp-28,addr,addr+24);}
/*+20:IAM*/regs.push(reg_this);reg_this=reg_sp-28;
/*+21:CALL*/regs.push(22);reg_ip=26;
}
code[22]=function(){
/*+22:NOTME*/reg_this=regs.pop();
/*+23:MOV*/{let addr=reg_sp-28;mem8.copyWithin(reg_sp-52,addr,addr+24);}
/*+24:ADDSP*/reg_sp+=-28;
/*+25:RET*/reg_ip=regs.pop();
}
code[26]=function(){
/*+26:ADDSP*/reg_sp+=+88;
/*+27:FMUL*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+0)*GetFloat(reg_this+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+28:FMUL*/{let addr=(reg_sp-72)>>2;cvtflt64[0]=GetFloat(reg_this+8)*GetFloat(reg_this+8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+29:FADD*/{let addr=(reg_sp-64)>>2;cvtflt64[0]=GetFloat(reg_sp-80)+GetFloat(reg_sp-72);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+30:FMUL*/{let addr=(reg_sp-56)>>2;cvtflt64[0]=GetFloat(reg_this+16)*GetFloat(reg_this+16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+31:FADD*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=GetFloat(reg_sp-64)+GetFloat(reg_sp-56);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+32:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-48)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+33:NCALL*/SC_sqrt();
/*+34:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+35:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+36:FDIV*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=GetFloat(reg_sp-32)/GetFloat(reg_sp-40);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+37:FMUL*/{let addr=(reg_this+0)>>2;cvtflt64[0]=GetFloat(reg_this+0)*GetFloat(reg_sp-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+38:MOV*//*8*/{let dst=(reg_sp-80)>>2;let src=(reg_this+0)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+39:FMUL*/{let addr=(reg_this+8)>>2;cvtflt64[0]=GetFloat(reg_this+8)*GetFloat(reg_sp-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+40:MOV*//*8*/{let dst=(reg_sp-80)>>2;let src=(reg_this+8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+41:FMUL*/{let addr=(reg_this+16)>>2;cvtflt64[0]=GetFloat(reg_this+16)*GetFloat(reg_sp-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+42:MOV*//*8*/{let dst=(reg_sp-80)>>2;let src=(reg_this+16)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+43:ADDSP*/reg_sp+=-88;
/*+44:RET*/reg_ip=regs.pop();
}
code[45]=function(){
/*+45:ADDSP*/reg_sp+=+96;
/*+46:FSUB*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_this+0)-GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+47:FSUB*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=GetFloat(reg_this+8)-GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+48:FSUB*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+16)-GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+49:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+50:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-88)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+51:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+52:CALL*/regs.push(53);reg_ip=10;
}
code[53]=function(){
/*+53:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+54:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+55:ADDSP*/reg_sp+=-96;
/*+56:RET*/reg_ip=regs.pop();
}
code[57]=function(){
/*+57:ADDSP*/reg_sp+=+120;
/*+58:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+59:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-116)>>2]
/*+60:FSUB*/{let addr=(reg_sp-112)>>2;cvtflt64[0]=GetFloat(reg_this+0)-GetFloat(memint32[(reg_sp-120)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+61:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+62:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-100)>>2]
/*+63:FSUB*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_this+8)-GetFloat(memint32[(reg_sp-104)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:ILDC*/memint32[(reg_sp-84)>>2]=+16
/*+65:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-84)>>2]
/*+66:FSUB*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+16)-GetFloat(memint32[(reg_sp-88)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+67:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+68:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+69:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-112)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+70:CALL*/regs.push(71);reg_ip=10;
}
code[71]=function(){
/*+71:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+72:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-144,addr,addr+24);}
/*+73:ADDSP*/reg_sp+=-120;
/*+74:RET*/reg_ip=regs.pop();
}
code[75]=function(){
/*+75:ADDSP*/reg_sp+=+16;
/*+76:ILDC*/memint32[(reg_sp-12)>>2]=+0
/*+77:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+78:FSUB*/{let addr=(reg_this+0)>>2;cvtflt64[0]=GetFloat(reg_this+0)-GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+79:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+0)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+80:ILDC*/memint32[(reg_sp-12)>>2]=+8
/*+81:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+82:FSUB*/{let addr=(reg_this+8)>>2;cvtflt64[0]=GetFloat(reg_this+8)-GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+83:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+84:ILDC*/memint32[(reg_sp-12)>>2]=+16
/*+85:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+86:FSUB*/{let addr=(reg_this+16)>>2;cvtflt64[0]=GetFloat(reg_this+16)-GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+87:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+16)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+88:ADDSP*/reg_sp+=-16;
/*+89:RET*/reg_ip=regs.pop();
}
code[90]=function(){
/*+90:ADDSP*/reg_sp+=+96;
/*+91:FNEG*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=-GetFloat(reg_this+0);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+92:FNEG*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=-GetFloat(reg_this+8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+93:FNEG*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=-GetFloat(reg_this+16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+94:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+95:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-88)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+96:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+97:CALL*/regs.push(98);reg_ip=10;
}
code[98]=function(){
/*+98:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+99:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+100:ADDSP*/reg_sp+=-96;
/*+101:RET*/reg_ip=regs.pop();
}
code[102]=function(){
/*+102:ADDSP*/reg_sp+=+120;
/*+103:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+104:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-116)>>2]
/*+105:FADD*/{let addr=(reg_sp-112)>>2;cvtflt64[0]=GetFloat(reg_this+0)+GetFloat(memint32[(reg_sp-120)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+106:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+107:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-100)>>2]
/*+108:FADD*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_this+8)+GetFloat(memint32[(reg_sp-104)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+109:ILDC*/memint32[(reg_sp-84)>>2]=+16
/*+110:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-84)>>2]
/*+111:FADD*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+16)+GetFloat(memint32[(reg_sp-88)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+112:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+113:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+114:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-112)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+115:CALL*/regs.push(116);reg_ip=10;
}
code[116]=function(){
/*+116:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+117:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-144,addr,addr+24);}
/*+118:ADDSP*/reg_sp+=-120;
/*+119:RET*/reg_ip=regs.pop();
}
code[120]=function(){
/*+120:ADDSP*/reg_sp+=+16;
/*+121:ILDC*/memint32[(reg_sp-12)>>2]=+0
/*+122:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+123:FADD*/{let addr=(reg_this+0)>>2;cvtflt64[0]=GetFloat(reg_this+0)+GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+124:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+0)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+125:ILDC*/memint32[(reg_sp-12)>>2]=+8
/*+126:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+127:FADD*/{let addr=(reg_this+8)>>2;cvtflt64[0]=GetFloat(reg_this+8)+GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+128:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+129:ILDC*/memint32[(reg_sp-12)>>2]=+16
/*+130:ADD*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-20)>>2]+memint32[(reg_sp-12)>>2]
/*+131:FADD*/{let addr=(reg_this+16)>>2;cvtflt64[0]=GetFloat(reg_this+16)+GetFloat(memint32[(reg_sp-16)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+132:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+16)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+133:ADDSP*/reg_sp+=-16;
/*+134:RET*/reg_ip=regs.pop();
}
code[135]=function(){
/*+135:ADDSP*/reg_sp+=+96;
/*+136:FMUL*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_this+0)*GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+137:FMUL*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=GetFloat(reg_this+8)*GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+138:FMUL*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+16)*GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+139:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+140:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-88)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+141:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+142:CALL*/regs.push(143);reg_ip=10;
}
code[143]=function(){
/*+143:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+144:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+145:ADDSP*/reg_sp+=-96;
/*+146:RET*/reg_ip=regs.pop();
}
code[147]=function(){
/*+147:ADDSP*/reg_sp+=+8;
/*+148:FMUL*/{let addr=(reg_this+0)>>2;cvtflt64[0]=GetFloat(reg_this+0)*GetFloat(reg_sp-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+149:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+0)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+150:FMUL*/{let addr=(reg_this+8)>>2;cvtflt64[0]=GetFloat(reg_this+8)*GetFloat(reg_sp-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+152:FMUL*/{let addr=(reg_this+16)>>2;cvtflt64[0]=GetFloat(reg_this+16)*GetFloat(reg_sp-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_this+16)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+154:ADDSP*/reg_sp+=-8;
/*+155:RET*/reg_ip=regs.pop();
}
code[156]=function(){
/*+156:ADDSP*/reg_sp+=+96;
/*+157:FDIV*/{let addr=(reg_sp-96)>>2;cvtflt64[0]=GetFloat(reg_this+0)/GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+158:FDIV*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=GetFloat(reg_this+8)/GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:FDIV*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_this+16)/GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+160:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+161:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-88)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+162:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-96)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+163:CALL*/regs.push(164);reg_ip=10;
}
code[164]=function(){
/*+164:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+165:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+166:ADDSP*/reg_sp+=-96;
/*+167:RET*/reg_ip=regs.pop();
}
code[168]=function(){
/*+168:ADDSP*/reg_sp+=+240;
/*+169:ILDC*/memint32[(reg_sp-236)>>2]=+8
/*+170:ADD*/memint32[(reg_sp-240)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-236)>>2]
/*+171:ILDC*/memint32[(reg_sp-228)>>2]=+16
/*+172:ADD*/memint32[(reg_sp-232)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-228)>>2]
/*+173:FMUL*/{let addr=(reg_sp-224)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-240)>>2])*GetFloat(memint32[(reg_sp-232)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+174:ILDC*/memint32[(reg_sp-212)>>2]=+16
/*+175:ADD*/memint32[(reg_sp-216)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-212)>>2]
/*+176:ILDC*/memint32[(reg_sp-204)>>2]=+8
/*+177:ADD*/memint32[(reg_sp-208)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-204)>>2]
/*+178:FMUL*/{let addr=(reg_sp-200)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-216)>>2])*GetFloat(memint32[(reg_sp-208)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:FSUB*/{let addr=(reg_sp-192)>>2;cvtflt64[0]=GetFloat(reg_sp-224)-GetFloat(reg_sp-200);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:ILDC*/memint32[(reg_sp-180)>>2]=+16
/*+181:ADD*/memint32[(reg_sp-184)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-180)>>2]
/*+182:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+183:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-172)>>2]
/*+184:FMUL*/{let addr=(reg_sp-168)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-184)>>2])*GetFloat(memint32[(reg_sp-176)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+185:ILDC*/memint32[(reg_sp-156)>>2]=+0
/*+186:ADD*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-156)>>2]
/*+187:ILDC*/memint32[(reg_sp-148)>>2]=+16
/*+188:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-148)>>2]
/*+189:FMUL*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-160)>>2])*GetFloat(memint32[(reg_sp-152)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:FSUB*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=GetFloat(reg_sp-168)-GetFloat(reg_sp-144);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+192:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-124)>>2]
/*+193:ILDC*/memint32[(reg_sp-116)>>2]=+8
/*+194:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-116)>>2]
/*+195:FMUL*/{let addr=(reg_sp-112)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-128)>>2])*GetFloat(memint32[(reg_sp-120)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+196:ILDC*/memint32[(reg_sp-100)>>2]=+8
/*+197:ADD*/memint32[(reg_sp-104)>>2]=memint32[(reg_sp-268)>>2]+memint32[(reg_sp-100)>>2]
/*+198:ILDC*/memint32[(reg_sp-92)>>2]=+0
/*+199:ADD*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-272)>>2]+memint32[(reg_sp-92)>>2]
/*+200:FMUL*/{let addr=(reg_sp-88)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-104)>>2])*GetFloat(memint32[(reg_sp-96)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+201:FSUB*/{let addr=(reg_sp-80)>>2;cvtflt64[0]=GetFloat(reg_sp-112)-GetFloat(reg_sp-88);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+202:MOV*//*8*/{let dst=(reg_sp-48)>>2;let src=(reg_sp-80)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+203:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-136)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+204:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-192)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+205:CALL*/regs.push(206);reg_ip=10;
}
code[206]=function(){
/*+206:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+207:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-264,addr,addr+24);}
/*+208:ADDSP*/reg_sp+=-240;
/*+209:RET*/reg_ip=regs.pop();
}
code[210]=function(){
/*+210:ADDSP*/reg_sp+=+88;
/*+211:ILDC*/memint32[(reg_sp-84)>>2]=+0
/*+212:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-84)>>2]
/*+213:ILDC*/memint32[(reg_sp-76)>>2]=+0
/*+214:ADD*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-76)>>2]
/*+215:FMUL*/{let addr=(reg_sp-72)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-88)>>2])*GetFloat(memint32[(reg_sp-80)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+216:ILDC*/memint32[(reg_sp-60)>>2]=+8
/*+217:ADD*/memint32[(reg_sp-64)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-60)>>2]
/*+218:ILDC*/memint32[(reg_sp-52)>>2]=+8
/*+219:ADD*/memint32[(reg_sp-56)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-52)>>2]
/*+220:FMUL*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-64)>>2])*GetFloat(memint32[(reg_sp-56)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+221:FADD*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=GetFloat(reg_sp-72)+GetFloat(reg_sp-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+222:ILDC*/memint32[(reg_sp-28)>>2]=+16
/*+223:ADD*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-28)>>2]
/*+224:ILDC*/memint32[(reg_sp-20)>>2]=+16
/*+225:ADD*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-104)>>2]+memint32[(reg_sp-20)>>2]
/*+226:FMUL*/{let addr=(reg_sp-16)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-32)>>2])*GetFloat(memint32[(reg_sp-24)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+227:FADD*/{let addr=(reg_sp-8)>>2;cvtflt64[0]=GetFloat(reg_sp-40)+GetFloat(reg_sp-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+228:MOV*//*8*/{let dst=(reg_sp-96)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+229:ADDSP*/reg_sp+=-88;
/*+230:RET*/reg_ip=regs.pop();
}
code[231]=function(){
/*+231:ADDSP*/reg_sp+=+4;
/*+232:FLS*/memint32[(reg_sp-4)>>2]=GetFloat(reg_sp-20) <GetFloat(reg_sp-28)
/*+233:JMPZ*/if(memint32[(reg_sp-4)>>2]==0){reg_ip=238;}else{reg_ip=234;}
}
code[234]=function(){
/*+234:MOV*//*8*/{let dst=(reg_sp-12)>>2;let src=(reg_sp-28)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
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
/*+240:MOV*//*8*/{let dst=(reg_sp-12)>>2;let src=(reg_sp-36)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+241:ADDSP*/reg_sp+=-4;
/*+242:RET*/reg_ip=regs.pop();
}
code[243]=function(){
/*+243:MOV*//*8*/{let dst=(reg_sp-12)>>2;let src=(reg_sp-20)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+244:ADDSP*/reg_sp+=-4;
/*+245:RET*/reg_ip=regs.pop();
}
code[246]=function(){
/*+246:ADDSP*/reg_sp+=+452;
/*+247:ILDC*/memint32[(reg_sp-148)>>2]=+52
/*+248:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+249:ILDC*/memint32[(reg_sp-140)>>2]=+52
/*+250:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+251:FMUL*/{let addr=(reg_sp-452)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-152)>>2])*GetFloat(memint32[(reg_sp-144)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+252:ILDC*/memint32[(reg_sp-148)>>2]=+28
/*+253:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+254:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+255:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+256:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-144)>>2];
/*+257:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-152)>>2];
/*+258:CALL*/regs.push(259);reg_ip=57;
}
code[259]=function(){
/*+259:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+260:NOTME*/reg_this=regs.pop();
/*+261:MOV*/{let addr=reg_sp-136;mem8.copyWithin(reg_sp-444,addr,addr+24);}
/*+262:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-444
/*+263:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+264:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-444
/*+265:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+266:CALL*/regs.push(267);reg_ip=210;
}
code[267]=function(){
/*+267:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+268:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+269:IAM*/regs.push(reg_this);reg_this=reg_sp-444;
/*+270:CALL*/regs.push(271);reg_ip=156;
}
code[271]=function(){
/*+271:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+272:NOTME*/reg_this=regs.pop();
/*+273:MOV*/{let addr=reg_sp-136;mem8.copyWithin(reg_sp-420,addr,addr+24);}
/*+274:ILDC*/memint32[(reg_sp-148)>>2]=+0
/*+275:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+276:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+277:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+278:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-144)>>2];
/*+279:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-152)>>2];
/*+280:CALL*/regs.push(281);reg_ip=57;
}
code[281]=function(){
/*+281:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+282:NOTME*/reg_this=regs.pop();
/*+283:MOV*/{let addr=reg_sp-136;mem8.copyWithin(reg_sp-396,addr,addr+24);}
/*+284:LEA*/memint32[(reg_sp-128)>>2]=reg_sp-420
/*+285:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-128)>>2];
/*+286:LEA*/memint32[(reg_sp-124)>>2]=reg_sp-396
/*+287:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-124)>>2];
/*+288:CALL*/regs.push(289);reg_ip=168;
}
code[289]=function(){
/*+289:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-152,addr,addr+24);}
/*+290:MOV*/{let addr=reg_sp-152;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+291:ILDC*/memint32[(reg_sp-148)>>2]=+24
/*+292:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-460)>>2]+memint32[(reg_sp-148)>>2]
/*+293:LEA*/memint32[(reg_sp-120)>>2]=reg_sp-420
/*+294:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-120)>>2];
/*+295:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+296:CALL*/regs.push(297);reg_ip=168;
}
code[297]=function(){
/*+297:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-144,addr,addr+24);}
/*+298:MOV*/{let addr=reg_sp-144;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+299:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-420
/*+300:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+301:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-420
/*+302:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+303:CALL*/regs.push(304);reg_ip=210;
}
code[304]=function(){
/*+304:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+305:MOV*//*8*/{let dst=(reg_sp-324)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+306:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-348
/*+307:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+308:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-348
/*+309:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+310:CALL*/regs.push(311);reg_ip=210;
}
code[311]=function(){
/*+311:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+312:FLDC*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+313:FMUL*/{let addr=(reg_sp-316)>>2;cvtflt64[0]=GetFloat(reg_sp-136)*GetFloat(reg_sp-152);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+314:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-372
/*+315:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+316:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-348
/*+317:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+318:CALL*/regs.push(319);reg_ip=210;
}
code[319]=function(){
/*+319:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+320:FLDC*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+321:FMUL*/{let addr=(reg_sp-308)>>2;cvtflt64[0]=GetFloat(reg_sp-136)*GetFloat(reg_sp-152);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+322:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-372
/*+323:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+324:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-372
/*+325:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+326:CALL*/regs.push(327);reg_ip=210;
}
code[327]=function(){
/*+327:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+328:FMUL*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=GetFloat(reg_sp-452)*GetFloat(reg_sp-324);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+329:FSUB*/{let addr=(reg_sp-300)>>2;cvtflt64[0]=GetFloat(reg_sp-152)-GetFloat(reg_sp-136);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+330:FMUL*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=GetFloat(reg_sp-308)*GetFloat(reg_sp-308);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+331:FLDC*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+332:FMUL*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=GetFloat(reg_sp-144)*GetFloat(reg_sp-316);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+333:FMUL*/{let addr=(reg_sp-128)>>2;cvtflt64[0]=GetFloat(reg_sp-136)*GetFloat(reg_sp-300);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:FSUB*/{let addr=(reg_sp-292)>>2;cvtflt64[0]=GetFloat(reg_sp-152)-GetFloat(reg_sp-128);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+335:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+336:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-292) <GetFloat(reg_sp-152)
/*+337:JMPZ*/if(memint32[(reg_sp-144)>>2]==0){reg_ip=340;}else{reg_ip=338;}
}
code[338]=function(){
/*+338:ADDSP*/reg_sp+=-452;
/*+339:RET*/reg_ip=regs.pop();
}
code[340]=function(){
/*+340:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+341:FDIV*/{let addr=(reg_sp-284)>>2;cvtflt64[0]=GetFloat(reg_sp-152)/GetFloat(reg_sp-316);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+342:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-292)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+343:NCALL*/SC_sqrt();
/*+344:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+345:MOV*//*8*/{let dst=(reg_sp-292)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+346:FNEG*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=-GetFloat(reg_sp-308);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+347:FADD*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=GetFloat(reg_sp-152)+GetFloat(reg_sp-292);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+348:FMUL*/{let addr=(reg_sp-276)>>2;cvtflt64[0]=GetFloat(reg_sp-144)*GetFloat(reg_sp-284);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+349:FNEG*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=-GetFloat(reg_sp-308);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+350:FSUB*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=GetFloat(reg_sp-152)-GetFloat(reg_sp-292);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+351:FMUL*/{let addr=(reg_sp-268)>>2;cvtflt64[0]=GetFloat(reg_sp-144)*GetFloat(reg_sp-284);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+352:ILDC*/memint32[(reg_sp-260)>>2]=+0
/*+353:FGR*/memint32[(reg_sp-152)>>2]=GetFloat(reg_sp-276) >GetFloat(reg_sp-268)
/*+354:JMPZ*/if(memint32[(reg_sp-152)>>2]==0){reg_ip=358;}else{reg_ip=355;}
}
code[355]=function(){
/*+355:MOV*//*8*/{let dst=(reg_sp-256)>>2;let src=(reg_sp-268)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+356:MOV*//*8*/{let dst=(reg_sp-268)>>2;let src=(reg_sp-276)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+357:MOV*//*8*/{let dst=(reg_sp-276)>>2;let src=(reg_sp-256)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=358;
}
code[358]=function(){
/*+358:MOV*//*8*/{let dst=(reg_sp-248)>>2;let src=(reg_sp-276)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+359:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+368:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-248)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+369:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-144)>>2];
/*+370:CALL*/regs.push(371);reg_ip=135;
}
code[371]=function(){
/*+371:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+372:NOTME*/reg_this=regs.pop();
/*+373:LEA*/memint32[(reg_sp-88)>>2]=reg_sp-136
/*+374:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+375:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-152)>>2];
/*+376:CALL*/regs.push(377);reg_ip=102;
}
code[377]=function(){
/*+377:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+378:NOTME*/reg_this=regs.pop();
/*+379:MOV*/{let addr=reg_sp-112;mem8.copyWithin(reg_sp-240,addr,addr+24);}
/*+380:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+381:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+382:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+383:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+384:CALL*/regs.push(385);reg_ip=57;
}
code[385]=function(){
/*+385:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-144,addr,addr+24);}
/*+386:NOTME*/reg_this=regs.pop();
/*+387:MOV*/{let addr=reg_sp-144;mem8.copyWithin(reg_sp-216,addr,addr+24);}
/*+388:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-420
/*+389:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+390:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-216
/*+391:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+392:CALL*/regs.push(393);reg_ip=210;
}
code[393]=function(){
/*+393:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+394:MOV*//*8*/{let dst=(reg_sp-192)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+395:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+396:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-192) <GetFloat(reg_sp-152)
/*+397:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+398:FGR*/memint32[(reg_sp-132)>>2]=GetFloat(reg_sp-192) >GetFloat(reg_sp-140)
/*+399:LOR*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-144)>>2]||memint32[(reg_sp-132)>>2]
/*+400:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=447;}else{reg_ip=401;}
}
code[401]=function(){
/*+401:MOV*//*8*/{let dst=(reg_sp-248)>>2;let src=(reg_sp-268)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+402:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+412:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-248)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+413:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-144)>>2];
/*+414:CALL*/regs.push(415);reg_ip=135;
}
code[415]=function(){
/*+415:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+416:NOTME*/reg_this=regs.pop();
/*+417:LEA*/memint32[(reg_sp-88)>>2]=reg_sp-136
/*+418:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+419:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-152)>>2];
/*+420:CALL*/regs.push(421);reg_ip=102;
}
code[421]=function(){
/*+421:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+422:NOTME*/reg_this=regs.pop();
/*+423:MOV*/{let addr=reg_sp-112;mem8.copyWithin(reg_sp-240,addr,addr+24);}
/*+424:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+425:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-148)>>2]
/*+426:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-152)>>2];
/*+427:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+428:CALL*/regs.push(429);reg_ip=57;
}
code[429]=function(){
/*+429:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-144,addr,addr+24);}
/*+430:NOTME*/reg_this=regs.pop();
/*+431:MOV*/{let addr=reg_sp-144;mem8.copyWithin(reg_sp-184,addr,addr+24);}
/*+432:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-420
/*+433:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+434:LEA*/memint32[(reg_sp-140)>>2]=reg_sp-184
/*+435:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-140)>>2];
/*+436:CALL*/regs.push(437);reg_ip=210;
}
code[437]=function(){
/*+437:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+438:MOV*//*8*/{let dst=(reg_sp-160)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+439:FLDC*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+440:FLS*/memint32[(reg_sp-144)>>2]=GetFloat(reg_sp-160) <GetFloat(reg_sp-152)
/*+441:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+450:NE*/memint32[(reg_sp-140)>>2]=memint32[(memint32[(reg_sp-152)>>2])>>2]!=memint32[(reg_sp-144)>>2]
/*+451:ILDC*/memint32[(reg_sp-132)>>2]=+4
/*+452:ADD*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-132)>>2]
/*+453:FLS*/memint32[(reg_sp-128)>>2]=GetFloat(memint32[(reg_sp-136)>>2]) <GetFloat(reg_sp-248)
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
/*+462:MOV*/{let addr=memint32[(reg_sp-144)>>2];mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+4);}
/*+463:ILDC*/memint32[(reg_sp-148)>>2]=+12
/*+464:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+465:MOV*/{let addr=reg_sp-240;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+466:ILDC*/memint32[(reg_sp-148)>>2]=+4
/*+467:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+468:MOV*/{let addr=reg_sp-248;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+8);}
/*+469:ILDC*/memint32[(reg_sp-148)>>2]=+36
/*+470:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+471:ILDC*/memint32[(reg_sp-140)>>2]=+4
/*+472:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-456)>>2]+memint32[(reg_sp-140)>>2]
/*+473:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-192)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+474:IAM*/regs.push(reg_this);reg_this=reg_sp-444;
/*+475:CALL*/regs.push(476);reg_ip=135;
}
code[476]=function(){
/*+476:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-136,addr,addr+24);}
/*+477:NOTME*/reg_this=regs.pop();
/*+478:LEA*/memint32[(reg_sp-88)>>2]=reg_sp-136
/*+479:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-88)>>2];
/*+480:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-144)>>2];
/*+481:CALL*/regs.push(482);reg_ip=102;
}
code[482]=function(){
/*+482:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+483:NOTME*/reg_this=regs.pop();
/*+484:LEA*/memint32[(reg_sp-60)>>2]=reg_sp-112
/*+485:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-60)>>2];
/*+486:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+487:CALL*/regs.push(488);reg_ip=57;
}
code[488]=function(){
/*+488:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+489:NOTME*/reg_this=regs.pop();
/*+490:IAM*/regs.push(reg_this);reg_this=reg_sp-84;
/*+491:CALL*/regs.push(492);reg_ip=17;
}
code[492]=function(){
/*+492:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-56,addr,addr+24);}
/*+493:NOTME*/reg_this=regs.pop();
/*+494:MOV*/{let addr=reg_sp-56;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+495:JMPZ*/if(memint32[(reg_sp-260)>>2]==0){reg_ip=505;}else{reg_ip=496;}
}
code[496]=function(){
/*+496:ILDC*/memint32[(reg_sp-148)>>2]=+36
/*+497:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+498:ILDC*/memint32[(reg_sp-140)>>2]=+36
/*+499:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-140)>>2]
/*+500:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-144)>>2];
/*+501:CALL*/regs.push(502);reg_ip=90;
}
code[502]=function(){
/*+502:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+503:NOTME*/reg_this=regs.pop();
/*+504:MOV*/{let addr=reg_sp-112;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);};reg_ip=505;
}
code[505]=function(){
/*+505:ILDC*/memint32[(reg_sp-148)>>2]=+60
/*+506:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+507:ILDC*/memint32[(reg_sp-140)>>2]=+8
/*+508:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-152)>>2]+memint32[(reg_sp-140)>>2]
/*+509:MOV*/{let addr=reg_sp-192;mem8.copyWithin(memint32[(reg_sp-144)>>2],addr,addr+8);}
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
/*+522:MOV*/{let addr=memint32[(reg_sp-112)>>2];mem8.copyWithin(reg_sp-24,addr,addr+8);}
/*+523:MOV*/{let addr=memint32[(reg_sp-128)>>2];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+524:NCALL*/SC_atan2();
/*+525:MOV*//*8*/{let dst=(reg_sp-104)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+526:MOV*/{let addr=reg_sp-104;mem8.copyWithin(memint32[(reg_sp-144)>>2],addr,addr+8);}
/*+527:ILDC*/memint32[(reg_sp-148)>>2]=+60
/*+528:ADD*/memint32[(reg_sp-152)>>2]=memint32[(reg_sp-464)>>2]+memint32[(reg_sp-148)>>2]
/*+529:ILDC*/memint32[(reg_sp-140)>>2]=+16
/*+530:ADD*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-152)>>2]+memint32[(reg_sp-140)>>2]
/*+531:FLDC*/{let addr=(memint32[(reg_sp-144)>>2])>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+540:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-128)>>2];
/*+541:CALL*/regs.push(542);reg_ip=57;
}
code[542]=function(){
/*+542:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+543:NOTME*/reg_this=regs.pop();
/*+544:MOV*/{let addr=reg_sp-112;mem8.copyWithin(reg_sp-232,addr,addr+24);}
/*+545:ILDC*/memint32[(reg_sp-124)>>2]=+28
/*+546:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-124)>>2]
/*+547:ILDC*/memint32[(reg_sp-116)>>2]=+52
/*+548:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-116)>>2]
/*+549:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-120)>>2];
/*+550:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-128)>>2];
/*+551:CALL*/regs.push(552);reg_ip=168;
}
code[552]=function(){
/*+552:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-112,addr,addr+24);}
/*+553:MOV*/{let addr=reg_sp-112;mem8.copyWithin(reg_sp-208,addr,addr+24);}
/*+554:ILDC*/memint32[(reg_sp-124)>>2]=+24
/*+555:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-124)>>2]
/*+556:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-128)>>2];
/*+557:LEA*/memint32[(reg_sp-96)>>2]=reg_sp-232
/*+558:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-96)>>2];
/*+559:CALL*/regs.push(560);reg_ip=168;
}
code[560]=function(){
/*+560:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+561:MOV*/{let addr=reg_sp-120;mem8.copyWithin(reg_sp-184,addr,addr+24);}
/*+562:ILDC*/memint32[(reg_sp-124)>>2]=+24
/*+563:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-124)>>2]
/*+564:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-128)>>2];
/*+565:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-208
/*+566:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+567:CALL*/regs.push(568);reg_ip=210;
}
code[568]=function(){
/*+568:MOV*//*8*/{let dst=(reg_sp-120)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+569:FLDC*/{let addr=(reg_sp-108)>>2;cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+570:FDIV*/{let addr=(reg_sp-160)>>2;cvtflt64[0]=GetFloat(reg_sp-108)/GetFloat(reg_sp-120);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+571:LEA*/memint32[(reg_sp-120)>>2]=reg_sp-232
/*+572:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-120)>>2];
/*+573:LEA*/memint32[(reg_sp-116)>>2]=reg_sp-208
/*+574:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-116)>>2];
/*+575:CALL*/regs.push(576);reg_ip=210;
}
code[576]=function(){
/*+576:MOV*//*8*/{let dst=(reg_sp-128)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+577:FMUL*/{let addr=(reg_sp-152)>>2;cvtflt64[0]=GetFloat(reg_sp-128)*GetFloat(reg_sp-160);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+578:FLDC*/{let addr=(reg_sp-128)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+579:FGR*/memint32[(reg_sp-120)>>2]=GetFloat(reg_sp-152) >GetFloat(reg_sp-128)
/*+580:JMPZ*/if(memint32[(reg_sp-120)>>2]==0){reg_ip=653;}else{reg_ip=581;}
}
code[581]=function(){
/*+581:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+582:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+583:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+584:NE*/memint32[(reg_sp-116)>>2]=memint32[(memint32[(reg_sp-128)>>2])>>2]!=memint32[(reg_sp-120)>>2]
/*+585:ILDC*/memint32[(reg_sp-108)>>2]=+4
/*+586:ADD*/memint32[(reg_sp-112)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-108)>>2]
/*+587:FLS*/memint32[(reg_sp-104)>>2]=GetFloat(memint32[(reg_sp-112)>>2]) <GetFloat(reg_sp-152)
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
/*+595:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-184
/*+596:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+597:CALL*/regs.push(598);reg_ip=210;
}
code[598]=function(){
/*+598:MOV*//*8*/{let dst=(reg_sp-120)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+599:FMUL*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=GetFloat(reg_sp-120)*GetFloat(reg_sp-160);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+600:ILDC*/memint32[(reg_sp-124)>>2]=+28
/*+601:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-124)>>2]
/*+602:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-128)>>2];
/*+603:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-184
/*+604:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+605:CALL*/regs.push(606);reg_ip=210;
}
code[606]=function(){
/*+606:MOV*//*8*/{let dst=(reg_sp-120)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+607:FMUL*/{let addr=(reg_sp-136)>>2;cvtflt64[0]=GetFloat(reg_sp-120)*GetFloat(reg_sp-160);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+608:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+609:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+610:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+611:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-236)>>2]+memint32[(reg_sp-116)>>2]
/*+612:MOV*/{let addr=memint32[(reg_sp-120)>>2];mem8.copyWithin(memint32[(reg_sp-128)>>2],addr,addr+4);}
/*+613:ILDC*/memint32[(reg_sp-124)>>2]=+4
/*+614:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+615:MOV*/{let addr=reg_sp-152;mem8.copyWithin(memint32[(reg_sp-128)>>2],addr,addr+8);}
/*+616:ILDC*/memint32[(reg_sp-124)>>2]=+60
/*+617:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+618:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+619:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-136)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+620:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-144)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+621:CALL*/regs.push(622);reg_ip=10;
}
code[622]=function(){
/*+622:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+623:MOV*/{let addr=reg_sp-120;mem8.copyWithin(memint32[(reg_sp-128)>>2],addr,addr+24);}
/*+624:ILDC*/memint32[(reg_sp-124)>>2]=+12
/*+625:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+626:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+627:ADD*/memint32[(reg_sp-120)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-116)>>2]
/*+628:ILDC*/memint32[(reg_sp-108)>>2]=+24
/*+629:ADD*/memint32[(reg_sp-112)>>2]=memint32[(reg_sp-240)>>2]+memint32[(reg_sp-108)>>2]
/*+630:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+631:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-112)>>2];
/*+632:CALL*/regs.push(633);reg_ip=135;
}
code[633]=function(){
/*+633:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-104,addr,addr+24);}
/*+634:NOTME*/reg_this=regs.pop();
/*+635:LEA*/memint32[(reg_sp-56)>>2]=reg_sp-104
/*+636:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-56)>>2];
/*+637:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-120)>>2];
/*+638:CALL*/regs.push(639);reg_ip=102;
}
code[639]=function(){
/*+639:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-80,addr,addr+24);}
/*+640:NOTME*/reg_this=regs.pop();
/*+641:MOV*/{let addr=reg_sp-80;mem8.copyWithin(memint32[(reg_sp-128)>>2],addr,addr+24);}
/*+642:ILDC*/memint32[(reg_sp-124)>>2]=+36
/*+643:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-244)>>2]+memint32[(reg_sp-124)>>2]
/*+644:IAM*/regs.push(reg_this);reg_this=reg_sp-208;
/*+645:CALL*/regs.push(646);reg_ip=17;
}
code[646]=function(){
/*+646:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-120,addr,addr+24);}
/*+647:NOTME*/reg_this=regs.pop();
/*+648:IAM*/regs.push(reg_this);reg_this=reg_sp-120;
/*+649:CALL*/regs.push(650);reg_ip=90;
}
code[650]=function(){
/*+650:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+651:NOTME*/reg_this=regs.pop();
/*+652:MOV*/{let addr=reg_sp-72;mem8.copyWithin(memint32[(reg_sp-128)>>2],addr,addr+24);};reg_ip=653;
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
/*+661:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-116)>>2];
/*+662:CALL*/regs.push(663);reg_ip=57;
}
code[663]=function(){
/*+663:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-100,addr,addr+24);}
/*+664:NOTME*/reg_this=regs.pop();
/*+665:MOV*/{let addr=reg_sp-100;mem8.copyWithin(reg_sp-172,addr,addr+24);}
/*+666:ILDC*/memint32[(reg_sp-112)>>2]=+24
/*+667:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-112)>>2]
/*+668:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+669:LEA*/memint32[(reg_sp-100)>>2]=reg_sp-172
/*+670:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-100)>>2];
/*+671:CALL*/regs.push(672);reg_ip=210;
}
code[672]=function(){
/*+672:MOV*//*8*/{let dst=(reg_sp-108)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+673:MOV*//*8*/{let dst=(reg_sp-148)>>2;let src=(reg_sp-108)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+674:FLDC*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+683:FMUL*/{let addr=(reg_sp-100)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-116)>>2])*GetFloat(memint32[(reg_sp-108)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+684:FMUL*/{let addr=(reg_sp-92)>>2;cvtflt64[0]=GetFloat(reg_sp-148)*GetFloat(reg_sp-148);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+685:FADD*/{let addr=(reg_sp-84)>>2;cvtflt64[0]=GetFloat(reg_sp-100)+GetFloat(reg_sp-92);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+686:LEA*/memint32[(reg_sp-68)>>2]=reg_sp-172
/*+687:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-68)>>2];
/*+688:LEA*/memint32[(reg_sp-64)>>2]=reg_sp-172
/*+689:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-64)>>2];
/*+690:CALL*/regs.push(691);reg_ip=210;
}
code[691]=function(){
/*+691:MOV*//*8*/{let dst=(reg_sp-76)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+692:FSUB*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=GetFloat(reg_sp-84)-GetFloat(reg_sp-76);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:FLDC*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+694:FLS*/memint32[(reg_sp-108)>>2]=GetFloat(reg_sp-140) <GetFloat(reg_sp-116)
/*+695:JMPZ*/if(memint32[(reg_sp-108)>>2]==0){reg_ip=698;}else{reg_ip=696;}
}
code[696]=function(){
/*+696:ADDSP*/reg_sp+=-172;
/*+697:RET*/reg_ip=regs.pop();
}
code[698]=function(){
/*+698:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-140)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+699:NCALL*/SC_sqrt();
/*+700:MOV*//*8*/{let dst=(reg_sp-116)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+701:MOV*//*8*/{let dst=(reg_sp-132)>>2;let src=(reg_sp-116)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+702:FSUB*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=GetFloat(reg_sp-148)-GetFloat(reg_sp-132);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+703:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+704:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+705:ILDC*/memint32[(reg_sp-108)>>2]=+0
/*+706:NE*/memint32[(reg_sp-104)>>2]=memint32[(memint32[(reg_sp-116)>>2])>>2]!=memint32[(reg_sp-108)>>2]
/*+707:ILDC*/memint32[(reg_sp-96)>>2]=+4
/*+708:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-96)>>2]
/*+709:FLS*/memint32[(reg_sp-92)>>2]=GetFloat(memint32[(reg_sp-100)>>2]) <GetFloat(reg_sp-124)
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
/*+716:FSUB*/{let addr=(memint32[(reg_sp-116)>>2])>>2;cvtflt64[0]=GetFloat(reg_sp-148)-GetFloat(reg_sp-132);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+717:ILDC*/memint32[(reg_sp-112)>>2]=+12
/*+718:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+719:ILDC*/memint32[(reg_sp-104)>>2]=+0
/*+720:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-104)>>2]
/*+721:ILDC*/memint32[(reg_sp-96)>>2]=+24
/*+722:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-96)>>2]
/*+723:ILDC*/memint32[(reg_sp-88)>>2]=+4
/*+724:ADD*/memint32[(reg_sp-92)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-88)>>2]
/*+725:MOV*/{let addr=memint32[(reg_sp-92)>>2];mem8.copyWithin(reg_sp-32,addr,addr+8);}
/*+726:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-100)>>2];
/*+727:CALL*/regs.push(728);reg_ip=135;
}
code[728]=function(){
/*+728:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+729:NOTME*/reg_this=regs.pop();
/*+730:LEA*/memint32[(reg_sp-36)>>2]=reg_sp-84
/*+731:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-36)>>2];
/*+732:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-108)>>2];
/*+733:CALL*/regs.push(734);reg_ip=102;
}
code[734]=function(){
/*+734:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-60,addr,addr+24);}
/*+735:NOTME*/reg_this=regs.pop();
/*+736:MOV*/{let addr=reg_sp-60;mem8.copyWithin(memint32[(reg_sp-116)>>2],addr,addr+24);}
/*+737:ILDC*/memint32[(reg_sp-112)>>2]=+36
/*+738:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+739:ILDC*/memint32[(reg_sp-104)>>2]=+12
/*+740:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-104)>>2]
/*+741:ILDC*/memint32[(reg_sp-96)>>2]=+4
/*+742:ADD*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-96)>>2]
/*+743:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-100)>>2];
/*+744:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-108)>>2];
/*+745:CALL*/regs.push(746);reg_ip=57;
}
code[746]=function(){
/*+746:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-92,addr,addr+24);}
/*+747:NOTME*/reg_this=regs.pop();
/*+748:IAM*/regs.push(reg_this);reg_this=reg_sp-92;
/*+749:CALL*/regs.push(750);reg_ip=17;
}
code[750]=function(){
/*+750:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-68,addr,addr+24);}
/*+751:NOTME*/reg_this=regs.pop();
/*+752:MOV*/{let addr=reg_sp-68;mem8.copyWithin(memint32[(reg_sp-116)>>2],addr,addr+24);}
/*+753:ILDC*/memint32[(reg_sp-112)>>2]=+60
/*+754:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+755:ILDC*/memint32[(reg_sp-104)>>2]=+12
/*+756:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-104)>>2]
/*+757:MOV*/{let addr=memint32[(reg_sp-108)>>2];mem8.copyWithin(memint32[(reg_sp-116)>>2],addr,addr+24);}
/*+758:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+759:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-184)>>2]+memint32[(reg_sp-112)>>2]
/*+760:ILDC*/memint32[(reg_sp-104)>>2]=+0
/*+761:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-104)>>2]
/*+762:MOV*/{let addr=memint32[(reg_sp-108)>>2];mem8.copyWithin(memint32[(reg_sp-116)>>2],addr,addr+4);}
/*+763:ADDSP*/reg_sp+=-172;
/*+764:RET*/reg_ip=regs.pop();
}
code[765]=function(){
/*+765:ADDSP*/reg_sp+=+84;
/*+766:ILDC*/memint32[(reg_sp-84)>>2]=+0
/*+767:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+768:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+769:MADD*/memint32[(reg_sp-80)>>2]=(memint32[(reg_sp-80)>>2])+(memint32[(reg_sp-84)>>2])*(memint32[(reg_sp-76)>>2])
/*+770:ILDC*/memint32[(reg_sp-64)>>2]=+16
/*+771:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+772:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+773:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+774:MOV*/{let addr=memint32[(reg_sp-68)>>2];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+775:CALL*/regs.push(776);reg_ip=231;
}
code[776]=function(){
/*+776:MOV*//*8*/{let dst=(reg_sp-60)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+777:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+778:I2F*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=memint32[(reg_sp-52)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+779:FMUL*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=GetFloat(reg_sp-60)*GetFloat(reg_sp-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+780:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+781:I2C*/PutChar(memint32[(reg_sp-80)>>2],memint32[(reg_sp-72)>>2]);
/*+782:ILDC*/memint32[(reg_sp-84)>>2]=+1
/*+783:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+784:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+785:MADD*/memint32[(reg_sp-80)>>2]=(memint32[(reg_sp-80)>>2])+(memint32[(reg_sp-84)>>2])*(memint32[(reg_sp-76)>>2])
/*+786:ILDC*/memint32[(reg_sp-64)>>2]=+8
/*+787:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+788:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+789:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+790:MOV*/{let addr=memint32[(reg_sp-68)>>2];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+791:CALL*/regs.push(792);reg_ip=231;
}
code[792]=function(){
/*+792:MOV*//*8*/{let dst=(reg_sp-60)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+793:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+794:I2F*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=memint32[(reg_sp-52)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+795:FMUL*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=GetFloat(reg_sp-60)*GetFloat(reg_sp-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+796:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+797:I2C*/PutChar(memint32[(reg_sp-80)>>2],memint32[(reg_sp-72)>>2]);
/*+798:ILDC*/memint32[(reg_sp-84)>>2]=+2
/*+799:MOV*//*4*/memint32[(reg_sp-80)>>2]=memint32[(reg_sp-92)>>2];
/*+800:ILDC*/memint32[(reg_sp-76)>>2]=+1
/*+801:MADD*/memint32[(reg_sp-80)>>2]=(memint32[(reg_sp-80)>>2])+(memint32[(reg_sp-84)>>2])*(memint32[(reg_sp-76)>>2])
/*+802:ILDC*/memint32[(reg_sp-64)>>2]=+0
/*+803:ADD*/memint32[(reg_sp-68)>>2]=memint32[(reg_sp-88)>>2]+memint32[(reg_sp-64)>>2]
/*+804:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+805:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+806:MOV*/{let addr=memint32[(reg_sp-68)>>2];mem8.copyWithin(reg_sp-16,addr,addr+8);}
/*+807:CALL*/regs.push(808);reg_ip=231;
}
code[808]=function(){
/*+808:MOV*//*8*/{let dst=(reg_sp-60)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+809:ILDC*/memint32[(reg_sp-52)>>2]=+255
/*+810:I2F*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=memint32[(reg_sp-52)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+811:FMUL*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=GetFloat(reg_sp-60)*GetFloat(reg_sp-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+812:F2I*/memint32[(reg_sp-72)>>2]=GetFloat(reg_sp-40)
/*+813:I2C*/PutChar(memint32[(reg_sp-80)>>2],memint32[(reg_sp-72)>>2]);
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
/*+822:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-124)>>2];
/*+823:CALL*/regs.push(824);reg_ip=57;
}
code[824]=function(){
/*+824:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-108,addr,addr+24);}
/*+825:NOTME*/reg_this=regs.pop();
/*+826:MOV*/{let addr=reg_sp-108;mem8.copyWithin(reg_sp-276,addr,addr+24);}
/*+827:ILDC*/memint32[(reg_sp-120)>>2]=+28
/*+828:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-120)>>2]
/*+829:ILDC*/memint32[(reg_sp-112)>>2]=+4
/*+830:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+831:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+832:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-124)>>2];
/*+833:CALL*/regs.push(834);reg_ip=57;
}
code[834]=function(){
/*+834:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-108,addr,addr+24);}
/*+835:NOTME*/reg_this=regs.pop();
/*+836:MOV*/{let addr=reg_sp-108;mem8.copyWithin(reg_sp-252,addr,addr+24);}
/*+837:ILDC*/memint32[(reg_sp-120)>>2]=+4
/*+838:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-120)>>2]
/*+839:ILDC*/memint32[(reg_sp-112)>>2]=+52
/*+840:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-280)>>2]+memint32[(reg_sp-112)>>2]
/*+841:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+842:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-124)>>2];
/*+843:CALL*/regs.push(844);reg_ip=57;
}
code[844]=function(){
/*+844:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-108,addr,addr+24);}
/*+845:NOTME*/reg_this=regs.pop();
/*+846:MOV*/{let addr=reg_sp-108;mem8.copyWithin(reg_sp-228,addr,addr+24);}
/*+847:LEA*/memint32[(reg_sp-100)>>2]=reg_sp-228
/*+848:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-100)>>2];
/*+849:LEA*/memint32[(reg_sp-96)>>2]=reg_sp-252
/*+850:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-96)>>2];
/*+851:CALL*/regs.push(852);reg_ip=168;
}
code[852]=function(){
/*+852:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-124,addr,addr+24);}
/*+853:MOV*/{let addr=reg_sp-124;mem8.copyWithin(reg_sp-204,addr,addr+24);}
/*+854:ILDC*/memint32[(reg_sp-120)>>2]=+24
/*+855:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-120)>>2]
/*+856:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-124)>>2];
/*+857:LEA*/memint32[(reg_sp-92)>>2]=reg_sp-276
/*+858:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+859:CALL*/regs.push(860);reg_ip=168;
}
code[860]=function(){
/*+860:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-116,addr,addr+24);}
/*+861:MOV*/{let addr=reg_sp-116;mem8.copyWithin(reg_sp-180,addr,addr+24);}
/*+862:ILDC*/memint32[(reg_sp-120)>>2]=+24
/*+863:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-120)>>2]
/*+864:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-124)>>2];
/*+865:LEA*/memint32[(reg_sp-108)>>2]=reg_sp-204
/*+866:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-108)>>2];
/*+867:CALL*/regs.push(868);reg_ip=210;
}
code[868]=function(){
/*+868:MOV*//*8*/{let dst=(reg_sp-116)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+869:FLDC*/{let addr=(reg_sp-104)>>2;cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+870:FDIV*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=GetFloat(reg_sp-104)/GetFloat(reg_sp-116);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+871:LEA*/memint32[(reg_sp-116)>>2]=reg_sp-276
/*+872:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+873:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-204
/*+874:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+875:CALL*/regs.push(876);reg_ip=210;
}
code[876]=function(){
/*+876:MOV*//*8*/{let dst=(reg_sp-124)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+877:FMUL*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-124)*GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+878:FLDC*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+879:FGR*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-148) >GetFloat(reg_sp-124)
/*+880:JMPZ*/if(memint32[(reg_sp-116)>>2]==0){reg_ip=963;}else{reg_ip=881;}
}
code[881]=function(){
/*+881:ILDC*/memint32[(reg_sp-120)>>2]=+0
/*+882:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+883:ILDC*/memint32[(reg_sp-116)>>2]=+0
/*+884:NE*/memint32[(reg_sp-112)>>2]=memint32[(memint32[(reg_sp-124)>>2])>>2]!=memint32[(reg_sp-116)>>2]
/*+885:ILDC*/memint32[(reg_sp-104)>>2]=+4
/*+886:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-104)>>2]
/*+887:FLS*/memint32[(reg_sp-100)>>2]=GetFloat(memint32[(reg_sp-108)>>2]) <GetFloat(reg_sp-148)
/*+888:LAND*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-112)>>2]&&memint32[(reg_sp-100)>>2]
/*+889:JMPZ*/if(memint32[(reg_sp-96)>>2]==0){reg_ip=892;}else{reg_ip=890;}
}
code[890]=function(){
/*+890:ADDSP*/reg_sp+=-276;
/*+891:RET*/reg_ip=regs.pop();
}
code[892]=function(){
/*+892:LEA*/memint32[(reg_sp-116)>>2]=reg_sp-228
/*+893:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+894:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-180
/*+895:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+896:CALL*/regs.push(897);reg_ip=210;
}
code[897]=function(){
/*+897:MOV*//*8*/{let dst=(reg_sp-124)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+898:FMUL*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=GetFloat(reg_sp-124)*GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+899:FLDC*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+900:FLS*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-140) <GetFloat(reg_sp-124)
/*+901:FLDC*/{let addr=(reg_sp-112)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+902:FGR*/memint32[(reg_sp-104)>>2]=GetFloat(reg_sp-140) >GetFloat(reg_sp-112)
/*+903:LOR*/memint32[(reg_sp-100)>>2]=memint32[(reg_sp-116)>>2]||memint32[(reg_sp-104)>>2]
/*+904:JMPZ*/if(memint32[(reg_sp-100)>>2]==0){reg_ip=907;}else{reg_ip=905;}
}
code[905]=function(){
/*+905:ADDSP*/reg_sp+=-276;
/*+906:RET*/reg_ip=regs.pop();
}
code[907]=function(){
/*+907:LEA*/memint32[(reg_sp-116)>>2]=reg_sp-252
/*+908:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-116)>>2];
/*+909:LEA*/memint32[(reg_sp-112)>>2]=reg_sp-180
/*+910:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-112)>>2];
/*+911:CALL*/regs.push(912);reg_ip=210;
}
code[912]=function(){
/*+912:MOV*//*8*/{let dst=(reg_sp-124)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+913:FMUL*/{let addr=(reg_sp-132)>>2;cvtflt64[0]=GetFloat(reg_sp-124)*GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+914:FLDC*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+915:FLS*/memint32[(reg_sp-116)>>2]=GetFloat(reg_sp-132) <GetFloat(reg_sp-124)
/*+916:FLDC*/{let addr=(reg_sp-112)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+926:MOV*/{let addr=memint32[(reg_sp-116)>>2];mem8.copyWithin(memint32[(reg_sp-124)>>2],addr,addr+4);}
/*+927:ILDC*/memint32[(reg_sp-120)>>2]=+4
/*+928:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+929:MOV*/{let addr=reg_sp-148;mem8.copyWithin(memint32[(reg_sp-124)>>2],addr,addr+8);}
/*+930:ILDC*/memint32[(reg_sp-120)>>2]=+60
/*+931:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+932:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+933:MOV*//*8*/{let dst=(reg_sp-40)>>2;let src=(reg_sp-132)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+934:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-140)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+935:CALL*/regs.push(936);reg_ip=10;
}
code[936]=function(){
/*+936:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-116,addr,addr+24);}
/*+937:MOV*/{let addr=reg_sp-116;mem8.copyWithin(memint32[(reg_sp-124)>>2],addr,addr+24);}
/*+938:ILDC*/memint32[(reg_sp-120)>>2]=+12
/*+939:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+940:ILDC*/memint32[(reg_sp-112)>>2]=+0
/*+941:ADD*/memint32[(reg_sp-116)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-112)>>2]
/*+942:ILDC*/memint32[(reg_sp-104)>>2]=+24
/*+943:ADD*/memint32[(reg_sp-108)>>2]=memint32[(reg_sp-284)>>2]+memint32[(reg_sp-104)>>2]
/*+944:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-148)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+945:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-108)>>2];
/*+946:CALL*/regs.push(947);reg_ip=135;
}
code[947]=function(){
/*+947:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-100,addr,addr+24);}
/*+948:NOTME*/reg_this=regs.pop();
/*+949:LEA*/memint32[(reg_sp-52)>>2]=reg_sp-100
/*+950:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+951:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-116)>>2];
/*+952:CALL*/regs.push(953);reg_ip=102;
}
code[953]=function(){
/*+953:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-76,addr,addr+24);}
/*+954:NOTME*/reg_this=regs.pop();
/*+955:MOV*/{let addr=reg_sp-76;mem8.copyWithin(memint32[(reg_sp-124)>>2],addr,addr+24);}
/*+956:ILDC*/memint32[(reg_sp-120)>>2]=+36
/*+957:ADD*/memint32[(reg_sp-124)>>2]=memint32[(reg_sp-288)>>2]+memint32[(reg_sp-120)>>2]
/*+958:IAM*/regs.push(reg_this);reg_this=reg_sp-204;
/*+959:CALL*/regs.push(960);reg_ip=17;
}
code[960]=function(){
/*+960:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-116,addr,addr+24);}
/*+961:NOTME*/reg_this=regs.pop();
/*+962:MOV*/{let addr=reg_sp-116;mem8.copyWithin(memint32[(reg_sp-124)>>2],addr,addr+24);};reg_ip=963;
}
code[963]=function(){
/*+963:ADDSP*/reg_sp+=-276;
/*+964:RET*/reg_ip=regs.pop();
}
code[965]=function(){
/*+965:ADDSP*/reg_sp+=+16;
/*+966:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+967:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+968:LEA*/memint32[(reg_sp-16)>>2]=+0
/*+969:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+970:CALL*/regs.push(971);reg_ip=655;
}
code[971]=function(){
/*+971:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+972:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+973:LEA*/memint32[(reg_sp-16)>>2]=+36
/*+974:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+975:CALL*/regs.push(976);reg_ip=655;
}
code[976]=function(){
/*+976:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+977:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+978:LEA*/memint32[(reg_sp-16)>>2]=+72
/*+979:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+980:CALL*/regs.push(981);reg_ip=655;
}
code[981]=function(){
/*+981:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-24)>>2];
/*+982:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-20)>>2];
/*+983:LEA*/memint32[(reg_sp-16)>>2]=+108
/*+984:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-16)>>2];
/*+985:CALL*/regs.push(986);reg_ip=534;
}
code[986]=function(){
/*+986:ADDSP*/reg_sp+=-16;
/*+987:RET*/reg_ip=regs.pop();
}
code[988]=function(){
/*+988:ADDSP*/reg_sp+=+188;
/*+989:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+990:FLS*/memint32[(reg_sp-180)>>2]=GetFloat(reg_sp-220) <GetFloat(reg_sp-188)
/*+991:JMPZ*/if(memint32[(reg_sp-180)>>2]==0){reg_ip=995;}else{reg_ip=992;}
}
code[992]=function(){
/*+992:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=-0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+993:FMUL*/{let addr=(reg_sp-220)>>2;cvtflt64[0]=GetFloat(reg_sp-220)*GetFloat(reg_sp-188);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+994:MOV*//*8*/{let dst=(reg_sp-180)>>2;let src=(reg_sp-220)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=995;
}
code[995]=function(){
/*+995:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+996:FSUB*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=GetFloat(reg_sp-188)-GetFloat(reg_sp-220);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+997:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+998:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-180)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+999:NCALL*/SC_pow();
/*+1000:MOV*//*8*/{let dst=(reg_sp-172)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1001:MOV*//*8*/{let dst=(reg_sp-220)>>2;let src=(reg_sp-172)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1002:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1003:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1004:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1005:CALL*/regs.push(1006);reg_ip=10;
}
code[1006]=function(){
/*+1006:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-188,addr,addr+24);}
/*+1007:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-220)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1008:IAM*/regs.push(reg_this);reg_this=reg_sp-188;
/*+1009:CALL*/regs.push(1010);reg_ip=135;
}
code[1010]=function(){
/*+1010:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-164,addr,addr+24);}
/*+1011:NOTME*/reg_this=regs.pop();
/*+1012:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.900000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1013:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1014:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1015:CALL*/regs.push(1016);reg_ip=10;
}
code[1016]=function(){
/*+1016:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1017:FLDC*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1018:FSUB*/{let addr=(reg_sp-108)>>2;cvtflt64[0]=GetFloat(reg_sp-116)-GetFloat(reg_sp-220);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1019:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-108)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1020:IAM*/regs.push(reg_this);reg_this=reg_sp-140;
/*+1021:CALL*/regs.push(1022);reg_ip=135;
}
code[1022]=function(){
/*+1022:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-100,addr,addr+24);}
/*+1023:NOTME*/reg_this=regs.pop();
/*+1024:LEA*/memint32[(reg_sp-52)>>2]=reg_sp-100
/*+1025:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+1026:IAM*/regs.push(reg_this);reg_this=reg_sp-164;
/*+1027:CALL*/regs.push(1028);reg_ip=102;
}
code[1028]=function(){
/*+1028:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-76,addr,addr+24);}
/*+1029:NOTME*/reg_this=regs.pop();
/*+1030:MOV*/{let addr=reg_sp-76;mem8.copyWithin(reg_sp-212,addr,addr+24);}
/*+1031:ADDSP*/reg_sp+=-188;
/*+1032:RET*/reg_ip=regs.pop();
}
code[1033]=function(){
/*+1033:ADDSP*/reg_sp+=+200;
/*+1034:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-228)>>2];
/*+1035:CALL*/regs.push(1036);reg_ip=90;
}
code[1036]=function(){
/*+1036:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-176,addr,addr+24);}
/*+1037:NOTME*/reg_this=regs.pop();
/*+1038:LEA*/memint32[(reg_sp-144)>>2]=reg_sp-176
/*+1039:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-144)>>2];
/*+1040:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-232)>>2];
/*+1041:CALL*/regs.push(1042);reg_ip=210;
}
code[1042]=function(){
/*+1042:MOV*//*8*/{let dst=(reg_sp-152)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1043:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-152)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1044:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-232)>>2];
/*+1045:CALL*/regs.push(1046);reg_ip=135;
}
code[1046]=function(){
/*+1046:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1047:NOTME*/reg_this=regs.pop();
/*+1048:FLDC*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1049:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1050:IAM*/regs.push(reg_this);reg_this=reg_sp-140;
/*+1051:CALL*/regs.push(1052);reg_ip=135;
}
code[1052]=function(){
/*+1052:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-108,addr,addr+24);}
/*+1053:NOTME*/reg_this=regs.pop();
/*+1054:LEA*/memint32[(reg_sp-60)>>2]=reg_sp-108
/*+1055:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-60)>>2];
/*+1056:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-228)>>2];
/*+1057:CALL*/regs.push(1058);reg_ip=102;
}
code[1058]=function(){
/*+1058:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+1059:NOTME*/reg_this=regs.pop();
/*+1060:IAM*/regs.push(reg_this);reg_this=reg_sp-84;
/*+1061:CALL*/regs.push(1062);reg_ip=17;
}
code[1062]=function(){
/*+1062:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-56,addr,addr+24);}
/*+1063:NOTME*/reg_this=regs.pop();
/*+1064:MOV*/{let addr=reg_sp-56;mem8.copyWithin(reg_sp-224,addr,addr+24);}
/*+1065:ADDSP*/reg_sp+=-200;
/*+1066:RET*/reg_ip=regs.pop();
}
code[1067]=function(){
/*+1067:ADDSP*/reg_sp+=+144;
/*+1068:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1069:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1070:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1071:CALL*/regs.push(1072);reg_ip=10;
}
code[1072]=function(){
/*+1072:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1073:MOV*/{let addr=reg_sp-140;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+1074:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1075:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1076:ILDC*/memint32[(reg_sp-132)>>2]=+1
/*+1077:EQ*/memint32[(reg_sp-128)>>2]=memint32[(memint32[(reg_sp-140)>>2])>>2]==memint32[(reg_sp-132)>>2]
/*+1078:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1105;}else{reg_ip=1079;}
}
code[1079]=function(){
/*+1079:ILDC*/memint32[(reg_sp-132)>>2]=+60
/*+1080:ADD*/memint32[(reg_sp-136)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-132)>>2]
/*+1081:ILDC*/memint32[(reg_sp-124)>>2]=+0
/*+1082:ADD*/memint32[(reg_sp-128)>>2]=memint32[(reg_sp-136)>>2]+memint32[(reg_sp-124)>>2]
/*+1083:ILDC*/memint32[(reg_sp-120)>>2]=+1000
/*+1084:I2F*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=memint32[(reg_sp-120)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1085:FADD*/{let addr=(reg_sp-108)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-128)>>2])+GetFloat(reg_sp-116);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1086:F2I*/memint32[(reg_sp-140)>>2]=GetFloat(reg_sp-108)
/*+1087:ILDC*/memint32[(reg_sp-92)>>2]=+60
/*+1088:ADD*/memint32[(reg_sp-96)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-92)>>2]
/*+1089:ILDC*/memint32[(reg_sp-84)>>2]=+8
/*+1090:ADD*/memint32[(reg_sp-88)>>2]=memint32[(reg_sp-96)>>2]+memint32[(reg_sp-84)>>2]
/*+1091:ILDC*/memint32[(reg_sp-80)>>2]=+1000
/*+1092:I2F*/{let addr=(reg_sp-76)>>2;cvtflt64[0]=memint32[(reg_sp-80)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1093:FSUB*/{let addr=(reg_sp-68)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-88)>>2])-GetFloat(reg_sp-76);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1094:F2I*/memint32[(reg_sp-100)>>2]=GetFloat(reg_sp-68)
/*+1095:XOR*/memint32[(reg_sp-60)>>2]=memint32[(reg_sp-140)>>2]^memint32[(reg_sp-100)>>2]
/*+1096:ILDC*/memint32[(reg_sp-56)>>2]=+1
/*+1097:AND*/memint32[(reg_sp-144)>>2]=memint32[(reg_sp-60)>>2]&memint32[(reg_sp-56)>>2]
/*+1098:I2F*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=memint32[(reg_sp-144)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1099:I2F*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=memint32[(reg_sp-144)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1100:I2F*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=memint32[(reg_sp-144)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1101:CALL*/regs.push(1102);reg_ip=10;
}
code[1102]=function(){
/*+1102:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1103:MOV*/{let addr=reg_sp-140;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+1104:JMP*/reg_ip=1160;
}
code[1105]=function(){
/*+1105:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1106:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1107:ILDC*/memint32[(reg_sp-132)>>2]=+2
/*+1108:EQ*/memint32[(reg_sp-128)>>2]=memint32[(memint32[(reg_sp-140)>>2])>>2]==memint32[(reg_sp-132)>>2]
/*+1109:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1117;}else{reg_ip=1110;}
}
code[1110]=function(){
/*+1110:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1111:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1112:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1113:CALL*/regs.push(1114);reg_ip=10;
}
code[1114]=function(){
/*+1114:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1115:MOV*/{let addr=reg_sp-140;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+1116:JMP*/reg_ip=1160;
}
code[1117]=function(){
/*+1117:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1118:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1119:ILDC*/memint32[(reg_sp-132)>>2]=+3
/*+1120:EQ*/memint32[(reg_sp-128)>>2]=memint32[(memint32[(reg_sp-140)>>2])>>2]==memint32[(reg_sp-132)>>2]
/*+1121:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1129;}else{reg_ip=1122;}
}
code[1122]=function(){
/*+1122:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1123:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1124:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1125:CALL*/regs.push(1126);reg_ip=10;
}
code[1126]=function(){
/*+1126:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1127:MOV*/{let addr=reg_sp-140;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+1128:JMP*/reg_ip=1160;
}
code[1129]=function(){
/*+1129:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1130:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1131:ILDC*/memint32[(reg_sp-132)>>2]=+4
/*+1132:EQ*/memint32[(reg_sp-128)>>2]=memint32[(memint32[(reg_sp-140)>>2])>>2]==memint32[(reg_sp-132)>>2]
/*+1133:JMPZ*/if(memint32[(reg_sp-128)>>2]==0){reg_ip=1141;}else{reg_ip=1134;}
}
code[1134]=function(){
/*+1134:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1135:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1136:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1137:CALL*/regs.push(1138);reg_ip=10;
}
code[1138]=function(){
/*+1138:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1139:MOV*/{let addr=reg_sp-140;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);}
/*+1140:JMP*/reg_ip=1160;
}
code[1141]=function(){
/*+1141:ILDC*/memint32[(reg_sp-136)>>2]=+0
/*+1142:ADD*/memint32[(reg_sp-140)>>2]=memint32[(reg_sp-148)>>2]+memint32[(reg_sp-136)>>2]
/*+1143:ILDC*/memint32[(reg_sp-132)>>2]=+5
/*+1144:EQ*/memint32[(reg_sp-128)>>2]=memint32[(memint32[(reg_sp-140)>>2])>>2]==memint32[(reg_sp-132)>>2]
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
/*+1154:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1155:MOV*/{let addr=memint32[(reg_sp-116)>>2];mem8.copyWithin(reg_sp-40,addr,addr+8);}
/*+1156:MOV*/{let addr=memint32[(reg_sp-132)>>2];mem8.copyWithin(reg_sp-32,addr,addr+8);}
/*+1157:CALL*/regs.push(1158);reg_ip=10;
}
code[1158]=function(){
/*+1158:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-108,addr,addr+24);}
/*+1159:MOV*/{let addr=reg_sp-108;mem8.copyWithin(memint32[(reg_sp-152)>>2],addr,addr+24);};reg_ip=1160;
}
code[1160]=function(){
/*+1160:FLDC*/{let addr=(memint32[(reg_sp-156)>>2])>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1161:ADDSP*/reg_sp+=-144;
/*+1162:RET*/reg_ip=regs.pop();
}
code[1163]=function(){
/*+1163:ADDSP*/reg_sp+=+392;
/*+1164:ILDC*/memint32[(reg_sp-160)>>2]=+36
/*+1165:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1166:LEA*/memint32[(reg_sp-148)>>2]=+244
/*+1167:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-148)>>2];
/*+1168:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1169:CALL*/regs.push(1170);reg_ip=210;
}
code[1170]=function(){
/*+1170:MOV*//*8*/{let dst=(reg_sp-156)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1171:FLDC*/{let addr=(reg_sp-144)>>2;cvtflt64[0]=+1.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1172:FMUL*/{let addr=(reg_sp-392)>>2;cvtflt64[0]=GetFloat(reg_sp-156)*GetFloat(reg_sp-144);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1173:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1174:I2F*/{let addr=(reg_sp-160)>>2;cvtflt64[0]=memint32[(reg_sp-164)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1175:FLS*/memint32[(reg_sp-152)>>2]=GetFloat(reg_sp-392) <GetFloat(reg_sp-160)
/*+1176:JMPZ*/if(memint32[(reg_sp-152)>>2]==0){reg_ip=1178;}else{reg_ip=1177;}
}
code[1177]=function(){
/*+1177:FLDC*/{let addr=(reg_sp-392)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=1178;
}
code[1178]=function(){
/*+1178:ILDC*/memint32[(reg_sp-160)>>2]=+24
/*+1179:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-404)>>2]+memint32[(reg_sp-160)>>2]
/*+1180:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-164)>>2];
/*+1181:IAM*/regs.push(reg_this);reg_this=+244;
/*+1182:CALL*/regs.push(1183);reg_ip=57;
}
code[1183]=function(){
/*+1183:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-156,addr,addr+24);}
/*+1184:NOTME*/reg_this=regs.pop();
/*+1185:IAM*/regs.push(reg_this);reg_this=reg_sp-156;
/*+1186:CALL*/regs.push(1187);reg_ip=17;
}
code[1187]=function(){
/*+1187:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-132,addr,addr+24);}
/*+1188:NOTME*/reg_this=regs.pop();
/*+1189:IAM*/regs.push(reg_this);reg_this=reg_sp-132;
/*+1190:CALL*/regs.push(1191);reg_ip=90;
}
code[1191]=function(){
/*+1191:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+1192:NOTME*/reg_this=regs.pop();
/*+1193:MOV*/{let addr=reg_sp-84;mem8.copyWithin(reg_sp-384,addr,addr+24);}
/*+1194:ILDC*/memint32[(reg_sp-160)>>2]=+4
/*+1195:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-408)>>2]+memint32[(reg_sp-160)>>2]
/*+1196:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-164)>>2];
/*+1197:LEA*/memint32[(reg_sp-148)>>2]=+244
/*+1198:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-148)>>2];
/*+1199:CALL*/regs.push(1200);reg_ip=210;
}
code[1200]=function(){
/*+1200:MOV*//*8*/{let dst=(reg_sp-156)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1201:MOV*//*8*/{let dst=(reg_sp-360)>>2;let src=(reg_sp-156)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1202:MOV*//*8*/{let dst=(reg_sp-352)>>2;let src=(reg_sp-392)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1203:FLDC*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1204:ILDC*/memint32[(reg_sp-336)>>2]=+0
/*+1205:MOV*/{let addr=memint32[(reg_sp-400)>>2];mem8.copyWithin(reg_sp-252,addr,addr+24);}
/*+1206:ILDC*/memint32[(reg_sp-160)>>2]=+12
/*+1207:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1208:FLDC*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=+0.002000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1209:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.002000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1210:IAM*/regs.push(reg_this);reg_this=reg_sp-252;
/*+1211:CALL*/regs.push(1212);reg_ip=135;
}
code[1212]=function(){
/*+1212:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-148,addr,addr+24);}
/*+1213:NOTME*/reg_this=regs.pop();
/*+1214:LEA*/memint32[(reg_sp-100)>>2]=reg_sp-148
/*+1215:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-100)>>2];
/*+1216:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-164)>>2];
/*+1217:CALL*/regs.push(1218);reg_ip=102;
}
code[1218]=function(){
/*+1218:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-124,addr,addr+24);}
/*+1219:NOTME*/reg_this=regs.pop();
/*+1220:MOV*/{let addr=reg_sp-124;mem8.copyWithin(reg_sp-228,addr,addr+24);}
/*+1221:MOV*/{let addr=reg_sp-252;mem8.copyWithin(reg_sp-204,addr,addr+24);}
/*+1222:LEA*/memint32[(reg_sp-164)>>2]=reg_sp-336
/*+1223:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-164)>>2];
/*+1224:LEA*/memint32[(reg_sp-160)>>2]=reg_sp-228
/*+1225:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-160)>>2];
/*+1226:CALL*/regs.push(1227);reg_ip=965;
}
code[1227]=function(){
/*+1227:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1228:NE*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-336)>>2]!=memint32[(reg_sp-164)>>2]
/*+1229:JMPZ*/if(memint32[(reg_sp-160)>>2]==0){reg_ip=1231;}else{reg_ip=1230;}
}
code[1230]=function(){
/*+1230:FLDC*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=1231;
}
code[1231]=function(){
/*+1231:ILDC*/memint32[(reg_sp-160)>>2]=+36
/*+1232:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-396)>>2]+memint32[(reg_sp-160)>>2]
/*+1233:ILDC*/memint32[(reg_sp-152)>>2]=+8
/*+1234:ADD*/memint32[(reg_sp-156)>>2]=memint32[(reg_sp-164)>>2]+memint32[(reg_sp-152)>>2]
/*+1235:FLDC*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=+0.125000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1236:FMUL*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=GetFloat(reg_sp-148)*GetFloat(memint32[(reg_sp-156)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1237:FLDC*/{let addr=(reg_sp-132)>>2;cvtflt64[0]=+0.375000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1238:FADD*/{let addr=(reg_sp-124)>>2;cvtflt64[0]=GetFloat(reg_sp-132)+GetFloat(reg_sp-140);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1239:FMUL*/{let addr=(reg_sp-116)>>2;cvtflt64[0]=GetFloat(reg_sp-352)*GetFloat(reg_sp-344);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1240:FLDC*/{let addr=(reg_sp-108)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1241:FMUL*/{let addr=(reg_sp-100)>>2;cvtflt64[0]=GetFloat(reg_sp-116)*GetFloat(reg_sp-108);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1242:FADD*/{let addr=(reg_sp-92)>>2;cvtflt64[0]=GetFloat(reg_sp-124)+GetFloat(reg_sp-100);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1243:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-92)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1244:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-412)>>2];
/*+1245:CALL*/regs.push(1246);reg_ip=135;
}
code[1246]=function(){
/*+1246:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+1247:NOTME*/reg_this=regs.pop();
/*+1248:MOV*/{let addr=reg_sp-84;mem8.copyWithin(memint32[(reg_sp-412)>>2],addr,addr+24);}
/*+1249:ILDC*/memint32[(reg_sp-160)>>2]=+28
/*+1250:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-408)>>2]+memint32[(reg_sp-160)>>2]
/*+1251:MOV*/{let addr=memint32[(reg_sp-164)>>2];mem8.copyWithin(reg_sp-180,addr,addr+8);}
/*+1252:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+120.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1253:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-360)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1254:NCALL*/SC_pow();
/*+1255:MOV*//*8*/{let dst=(reg_sp-164)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1256:FMUL*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=GetFloat(reg_sp-164)*GetFloat(reg_sp-344);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1257:FMUL*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-156)*GetFloat(reg_sp-180);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1258:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1259:FMUL*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=GetFloat(reg_sp-148)*GetFloat(reg_sp-140);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1260:FLDC*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1261:FSUB*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=GetFloat(reg_sp-164)-GetFloat(reg_sp-172);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1262:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-156)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1263:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-412)>>2];
/*+1264:CALL*/regs.push(1265);reg_ip=135;
}
code[1265]=function(){
/*+1265:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-148,addr,addr+24);}
/*+1266:NOTME*/reg_this=regs.pop();
/*+1267:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1268:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+4.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1269:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1270:CALL*/regs.push(1271);reg_ip=10;
}
code[1271]=function(){
/*+1271:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-124,addr,addr+24);}
/*+1272:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-172)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1273:IAM*/regs.push(reg_this);reg_this=reg_sp-124;
/*+1274:CALL*/regs.push(1275);reg_ip=135;
}
code[1275]=function(){
/*+1275:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-100,addr,addr+24);}
/*+1276:NOTME*/reg_this=regs.pop();
/*+1277:LEA*/memint32[(reg_sp-52)>>2]=reg_sp-100
/*+1278:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-52)>>2];
/*+1279:IAM*/regs.push(reg_this);reg_this=reg_sp-148;
/*+1280:CALL*/regs.push(1281);reg_ip=102;
}
code[1281]=function(){
/*+1281:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-76,addr,addr+24);}
/*+1282:NOTME*/reg_this=regs.pop();
/*+1283:MOV*/{let addr=reg_sp-76;mem8.copyWithin(memint32[(reg_sp-412)>>2],addr,addr+24);}
/*+1284:ADDSP*/reg_sp+=-392;
/*+1285:RET*/reg_ip=regs.pop();
}
code[1286]=function(){
/*+1286:ADDSP*/reg_sp+=+176;
/*+1287:ILDC*/memint32[(reg_sp-172)>>2]=+24
/*+1288:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-172)>>2]
/*+1289:ILDC*/memint32[(reg_sp-164)>>2]=+16
/*+1290:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-176)>>2]+memint32[(reg_sp-164)>>2]
/*+1291:MOV*/{let addr=memint32[(reg_sp-168)>>2];mem8.copyWithin(reg_sp-32,addr,addr+8);}
/*+1292:CALL*/regs.push(1293);reg_ip=988;
}
code[1293]=function(){
/*+1293:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-160,addr,addr+24);}
/*+1294:MOV*/{let addr=reg_sp-160;mem8.copyWithin(memint32[(reg_sp-184)>>2],addr,addr+24);}
/*+1295:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1296:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-172)>>2]
/*+1297:ILDC*/memint32[(memint32[(reg_sp-176)>>2])>>2]=+0
/*+1298:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1299:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1300:ILDC*/memint32[(memint32[(reg_sp-176)>>2])>>2]=+0
/*+1301:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-188)>>2];
/*+1302:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-180)>>2];
/*+1303:CALL*/regs.push(1304);reg_ip=965;
}
code[1304]=function(){
/*+1304:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1305:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-172)>>2]
/*+1306:ILDC*/memint32[(reg_sp-168)>>2]=+0
/*+1307:NE*/memint32[(reg_sp-164)>>2]=memint32[(memint32[(reg_sp-176)>>2])>>2]!=memint32[(reg_sp-168)>>2]
/*+1308:JMPZ*/if(memint32[(reg_sp-164)>>2]==0){reg_ip=1369;}else{reg_ip=1309;}
}
code[1309]=function(){
/*+1309:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1310:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1311:ILDC*/memint32[(reg_sp-164)>>2]=+0
/*+1312:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-164)>>2]
/*+1313:MOV*/{let addr=memint32[(reg_sp-168)>>2];mem8.copyWithin(memint32[(reg_sp-176)>>2],addr,addr+4);}
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
/*+1323:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-152,addr,addr+24);}
/*+1324:MOV*/{let addr=reg_sp-152;mem8.copyWithin(memint32[(reg_sp-176)>>2],addr,addr+24);}
/*+1325:ILDC*/memint32[(reg_sp-172)>>2]=+28
/*+1326:ADD*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-192)>>2]+memint32[(reg_sp-172)>>2]
/*+1327:ILDC*/memint32[(reg_sp-164)>>2]=+24
/*+1328:ADD*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-180)>>2]+memint32[(reg_sp-164)>>2]
/*+1329:ILDC*/memint32[(reg_sp-156)>>2]=+36
/*+1330:ADD*/memint32[(reg_sp-160)>>2]=memint32[(reg_sp-188)>>2]+memint32[(reg_sp-156)>>2]
/*+1331:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-160)>>2];
/*+1332:CALL*/regs.push(1333);reg_ip=90;
}
code[1333]=function(){
/*+1333:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-128,addr,addr+24);}
/*+1334:NOTME*/reg_this=regs.pop();
/*+1335:LEA*/memint32[(reg_sp-96)>>2]=reg_sp-128
/*+1336:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-96)>>2];
/*+1337:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-168)>>2];
/*+1338:CALL*/regs.push(1339);reg_ip=210;
}
code[1339]=function(){
/*+1339:MOV*//*8*/{let dst=(reg_sp-104)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1340:FLDC*/{let addr=(reg_sp-92)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1341:FSUB*/{let addr=(reg_sp-84)>>2;cvtflt64[0]=GetFloat(reg_sp-92)-GetFloat(reg_sp-104);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1342:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1343:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1344:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-84)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1345:CALL*/regs.push(1346);reg_ip=231;
}
code[1346]=function(){
/*+1346:MOV*//*8*/{let dst=(reg_sp-76)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1347:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1348:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-76)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1349:NCALL*/SC_pow();
/*+1350:MOV*//*8*/{let dst=(reg_sp-68)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1351:FLDC*/{let addr=(reg_sp-60)>>2;cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1352:FMUL*/{let addr=(reg_sp-52)>>2;cvtflt64[0]=GetFloat(reg_sp-60)*GetFloat(reg_sp-68);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1353:FLDC*/{let addr=(reg_sp-44)>>2;cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1354:FADD*/{let addr=(memint32[(reg_sp-176)>>2])>>2;cvtflt64[0]=GetFloat(reg_sp-44)+GetFloat(reg_sp-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1355:FLDC*/{let addr=(memint32[(reg_sp-196)>>2])>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+1364:LEA*/memint32[(reg_sp-176)>>2]=+244
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
/*+1371:FLDC*/{let addr=(memint32[(reg_sp-176)>>2])>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=1372;
}
code[1372]=function(){
/*+1372:ADDSP*/reg_sp+=-176;
/*+1373:RET*/reg_ip=regs.pop();
}
code[1374]=function(){
/*+1374:ADDSP*/reg_sp+=+68;
/*+1375:MOV*/{let addr=memint32[(reg_sp-72)>>2];mem8.copyWithin(reg_sp-68,addr,addr+8);}
/*+1376:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-84)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1377:NCALL*/SC_cos();
/*+1378:MOV*//*8*/{let dst=(reg_sp-60)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1379:FMUL*/{let addr=(reg_sp-52)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-72)>>2])*GetFloat(reg_sp-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1380:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-84)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1381:NCALL*/SC_sin();
/*+1382:MOV*//*8*/{let dst=(reg_sp-44)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1383:FMUL*/{let addr=(reg_sp-36)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-76)>>2])*GetFloat(reg_sp-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1384:FADD*/{let addr=(memint32[(reg_sp-72)>>2])>>2;cvtflt64[0]=GetFloat(reg_sp-52)+GetFloat(reg_sp-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1385:FNEG*/{let addr=(reg_sp-60)>>2;cvtflt64[0]=-GetFloat(reg_sp-68);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1386:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-84)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1387:NCALL*/SC_sin();
/*+1388:MOV*//*8*/{let dst=(reg_sp-52)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1389:FMUL*/{let addr=(reg_sp-44)>>2;cvtflt64[0]=GetFloat(reg_sp-60)*GetFloat(reg_sp-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1390:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-84)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1391:NCALL*/SC_cos();
/*+1392:MOV*//*8*/{let dst=(reg_sp-36)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1393:FMUL*/{let addr=(reg_sp-28)>>2;cvtflt64[0]=GetFloat(memint32[(reg_sp-76)>>2])*GetFloat(reg_sp-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1394:FADD*/{let addr=(memint32[(reg_sp-76)>>2])>>2;cvtflt64[0]=GetFloat(reg_sp-44)+GetFloat(reg_sp-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1395:ADDSP*/reg_sp+=-68;
/*+1396:RET*/reg_ip=regs.pop();
}
code[1397]=function(){
/*+1397:ADDSP*/reg_sp+=+48;
/*+1398:ILDC*/memint32[(reg_sp-44)>>2]=+0
/*+1399:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1400:ILDC*/memint32[(reg_sp-36)>>2]=+8
/*+1401:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1402:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1403:FMUL*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=GetFloat(reg_sp-32)*GetFloat(reg_sp-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1404:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-24)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1405:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-40)>>2];
/*+1406:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-48)>>2];
/*+1407:CALL*/regs.push(1408);reg_ip=1374;
}
code[1408]=function(){
/*+1408:ILDC*/memint32[(reg_sp-44)>>2]=+8
/*+1409:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1410:ILDC*/memint32[(reg_sp-36)>>2]=+16
/*+1411:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1412:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1413:FMUL*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=GetFloat(reg_sp-32)*GetFloat(reg_sp-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1414:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-24)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1415:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-40)>>2];
/*+1416:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-48)>>2];
/*+1417:CALL*/regs.push(1418);reg_ip=1374;
}
code[1418]=function(){
/*+1418:ILDC*/memint32[(reg_sp-44)>>2]=+16
/*+1419:ADD*/memint32[(reg_sp-48)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-44)>>2]
/*+1420:ILDC*/memint32[(reg_sp-36)>>2]=+0
/*+1421:ADD*/memint32[(reg_sp-40)>>2]=memint32[(reg_sp-52)>>2]+memint32[(reg_sp-36)>>2]
/*+1422:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1423:FMUL*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=GetFloat(reg_sp-32)*GetFloat(reg_sp-60);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1424:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-24)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
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
/*+1432:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-876
/*+1433:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-172)>>2];
/*+1434:LEA*/memint32[(reg_sp-168)>>2]=reg_sp-1020
/*+1435:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-168)>>2];
/*+1436:LEA*/memint32[(reg_sp-164)>>2]=reg_sp-984
/*+1437:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1438:LEA*/memint32[(reg_sp-160)>>2]=reg_sp-900
/*+1439:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-160)>>2];
/*+1440:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-1048)>>2];
/*+1441:CALL*/regs.push(1442);reg_ip=1286;
}
code[1442]=function(){
/*+1442:MOV*//*8*/{let dst=(reg_sp-868)>>2;let src=(reg_sp-992)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1443:MOV*/{let addr=reg_sp-900;mem8.copyWithin(reg_sp-860,addr,addr+24);}
/*+1444:FMUL*/{let addr=(reg_sp-836)>>2;cvtflt64[0]=GetFloat(reg_sp-992)*GetFloat(reg_sp-876);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
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
/*+1454:FLDC*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=+0.001000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1455:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.001000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1456:IAM*/regs.push(reg_this);reg_this=reg_sp-1016;
/*+1457:CALL*/regs.push(1458);reg_ip=135;
}
code[1458]=function(){
/*+1458:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-164,addr,addr+24);}
/*+1459:NOTME*/reg_this=regs.pop();
/*+1460:LEA*/memint32[(reg_sp-116)>>2]=reg_sp-164
/*+1461:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-116)>>2];
/*+1462:IAM*/regs.push(reg_this);reg_this=reg_sp-972;
/*+1463:CALL*/regs.push(1464);reg_ip=102;
}
code[1464]=function(){
/*+1464:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+1465:NOTME*/reg_this=regs.pop();
/*+1466:MOV*/{let addr=reg_sp-140;mem8.copyWithin(reg_sp-340,addr,addr+24);}
/*+1467:MOV*/{let addr=reg_sp-1016;mem8.copyWithin(reg_sp-316,addr,addr+24);}
/*+1468:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-184
/*+1469:MOV*//*4*/memint32[(reg_sp-20)>>2]=memint32[(reg_sp-172)>>2];
/*+1470:LEA*/memint32[(reg_sp-168)>>2]=reg_sp-1020
/*+1471:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-168)>>2];
/*+1472:LEA*/memint32[(reg_sp-164)>>2]=reg_sp-292
/*+1473:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-164)>>2];
/*+1474:LEA*/memint32[(reg_sp-160)>>2]=reg_sp-208
/*+1475:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-160)>>2];
/*+1476:LEA*/memint32[(reg_sp-156)>>2]=reg_sp-340
/*+1477:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-156)>>2];
/*+1478:CALL*/regs.push(1479);reg_ip=1286;
}
code[1479]=function(){
/*+1479:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-860
/*+1480:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1481:MADD*/memint32[(reg_sp-172)>>2]=(memint32[(reg_sp-172)>>2])+(memint32[(reg_sp-344)>>2])*(memint32[(reg_sp-168)>>2])
/*+1482:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1483:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1484:MOV*/{let addr=reg_sp-208;mem8.copyWithin(memint32[(reg_sp-164)>>2],addr,addr+24);}
/*+1485:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-860
/*+1486:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1487:MADD*/memint32[(reg_sp-172)>>2]=(memint32[(reg_sp-172)>>2])+(memint32[(reg_sp-344)>>2])*(memint32[(reg_sp-168)>>2])
/*+1488:ILDC*/memint32[(reg_sp-160)>>2]=+24
/*+1489:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1490:MOV*/{let addr=reg_sp-992;mem8.copyWithin(memint32[(reg_sp-164)>>2],addr,addr+8);}
/*+1491:MOV*//*4*/memint32[(reg_sp-348)>>2]=memint32[(reg_sp-344)>>2];
/*+1492:MOV*/{let addr=reg_sp-292;mem8.copyWithin(reg_sp-984,addr,addr+84);}
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
/*+1498:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-860
/*+1499:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1500:MADD*/memint32[(reg_sp-172)>>2]=(memint32[(reg_sp-172)>>2])+(memint32[(reg_sp-348)>>2])*(memint32[(reg_sp-168)>>2])
/*+1501:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1502:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1503:MOV*/{let addr=memint32[(reg_sp-164)>>2];mem8.copyWithin(reg_sp-900,addr,addr+24);}
/*+1504:ILDC*/memint32[(reg_sp-172)>>2]=+1
/*+1505:SUB*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-348)>>2]-memint32[(reg_sp-172)>>2];reg_ip=1506;
}
code[1506]=function(){
/*+1506:ILDC*/memint32[(reg_sp-172)>>2]=+0
/*+1507:GE*/memint32[(reg_sp-168)>>2]=memint32[(reg_sp-176)>>2]>=memint32[(reg_sp-172)>>2]
/*+1508:JMPZ*/if(memint32[(reg_sp-168)>>2]==0){reg_ip=1546;}else{reg_ip=1509;}
}
code[1509]=function(){
/*+1509:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-860
/*+1510:ILDC*/memint32[(reg_sp-168)>>2]=+32
/*+1511:MADD*/memint32[(reg_sp-172)>>2]=(memint32[(reg_sp-172)>>2])+(memint32[(reg_sp-176)>>2])*(memint32[(reg_sp-168)>>2])
/*+1512:ILDC*/memint32[(reg_sp-160)>>2]=+0
/*+1513:ADD*/memint32[(reg_sp-164)>>2]=memint32[(reg_sp-172)>>2]+memint32[(reg_sp-160)>>2]
/*+1514:LEA*/memint32[(reg_sp-156)>>2]=reg_sp-860
/*+1515:ILDC*/memint32[(reg_sp-152)>>2]=+32
/*+1516:MADD*/memint32[(reg_sp-156)>>2]=(memint32[(reg_sp-156)>>2])+(memint32[(reg_sp-176)>>2])*(memint32[(reg_sp-152)>>2])
/*+1517:ILDC*/memint32[(reg_sp-144)>>2]=+24
/*+1518:ADD*/memint32[(reg_sp-148)>>2]=memint32[(reg_sp-156)>>2]+memint32[(reg_sp-144)>>2]
/*+1519:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1520:FSUB*/{let addr=(reg_sp-132)>>2;cvtflt64[0]=GetFloat(reg_sp-140)-GetFloat(memint32[(reg_sp-148)>>2]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1521:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-132)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1522:IAM*/regs.push(reg_this);reg_this=memint32[(reg_sp-164)>>2];
/*+1523:CALL*/regs.push(1524);reg_ip=135;
}
code[1524]=function(){
/*+1524:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-124,addr,addr+24);}
/*+1525:NOTME*/reg_this=regs.pop();
/*+1526:LEA*/memint32[(reg_sp-100)>>2]=reg_sp-860
/*+1527:ILDC*/memint32[(reg_sp-96)>>2]=+32
/*+1528:MADD*/memint32[(reg_sp-100)>>2]=(memint32[(reg_sp-100)>>2])+(memint32[(reg_sp-176)>>2])*(memint32[(reg_sp-96)>>2])
/*+1529:ILDC*/memint32[(reg_sp-88)>>2]=+24
/*+1530:ADD*/memint32[(reg_sp-92)>>2]=memint32[(reg_sp-100)>>2]+memint32[(reg_sp-88)>>2]
/*+1531:MOV*/{let addr=memint32[(reg_sp-92)>>2];mem8.copyWithin(reg_sp-32,addr,addr+8);}
/*+1532:IAM*/regs.push(reg_this);reg_this=reg_sp-900;
/*+1533:CALL*/regs.push(1534);reg_ip=135;
}
code[1534]=function(){
/*+1534:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-84,addr,addr+24);}
/*+1535:NOTME*/reg_this=regs.pop();
/*+1536:LEA*/memint32[(reg_sp-36)>>2]=reg_sp-84
/*+1537:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-36)>>2];
/*+1538:IAM*/regs.push(reg_this);reg_this=reg_sp-124;
/*+1539:CALL*/regs.push(1540);reg_ip=102;
}
code[1540]=function(){
/*+1540:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-60,addr,addr+24);}
/*+1541:NOTME*/reg_this=regs.pop();
/*+1542:MOV*/{let addr=reg_sp-60;mem8.copyWithin(reg_sp-900,addr,addr+24);}
/*+1543:MOV*//*4*/memint32[(reg_sp-172)>>2]=memint32[(reg_sp-176)>>2];
/*+1544:DEC*/memint32[(reg_sp-176)>>2]=memint32[(reg_sp-176)>>2]-1
/*+1545:JMP*/reg_ip=1506;
}
code[1546]=function(){
/*+1546:MOV*/{let addr=reg_sp-900;mem8.copyWithin(reg_sp-1044,addr,addr+24);}
/*+1547:ADDSP*/reg_sp+=-1020;
/*+1548:RET*/reg_ip=regs.pop();
}
code[1549]=function(){
/*+1549:ADDSP*/reg_sp+=+840;
/*+1550:NCALL*/SC_Time();
/*+1551:MOV*//*8*/{let dst=(reg_sp-380)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1552:MOV*//*8*/{let dst=(reg_sp-832)>>2;let src=(reg_sp-380)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1553:ILDC*/memint32[(reg_sp-824)>>2]=+1
/*+1554:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1555:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1556:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1557:CALL*/regs.push(1558);reg_ip=10;
}
code[1558]=function(){
/*+1558:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1559:MOV*/{let addr=reg_sp-380;mem8.copyWithin(reg_sp-820,addr,addr+24);}
/*+1560:ILDC*/memint32[(reg_sp-796)>>2]=+0
/*+1561:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1562:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1563:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1564:CALL*/regs.push(1565);reg_ip=10;
}
code[1565]=function(){
/*+1565:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1566:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1567:CALL*/regs.push(1568);reg_ip=17;
}
code[1568]=function(){
/*+1568:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-356,addr,addr+24);}
/*+1569:NOTME*/reg_this=regs.pop();
/*+1570:MOV*/{let addr=reg_sp-356;mem8.copyWithin(+244,addr,addr+24);}
/*+1571:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1572:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1573:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1574:CALL*/regs.push(1575);reg_ip=10;
}
code[1575]=function(){
/*+1575:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1576:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+4,addr,addr+24);}
/*+1577:FLDC*/{let addr=(+28)>>2;cvtflt64[0]=+0.600000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1578:ILDC*/memint32[(+0)>>2]=+3
/*+1579:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1580:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1581:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1582:CALL*/regs.push(1583);reg_ip=10;
}
code[1583]=function(){
/*+1583:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1584:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+40,addr,addr+24);}
/*+1585:FLDC*/{let addr=(+64)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1586:ILDC*/memint32[(+36)>>2]=+2
/*+1587:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1588:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=-0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1589:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1590:CALL*/regs.push(1591);reg_ip=10;
}
code[1591]=function(){
/*+1591:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1592:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+76,addr,addr+24);}
/*+1593:FLDC*/{let addr=(+100)>>2;cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1594:ILDC*/memint32[(+72)>>2]=+4
/*+1595:ILDC*/memint32[(+108)>>2]=+1
/*+1596:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=-0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1597:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1598:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1599:CALL*/regs.push(1600);reg_ip=10;
}
code[1600]=function(){
/*+1600:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1601:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+112,addr,addr+24);}
/*+1602:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1603:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1604:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1605:CALL*/regs.push(1606);reg_ip=10;
}
code[1606]=function(){
/*+1606:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1607:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+136,addr,addr+24);}
/*+1608:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1609:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1610:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1611:CALL*/regs.push(1612);reg_ip=10;
}
code[1612]=function(){
/*+1612:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1613:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+160,addr,addr+24);}
/*+1614:ILDC*/memint32[(+184)>>2]=+4
/*+1615:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1616:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=-0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1617:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1618:CALL*/regs.push(1619);reg_ip=10;
}
code[1619]=function(){
/*+1619:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1620:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+188,addr,addr+24);}
/*+1621:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1622:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=-0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1623:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1624:CALL*/regs.push(1625);reg_ip=10;
}
code[1625]=function(){
/*+1625:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1626:MOV*/{let addr=reg_sp-380;mem8.copyWithin(+212,addr,addr+24);}
/*+1627:FLDC*/{let addr=(+236)>>2;cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1628:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1629:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1630:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1631:CALL*/regs.push(1632);reg_ip=10;
}
code[1632]=function(){
/*+1632:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1633:MOV*/{let addr=reg_sp-380;mem8.copyWithin(reg_sp-792,addr,addr+24);}
/*+1634:ILDC*/memint32[(reg_sp-768)>>2]=+0
/*+1635:NCALL*/SC_Time();
/*+1636:MOV*//*8*/{let dst=(reg_sp-380)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1637:MOV*//*8*/{let dst=(reg_sp-764)>>2;let src=(reg_sp-380)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1638:ILDC*/memint32[(reg_sp-756)>>2]=+0
/*+1639:LEA*/memint32[(reg_sp-380)>>2]=reg_sp-744
/*+1640:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1641:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-748
/*+1642:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1643:LEA*/memint32[(reg_sp-372)>>2]=reg_sp-752
/*+1644:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1645:NCALL*/SC_GetMouseState();
/*+1646:MOV*//*4*/memint32[(reg_sp-732)>>2]=memint32[(reg_sp-744)>>2];
/*+1647:MOV*//*4*/memint32[(reg_sp-740)>>2]=memint32[(reg_sp-752)>>2];
/*+1648:MOV*//*4*/memint32[(reg_sp-736)>>2]=memint32[(reg_sp-748)>>2];
/*+1649:ILDC*/memint32[(reg_sp-728)>>2]=+0
/*+1650:ILDC*/memint32[(reg_sp-724)>>2]=+0
/*+1651:ILDC*/memint32[(reg_sp-720)>>2]=+0
/*+1652:ILDC*/memint32[(reg_sp-716)>>2]=+0
/*+1653:ILDC*/memint32[(reg_sp-712)>>2]=+0
/*+1654:ILDC*/memint32[(reg_sp-708)>>2]=+0
/*+1655:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1656:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1657:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1658:CALL*/regs.push(1659);reg_ip=10;
}
code[1659]=function(){
/*+1659:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1660:MOV*/{let addr=reg_sp-380;mem8.copyWithin(reg_sp-704,addr,addr+24);}
/*+1661:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1662:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1663:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1664:CALL*/regs.push(1665);reg_ip=10;
}
code[1665]=function(){
/*+1665:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1666:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1667:CALL*/regs.push(1668);reg_ip=17;
}
code[1668]=function(){
/*+1668:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-356,addr,addr+24);}
/*+1669:NOTME*/reg_this=regs.pop();
/*+1670:IAM*/regs.push(reg_this);reg_this=reg_sp-356;
/*+1671:CALL*/regs.push(1672);reg_ip=90;
}
code[1672]=function(){
/*+1672:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-308,addr,addr+24);}
/*+1673:NOTME*/reg_this=regs.pop();
/*+1674:MOV*/{let addr=reg_sp-308;mem8.copyWithin(reg_sp-680,addr,addr+24);};reg_ip=1675;
}
code[1675]=function(){
/*+1675:MOV*//*4*/memint32[(reg_sp-732)>>2]=memint32[(reg_sp-744)>>2];
/*+1676:MOV*//*4*/memint32[(reg_sp-740)>>2]=memint32[(reg_sp-752)>>2];
/*+1677:MOV*//*4*/memint32[(reg_sp-736)>>2]=memint32[(reg_sp-748)>>2];
/*+1678:LEA*/memint32[(reg_sp-380)>>2]=reg_sp-744
/*+1679:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1680:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-748
/*+1681:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1682:LEA*/memint32[(reg_sp-372)>>2]=reg_sp-752
/*+1683:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1684:NCALL*/SC_GetMouseState();
/*+1685:JMPZ*/if(memint32[(reg_sp-744)>>2]==0){reg_ip=1780;}else{reg_ip=1686;}
}
code[1686]=function(){
/*+1686:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-792
/*+1687:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1688:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1689:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1690:CALL*/regs.push(1691);reg_ip=168;
}
code[1691]=function(){
/*+1691:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1692:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1693:CALL*/regs.push(1694);reg_ip=17;
}
code[1694]=function(){
/*+1694:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1695:NOTME*/reg_this=regs.pop();
/*+1696:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-656,addr,addr+24);}
/*+1697:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-656
/*+1698:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1699:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1700:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1701:CALL*/regs.push(1702);reg_ip=168;
}
code[1702]=function(){
/*+1702:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1703:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1704:CALL*/regs.push(1705);reg_ip=17;
}
code[1705]=function(){
/*+1705:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1706:NOTME*/reg_this=regs.pop();
/*+1707:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-632,addr,addr+24);}
/*+1708:ILDC*/memint32[(reg_sp-756)>>2]=+1
/*+1709:SUB*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-752)>>2]-memint32[(reg_sp-740)>>2]
/*+1710:I2F*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=memint32[(reg_sp-380)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1711:IAM*/regs.push(reg_this);reg_this=reg_sp-656;
/*+1712:CALL*/regs.push(1713);reg_ip=135;
}
code[1713]=function(){
/*+1713:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+1714:NOTME*/reg_this=regs.pop();
/*+1715:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1716:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1717:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1718:CALL*/regs.push(1719);reg_ip=135;
}
code[1719]=function(){
/*+1719:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-344,addr,addr+24);}
/*+1720:NOTME*/reg_this=regs.pop();
/*+1721:LEA*/memint32[(reg_sp-320)>>2]=reg_sp-344
/*+1722:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-320)>>2];
/*+1723:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1724:CALL*/regs.push(1725);reg_ip=75;
}
code[1725]=function(){
/*+1725:NOTME*/reg_this=regs.pop();
/*+1726:SUB*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-748)>>2]-memint32[(reg_sp-736)>>2]
/*+1727:I2F*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=memint32[(reg_sp-380)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1728:IAM*/regs.push(reg_this);reg_this=reg_sp-632;
/*+1729:CALL*/regs.push(1730);reg_ip=135;
}
code[1730]=function(){
/*+1730:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+1731:NOTME*/reg_this=regs.pop();
/*+1732:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1733:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1734:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1735:CALL*/regs.push(1736);reg_ip=135;
}
code[1736]=function(){
/*+1736:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-344,addr,addr+24);}
/*+1737:NOTME*/reg_this=regs.pop();
/*+1738:LEA*/memint32[(reg_sp-320)>>2]=reg_sp-344
/*+1739:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-320)>>2];
/*+1740:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1741:CALL*/regs.push(1742);reg_ip=75;
}
code[1742]=function(){
/*+1742:NOTME*/reg_this=regs.pop();
/*+1743:SUB*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-752)>>2]-memint32[(reg_sp-740)>>2]
/*+1744:I2F*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=memint32[(reg_sp-380)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1745:IAM*/regs.push(reg_this);reg_this=reg_sp-656;
/*+1746:CALL*/regs.push(1747);reg_ip=135;
}
code[1747]=function(){
/*+1747:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+1748:NOTME*/reg_this=regs.pop();
/*+1749:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1750:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1751:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1752:CALL*/regs.push(1753);reg_ip=135;
}
code[1753]=function(){
/*+1753:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-344,addr,addr+24);}
/*+1754:NOTME*/reg_this=regs.pop();
/*+1755:LEA*/memint32[(reg_sp-320)>>2]=reg_sp-344
/*+1756:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-320)>>2];
/*+1757:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1758:CALL*/regs.push(1759);reg_ip=120;
}
code[1759]=function(){
/*+1759:NOTME*/reg_this=regs.pop();
/*+1760:SUB*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-748)>>2]-memint32[(reg_sp-736)>>2]
/*+1761:I2F*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=memint32[(reg_sp-380)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1762:IAM*/regs.push(reg_this);reg_this=reg_sp-632;
/*+1763:CALL*/regs.push(1764);reg_ip=135;
}
code[1764]=function(){
/*+1764:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+1765:NOTME*/reg_this=regs.pop();
/*+1766:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1767:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1768:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1769:CALL*/regs.push(1770);reg_ip=135;
}
code[1770]=function(){
/*+1770:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-344,addr,addr+24);}
/*+1771:NOTME*/reg_this=regs.pop();
/*+1772:LEA*/memint32[(reg_sp-320)>>2]=reg_sp-344
/*+1773:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-320)>>2];
/*+1774:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1775:CALL*/regs.push(1776);reg_ip=120;
}
code[1776]=function(){
/*+1776:NOTME*/reg_this=regs.pop();
/*+1777:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1778:CALL*/regs.push(1779);reg_ip=26;
}
code[1779]=function(){
/*+1779:NOTME*/reg_this=regs.pop();;reg_ip=1780;
}
code[1780]=function(){
/*+1780:ILDC*/memint32[(reg_sp-8)>>2]=+119
/*+1781:NCALL*/SC_KeyPressed();
/*+1782:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1783:MOV*//*4*/memint32[(reg_sp-712)>>2]=memint32[(reg_sp-380)>>2];
/*+1784:ILDC*/memint32[(reg_sp-8)>>2]=+115
/*+1785:NCALL*/SC_KeyPressed();
/*+1786:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1787:MOV*//*4*/memint32[(reg_sp-708)>>2]=memint32[(reg_sp-380)>>2];
/*+1788:ILDC*/memint32[(reg_sp-8)>>2]=+97
/*+1789:NCALL*/SC_KeyPressed();
/*+1790:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1791:MOV*//*4*/memint32[(reg_sp-720)>>2]=memint32[(reg_sp-380)>>2];
/*+1792:ILDC*/memint32[(reg_sp-8)>>2]=+100
/*+1793:NCALL*/SC_KeyPressed();
/*+1794:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1795:MOV*//*4*/memint32[(reg_sp-716)>>2]=memint32[(reg_sp-380)>>2];
/*+1796:ILDC*/memint32[(reg_sp-8)>>2]=+113
/*+1797:NCALL*/SC_KeyPressed();
/*+1798:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1799:MOV*//*4*/memint32[(reg_sp-724)>>2]=memint32[(reg_sp-380)>>2];
/*+1800:ILDC*/memint32[(reg_sp-8)>>2]=+101
/*+1801:NCALL*/SC_KeyPressed();
/*+1802:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1803:MOV*//*4*/memint32[(reg_sp-728)>>2]=memint32[(reg_sp-380)>>2];
/*+1804:LOR*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-712)>>2]||memint32[(reg_sp-708)>>2]
/*+1805:LOR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-380)>>2]||memint32[(reg_sp-720)>>2]
/*+1806:LOR*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-376)>>2]||memint32[(reg_sp-716)>>2]
/*+1807:LOR*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-372)>>2]||memint32[(reg_sp-724)>>2]
/*+1808:LOR*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-368)>>2]||memint32[(reg_sp-728)>>2]
/*+1809:JMPZ*/if(memint32[(reg_sp-364)>>2]==0){reg_ip=1811;}else{reg_ip=1810;}
}
code[1810]=function(){
/*+1810:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1811;
}
code[1811]=function(){
/*+1811:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-792
/*+1812:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1813:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1814:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1815:CALL*/regs.push(1816);reg_ip=168;
}
code[1816]=function(){
/*+1816:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1817:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1818:CALL*/regs.push(1819);reg_ip=17;
}
code[1819]=function(){
/*+1819:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1820:NOTME*/reg_this=regs.pop();
/*+1821:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-608,addr,addr+24);}
/*+1822:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-608
/*+1823:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1824:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1825:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1826:CALL*/regs.push(1827);reg_ip=168;
}
code[1827]=function(){
/*+1827:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1828:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1829:CALL*/regs.push(1830);reg_ip=17;
}
code[1830]=function(){
/*+1830:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1831:NOTME*/reg_this=regs.pop();
/*+1832:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-584,addr,addr+24);}
/*+1833:JMPZ*/if(memint32[(reg_sp-712)>>2]==0){reg_ip=1846;}else{reg_ip=1834;}
}
code[1834]=function(){
/*+1834:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1835:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1836:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1837:CALL*/regs.push(1838);reg_ip=135;
}
code[1838]=function(){
/*+1838:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1839:NOTME*/reg_this=regs.pop();
/*+1840:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1841:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1842:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1843:CALL*/regs.push(1844);reg_ip=120;
}
code[1844]=function(){
/*+1844:NOTME*/reg_this=regs.pop();
/*+1845:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1846;
}
code[1846]=function(){
/*+1846:JMPZ*/if(memint32[(reg_sp-708)>>2]==0){reg_ip=1859;}else{reg_ip=1847;}
}
code[1847]=function(){
/*+1847:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1848:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1849:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1850:CALL*/regs.push(1851);reg_ip=135;
}
code[1851]=function(){
/*+1851:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1852:NOTME*/reg_this=regs.pop();
/*+1853:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1854:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1855:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1856:CALL*/regs.push(1857);reg_ip=75;
}
code[1857]=function(){
/*+1857:NOTME*/reg_this=regs.pop();
/*+1858:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1859;
}
code[1859]=function(){
/*+1859:JMPZ*/if(memint32[(reg_sp-720)>>2]==0){reg_ip=1872;}else{reg_ip=1860;}
}
code[1860]=function(){
/*+1860:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1861:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1862:IAM*/regs.push(reg_this);reg_this=reg_sp-608;
/*+1863:CALL*/regs.push(1864);reg_ip=135;
}
code[1864]=function(){
/*+1864:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1865:NOTME*/reg_this=regs.pop();
/*+1866:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1867:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1868:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1869:CALL*/regs.push(1870);reg_ip=75;
}
code[1870]=function(){
/*+1870:NOTME*/reg_this=regs.pop();
/*+1871:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1872;
}
code[1872]=function(){
/*+1872:JMPZ*/if(memint32[(reg_sp-716)>>2]==0){reg_ip=1885;}else{reg_ip=1873;}
}
code[1873]=function(){
/*+1873:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1874:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1875:IAM*/regs.push(reg_this);reg_this=reg_sp-608;
/*+1876:CALL*/regs.push(1877);reg_ip=135;
}
code[1877]=function(){
/*+1877:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1878:NOTME*/reg_this=regs.pop();
/*+1879:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1880:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1881:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1882:CALL*/regs.push(1883);reg_ip=120;
}
code[1883]=function(){
/*+1883:NOTME*/reg_this=regs.pop();
/*+1884:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1885;
}
code[1885]=function(){
/*+1885:JMPZ*/if(memint32[(reg_sp-724)>>2]==0){reg_ip=1898;}else{reg_ip=1886;}
}
code[1886]=function(){
/*+1886:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1887:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1888:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1889:CALL*/regs.push(1890);reg_ip=135;
}
code[1890]=function(){
/*+1890:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1891:NOTME*/reg_this=regs.pop();
/*+1892:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1893:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1894:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1895:CALL*/regs.push(1896);reg_ip=75;
}
code[1896]=function(){
/*+1896:NOTME*/reg_this=regs.pop();
/*+1897:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1898;
}
code[1898]=function(){
/*+1898:JMPZ*/if(memint32[(reg_sp-728)>>2]==0){reg_ip=1911;}else{reg_ip=1899;}
}
code[1899]=function(){
/*+1899:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1900:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1901:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1902:CALL*/regs.push(1903);reg_ip=135;
}
code[1903]=function(){
/*+1903:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-372,addr,addr+24);}
/*+1904:NOTME*/reg_this=regs.pop();
/*+1905:LEA*/memint32[(reg_sp-348)>>2]=reg_sp-372
/*+1906:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-348)>>2];
/*+1907:IAM*/regs.push(reg_this);reg_this=reg_sp-704;
/*+1908:CALL*/regs.push(1909);reg_ip=120;
}
code[1909]=function(){
/*+1909:NOTME*/reg_this=regs.pop();
/*+1910:ILDC*/memint32[(reg_sp-756)>>2]=+1;reg_ip=1911;
}
code[1911]=function(){
/*+1911:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-792
/*+1912:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1913:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1914:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1915:CALL*/regs.push(1916);reg_ip=168;
}
code[1916]=function(){
/*+1916:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1917:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1918:CALL*/regs.push(1919);reg_ip=17;
}
code[1919]=function(){
/*+1919:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1920:NOTME*/reg_this=regs.pop();
/*+1921:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-560,addr,addr+24);}
/*+1922:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-560
/*+1923:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1924:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-680
/*+1925:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1926:CALL*/regs.push(1927);reg_ip=168;
}
code[1927]=function(){
/*+1927:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1928:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1929:CALL*/regs.push(1930);reg_ip=17;
}
code[1930]=function(){
/*+1930:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-348,addr,addr+24);}
/*+1931:NOTME*/reg_this=regs.pop();
/*+1932:MOV*/{let addr=reg_sp-348;mem8.copyWithin(reg_sp-536,addr,addr+24);}
/*+1933:MOV*/{let addr=reg_sp-704;mem8.copyWithin(reg_sp-512,addr,addr+24);}
/*+1934:JMPZ*/if(memint32[(reg_sp-756)>>2]==0){reg_ip=2248;}else{reg_ip=1935;}
}
code[1935]=function(){
/*+1935:ILDC*/memint32[(reg_sp-464)>>2]=+40
/*+1936:ILDC*/memint32[(reg_sp-460)>>2]=+30
/*+1937:ILDC*/memint32[(reg_sp-456)>>2]=+0;reg_ip=1938;
}
code[1938]=function(){
/*+1938:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2] <memint32[(reg_sp-460)>>2]
/*+1939:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2240;}else{reg_ip=1940;}
}
code[1940]=function(){
/*+1940:ILDC*/memint32[(reg_sp-452)>>2]=+0;reg_ip=1941;
}
code[1941]=function(){
/*+1941:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2] <memint32[(reg_sp-464)>>2]
/*+1942:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2237;}else{reg_ip=1943;}
}
code[1943]=function(){
/*+1943:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1944:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1945:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1946:CALL*/regs.push(1947);reg_ip=10;
}
code[1947]=function(){
/*+1947:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+1948:MOV*/{let addr=reg_sp-380;mem8.copyWithin(reg_sp-448,addr,addr+24);}
/*+1949:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1950:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1951:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+1952:CALL*/regs.push(1953);reg_ip=135;
}
code[1953]=function(){
/*+1953:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+1954:NOTME*/reg_this=regs.pop();
/*+1955:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1956:I2F*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1957:FSUB*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=GetFloat(reg_sp-344)-GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1958:FLDC*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1959:FMUL*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-336)*GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1960:I2F*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=memint32[(reg_sp-456)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1961:FDIV*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-312)/GetFloat(reg_sp-320);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1962:FLDC*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1963:FSUB*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-304)-GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1964:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-288)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1965:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1966:CALL*/regs.push(1967);reg_ip=135;
}
code[1967]=function(){
/*+1967:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-280,addr,addr+24);}
/*+1968:NOTME*/reg_this=regs.pop();
/*+1969:LEA*/memint32[(reg_sp-232)>>2]=reg_sp-280
/*+1970:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+1971:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1972:CALL*/regs.push(1973);reg_ip=102;
}
code[1973]=function(){
/*+1973:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-256,addr,addr+24);}
/*+1974:NOTME*/reg_this=regs.pop();
/*+1975:FLDC*/{let addr=(reg_sp-228)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1976:I2F*/{let addr=(reg_sp-220)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1977:FSUB*/{let addr=(reg_sp-212)>>2;cvtflt64[0]=GetFloat(reg_sp-220)-GetFloat(reg_sp-228);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1978:FLDC*/{let addr=(reg_sp-204)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1979:FMUL*/{let addr=(reg_sp-196)>>2;cvtflt64[0]=GetFloat(reg_sp-212)*GetFloat(reg_sp-204);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1980:I2F*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=memint32[(reg_sp-452)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1981:FDIV*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=GetFloat(reg_sp-188)/GetFloat(reg_sp-196);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1982:FLDC*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=+1.333000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1983:FSUB*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=GetFloat(reg_sp-180)-GetFloat(reg_sp-172);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1984:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-164)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1985:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1986:CALL*/regs.push(1987);reg_ip=135;
}
code[1987]=function(){
/*+1987:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-156,addr,addr+24);}
/*+1988:NOTME*/reg_this=regs.pop();
/*+1989:LEA*/memint32[(reg_sp-108)>>2]=reg_sp-156
/*+1990:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-108)>>2];
/*+1991:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+1992:CALL*/regs.push(1993);reg_ip=102;
}
code[1993]=function(){
/*+1993:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-132,addr,addr+24);}
/*+1994:NOTME*/reg_this=regs.pop();
/*+1995:IAM*/regs.push(reg_this);reg_this=reg_sp-132;
/*+1996:CALL*/regs.push(1997);reg_ip=17;
}
code[1997]=function(){
/*+1997:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-104,addr,addr+24);}
/*+1998:NOTME*/reg_this=regs.pop();
/*+1999:MOV*/{let addr=reg_sp-104;mem8.copyWithin(reg_sp-488,addr,addr+24);}
/*+2000:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2001:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-512
/*+2002:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2003:CALL*/regs.push(2004);reg_ip=1430;
}
code[2004]=function(){
/*+2004:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2005:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-380
/*+2006:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2007:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2008:CALL*/regs.push(2009);reg_ip=120;
}
code[2009]=function(){
/*+2009:NOTME*/reg_this=regs.pop();
/*+2010:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2011:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2012:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+2013:CALL*/regs.push(2014);reg_ip=135;
}
code[2014]=function(){
/*+2014:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+2015:NOTME*/reg_this=regs.pop();
/*+2016:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2017:I2F*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=memint32[(reg_sp-456)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2018:FADD*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2019:FLDC*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2020:I2F*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2021:FSUB*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=GetFloat(reg_sp-320)-GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2022:FLDC*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2023:FMUL*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=GetFloat(reg_sp-312)*GetFloat(reg_sp-304);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2024:FDIV*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-336)/GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2025:FLDC*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2026:FSUB*/{let addr=(reg_sp-272)>>2;cvtflt64[0]=GetFloat(reg_sp-288)-GetFloat(reg_sp-280);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2027:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-272)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2028:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2029:CALL*/regs.push(2030);reg_ip=135;
}
code[2030]=function(){
/*+2030:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-264,addr,addr+24);}
/*+2031:NOTME*/reg_this=regs.pop();
/*+2032:LEA*/memint32[(reg_sp-216)>>2]=reg_sp-264
/*+2033:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+2034:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2035:CALL*/regs.push(2036);reg_ip=102;
}
code[2036]=function(){
/*+2036:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-240,addr,addr+24);}
/*+2037:NOTME*/reg_this=regs.pop();
/*+2038:FLDC*/{let addr=(reg_sp-212)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2039:I2F*/{let addr=(reg_sp-204)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2040:FSUB*/{let addr=(reg_sp-196)>>2;cvtflt64[0]=GetFloat(reg_sp-204)-GetFloat(reg_sp-212);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2041:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2042:FMUL*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=GetFloat(reg_sp-196)*GetFloat(reg_sp-188);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2043:I2F*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=memint32[(reg_sp-452)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2044:FDIV*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=GetFloat(reg_sp-172)/GetFloat(reg_sp-180);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2045:FLDC*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=+1.333000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2046:FSUB*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-164)-GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2047:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-148)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2048:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2049:CALL*/regs.push(2050);reg_ip=135;
}
code[2050]=function(){
/*+2050:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+2051:NOTME*/reg_this=regs.pop();
/*+2052:LEA*/memint32[(reg_sp-92)>>2]=reg_sp-140
/*+2053:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+2054:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+2055:CALL*/regs.push(2056);reg_ip=102;
}
code[2056]=function(){
/*+2056:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-116,addr,addr+24);}
/*+2057:NOTME*/reg_this=regs.pop();
/*+2058:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+2059:CALL*/regs.push(2060);reg_ip=17;
}
code[2060]=function(){
/*+2060:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-88,addr,addr+24);}
/*+2061:NOTME*/reg_this=regs.pop();
/*+2062:MOV*/{let addr=reg_sp-88;mem8.copyWithin(reg_sp-488,addr,addr+24);}
/*+2063:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2064:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-512
/*+2065:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2066:CALL*/regs.push(2067);reg_ip=1430;
}
code[2067]=function(){
/*+2067:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2068:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-380
/*+2069:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2070:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2071:CALL*/regs.push(2072);reg_ip=120;
}
code[2072]=function(){
/*+2072:NOTME*/reg_this=regs.pop();
/*+2073:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2074:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2075:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+2076:CALL*/regs.push(2077);reg_ip=135;
}
code[2077]=function(){
/*+2077:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+2078:NOTME*/reg_this=regs.pop();
/*+2079:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2080:I2F*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2081:FSUB*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=GetFloat(reg_sp-344)-GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2082:FLDC*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2083:FMUL*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-336)*GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2084:I2F*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=memint32[(reg_sp-456)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2085:FDIV*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=GetFloat(reg_sp-312)/GetFloat(reg_sp-320);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2086:FLDC*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2087:FSUB*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-304)-GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2088:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-288)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2089:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2090:CALL*/regs.push(2091);reg_ip=135;
}
code[2091]=function(){
/*+2091:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-280,addr,addr+24);}
/*+2092:NOTME*/reg_this=regs.pop();
/*+2093:LEA*/memint32[(reg_sp-232)>>2]=reg_sp-280
/*+2094:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+2095:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2096:CALL*/regs.push(2097);reg_ip=102;
}
code[2097]=function(){
/*+2097:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-256,addr,addr+24);}
/*+2098:NOTME*/reg_this=regs.pop();
/*+2099:FLDC*/{let addr=(reg_sp-228)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2100:I2F*/{let addr=(reg_sp-220)>>2;cvtflt64[0]=memint32[(reg_sp-452)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2101:FADD*/{let addr=(reg_sp-212)>>2;cvtflt64[0]=GetFloat(reg_sp-220)+GetFloat(reg_sp-228);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2102:FLDC*/{let addr=(reg_sp-204)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2103:I2F*/{let addr=(reg_sp-196)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2104:FSUB*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=GetFloat(reg_sp-196)-GetFloat(reg_sp-204);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2105:FLDC*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2106:FMUL*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=GetFloat(reg_sp-188)*GetFloat(reg_sp-180);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2107:FDIV*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=GetFloat(reg_sp-212)/GetFloat(reg_sp-172);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2108:FLDC*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=+1.333000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2109:FSUB*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-164)-GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2110:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-148)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2111:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2112:CALL*/regs.push(2113);reg_ip=135;
}
code[2113]=function(){
/*+2113:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-140,addr,addr+24);}
/*+2114:NOTME*/reg_this=regs.pop();
/*+2115:LEA*/memint32[(reg_sp-92)>>2]=reg_sp-140
/*+2116:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+2117:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+2118:CALL*/regs.push(2119);reg_ip=102;
}
code[2119]=function(){
/*+2119:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-116,addr,addr+24);}
/*+2120:NOTME*/reg_this=regs.pop();
/*+2121:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+2122:CALL*/regs.push(2123);reg_ip=17;
}
code[2123]=function(){
/*+2123:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-88,addr,addr+24);}
/*+2124:NOTME*/reg_this=regs.pop();
/*+2125:MOV*/{let addr=reg_sp-88;mem8.copyWithin(reg_sp-488,addr,addr+24);}
/*+2126:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2127:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-512
/*+2128:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2129:CALL*/regs.push(2130);reg_ip=1430;
}
code[2130]=function(){
/*+2130:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2131:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-380
/*+2132:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2133:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2134:CALL*/regs.push(2135);reg_ip=120;
}
code[2135]=function(){
/*+2135:NOTME*/reg_this=regs.pop();
/*+2136:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2137:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2138:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+2139:CALL*/regs.push(2140);reg_ip=135;
}
code[2140]=function(){
/*+2140:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+2141:NOTME*/reg_this=regs.pop();
/*+2142:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2143:I2F*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=memint32[(reg_sp-456)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2144:FADD*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=GetFloat(reg_sp-344)+GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2145:FLDC*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2146:I2F*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2147:FSUB*/{let addr=(reg_sp-312)>>2;cvtflt64[0]=GetFloat(reg_sp-320)-GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2148:FLDC*/{let addr=(reg_sp-304)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2149:FMUL*/{let addr=(reg_sp-296)>>2;cvtflt64[0]=GetFloat(reg_sp-312)*GetFloat(reg_sp-304);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2150:FDIV*/{let addr=(reg_sp-288)>>2;cvtflt64[0]=GetFloat(reg_sp-336)/GetFloat(reg_sp-296);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2151:FLDC*/{let addr=(reg_sp-280)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2152:FSUB*/{let addr=(reg_sp-272)>>2;cvtflt64[0]=GetFloat(reg_sp-288)-GetFloat(reg_sp-280);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2153:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-272)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2154:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2155:CALL*/regs.push(2156);reg_ip=135;
}
code[2156]=function(){
/*+2156:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-264,addr,addr+24);}
/*+2157:NOTME*/reg_this=regs.pop();
/*+2158:LEA*/memint32[(reg_sp-216)>>2]=reg_sp-264
/*+2159:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+2160:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2161:CALL*/regs.push(2162);reg_ip=102;
}
code[2162]=function(){
/*+2162:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-240,addr,addr+24);}
/*+2163:NOTME*/reg_this=regs.pop();
/*+2164:FLDC*/{let addr=(reg_sp-212)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2165:I2F*/{let addr=(reg_sp-204)>>2;cvtflt64[0]=memint32[(reg_sp-452)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2166:FADD*/{let addr=(reg_sp-196)>>2;cvtflt64[0]=GetFloat(reg_sp-204)+GetFloat(reg_sp-212);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2167:FLDC*/{let addr=(reg_sp-188)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2168:I2F*/{let addr=(reg_sp-180)>>2;cvtflt64[0]=memint32[(reg_sp-460)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2169:FSUB*/{let addr=(reg_sp-172)>>2;cvtflt64[0]=GetFloat(reg_sp-180)-GetFloat(reg_sp-188);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2170:FLDC*/{let addr=(reg_sp-164)>>2;cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2171:FMUL*/{let addr=(reg_sp-156)>>2;cvtflt64[0]=GetFloat(reg_sp-172)*GetFloat(reg_sp-164);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2172:FDIV*/{let addr=(reg_sp-148)>>2;cvtflt64[0]=GetFloat(reg_sp-196)/GetFloat(reg_sp-156);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2173:FLDC*/{let addr=(reg_sp-140)>>2;cvtflt64[0]=+1.333000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2174:FSUB*/{let addr=(reg_sp-132)>>2;cvtflt64[0]=GetFloat(reg_sp-148)-GetFloat(reg_sp-140);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2175:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-132)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2176:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2177:CALL*/regs.push(2178);reg_ip=135;
}
code[2178]=function(){
/*+2178:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-124,addr,addr+24);}
/*+2179:NOTME*/reg_this=regs.pop();
/*+2180:LEA*/memint32[(reg_sp-76)>>2]=reg_sp-124
/*+2181:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-76)>>2];
/*+2182:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+2183:CALL*/regs.push(2184);reg_ip=102;
}
code[2184]=function(){
/*+2184:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-100,addr,addr+24);}
/*+2185:NOTME*/reg_this=regs.pop();
/*+2186:IAM*/regs.push(reg_this);reg_this=reg_sp-100;
/*+2187:CALL*/regs.push(2188);reg_ip=17;
}
code[2188]=function(){
/*+2188:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-72,addr,addr+24);}
/*+2189:NOTME*/reg_this=regs.pop();
/*+2190:MOV*/{let addr=reg_sp-72;mem8.copyWithin(reg_sp-488,addr,addr+24);}
/*+2191:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+2192:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-512
/*+2193:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2194:CALL*/regs.push(2195);reg_ip=1430;
}
code[2195]=function(){
/*+2195:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2196:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-380
/*+2197:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2198:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2199:CALL*/regs.push(2200);reg_ip=120;
}
code[2200]=function(){
/*+2200:NOTME*/reg_this=regs.pop();
/*+2201:FLDC*/{let addr=(reg_sp-380)>>2;cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2202:FLDC*/{let addr=(reg_sp-8)>>2;cvtflt64[0]=+0.250000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2203:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2204:CALL*/regs.push(2205);reg_ip=147;
}
code[2205]=function(){
/*+2205:NOTME*/reg_this=regs.pop();
/*+2206:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2207:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2208:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-432)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2209:CALL*/regs.push(2210);reg_ip=231;
}
code[2210]=function(){
/*+2210:MOV*//*8*/{let dst=(reg_sp-380)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2211:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2212:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2213:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-440)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2214:CALL*/regs.push(2215);reg_ip=231;
}
code[2215]=function(){
/*+2215:MOV*//*8*/{let dst=(reg_sp-372)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2216:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2217:FLDC*/{let addr=(reg_sp-24)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2218:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-448)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2219:CALL*/regs.push(2220);reg_ip=231;
}
code[2220]=function(){
/*+2220:MOV*//*8*/{let dst=(reg_sp-364)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2221:MOV*//*8*/{let dst=(reg_sp-24)>>2;let src=(reg_sp-364)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2222:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-372)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2223:MOV*//*8*/{let dst=(reg_sp-8)>>2;let src=(reg_sp-380)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2224:NCALL*/SC_rgb();
/*+2225:ILDC*/memint32[(reg_sp-380)>>2]=+16
/*+2226:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-452)>>2]*memint32[(reg_sp-380)>>2]
/*+2227:ILDC*/memint32[(reg_sp-372)>>2]=+16
/*+2228:MUL*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-456)>>2]*memint32[(reg_sp-372)>>2]
/*+2229:ILDC*/memint32[(reg_sp-16)>>2]=+16
/*+2230:ILDC*/memint32[(reg_sp-12)>>2]=+16
/*+2231:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-368)>>2];
/*+2232:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2233:NCALL*/SC_fillrect();
/*+2234:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2];
/*+2235:INC*/memint32[(reg_sp-452)>>2]=memint32[(reg_sp-452)>>2]+1
/*+2236:JMP*/reg_ip=1941;
}
code[2237]=function(){
/*+2237:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2];
/*+2238:INC*/memint32[(reg_sp-456)>>2]=memint32[(reg_sp-456)>>2]+1
/*+2239:JMP*/reg_ip=1938;
}
code[2240]=function(){
/*+2240:INT*/int_code=+10;interrupt=true;;reg_ip=2241;
}
code[2241]=function(){
/*+2241:ILDC*/memint32[(reg_sp-756)>>2]=+0
/*+2242:ILDC*/memint32[(reg_sp-824)>>2]=+1
/*+2243:NCALL*/SC_Time();
/*+2244:MOV*//*8*/{let dst=(reg_sp-380)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2245:MOV*//*8*/{let dst=(reg_sp-832)>>2;let src=(reg_sp-380)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2246:ILDC*/memint32[(reg_sp-768)>>2]=+0
/*+2247:JMP*/reg_ip=2380;
}
code[2248]=function(){
/*+2248:ILDC*/memint32[(reg_sp-380)>>2]=+8
/*+2249:ADD*/memint32[(reg_sp-424)>>2]=memint32[(reg_sp-768)>>2]+memint32[(reg_sp-380)>>2]
/*+2250:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2251:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-424)>>2] >memint32[(reg_sp-380)>>2]
/*+2252:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2254;}else{reg_ip=2253;}
}
code[2253]=function(){
/*+2253:ILDC*/memint32[(reg_sp-424)>>2]=+480;reg_ip=2254;
}
code[2254]=function(){
/*+2254:MOV*//*4*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-768)>>2];;reg_ip=2255;
}
code[2255]=function(){
/*+2255:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2] <memint32[(reg_sp-424)>>2]
/*+2256:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2348;}else{reg_ip=2257;}
}
code[2257]=function(){
/*+2257:ILDC*/memint32[(reg_sp-416)>>2]=+0;reg_ip=2258;
}
code[2258]=function(){
/*+2258:ILDC*/memint32[(reg_sp-380)>>2]=+640
/*+2259:LS*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-416)>>2] <memint32[(reg_sp-380)>>2]
/*+2260:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2345;}else{reg_ip=2261;}
}
code[2261]=function(){
/*+2261:FLDC*/{let addr=(reg_sp-48)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2262:FLDC*/{let addr=(reg_sp-40)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2263:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2264:CALL*/regs.push(2265);reg_ip=10;
}
code[2265]=function(){
/*+2265:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2266:MOV*/{let addr=reg_sp-380;mem8.copyWithin(reg_sp-412,addr,addr+24);}
/*+2267:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2268:FLDC*/{let addr=(reg_sp-32)>>2;cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2269:IAM*/regs.push(reg_this);reg_this=reg_sp-680;
/*+2270:CALL*/regs.push(2271);reg_ip=135;
}
code[2271]=function(){
/*+2271:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-376,addr,addr+24);}
/*+2272:NOTME*/reg_this=regs.pop();
/*+2273:FLDC*/{let addr=(reg_sp-352)>>2;cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2274:I2F*/{let addr=(reg_sp-344)>>2;cvtflt64[0]=memint32[(reg_sp-420)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2275:FDIV*/{let addr=(reg_sp-336)>>2;cvtflt64[0]=GetFloat(reg_sp-344)/GetFloat(reg_sp-352);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2276:FLDC*/{let addr=(reg_sp-328)>>2;cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2277:FSUB*/{let addr=(reg_sp-320)>>2;cvtflt64[0]=GetFloat(reg_sp-336)-GetFloat(reg_sp-328);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2278:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-320)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2279:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2280:CALL*/regs.push(2281);reg_ip=135;
}
code[2281]=function(){
/*+2281:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-312,addr,addr+24);}
/*+2282:NOTME*/reg_this=regs.pop();
/*+2283:LEA*/memint32[(reg_sp-264)>>2]=reg_sp-312
/*+2284:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-264)>>2];
/*+2285:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2286:CALL*/regs.push(2287);reg_ip=102;
}
code[2287]=function(){
/*+2287:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-288,addr,addr+24);}
/*+2288:NOTME*/reg_this=regs.pop();
/*+2289:FLDC*/{let addr=(reg_sp-260)>>2;cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2290:I2F*/{let addr=(reg_sp-252)>>2;cvtflt64[0]=memint32[(reg_sp-416)>>2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2291:FDIV*/{let addr=(reg_sp-244)>>2;cvtflt64[0]=GetFloat(reg_sp-252)/GetFloat(reg_sp-260);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2292:FLDC*/{let addr=(reg_sp-236)>>2;cvtflt64[0]=+1.333000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2293:FSUB*/{let addr=(reg_sp-228)>>2;cvtflt64[0]=GetFloat(reg_sp-244)-GetFloat(reg_sp-236);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2294:MOV*//*8*/{let dst=(reg_sp-32)>>2;let src=(reg_sp-228)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2295:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2296:CALL*/regs.push(2297);reg_ip=135;
}
code[2297]=function(){
/*+2297:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-220,addr,addr+24);}
/*+2298:NOTME*/reg_this=regs.pop();
/*+2299:LEA*/memint32[(reg_sp-172)>>2]=reg_sp-220
/*+2300:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-172)>>2];
/*+2301:IAM*/regs.push(reg_this);reg_this=reg_sp-288;
/*+2302:CALL*/regs.push(2303);reg_ip=102;
}
code[2303]=function(){
/*+2303:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-196,addr,addr+24);}
/*+2304:NOTME*/reg_this=regs.pop();
/*+2305:IAM*/regs.push(reg_this);reg_this=reg_sp-196;
/*+2306:CALL*/regs.push(2307);reg_ip=17;
}
code[2307]=function(){
/*+2307:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-168,addr,addr+24);}
/*+2308:NOTME*/reg_this=regs.pop();
/*+2309:MOV*/{let addr=reg_sp-168;mem8.copyWithin(reg_sp-488,addr,addr+24);}
/*+2310:ILDC*/memint32[(reg_sp-32)>>2]=+12
/*+2311:LEA*/memint32[(reg_sp-356)>>2]=reg_sp-512
/*+2312:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2313:CALL*/regs.push(2314);reg_ip=1430;
}
code[2314]=function(){
/*+2314:MOV*/{let addr=reg_sp-24;mem8.copyWithin(reg_sp-380,addr,addr+24);}
/*+2315:LEA*/memint32[(reg_sp-352)>>2]=reg_sp-380
/*+2316:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2317:IAM*/regs.push(reg_this);reg_this=reg_sp-412;
/*+2318:CALL*/regs.push(2319);reg_ip=120;
}
code[2319]=function(){
/*+2319:NOTME*/reg_this=regs.pop();
/*+2320:LEA*/memint32[(reg_sp-380)>>2]=reg_sp-388
/*+2321:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-380)>>2];
/*+2322:LEA*/memint32[(reg_sp-376)>>2]=reg_sp-412
/*+2323:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2324:CALL*/regs.push(2325);reg_ip=765;
}
code[2325]=function(){
/*+2325:CLDC*/PutChar(reg_sp-385, +255);
/*+2326:ILDC*/memint32[(reg_sp-380)>>2]=+16
/*+2327:C2I*/memint32[(reg_sp-376)>>2]=GetChar(reg_sp-386)
/*+2328:SHL*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-380)>>2]
/*+2329:ILDC*/memint32[(reg_sp-368)>>2]=-16777216
/*+2330:OR*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-368)>>2]|memint32[(reg_sp-372)>>2]
/*+2331:ILDC*/memint32[(reg_sp-360)>>2]=+8
/*+2332:C2I*/memint32[(reg_sp-356)>>2]=GetChar(reg_sp-387)
/*+2333:SHL*/memint32[(reg_sp-352)>>2]=memint32[(reg_sp-356)>>2]<<memint32[(reg_sp-360)>>2]
/*+2334:OR*/memint32[(reg_sp-348)>>2]=memint32[(reg_sp-364)>>2]|memint32[(reg_sp-352)>>2]
/*+2335:C2I*/memint32[(reg_sp-344)>>2]=GetChar(reg_sp-388)
/*+2336:OR*/memint32[(reg_sp-340)>>2]=memint32[(reg_sp-348)>>2]|memint32[(reg_sp-344)>>2]
/*+2337:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-340)>>2];
/*+2338:ILDC*/memint32[(reg_sp-12)>>2]=+1
/*+2339:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-420)>>2];
/*+2340:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-416)>>2];
/*+2341:NCALL*/SC_lineH();
/*+2342:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-416)>>2];
/*+2343:INC*/memint32[(reg_sp-416)>>2]=memint32[(reg_sp-416)>>2]+1
/*+2344:JMP*/reg_ip=2258;
}
code[2345]=function(){
/*+2345:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2];
/*+2346:INC*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-420)>>2]+1
/*+2347:JMP*/reg_ip=2255;
}
code[2348]=function(){
/*+2348:ILDC*/memint32[(reg_sp-384)>>2]=+8
/*+2349:ILDC*/memint32[(reg_sp-380)>>2]=+8
/*+2350:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-768)>>2]+memint32[(reg_sp-380)>>2]
/*+2351:ILDC*/memint32[(reg_sp-372)>>2]=+480
/*+2352:GR*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2] >memint32[(reg_sp-372)>>2]
/*+2353:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=2356;}else{reg_ip=2354;}
}
code[2354]=function(){
/*+2354:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2355:SUB*/memint32[(reg_sp-384)>>2]=memint32[(reg_sp-380)>>2]-memint32[(reg_sp-768)>>2];reg_ip=2356;
}
code[2356]=function(){
/*+2356:ILDC*/memint32[(reg_sp-380)>>2]=+8
/*+2357:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-768)>>2]+memint32[(reg_sp-380)>>2]
/*+2358:ILDC*/memint32[(reg_sp-16)>>2]=-1
/*+2359:ILDC*/memint32[(reg_sp-12)>>2]=+640
/*+2360:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+2361:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2362:NCALL*/SC_lineH();
/*+2363:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2364:NCALL*/SC_SetPresentWait();
/*+2365:INT*/int_code=+10;interrupt=true;;reg_ip=2366;
}
code[2366]=function(){
/*+2366:ILDC*/memint32[(reg_sp-380)>>2]=+8
/*+2367:ADD*/memint32[(reg_sp-768)>>2]=memint32[(reg_sp-768)>>2]+memint32[(reg_sp-380)>>2]
/*+2368:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-768)>>2];
/*+2369:ILDC*/memint32[(reg_sp-380)>>2]=+479
/*+2370:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-768)>>2] >memint32[(reg_sp-380)>>2]
/*+2371:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2380;}else{reg_ip=2372;}
}
code[2372]=function(){
/*+2372:JMPZ*/if(memint32[(reg_sp-824)>>2]==0){reg_ip=2379;}else{reg_ip=2373;}
}
code[2373]=function(){
/*+2373:NCALL*/SC_Time();
/*+2374:MOV*//*8*/{let dst=(reg_sp-380)>>2;let src=(reg_sp-8)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2375:FSUB*/{let addr=(reg_sp-372)>>2;cvtflt64[0]=GetFloat(reg_sp-380)-GetFloat(reg_sp-832);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+2376:MOV*//*8*/{let dst=(reg_sp-16)>>2;let src=(reg_sp-372)>>2;memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+2377:ILDC*/memint32[(reg_sp-8)>>2]=+328
/*+2378:NCALL*/SC_printf();;reg_ip=2379;
}
code[2379]=function(){
/*+2379:ILDC*/memint32[(reg_sp-824)>>2]=+0;reg_ip=2380;
}
code[2380]=function(){
/*+2380:JMP*/reg_ip=1675;
}
code[2381]=function(){
/*+2381:ILDC*/memint32[(reg_sp-844)>>2]=+0
/*+2382:ADDSP*/reg_sp+=-840;
/*+2383:RET*/reg_ip=regs.pop();
}
code[2384]=function(){
/*+2384:ADDSP*/reg_sp+=+4;
/*+2385:MOV*/{let addr=+64;mem8.copyWithin(+724,addr,addr+192);}
/*+2386:MOV*/{let addr=+256;mem8.copyWithin(+916,addr,addr+72);}
/*+2387:CALL*/regs.push(2388);reg_ip=1549;
}
code[2388]=function(){
/*+2388:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-4)>>2];
/*+2389:ADDSP*/reg_sp+=-4;
/*+2390:FIN*/interrupt=true;quit=true;
}
let start_addr=2384
let start_rsp=1340
