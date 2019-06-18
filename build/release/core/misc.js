/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.misc={};bbbfly.morph.misc._getClassName=function(a){var b=this.GetClassName.callParent(a);if(!String.isString(a))return b;if(String.isString(b))switch(this.Shade){case bbbfly.Morph.shade.light:b+="Light";break;case bbbfly.Morph.shade.dark:b+="Dark"}return b};
bbbfly.morph.misc._getFrame=function(){var a=this.Frame;if(Object.isObject(a))switch(this.Shade){case bbbfly.Morph.shade.light:a=a.Light;break;case bbbfly.Morph.shade.dark:a=a.Dark}return Object.isObject(a)?a:{}};bbbfly.morph.misc.ApplyShade=function(a){Object.isObject(a)&&ng_MergeDef(a,{Methods:{GetClassName:bbbfly.morph.misc._getClassName}})};bbbfly.morph.misc.ApplyFrameShade=function(a){Object.isObject(a)&&(ng_MergeDef(a,{Methods:{GetFrame:bbbfly.morph.misc._getFrame}}),bbbfly.morph.misc.ApplyShade(a))};
