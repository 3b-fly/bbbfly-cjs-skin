/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ContentFrame=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};bbbfly.morph.MemoFrame=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};bbbfly.morph.Separator=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Line",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_panel={OnInit:function(){ngRegisterControlType("bbbfly.morph.ContentFrame",bbbfly.morph.ContentFrame);ngRegisterControlType("bbbfly.morph.TextFrame",bbbfly.morph.TextFrame);ngRegisterControlType("bbbfly.morph.Separator",bbbfly.morph.Separator)}};
