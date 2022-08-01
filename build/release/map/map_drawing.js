/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.2
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.map=bbbfly.morph.map||{};bbbfly.morph.map.drawing=bbbfly.morph.map.drawing||{};bbbfly.morph.map.drawing.Icon=bbbfly.object.Extend(bbbfly.MapDrawingItem.IconStyle,function(a,b){bbbfly.MapDrawingItem.IconStyle.call(this);this.MorphTheme=this.MorphOptions=null;Object.isObject(a)&&(this.MorphOptions=a);String.isString(b)&&(this.MorphTheme=b);bbbfly.Morph.OnCreateObject(this)});
bbbfly.morph.map.drawing.Geometry=bbbfly.object.Extend(bbbfly.MapDrawingItem.GeometryStyle,function(a,b){bbbfly.MapDrawingItem.GeometryStyle.call(this);this.MorphTheme=this.MorphOptions=null;Object.isObject(a)&&(this.MorphOptions=a);String.isString(b)&&(this.MorphTheme=b);bbbfly.Morph.OnCreateObject(this)});ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_map_style={OnInit:function(){bbbfly.Morph.RegisterObjectType("bbbfly.morph.map.drawing.Icon",bbbfly.morph.map.drawing.Icon);bbbfly.Morph.RegisterObjectType("bbbfly.morph.map.drawing.Geometry",bbbfly.morph.map.drawing.Geometry)}};
