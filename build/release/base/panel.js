/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ContentPanel=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Panel",b,c)};bbbfly.morph.ContentFrame=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};bbbfly.morph.InputFrame=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};bbbfly.morph.Separator=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.Line",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_panel={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentFrame",bbbfly.morph.ContentFrame);bbbfly.Morph.RegisterControlType("bbbfly.morph.InputFrame",bbbfly.morph.InputFrame);bbbfly.Morph.RegisterControlType("bbbfly.morph.Separator",bbbfly.morph.Separator)}};
