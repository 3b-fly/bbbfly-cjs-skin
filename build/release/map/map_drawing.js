/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.map=bbbfly.morph.map||{};bbbfly.morph.map.drawing=bbbfly.morph.map.drawing||{};bbbfly.morph.map.drawing.icon={};
bbbfly.morph.map.drawing.icon._getClassName=function(){var b=this.GetClassName.callParent(),a=this.MorphOptions;Object.isObject(a)&&(String.isString(a.Color)&&(b+=" "+this.GetClassName.callParent("_"+a.Color)),String.isString(a.Size)&&(b+=" "+this.GetClassName.callParent("_"+a.Size)),String.isString(a.Shape)&&(b+=" "+this.GetClassName.callParent("_"+a.Shape)));return b};
bbbfly.morph.map.drawing.Icon=bbbfly.object.Extend(bbbfly.MapDrawingItem.IconStyle,function(b,a){bbbfly.MapDrawingItem.IconStyle.call(this);this.MorphTheme=this.MorphOptions=null;Object.isObject(b)&&(this.MorphOptions=b);String.isString(a)&&(this.MorphTheme=a);bbbfly.morph.misc.ApplyObjectClassName(this,"Icon");ng_OverrideMethod(this,"GetClassName",bbbfly.morph.map.drawing.icon._getClassName);bbbfly.Morph.OnCreateObject(this)});
bbbfly.morph.map.drawing.Geometry=bbbfly.object.Extend(bbbfly.MapDrawingItem.GeometryStyle,function(b,a){bbbfly.MapDrawingItem.GeometryStyle.call(this);this.MorphTheme=this.MorphOptions=null;Object.isObject(b)&&(this.MorphOptions=b);String.isString(a)&&(this.MorphTheme=a);bbbfly.morph.misc.ApplyObjectClassName(this,"Geometry");bbbfly.Morph.OnCreateObject(this)});ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_map_style={OnInit:function(){bbbfly.Morph.RegisterObjectType("bbbfly.morph.map.drawing.Icon",bbbfly.morph.map.drawing.Icon);bbbfly.Morph.RegisterObjectType("bbbfly.morph.map.drawing.Geometry",bbbfly.morph.map.drawing.Geometry)}};
