/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.menu={};bbbfly.morph.menu._onGetTreeImg=function(){var a=Function.isFunction(this.OnGetTreeImg.callParent)?this.OnGetTreeImg.callParent():this.TreeImg;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};
bbbfly.morph.menu._onGetCheckImg=function(a,b){if(!this.ShowCheckboxes||!b||"undefined"===typeof b.Checked)return null;a=Function.isFunction(this.OnGetCheckImg.callParent)?this.OnGetCheckImg.callParent(a,b):this.CheckImg;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};bbbfly.morph.menu._onGetSubMenuImg=function(){var a=Function.isFunction(this.OnGetSubMenuImg.callParent)?this.OnGetSubMenuImg.callParent():this.SubMenuImg;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};
bbbfly.morph.PopupMenu=function(a,b,c){a=a||{};bbbfly.morph.ngmisc.ApplyFrameShade(a);ng_MergeDef(a,{Data:{SubMenuDef:{Type:"bbbfly.morph.PopupMenu"}},OverrideEvents:{OnGetTreeImg:bbbfly.morph.menu._onGetTreeImg,OnGetCheckImg:bbbfly.morph.menu._onGetCheckImg,OnGetSubMenuImg:bbbfly.morph.menu._onGetSubMenuImg}});bbbfly.morph.ngmisc.ApplyClassShade(a,"PopupMenu");return ngCreateControlAsType(a,"bbbfly.Menu",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_menu={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.PopupMenu",bbbfly.morph.PopupMenu)}};
