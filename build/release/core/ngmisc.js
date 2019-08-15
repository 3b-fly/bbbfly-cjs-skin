/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ngmisc={};bbbfly.morph.ngmisc._updateClassName=function(a){this.BaseClassName=this.GetClassName();var b=this.Elm();if(b){var d=b.className,e=d.indexOf(" "),c=this.BaseClassName;String.isString(c)||(c="");0<=e&&(c+=d.substr(e));b.className=c}return this.Update.callParent(a)};bbbfly.morph.ngmisc._updateFrame=function(a){this.Frame=bbbfly.morph.misc.GetImgShade(this.ShadeFrame,this.Shade);return this.Update.callParent(a)};
bbbfly.morph.ngmisc.ApplyFrameShade=function(a){Object.isObject(a)&&ng_MergeDef(a,{Data:{ShadeFrame:null},Methods:{Update:bbbfly.morph.ngmisc._updateFrame}})};bbbfly.morph.ngmisc.ApplyClassShade=function(a,b){Object.isObject(a)&&(bbbfly.morph.misc.ApplyClassShade(a,b),ng_MergeDef(a,{className:b,Methods:{Update:bbbfly.morph.ngmisc._updateClassName}}))};
