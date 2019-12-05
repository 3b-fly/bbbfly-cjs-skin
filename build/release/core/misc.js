/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.misc={};bbbfly.morph.misc._getClassName=function(a){var b=this.ClassName;if(!String.isString(b))return"";String.isString(a)&&(b+=a);(a=bbbfly.Morph.GetTheme(this.Theme))&&String.isString(a.Prefix)&&(b=a.Prefix+b);return b};bbbfly.morph.misc.ApplyClassName=function(a,b){Object.isObject(a)&&ng_MergeDef(a,{Data:{ClassName:b},Methods:{GetClassName:bbbfly.morph.misc._getClassName}})};
