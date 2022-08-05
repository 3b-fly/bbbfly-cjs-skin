/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6","es3");
$jscomp.polyfill("Number.isInteger",function(a){return a?a:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6","es3");var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.frame=bbbfly.morph.theme.frame||{};bbbfly.morph.theme.frame.medium=bbbfly.morph.theme.frame.medium||{};bbbfly.morph.theme.frame.medium.controls={};
bbbfly.morph.theme.frame.medium.controls._getButtonIcon=function(){if(String.isString(this.Icon)&&Object.isObject(this._IconRefs)){var a=this._IconRefs[this.Icon];return Object.isObject(a)?a:null}return this.GetIcon.callParent()};
bbbfly.morph.theme.frame.medium.controls._positionMap=function(){var a=this.Owner.Map;if(a){var b={L:0,R:0},c=this.Owner.ZoomSlider;c&&c.Visible&&(Number.isInteger(c.Bounds.L)?(b.L+=c.Bounds.L,Number.isInteger(c.Bounds.W)&&(b.L+=c.Bounds.W)):Number.isInteger(c.Bounds.R)&&(b.R+=c.Bounds.R,Number.isInteger(c.Bounds.W)&&(b.R+=c.Bounds.W)));a.SetBounds(b)&&a.Update()}};bbbfly.morph.theme.frame.medium.controls.ApplyBtnIcon=function(a,b){ng_MergeDef(a,{Data:{_IconRefs:b.Icon.Button},Methods:{GetIcon:bbbfly.morph.theme.frame.medium.controls._getButtonIcon}})};
bbbfly.morph.theme.frame.medium.controls.ContentFrame=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Outer}})};bbbfly.morph.theme.frame.medium.controls.InputFrame=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Inner}})};bbbfly.morph.theme.frame.medium.controls.ContentSeparator=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Line.Inner}})};
bbbfly.morph.theme.frame.medium.controls.TextHint=function(a,b){ng_MergeDef(a,{Data:{Frame:b.HintFrame.Frame,Anchors:b.HintFrame.Anchors},ControlsPanel:{className:"ControlsPanel"},Controls:{Hint:{className:"Hint"}}})};bbbfly.morph.theme.frame.medium.controls.ProgressRing=function(a,b){ng_MergeDef(a,{Data:{Image:b.Progress.Ring}})};bbbfly.morph.theme.frame.medium.controls.ProgressBar=function(a,b){ng_MergeDef(a,{H:10,Data:{Frame:b.Frame.Inner},Controls:{Indicator:{T:0,B:0}}})};
bbbfly.morph.theme.frame.medium.controls.PanelButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Panel,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.InverseButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Inverse,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.ContentButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Std,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.ContentFlatButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Flat,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.ContentInputButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Input,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.LargeContentButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Std,Indent:{L:11,T:11,R:11,B:11}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.PanelIconButton=function(a,b){ng_MergeDef(a,{W:28,H:28,Data:{Frame:b.Button.Panel}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.ContentIconButton=function(a,b){ng_MergeDef(a,{W:28,H:28,Data:{Frame:b.Button.Flat}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.ContentCheckBox=function(a,b){ng_MergeDef(a,{Data:{Icon:b.Button.Check}})};bbbfly.morph.theme.frame.medium.controls.ContentRadioButton=function(a,b){ng_MergeDef(a,{Data:{Icon:b.Button.Radio}})};
bbbfly.morph.theme.frame.medium.controls.ContentList=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Inner,CheckImg:b.Image.List.Check,ListIndent:0,DefaultIndent:15}})};bbbfly.morph.theme.frame.medium.controls.ContentTreeList=function(a,b){ng_MergeDef(a,{Data:{TreeImg:b.Image.List.Tree}})};bbbfly.morph.theme.frame.medium.controls.PopupMenu=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Outer,SubMenuImg:b.Image.Menu.SubMenu,CheckImg:b.Image.Menu.Check}})};
bbbfly.morph.theme.frame.medium.controls.MapBox=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Inner},ModifyControls:{Copyrights:{R:30,W:320,T:-1,B:-1,IgnoreModifyIfMissing:!0},Layers:{R:30,W:320,T:-1,B:-1,IgnoreModifyIfMissing:!0},DrawBar:{R:-1,T:-1,IgnoreModifyIfMissing:!0},ModeBar:{R:-1,T:-1,IgnoreModifyIfMissing:!0},SideBar:{R:-1,B:-1,IgnoreModifyIfMissing:!0},ZoomSlider:{L:-1,T:-1,B:-1,IgnoreModifyIfMissing:!0,Events:{OnUpdated:bbbfly.morph.theme.frame.medium.controls._positionMap}}}})};
bbbfly.morph.theme.frame.medium.controls.MapSideBar=function(a,b){ng_MergeDef(a,{W:32,SectionDef:{L:0,R:0}})};bbbfly.morph.theme.frame.medium.controls.MapZoomSlider=function(a,b){ng_MergeDef(a,{W:28,Controls:{ZoomIn:{L:0,T:0},ZoomOut:{L:0,B:0},Slider:{L:0,R:0,T:27,B:27,Data:{HandleIndent:11},Controls:{Rail:{L:"50%",W:6,T:10,B:10,style:{marginLeft:"-3px"},Data:{Frame:b.Frame.Inner}},Handle:{L:"50%",W:24,H:8,style:{marginLeft:"-12px",marginTop:"-4px"},Data:{Frame:b.ButtonFrame.Handle}}}}}})};
bbbfly.morph.theme.frame.medium.controls.MapCopyrights=function(a,b){ng_MergeDef(a,{Controls:{TitlePanel:{L:5,R:5,T:5,H:28,Controls:{Refresh:{L:0,T:0},Title:{H:bbbfly.morph.Title.LineHeight,L:33,R:33,T:0},Close:{R:0,T:0}}},CopyrightsPanel:{L:5,R:5,T:38,B:5,Controls:{CopyrightsText:{L:10,R:10,T:0,style:{paddingTop:"5px",paddingBottom:"5px"}}}}}})};bbbfly.morph.theme.frame.medium.controls.MapDrawBar=function(a,b){ng_MergeDef(a,{W:32,Data:{FrameDef:{L:0,R:0}}})};
bbbfly.morph.theme.frame.medium.controls.MapLayers=function(a,b){ng_MergeDef(a,{Controls:{TitlePanel:{L:5,R:5,T:5,H:28,Controls:{Refresh:{L:0,T:0},Title:{H:bbbfly.morph.Title.LineHeight,L:33,R:33,T:0},Close:{R:0,T:0}}},List:{L:5,R:5,T:38,B:5}}})};bbbfly.morph.theme.frame.medium.controls.MapModeBar=function(a,b){ng_MergeDef(a,{W:32,Data:{FrameDef:{L:0,R:0}}})};
bbbfly.morph.theme.frame.medium.controls.SkinControl=function(a,b){if(Object.isObject(a)&&Object.isObject(b))switch(a.Type){case "bbbfly.morph.ContentFrame":this.ContentFrame(a,b);break;case "bbbfly.morph.InputFrame":this.InputFrame(a,b);break;case "bbbfly.morph.ContentSeparator":this.ContentSeparator(a,b);break;case "bbbfly.morph.ContentGrid":this.ContentFrame(a,b);break;case "bbbfly.morph.ContentWrapper":this.ContentFrame(a,b);break;case "bbbfly.morph.ContentInputBar":this.InputFrame(a,b);break;
case "bbbfly.morph.TextHint":this.TextHint(a,b);break;case "bbbfly.morph.ProgressRing":this.ProgressRing(a,b);break;case "bbbfly.morph.ProgressBar":this.ProgressBar(a,b);break;case "bbbfly.morph.PanelButton":this.PanelButton(a,b);break;case "bbbfly.morph.InverseButton":this.InverseButton(a,b);break;case "bbbfly.morph.PanelIconButton":this.PanelIconButton(a,b);break;case "bbbfly.morph.ContentButton":this.ContentButton(a,b);break;case "bbbfly.morph.LargeContentButton":this.LargeContentButton(a,b);break;
case "bbbfly.morph.ContentFlatButton":this.ContentFlatButton(a,b);break;case "bbbfly.morph.ContentInputButton":this.ContentInputButton(a,b);break;case "bbbfly.morph.ContentIconButton":this.ContentIconButton(a,b);break;case "bbbfly.morph.ContentCheckBox":this.ContentCheckBox(a,b);break;case "bbbfly.morph.ContentRadioButton":this.ContentRadioButton(a,b);break;case "bbbfly.morph.ContentList":this.ContentList(a,b);break;case "bbbfly.morph.ContentTreeList":this.ContentTreeList(a,b);break;case "bbbfly.morph.PopupMenu":this.PopupMenu(a,
b);break;case "bbbfly.morph.MapBox":this.MapBox(a,b);break;case "bbbfly.morph.MapSideBar":this.MapSideBar(a,b);break;case "bbbfly.morph.MapZoomSlider":this.MapZoomSlider(a,b);break;case "bbbfly.morph.MapCopyrights":this.MapCopyrights(a,b);break;case "bbbfly.morph.MapDrawBar":this.MapDrawBar(a,b);break;case "bbbfly.morph.MapLayers":this.MapLayers(a,b);break;case "bbbfly.morph.MapModeBar":this.MapModeBar(a,b)}};
