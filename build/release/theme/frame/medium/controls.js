/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.1
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.frame=bbbfly.morph.theme.frame||{};bbbfly.morph.theme.frame.medium=bbbfly.morph.theme.frame.medium||{};bbbfly.morph.theme.frame.medium.controls={};bbbfly.morph.theme.frame.medium.controls._getButtonIcon=function(){if(String.isString(this.Icon)&&Object.isObject(this._IconRefs)){var a=this._IconRefs[this.Icon];return Object.isObject(a)?a:null}return this.GetIcon.callParent()};
bbbfly.morph.theme.frame.medium.controls.ApplyBtnIcon=function(a,b){ng_MergeDef(a,{Data:{_IconRefs:b.Icon.Button},Methods:{GetIcon:bbbfly.morph.theme.frame.medium.controls._getButtonIcon}})};bbbfly.morph.theme.frame.medium.controls.ContentFrame=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Outer}})};bbbfly.morph.theme.frame.medium.controls.InputFrame=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Inner}})};
bbbfly.morph.theme.frame.medium.controls.ContentSeparator=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Line.Inner}})};bbbfly.morph.theme.frame.medium.controls.TextHint=function(a,b){ng_MergeDef(a,{Data:{Frame:b.HintFrame.Frame,Anchors:b.HintFrame.Anchors},ControlsPanel:{className:"ControlsPanel"},Controls:{Hint:{className:"Hint"}}})};bbbfly.morph.theme.frame.medium.controls.ProgressRing=function(a,b){ng_MergeDef(a,{Data:{Image:b.Progress.Ring}})};
bbbfly.morph.theme.frame.medium.controls.ProgressBar=function(a,b){ng_MergeDef(a,{H:10,Data:{Frame:b.Frame.Inner},Controls:{Indicator:{T:0,B:0}}})};bbbfly.morph.theme.frame.medium.controls.PanelButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Panel,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.ContentButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Std,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.ContentFlatButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Flat,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.ContentInputButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Input,Indent:{L:-3,T:-3,R:-3,B:-3}}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.LargeContentButton=function(a,b){ng_MergeDef(a,{Data:{Frame:b.ButtonFrame.Std,Indent:{L:11,T:11,R:11,B:11}}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.PanelIconButton=function(a,b){ng_MergeDef(a,{W:28,H:28,Data:{Frame:b.Button.Panel}});this.ApplyBtnIcon(a,b)};bbbfly.morph.theme.frame.medium.controls.ContentIconButton=function(a,b){ng_MergeDef(a,{W:28,H:28,Data:{Frame:b.Button.Flat}});this.ApplyBtnIcon(a,b)};
bbbfly.morph.theme.frame.medium.controls.ContentCheckBox=function(a,b){ng_MergeDef(a,{Data:{Icon:b.Button.Check}})};bbbfly.morph.theme.frame.medium.controls.ContentRadioButton=function(a,b){ng_MergeDef(a,{Data:{Icon:b.Button.Radio}})};bbbfly.morph.theme.frame.medium.controls.ContentList=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Inner,CheckImg:b.Image.List.Check,ListIndent:0,DefaultIndent:15}})};bbbfly.morph.theme.frame.medium.controls.ContentTreeList=function(a,b){ng_MergeDef(a,{Data:{TreeImg:b.Image.List.Tree}})};
bbbfly.morph.theme.frame.medium.controls.PopupMenu=function(a,b){ng_MergeDef(a,{Data:{Frame:b.Frame.Outer,SubMenuImg:b.Image.Menu.SubMenu,CheckImg:b.Image.Menu.Check}})};
bbbfly.morph.theme.frame.medium.controls.SkinControl=function(a,b){if(Object.isObject(a)&&Object.isObject(b))switch(a.Type){case "bbbfly.morph.ContentFrame":this.ContentFrame(a,b);break;case "bbbfly.morph.InputFrame":this.InputFrame(a,b);break;case "bbbfly.morph.ContentSeparator":this.ContentSeparator(a,b);break;case "bbbfly.morph.ContentGrid":this.ContentFrame(a,b);break;case "bbbfly.morph.ContentWrapper":this.ContentFrame(a,b);break;case "bbbfly.morph.TextHint":this.TextHint(a,b);break;case "bbbfly.morph.ProgressRing":this.ProgressRing(a,
b);break;case "bbbfly.morph.ProgressBar":this.ProgressBar(a,b);break;case "bbbfly.morph.PanelButton":this.PanelButton(a,b);break;case "bbbfly.morph.PanelIconButton":this.PanelIconButton(a,b);break;case "bbbfly.morph.ContentButton":this.ContentButton(a,b);break;case "bbbfly.morph.LargeContentButton":this.LargeContentButton(a,b);break;case "bbbfly.morph.ContentFlatButton":this.ContentFlatButton(a,b);break;case "bbbfly.morph.ContentInputButton":this.ContentInputButton(a,b);break;case "bbbfly.morph.ContentIconButton":this.ContentIconButton(a,
b);break;case "bbbfly.morph.ContentCheckBox":this.ContentCheckBox(a,b);break;case "bbbfly.morph.ContentRadioButton":this.ContentRadioButton(a,b);break;case "bbbfly.morph.ContentList":this.ContentList(a,b);break;case "bbbfly.morph.ContentTreeList":this.ContentTreeList(a,b);break;case "bbbfly.morph.PopupMenu":this.PopupMenu(a,b)}};
