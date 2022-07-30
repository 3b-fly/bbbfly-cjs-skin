/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6","es3");
$jscomp.polyfill("Number.isInteger",function(a){return a?a:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6","es3");var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.frame=bbbfly.morph.theme.frame||{};bbbfly.morph.theme.frame.medium=bbbfly.morph.theme.frame.medium||{};bbbfly.morph.theme.frame.medium.images={};
bbbfly.morph.theme.frame.medium.images._padding=function(a){Object.isObject(a)?ng_MergeVar(a,{L:0,T:0,R:0,B:0}):a=Number.isInteger(a)?{L:a,T:a,R:a,B:a}:{L:0,T:0,R:0,B:0};return a};bbbfly.morph.theme.frame.medium.images._image=function(a,b){b=this.Padding(b);return{T:0+b.T,L:0+b.L,oL:30+b.L,SL:60+b.L,oSL:90+b.L,DL:120+b.L,DSL:150+b.L,W:28-b.L-b.R,H:28-b.T-b.B,Src:{Img:"image",Anchor:a}}};
bbbfly.morph.theme.frame.medium.images._progressRing=function(a){return{T:0,L:0,DL:42,W:40,H:40,Src:{Img:"progress",Anchor:a}}};
bbbfly.morph.theme.frame.medium.images._panelFrame=function(a){var b={Img:"frame",Anchor:a},c={Img:"frame_h",Anchor:a};a={Img:"frame_v",Anchor:a};return{LeftTop:{L:0,DL:30,T:0,W:2,H:2,Src:b},Top:{L:0,T:0,DT:30,H:2,Src:c},RightTop:{L:26,DL:56,T:0,W:2,H:2,Src:b},Left:{L:0,DL:30,T:0,W:2,Src:a},Right:{L:26,DL:56,T:0,W:2,Src:a},LeftBottom:{L:0,DL:30,T:26,W:2,H:2,Src:b},Bottom:{L:0,T:26,DT:56,H:2,Src:c},RightBottom:{L:26,DL:56,T:26,W:2,H:2,Src:b}}};
bbbfly.morph.theme.frame.medium.images._hLineFrame=function(a){return{Left:{L:0,DL:30,T:12,W:3,H:3,Src:{Img:"frame",Anchor:a}},Center:{L:0,T:0,DT:5,H:3,Src:{Img:"frame_h",Anchor:a}},Right:{L:25,DL:55,T:12,W:3,H:3,Src:{Img:"frame",Anchor:a}}}};bbbfly.morph.theme.frame.medium.images._vLineFrame=function(a){return{Top:{L:12,DL:42,T:0,W:3,H:3,Src:{Img:"frame",Anchor:a}},Center:{L:0,DL:5,T:0,W:3,Src:{Img:"frame_v",Anchor:a}},Bottom:{L:12,DL:42,T:25,W:3,H:3,Src:{Img:"frame",Anchor:a}}}};
bbbfly.morph.theme.frame.medium.images._hintFrame=function(a){var b={Img:"frame",Anchor:a},c={Img:"frame_h",Anchor:a};a={Img:"frame_v",Anchor:a};return{LeftTop:{L:0,DL:30,T:0,W:4,H:4,Src:b},Top:{L:0,T:0,DT:30,H:4,Src:c},RightTop:{L:24,DL:54,T:0,W:4,H:4,Src:b},Left:{L:0,DL:30,T:0,W:4,Src:a},Right:{L:24,DL:54,T:0,W:4,Src:a},LeftBottom:{L:0,DL:30,T:24,W:4,H:4,Src:b},Bottom:{L:0,T:24,DT:54,H:4,Src:c},RightBottom:{L:24,DL:54,T:24,W:4,H:4,Src:b}}};
bbbfly.morph.theme.frame.medium.images._hintAnchors=function(a){a={Img:"frame",Anchor:a};return{lefttop:{L:-13,T:7,HX:0,HY:7,Img:{L:74,DL:104,T:14,W:14,H:14,Src:a}},leftbottom:{L:-13,B:7,HX:0,HY:7,Img:{L:74,DL:104,T:14,W:14,H:14,Src:a}},righttop:{R:-13,T:7,HX:13,HY:7,Img:{L:60,DL:90,T:0,W:14,H:14,Src:a}},rightbottom:{R:-13,B:7,HX:13,HY:7,Img:{L:60,DL:90,T:0,W:14,H:14,Src:a}},topleft:{L:7,T:-13,HX:7,HY:1,Img:{L:60,DL:90,T:14,W:14,H:14,Src:a}},topright:{R:7,T:-13,HX:7,HY:1,Img:{L:60,DL:90,T:14,W:14,
H:14,Src:a}},bottomright:{R:7,B:-13,HX:7,HY:13,Img:{L:74,DL:104,T:0,W:14,H:14,Src:a}},bottomleft:{L:7,B:-13,HX:7,HY:13,Img:{L:74,DL:104,T:0,W:14,H:14,Src:a}}}};
bbbfly.morph.theme.frame.medium.images._buttonFrame=function(a){var b={Img:"button",Anchor:a},c={Img:"button_h",Anchor:a};a={Img:"button_v",Anchor:a};return{LeftTop:{L:0,oL:30,SL:60,oSL:90,DL:120,DSL:150,T:0,W:3,H:3,IL:180,oIL:210,ISL:240,oISL:270,DIL:300,DISL:330,Src:b},Top:{T:0,oT:30,ST:60,oST:90,DT:120,DST:150,L:0,H:3,IT:180,oIT:210,IST:240,oIST:270,DIT:300,DIST:330,Src:c},RightTop:{L:25,oL:55,SL:85,oSL:115,DL:145,DSL:175,T:0,W:3,H:3,IL:205,oIL:235,ISL:265,oISL:295,DIL:325,DISL:355,Src:b},Left:{L:0,
oL:30,SL:60,oSL:90,DL:120,DSL:150,T:0,W:3,IL:180,oIL:210,ISL:240,oISL:270,DIL:300,DISL:330,Src:a},Right:{L:25,oL:55,SL:85,oSL:115,DL:145,DSL:175,T:0,W:3,IL:205,oIL:235,ISL:265,oISL:295,DIL:325,DISL:355,Src:a},LeftBottom:{L:0,oL:30,SL:60,oSL:90,DL:120,DSL:150,T:25,W:3,H:3,IL:180,oIL:210,ISL:240,oISL:270,DIL:300,DISL:330,Src:b},Bottom:{T:25,oT:55,ST:85,oST:115,DT:145,DST:175,L:0,H:3,IT:355,oIT:235,IST:265,oIST:295,DIT:325,DIST:355,Src:c},RightBottom:{L:25,oL:55,SL:85,oSL:115,DL:145,DSL:175,T:25,W:3,
H:3,IL:205,oIL:235,ISL:265,oISL:295,DIL:325,DISL:355,Src:b}}};bbbfly.morph.theme.frame.medium.images._buttonImage=function(a,b){b=this.Padding(b);return{T:0+b.T,L:0+b.L,oL:30+b.L,SL:60+b.L,oSL:90+b.L,DL:120+b.L,DSL:150+b.L,IL:180+b.L,oIL:210+b.L,ISL:240+b.L,oISL:270+b.L,DIL:300+b.L,DISL:330+b.L,W:28-b.L-b.R,H:28-b.T-b.B,Src:{Img:"button",Anchor:a}}};
bbbfly.morph.theme.frame.medium.images._buttonIcon=function(a,b){b=this.Padding(b);var c={},d;for(d in this.Icons){var e=this.Icons[d];Number.isInteger(e)||(e=-1);c[d]={T:0+30*e+b.T,L:0+b.L,oL:30+b.L,SL:60+b.L,oSL:90+b.L,DL:120+b.L,DSL:120+b.L,W:28-b.L-b.R,H:28-b.T-b.B,Src:{Img:"icon",Anchor:a}}}return c};
bbbfly.morph.theme.frame.medium.Images={Sources:function(){return{image:{Path:"morph-medium-image.png?2",Anchors:{list_check:{L:0,T:0},list_tree:{L:0,T:30},menu_check:{L:0,T:60},menu_tree:{L:0,T:90},menu_sub:{L:0,T:120},edit_drop:{L:0,T:150}}},progress:{Path:"morph-medium-progress.gif?2",Anchors:{ring:{L:0,T:0}}},frame:{Path:"morph-medium-frame.png?2",Anchors:{line_outer:{L:0,T:0},line_inner:{L:0,T:30},frame_outer:{L:0,T:60},frame_inner:{L:0,T:90},frame_hint_warn:{L:0,T:120},frame_hint_error:{L:0,
T:150},frame_hint_submit:{L:0,T:180},frame_hint_info:{L:0,T:210}}},frame_h:{Path:"morph-medium-frame_h.png?2",Anchors:{line_outer:{L:0,T:0},line_inner:{L:0,T:10},frame_outer:{L:0,T:20},frame_inner:{L:0,T:80},frame_hint_warn:{L:0,T:140},frame_hint_error:{L:0,T:200},frame_hint_submit:{L:0,T:260},frame_hint_info:{L:0,T:320}}},frame_v:{Path:"morph-medium-frame_v.png?2",Anchors:{line_outer:{L:0,T:0},line_inner:{L:10,T:0},frame_outer:{L:20,T:0},frame_inner:{L:80,T:0},frame_hint_warn:{L:140,T:0},frame_hint_error:{L:200,
T:0},frame_hint_submit:{L:260,T:0},frame_hint_info:{L:320,T:0}}},button:{Path:"morph-medium-button.png?2",Anchors:{button_panel:{L:0,T:0},button_inverse:{L:0,T:30},button_std:{L:0,T:60},button_flat:{L:0,T:90},button_input:{L:0,T:120},button_check:{L:0,T:150},button_radio:{L:0,T:180}}},button_h:{Path:"morph-medium-button_h.png?2",Anchors:{button_panel:{L:0,T:0},button_inverse:{L:0,T:360},button_std:{L:0,T:720},button_flat:{L:0,T:1080},button_input:{L:0,T:1440}}},button_v:{Path:"morph-medium-button_v.png?2",
Anchors:{button_panel:{L:0,T:0},button_inverse:{L:360,T:0},button_std:{L:720,T:0},button_flat:{L:1080,T:0},button_input:{L:1440,T:0}}},icon:{Path:"morph-medium-icon.png?2",Anchors:{misc:{L:0,T:0}}}}},Images:function(){return{Image:{List:{Check:this.Image("list_check",{R:6,T:4,B:4}),Tree:this.Image("list_tree",{L:4,R:4,T:4,B:4})},Menu:{Check:this.Image("menu_check",{R:6,T:2,B:2}),Tree:this.Image("menu_tree",{L:4,R:4,T:2,B:2}),SubMenu:this.Image("menu_sub",{L:4,R:4,T:2,B:2})},Edit:{DropDown:this.Image("edit_drop")}},
Line:{Outer:{Horizontal:this.HLineFrame("line_outer"),Vertical:this.VLineFrame("line_outer")},Inner:{Horizontal:this.HLineFrame("line_inner"),Vertical:this.VLineFrame("line_inner")}},Frame:{Outer:this.PanelFrame("frame_outer"),Inner:this.PanelFrame("frame_inner")},HintFrame:{Frame:{Warn:this.HintFrame("frame_hint_warn"),Error:this.HintFrame("frame_hint_error"),Submit:this.HintFrame("frame_hint_submit"),Info:this.HintFrame("frame_hint_info")},Anchors:{Warn:this.HintAnchors("frame_hint_warn"),Error:this.HintAnchors("frame_hint_error"),
Submit:this.HintAnchors("frame_hint_submit"),Info:this.HintAnchors("frame_hint_info")}},Progress:{Ring:this.ProgressRing("ring")},ButtonFrame:{Panel:this.ButtonFrame("button_panel"),Inverse:this.ButtonFrame("button_inverse"),Std:this.ButtonFrame("button_std"),Flat:this.ButtonFrame("button_flat"),Input:this.ButtonFrame("button_input")},Button:{Panel:{Center:this.ButtonImage("button_panel")},Flat:{Center:this.ButtonImage("button_flat")},Check:this.ButtonImage("button_check",4),Radio:this.ButtonImage("button_radio",
3)},Icon:{Button:this.ButtonIcon("misc")}}},Icons:{none:-1,plus:0,minus:1,add:2,remove:3,up:4,down:5,left:6,right:7,close:8,refresh:9,edit:10,delete:11,settings:12,search:13,filter:14,list:15,layers:16,copyright:17,drop:18,circle:19,set:20},Padding:bbbfly.morph.theme.frame.medium.images._padding,Image:bbbfly.morph.theme.frame.medium.images._image,ProgressRing:bbbfly.morph.theme.frame.medium.images._progressRing,PanelFrame:bbbfly.morph.theme.frame.medium.images._panelFrame,HLineFrame:bbbfly.morph.theme.frame.medium.images._hLineFrame,
VLineFrame:bbbfly.morph.theme.frame.medium.images._vLineFrame,HintFrame:bbbfly.morph.theme.frame.medium.images._hintFrame,HintAnchors:bbbfly.morph.theme.frame.medium.images._hintAnchors,ButtonFrame:bbbfly.morph.theme.frame.medium.images._buttonFrame,ButtonImage:bbbfly.morph.theme.frame.medium.images._buttonImage,ButtonIcon:bbbfly.morph.theme.frame.medium.images._buttonIcon};
