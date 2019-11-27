/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.misc={};bbbfly.morph.misc._getClassName=function(a){var b=this.ClassName;if(!String.isString(b))return"";String.isString(a)&&(b+=a);(a=bbbfly.Morph.GetTheme(this.Theme))&&String.isString(a.Prefix)&&(b=a.Prefix+b);switch(this.Shade){case bbbfly.Morph.shade.light:b+="Light";break;case bbbfly.Morph.shade.dark:b+="Dark"}return b};
bbbfly.morph.misc._getFrame=function(){var a=Function.isFunction(this.GetFrame.callParent)?this.GetFrame.callParent():this.Frame;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};bbbfly.morph.misc._getAnchors=function(){var a=Function.isFunction(this.GetAnchors.callParent)?this.GetAnchors.callParent():this.Anchors;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};
bbbfly.morph.misc._getIcon=function(){var a=Function.isFunction(this.GetIcon.callParent)?this.GetIcon.callParent():this.Icon;return bbbfly.morph.misc.GetImgShade(a,this.Shade)};bbbfly.morph.misc.GetImgShade=function(a,b){if(!Object.isObject(a))return null;switch(b){case bbbfly.Morph.shade.light:a=a.Light;break;case bbbfly.Morph.shade.dark:a=a.Dark}return Object.isObject(a)?a:null};bbbfly.morph.misc.ApplyFrameShade=function(a){Object.isObject(a)&&ng_MergeDef(a,{Methods:{GetFrame:bbbfly.morph.misc._getFrame}})};
bbbfly.morph.misc.ApplyAnchorsShade=function(a){Object.isObject(a)&&ng_MergeDef(a,{Methods:{GetAnchors:bbbfly.morph.misc._getAnchors}})};bbbfly.morph.misc.ApplyIconShade=function(a){Object.isObject(a)&&ng_MergeDef(a,{Methods:{GetIcon:bbbfly.morph.misc._getIcon}})};bbbfly.morph.misc.ApplyClassShade=function(a,b){Object.isObject(a)&&ng_MergeDef(a,{Data:{ClassName:b},Methods:{GetClassName:bbbfly.morph.misc._getClassName}})};
