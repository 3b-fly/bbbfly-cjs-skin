/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.1
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.map=bbbfly.morph.map||{};
bbbfly.morph.MapBox=function(a,b,c){a=a||{};ng_MergeDef(a,{Data:{BoundsPadding:{L:80,R:80,T:80,B:80}},Controls:{Map:{L:0,R:0,T:0,B:0}},ModifyControls:{ModeBar:{Type:"bbbfly.morph.MapModeBar",IgnoreModifyIfMissing:!0},SideBar:{Type:"bbbfly.morph.MapSideBar",IgnoreModifyIfMissing:!0},ZoomSlider:{Type:"bbbfly.morph.MapZoomSlider",IgnoreModifyIfMissing:!0},Copyrights:{Type:"bbbfly.morph.MapCopyrights",IgnoreModifyIfMissing:!0},Layers:{Type:"bbbfly.morph.MapLayers",IgnoreModifyIfMissing:!0}}});bbbfly.morph.misc.ApplyClassName(a,
"MapBox");return ngCreateControlAsType(a,"bbbfly.MapBox",b,c)};
bbbfly.morph.MapSideBar=function(a,b,c){a=a||{};ng_MergeDef(a,{CreteFromType:"bbbfly.morph.ContentWrapper",SectionDef:{Type:"bbbfly.Wrapper",Data:{WrapperOptions:{AutoSize:!0,TrackChanges:!0}}},ButtonDef:{Type:"bbbfly.morph.ContentIconButton"},Data:{WrapperOptions:{AutoSize:!0,TrackChanges:!0}},Controls:{MapControls:{ModifyControls:{Layers:{IgnoreModifyIfMissing:!0,Data:{Icon:"layers"}},Copyrights:{IgnoreModifyIfMissing:!0,Data:{Icon:"copyright"}}}}}});return ngCreateControlAsType(a,"bbbfly.MapSideBar",
b,c)};
bbbfly.morph.MapZoomSlider=function(a,b,c){a=a||{};var d=bbbfly.Morph.GetObjTheme(a);ng_MergeDef(a,{Controls:{ZoomIn:{Type:"bbbfly.morph.PanelIconButton",style:{zIndex:2},Data:{Icon:"plus"}},ZoomOut:{Type:"bbbfly.morph.PanelIconButton",style:{zIndex:2},Data:{Icon:"minus"}},Slider:{Type:"bbbfly.morph.ContentFrame",style:{zIndex:1},Controls:{Rail:{Type:"bbbfly.Frame",Data:{Theme:d?d.ID:null}},Handle:{Type:"bbbfly.morph.InverseButton"}}}}});bbbfly.morph.misc.ApplyClassName(a.Controls.Slider.Controls.Rail,"SliderRail");
return ngCreateControlAsType(a,"bbbfly.MapZoomSlider",b,c)};
bbbfly.morph.MapCopyrights=function(a,b,c){a=a||{};ng_MergeDef(a,{CreteFromType:"bbbfly.morph.ContentFrame",Controls:{TitlePanel:{Controls:{Refresh:{Type:"bbbfly.morph.ContentIconButton",Data:{Icon:"refresh"}},Title:{Type:"bbbfly.morph.Title",Data:{TextAlign:bbbfly.Text.textalign.center}},Close:{Type:"bbbfly.morph.ContentIconButton",Data:{Icon:"close"}}}},CopyrightsPanel:{Type:"bbbfly.morph.InputFrame",Controls:{CopyrightsText:{Type:"bbbfly.morph.Text",Data:{AutoSize:bbbfly.Text.autosize.vertical}}}}}});
return ngCreateControlAsType(a,"bbbfly.MapCopyrights",b,c)};
bbbfly.morph.MapLayers=function(a,b,c){a=a||{};ng_MergeDef(a,{CreteFromType:"bbbfly.morph.ContentFrame",Controls:{TitlePanel:{Controls:{Refresh:{Type:"bbbfly.morph.ContentIconButton",Data:{Icon:"refresh"}},Title:{Type:"bbbfly.morph.Title",Data:{TextAlign:bbbfly.Text.textalign.center}},Close:{Type:"bbbfly.morph.ContentIconButton",Data:{Icon:"close"}}}},List:{Type:"bbbfly.morph.ContentCheckList"}}});return ngCreateControlAsType(a,"bbbfly.MapLayers",b,c)};
bbbfly.morph.MapModeBar=function(a,b,c){a=a||{};ng_MergeDef(a,{CreteFromType:"bbbfly.morph.ContentWrapper",style:{zIndex:3},Data:{WrapperOptions:{AutoSize:!0,TrackChanges:!0},FrameDef:{Type:"bbbfly.Wrapper",Data:{WrapperOptions:{AutoSize:!0,TrackChanges:!0}}},ButtonDef:{Type:"bbbfly.morph.ContentIconButton"}}});return ngCreateControlAsType(a,"bbbfly.MapModeBar",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_map={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.MapBox",bbbfly.morph.MapBox);bbbfly.Morph.RegisterControlType("bbbfly.morph.MapSideBar",bbbfly.morph.MapSideBar);bbbfly.Morph.RegisterControlType("bbbfly.morph.MapZoomSlider",bbbfly.morph.MapZoomSlider);bbbfly.Morph.RegisterControlType("bbbfly.morph.MapCopyrights",bbbfly.morph.MapCopyrights);bbbfly.Morph.RegisterControlType("bbbfly.morph.MapLayers",bbbfly.morph.MapLayers);bbbfly.Morph.RegisterControlType("bbbfly.morph.MapModeBar",
bbbfly.morph.MapModeBar)}};
