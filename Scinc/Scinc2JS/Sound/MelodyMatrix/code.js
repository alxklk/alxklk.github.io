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
0, 8, 6, 7, 6, 0, 4, 3, 5, 6, 6, 0, 2, 1, 2, 1,
\0, 0, 1, 0, 2, 0, 3, 0, 1, 0, 2, 0, 3, 0, 1, 2,
0, \0, 0, 1, 2, 0, 4, 2, 1, 0, 1, 2, 0, 3, 4, 2,
0, 0, \0, 2, 4, 3, 2, 3, 4, 2, 3, 2, 4, 3, 2, 3,
3, 2, 3, \0, \0, \0, \0,  , \4, Z, p, @, \0, \0, \0, \-96,
\-19, R, q, @, \0, \0, \0, \-32, \-93, Z, r, @, \0, \0, \0, @,
\8, r, s, @, \0, \0, \0, @, \12, \-102, t, @, \0, \0, \0, \-32,
\-91, \-45, u, @, \0, \0, \0, `, \-25, \31, w, @, \0, \0, \0, \-128,
\-21, , x, @, \0, \0, \0, @, \-31, \-12, y, @, \0, \0, \0, \0,
\0, \-128, {, @, \0, \0, \0, \-64, \-97, ", }, @, \0, \0, \0, \-64,
 , \-34, ~, @, I, n, i, t,  , e, c, h, o, \10, \0, O,
v, e, r, f, l, o, w, \10, \0, T, i, m, e,  , %, f,
\0, P, o, l, y,  , %, i, \0, \10, \0, %, c, \0, \-1, \-1,
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
48, 56, 54, 55, 54, 48, 52, 51, 53, 54, 54, 48, 50, 49, 50, 49,
0, 48, 49, 48, 50, 48, 51, 48, 49, 48, 50, 48, 51, 48, 49, 50,
48, 0, 48, 49, 50, 48, 52, 50, 49, 48, 49, 50, 48, 51, 52, 50,
48, 48, 0, 50, 52, 51, 50, 51, 52, 50, 51, 50, 52, 51, 50, 51,
51, 50, 51, 0, 0, 0, 0, 32, 4, 90, 112, 64, 0, 0, 0, 160,
237, 82, 113, 64, 0, 0, 0, 224, 163, 90, 114, 64, 0, 0, 0, 64,
8, 114, 115, 64, 0, 0, 0, 64, 12, 154, 116, 64, 0, 0, 0, 224,
165, 211, 117, 64, 0, 0, 0, 96, 231, 31, 119, 64, 0, 0, 0, 128,
235, 127, 120, 64, 0, 0, 0, 64, 225, 244, 121, 64, 0, 0, 0, 0,
0, 128, 123, 64, 0, 0, 0, 192, 159, 34, 125, 64, 0, 0, 0, 192,
32, 222, 126, 64, 73, 110, 105, 116, 32, 101, 99, 104, 111, 10, 0, 79,
118, 101, 114, 102, 108, 111, 119, 10, 0, 84, 105, 109, 101, 32, 37, 102,
0, 80, 111, 108, 121, 32, 37, 105, 0, 10, 0, 37, 99, 0, 255, 255,
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
/*+10:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+11:ILDC*/memint32[reg_sp4-6]=+1103515245
/*+12:MUL*/memint32[reg_sp4-5]=Math.imul(GetInt(memint32[(reg_sp4-8)]),memint32[reg_sp4-6]);
/*+13:ILDC*/memint32[reg_sp4-4]=+12345
/*+14:ADD*/memint32[reg_sp4-3]=memint32[reg_sp4-5]+memint32[reg_sp4-4]
/*+15:ILDC*/memint32[reg_sp4-2]=+134217727
/*+16:MOD*/PutInt(memint32[(reg_sp4-8)],memint32[reg_sp4-3] %memint32[reg_sp4-2])
/*+17:MOV*/{let addr=memint32[(reg_sp4-8)];mem8.copyWithin(reg_sp-28,addr,addr+4);}
/*+18:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+19:RET*/reg_ip=regs.pop();
}
/*20*/
code[2]=function(){
/*+20:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+21:ILDC*/memint32[reg_sp4-8]=+0;reg_ip=3;
}
/*22*/
code[3]=function(){
/*+22:ILDC*/memint32[reg_sp4-7]=+16
/*+23:LS*/memint32[reg_sp4-6]=memint32[reg_sp4-8] <memint32[reg_sp4-7]
/*+24:JMPZ*/if(memint32[reg_sp4-6]==0){reg_ip=5;}else{reg_ip=4;}
}
/*25*/
code[4]=function(){
/*+25:LEA*/memint32[reg_sp4-7]=+276
/*+26:IDX*/memint32[reg_sp4-7]=memint32[reg_sp4-7]+memint32[reg_sp4-8]*1
/*+27:LEA*/memint32[reg_sp4-5]=+64
/*+28:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-8]*1
/*+29:ILDC*/memint32[reg_sp4-3]=+48
/*+30:C2I*/memint32[reg_sp4-2]=GetChar(memint32[(reg_sp4-5)])
/*+31:SUB*/memint32[reg_sp4-1]=memint32[reg_sp4-2]-memint32[reg_sp4-3]
/*+32:I2C*/PutChar(memint32[(reg_sp4-7)],memint32[reg_sp4-1]);
/*+33:LEA*/memint32[reg_sp4-7]=+292
/*+34:IDX*/memint32[reg_sp4-7]=memint32[reg_sp4-7]+memint32[reg_sp4-8]*1
/*+35:LEA*/memint32[reg_sp4-5]=+81
/*+36:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-8]*1
/*+37:ILDC*/memint32[reg_sp4-3]=+48
/*+38:C2I*/memint32[reg_sp4-2]=GetChar(memint32[(reg_sp4-5)])
/*+39:SUB*/memint32[reg_sp4-1]=memint32[reg_sp4-2]-memint32[reg_sp4-3]
/*+40:I2C*/PutChar(memint32[(reg_sp4-7)],memint32[reg_sp4-1]);
/*+41:LEA*/memint32[reg_sp4-7]=+308
/*+42:IDX*/memint32[reg_sp4-7]=memint32[reg_sp4-7]+memint32[reg_sp4-8]*1
/*+43:LEA*/memint32[reg_sp4-5]=+98
/*+44:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-8]*1
/*+45:ILDC*/memint32[reg_sp4-3]=+48
/*+46:C2I*/memint32[reg_sp4-2]=GetChar(memint32[(reg_sp4-5)])
/*+47:SUB*/memint32[reg_sp4-1]=memint32[reg_sp4-2]-memint32[reg_sp4-3]
/*+48:I2C*/PutChar(memint32[(reg_sp4-7)],memint32[reg_sp4-1]);
/*+49:LEA*/memint32[reg_sp4-7]=+324
/*+50:IDX*/memint32[reg_sp4-7]=memint32[reg_sp4-7]+memint32[reg_sp4-8]*1
/*+51:LEA*/memint32[reg_sp4-5]=+115
/*+52:IDX*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+memint32[reg_sp4-8]*1
/*+53:ILDC*/memint32[reg_sp4-3]=+48
/*+54:C2I*/memint32[reg_sp4-2]=GetChar(memint32[(reg_sp4-5)])
/*+55:SUB*/memint32[reg_sp4-1]=memint32[reg_sp4-2]-memint32[reg_sp4-3]
/*+56:I2C*/PutChar(memint32[(reg_sp4-7)],memint32[reg_sp4-1]);
/*+57:MOV*//*4*/memint32[(reg_sp4-7)]=memint32[(reg_sp4-8)];
/*+58:INC*/memint32[reg_sp4-8]=memint32[reg_sp4-8]+1
/*+59:JMP*/reg_ip=3;
}
/*60*/
code[5]=function(){
/*+60:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+61:RET*/reg_ip=regs.pop();
}
/*62*/
code[6]=function(){
/*+62:ADDSP*/reg_sp+=+72;reg_sp4=reg_sp>>2;
/*+63:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+64:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+65:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+66:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+67:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+68:NCALL*/SC_sin();
/*+69:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+70:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+71:FMUL*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+72:MOV*//*8*/{let dst=(reg_sp4-20);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+73:ADDSP*/reg_sp+=-72;reg_sp4=reg_sp>>2;
/*+74:RET*/reg_ip=regs.pop();
}
/*75*/
code[7]=function(){
/*+75:ADDSP*/reg_sp+=+88;reg_sp4=reg_sp>>2;
/*+76:FLDC*/{let addr=(reg_sp4-22);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+77:FLS*/memint32[reg_sp4-20]=GetFloat4(reg_sp4-26) <GetFloat4(reg_sp4-22)
/*+78:JMPZ*/if(memint32[reg_sp4-20]==0){reg_ip=9;}else{reg_ip=8;}
}
/*79*/
code[8]=function(){
/*+79:FLDC*/{let addr=(reg_sp4-22);cvtflt64[0]=+0.200000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+80:FDIV*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-26)/GetFloat4(reg_sp4-22);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+81:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+82:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+83:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+84:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+85:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+86:NCALL*/SC_sin();
/*+87:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+88:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+89:FMUL*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+90:MOV*//*8*/{let dst=(reg_sp4-24);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+91:ADDSP*/reg_sp+=-88;reg_sp4=reg_sp>>2;
/*+92:RET*/reg_ip=regs.pop();
}
/*93*/
code[9]=function(){
/*+93:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+94:ADDSP*/reg_sp+=-88;reg_sp4=reg_sp>>2;
/*+95:RET*/reg_ip=regs.pop();
}
/*96*/
code[10]=function(){
/*+96:ADDSP*/reg_sp+=+28;reg_sp4=reg_sp>>2;
/*+97:FDIV*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-11)/GetFloat4(reg_sp4-13);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+98:F2I*/memint32[reg_sp4-7]=GetFloat4(reg_sp4-6)
/*+99:I2F*/{let addr=(reg_sp4-6);cvtflt64[0]=memint32[reg_sp4-7];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+100:FMUL*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-13)*GetFloat4(reg_sp4-6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+101:FSUB*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-11)-GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+102:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+103:ADDSP*/reg_sp+=-28;reg_sp4=reg_sp>>2;
/*+104:RET*/reg_ip=regs.pop();
}
/*105*/
code[11]=function(){
/*+105:ADDSP*/reg_sp+=+244;reg_sp4=reg_sp>>2;
/*+106:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+107:FMUL*/{let addr=(reg_sp4-65);cvtflt64[0]=GetFloat4(reg_sp4-65)*GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+108:MOV*//*8*/{let dst=(reg_sp4-50);let src=(reg_sp4-65);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+109:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+4096.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+110:FDIV*/{let addr=(reg_sp4-50);cvtflt64[0]=GetFloat4(reg_sp4-65)/GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+111:F2I*/memint32[reg_sp4-61]=GetFloat4(reg_sp4-50)
/*+112:ILDC*/memint32[reg_sp4-52]=+15
/*+113:AND*/memint32[reg_sp4-61]=memint32[reg_sp4-61]&memint32[reg_sp4-52]
/*+114:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+65536.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+115:FDIV*/{let addr=(reg_sp4-50);cvtflt64[0]=GetFloat4(reg_sp4-65)/GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+116:F2I*/memint32[reg_sp4-60]=GetFloat4(reg_sp4-50)
/*+117:ILDC*/memint32[reg_sp4-52]=+15
/*+118:AND*/memint32[reg_sp4-60]=memint32[reg_sp4-60]&memint32[reg_sp4-52]
/*+119:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+65536.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+120:FDIV*/{let addr=(reg_sp4-50);cvtflt64[0]=GetFloat4(reg_sp4-65)/GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+121:FLDC*/{let addr=(reg_sp4-48);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+122:FDIV*/{let addr=(reg_sp4-46);cvtflt64[0]=GetFloat4(reg_sp4-50)/GetFloat4(reg_sp4-48);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+123:F2I*/memint32[reg_sp4-59]=GetFloat4(reg_sp4-46)
/*+124:ILDC*/memint32[reg_sp4-52]=+15
/*+125:AND*/memint32[reg_sp4-59]=memint32[reg_sp4-59]&memint32[reg_sp4-52]
/*+126:LEA*/memint32[reg_sp4-52]=+276
/*+127:IDX*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-61]*1
/*+128:C2I*/memint32[reg_sp4-50]=GetChar(memint32[(reg_sp4-52)])
/*+129:I2F*/{let addr=(reg_sp4-49);cvtflt64[0]=memint32[reg_sp4-50];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+130:FMUL*/{let addr=(reg_sp4-47);cvtflt64[0]=GetFloat4(reg_sp4-65)*GetFloat4(reg_sp4-49);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+131:LEA*/memint32[reg_sp4-45]=+308
/*+132:IDX*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-60]*1
/*+133:C2I*/memint32[reg_sp4-43]=GetChar(memint32[(reg_sp4-45)])
/*+134:I2F*/{let addr=(reg_sp4-42);cvtflt64[0]=memint32[reg_sp4-43];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+135:FMUL*/{let addr=(reg_sp4-58);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-42);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+136:LEA*/memint32[reg_sp4-52]=+292
/*+137:IDX*/memint32[reg_sp4-52]=memint32[reg_sp4-52]+memint32[reg_sp4-61]*1
/*+138:C2I*/memint32[reg_sp4-50]=GetChar(memint32[(reg_sp4-52)])
/*+139:I2F*/{let addr=(reg_sp4-49);cvtflt64[0]=memint32[reg_sp4-50];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+140:FMUL*/{let addr=(reg_sp4-47);cvtflt64[0]=GetFloat4(reg_sp4-65)*GetFloat4(reg_sp4-49);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+141:LEA*/memint32[reg_sp4-45]=+324
/*+142:IDX*/memint32[reg_sp4-45]=memint32[reg_sp4-45]+memint32[reg_sp4-59]*1
/*+143:C2I*/memint32[reg_sp4-43]=GetChar(memint32[(reg_sp4-45)])
/*+144:I2F*/{let addr=(reg_sp4-42);cvtflt64[0]=memint32[reg_sp4-43];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+145:FMUL*/{let addr=(reg_sp4-56);cvtflt64[0]=GetFloat4(reg_sp4-47)*GetFloat4(reg_sp4-42);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+146:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+4096.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+147:FDIV*/{let addr=(reg_sp4-54);cvtflt64[0]=GetFloat4(reg_sp4-65)/GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+148:F2I*/memint32[reg_sp4-50]=GetFloat4(reg_sp4-54)
/*+149:I2F*/{let addr=(reg_sp4-52);cvtflt64[0]=memint32[reg_sp4-50];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+150:FSUB*/{let addr=(reg_sp4-54);cvtflt64[0]=GetFloat4(reg_sp4-54)-GetFloat4(reg_sp4-52);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+151:MOV*//*8*/{let dst=(reg_sp4-49);let src=(reg_sp4-54);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+152:FLDC*/{let addr=(reg_sp4-52);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+153:FSUB*/{let addr=(reg_sp4-54);cvtflt64[0]=GetFloat4(reg_sp4-52)-GetFloat4(reg_sp4-54);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+154:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1024.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+155:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+156:CALL*/regs.push(12);reg_ip=10;
}
/*157*/
code[12]=function(){
/*+157:MOV*//*8*/{let dst=(reg_sp4-52);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+158:FLDC*/{let addr=(reg_sp4-50);cvtflt64[0]=+1024.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+159:FDIV*/{let addr=(reg_sp4-48);cvtflt64[0]=GetFloat4(reg_sp4-52)/GetFloat4(reg_sp4-50);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+160:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-48);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+161:CALL*/regs.push(13);reg_ip=6;
}
/*162*/
code[13]=function(){
/*+162:MOV*//*8*/{let dst=(reg_sp4-46);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+163:FLDC*/{let addr=(reg_sp4-44);cvtflt64[0]=+0.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+164:FMUL*/{let addr=(reg_sp4-42);cvtflt64[0]=GetFloat4(reg_sp4-46)*GetFloat4(reg_sp4-44);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+165:FMUL*/{let addr=(reg_sp4-40);cvtflt64[0]=GetFloat4(reg_sp4-42)*GetFloat4(reg_sp4-54);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+166:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+167:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-58);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+168:CALL*/regs.push(14);reg_ip=10;
}
/*169*/
code[14]=function(){
/*+169:MOV*//*8*/{let dst=(reg_sp4-38);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+170:FLDC*/{let addr=(reg_sp4-36);cvtflt64[0]=+256.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+171:FDIV*/{let addr=(reg_sp4-34);cvtflt64[0]=GetFloat4(reg_sp4-38)/GetFloat4(reg_sp4-36);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+172:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-34);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+173:CALL*/regs.push(15);reg_ip=6;
}
/*174*/
code[15]=function(){
/*+174:MOV*//*8*/{let dst=(reg_sp4-32);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+175:FLDC*/{let addr=(reg_sp4-30);cvtflt64[0]=+0.170000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+176:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-32)*GetFloat4(reg_sp4-30);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+177:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-28)*GetFloat4(reg_sp4-54);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+178:FSUB*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-40)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+179:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1024.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+180:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-56);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+181:CALL*/regs.push(16);reg_ip=10;
}
/*182*/
code[16]=function(){
/*+182:MOV*//*8*/{let dst=(reg_sp4-22);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+183:FLDC*/{let addr=(reg_sp4-20);cvtflt64[0]=+1024.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+184:FDIV*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-22)/GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+185:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+186:CALL*/regs.push(17);reg_ip=7;
}
/*187*/
code[17]=function(){
/*+187:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+188:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.350000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+189:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+190:FMUL*/{let addr=(reg_sp4-10);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-54);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+191:FSUB*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-24)-GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+192:MOV*//*8*/{let dst=(reg_sp4-63);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+193:ADDSP*/reg_sp+=-244;reg_sp4=reg_sp>>2;
/*+194:RET*/reg_ip=regs.pop();
}
/*195*/
code[18]=function(){
/*+195:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+196:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+197:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+198:NCALL*/SC_M();
/*+199:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+200:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+201:NCALL*/SC_l();
/*+202:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+203:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+204:NCALL*/SC_l();
/*+205:FNEG*/{let addr=(reg_sp4-6);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+206:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+207:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+208:NCALL*/SC_l();
/*+209:NCALL*/SC_close();
/*+210:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+211:RET*/reg_ip=regs.pop();
}
/*212*/
code[19]=function(){
/*+212:ADDSP*/reg_sp+=+112;reg_sp4=reg_sp>>2;
/*+213:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+214:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+215:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+216:NCALL*/SC_M();
/*+217:FLDC*/{let addr=(reg_sp4-28);cvtflt64[0]=+0.550000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+218:FADD*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+219:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+220:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+221:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+222:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+223:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+224:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+225:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+226:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+227:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+228:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+229:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+230:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+231:NCALL*/SC_C();
/*+232:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+233:FSUB*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+234:FADD*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+235:FSUB*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+236:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+237:FADD*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)+GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+238:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+239:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+240:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+241:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+242:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+243:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+244:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+245:NCALL*/SC_C();
/*+246:FSUB*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+247:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+248:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-24);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+249:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+250:FSUB*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-30)-GetFloat4(reg_sp4-20);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+251:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+252:FSUB*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+253:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+254:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+255:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+256:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+257:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+258:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-26);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+259:NCALL*/SC_C();
/*+260:FMUL*/{let addr=(reg_sp4-26);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+261:FADD*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-26);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+262:FSUB*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+263:FADD*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+264:FMUL*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-34)*GetFloat4(reg_sp4-28);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+265:FSUB*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-32)-GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+266:FADD*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-30)+GetFloat4(reg_sp4-34);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+267:MOV*//*8*/{let dst=(reg_sp4-12);let src=(reg_sp4-32);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+268:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+269:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+270:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-20);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+271:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-22);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+272:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-24);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+273:NCALL*/SC_C();
/*+274:NCALL*/SC_close();
/*+275:ADDSP*/reg_sp+=-112;reg_sp4=reg_sp>>2;
/*+276:RET*/reg_ip=regs.pop();
}
/*277*/
code[20]=function(){
/*+277:ADDSP*/reg_sp+=+80;reg_sp4=reg_sp>>2;
/*+278:ILDC*/memint32[reg_this4+6]=-1
/*+279:MOV*//*4*/memint32[(reg_this4+5)]=memint32[(reg_this4+6)];
/*+280:SUB*/memint32[reg_sp4-18]=memint32[+85]-memint32[reg_this4+1]
/*+281:ILDC*/memint32[reg_sp4-17]=+14
/*+282:DIV*/memint32[reg_sp4-20]=memint32[reg_sp4-18]/memint32[reg_sp4-17]
/*+283:SUB*/memint32[reg_sp4-18]=memint32[+86]-memint32[reg_this4+2]
/*+284:ILDC*/memint32[reg_sp4-17]=+14
/*+285:DIV*/memint32[reg_sp4-19]=memint32[reg_sp4-18]/memint32[reg_sp4-17]
/*+286:ILDC*/memint32[reg_sp4-18]=+0
/*+287:GE*/memint32[reg_sp4-17]=memint32[reg_sp4-20]>=memint32[reg_sp4-18]
/*+288:ILDC*/memint32[reg_sp4-16]=+16
/*+289:LS*/memint32[reg_sp4-15]=memint32[reg_sp4-20] <memint32[reg_sp4-16]
/*+290:LAND*/memint32[reg_sp4-14]=memint32[reg_sp4-17]&&memint32[reg_sp4-15]
/*+291:ILDC*/memint32[reg_sp4-13]=+0
/*+292:GE*/memint32[reg_sp4-12]=memint32[reg_sp4-19]>=memint32[reg_sp4-13]
/*+293:LAND*/memint32[reg_sp4-11]=memint32[reg_sp4-14]&&memint32[reg_sp4-12]
/*+294:ILDC*/memint32[reg_sp4-10]=+10
/*+295:LS*/memint32[reg_sp4-9]=memint32[reg_sp4-19] <memint32[reg_sp4-10]
/*+296:LAND*/memint32[reg_sp4-8]=memint32[reg_sp4-11]&&memint32[reg_sp4-9]
/*+297:JMPZ*/if(memint32[reg_sp4-8]==0){reg_ip=23;}else{reg_ip=21;}
}
/*298*/
code[21]=function(){
/*+298:MOV*//*4*/memint32[(reg_this4+5)]=memint32[(reg_sp4-20)];
/*+299:MOV*//*4*/memint32[(reg_this4+6)]=memint32[(reg_sp4-19)];
/*+300:ILDC*/memint32[reg_sp4-18]=+1
/*+301:AND*/memint32[reg_sp4-17]=memint32[+87]&memint32[reg_sp4-18]
/*+302:ILDC*/memint32[reg_sp4-16]=+1
/*+303:EQ*/memint32[reg_sp4-15]=memint32[reg_sp4-17]==memint32[reg_sp4-16]
/*+304:ILDC*/memint32[reg_sp4-14]=+1
/*+305:AND*/memint32[reg_sp4-13]=memint32[+88]&memint32[reg_sp4-14]
/*+306:ILDC*/memint32[reg_sp4-12]=+0
/*+307:EQ*/memint32[reg_sp4-11]=memint32[reg_sp4-13]==memint32[reg_sp4-12]
/*+308:LAND*/memint32[reg_sp4-10]=memint32[reg_sp4-15]&&memint32[reg_sp4-11]
/*+309:ILDC*/memint32[reg_sp4-9]=+1
/*+310:AND*/memint32[reg_sp4-8]=memint32[+87]&memint32[reg_sp4-9]
/*+311:ILDC*/memint32[reg_sp4-7]=+1
/*+312:EQ*/memint32[reg_sp4-6]=memint32[reg_sp4-8]==memint32[reg_sp4-7]
/*+313:NE*/memint32[reg_sp4-5]=memint32[+85]!=memint32[+89]
/*+314:NE*/memint32[reg_sp4-4]=memint32[+86]!=memint32[+90]
/*+315:LOR*/memint32[reg_sp4-3]=memint32[reg_sp4-5]||memint32[reg_sp4-4]
/*+316:LAND*/memint32[reg_sp4-2]=memint32[reg_sp4-6]&&memint32[reg_sp4-3]
/*+317:LOR*/memint32[reg_sp4-1]=memint32[reg_sp4-10]||memint32[reg_sp4-2]
/*+318:JMPZ*/if(memint32[reg_sp4-1]==0){reg_ip=23;}else{reg_ip=22;}
}
/*319*/
code[22]=function(){
/*+319:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+0)];
/*+320:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-20]*1
/*+321:I2C*/PutChar(memint32[(reg_sp4-18)],memint32[reg_sp4-19]);;reg_ip=23;
}
/*322*/
code[23]=function(){
/*+322:ADDSP*/reg_sp+=-80;reg_sp4=reg_sp>>2;
/*+323:RET*/reg_ip=regs.pop();
}
/*324*/
code[24]=function(){
/*+324:ADDSP*/reg_sp+=+128;reg_sp4=reg_sp>>2;
/*+325:NCALL*/SC_clear();
/*+326:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_this4+2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+327:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_this4+1];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+328:NCALL*/SC_M();
/*+329:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+330:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+224.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+331:NCALL*/SC_l();
/*+332:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+140.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+333:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+334:NCALL*/SC_l();
/*+335:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+336:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-224.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+337:NCALL*/SC_l();
/*+338:NCALL*/SC_close();
/*+339:NCALL*/SC_fin();
/*+340:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+341:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+342:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+343:NCALL*/SC_rgb();
/*+344:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+345:NCALL*/SC_alpha();
/*+346:NCALL*/SC_fill1();
/*+347:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+348:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+349:NCALL*/SC_width();
/*+350:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+351:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+352:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+353:NCALL*/SC_rgb();
/*+354:NCALL*/SC_stroke();
/*+355:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+356:NCALL*/SC_alpha();
/*+357:NCALL*/SC_clear();
/*+358:ILDC*/memint32[reg_sp4-32]=+0;reg_ip=25;
}
/*359*/
code[25]=function(){
/*+359:ILDC*/memint32[reg_sp4-25]=+16
/*+360:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-32] <memint32[reg_sp4-25]
/*+361:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=28;}else{reg_ip=26;}
}
/*362*/
code[26]=function(){
/*+362:ILDC*/memint32[reg_sp4-25]=+14
/*+363:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_sp4-32],memint32[reg_sp4-25]);
/*+364:ILDC*/memint32[reg_sp4-23]=+7
/*+365:ADD*/memint32[reg_sp4-22]=memint32[reg_sp4-24]+memint32[reg_sp4-23]
/*+366:ADD*/memint32[reg_sp4-21]=memint32[reg_sp4-22]+memint32[reg_this4+1]
/*+367:MOV*//*4*/memint32[(reg_sp4-20)]=memint32[(reg_this4+0)];
/*+368:IDX*/memint32[reg_sp4-20]=memint32[reg_sp4-20]+memint32[reg_sp4-32]*1
/*+369:ILDC*/memint32[reg_sp4-18]=+14
/*+370:C2I*/memint32[reg_sp4-17]=GetChar(memint32[(reg_sp4-20)])
/*+371:MUL*/memint32[reg_sp4-16]=Math.imul(memint32[reg_sp4-17],memint32[reg_sp4-18]);
/*+372:ILDC*/memint32[reg_sp4-15]=+7
/*+373:ADD*/memint32[reg_sp4-14]=memint32[reg_sp4-16]+memint32[reg_sp4-15]
/*+374:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-14]+memint32[reg_this4+2]
/*+375:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+376:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-13];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+377:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-21];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+378:CALL*/regs.push(27);reg_ip=19;
}
/*379*/
code[27]=function(){
/*+379:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-32)];
/*+380:INC*/memint32[reg_sp4-32]=memint32[reg_sp4-32]+1
/*+381:JMP*/reg_ip=25;
}
/*382*/
code[28]=function(){
/*+382:NCALL*/SC_fin();
/*+383:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+384:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.100000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+385:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+386:NCALL*/SC_rgb();
/*+387:NCALL*/SC_fill1();
/*+388:NCALL*/SC_clear();
/*+389:ILDC*/memint32[reg_sp4-31]=+0;reg_ip=29;
}
/*390*/
code[29]=function(){
/*+390:ILDC*/memint32[reg_sp4-25]=+16
/*+391:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-31] <memint32[reg_sp4-25]
/*+392:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=31;}else{reg_ip=30;}
}
/*393*/
code[30]=function(){
/*+393:ILDC*/memint32[reg_sp4-25]=+14
/*+394:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_sp4-31],memint32[reg_sp4-25]);
/*+395:ILDC*/memint32[reg_sp4-23]=+7
/*+396:ADD*/memint32[reg_sp4-22]=memint32[reg_sp4-24]+memint32[reg_sp4-23]
/*+397:ADD*/memint32[reg_sp4-21]=memint32[reg_sp4-22]+memint32[reg_this4+1]
/*+398:ILDC*/memint32[reg_sp4-20]=+1
/*+399:SUB*/memint32[reg_sp4-19]=memint32[reg_sp4-21]-memint32[reg_sp4-20]
/*+400:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+0)];
/*+401:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-31]*1
/*+402:ILDC*/memint32[reg_sp4-16]=+14
/*+403:C2I*/memint32[reg_sp4-15]=GetChar(memint32[(reg_sp4-18)])
/*+404:MUL*/memint32[reg_sp4-14]=Math.imul(memint32[reg_sp4-15],memint32[reg_sp4-16]);
/*+405:ILDC*/memint32[reg_sp4-13]=+7
/*+406:ADD*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+memint32[reg_sp4-13]
/*+407:ADD*/memint32[reg_sp4-11]=memint32[reg_sp4-12]+memint32[reg_this4+2]
/*+408:ILDC*/memint32[reg_sp4-10]=+1
/*+409:SUB*/memint32[reg_sp4-9]=memint32[reg_sp4-11]-memint32[reg_sp4-10]
/*+410:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+411:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+412:NCALL*/SC_M();
/*+413:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+414:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+415:NCALL*/SC_l();
/*+416:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-31)];
/*+417:INC*/memint32[reg_sp4-31]=memint32[reg_sp4-31]+1
/*+418:JMP*/reg_ip=29;
}
/*419*/
code[31]=function(){
/*+419:NCALL*/SC_fin();
/*+420:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+421:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+422:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+423:NCALL*/SC_rgb();
/*+424:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+425:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+6.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+426:NCALL*/SC_width();
/*+427:NCALL*/SC_stroke();
/*+428:NCALL*/SC_clear();
/*+429:ILDC*/memint32[reg_sp4-30]=+0;reg_ip=32;
}
/*430*/
code[32]=function(){
/*+430:ILDC*/memint32[reg_sp4-25]=+16
/*+431:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-30] <memint32[reg_sp4-25]
/*+432:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=34;}else{reg_ip=33;}
}
/*433*/
code[33]=function(){
/*+433:ILDC*/memint32[reg_sp4-25]=+14
/*+434:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_sp4-30],memint32[reg_sp4-25]);
/*+435:ILDC*/memint32[reg_sp4-23]=+7
/*+436:ADD*/memint32[reg_sp4-22]=memint32[reg_sp4-24]+memint32[reg_sp4-23]
/*+437:ADD*/memint32[reg_sp4-21]=memint32[reg_sp4-22]+memint32[reg_this4+1]
/*+438:ILDC*/memint32[reg_sp4-20]=+2
/*+439:SUB*/memint32[reg_sp4-19]=memint32[reg_sp4-21]-memint32[reg_sp4-20]
/*+440:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+0)];
/*+441:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-30]*1
/*+442:ILDC*/memint32[reg_sp4-16]=+14
/*+443:C2I*/memint32[reg_sp4-15]=GetChar(memint32[(reg_sp4-18)])
/*+444:MUL*/memint32[reg_sp4-14]=Math.imul(memint32[reg_sp4-15],memint32[reg_sp4-16]);
/*+445:ILDC*/memint32[reg_sp4-13]=+7
/*+446:ADD*/memint32[reg_sp4-12]=memint32[reg_sp4-14]+memint32[reg_sp4-13]
/*+447:ADD*/memint32[reg_sp4-11]=memint32[reg_sp4-12]+memint32[reg_this4+2]
/*+448:ILDC*/memint32[reg_sp4-10]=+2
/*+449:SUB*/memint32[reg_sp4-9]=memint32[reg_sp4-11]-memint32[reg_sp4-10]
/*+450:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+451:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+452:NCALL*/SC_M();
/*+453:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+454:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+455:NCALL*/SC_l();
/*+456:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-30)];
/*+457:INC*/memint32[reg_sp4-30]=memint32[reg_sp4-30]+1
/*+458:JMP*/reg_ip=32;
}
/*459*/
code[34]=function(){
/*+459:NCALL*/SC_fin();
/*+460:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+461:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+462:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+463:NCALL*/SC_rgb();
/*+464:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+465:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+466:NCALL*/SC_width();
/*+467:NCALL*/SC_stroke();
/*+468:NCALL*/SC_clear();
/*+469:ILDC*/memint32[reg_sp4-29]=+1;reg_ip=35;
}
/*470*/
code[35]=function(){
/*+470:ILDC*/memint32[reg_sp4-25]=+10
/*+471:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-29] <memint32[reg_sp4-25]
/*+472:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=37;}else{reg_ip=36;}
}
/*473*/
code[36]=function(){
/*+473:ILDC*/memint32[reg_sp4-25]=+14
/*+474:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_sp4-29],memint32[reg_sp4-25]);
/*+475:ADD*/memint32[reg_sp4-23]=memint32[reg_this4+2]+memint32[reg_sp4-24]
/*+476:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-23];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+477:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_this4+1];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+478:NCALL*/SC_M();
/*+479:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+480:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+224.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+481:NCALL*/SC_l();
/*+482:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-29)];
/*+483:INC*/memint32[reg_sp4-29]=memint32[reg_sp4-29]+1
/*+484:JMP*/reg_ip=35;
}
/*485*/
code[37]=function(){
/*+485:ILDC*/memint32[reg_sp4-28]=+1;reg_ip=38;
}
/*486*/
code[38]=function(){
/*+486:ILDC*/memint32[reg_sp4-25]=+16
/*+487:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-28] <memint32[reg_sp4-25]
/*+488:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=40;}else{reg_ip=39;}
}
/*489*/
code[39]=function(){
/*+489:ILDC*/memint32[reg_sp4-25]=+14
/*+490:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_sp4-28],memint32[reg_sp4-25]);
/*+491:ADD*/memint32[reg_sp4-23]=memint32[reg_this4+1]+memint32[reg_sp4-24]
/*+492:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_this4+2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+493:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-23];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+494:NCALL*/SC_M();
/*+495:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+140.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+496:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+497:NCALL*/SC_l();
/*+498:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-28)];
/*+499:INC*/memint32[reg_sp4-28]=memint32[reg_sp4-28]+1
/*+500:JMP*/reg_ip=38;
}
/*501*/
code[40]=function(){
/*+501:NCALL*/SC_fin();
/*+502:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+503:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+504:NCALL*/SC_width();
/*+505:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+506:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+507:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.800000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+508:NCALL*/SC_rgb();
/*+509:NCALL*/SC_stroke();
/*+510:NCALL*/SC_clear();
/*+511:FLDC*/{let addr=(reg_sp4-27);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+512:ILDC*/memint32[reg_sp4-25]=+224
/*+513:I2F*/{let addr=(reg_sp4-24);cvtflt64[0]=memint32[reg_sp4-25];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+514:FMUL*/{let addr=(reg_sp4-22);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-27);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+515:I2F*/{let addr=(reg_sp4-20);cvtflt64[0]=memint32[reg_this4+1];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+516:FADD*/{let addr=(reg_sp4-18);cvtflt64[0]=GetFloat4(reg_sp4-20)+GetFloat4(reg_sp4-22);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+517:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_this4+2];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+518:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-18);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+519:NCALL*/SC_M();
/*+520:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+140.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+521:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+522:NCALL*/SC_l();
/*+523:NCALL*/SC_fin();
/*+524:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+525:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+526:NCALL*/SC_width();
/*+527:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+528:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+529:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+530:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+531:NCALL*/SC_rgba();
/*+532:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+533:NCALL*/SC_alpha();
/*+534:NCALL*/SC_stroke();
/*+535:ILDC*/memint32[reg_sp4-25]=+0
/*+536:GE*/memint32[reg_sp4-24]=memint32[reg_this4+5]>=memint32[reg_sp4-25]
/*+537:ILDC*/memint32[reg_sp4-23]=+0
/*+538:GE*/memint32[reg_sp4-22]=memint32[reg_this4+6]>=memint32[reg_sp4-23]
/*+539:LAND*/memint32[reg_sp4-21]=memint32[reg_sp4-24]&&memint32[reg_sp4-22]
/*+540:JMPZ*/if(memint32[reg_sp4-21]==0){reg_ip=43;}else{reg_ip=41;}
}
/*541*/
code[41]=function(){
/*+541:NCALL*/SC_clear();
/*+542:ILDC*/memint32[reg_sp4-25]=+14
/*+543:MUL*/memint32[reg_sp4-24]=Math.imul(memint32[reg_this4+5],memint32[reg_sp4-25]);
/*+544:ADD*/memint32[reg_sp4-23]=memint32[reg_sp4-24]+memint32[reg_this4+1]
/*+545:ILDC*/memint32[reg_sp4-22]=+14
/*+546:MUL*/memint32[reg_sp4-21]=Math.imul(memint32[reg_this4+6],memint32[reg_sp4-22]);
/*+547:ADD*/memint32[reg_sp4-20]=memint32[reg_sp4-21]+memint32[reg_this4+2]
/*+548:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+549:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+14.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+550:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_sp4-20];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+551:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-23];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+552:CALL*/regs.push(42);reg_ip=18;
}
/*553*/
code[42]=function(){
/*+553:NCALL*/SC_fin();
/*+554:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+555:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+556:NCALL*/SC_width();
/*+557:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+558:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+559:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+560:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+561:NCALL*/SC_rgba();
/*+562:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+563:NCALL*/SC_alpha();
/*+564:NCALL*/SC_stroke();;reg_ip=43;
}
/*565*/
code[43]=function(){
/*+565:ADDSP*/reg_sp+=-128;reg_sp4=reg_sp>>2;
/*+566:RET*/reg_ip=regs.pop();
}
/*567*/
code[44]=function(){
/*+567:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+568:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+569:NCALL*/SC_sin();
/*+570:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+571:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-6);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+572:MOV*//*8*/{let dst=(reg_sp4-8);let src=(reg_sp4-10);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+573:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+574:RET*/reg_ip=regs.pop();
}
/*575*/
code[45]=function(){
/*+575:ADDSP*/reg_sp+=+24;reg_sp4=reg_sp>>2;
/*+576:ILDC*/memint32[reg_sp4-6]=+0
/*+577:ILDC*/memint32[reg_sp4-5]=+0;reg_ip=46;
}
/*578*/
code[46]=function(){
/*+578:ILDC*/memint32[reg_sp4-4]=+64
/*+579:LS*/memint32[reg_sp4-3]=memint32[reg_sp4-5] <memint32[reg_sp4-4]
/*+580:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=50;}else{reg_ip=47;}
}
/*581*/
code[47]=function(){
/*+581:LEA*/memint32[reg_sp4-4]=reg_this+0
/*+582:IDX*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+memint32[reg_sp4-5]*20
/*+583:OFFS*/memint32[reg_sp4-2]=memint32[reg_sp4-4]+16
/*+584:LS*/memint32[reg_sp4-1]=memint32[reg_this4+320] <GetInt(memint32[(reg_sp4-2)])
/*+585:JMPZ*/if(memint32[reg_sp4-1]==0){reg_ip=49;}else{reg_ip=48;}
}
/*586*/
code[48]=function(){
/*+586:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-6)];
/*+587:INC*/memint32[reg_sp4-6]=memint32[reg_sp4-6]+1;reg_ip=49;
}
/*588*/
code[49]=function(){
/*+588:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-5)];
/*+589:INC*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+1
/*+590:JMP*/reg_ip=46;
}
/*591*/
code[50]=function(){
/*+591:MOV*//*4*/memint32[(reg_sp4-7)]=memint32[(reg_sp4-6)];
/*+592:ADDSP*/reg_sp+=-24;reg_sp4=reg_sp>>2;
/*+593:RET*/reg_ip=regs.pop();
}
/*594*/
code[51]=function(){
/*+594:ADDSP*/reg_sp+=+16;reg_sp4=reg_sp>>2;
/*+595:ILDC*/memint32[reg_this4+320]=+0
/*+596:ILDC*/memint32[reg_sp4-4]=+0;reg_ip=52;
}
/*597*/
code[52]=function(){
/*+597:ILDC*/memint32[reg_sp4-3]=+64
/*+598:LS*/memint32[reg_sp4-2]=memint32[reg_sp4-4] <memint32[reg_sp4-3]
/*+599:JMPZ*/if(memint32[reg_sp4-2]==0){reg_ip=54;}else{reg_ip=53;}
}
/*600*/
code[53]=function(){
/*+600:LEA*/memint32[reg_sp4-3]=reg_this+0
/*+601:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*20
/*+602:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+12
/*+603:ILDC*/PutInt(memint32[(reg_sp4-1)],-100)
/*+604:LEA*/memint32[reg_sp4-3]=reg_this+0
/*+605:IDX*/memint32[reg_sp4-3]=memint32[reg_sp4-3]+memint32[reg_sp4-4]*20
/*+606:OFFS*/memint32[reg_sp4-1]=memint32[reg_sp4-3]+16
/*+607:ILDC*/PutInt(memint32[(reg_sp4-1)],-100)
/*+608:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-4)];
/*+609:INC*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+1
/*+610:JMP*/reg_ip=52;
}
/*611*/
code[54]=function(){
/*+611:ADDSP*/reg_sp+=-16;reg_sp4=reg_sp>>2;
/*+612:RET*/reg_ip=regs.pop();
}
/*613*/
code[55]=function(){
/*+613:ADDSP*/reg_sp+=+52;reg_sp4=reg_sp>>2;
/*+614:ILDC*/memint32[reg_sp4-13]=+0;reg_ip=56;
}
/*615*/
code[56]=function(){
/*+615:ILDC*/memint32[reg_sp4-12]=+64
/*+616:LS*/memint32[reg_sp4-11]=memint32[reg_sp4-13] <memint32[reg_sp4-12]
/*+617:JMPZ*/if(memint32[reg_sp4-11]==0){reg_ip=60;}else{reg_ip=57;}
}
/*618*/
code[57]=function(){
/*+618:LEA*/memint32[reg_sp4-12]=reg_this+0
/*+619:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*20
/*+620:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-12]+16
/*+621:GR*/memint32[reg_sp4-9]=memint32[reg_this4+320] >GetInt(memint32[(reg_sp4-10)])
/*+622:JMPZ*/if(memint32[reg_sp4-9]==0){reg_ip=59;}else{reg_ip=58;}
}
/*623*/
code[58]=function(){
/*+623:LEA*/memint32[reg_sp4-12]=reg_this+0
/*+624:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*20
/*+625:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-12]+0
/*+626:MOV*/{let addr=reg_sp-56;mem8.copyWithin(memint32[(reg_sp4-10)],addr,addr+4);}
/*+627:LEA*/memint32[reg_sp4-12]=reg_this+0
/*+628:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*20
/*+629:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-12]+4
/*+630:MOV*/{let addr=reg_sp-64;mem8.copyWithin(memint32[(reg_sp4-10)],addr,addr+8);}
/*+631:LEA*/memint32[reg_sp4-12]=reg_this+0
/*+632:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*20
/*+633:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-12]+12
/*+634:MOV*/{let addr=reg_this+1280;mem8.copyWithin(memint32[(reg_sp4-10)],addr,addr+4);}
/*+635:LEA*/memint32[reg_sp4-12]=reg_this+0
/*+636:IDX*/memint32[reg_sp4-12]=memint32[reg_sp4-12]+memint32[reg_sp4-13]*20
/*+637:OFFS*/memint32[reg_sp4-10]=memint32[reg_sp4-12]+16
/*+638:ILDC*/memint32[reg_sp4-9]=+48000
/*+639:I2F*/{let addr=(reg_sp4-8);cvtflt64[0]=memint32[reg_sp4-9];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+640:FMUL*/{let addr=(reg_sp4-6);cvtflt64[0]=GetFloat4(reg_sp4-18)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+641:I2F*/{let addr=(reg_sp4-4);cvtflt64[0]=memint32[reg_this4+320];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+642:FADD*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-4)+GetFloat4(reg_sp4-6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+643:F2I*/PutInt(memint32[(reg_sp4-10)],GetFloat4(reg_sp4-2))
/*+644:JMP*/reg_ip=60;
}
/*645*/
code[59]=function(){
/*+645:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-13)];
/*+646:INC*/memint32[reg_sp4-13]=memint32[reg_sp4-13]+1
/*+647:JMP*/reg_ip=56;
}
/*648*/
code[60]=function(){
/*+648:ADDSP*/reg_sp+=-52;reg_sp4=reg_sp>>2;
/*+649:RET*/reg_ip=regs.pop();
}
/*650*/
code[61]=function(){
/*+650:ADDSP*/reg_sp+=+164;reg_sp4=reg_sp>>2;
/*+651:ILDC*/memint32[reg_sp4-41]=+0;reg_ip=62;
}
/*652*/
code[62]=function(){
/*+652:ILDC*/memint32[reg_sp4-25]=+64
/*+653:LS*/memint32[reg_sp4-24]=memint32[reg_sp4-41] <memint32[reg_sp4-25]
/*+654:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=92;}else{reg_ip=63;}
}
/*655*/
code[63]=function(){
/*+655:LEA*/memint32[reg_sp4-25]=reg_this+0
/*+656:IDX*/memint32[reg_sp4-25]=memint32[reg_sp4-25]+memint32[reg_sp4-41]*20
/*+657:MOV*//*4*/memint32[(reg_sp4-40)]=memint32[(reg_sp4-25)];
/*+658:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+16
/*+659:GR*/memint32[reg_sp4-24]=memint32[reg_this4+320] >GetInt(memint32[(reg_sp4-25)])
/*+660:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=65;}else{reg_ip=64;}
}
/*661*/
code[64]=function(){
/*+661:JMP*/reg_ip=91;
}
/*662*/
code[65]=function(){
/*+662:MOV*//*4*/memint32[(reg_sp4-39)]=memint32[(reg_this4+320)];
/*+663:ILDC*/memint32[reg_sp4-38]=+0;reg_ip=66;
}
/*664*/
code[66]=function(){
/*+664:LS*/memint32[reg_sp4-25]=memint32[reg_sp4-38] <memint32[reg_sp4-42]
/*+665:JMPZ*/if(memint32[reg_sp4-25]==0){reg_ip=91;}else{reg_ip=67;}
}
/*666*/
code[67]=function(){
/*+666:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+16
/*+667:GR*/memint32[reg_sp4-24]=memint32[reg_sp4-39] >GetInt(memint32[(reg_sp4-25)])
/*+668:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=69;}else{reg_ip=68;}
}
/*669*/
code[68]=function(){
/*+669:JMP*/reg_ip=91;
}
/*670*/
code[69]=function(){
/*+670:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+4
/*+671:FLDC*/{let addr=(reg_sp4-24);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+672:FEQ*/memint32[reg_sp4-22]=GetFloat(memint32[(reg_sp4-25)])==GetFloat4(reg_sp4-24)
/*+673:JMPZ*/if(memint32[reg_sp4-22]==0){reg_ip=71;}else{reg_ip=70;}
}
/*674*/
code[70]=function(){
/*+674:JMP*/reg_ip=91;
}
/*675*/
code[71]=function(){
/*+675:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+12
/*+676:GR*/memint32[reg_sp4-24]=memint32[reg_sp4-39] >GetInt(memint32[(reg_sp4-25)])
/*+677:JMPZ*/if(memint32[reg_sp4-24]==0){reg_ip=90;}else{reg_ip=72;}
}
/*678*/
code[72]=function(){
/*+678:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+12
/*+679:SUB*/memint32[reg_sp4-24]=memint32[reg_sp4-39]-GetInt(memint32[(reg_sp4-25)])
/*+680:FLDC*/{let addr=(reg_sp4-23);cvtflt64[0]=+48000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+681:I2F*/{let addr=(reg_sp4-21);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+682:FDIV*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-21)/GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+683:JMPZ*/if(memint32[+91]==0){reg_ip=74;}else{reg_ip=73;}
}
/*684*/
code[73]=function(){
/*+684:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+685:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat4(reg_sp4-25);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+686:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+687:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+688:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-19);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+689:NCALL*/SC_sin();
/*+690:MOV*//*8*/{let dst=(reg_sp4-17);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+691:FLDC*/{let addr=(reg_sp4-15);cvtflt64[0]=+0.000700;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+692:FMUL*/{let addr=(reg_sp4-13);cvtflt64[0]=GetFloat4(reg_sp4-17)*GetFloat4(reg_sp4-15);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+693:FMUL*/{let addr=(reg_sp4-11);cvtflt64[0]=GetFloat4(reg_sp4-13)*GetFloat4(reg_sp4-37);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+694:FADD*/{let addr=(reg_sp4-37);cvtflt64[0]=GetFloat4(reg_sp4-37)+GetFloat4(reg_sp4-11);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+695:MOV*//*8*/{let dst=(reg_sp4-9);let src=(reg_sp4-37);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=74;
}
/*696*/
code[74]=function(){
/*+696:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+697:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+0
/*+698:ILDC*/memint32[reg_sp4-24]=+2
/*+699:EQ*/memint32[reg_sp4-23]=GetInt(memint32[(reg_sp4-25)])==memint32[reg_sp4-24]
/*+700:JMPZ*/if(memint32[reg_sp4-23]==0){reg_ip=79;}else{reg_ip=75;}
}
/*701*/
code[75]=function(){
/*+701:OFFS*/memint32[reg_sp4-24]=memint32[reg_sp4-40]+4
/*+702:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat(memint32[(reg_sp4-24)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+703:FLDC*/{let addr=(reg_sp4-21);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+704:FMUL*/{let addr=(reg_sp4-19);cvtflt64[0]=GetFloat4(reg_sp4-23)*GetFloat4(reg_sp4-21);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+705:F2I*/memint32[reg_sp4-25]=GetFloat4(reg_sp4-19)
/*+706:ILDC*/memint32[reg_sp4-17]=+5
/*+707:MOD*/memint32[reg_sp4-33]=memint32[reg_sp4-25] %memint32[reg_sp4-17]
/*+708:JMPZ*/if(memint32[reg_sp4-33]==0){reg_ip=77;}else{reg_ip=76;}
}
/*709*/
code[76]=function(){
/*+709:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+710:JMP*/reg_ip=78;
}
/*711*/
code[77]=function(){
/*+711:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+4
/*+712:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat(memint32[(reg_sp4-25)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+713:FLDC*/{let addr=(reg_sp4-22);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+714:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-22);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+715:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+716:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+717:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+5.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+718:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+719:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+720:NCALL*/SC_sin();
/*+721:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+722:FLDC*/{let addr=(reg_sp4-8);cvtflt64[0]=+0.300000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+723:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-8);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=78;
}
/*724*/
code[78]=function(){
/*+724:JMP*/reg_ip=87;
}
/*725*/
code[79]=function(){
/*+725:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+4
/*+726:FMUL*/{let addr=(reg_sp4-24);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat(memint32[(reg_sp4-25)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+727:FLDC*/{let addr=(reg_sp4-22);cvtflt64[0]=+3.141593;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+728:FMUL*/{let addr=(reg_sp4-20);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-22);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+729:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+730:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-20)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+731:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-16);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+732:CALL*/regs.push(80);reg_ip=44;
}
/*733*/
code[80]=function(){
/*+733:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+734:MOV*//*8*/{let dst=(reg_sp4-35);let src=(reg_sp4-14);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+735:JMPZ*/if(memint32[+92]==0){reg_ip=85;}else{reg_ip=81;}
}
/*736*/
code[81]=function(){
/*+736:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+737:FGR*/memint32[reg_sp4-23]=GetFloat4(reg_sp4-35) >GetFloat4(reg_sp4-25)
/*+738:JMPZ*/if(memint32[reg_sp4-23]==0){reg_ip=83;}else{reg_ip=82;}
}
/*739*/
code[82]=function(){
/*+739:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+740:JMP*/reg_ip=85;
}
/*741*/
code[83]=function(){
/*+741:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=-0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+742:FLS*/memint32[reg_sp4-23]=GetFloat4(reg_sp4-35) <GetFloat4(reg_sp4-25)
/*+743:JMPZ*/if(memint32[reg_sp4-23]==0){reg_ip=85;}else{reg_ip=84;}
}
/*744*/
code[84]=function(){
/*+744:FLDC*/{let addr=(reg_sp4-35);cvtflt64[0]=-0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=85;
}
/*745*/
code[85]=function(){
/*+745:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=+0.010000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+746:FLS*/memint32[reg_sp4-23]=GetFloat4(reg_sp4-37) <GetFloat4(reg_sp4-25)
/*+747:JMPZ*/if(memint32[reg_sp4-23]==0){reg_ip=87;}else{reg_ip=86;}
}
/*748*/
code[86]=function(){
/*+748:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=+100.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+749:FMUL*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-37)*GetFloat4(reg_sp4-25);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+750:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+751:MOV*//*8*/{let dst=(reg_sp4-21);let src=(reg_sp4-35);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=87;
}
/*752*/
code[87]=function(){
/*+752:JMPZ*/if(memint32[+93]==0){reg_ip=89;}else{reg_ip=88;}
}
/*753*/
code[88]=function(){
/*+753:OFFS*/memint32[reg_sp4-25]=memint32[reg_sp4-40]+12
/*+754:SUB*/memint32[reg_sp4-24]=memint32[reg_sp4-39]-GetInt(memint32[(reg_sp4-25)])
/*+755:OFFS*/memint32[reg_sp4-21]=memint32[reg_sp4-40]+16
/*+756:OFFS*/memint32[reg_sp4-20]=memint32[reg_sp4-40]+12
/*+757:SUB*/memint32[reg_sp4-19]=GetInt(memint32[(reg_sp4-21)])-GetInt(memint32[(reg_sp4-20)])
/*+758:I2F*/{let addr=(reg_sp4-23);cvtflt64[0]=memint32[reg_sp4-19];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+759:I2F*/{let addr=(reg_sp4-18);cvtflt64[0]=memint32[reg_sp4-24];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+760:FDIV*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-18)/GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+761:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+762:FSUB*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-14)-GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+763:FMUL*/{let addr=(reg_sp4-35);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+764:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-35);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+765:JMP*/reg_ip=89;
}
/*766*/
code[89]=function(){
/*+766:FLDC*/{let addr=(reg_sp4-32);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+767:ADD*/memint32[reg_sp4-25]=memint32[reg_sp4-44]+memint32[reg_sp4-38]
/*+768:MOD*/memint32[reg_sp4-24]=memint32[reg_sp4-25] %memint32[reg_sp4-45]
/*+769:ILDC*/memint32[reg_sp4-23]=+2
/*+770:MUL*/memint32[reg_sp4-30]=Math.imul(memint32[reg_sp4-24],memint32[reg_sp4-23]);
/*+771:FMUL*/{let addr=(reg_sp4-25);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+772:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-43)];
/*+773:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-30]*8
/*+774:FADD*/{let addr=(reg_sp4-29);cvtflt64[0]=GetFloat4(reg_sp4-25)+GetFloat(memint32[(reg_sp4-23)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+775:FLDC*/{let addr=(reg_sp4-25);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+776:FSUB*/{let addr=(reg_sp4-23);cvtflt64[0]=GetFloat4(reg_sp4-25)-GetFloat4(reg_sp4-32);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+777:FMUL*/{let addr=(reg_sp4-21);cvtflt64[0]=GetFloat4(reg_sp4-35)*GetFloat4(reg_sp4-23);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+778:ILDC*/memint32[reg_sp4-19]=+1
/*+779:ADD*/memint32[reg_sp4-18]=memint32[reg_sp4-30]+memint32[reg_sp4-19]
/*+780:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-43)];
/*+781:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-18]*8
/*+782:FADD*/{let addr=(reg_sp4-27);cvtflt64[0]=GetFloat4(reg_sp4-21)+GetFloat(memint32[(reg_sp4-17)]);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+783:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-43)];
/*+784:IDX*/memint32[reg_sp4-25]=memint32[reg_sp4-25]+memint32[reg_sp4-30]*8
/*+785:MOV*/{let addr=reg_sp-116;mem8.copyWithin(memint32[(reg_sp4-25)],addr,addr+8);}
/*+786:ILDC*/memint32[reg_sp4-25]=+1
/*+787:ADD*/memint32[reg_sp4-24]=memint32[reg_sp4-30]+memint32[reg_sp4-25]
/*+788:MOV*//*4*/memint32[(reg_sp4-23)]=memint32[(reg_sp4-43)];
/*+789:IDX*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+memint32[reg_sp4-24]*8
/*+790:MOV*/{let addr=reg_sp-108;mem8.copyWithin(memint32[(reg_sp4-23)],addr,addr+8);};reg_ip=90;
}
/*791*/
code[90]=function(){
/*+791:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-39)];
/*+792:INC*/memint32[reg_sp4-39]=memint32[reg_sp4-39]+1
/*+793:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-38)];
/*+794:INC*/memint32[reg_sp4-38]=memint32[reg_sp4-38]+1
/*+795:JMP*/reg_ip=66;
}
/*796*/
code[91]=function(){
/*+796:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_sp4-41)];
/*+797:INC*/memint32[reg_sp4-41]=memint32[reg_sp4-41]+1
/*+798:JMP*/reg_ip=62;
}
/*799*/
code[92]=function(){
/*+799:ADD*/memint32[reg_this4+320]=memint32[reg_this4+320]+memint32[reg_sp4-42]
/*+800:MOV*//*4*/memint32[(reg_sp4-25)]=memint32[(reg_this4+320)];
/*+801:ADDSP*/reg_sp+=-164;reg_sp4=reg_sp>>2;
/*+802:RET*/reg_ip=regs.pop();
}
/*803*/
code[93]=function(){
/*+803:ADDSP*/reg_sp+=+32;reg_sp4=reg_sp>>2;
/*+804:ILDC*/memint32[reg_sp4-8]=+0
/*+805:I2F*/{let addr=(reg_sp4-7);cvtflt64[0]=memint32[reg_sp4-8];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+806:FLS*/memint32[reg_sp4-5]=GetFloat4(reg_sp4-12) <GetFloat4(reg_sp4-7)
/*+807:JMPZ*/if(memint32[reg_sp4-5]==0){reg_ip=95;}else{reg_ip=94;}
}
/*808*/
code[94]=function(){
/*+808:FNEG*/{let addr=(reg_sp4-4);cvtflt64[0]=-GetFloat4(reg_sp4-12);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+809:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-4);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+810:JMP*/reg_ip=96;
}
/*811*/
code[95]=function(){
/*+811:MOV*//*8*/{let dst=(reg_sp4-2);let src=(reg_sp4-12);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];};reg_ip=96;
}
/*812*/
code[96]=function(){
/*+812:MOV*//*8*/{let dst=(reg_sp4-10);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+813:ADDSP*/reg_sp+=-32;reg_sp4=reg_sp>>2;
/*+814:RET*/reg_ip=regs.pop();
}
/*815*/
code[97]=function(){
/*+815:ADDSP*/reg_sp+=+48;reg_sp4=reg_sp>>2;
/*+816:FMUL*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+817:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=-2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+818:FMUL*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-10)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+819:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+820:FADD*/{let addr=(reg_sp4-4);cvtflt64[0]=GetFloat4(reg_sp4-8)+GetFloat4(reg_sp4-6);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+821:FMUL*/{let addr=(reg_sp4-2);cvtflt64[0]=GetFloat4(reg_sp4-12)*GetFloat4(reg_sp4-4);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+822:MOV*//*8*/{let dst=(reg_sp4-14);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+823:ADDSP*/reg_sp+=-48;reg_sp4=reg_sp>>2;
/*+824:RET*/reg_ip=regs.pop();
}
/*825*/
code[98]=function(){
/*+825:ADDSP*/reg_sp+=+20;reg_sp4=reg_sp>>2;
/*+826:ILDC*/memint32[reg_sp4-2]=+228
/*+827:NCALL*/SC_printf();
/*+828:ILDC*/memint32[reg_this4+0]=+0
/*+829:ILDC*/memint32[reg_this4+1]=+0
/*+830:FLDC*/{let addr=(+94);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+831:ILDC*/memint32[+91]=+1
/*+832:ILDC*/memint32[+92]=+1
/*+833:ILDC*/memint32[+93]=+1
/*+834:ILDC*/memint32[reg_sp4-2]=+192000
/*+835:NCALL*/SC_malloc();
/*+836:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-1)];
/*+837:MOV*//*4*/memint32[(reg_this4+2)]=memint32[(reg_sp4-4)];
/*+838:ILDC*/memint32[reg_sp4-5]=+0;reg_ip=99;
}
/*839*/
code[99]=function(){
/*+839:ILDC*/memint32[reg_sp4-4]=+24000
/*+840:LS*/memint32[reg_sp4-3]=memint32[reg_sp4-5] <memint32[reg_sp4-4]
/*+841:JMPZ*/if(memint32[reg_sp4-3]==0){reg_ip=101;}else{reg_ip=100;}
}
/*842*/
code[100]=function(){
/*+842:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_this4+2)];
/*+843:IDX*/memint32[reg_sp4-4]=memint32[reg_sp4-4]+memint32[reg_sp4-5]*8
/*+844:FLDC*/PutFloat(memint32[(reg_sp4-4)],+0.000000)
/*+845:MOV*//*4*/memint32[(reg_sp4-4)]=memint32[(reg_sp4-5)];
/*+846:INC*/memint32[reg_sp4-5]=memint32[reg_sp4-5]+1
/*+847:JMP*/reg_ip=99;
}
/*848*/
code[101]=function(){
/*+848:ADDSP*/reg_sp+=-20;reg_sp4=reg_sp>>2;
/*+849:RET*/reg_ip=regs.pop();
}
/*850*/
code[102]=function(){
/*+850:ADDSP*/reg_sp+=+144;reg_sp4=reg_sp>>2;
/*+851:ILDC*/memint32[reg_sp4-36]=+0;reg_ip=103;
}
/*852*/
code[103]=function(){
/*+852:LS*/memint32[reg_sp4-18]=memint32[reg_sp4-36] <memint32[reg_sp4-37]
/*+853:JMPZ*/if(memint32[reg_sp4-18]==0){reg_ip=105;}else{reg_ip=104;}
}
/*854*/
code[104]=function(){
/*+854:ADD*/memint32[reg_sp4-18]=memint32[reg_this4+1]+memint32[reg_sp4-36]
/*+855:ILDC*/memint32[reg_sp4-17]=+12000
/*+856:MOD*/memint32[reg_sp4-16]=memint32[reg_sp4-18] %memint32[reg_sp4-17]
/*+857:ILDC*/memint32[reg_sp4-15]=+2
/*+858:MUL*/memint32[reg_sp4-35]=Math.imul(memint32[reg_sp4-16],memint32[reg_sp4-15]);
/*+859:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+2)];
/*+860:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-35]*8
/*+861:MOV*/{let addr=memint32[(reg_sp4-18)];mem8.copyWithin(reg_sp-136,addr,addr+8);}
/*+862:ILDC*/memint32[reg_sp4-18]=+1
/*+863:ADD*/memint32[reg_sp4-17]=memint32[reg_sp4-35]+memint32[reg_sp4-18]
/*+864:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_this4+2)];
/*+865:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*8
/*+866:MOV*/{let addr=memint32[(reg_sp4-16)];mem8.copyWithin(reg_sp-128,addr,addr+8);}
/*+867:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+2)];
/*+868:IDX*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+memint32[reg_sp4-35]*8
/*+869:FMUL*/PutFloat(memint32[(reg_sp4-18)],GetFloat4(reg_sp4-32)*GetFloat4(+94))
/*+870:ILDC*/memint32[reg_sp4-18]=+1
/*+871:ADD*/memint32[reg_sp4-17]=memint32[reg_sp4-35]+memint32[reg_sp4-18]
/*+872:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_this4+2)];
/*+873:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*8
/*+874:FMUL*/PutFloat(memint32[(reg_sp4-16)],GetFloat4(reg_sp4-34)*GetFloat4(+94))
/*+875:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_sp4-36)];
/*+876:INC*/memint32[reg_sp4-36]=memint32[reg_sp4-36]+1
/*+877:JMP*/reg_ip=103;
}
/*878*/
code[105]=function(){
/*+878:I2F*/{let addr=(reg_sp4-30);cvtflt64[0]=memint32[+440];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+879:ADD*/memint32[reg_sp4-18]=memint32[+440]+memint32[reg_sp4-37]
/*+880:I2F*/{let addr=(reg_sp4-28);cvtflt64[0]=memint32[reg_sp4-18];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+881:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+48000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+882:FDIV*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-30)/GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+883:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+884:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+48000.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+885:FDIV*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-28)/GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+886:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+887:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+7.812500;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+888:FMUL*/{let addr=(reg_sp4-30);cvtflt64[0]=GetFloat4(reg_sp4-30)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+889:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-30);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+890:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+7.812500;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+891:FMUL*/{let addr=(reg_sp4-28);cvtflt64[0]=GetFloat4(reg_sp4-28)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+892:MOV*//*8*/{let dst=(reg_sp4-16);let src=(reg_sp4-28);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+893:F2I*/memint32[reg_sp4-26]=GetFloat4(reg_sp4-30)
/*+894:F2I*/memint32[reg_sp4-25]=GetFloat4(reg_sp4-28)
/*+895:NE*/memint32[reg_sp4-18]=memint32[reg_sp4-26]!=memint32[reg_sp4-25]
/*+896:JMPZ*/if(memint32[reg_sp4-18]==0){reg_ip=110;}else{reg_ip=106;}
}
/*897*/
code[106]=function(){
/*+897:ILDC*/memint32[reg_sp4-18]=+16
/*+898:MOD*/memint32[reg_sp4-17]=memint32[reg_sp4-25] %memint32[reg_sp4-18]
/*+899:LEA*/memint32[reg_sp4-16]=+276
/*+900:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*1
/*+901:ILDC*/memint32[reg_sp4-14]=+16
/*+902:DIV*/memint32[reg_sp4-13]=memint32[reg_sp4-25]/memint32[reg_sp4-14]
/*+903:ILDC*/memint32[reg_sp4-12]=+16
/*+904:MOD*/memint32[reg_sp4-11]=memint32[reg_sp4-13] %memint32[reg_sp4-12]
/*+905:LEA*/memint32[reg_sp4-10]=+308
/*+906:IDX*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+memint32[reg_sp4-11]*1
/*+907:C2I*/memint32[reg_sp4-8]=GetChar(memint32[(reg_sp4-16)])
/*+908:C2I*/memint32[reg_sp4-7]=GetChar(memint32[(reg_sp4-10)])
/*+909:MUL*/memint32[reg_sp4-6]=Math.imul(memint32[reg_sp4-8],memint32[reg_sp4-7]);
/*+910:I2F*/{let addr=(reg_sp4-24);cvtflt64[0]=memint32[reg_sp4-6];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+911:ILDC*/memint32[reg_sp4-18]=+16
/*+912:MOD*/memint32[reg_sp4-17]=memint32[reg_sp4-25] %memint32[reg_sp4-18]
/*+913:LEA*/memint32[reg_sp4-16]=+292
/*+914:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*1
/*+915:ILDC*/memint32[reg_sp4-14]=+32
/*+916:DIV*/memint32[reg_sp4-13]=memint32[reg_sp4-25]/memint32[reg_sp4-14]
/*+917:ILDC*/memint32[reg_sp4-12]=+16
/*+918:MOD*/memint32[reg_sp4-11]=memint32[reg_sp4-13] %memint32[reg_sp4-12]
/*+919:LEA*/memint32[reg_sp4-10]=+324
/*+920:IDX*/memint32[reg_sp4-10]=memint32[reg_sp4-10]+memint32[reg_sp4-11]*1
/*+921:C2I*/memint32[reg_sp4-8]=GetChar(memint32[(reg_sp4-16)])
/*+922:C2I*/memint32[reg_sp4-7]=GetChar(memint32[(reg_sp4-10)])
/*+923:MUL*/memint32[reg_sp4-6]=Math.imul(memint32[reg_sp4-8],memint32[reg_sp4-7]);
/*+924:I2F*/{let addr=(reg_sp4-22);cvtflt64[0]=memint32[reg_sp4-6];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+925:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+46.875000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+926:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-24)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+927:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+928:FDIV*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)/GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+929:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+930:FDIV*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-12)/GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+931:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+0.375000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+932:MOV*//*8*/{let dst=(reg_sp4-3);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+933:ILDC*/memint32[reg_sp4-1]=+1
/*+934:IAM*/regs.push(reg_this);reg_this=+480;reg_this4=reg_this>>2;
/*+935:CALL*/regs.push(107);reg_ip=55;
}
/*936*/
code[107]=function(){
/*+936:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+937:FLDC*/{let addr=(reg_sp4-18);cvtflt64[0]=+46.875000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+938:FMUL*/{let addr=(reg_sp4-16);cvtflt64[0]=GetFloat4(reg_sp4-22)*GetFloat4(reg_sp4-18);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+939:FLDC*/{let addr=(reg_sp4-14);cvtflt64[0]=+0.750000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+940:FDIV*/{let addr=(reg_sp4-12);cvtflt64[0]=GetFloat4(reg_sp4-16)/GetFloat4(reg_sp4-14);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+941:FLDC*/{let addr=(reg_sp4-10);cvtflt64[0]=+2.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+942:FDIV*/{let addr=(reg_sp4-8);cvtflt64[0]=GetFloat4(reg_sp4-12)/GetFloat4(reg_sp4-10);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+943:FLDC*/{let addr=(reg_sp4-5);cvtflt64[0]=+0.187500;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+944:MOV*//*8*/{let dst=(reg_sp4-3);let src=(reg_sp4-8);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+945:ILDC*/memint32[reg_sp4-1]=+2
/*+946:IAM*/regs.push(reg_this);reg_this=+480;reg_this4=reg_this>>2;
/*+947:CALL*/regs.push(108);reg_ip=55;
}
/*948*/
code[108]=function(){
/*+948:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+949:SUB*/memint32[reg_sp4-18]=memint32[reg_sp4-25]-memint32[reg_sp4-26]
/*+950:ILDC*/memint32[reg_sp4-17]=+1
/*+951:GR*/memint32[reg_sp4-16]=memint32[reg_sp4-18] >memint32[reg_sp4-17]
/*+952:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=110;}else{reg_ip=109;}
}
/*953*/
code[109]=function(){
/*+953:ILDC*/memint32[reg_sp4-2]=+239
/*+954:NCALL*/SC_printf();;reg_ip=110;
}
/*955*/
code[110]=function(){
/*+955:ILDC*/memint32[reg_sp4-18]=+0
/*+956:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_this4+2)];
/*+957:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-18]*8
/*+958:MOV*//*4*/memint32[(reg_sp4-15)]=memint32[(reg_sp4-17)];
/*+959:ILDC*/memint32[reg_sp4-4]=+12000
/*+960:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_this4+1)];
/*+961:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-15)];
/*+962:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-37)];
/*+963:IAM*/regs.push(reg_this);reg_this=+480;reg_this4=reg_this>>2;
/*+964:CALL*/regs.push(111);reg_ip=61;
}
/*965*/
code[111]=function(){
/*+965:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+966:SUB*/memint32[reg_sp4-20]=memint32[reg_this4+1]-memint32[reg_sp4-37]
/*+967:MOV*//*4*/memint32[(reg_sp4-19)]=memint32[(reg_sp4-37)];
/*+968:ILDC*/memint32[reg_sp4-18]=+0
/*+969:LS*/memint32[reg_sp4-17]=memint32[reg_sp4-20] <memint32[reg_sp4-18]
/*+970:JMPZ*/if(memint32[reg_sp4-17]==0){reg_ip=113;}else{reg_ip=112;}
}
/*971*/
code[112]=function(){
/*+971:ADD*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+memint32[reg_sp4-20]
/*+972:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_sp4-19)];
/*+973:ILDC*/memint32[reg_sp4-18]=+12000
/*+974:ADD*/memint32[reg_sp4-17]=memint32[reg_sp4-18]+memint32[reg_sp4-20]
/*+975:ILDC*/memint32[reg_sp4-16]=+2
/*+976:MUL*/memint32[reg_sp4-15]=Math.imul(memint32[reg_sp4-17],memint32[reg_sp4-16]);
/*+977:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_this4+2)];
/*+978:IDX*/memint32[reg_sp4-14]=memint32[reg_sp4-14]+memint32[reg_sp4-15]*8
/*+979:MOV*//*4*/memint32[(reg_sp4-12)]=memint32[(reg_sp4-14)];
/*+980:NEG*/memint32[reg_sp4-11]=-memint32[reg_sp4-20]
/*+981:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-11)];
/*+982:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-12)];
/*+983:NCALL*/SC_snd_out_buf();
/*+984:ILDC*/memint32[reg_sp4-20]=+0;reg_ip=113;
}
/*985*/
code[113]=function(){
/*+985:ILDC*/memint32[reg_sp4-18]=+2
/*+986:MUL*/memint32[reg_sp4-17]=Math.imul(memint32[reg_sp4-20],memint32[reg_sp4-18]);
/*+987:MOV*//*4*/memint32[(reg_sp4-16)]=memint32[(reg_this4+2)];
/*+988:IDX*/memint32[reg_sp4-16]=memint32[reg_sp4-16]+memint32[reg_sp4-17]*8
/*+989:MOV*//*4*/memint32[(reg_sp4-14)]=memint32[(reg_sp4-16)];
/*+990:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-19)];
/*+991:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-14)];
/*+992:NCALL*/SC_snd_out_buf();
/*+993:ADD*/memint32[reg_sp4-18]=memint32[reg_this4+1]+memint32[reg_sp4-37]
/*+994:ILDC*/memint32[reg_sp4-17]=+12000
/*+995:MOD*/memint32[reg_this4+1]=memint32[reg_sp4-18] %memint32[reg_sp4-17]
/*+996:ADD*/memint32[reg_this4+0]=memint32[reg_this4+0]+memint32[reg_sp4-37]
/*+997:MOV*//*4*/memint32[(reg_sp4-18)]=memint32[(reg_this4+0)];
/*+998:ADDSP*/reg_sp+=-144;reg_sp4=reg_sp>>2;
/*+999:RET*/reg_ip=regs.pop();
}
/*1000*/
code[114]=function(){
/*+1000:ADDSP*/reg_sp+=+308;reg_sp4=reg_sp>>2;
/*+1001:NCALL*/SC_Time();
/*+1002:MOV*//*8*/{let dst=(reg_sp4-17);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1003:MOV*//*8*/{let dst=(reg_sp4-77);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1004:FLDC*/{let addr=(reg_sp4-75);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1005:ILDC*/memint32[+88]=+0
/*+1006:ILDC*/memint32[+68]=+21397862
/*+1007:CALL*/regs.push(115);reg_ip=2;
}
/*1008*/
code[115]=function(){
/*+1008:IAM*/regs.push(reg_this);reg_this=+1764;reg_this4=reg_this>>2;
/*+1009:CALL*/regs.push(116);reg_ip=98;
}
/*1010*/
code[116]=function(){
/*+1010:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1011:FLDC*/{let addr=(+94);cvtflt64[0]=+0.700000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1012:ILDC*/memint32[+92]=+1
/*+1013:ILDC*/memint32[+93]=+1
/*+1014:ILDC*/memint32[+91]=+1
/*+1015:LEA*/memint32[reg_sp4-17]=+276
/*+1016:MOV*//*4*/memint32[(reg_sp4-73)]=memint32[(reg_sp4-17)];
/*+1017:ILDC*/memint32[reg_sp4-72]=+100
/*+1018:ILDC*/memint32[reg_sp4-71]=+100
/*+1019:FLDC*/{let addr=(reg_sp4-70);cvtflt64[0]=+65536.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1020:LEA*/memint32[reg_sp4-17]=+292
/*+1021:MOV*//*4*/memint32[(reg_sp4-66)]=memint32[(reg_sp4-17)];
/*+1022:ILDC*/memint32[reg_sp4-65]=+350
/*+1023:ILDC*/memint32[reg_sp4-64]=+100
/*+1024:FLDC*/{let addr=(reg_sp4-63);cvtflt64[0]=+65536.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1025:LEA*/memint32[reg_sp4-17]=+308
/*+1026:MOV*//*4*/memint32[(reg_sp4-59)]=memint32[(reg_sp4-17)];
/*+1027:ILDC*/memint32[reg_sp4-58]=+100
/*+1028:ILDC*/memint32[reg_sp4-57]=+260
/*+1029:FLDC*/{let addr=(reg_sp4-56);cvtflt64[0]=+1048576.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1030:LEA*/memint32[reg_sp4-17]=+324
/*+1031:MOV*//*4*/memint32[(reg_sp4-52)]=memint32[(reg_sp4-17)];
/*+1032:ILDC*/memint32[reg_sp4-51]=+350
/*+1033:ILDC*/memint32[reg_sp4-50]=+260
/*+1034:FLDC*/{let addr=(reg_sp4-49);cvtflt64[0]=+2097152.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];};reg_ip=117;
}
/*1035*/
code[117]=function(){
/*+1035:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1036:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1037:NCALL*/SC_t_0();
/*+1038:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1039:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1040:NCALL*/SC_t_x();
/*+1041:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1042:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1043:NCALL*/SC_t_y();
/*+1044:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1045:NCALL*/SC_gray();
/*+1046:NCALL*/SC_clear();
/*+1047:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1048:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1049:NCALL*/SC_M();
/*+1050:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1051:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1052:NCALL*/SC_l();
/*+1053:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+480.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1054:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1055:NCALL*/SC_l();
/*+1056:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1057:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1058:NCALL*/SC_l();
/*+1059:NCALL*/SC_close();
/*+1060:NCALL*/SC_fin();
/*+1061:NCALL*/SC_fill1();
/*+1062:NCALL*/SC_clear();
/*+1063:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+240.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1064:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1065:NCALL*/SC_M();
/*+1066:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1067:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1068:NCALL*/SC_l();
/*+1069:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+360.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1070:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1071:NCALL*/SC_M();
/*+1072:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1073:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1074:NCALL*/SC_l();
/*+1075:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+120.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1076:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1077:NCALL*/SC_M();
/*+1078:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1079:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+640.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1080:NCALL*/SC_l();
/*+1081:NCALL*/SC_fin();
/*+1082:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1083:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1084:NCALL*/SC_width();
/*+1085:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1086:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1087:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1088:NCALL*/SC_rgb();
/*+1089:NCALL*/SC_stroke();
/*+1090:NCALL*/SC_clear();
/*+1091:NCALL*/SC_Time();
/*+1092:MOV*//*8*/{let dst=(reg_sp4-17);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1093:MOV*//*8*/{let dst=(reg_sp4-45);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1094:MOV*//*8*/{let dst=(reg_sp4-77);let src=(reg_sp4-45);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1095:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1096:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=-1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1097:NCALL*/SC_M();;reg_ip=118;
}
/*1098*/
code[118]=function(){
/*+1098:NCALL*/SC_snd_bufhealth();
/*+1099:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1100:ILDC*/memint32[reg_sp4-16]=+4096
/*+1101:LS*/memint32[reg_sp4-15]=memint32[reg_sp4-17] <memint32[reg_sp4-16]
/*+1102:JMPZ*/if(memint32[reg_sp4-15]==0){reg_ip=124;}else{reg_ip=119;}
}
/*1103*/
code[119]=function(){
/*+1103:ILDC*/memint32[reg_sp4-43]=+0;reg_ip=120;
}
/*1104*/
code[120]=function(){
/*+1104:ILDC*/memint32[reg_sp4-17]=+8
/*+1105:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-43] <memint32[reg_sp4-17]
/*+1106:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=123;}else{reg_ip=121;}
}
/*1107*/
code[121]=function(){
/*+1107:ILDC*/memint32[reg_sp4-1]=+128
/*+1108:IAM*/regs.push(reg_this);reg_this=+1764;reg_this4=reg_this>>2;
/*+1109:CALL*/regs.push(122);reg_ip=102;
}
/*1110*/
code[122]=function(){
/*+1110:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1111:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-43)];
/*+1112:INC*/memint32[reg_sp4-43]=memint32[reg_sp4-43]+1
/*+1113:JMP*/reg_ip=120;
}
/*1114*/
code[123]=function(){
/*+1114:JMP*/reg_ip=118;
}
/*1115*/
code[124]=function(){
/*+1115:ILDC*/memint32[reg_sp4-42]=+0;reg_ip=125;
}
/*1116*/
code[125]=function(){
/*+1116:ILDC*/memint32[reg_sp4-17]=+640
/*+1117:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-42] <memint32[reg_sp4-17]
/*+1118:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=127;}else{reg_ip=126;}
}
/*1119*/
code[126]=function(){
/*+1119:ILDC*/memint32[reg_sp4-17]=+640
/*+1120:SUB*/memint32[reg_sp4-16]=memint32[reg_sp4-42]-memint32[reg_sp4-17]
/*+1121:ILDC*/memint32[reg_sp4-15]=+2
/*+1122:MUL*/memint32[reg_sp4-14]=Math.imul(memint32[reg_sp4-16],memint32[reg_sp4-15]);
/*+1123:ADD*/memint32[reg_sp4-13]=memint32[+442]+memint32[reg_sp4-14]
/*+1124:ILDC*/memint32[reg_sp4-12]=+24000
/*+1125:ADD*/memint32[reg_sp4-11]=memint32[reg_sp4-13]+memint32[reg_sp4-12]
/*+1126:ILDC*/memint32[reg_sp4-10]=+24000
/*+1127:MOD*/memint32[reg_sp4-9]=memint32[reg_sp4-11] %memint32[reg_sp4-10]
/*+1128:MOV*//*4*/memint32[(reg_sp4-8)]=memint32[(+443)];
/*+1129:IDX*/memint32[reg_sp4-8]=memint32[reg_sp4-8]+memint32[reg_sp4-9]*8
/*+1130:MOV*/{let addr=memint32[(reg_sp4-8)];mem8.copyWithin(reg_sp-164,addr,addr+8);}
/*+1131:ILDC*/memint32[reg_sp4-17]=+120
/*+1132:I2F*/{let addr=(reg_sp4-16);cvtflt64[0]=memint32[reg_sp4-17];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1133:FMUL*/{let addr=(reg_sp4-14);cvtflt64[0]=GetFloat4(reg_sp4-41)*GetFloat4(reg_sp4-16);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1134:ILDC*/memint32[reg_sp4-12]=+240
/*+1135:I2F*/{let addr=(reg_sp4-11);cvtflt64[0]=memint32[reg_sp4-12];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1136:FADD*/{let addr=(reg_sp4-9);cvtflt64[0]=GetFloat4(reg_sp4-14)+GetFloat4(reg_sp4-11);memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1137:MOV*//*8*/{let dst=(reg_sp4-4);let src=(reg_sp4-9);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1138:I2F*/{let addr=(reg_sp4-2);cvtflt64[0]=memint32[reg_sp4-42];memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1139:NCALL*/SC_L();
/*+1140:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-42)];
/*+1141:INC*/memint32[reg_sp4-42]=memint32[reg_sp4-42]+1
/*+1142:JMP*/reg_ip=125;
}
/*1143*/
code[127]=function(){
/*+1143:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1144:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+3.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1145:NCALL*/SC_l();
/*+1146:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+240.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1147:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+643.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1148:NCALL*/SC_L();
/*+1149:NCALL*/SC_fin();
/*+1150:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1151:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.400000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1152:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1153:NCALL*/SC_rgb();
/*+1154:NCALL*/SC_fill1();
/*+1155:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1156:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1157:NCALL*/SC_width();
/*+1158:FLDC*/{let addr=(reg_sp4-6);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1159:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1160:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1161:NCALL*/SC_rgb();
/*+1162:NCALL*/SC_stroke();
/*+1163:NCALL*/SC_Time();
/*+1164:MOV*//*8*/{let dst=(reg_sp4-17);let src=(reg_sp4-2);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1165:MOV*//*8*/{let dst=(reg_sp4-6);let src=(reg_sp4-17);memint32[dst]=memint32[src];memint32[dst+1]=memint32[src+1];}
/*+1166:ILDC*/memint32[reg_sp4-4]=+249
/*+1167:ILDC*/memint32[reg_sp4-3]=+64
/*+1168:LEA*/memint32[reg_sp4-14]=reg_sp-156
/*+1169:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-14)];
/*+1170:NCALL*/SC_snprintf();
/*+1171:ILDC*/memint32[reg_sp4-5]=-1
/*+1172:ILDC*/memint32[reg_sp4-4]=+10
/*+1173:ILDC*/memint32[reg_sp4-3]=+10
/*+1174:LEA*/memint32[reg_sp4-16]=reg_sp-156
/*+1175:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1176:NCALL*/SC_stext();
/*+1177:IAM*/regs.push(reg_this);reg_this=+480;reg_this4=reg_this>>2;
/*+1178:CALL*/regs.push(128);reg_ip=45;
}
/*1179*/
code[128]=function(){
/*+1179:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1180:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1181:MOV*//*4*/memint32[(reg_sp4-5)]=memint32[(reg_sp4-17)];
/*+1182:ILDC*/memint32[reg_sp4-4]=+257
/*+1183:ILDC*/memint32[reg_sp4-3]=+64
/*+1184:LEA*/memint32[reg_sp4-15]=reg_sp-156
/*+1185:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-15)];
/*+1186:NCALL*/SC_snprintf();
/*+1187:ILDC*/memint32[reg_sp4-5]=-1
/*+1188:ILDC*/memint32[reg_sp4-4]=+20
/*+1189:ILDC*/memint32[reg_sp4-3]=+10
/*+1190:LEA*/memint32[reg_sp4-16]=reg_sp-156
/*+1191:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1192:NCALL*/SC_stext();
/*+1193:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1194:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.500000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1195:NCALL*/SC_t_0();
/*+1196:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1197:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1198:NCALL*/SC_t_x();
/*+1199:FLDC*/{let addr=(reg_sp4-4);cvtflt64[0]=+1.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1200:FLDC*/{let addr=(reg_sp4-2);cvtflt64[0]=+0.000000;memint32[addr]=cvtint32[0];memint32[addr+1]=cvtint32[1];}
/*+1201:NCALL*/SC_t_y();
/*+1202:LEA*/memint32[reg_sp4-17]=+348
/*+1203:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-17)];
/*+1204:LEA*/memint32[reg_sp4-16]=+344
/*+1205:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1206:LEA*/memint32[reg_sp4-15]=+340
/*+1207:MOV*//*4*/memint32[(reg_sp4-1)]=memint32[(reg_sp4-15)];
/*+1208:NCALL*/SC_GetMouseState();
/*+1209:IAM*/regs.push(reg_this);reg_this=reg_sp-292;reg_this4=reg_this>>2;
/*+1210:CALL*/regs.push(129);reg_ip=24;
}
/*1211*/
code[129]=function(){
/*+1211:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1212:IAM*/regs.push(reg_this);reg_this=reg_sp-292;reg_this4=reg_this>>2;
/*+1213:CALL*/regs.push(130);reg_ip=20;
}
/*1214*/
code[130]=function(){
/*+1214:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1215:IAM*/regs.push(reg_this);reg_this=reg_sp-264;reg_this4=reg_this>>2;
/*+1216:CALL*/regs.push(131);reg_ip=24;
}
/*1217*/
code[131]=function(){
/*+1217:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1218:IAM*/regs.push(reg_this);reg_this=reg_sp-264;reg_this4=reg_this>>2;
/*+1219:CALL*/regs.push(132);reg_ip=20;
}
/*1220*/
code[132]=function(){
/*+1220:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1221:IAM*/regs.push(reg_this);reg_this=reg_sp-236;reg_this4=reg_this>>2;
/*+1222:CALL*/regs.push(133);reg_ip=24;
}
/*1223*/
code[133]=function(){
/*+1223:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1224:IAM*/regs.push(reg_this);reg_this=reg_sp-236;reg_this4=reg_this>>2;
/*+1225:CALL*/regs.push(134);reg_ip=20;
}
/*1226*/
code[134]=function(){
/*+1226:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1227:IAM*/regs.push(reg_this);reg_this=reg_sp-208;reg_this4=reg_this>>2;
/*+1228:CALL*/regs.push(135);reg_ip=24;
}
/*1229*/
code[135]=function(){
/*+1229:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1230:IAM*/regs.push(reg_this);reg_this=reg_sp-208;reg_this4=reg_this>>2;
/*+1231:CALL*/regs.push(136);reg_ip=20;
}
/*1232*/
code[136]=function(){
/*+1232:NOTME*/reg_this=regs.pop();reg_this4=reg_this>>2;
/*+1233:MOV*//*4*/memint32[(+89)]=memint32[(+85)];
/*+1234:MOV*//*4*/memint32[(+90)]=memint32[(+86)];
/*+1235:MOV*//*4*/memint32[(+88)]=memint32[(+87)];
/*+1236:ILDC*/memint32[reg_sp4-2]=+48
/*+1237:NCALL*/SC_KeyPressed();
/*+1238:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1239:JMPZ*/if(memint32[reg_sp4-17]==0){reg_ip=137;}else{reg_ip=137;}
}
/*1240*/
code[137]=function(){
/*+1240:ILDC*/memint32[reg_sp4-2]=+116
/*+1241:NCALL*/SC_KeyPressed();
/*+1242:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1243:JMPZ*/if(memint32[reg_sp4-17]==0){reg_ip=153;}else{reg_ip=138;}
}
/*1244*/
code[138]=function(){
/*+1244:ILDC*/memint32[reg_sp4-23]=+0;reg_ip=139;
}
/*1245*/
code[139]=function(){
/*+1245:ILDC*/memint32[reg_sp4-17]=+16
/*+1246:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-23] <memint32[reg_sp4-17]
/*+1247:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=153;}else{reg_ip=140;}
}
/*1248*/
code[140]=function(){
/*+1248:LEA*/memint32[reg_sp4-16]=+272
/*+1249:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1250:CALL*/regs.push(141);reg_ip=1;
}
/*1251*/
code[141]=function(){
/*+1251:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1252:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];
/*+1253:ILDC*/memint32[reg_sp4-17]=+0
/*+1254:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-22] <memint32[reg_sp4-17]
/*+1255:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=143;}else{reg_ip=142;}
}
/*1256*/
code[142]=function(){
/*+1256:NEG*/memint32[reg_sp4-17]=-memint32[reg_sp4-22]
/*+1257:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];;reg_ip=143;
}
/*1258*/
code[143]=function(){
/*+1258:ILDC*/memint32[reg_sp4-17]=+7
/*+1259:MOD*/memint32[reg_sp4-22]=memint32[reg_sp4-22] %memint32[reg_sp4-17]
/*+1260:LEA*/memint32[reg_sp4-17]=+276
/*+1261:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-23]*1
/*+1262:I2C*/PutChar(memint32[(reg_sp4-17)],memint32[reg_sp4-22]);
/*+1263:LEA*/memint32[reg_sp4-16]=+272
/*+1264:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1265:CALL*/regs.push(144);reg_ip=1;
}
/*1266*/
code[144]=function(){
/*+1266:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1267:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];
/*+1268:ILDC*/memint32[reg_sp4-17]=+0
/*+1269:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-22] <memint32[reg_sp4-17]
/*+1270:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=146;}else{reg_ip=145;}
}
/*1271*/
code[145]=function(){
/*+1271:NEG*/memint32[reg_sp4-17]=-memint32[reg_sp4-22]
/*+1272:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];;reg_ip=146;
}
/*1273*/
code[146]=function(){
/*+1273:ILDC*/memint32[reg_sp4-17]=+7
/*+1274:MOD*/memint32[reg_sp4-22]=memint32[reg_sp4-22] %memint32[reg_sp4-17]
/*+1275:LEA*/memint32[reg_sp4-17]=+292
/*+1276:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-23]*1
/*+1277:I2C*/PutChar(memint32[(reg_sp4-17)],memint32[reg_sp4-22]);
/*+1278:LEA*/memint32[reg_sp4-16]=+272
/*+1279:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1280:CALL*/regs.push(147);reg_ip=1;
}
/*1281*/
code[147]=function(){
/*+1281:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1282:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];
/*+1283:ILDC*/memint32[reg_sp4-17]=+0
/*+1284:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-22] <memint32[reg_sp4-17]
/*+1285:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=149;}else{reg_ip=148;}
}
/*1286*/
code[148]=function(){
/*+1286:NEG*/memint32[reg_sp4-17]=-memint32[reg_sp4-22]
/*+1287:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];;reg_ip=149;
}
/*1288*/
code[149]=function(){
/*+1288:ILDC*/memint32[reg_sp4-17]=+7
/*+1289:MOD*/memint32[reg_sp4-22]=memint32[reg_sp4-22] %memint32[reg_sp4-17]
/*+1290:LEA*/memint32[reg_sp4-17]=+308
/*+1291:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-23]*1
/*+1292:I2C*/PutChar(memint32[(reg_sp4-17)],memint32[reg_sp4-22]);
/*+1293:LEA*/memint32[reg_sp4-16]=+272
/*+1294:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-16)];
/*+1295:CALL*/regs.push(150);reg_ip=1;
}
/*1296*/
code[150]=function(){
/*+1296:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1297:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];
/*+1298:ILDC*/memint32[reg_sp4-17]=+0
/*+1299:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-22] <memint32[reg_sp4-17]
/*+1300:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=152;}else{reg_ip=151;}
}
/*1301*/
code[151]=function(){
/*+1301:NEG*/memint32[reg_sp4-17]=-memint32[reg_sp4-22]
/*+1302:MOV*//*4*/memint32[(reg_sp4-22)]=memint32[(reg_sp4-17)];;reg_ip=152;
}
/*1303*/
code[152]=function(){
/*+1303:ILDC*/memint32[reg_sp4-17]=+7
/*+1304:MOD*/memint32[reg_sp4-22]=memint32[reg_sp4-22] %memint32[reg_sp4-17]
/*+1305:LEA*/memint32[reg_sp4-17]=+324
/*+1306:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-23]*1
/*+1307:I2C*/PutChar(memint32[(reg_sp4-17)],memint32[reg_sp4-22]);
/*+1308:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-23)];
/*+1309:INC*/memint32[reg_sp4-23]=memint32[reg_sp4-23]+1
/*+1310:JMP*/reg_ip=139;
}
/*1311*/
code[153]=function(){
/*+1311:ILDC*/memint32[reg_sp4-2]=+115
/*+1312:NCALL*/SC_KeyPressed();
/*+1313:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-1)];
/*+1314:JMPZ*/if(memint32[reg_sp4-17]==0){reg_ip=167;}else{reg_ip=154;}
}
/*1315*/
code[154]=function(){
/*+1315:ILDC*/memint32[reg_sp4-2]=+265
/*+1316:NCALL*/SC_printf();
/*+1317:ILDC*/memint32[reg_sp4-21]=+0;reg_ip=155;
}
/*1318*/
code[155]=function(){
/*+1318:ILDC*/memint32[reg_sp4-17]=+16
/*+1319:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-21] <memint32[reg_sp4-17]
/*+1320:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=157;}else{reg_ip=156;}
}
/*1321*/
code[156]=function(){
/*+1321:LEA*/memint32[reg_sp4-17]=+276
/*+1322:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-21]*1
/*+1323:ILDC*/memint32[reg_sp4-15]=+48
/*+1324:C2I*/memint32[reg_sp4-14]=GetChar(memint32[(reg_sp4-17)])
/*+1325:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-14]+memint32[reg_sp4-15]
/*+1326:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-13)];
/*+1327:ILDC*/memint32[reg_sp4-2]=+267
/*+1328:NCALL*/SC_printf();
/*+1329:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-21)];
/*+1330:INC*/memint32[reg_sp4-21]=memint32[reg_sp4-21]+1
/*+1331:JMP*/reg_ip=155;
}
/*1332*/
code[157]=function(){
/*+1332:ILDC*/memint32[reg_sp4-2]=+265
/*+1333:NCALL*/SC_printf();
/*+1334:ILDC*/memint32[reg_sp4-20]=+0;reg_ip=158;
}
/*1335*/
code[158]=function(){
/*+1335:ILDC*/memint32[reg_sp4-17]=+16
/*+1336:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-20] <memint32[reg_sp4-17]
/*+1337:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=160;}else{reg_ip=159;}
}
/*1338*/
code[159]=function(){
/*+1338:LEA*/memint32[reg_sp4-17]=+292
/*+1339:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-20]*1
/*+1340:ILDC*/memint32[reg_sp4-15]=+48
/*+1341:C2I*/memint32[reg_sp4-14]=GetChar(memint32[(reg_sp4-17)])
/*+1342:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-14]+memint32[reg_sp4-15]
/*+1343:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-13)];
/*+1344:ILDC*/memint32[reg_sp4-2]=+267
/*+1345:NCALL*/SC_printf();
/*+1346:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-20)];
/*+1347:INC*/memint32[reg_sp4-20]=memint32[reg_sp4-20]+1
/*+1348:JMP*/reg_ip=158;
}
/*1349*/
code[160]=function(){
/*+1349:ILDC*/memint32[reg_sp4-2]=+265
/*+1350:NCALL*/SC_printf();
/*+1351:ILDC*/memint32[reg_sp4-19]=+0;reg_ip=161;
}
/*1352*/
code[161]=function(){
/*+1352:ILDC*/memint32[reg_sp4-17]=+16
/*+1353:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-19] <memint32[reg_sp4-17]
/*+1354:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=163;}else{reg_ip=162;}
}
/*1355*/
code[162]=function(){
/*+1355:LEA*/memint32[reg_sp4-17]=+308
/*+1356:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-19]*1
/*+1357:ILDC*/memint32[reg_sp4-15]=+48
/*+1358:C2I*/memint32[reg_sp4-14]=GetChar(memint32[(reg_sp4-17)])
/*+1359:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-14]+memint32[reg_sp4-15]
/*+1360:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-13)];
/*+1361:ILDC*/memint32[reg_sp4-2]=+267
/*+1362:NCALL*/SC_printf();
/*+1363:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-19)];
/*+1364:INC*/memint32[reg_sp4-19]=memint32[reg_sp4-19]+1
/*+1365:JMP*/reg_ip=161;
}
/*1366*/
code[163]=function(){
/*+1366:ILDC*/memint32[reg_sp4-2]=+265
/*+1367:NCALL*/SC_printf();
/*+1368:ILDC*/memint32[reg_sp4-18]=+0;reg_ip=164;
}
/*1369*/
code[164]=function(){
/*+1369:ILDC*/memint32[reg_sp4-17]=+16
/*+1370:LS*/memint32[reg_sp4-16]=memint32[reg_sp4-18] <memint32[reg_sp4-17]
/*+1371:JMPZ*/if(memint32[reg_sp4-16]==0){reg_ip=166;}else{reg_ip=165;}
}
/*1372*/
code[165]=function(){
/*+1372:LEA*/memint32[reg_sp4-17]=+324
/*+1373:IDX*/memint32[reg_sp4-17]=memint32[reg_sp4-17]+memint32[reg_sp4-18]*1
/*+1374:ILDC*/memint32[reg_sp4-15]=+48
/*+1375:C2I*/memint32[reg_sp4-14]=GetChar(memint32[(reg_sp4-17)])
/*+1376:ADD*/memint32[reg_sp4-13]=memint32[reg_sp4-14]+memint32[reg_sp4-15]
/*+1377:MOV*//*4*/memint32[(reg_sp4-3)]=memint32[(reg_sp4-13)];
/*+1378:ILDC*/memint32[reg_sp4-2]=+267
/*+1379:NCALL*/SC_printf();
/*+1380:MOV*//*4*/memint32[(reg_sp4-17)]=memint32[(reg_sp4-18)];
/*+1381:INC*/memint32[reg_sp4-18]=memint32[reg_sp4-18]+1
/*+1382:JMP*/reg_ip=164;
}
/*1383*/
code[166]=function(){
/*+1383:ILDC*/memint32[reg_sp4-2]=+265
/*+1384:NCALL*/SC_printf();
/*+1385:ILDC*/memint32[reg_sp4-2]=+265
/*+1386:NCALL*/SC_printf();;reg_ip=167;
}
/*1387*/
code[167]=function(){
/*+1387:INT*/int_code=+10;interrupt=true;;reg_ip=168;
}
/*1388*/
code[168]=function(){
/*+1388:JMP*/reg_ip=117;
}
/*1389*/
code[169]=function(){
/*+1389:ILDC*/memint32[reg_sp4-78]=+0
/*+1390:ADDSP*/reg_sp+=-308;reg_sp4=reg_sp>>2;
/*+1391:RET*/reg_ip=regs.pop();
}
/*1392*/
code[170]=function(){
/*+1392:ADDSP*/reg_sp+=+4;reg_sp4=reg_sp>>2;
/*+1393:MOV*/{let addr=+132;mem8.copyWithin(+384,addr,addr+96);}
/*+1394:CALL*/regs.push(171);reg_ip=114;
}
/*1395*/
code[171]=function(){
/*+1395:MOV*//*4*/memint32[(reg_sp4-2)]=memint32[(reg_sp4-1)];
/*+1396:ADDSP*/reg_sp+=-4;reg_sp4=reg_sp>>2;
/*+1397:FIN*/interrupt=true;quit=true;
}
let start_addr=170
let start_rsp=1796
let graphics=1
let sound=1
