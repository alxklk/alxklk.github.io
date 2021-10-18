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
/*+1549:ADDSP*/reg_sp+=+740;
/*+1550:NCALL*/SC_Time();
/*+1551:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1552:MOV*//*8*/memint32[(reg_sp-732)>>2]=memint32[(reg_sp-380)>>2];memint32[((reg_sp-732)>>2)+1]=memint32[((reg_sp-380)>>2)+1];
/*+1553:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1554:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1555:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1556:CALL*/regs.push(1557);reg_ip=10;
}
code[1557]=function(){
/*+1557:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1558:MOV*/Memcpy(reg_sp-724,reg_sp-380,+24);
/*+1559:ILDC*/memint32[(reg_sp-700)>>2]=+0
/*+1560:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1561:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1562:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+1563:CALL*/regs.push(1564);reg_ip=10;
}
code[1564]=function(){
/*+1564:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1565:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1566:CALL*/regs.push(1567);reg_ip=17;
}
code[1567]=function(){
/*+1567:MOV*/Memcpy(reg_sp-356,reg_sp-24,+24);
/*+1568:NOTME*/reg_this=regs.pop();
/*+1569:MOV*/Memcpy(+244,reg_sp-356,+24);
/*+1570:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1571:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1572:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1573:CALL*/regs.push(1574);reg_ip=10;
}
code[1574]=function(){
/*+1574:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1575:MOV*/Memcpy(+4,reg_sp-380,+24);
/*+1576:FLDC*/PutFloat(+28,+0.600000);
/*+1577:ILDC*/memint32[(+0)>>2]=+3
/*+1578:FLDC*/PutFloat(reg_sp-48,+0.500000);
/*+1579:FLDC*/PutFloat(reg_sp-40,+0.800000);
/*+1580:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1581:CALL*/regs.push(1582);reg_ip=10;
}
code[1582]=function(){
/*+1582:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1583:MOV*/Memcpy(+40,reg_sp-380,+24);
/*+1584:FLDC*/PutFloat(+64,+0.500000);
/*+1585:ILDC*/memint32[(+36)>>2]=+2
/*+1586:FLDC*/PutFloat(reg_sp-48,+0.400000);
/*+1587:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1588:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1589:CALL*/regs.push(1590);reg_ip=10;
}
code[1590]=function(){
/*+1590:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1591:MOV*/Memcpy(+76,reg_sp-380,+24);
/*+1592:FLDC*/PutFloat(+100,+0.400000);
/*+1593:ILDC*/memint32[(+72)>>2]=+4
/*+1594:ILDC*/memint32[(+108)>>2]=+1
/*+1595:FLDC*/PutFloat(reg_sp-48,-0.700000);
/*+1596:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1597:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1598:CALL*/regs.push(1599);reg_ip=10;
}
code[1599]=function(){
/*+1599:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1600:MOV*/Memcpy(+112,reg_sp-380,+24);
/*+1601:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1602:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1603:FLDC*/PutFloat(reg_sp-32,-1.000000);
/*+1604:CALL*/regs.push(1605);reg_ip=10;
}
code[1605]=function(){
/*+1605:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1606:MOV*/Memcpy(+136,reg_sp-380,+24);
/*+1607:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1608:FLDC*/PutFloat(reg_sp-40,+1.000000);
/*+1609:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1610:CALL*/regs.push(1611);reg_ip=10;
}
code[1611]=function(){
/*+1611:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1612:MOV*/Memcpy(+160,reg_sp-380,+24);
/*+1613:ILDC*/memint32[(+184)>>2]=+4
/*+1614:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1615:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1616:FLDC*/PutFloat(reg_sp-32,+0.500000);
/*+1617:CALL*/regs.push(1618);reg_ip=10;
}
code[1618]=function(){
/*+1618:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1619:MOV*/Memcpy(+188,reg_sp-380,+24);
/*+1620:FLDC*/PutFloat(reg_sp-48,+0.400000);
/*+1621:FLDC*/PutFloat(reg_sp-40,-0.700000);
/*+1622:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1623:CALL*/regs.push(1624);reg_ip=10;
}
code[1624]=function(){
/*+1624:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1625:MOV*/Memcpy(+212,reg_sp-380,+24);
/*+1626:FLDC*/PutFloat(+236,+0.400000);
/*+1627:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1628:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1629:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1630:CALL*/regs.push(1631);reg_ip=10;
}
code[1631]=function(){
/*+1631:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1632:MOV*/Memcpy(reg_sp-696,reg_sp-380,+24);
/*+1633:ILDC*/memint32[(reg_sp-672)>>2]=+0
/*+1634:NCALL*/SC_Time();
/*+1635:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+1636:MOV*//*8*/memint32[(reg_sp-668)>>2]=memint32[(reg_sp-380)>>2];memint32[((reg_sp-668)>>2)+1]=memint32[((reg_sp-380)>>2)+1];
/*+1637:ILDC*/memint32[(reg_sp-660)>>2]=+0
/*+1638:LEA*/PutInt(reg_sp-380,reg_sp-648);
/*+1639:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1640:LEA*/PutInt(reg_sp-376,reg_sp-652);
/*+1641:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1642:LEA*/PutInt(reg_sp-372,reg_sp-656);
/*+1643:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1644:NCALL*/SC_GetMouseState();
/*+1645:MOV*//*4*/memint32[(reg_sp-636)>>2]=memint32[(reg_sp-648)>>2];
/*+1646:MOV*//*4*/memint32[(reg_sp-644)>>2]=memint32[(reg_sp-656)>>2];
/*+1647:MOV*//*4*/memint32[(reg_sp-640)>>2]=memint32[(reg_sp-652)>>2];
/*+1648:ILDC*/memint32[(reg_sp-632)>>2]=+0
/*+1649:ILDC*/memint32[(reg_sp-628)>>2]=+0
/*+1650:ILDC*/memint32[(reg_sp-624)>>2]=+0
/*+1651:ILDC*/memint32[(reg_sp-620)>>2]=+0
/*+1652:ILDC*/memint32[(reg_sp-616)>>2]=+0
/*+1653:ILDC*/memint32[(reg_sp-612)>>2]=+0
/*+1654:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1655:FLDC*/PutFloat(reg_sp-40,+2.000000);
/*+1656:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1657:CALL*/regs.push(1658);reg_ip=10;
}
code[1658]=function(){
/*+1658:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1659:MOV*/Memcpy(reg_sp-608,reg_sp-380,+24);
/*+1660:FLDC*/PutFloat(reg_sp-48,+1.000000);
/*+1661:FLDC*/PutFloat(reg_sp-40,+2.000000);
/*+1662:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1663:CALL*/regs.push(1664);reg_ip=10;
}
code[1664]=function(){
/*+1664:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1665:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1666:CALL*/regs.push(1667);reg_ip=17;
}
code[1667]=function(){
/*+1667:MOV*/Memcpy(reg_sp-356,reg_sp-24,+24);
/*+1668:NOTME*/reg_this=regs.pop();
/*+1669:IAM*/regs.push(reg_this);reg_this=reg_sp-356;
/*+1670:CALL*/regs.push(1671);reg_ip=90;
}
code[1671]=function(){
/*+1671:MOV*/Memcpy(reg_sp-308,reg_sp-24,+24);
/*+1672:NOTME*/reg_this=regs.pop();
/*+1673:MOV*/Memcpy(reg_sp-584,reg_sp-308,+24);;reg_ip=1674;
}
code[1674]=function(){
/*+1674:MOV*//*4*/memint32[(reg_sp-636)>>2]=memint32[(reg_sp-648)>>2];
/*+1675:MOV*//*4*/memint32[(reg_sp-644)>>2]=memint32[(reg_sp-656)>>2];
/*+1676:MOV*//*4*/memint32[(reg_sp-640)>>2]=memint32[(reg_sp-652)>>2];
/*+1677:LEA*/PutInt(reg_sp-380,reg_sp-648);
/*+1678:MOV*//*4*/memint32[(reg_sp-12)>>2]=memint32[(reg_sp-380)>>2];
/*+1679:LEA*/PutInt(reg_sp-376,reg_sp-652);
/*+1680:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+1681:LEA*/PutInt(reg_sp-372,reg_sp-656);
/*+1682:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-372)>>2];
/*+1683:NCALL*/SC_GetMouseState();
/*+1684:ILDC*/memint32[(reg_sp-8)>>2]=+119
/*+1685:NCALL*/SC_KeyPressed();
/*+1686:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1687:MOV*//*4*/memint32[(reg_sp-616)>>2]=memint32[(reg_sp-380)>>2];
/*+1688:ILDC*/memint32[(reg_sp-8)>>2]=+115
/*+1689:NCALL*/SC_KeyPressed();
/*+1690:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1691:MOV*//*4*/memint32[(reg_sp-612)>>2]=memint32[(reg_sp-380)>>2];
/*+1692:ILDC*/memint32[(reg_sp-8)>>2]=+97
/*+1693:NCALL*/SC_KeyPressed();
/*+1694:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1695:MOV*//*4*/memint32[(reg_sp-624)>>2]=memint32[(reg_sp-380)>>2];
/*+1696:ILDC*/memint32[(reg_sp-8)>>2]=+100
/*+1697:NCALL*/SC_KeyPressed();
/*+1698:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1699:MOV*//*4*/memint32[(reg_sp-620)>>2]=memint32[(reg_sp-380)>>2];
/*+1700:ILDC*/memint32[(reg_sp-8)>>2]=+113
/*+1701:NCALL*/SC_KeyPressed();
/*+1702:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1703:MOV*//*4*/memint32[(reg_sp-628)>>2]=memint32[(reg_sp-380)>>2];
/*+1704:ILDC*/memint32[(reg_sp-8)>>2]=+101
/*+1705:NCALL*/SC_KeyPressed();
/*+1706:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-4)>>2];
/*+1707:MOV*//*4*/memint32[(reg_sp-632)>>2]=memint32[(reg_sp-380)>>2];
/*+1708:LEA*/PutInt(reg_sp-356,reg_sp-696);
/*+1709:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1710:LEA*/PutInt(reg_sp-352,reg_sp-584);
/*+1711:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1712:CALL*/regs.push(1713);reg_ip=168;
}
code[1713]=function(){
/*+1713:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1714:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1715:CALL*/regs.push(1716);reg_ip=17;
}
code[1716]=function(){
/*+1716:MOV*/Memcpy(reg_sp-348,reg_sp-24,+24);
/*+1717:NOTME*/reg_this=regs.pop();
/*+1718:MOV*/Memcpy(reg_sp-560,reg_sp-348,+24);
/*+1719:LEA*/PutInt(reg_sp-356,reg_sp-560);
/*+1720:MOV*//*4*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-356)>>2];
/*+1721:LEA*/PutInt(reg_sp-352,reg_sp-584);
/*+1722:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-352)>>2];
/*+1723:CALL*/regs.push(1724);reg_ip=168;
}
code[1724]=function(){
/*+1724:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1725:IAM*/regs.push(reg_this);reg_this=reg_sp-380;
/*+1726:CALL*/regs.push(1727);reg_ip=17;
}
code[1727]=function(){
/*+1727:MOV*/Memcpy(reg_sp-348,reg_sp-24,+24);
/*+1728:NOTME*/reg_this=regs.pop();
/*+1729:MOV*/Memcpy(reg_sp-536,reg_sp-348,+24);
/*+1730:MOV*/Memcpy(reg_sp-512,reg_sp-608,+24);
/*+1731:JMPZ*/if(memint32[(reg_sp-660)>>2]==0){reg_ip=2041;}else{reg_ip=1732;}
}
code[1732]=function(){
/*+1732:ILDC*/memint32[(reg_sp-464)>>2]=+53
/*+1733:ILDC*/memint32[(reg_sp-460)>>2]=+40
/*+1734:ILDC*/memint32[(reg_sp-456)>>2]=+0;reg_ip=1735;
}
code[1735]=function(){
/*+1735:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2] <memint32[(reg_sp-460)>>2]
/*+1736:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2037;}else{reg_ip=1737;}
}
code[1737]=function(){
/*+1737:ILDC*/memint32[(reg_sp-452)>>2]=+0;reg_ip=1738;
}
code[1738]=function(){
/*+1738:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2] <memint32[(reg_sp-464)>>2]
/*+1739:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2034;}else{reg_ip=1740;}
}
code[1740]=function(){
/*+1740:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+1741:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+1742:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+1743:CALL*/regs.push(1744);reg_ip=10;
}
code[1744]=function(){
/*+1744:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1745:MOV*/Memcpy(reg_sp-448,reg_sp-380,+24);
/*+1746:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1747:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1748:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1749:CALL*/regs.push(1750);reg_ip=135;
}
code[1750]=function(){
/*+1750:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1751:NOTME*/reg_this=regs.pop();
/*+1752:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1753:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-460)>>2]);
/*+1754:FSUB*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)-GetFloat(reg_sp-352));
/*+1755:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1756:FMUL*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)*GetFloat(reg_sp-328));
/*+1757:I2F*/PutFloat(reg_sp-312,memint32[(reg_sp-456)>>2]);
/*+1758:FDIV*/PutFloat(reg_sp-304, GetFloat(reg_sp-312)/GetFloat(reg_sp-320));
/*+1759:FLDC*/PutFloat(reg_sp-296,+1.000000);
/*+1760:FSUB*/PutFloat(reg_sp-288, GetFloat(reg_sp-304)-GetFloat(reg_sp-296));
/*+1761:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-288)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-288)>>2)+1];
/*+1762:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1763:CALL*/regs.push(1764);reg_ip=135;
}
code[1764]=function(){
/*+1764:MOV*/Memcpy(reg_sp-280,reg_sp-24,+24);
/*+1765:NOTME*/reg_this=regs.pop();
/*+1766:LEA*/PutInt(reg_sp-232,reg_sp-280);
/*+1767:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+1768:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1769:CALL*/regs.push(1770);reg_ip=102;
}
code[1770]=function(){
/*+1770:MOV*/Memcpy(reg_sp-256,reg_sp-24,+24);
/*+1771:NOTME*/reg_this=regs.pop();
/*+1772:FLDC*/PutFloat(reg_sp-228,+0.500000);
/*+1773:I2F*/PutFloat(reg_sp-220,memint32[(reg_sp-460)>>2]);
/*+1774:FSUB*/PutFloat(reg_sp-212, GetFloat(reg_sp-220)-GetFloat(reg_sp-228));
/*+1775:FLDC*/PutFloat(reg_sp-204,+0.500000);
/*+1776:FMUL*/PutFloat(reg_sp-196, GetFloat(reg_sp-212)*GetFloat(reg_sp-204));
/*+1777:I2F*/PutFloat(reg_sp-188,memint32[(reg_sp-452)>>2]);
/*+1778:FDIV*/PutFloat(reg_sp-180, GetFloat(reg_sp-188)/GetFloat(reg_sp-196));
/*+1779:FLDC*/PutFloat(reg_sp-172,+1.333000);
/*+1780:FSUB*/PutFloat(reg_sp-164, GetFloat(reg_sp-180)-GetFloat(reg_sp-172));
/*+1781:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-164)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-164)>>2)+1];
/*+1782:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1783:CALL*/regs.push(1784);reg_ip=135;
}
code[1784]=function(){
/*+1784:MOV*/Memcpy(reg_sp-156,reg_sp-24,+24);
/*+1785:NOTME*/reg_this=regs.pop();
/*+1786:LEA*/PutInt(reg_sp-108,reg_sp-156);
/*+1787:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-108)>>2];
/*+1788:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+1789:CALL*/regs.push(1790);reg_ip=102;
}
code[1790]=function(){
/*+1790:MOV*/Memcpy(reg_sp-132,reg_sp-24,+24);
/*+1791:NOTME*/reg_this=regs.pop();
/*+1792:IAM*/regs.push(reg_this);reg_this=reg_sp-132;
/*+1793:CALL*/regs.push(1794);reg_ip=17;
}
code[1794]=function(){
/*+1794:MOV*/Memcpy(reg_sp-104,reg_sp-24,+24);
/*+1795:NOTME*/reg_this=regs.pop();
/*+1796:MOV*/Memcpy(reg_sp-488,reg_sp-104,+24);
/*+1797:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+1798:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+1799:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+1800:CALL*/regs.push(1801);reg_ip=1430;
}
code[1801]=function(){
/*+1801:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1802:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+1803:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+1804:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+1805:CALL*/regs.push(1806);reg_ip=120;
}
code[1806]=function(){
/*+1806:NOTME*/reg_this=regs.pop();
/*+1807:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1808:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1809:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1810:CALL*/regs.push(1811);reg_ip=135;
}
code[1811]=function(){
/*+1811:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1812:NOTME*/reg_this=regs.pop();
/*+1813:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1814:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-456)>>2]);
/*+1815:FADD*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)+GetFloat(reg_sp-352));
/*+1816:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1817:I2F*/PutFloat(reg_sp-320,memint32[(reg_sp-460)>>2]);
/*+1818:FSUB*/PutFloat(reg_sp-312, GetFloat(reg_sp-320)-GetFloat(reg_sp-328));
/*+1819:FLDC*/PutFloat(reg_sp-304,+0.500000);
/*+1820:FMUL*/PutFloat(reg_sp-296, GetFloat(reg_sp-312)*GetFloat(reg_sp-304));
/*+1821:FDIV*/PutFloat(reg_sp-288, GetFloat(reg_sp-336)/GetFloat(reg_sp-296));
/*+1822:FLDC*/PutFloat(reg_sp-280,+1.000000);
/*+1823:FSUB*/PutFloat(reg_sp-272, GetFloat(reg_sp-288)-GetFloat(reg_sp-280));
/*+1824:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-272)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-272)>>2)+1];
/*+1825:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1826:CALL*/regs.push(1827);reg_ip=135;
}
code[1827]=function(){
/*+1827:MOV*/Memcpy(reg_sp-264,reg_sp-24,+24);
/*+1828:NOTME*/reg_this=regs.pop();
/*+1829:LEA*/PutInt(reg_sp-216,reg_sp-264);
/*+1830:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+1831:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1832:CALL*/regs.push(1833);reg_ip=102;
}
code[1833]=function(){
/*+1833:MOV*/Memcpy(reg_sp-240,reg_sp-24,+24);
/*+1834:NOTME*/reg_this=regs.pop();
/*+1835:FLDC*/PutFloat(reg_sp-212,+0.500000);
/*+1836:I2F*/PutFloat(reg_sp-204,memint32[(reg_sp-460)>>2]);
/*+1837:FSUB*/PutFloat(reg_sp-196, GetFloat(reg_sp-204)-GetFloat(reg_sp-212));
/*+1838:FLDC*/PutFloat(reg_sp-188,+0.500000);
/*+1839:FMUL*/PutFloat(reg_sp-180, GetFloat(reg_sp-196)*GetFloat(reg_sp-188));
/*+1840:I2F*/PutFloat(reg_sp-172,memint32[(reg_sp-452)>>2]);
/*+1841:FDIV*/PutFloat(reg_sp-164, GetFloat(reg_sp-172)/GetFloat(reg_sp-180));
/*+1842:FLDC*/PutFloat(reg_sp-156,+1.333000);
/*+1843:FSUB*/PutFloat(reg_sp-148, GetFloat(reg_sp-164)-GetFloat(reg_sp-156));
/*+1844:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-148)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-148)>>2)+1];
/*+1845:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1846:CALL*/regs.push(1847);reg_ip=135;
}
code[1847]=function(){
/*+1847:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1848:NOTME*/reg_this=regs.pop();
/*+1849:LEA*/PutInt(reg_sp-92,reg_sp-140);
/*+1850:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+1851:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+1852:CALL*/regs.push(1853);reg_ip=102;
}
code[1853]=function(){
/*+1853:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+1854:NOTME*/reg_this=regs.pop();
/*+1855:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+1856:CALL*/regs.push(1857);reg_ip=17;
}
code[1857]=function(){
/*+1857:MOV*/Memcpy(reg_sp-88,reg_sp-24,+24);
/*+1858:NOTME*/reg_this=regs.pop();
/*+1859:MOV*/Memcpy(reg_sp-488,reg_sp-88,+24);
/*+1860:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+1861:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+1862:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+1863:CALL*/regs.push(1864);reg_ip=1430;
}
code[1864]=function(){
/*+1864:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1865:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+1866:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+1867:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+1868:CALL*/regs.push(1869);reg_ip=120;
}
code[1869]=function(){
/*+1869:NOTME*/reg_this=regs.pop();
/*+1870:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1871:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1872:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1873:CALL*/regs.push(1874);reg_ip=135;
}
code[1874]=function(){
/*+1874:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1875:NOTME*/reg_this=regs.pop();
/*+1876:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1877:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-460)>>2]);
/*+1878:FSUB*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)-GetFloat(reg_sp-352));
/*+1879:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1880:FMUL*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)*GetFloat(reg_sp-328));
/*+1881:I2F*/PutFloat(reg_sp-312,memint32[(reg_sp-456)>>2]);
/*+1882:FDIV*/PutFloat(reg_sp-304, GetFloat(reg_sp-312)/GetFloat(reg_sp-320));
/*+1883:FLDC*/PutFloat(reg_sp-296,+1.000000);
/*+1884:FSUB*/PutFloat(reg_sp-288, GetFloat(reg_sp-304)-GetFloat(reg_sp-296));
/*+1885:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-288)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-288)>>2)+1];
/*+1886:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1887:CALL*/regs.push(1888);reg_ip=135;
}
code[1888]=function(){
/*+1888:MOV*/Memcpy(reg_sp-280,reg_sp-24,+24);
/*+1889:NOTME*/reg_this=regs.pop();
/*+1890:LEA*/PutInt(reg_sp-232,reg_sp-280);
/*+1891:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-232)>>2];
/*+1892:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1893:CALL*/regs.push(1894);reg_ip=102;
}
code[1894]=function(){
/*+1894:MOV*/Memcpy(reg_sp-256,reg_sp-24,+24);
/*+1895:NOTME*/reg_this=regs.pop();
/*+1896:FLDC*/PutFloat(reg_sp-228,+0.500000);
/*+1897:I2F*/PutFloat(reg_sp-220,memint32[(reg_sp-452)>>2]);
/*+1898:FADD*/PutFloat(reg_sp-212, GetFloat(reg_sp-220)+GetFloat(reg_sp-228));
/*+1899:FLDC*/PutFloat(reg_sp-204,+0.500000);
/*+1900:I2F*/PutFloat(reg_sp-196,memint32[(reg_sp-460)>>2]);
/*+1901:FSUB*/PutFloat(reg_sp-188, GetFloat(reg_sp-196)-GetFloat(reg_sp-204));
/*+1902:FLDC*/PutFloat(reg_sp-180,+0.500000);
/*+1903:FMUL*/PutFloat(reg_sp-172, GetFloat(reg_sp-188)*GetFloat(reg_sp-180));
/*+1904:FDIV*/PutFloat(reg_sp-164, GetFloat(reg_sp-212)/GetFloat(reg_sp-172));
/*+1905:FLDC*/PutFloat(reg_sp-156,+1.333000);
/*+1906:FSUB*/PutFloat(reg_sp-148, GetFloat(reg_sp-164)-GetFloat(reg_sp-156));
/*+1907:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-148)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-148)>>2)+1];
/*+1908:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1909:CALL*/regs.push(1910);reg_ip=135;
}
code[1910]=function(){
/*+1910:MOV*/Memcpy(reg_sp-140,reg_sp-24,+24);
/*+1911:NOTME*/reg_this=regs.pop();
/*+1912:LEA*/PutInt(reg_sp-92,reg_sp-140);
/*+1913:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-92)>>2];
/*+1914:IAM*/regs.push(reg_this);reg_this=reg_sp-256;
/*+1915:CALL*/regs.push(1916);reg_ip=102;
}
code[1916]=function(){
/*+1916:MOV*/Memcpy(reg_sp-116,reg_sp-24,+24);
/*+1917:NOTME*/reg_this=regs.pop();
/*+1918:IAM*/regs.push(reg_this);reg_this=reg_sp-116;
/*+1919:CALL*/regs.push(1920);reg_ip=17;
}
code[1920]=function(){
/*+1920:MOV*/Memcpy(reg_sp-88,reg_sp-24,+24);
/*+1921:NOTME*/reg_this=regs.pop();
/*+1922:MOV*/Memcpy(reg_sp-488,reg_sp-88,+24);
/*+1923:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+1924:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+1925:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+1926:CALL*/regs.push(1927);reg_ip=1430;
}
code[1927]=function(){
/*+1927:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1928:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+1929:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+1930:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+1931:CALL*/regs.push(1932);reg_ip=120;
}
code[1932]=function(){
/*+1932:NOTME*/reg_this=regs.pop();
/*+1933:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+1934:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+1935:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+1936:CALL*/regs.push(1937);reg_ip=135;
}
code[1937]=function(){
/*+1937:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+1938:NOTME*/reg_this=regs.pop();
/*+1939:FLDC*/PutFloat(reg_sp-352,+0.500000);
/*+1940:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-456)>>2]);
/*+1941:FADD*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)+GetFloat(reg_sp-352));
/*+1942:FLDC*/PutFloat(reg_sp-328,+0.500000);
/*+1943:I2F*/PutFloat(reg_sp-320,memint32[(reg_sp-460)>>2]);
/*+1944:FSUB*/PutFloat(reg_sp-312, GetFloat(reg_sp-320)-GetFloat(reg_sp-328));
/*+1945:FLDC*/PutFloat(reg_sp-304,+0.500000);
/*+1946:FMUL*/PutFloat(reg_sp-296, GetFloat(reg_sp-312)*GetFloat(reg_sp-304));
/*+1947:FDIV*/PutFloat(reg_sp-288, GetFloat(reg_sp-336)/GetFloat(reg_sp-296));
/*+1948:FLDC*/PutFloat(reg_sp-280,+1.000000);
/*+1949:FSUB*/PutFloat(reg_sp-272, GetFloat(reg_sp-288)-GetFloat(reg_sp-280));
/*+1950:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-272)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-272)>>2)+1];
/*+1951:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+1952:CALL*/regs.push(1953);reg_ip=135;
}
code[1953]=function(){
/*+1953:MOV*/Memcpy(reg_sp-264,reg_sp-24,+24);
/*+1954:NOTME*/reg_this=regs.pop();
/*+1955:LEA*/PutInt(reg_sp-216,reg_sp-264);
/*+1956:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-216)>>2];
/*+1957:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+1958:CALL*/regs.push(1959);reg_ip=102;
}
code[1959]=function(){
/*+1959:MOV*/Memcpy(reg_sp-240,reg_sp-24,+24);
/*+1960:NOTME*/reg_this=regs.pop();
/*+1961:FLDC*/PutFloat(reg_sp-212,+0.500000);
/*+1962:I2F*/PutFloat(reg_sp-204,memint32[(reg_sp-452)>>2]);
/*+1963:FADD*/PutFloat(reg_sp-196, GetFloat(reg_sp-204)+GetFloat(reg_sp-212));
/*+1964:FLDC*/PutFloat(reg_sp-188,+0.500000);
/*+1965:I2F*/PutFloat(reg_sp-180,memint32[(reg_sp-460)>>2]);
/*+1966:FSUB*/PutFloat(reg_sp-172, GetFloat(reg_sp-180)-GetFloat(reg_sp-188));
/*+1967:FLDC*/PutFloat(reg_sp-164,+0.500000);
/*+1968:FMUL*/PutFloat(reg_sp-156, GetFloat(reg_sp-172)*GetFloat(reg_sp-164));
/*+1969:FDIV*/PutFloat(reg_sp-148, GetFloat(reg_sp-196)/GetFloat(reg_sp-156));
/*+1970:FLDC*/PutFloat(reg_sp-140,+1.333000);
/*+1971:FSUB*/PutFloat(reg_sp-132, GetFloat(reg_sp-148)-GetFloat(reg_sp-140));
/*+1972:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-132)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-132)>>2)+1];
/*+1973:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+1974:CALL*/regs.push(1975);reg_ip=135;
}
code[1975]=function(){
/*+1975:MOV*/Memcpy(reg_sp-124,reg_sp-24,+24);
/*+1976:NOTME*/reg_this=regs.pop();
/*+1977:LEA*/PutInt(reg_sp-76,reg_sp-124);
/*+1978:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-76)>>2];
/*+1979:IAM*/regs.push(reg_this);reg_this=reg_sp-240;
/*+1980:CALL*/regs.push(1981);reg_ip=102;
}
code[1981]=function(){
/*+1981:MOV*/Memcpy(reg_sp-100,reg_sp-24,+24);
/*+1982:NOTME*/reg_this=regs.pop();
/*+1983:IAM*/regs.push(reg_this);reg_this=reg_sp-100;
/*+1984:CALL*/regs.push(1985);reg_ip=17;
}
code[1985]=function(){
/*+1985:MOV*/Memcpy(reg_sp-72,reg_sp-24,+24);
/*+1986:NOTME*/reg_this=regs.pop();
/*+1987:MOV*/Memcpy(reg_sp-488,reg_sp-72,+24);
/*+1988:ILDC*/memint32[(reg_sp-32)>>2]=+2
/*+1989:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+1990:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+1991:CALL*/regs.push(1992);reg_ip=1430;
}
code[1992]=function(){
/*+1992:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+1993:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+1994:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+1995:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+1996:CALL*/regs.push(1997);reg_ip=120;
}
code[1997]=function(){
/*+1997:NOTME*/reg_this=regs.pop();
/*+1998:FLDC*/PutFloat(reg_sp-380,+0.250000);
/*+1999:FLDC*/PutFloat(reg_sp-8,+0.250000);
/*+2000:IAM*/regs.push(reg_this);reg_this=reg_sp-448;
/*+2001:CALL*/regs.push(2002);reg_ip=147;
}
code[2002]=function(){
/*+2002:NOTME*/reg_this=regs.pop();
/*+2003:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2004:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2005:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-432)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-432)>>2)+1];
/*+2006:CALL*/regs.push(2007);reg_ip=231;
}
code[2007]=function(){
/*+2007:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2008:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2009:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2010:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-440)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-440)>>2)+1];
/*+2011:CALL*/regs.push(2012);reg_ip=231;
}
code[2012]=function(){
/*+2012:MOV*//*8*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-372)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2013:FLDC*/PutFloat(reg_sp-32,+1.000000);
/*+2014:FLDC*/PutFloat(reg_sp-24,+0.000000);
/*+2015:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-448)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-448)>>2)+1];
/*+2016:CALL*/regs.push(2017);reg_ip=231;
}
code[2017]=function(){
/*+2017:MOV*//*8*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-364)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2018:MOV*//*8*/memint32[(reg_sp-24)>>2]=memint32[(reg_sp-364)>>2];memint32[((reg_sp-24)>>2)+1]=memint32[((reg_sp-364)>>2)+1];
/*+2019:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-372)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-372)>>2)+1];
/*+2020:MOV*//*8*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-380)>>2];memint32[((reg_sp-8)>>2)+1]=memint32[((reg_sp-380)>>2)+1];
/*+2021:NCALL*/SC_rgb();
/*+2022:ILDC*/memint32[(reg_sp-380)>>2]=+12
/*+2023:MUL*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-452)>>2]*memint32[(reg_sp-380)>>2]
/*+2024:ILDC*/memint32[(reg_sp-372)>>2]=+12
/*+2025:MUL*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-456)>>2]*memint32[(reg_sp-372)>>2]
/*+2026:ILDC*/memint32[(reg_sp-16)>>2]=+12
/*+2027:ILDC*/memint32[(reg_sp-12)>>2]=+12
/*+2028:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-368)>>2];
/*+2029:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2030:NCALL*/SC_fillrect();
/*+2031:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-452)>>2];
/*+2032:INC*/memint32[(reg_sp-452)>>2]=memint32[(reg_sp-452)>>2]+1
/*+2033:JMP*/reg_ip=1738;
}
code[2034]=function(){
/*+2034:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-456)>>2];
/*+2035:INC*/memint32[(reg_sp-456)>>2]=memint32[(reg_sp-456)>>2]+1
/*+2036:JMP*/reg_ip=1735;
}
code[2037]=function(){
/*+2037:INT*/int_code=+10;interrupt=true;;reg_ip=2038;
}
code[2038]=function(){
/*+2038:ILDC*/memint32[(reg_sp-660)>>2]=+0
/*+2039:ILDC*/memint32[(reg_sp-672)>>2]=+0
/*+2040:JMP*/reg_ip=2173;
}
code[2041]=function(){
/*+2041:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2042:ADD*/memint32[(reg_sp-424)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2043:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2044:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-424)>>2] >memint32[(reg_sp-380)>>2]
/*+2045:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2047;}else{reg_ip=2046;}
}
code[2046]=function(){
/*+2046:ILDC*/memint32[(reg_sp-424)>>2]=+480;reg_ip=2047;
}
code[2047]=function(){
/*+2047:MOV*//*4*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-672)>>2];;reg_ip=2048;
}
code[2048]=function(){
/*+2048:LS*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2] <memint32[(reg_sp-424)>>2]
/*+2049:JMPZ*/if(memint32[(reg_sp-380)>>2]==0){reg_ip=2141;}else{reg_ip=2050;}
}
code[2050]=function(){
/*+2050:ILDC*/memint32[(reg_sp-416)>>2]=+0;reg_ip=2051;
}
code[2051]=function(){
/*+2051:ILDC*/memint32[(reg_sp-380)>>2]=+640
/*+2052:LS*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-416)>>2] <memint32[(reg_sp-380)>>2]
/*+2053:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2138;}else{reg_ip=2054;}
}
code[2054]=function(){
/*+2054:FLDC*/PutFloat(reg_sp-48,+0.000000);
/*+2055:FLDC*/PutFloat(reg_sp-40,+0.000000);
/*+2056:FLDC*/PutFloat(reg_sp-32,+0.000000);
/*+2057:CALL*/regs.push(2058);reg_ip=10;
}
code[2058]=function(){
/*+2058:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2059:MOV*/Memcpy(reg_sp-412,reg_sp-380,+24);
/*+2060:ILDC*/memint32[(reg_sp-380)>>2]=+2
/*+2061:FLDC*/PutFloat(reg_sp-32,+2.000000);
/*+2062:IAM*/regs.push(reg_this);reg_this=reg_sp-584;
/*+2063:CALL*/regs.push(2064);reg_ip=135;
}
code[2064]=function(){
/*+2064:MOV*/Memcpy(reg_sp-376,reg_sp-24,+24);
/*+2065:NOTME*/reg_this=regs.pop();
/*+2066:FLDC*/PutFloat(reg_sp-352,+240.000000);
/*+2067:I2F*/PutFloat(reg_sp-344,memint32[(reg_sp-420)>>2]);
/*+2068:FDIV*/PutFloat(reg_sp-336, GetFloat(reg_sp-344)/GetFloat(reg_sp-352));
/*+2069:FLDC*/PutFloat(reg_sp-328,+1.000000);
/*+2070:FSUB*/PutFloat(reg_sp-320, GetFloat(reg_sp-336)-GetFloat(reg_sp-328));
/*+2071:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-320)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-320)>>2)+1];
/*+2072:IAM*/regs.push(reg_this);reg_this=reg_sp-536;
/*+2073:CALL*/regs.push(2074);reg_ip=135;
}
code[2074]=function(){
/*+2074:MOV*/Memcpy(reg_sp-312,reg_sp-24,+24);
/*+2075:NOTME*/reg_this=regs.pop();
/*+2076:LEA*/PutInt(reg_sp-264,reg_sp-312);
/*+2077:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-264)>>2];
/*+2078:IAM*/regs.push(reg_this);reg_this=reg_sp-376;
/*+2079:CALL*/regs.push(2080);reg_ip=102;
}
code[2080]=function(){
/*+2080:MOV*/Memcpy(reg_sp-288,reg_sp-24,+24);
/*+2081:NOTME*/reg_this=regs.pop();
/*+2082:FLDC*/PutFloat(reg_sp-260,+240.000000);
/*+2083:I2F*/PutFloat(reg_sp-252,memint32[(reg_sp-416)>>2]);
/*+2084:FDIV*/PutFloat(reg_sp-244, GetFloat(reg_sp-252)/GetFloat(reg_sp-260));
/*+2085:FLDC*/PutFloat(reg_sp-236,+1.333000);
/*+2086:FSUB*/PutFloat(reg_sp-228, GetFloat(reg_sp-244)-GetFloat(reg_sp-236));
/*+2087:MOV*//*8*/memint32[(reg_sp-32)>>2]=memint32[(reg_sp-228)>>2];memint32[((reg_sp-32)>>2)+1]=memint32[((reg_sp-228)>>2)+1];
/*+2088:IAM*/regs.push(reg_this);reg_this=reg_sp-560;
/*+2089:CALL*/regs.push(2090);reg_ip=135;
}
code[2090]=function(){
/*+2090:MOV*/Memcpy(reg_sp-220,reg_sp-24,+24);
/*+2091:NOTME*/reg_this=regs.pop();
/*+2092:LEA*/PutInt(reg_sp-172,reg_sp-220);
/*+2093:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-172)>>2];
/*+2094:IAM*/regs.push(reg_this);reg_this=reg_sp-288;
/*+2095:CALL*/regs.push(2096);reg_ip=102;
}
code[2096]=function(){
/*+2096:MOV*/Memcpy(reg_sp-196,reg_sp-24,+24);
/*+2097:NOTME*/reg_this=regs.pop();
/*+2098:IAM*/regs.push(reg_this);reg_this=reg_sp-196;
/*+2099:CALL*/regs.push(2100);reg_ip=17;
}
code[2100]=function(){
/*+2100:MOV*/Memcpy(reg_sp-168,reg_sp-24,+24);
/*+2101:NOTME*/reg_this=regs.pop();
/*+2102:MOV*/Memcpy(reg_sp-488,reg_sp-168,+24);
/*+2103:ILDC*/memint32[(reg_sp-32)>>2]=+8
/*+2104:LEA*/PutInt(reg_sp-356,reg_sp-512);
/*+2105:MOV*//*4*/memint32[(reg_sp-28)>>2]=memint32[(reg_sp-356)>>2];
/*+2106:CALL*/regs.push(2107);reg_ip=1430;
}
code[2107]=function(){
/*+2107:MOV*/Memcpy(reg_sp-380,reg_sp-24,+24);
/*+2108:LEA*/PutInt(reg_sp-352,reg_sp-380);
/*+2109:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-352)>>2];
/*+2110:IAM*/regs.push(reg_this);reg_this=reg_sp-412;
/*+2111:CALL*/regs.push(2112);reg_ip=120;
}
code[2112]=function(){
/*+2112:NOTME*/reg_this=regs.pop();
/*+2113:LEA*/PutInt(reg_sp-380,reg_sp-388);
/*+2114:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-380)>>2];
/*+2115:LEA*/PutInt(reg_sp-376,reg_sp-412);
/*+2116:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-376)>>2];
/*+2117:CALL*/regs.push(2118);reg_ip=765;
}
code[2118]=function(){
/*+2118:CLDC*/PutChar(reg_sp-385, +255);
/*+2119:ILDC*/memint32[(reg_sp-380)>>2]=+16
/*+2120:C2I*/memint32[(reg_sp-376)>>2]=GetChar(reg_sp-386)
/*+2121:SHL*/memint32[(reg_sp-372)>>2]=memint32[(reg_sp-376)>>2]<<memint32[(reg_sp-380)>>2]
/*+2122:ILDC*/memint32[(reg_sp-368)>>2]=-16777216
/*+2123:OR*/memint32[(reg_sp-364)>>2]=memint32[(reg_sp-368)>>2]|memint32[(reg_sp-372)>>2]
/*+2124:ILDC*/memint32[(reg_sp-360)>>2]=+8
/*+2125:C2I*/memint32[(reg_sp-356)>>2]=GetChar(reg_sp-387)
/*+2126:SHL*/memint32[(reg_sp-352)>>2]=memint32[(reg_sp-356)>>2]<<memint32[(reg_sp-360)>>2]
/*+2127:OR*/memint32[(reg_sp-348)>>2]=memint32[(reg_sp-364)>>2]|memint32[(reg_sp-352)>>2]
/*+2128:C2I*/memint32[(reg_sp-344)>>2]=GetChar(reg_sp-388)
/*+2129:OR*/memint32[(reg_sp-340)>>2]=memint32[(reg_sp-348)>>2]|memint32[(reg_sp-344)>>2]
/*+2130:MOV*//*4*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-340)>>2];
/*+2131:ILDC*/memint32[(reg_sp-12)>>2]=+1
/*+2132:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-420)>>2];
/*+2133:MOV*//*4*/memint32[(reg_sp-4)>>2]=memint32[(reg_sp-416)>>2];
/*+2134:NCALL*/SC_lineH();
/*+2135:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-416)>>2];
/*+2136:INC*/memint32[(reg_sp-416)>>2]=memint32[(reg_sp-416)>>2]+1
/*+2137:JMP*/reg_ip=2051;
}
code[2138]=function(){
/*+2138:MOV*//*4*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-420)>>2];
/*+2139:INC*/memint32[(reg_sp-420)>>2]=memint32[(reg_sp-420)>>2]+1
/*+2140:JMP*/reg_ip=2048;
}
code[2141]=function(){
/*+2141:ILDC*/memint32[(reg_sp-384)>>2]=+5
/*+2142:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2143:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2144:ILDC*/memint32[(reg_sp-372)>>2]=+480
/*+2145:GR*/memint32[(reg_sp-368)>>2]=memint32[(reg_sp-376)>>2] >memint32[(reg_sp-372)>>2]
/*+2146:JMPZ*/if(memint32[(reg_sp-368)>>2]==0){reg_ip=2149;}else{reg_ip=2147;}
}
code[2147]=function(){
/*+2147:ILDC*/memint32[(reg_sp-380)>>2]=+480
/*+2148:SUB*/memint32[(reg_sp-384)>>2]=memint32[(reg_sp-380)>>2]-memint32[(reg_sp-672)>>2];reg_ip=2149;
}
code[2149]=function(){
/*+2149:ILDC*/memint32[(reg_sp-4)>>2]=-1
/*+2150:NCALL*/SC_rgba32();
/*+2151:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2152:ADD*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2153:ILDC*/memint32[(reg_sp-12)>>2]=+640
/*+2154:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-376)>>2];
/*+2155:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2156:NCALL*/SC_lineH();
/*+2157:ILDC*/memint32[(reg_sp-4)>>2]=+0
/*+2158:NCALL*/SC_SetPresentWait();
/*+2159:INT*/int_code=+10;interrupt=true;;reg_ip=2160;
}
code[2160]=function(){
/*+2160:ILDC*/memint32[(reg_sp-380)>>2]=+5
/*+2161:ADD*/memint32[(reg_sp-672)>>2]=memint32[(reg_sp-672)>>2]+memint32[(reg_sp-380)>>2]
/*+2162:MOV*//*4*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2];
/*+2163:ILDC*/memint32[(reg_sp-380)>>2]=+479
/*+2164:GR*/memint32[(reg_sp-376)>>2]=memint32[(reg_sp-672)>>2] >memint32[(reg_sp-380)>>2]
/*+2165:JMPZ*/if(memint32[(reg_sp-376)>>2]==0){reg_ip=2173;}else{reg_ip=2166;}
}
code[2166]=function(){
/*+2166:NCALL*/SC_Time();
/*+2167:MOV*//*8*/memint32[(reg_sp-380)>>2]=memint32[(reg_sp-8)>>2];memint32[((reg_sp-380)>>2)+1]=memint32[((reg_sp-8)>>2)+1];
/*+2168:FSUB*/PutFloat(reg_sp-372, GetFloat(reg_sp-380)-GetFloat(reg_sp-732));
/*+2169:MOV*//*8*/memint32[(reg_sp-16)>>2]=memint32[(reg_sp-372)>>2];memint32[((reg_sp-16)>>2)+1]=memint32[((reg_sp-372)>>2)+1];
/*+2170:ILDC*/memint32[(reg_sp-8)>>2]=+328
/*+2171:NCALL*/SC_printf();
/*+2172:JMP*/reg_ip=2174;
}
code[2173]=function(){
/*+2173:JMP*/reg_ip=1674;
}
code[2174]=function(){
/*+2174:ILDC*/memint32[(reg_sp-744)>>2]=+0
/*+2175:ADDSP*/reg_sp+=-740;
/*+2176:RET*/reg_ip=regs.pop();
}
code[2177]=function(){
/*+2177:ADDSP*/reg_sp+=+4;
/*+2178:MOV*/Memcpy(+724,+64,+192);
/*+2179:MOV*/Memcpy(+916,+256,+72);
/*+2180:CALL*/regs.push(2181);reg_ip=1549;
}
code[2181]=function(){
/*+2181:MOV*//*4*/memint32[(reg_sp-8)>>2]=memint32[(reg_sp-4)>>2];
/*+2182:ADDSP*/reg_sp+=-4;
/*+2183:FIN*/interrupt=true;quit=true;
}
let start_addr=2177
let start_rsp=1340
