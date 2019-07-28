/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ButtonPanel=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"ButtonPanel");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};bbbfly.morph.ContentButton=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"ContentButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.ContentLink=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"ContentLink");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};bbbfly.morph.LargeContentButton=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"LargeContentButton");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};
bbbfly.morph.ContentIcon=function(a,b,c){bbbfly.morph.misc.ApplyFrameShade(a);bbbfly.morph.misc.ApplyClassName(a,"ContentIcon");return ngCreateControlAsType(a,"bbbfly.Btn",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_button={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ButtonPanel",bbbfly.morph.ButtonPanel);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentButton",bbbfly.morph.ContentButton);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentLink",bbbfly.morph.ContentLink);bbbfly.Morph.RegisterControlType("bbbfly.morph.LargeContentButton",bbbfly.morph.LargeContentButton);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentIcon",bbbfly.morph.ContentIcon)}};
