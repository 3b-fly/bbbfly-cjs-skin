/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ngmisc={};bbbfly.morph.ngmisc._updateClassName=function(b){this.BaseClassName=this.GetClassName();var a=this.Elm();if(a){var d=a.className,e=d.indexOf(" "),c=this.BaseClassName;String.isString(c)||(c="");0<=e&&(c+=d.substr(e));a.className=c}return this.Update.callParent(b)};
bbbfly.morph.ngmisc._updateFrame=function(b){var a=this.ShadeFrame;if(Object.isObject(a))switch(this.Shade){case bbbfly.Morph.shade.light:a=a.Light;break;case bbbfly.Morph.shade.dark:a=a.Dark}this.Frame=Object.isObject(a)?a:null;return this.Update.callParent(b)};bbbfly.morph.ngmisc.ApplyFrameShade=function(b){Object.isObject(b)&&ng_MergeDef(b,{Data:{ShadeFrame:null},Methods:{Update:bbbfly.morph.ngmisc._updateFrame}})};
bbbfly.morph.ngmisc.ApplyClassShade=function(b,a){Object.isObject(b)&&(bbbfly.morph.misc.ApplyClassShade(b,a),ng_MergeDef(b,{className:a,Methods:{Update:bbbfly.morph.ngmisc._updateClassName}}))};
