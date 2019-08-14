/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.PopupMenu=function(a,b,c){bbbfly.morph.ngmisc.ApplyFrameShade(a);ng_MergeDef(a,{Data:{SubMenuDef:{Type:"bbbfly.morph.PopupMenu"}}});bbbfly.morph.ngmisc.ApplyClassShade(a,"PopupMenu");return ngCreateControlAsType(a,"bbbfly.Menu",b,c)};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_menu={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.PopupMenu",bbbfly.morph.PopupMenu)}};
