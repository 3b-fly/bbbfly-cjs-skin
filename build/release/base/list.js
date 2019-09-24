/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.list={};bbbfly.morph.checklist={};bbbfly.morph.list._onGetRowClassName=function(a,b){var c="Row",d=a.BaseClassName;String.isString(d)||(d="");if(b.H||a.ItemHeight)c+=" "+d+"FixedH";b.Static&&(c+=" "+d+"Static");return c+(" "+d+"Row")};bbbfly.morph.list._onGetTreeImg=function(){var a=Function.isFunction(this.OnGetTreeImg.callParent)?this.OnGetTreeImg.callParent():this.TreeImg;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};
bbbfly.morph.list._onGetCheckImg=function(a,b){if(!this.ShowCheckboxes||!b||"undefined"===typeof b.Checked)return null;a=Function.isFunction(this.OnGetCheckImg.callParent)?this.OnGetCheckImg.callParent(a,b):this.CheckImg;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};bbbfly.morph.checklist._onListClick=function(a){var b=a.list;a.timeStamp!==b._last_click_timestamp&&(b._last_click_timestamp=a.timeStamp,b.CheckItem(a.listItem,!a.listItem.Checked));return!1};
bbbfly.morph.ContentList=function(a,b,c){bbbfly.morph.ngmisc.ApplyFrameShade(a);ng_MergeDef(a,{Events:{OnGetRowClassName:bbbfly.morph.list._onGetRowClassName},OverrideEvents:{OnGetTreeImg:bbbfly.morph.list._onGetTreeImg,OnGetCheckImg:bbbfly.morph.list._onGetCheckImg}});bbbfly.morph.ngmisc.ApplyClassShade(a,"ContentList");return ngCreateControlAsType(a,"bbbfly.List",b,c)};
bbbfly.morph.ContentCheckList=function(a,b,c){ng_MergeDef(a,{Data:{ShowCheckboxes:!0},Events:{OnClick:bbbfly.morph.checklist._onListClick}});return ngCreateControlAsType(a,"bbbfly.morph.ContentList",b,c)};bbbfly.morph.ContentTreeList=function(a,b,c){return ngCreateControlAsType(a,"bbbfly.morph.ContentList",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_list={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentList",bbbfly.morph.ContentList);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentCheckList",bbbfly.morph.ContentCheckList);bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentTreeList",bbbfly.morph.ContentTreeList)}};
