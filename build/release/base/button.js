/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ButtonPanel=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassShade(a,"ButtonPanel");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};bbbfly.morph.ContentButton=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassShade(a,"ContentButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.LargeContentButton=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassShade(a,"LargeContentButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};bbbfly.morph.ContentFlatButton=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassShade(a,"ContentFlatButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.ContentIconButton=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);ng_MergeDef(a,{Data:{AutoSize:bbbfly.Btn.autosize.both},ControlsPanel:null});bbbfly.morph.misc.ApplyClassShade(a,"ContentIconButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.ContentCheckBox=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);ng_MergeDef(a,{Data:{SelectType:bbbfly.Btn.selecttype.both,AutoSize:bbbfly.Btn.autosize.both},ControlsPanel:null});bbbfly.morph.misc.ApplyClassShade(a,"ContentCheckBox");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.ContentRadioButton=function(a,b,c){bbbfly.morph.misc.ApplyIconShade(a);bbbfly.morph.misc.ApplyFrameShade(a);ng_MergeDef(a,{Data:{SelectType:bbbfly.Btn.selecttype.both,AutoSize:bbbfly.Btn.autosize.both},ControlsPanel:null});bbbfly.morph.misc.ApplyClassShade(a,"ContentRadioButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_button={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ButtonPanel",bbbfly.morph.ButtonPanel);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentButton",bbbfly.morph.ContentButton);bbbfly.Morph.RegisterControlType("bbbfly.morph.LargeContentButton",bbbfly.morph.LargeContentButton);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentFlatButton",bbbfly.morph.ContentFlatButton);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentIconButton",bbbfly.morph.ContentIconButton);
bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentCheckBox",bbbfly.morph.ContentCheckBox);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentRadioButton",bbbfly.morph.ContentRadioButton)}};
