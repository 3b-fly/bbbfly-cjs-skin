/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.line={};bbbfly.morph.line._getFrame=function(){var a=this.GetFrame.callParent();if(Object.isObject(a))switch(this.Orientation){case bbbfly.Line.orientation.horizontal:a=a.Horizontal;break;case bbbfly.Line.orientation.vertical:a=a.Vertical}return Object.isObject(a)?a:{}};
bbbfly.morph.ContentPanel=function(a,b,c){bbbfly.morph.misc.ApplyShade(a);bbbfly.morph.misc.ApplyClassName(a,"ContentPanel");return ngCreateControlAsType(a,"bbbfly.Panel",b,c)};bbbfly.morph.ContentFrame=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"ContentFrame");return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};
bbbfly.morph.InputFrame=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"InputFrame");return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};bbbfly.morph.ContentSeparator=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);ng_MergeDef(a,{ControlsPanel:null,Methods:{GetFrame:bbbfly.morph.line._getFrame}});bbbfly.morph.misc.ApplyClassName(a,"ContentSeparator");return ngCreateControlAsType(a,"bbbfly.Line",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_panel={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentPanel",bbbfly.morph.ContentPanel);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentFrame",bbbfly.morph.ContentFrame);bbbfly.Morph.RegisterControlType("bbbfly.morph.InputFrame",bbbfly.morph.InputFrame);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentSeparator",bbbfly.morph.ContentSeparator)}};
